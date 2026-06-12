"use client";

import { useRef, useState } from "react";
import type { ChangeEvent, FocusEvent, FormEvent } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
    errors[field]
      ? "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/30"
      : "";

  const contactDetails = [
    {
      label: "Email",
      value: "nicolasfedericodelgado@gmail.com",
      href: "mailto:nicolasfedericodelgado@gmail.com",
      icon: Mail,
    },
    {
      label: "GitHub",
      value: "github.com/nicodelgaaado",
      href: "https://github.com/nicodelgaaado",
      icon: Github,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/nicodelgaaado",
      href: "https://www.linkedin.com/in/nicodelgaaado",
      icon: Linkedin,
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <div className="mb-12 sm:mb-16">
        <span className="eyebrow">Contact</span>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Get in touch</h1>
        <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Let&apos;s collaborate on your next project or discuss opportunities.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-12">
        <div className="flex flex-col gap-4">
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Whether you have a project in mind, a question, or just want to say hello, my inbox is
            always open. I&apos;ll do my best to get back to you.
          </p>
          <div className="mt-2 flex flex-col gap-3">
            {contactDetails.map((detail) => (
              <a
                key={detail.label}
                href={detail.href}
                target={detail.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={detail.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="surface-soft-hover group flex items-center gap-4 rounded-xl border border-border-subtle bg-surface p-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-primary">
                  <detail.icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {detail.label}
                  </span>
                  <span className="block truncate text-sm font-medium">{detail.value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <Card className="border-border-subtle">
          <CardContent className="p-6 sm:p-8">
            <h2 className="mb-6 text-xl font-semibold tracking-tight">Send a message</h2>
            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
              <input type="hidden" name="from_name" value="Portfolio Website" />
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-medium">
                  Name
                </label>
                <Input
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
                  placeholder="Your name"
                />
                {errors.name && (
                  <p id="contact-name-error" className="mt-2 text-sm text-destructive">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <Input
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
                  <p id="contact-email-error" className="mt-2 text-sm text-destructive">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="contact-subject" className="mb-2 block text-sm font-medium">
                  Subject
                </label>
                <Input
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
                  <p id="contact-subject-error" className="mt-2 text-sm text-destructive">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <Textarea
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
                  <p id="contact-message-error" className="mt-2 text-sm text-destructive">
                    {errors.message}
                  </p>
                )}
              </div>

              {submitStatus.type !== "idle" && (
                <p
                  className={`rounded-lg border p-3 text-sm ${
                    submitStatus.type === "success"
                      ? "border-primary/30 bg-[var(--accent-soft)] text-primary"
                      : "border-destructive/30 bg-destructive/10 text-destructive"
                  }`}
                  role="status"
                >
                  {submitStatus.message}
                </p>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-auto w-full rounded-full px-6 py-3 text-sm font-medium"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
