"use client";

import { KeyboardEvent, useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

type CategoryOption = {
  value: string;
  label: string;
};

type CategoryDropdownProps = {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  options: CategoryOption[];
  error?: string;
  onChange: (value: string) => void;
};

export function CategoryDropdown({
  id,
  label,
  placeholder,
  value,
  options,
  error,
  onChange,
}: CategoryDropdownProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const labelId = `${id}-label`;
  const errorId = `${id}-error`;
  const selectedIndex = options.findIndex((option) => option.value === value);
  const selected = selectedIndex >= 0 ? options[selectedIndex] : undefined;

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [open]);

  function openList(index = selectedIndex >= 0 ? selectedIndex : 0) {
    setActiveIndex(index);
    setOpen(true);
  }

  function choose(next: string) {
    onChange(next);
    setOpen(false);
    document.getElementById(id)?.focus();
  }

  function onTriggerKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "Escape") {
      if (!open) return;
      event.preventDefault();
      setOpen(false);
      return;
    }

    if (event.key === "Tab") {
      setOpen(false);
      return;
    }

    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      if (!open) {
        openList();
        return;
      }
      const delta = event.key === "ArrowDown" ? 1 : -1;
      setActiveIndex((index) => (index + delta + options.length) % options.length);
      return;
    }

    if (event.key === "Home") {
      event.preventDefault();
      if (!open) openList(0);
      else setActiveIndex(0);
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      const last = options.length - 1;
      if (!open) openList(last);
      else setActiveIndex(last);
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (!open) {
        openList();
        return;
      }
      const option = options[activeIndex];
      if (option) choose(option.value);
    }
  }

  const activeOption = options[activeIndex];

  return (
    <div ref={rootRef} className={`float-field category-field${error ? " has-error" : ""}`}>
      <label id={labelId} htmlFor={id} className="is-floated">
        {label}
      </label>
      <div className="category-control">
        <button
          id={id}
          type="button"
          className={`category-trigger${selected ? "" : " is-placeholder"}`}
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listId}
          aria-labelledby={`${labelId} ${id}`}
          aria-invalid={Boolean(error) || undefined}
          aria-describedby={error ? errorId : undefined}
          aria-autocomplete="none"
          aria-activedescendant={open && activeOption ? `${id}-option-${activeOption.value}` : undefined}
          onClick={() => (open ? setOpen(false) : openList())}
          onKeyDown={onTriggerKeyDown}
        >
          <span>{selected ? selected.label : placeholder}</span>
          <ChevronDown className="category-chevron" strokeWidth={1.75} aria-hidden />
        </button>
        {open ? (
          <ul id={listId} role="listbox" aria-labelledby={labelId} className="category-list">
            {options.map((option, index) => {
              const isSelected = option.value === value;
              const isActive = index === activeIndex;
              return (
                <li
                  key={option.value}
                  id={`${id}-option-${option.value}`}
                  role="option"
                  aria-selected={isSelected}
                  className={`category-option${isActive ? " is-active" : ""}${isSelected ? " is-selected" : ""}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseDown={(event) => {
                    event.preventDefault();
                    choose(option.value);
                  }}
                >
                  {option.label}
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
      {error ? (
        <p id={errorId} className="field-error" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
