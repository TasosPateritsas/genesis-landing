"use client";

import { FormEvent, useRef, useState } from "react";
import { Check } from "lucide-react";
import Link from "next/link";
import { CategoryDropdown } from "@/components/CategoryDropdown";
import { submitContactInquiry } from "@/lib/submitContactInquiry";
import { useLocale, useLocalizedPath } from "@/i18n/LocaleProvider";

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

export function ContactForm() {
  const { t } = useLocale();
  const hrefFor = useLocalizedPath();
  const page = t.contactPage.form;
  const [fields, setFields] = useState<Fields>(EMPTY_FIELDS);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const submitting = useRef(false);
  const startedAt = useRef(Date.now());
  const honeypot = useRef<HTMLInputElement>(null);

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
  }

  function resetForm() {
    setFields(EMPTY_FIELDS);
    setErrors({});
    setStatus("idle");
    window.requestAnimationFrame(() => {
      document.getElementById("firstName")?.focus();
    });
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
        company_website: honeypot.current?.value ?? "",
        startedAt: startedAt.current,
      });
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      submitting.current = false;
    }
  }

  if (status === "success") {
    return (
      <div className="contact-success" role="status">
        <div className="contact-success-icon" aria-hidden>
          <Check strokeWidth={2.25} />
        </div>
        <p className="contact-success-title">{page.successTitle}</p>
        <p className="contact-success-body">{page.successBody}</p>
        <button type="button" className="contact-success-again" onClick={resetForm}>
          {page.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
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

      <CategoryDropdown
        id="category"
        label={page.category}
        placeholder={page.categoryPlaceholder}
        value={fields.category}
        options={page.categories}
        error={errors.category}
        onChange={(value) => updateField("category", value)}
      />

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

      <div className="contact-honeypot" aria-hidden="true">
        <label htmlFor="company_website">Website</label>
        <input
          ref={honeypot}
          id="company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>

      <button
        type="submit"
        className={`contact-submit${status === "loading" ? " is-loading" : ""}`}
        disabled={status === "loading"}
        aria-busy={status === "loading"}
      >
        {status === "loading" ? <span className="contact-spinner" aria-hidden /> : null}
        {status === "loading" ? page.sending : page.submit}
      </button>

      <p className="contact-form-privacy">
        {page.privacyBefore}
        <Link href={hrefFor("/privacy")}>{page.privacyLink}</Link>
        {page.privacyAfter}
      </p>

      {status === "error" ? (
        <p className="contact-feedback is-error" role="alert">
          {page.error}
        </p>
      ) : null}
    </form>
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
    <div className={`float-field${multiline ? " is-multiline" : ""}${error ? " has-error" : ""}`}>
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
