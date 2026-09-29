"use client";

import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { Calendar } from "lucide-react";
import { submitContactInquiry } from "@/lib/submitContactInquiry";
import { useLocale } from "@/i18n/LocaleProvider";

type Tab = "message" | "booking";

type Fields = {
  firstName: string;
  lastName: string;
  email: string;
  category: string;
  otherNeed: string;
  description: string;
};

type FieldName = keyof Fields;
type Errors = Partial<Record<FieldName, string>>;
type Status = "idle" | "loading" | "success" | "error";

const EMPTY_FIELDS: Fields = {
  firstName: "",
  lastName: "",
  email: "",
  category: "",
  otherNeed: "",
  description: "",
};

const FOCUS_ORDER: FieldName[] = [
  "firstName",
  "lastName",
  "email",
  "category",
  "otherNeed",
  "description",
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function tabFromHash(): Tab {
  return window.location.hash === "#booking" ? "booking" : "message";
}

export function ContactForm() {
  const { t } = useLocale();
  const page = t.contactPage;
  const [tab, setTab] = useState<Tab>("message");
  const [fields, setFields] = useState<Fields>(EMPTY_FIELDS);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const submitting = useRef(false);

  useEffect(() => {
    const sync = () => setTab(tabFromHash());
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  function selectTab(next: Tab) {
    setTab(next);
    const url = new URL(window.location.href);
    url.hash = next === "booking" ? "booking" : "";
    window.history.replaceState(null, "", url);
  }

  function onTabKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const order: Tab[] = ["message", "booking"];
    const index = order.indexOf(tab);
    let next: Tab | null = null;

    if (event.key === "ArrowRight") next = order[(index + 1) % order.length];
    if (event.key === "ArrowLeft") next = order[(index - 1 + order.length) % order.length];
    if (event.key === "Home") next = "message";
    if (event.key === "End") next = "booking";
    if (!next) return;

    event.preventDefault();
    selectTab(next);
    document.getElementById(next === "message" ? "contact-tab-message" : "contact-tab-booking")?.focus();
  }

  function updateField(name: FieldName, value: string) {
    setFields((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      if (!current[name] && !(name === "category" && value !== "other" && current.otherNeed)) {
        return current;
      }
      const next = { ...current, [name]: undefined };
      if (name === "category" && value !== "other") next.otherNeed = undefined;
      return next;
    });
    if (status === "error" || status === "success") setStatus("idle");
  }

  function validate(current: Fields): Errors {
    const next: Errors = {};
    if (!current.firstName.trim()) next.firstName = page.errors.firstName;
    if (!current.lastName.trim()) next.lastName = page.errors.lastName;
    if (!current.email.trim()) next.email = page.errors.emailRequired;
    else if (!EMAIL_PATTERN.test(current.email.trim())) next.email = page.errors.emailInvalid;
    if (!current.category) next.category = page.errors.category;
    if (current.category === "other" && !current.otherNeed.trim()) next.otherNeed = page.errors.other;
    if (!current.description.trim()) next.description = page.errors.description;
    return next;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;

    const nextErrors = validate(fields);
    setErrors(nextErrors);
    const firstInvalid = FOCUS_ORDER.find((name) => nextErrors[name]);
    if (firstInvalid) {
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    submitting.current = true;
    setStatus("loading");

    try {
      await submitContactInquiry({
        firstName: fields.firstName.trim(),
        lastName: fields.lastName.trim(),
        email: fields.email.trim(),
        category: fields.category,
        otherNeed: fields.category === "other" ? fields.otherNeed.trim() : undefined,
        description: fields.description.trim(),
      });
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      submitting.current = false;
    }
  }

  const messageTabId = "contact-tab-message";
  const bookingTabId = "contact-tab-booking";

  return (
    <div className="contact-card">
      <div
        className="contact-tabs"
        role="tablist"
        aria-label={page.heading}
        onKeyDown={onTabKeyDown}
      >
        <button
          id={messageTabId}
          type="button"
          role="tab"
          aria-selected={tab === "message"}
          aria-controls="contact-panel-message"
          tabIndex={tab === "message" ? 0 : -1}
          onClick={() => selectTab("message")}
        >
          {page.tabMessage}
        </button>
        <button
          id={bookingTabId}
          type="button"
          role="tab"
          aria-selected={tab === "booking"}
          aria-controls="contact-panel-booking"
          tabIndex={tab === "booking" ? 0 : -1}
          onClick={() => selectTab("booking")}
        >
          {page.tabBooking}
        </button>
      </div>

      {tab === "message" ? (
        <div
          id="contact-panel-message"
          role="tabpanel"
          aria-labelledby={messageTabId}
          className="mt-5"
        >
          <form onSubmit={onSubmit} noValidate>
            <div className="contact-name-row">
              <FloatField
                id="firstName"
                name="firstName"
                label={page.firstName}
                value={fields.firstName}
                error={errors.firstName}
                autoComplete="given-name"
                onChange={updateField}
              />
              <FloatField
                id="lastName"
                name="lastName"
                label={page.lastName}
                value={fields.lastName}
                error={errors.lastName}
                autoComplete="family-name"
                onChange={updateField}
              />
            </div>

            <FloatField
              id="email"
              name="email"
              type="email"
              label={page.email}
              value={fields.email}
              error={errors.email}
              autoComplete="email"
              onChange={updateField}
            />

            <div className={`float-field${errors.category ? " has-error" : ""}`}>
              <select
                id="category"
                name="category"
                className={fields.category ? undefined : "is-placeholder"}
                value={fields.category}
                aria-invalid={Boolean(errors.category)}
                aria-describedby={errors.category ? "category-error" : undefined}
                onChange={(event) => updateField("category", event.target.value)}
              >
                <option value="" disabled hidden>
                  {page.categoryPlaceholder}
                </option>
                {page.categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
              <label htmlFor="category" className="is-floated">
                {page.category}
              </label>
              {errors.category ? (
                <p id="category-error" className="field-error" role="alert">
                  {errors.category}
                </p>
              ) : null}
            </div>

            {fields.category === "other" ? (
              <div className="other-reveal">
                <FloatField
                  id="otherNeed"
                  name="otherNeed"
                  label={page.otherLabel}
                  value={fields.otherNeed}
                  error={errors.otherNeed}
                  onChange={updateField}
                />
              </div>
            ) : null}

            <FloatField
              id="description"
              name="description"
              label={page.description}
              value={fields.description}
              error={errors.description}
              multiline
              onChange={updateField}
            />

            <button
              type="submit"
              className="contact-submit"
              disabled={status === "loading"}
              aria-busy={status === "loading"}
            >
              {status === "loading" ? page.sending : page.submit}
            </button>

            {status === "success" ? (
              <p className="contact-feedback is-success" role="status">
                {page.success}
              </p>
            ) : null}
            {status === "error" ? (
              <p className="contact-feedback is-error" role="alert">
                {page.error}
              </p>
            ) : null}
          </form>
        </div>
      ) : (
        <div
          id="contact-panel-booking"
          role="tabpanel"
          aria-labelledby={bookingTabId}
          className="mt-5"
        >
          <div id="booking" className="booking-placeholder">
            <Calendar className="booking-placeholder-icon" strokeWidth={1.5} aria-hidden />
            <p className="booking-placeholder-title">{page.bookingTitle}</p>
            <p className="booking-placeholder-note">{page.bookingNote}</p>
          </div>
        </div>
      )}
    </div>
  );
}

type FloatFieldProps = {
  id: string;
  name: FieldName;
  label: string;
  value: string;
  error?: string;
  type?: string;
  autoComplete?: string;
  multiline?: boolean;
  onChange: (name: FieldName, value: string) => void;
};

function FloatField({
  id,
  name,
  label,
  value,
  error,
  type = "text",
  autoComplete,
  multiline = false,
  onChange,
}: FloatFieldProps) {
  const errorId = `${id}-error`;
  const describedBy = error ? errorId : undefined;

  return (
    <div className={`float-field${error ? " has-error" : ""}`}>
      {multiline ? (
        <textarea
          id={id}
          name={name}
          value={value}
          placeholder=" "
          rows={5}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          onChange={(event) => onChange(name, event.target.value)}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          placeholder=" "
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          onChange={(event) => onChange(name, event.target.value)}
        />
      )}
      <label htmlFor={id}>{label}</label>
      {error ? (
        <p id={errorId} className="field-error" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
