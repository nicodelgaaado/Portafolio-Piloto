"use client";

import { useRef, useState } from "react";
import type { ChangeEvent, FocusEvent, FormEvent } from "react";

const WEB3FORMS_ACCESS_KEY = "5342442e-a24c-45ca-ba64-76ed99bed7ba";
const namePattern = /^[\p{L}\p{M}\s'.-]+$/u;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type SubmitStatus = {
  type: "idle" | "success" | "error";
  message: string;
};

type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ContactFormErrors = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ContactField = keyof ContactFormValues;

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const initialErrors: ContactFormErrors = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>(initialErrors);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({
    type: "idle",
    message: "",
  });
  const fieldRefs = useRef<{
    name: HTMLInputElement | null;
    email: HTMLInputElement | null;
    subject: HTMLInputElement | null;
    message: HTMLTextAreaElement | null;
  }>({
    name: null,
    email: null,
    subject: null,
    message: null,
  });

  const trimValue = (value: string) => value.trim();

  const validateName = (value: string) => {
    const trimmedValue = trimValue(value);

    if (!trimmedValue) {
      return "Name is required.";
    }

    if (trimmedValue.length < 2 || trimmedValue.length > 60) {
      return "Name must be between 2 and 60 characters.";
    }

    if (!namePattern.test(trimmedValue)) {
      return "Name can only include letters, spaces, apostrophes, periods, and hyphens.";
    }

    return "";
  };

  const validateEmail = (value: string) => {
    const trimmedValue = trimValue(value);

    if (!trimmedValue) {
      return "Email is required.";
    }

    if (trimmedValue.length > 254) {
      return "Email must be 254 characters or fewer.";
    }

    if (!emailPattern.test(trimmedValue)) {
      return "Enter a valid email address.";
    }

    return "";
  };

  const validateSubject = (value: string) => {
    const trimmedValue = trimValue(value);

    if (!trimmedValue) {
      return "Subject is required.";
    }

    if (trimmedValue.length < 4 || trimmedValue.length > 100) {
      return "Subject must be between 4 and 100 characters.";
    }

    return "";
  };

  const validateMessage = (value: string) => {
    const trimmedValue = trimValue(value);

    if (!trimmedValue) {
      return "Message is required.";
    }

    if (trimmedValue.length < 20 || trimmedValue.length > 2000) {
      return "Message must be between 20 and 2000 characters.";
    }

    return "";
  };

  const validateField = (field: ContactField, value: string) => {
    switch (field) {
      case "name":
        return validateName(value);
      case "email":
        return validateEmail(value);
      case "subject":
        return validateSubject(value);
      case "message":
        return validateMessage(value);
      default:
        return "";
    }
  };

  const getTrimmedValues = (currentValues: ContactFormValues): ContactFormValues => ({
    name: trimValue(currentValues.name),
    email: trimValue(currentValues.email),
    subject: trimValue(currentValues.subject),
    message: trimValue(currentValues.message),
  });

  const validateForm = (currentValues: ContactFormValues) => {
    const nextErrors: ContactFormErrors = {
      name: validateField("name", currentValues.name),
      email: validateField("email", currentValues.email),
      subject: validateField("subject", currentValues.subject),
      message: validateField("message", currentValues.message),
    };

    setErrors(nextErrors);

    return Object.values(nextErrors).every((error) => error === "");
  };

  const focusFirstInvalidField = (currentErrors: ContactFormErrors) => {
    const fields: ContactField[] = ["name", "email", "subject", "message"];
    const firstInvalidField = fields.find((field) => currentErrors[field]);

    if (firstInvalidField) {
      fieldRefs.current[firstInvalidField]?.focus();
    }
  };

  const setFieldRef =
    (field: ContactField) =>
    (element: HTMLInputElement | HTMLTextAreaElement | null) => {
      if (field === "message") {
        fieldRefs.current.message = element as HTMLTextAreaElement | null;
        return;
      }

      fieldRefs.current[field] = element as HTMLInputElement | null;
    };

  const handleChange =
    (field: ContactField) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const nextValue = event.target.value;

      setValues((currentValues) => ({
        ...currentValues,
        [field]: nextValue,
      }));

      if (submitStatus.type === "success") {
        setSubmitStatus({ type: "idle", message: "" });
      }

      setErrors((currentErrors) => {
        if (!currentErrors[field]) {
          return currentErrors;
        }

        return {
          ...currentErrors,
          [field]: validateField(field, nextValue),
        };
      });
    };

  const handleBlur =
    (field: ContactField) =>
    (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const error = validateField(field, event.target.value);

      setErrors((currentErrors) => ({
        ...currentErrors,
        [field]: error,
      }));
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValid = validateForm(values);

    if (!isValid) {
      setSubmitStatus({ type: "idle", message: "" });
      const nextErrors: ContactFormErrors = {
        name: validateField("name", values.name),
        email: validateField("email", values.email),
        subject: validateField("subject", values.subject),
        message: validateField("message", values.message),
      };
      focusFirstInvalidField(nextErrors);
      return;
    }

    const trimmedValues = getTrimmedValues(values);
    const formData = new FormData();

    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("from_name", "Portfolio Website");
    formData.append("name", trimmedValues.name);
    formData.append("email", trimmedValues.email);
    formData.append("subject", trimmedValues.subject);
    formData.append("message", trimmedValues.message);
    formData.append("botcheck", "");

    setValues(trimmedValues);
    setIsSubmitting(true);
    setSubmitStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const result = (await response.json()) as { message?: string; success?: boolean };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Something went wrong while sending your message.");
      }

      setValues(initialValues);
      setErrors(initialErrors);
      setSubmitStatus({
        type: "success",
        message: "Message sent successfully. I will get back to you soon.",
      });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong while sending your message.";

      setSubmitStatus({
        type: "error",
        message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFieldClassName = (field: ContactField) =>
    `w-full border-2 p-3 font-mono focus:outline-none focus:ring-2 ${
      errors[field]
        ? "border-red-600 focus:ring-red-600"
        : "border-black focus:ring-black"
    }`;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
      <div className="mb-10 sm:mb-12">
        <h1 className="text-4xl font-bold sm:text-5xl">Get In Touch</h1>
        <p className="mt-6 font-mono text-base sm:text-lg">
          Let&apos;s collaborate on your next project or discuss opportunities
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-12">
        <div className="border-2 border-black p-5 sm:p-8">
          <h2 className="mb-6 font-mono text-xl font-bold uppercase sm:text-2xl">Send a Message</h2>
          <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
            <input type="hidden" name="from_name" value="Portfolio Website" />
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

            <div>
              <label htmlFor="contact-name" className="mb-2 block font-mono text-sm uppercase">
                Name
              </label>
              <input
                ref={setFieldRef("name")}
                id="contact-name"
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange("name")}
                onBlur={handleBlur("name")}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
                className={getFieldClassName("name")}
                placeholder="Your Name"
              />
              {errors.name && (
                <p id="contact-name-error" className="mt-2 font-mono text-sm text-red-600">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="contact-email" className="mb-2 block font-mono text-sm uppercase">
                Email
              </label>
              <input
                ref={setFieldRef("email")}
                id="contact-email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange("email")}
                onBlur={handleBlur("email")}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "contact-email-error" : undefined}
                className={getFieldClassName("email")}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p id="contact-email-error" className="mt-2 font-mono text-sm text-red-600">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="contact-subject" className="mb-2 block font-mono text-sm uppercase">
                Subject
              </label>
              <input
                ref={setFieldRef("subject")}
                id="contact-subject"
                name="subject"
                type="text"
                value={values.subject}
                onChange={handleChange("subject")}
                onBlur={handleBlur("subject")}
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? "contact-subject-error" : undefined}
                className={getFieldClassName("subject")}
                placeholder="What's this about?"
              />
              {errors.subject && (
                <p id="contact-subject-error" className="mt-2 font-mono text-sm text-red-600">
                  {errors.subject}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="contact-message" className="mb-2 block font-mono text-sm uppercase">
                Message
              </label>
              <textarea
                ref={setFieldRef("message")}
                id="contact-message"
                name="message"
                rows={6}
                value={values.message}
                onChange={handleChange("message")}
                onBlur={handleBlur("message")}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
                className={`${getFieldClassName("message")} resize-none`}
                placeholder="Your message here..."
              />
              {errors.message && (
                <p id="contact-message-error" className="mt-2 font-mono text-sm text-red-600">
                  {errors.message}
                </p>
              )}
            </div>

            {submitStatus.type !== "idle" && (
              <p
                className={`border-2 p-3 font-mono text-sm ${
                  submitStatus.type === "success"
                    ? "border-black bg-black text-white"
                    : "border-black text-black"
                }`}
                role="status"
              >
                {submitStatus.message}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full border-2 border-black px-6 py-3 font-mono uppercase transition-colors hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-60 sm:py-4"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-6 sm:gap-8 lg:h-full">
          <div className="border-2 border-black p-5 sm:p-8 lg:flex-1">
            <h2 className="mb-6 font-mono text-xl font-bold uppercase sm:text-2xl">Contact Info</h2>
            <div className="space-y-4">
              {[
                { label: "Email", value: "nicolasfedericodelgado@gmail.com" },
                { label: "Location", value: "Pasto, Colombia" },
                { label: "Availability", value: "Open to Opportunities" },
              ].map((item, index) => (
                <div key={index} className="border-b-2 border-black pb-3 last:border-b-0">
                  <div className="mb-1 font-mono text-xs uppercase opacity-60">{item.label}</div>
                  <div className="break-words font-mono">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-2 border-black p-5 sm:p-8 lg:flex-1">
            <h2 className="mb-6 font-mono text-xl font-bold uppercase sm:text-2xl">Connect</h2>
            <div className="space-y-3">
              {[
                {
                  platform: "GitHub",
                  handle: "@nicodelgaaado",
                  href: "https://github.com/nicodelgaaado",
                },
                {
                  platform: "LinkedIn",
                  handle: "@nicodelgaaado",
                  href: "https://www.linkedin.com/in/nicodelgaaado/",
                },
                {
                  platform: "LeetCode",
                  handle: "@nicodelgaaado",
                  href: "https://leetcode.com/u/nicodelgaaado/",
                },
                {
                  platform: "HackerRank",
                  handle: "@nicodelgaaado",
                  href: "https://www.hackerrank.com/profile/nicodelgaaado",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex cursor-pointer flex-col items-start justify-between gap-1 border-2 border-black p-4 transition-colors hover:bg-black hover:text-white sm:flex-row sm:items-center sm:gap-2"
                >
                  <span className="font-mono font-bold">{social.platform}</span>
                  <span className="font-mono text-sm">{social.handle}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
