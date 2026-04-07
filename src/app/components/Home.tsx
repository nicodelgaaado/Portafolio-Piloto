import Image from "next/image";
import { MapPin, Sparkles } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type PassionIllustrationProps = {
  className?: string;
};

function FormulaOneIllustration({ className }: PassionIllustrationProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 72 36"
      className={className}
      fill="none"
      focusable="false"
    >
      <circle cx="20" cy="27" r="6" fill="#161616" />
      <circle cx="52" cy="27" r="6" fill="#161616" />
      <circle cx="20" cy="27" r="2.2" fill="#5B5B5B" />
      <circle cx="52" cy="27" r="2.2" fill="#5B5B5B" />
      <path
        d="M5 25h10.8l9.5-5.5h10.3l4.7-8.1h10l3.4 3.1h7.4V20h-5.2L52 24H35.8l-8.4 3.7H5z"
        fill="#C8102E"
      />
      <path d="M26.3 20h12.8l4.1-6.8h4.7l-2.9 6.8H54V22H34.4l-8.1 3H16.9z" fill="#FF4C5F" />
      <path d="M39.9 11.4h8.6l4.1 3.5H44z" fill="#9E0C24" />
      <path d="M31.9 14.5h6.1l2 4.8h-8.7z" fill="#1F1F1F" />
      <path d="M57.5 14.7h7.1V21h-7.1z" fill="#7A7A7A" />
      <path d="M5 22.4h11.7l6.2-2.8h-11z" fill="#8E0E22" />
      <path d="M14.7 24.2h10.4" stroke="#FFD17A" strokeWidth="1.4" strokeLinecap="round" opacity="0.9" />
    </svg>
  );
}

function TennisIllustration({ className }: PassionIllustrationProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      focusable="false"
    >
      <ellipse
        cx="14.2"
        cy="11.6"
        rx="7.6"
        ry="9"
        transform="rotate(-18 14.2 11.6)"
        fill="#25282D"
      />
      <ellipse
        cx="14.2"
        cy="11.6"
        rx="5.3"
        ry="6.7"
        transform="rotate(-18 14.2 11.6)"
        fill="#F4F6F8"
      />
      <path
        d="m10.4 6.7 7.4 10.4M8.3 10.8l11 5.4M13.2 4.5l2.9 15.2"
        stroke="#C8CDD3"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="m17.7 18.2 6 8.8"
        stroke="#2D3137"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path d="m20.6 22.5 4.4 6.2" stroke="#4A5664" strokeWidth="1.6" strokeLinecap="round" />
      <path d="m22.4 24.7 2.4-1.3" stroke="#B88E5C" strokeWidth="1.8" strokeLinecap="round" />
      <path d="m23.8 26.7 1.5-.8" stroke="#B88E5C" strokeWidth="1.8" strokeLinecap="round" opacity="0.82" />
      <circle cx="25.8" cy="29.1" r="1.2" fill="#111827" />
    </svg>
  );
}

function MusicIllustration({ className }: PassionIllustrationProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      focusable="false"
    >
      <circle cx="16" cy="16" r="11.5" fill="#171717" />
      <circle cx="16" cy="16" r="8.3" stroke="#373737" strokeWidth="1.3" />
      <circle cx="16" cy="16" r="5.4" stroke="#4A4A4A" strokeWidth="1.1" opacity="0.9" />
      <circle cx="16" cy="16" r="2.9" fill="#A66A2C" />
      <circle cx="16" cy="16" r="1" fill="#F6E9D4" />
      <path d="M10.6 8.8a12 12 0 0 1 10.8-2.2" stroke="#717171" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

function GulfstreamIllustration({ className }: PassionIllustrationProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 72 36"
      className={className}
      fill="none"
      focusable="false"
    >
      <path
        d="M6 20.8 28.4 18 48.8 10.3c3.4-1.3 7.2-.2 9.3 2.8l4.2 5.8 3.7 1.3v2.9H51.2l-8.8 5h-5l3.4-5H29l-11.5 4.4h-5.1l5.3-4.4H6z"
        fill="#F4F7FB"
      />
      <path
        d="M6 20.8 28.4 18 48.8 10.3c3.4-1.3 7.2-.2 9.3 2.8l4.2 5.8 3.7 1.3v2.9H51.2l-8.8 5h-5l3.4-5H29l-11.5 4.4h-5.1l5.3-4.4H6z"
        stroke="#94A3B8"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path d="M47.8 10.6 52 5h4l-1.3 6.4z" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1" />
      <path d="M33 17.2h17.6" stroke="#5F89B3" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M52.8 17.5h5.5" stroke="#374151" strokeWidth="1.2" strokeLinecap="round" opacity="0.9" />
      <circle cx="38.2" cy="15.4" r="1" fill="#334155" />
      <circle cx="42" cy="14.6" r="1" fill="#334155" />
      <circle cx="45.8" cy="13.9" r="1" fill="#334155" />
      <circle cx="49.5" cy="13.1" r="1" fill="#334155" />
      <path d="M54.9 15.8 57 18.9" stroke="#64748B" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

export default function Home() {
  const actionItems = [
    {
      label: "Email Me",
      href: "mailto:nicolasfedericodelgado@gmail.com",
      variant: "default" as const,
      className: "px-2 sm:px-5",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nicodelgaaado/",
      target: "_blank",
      variant: "outline" as const,
      className: "px-2 sm:px-5",
    },
    {
      label: "GitHub",
      href: "https://github.com/nicodelgaaado",
      target: "_blank",
      variant: "outline" as const,
      className: "px-2 sm:px-5",
    },
    {
      label: "Resume",
      href: "https://dtiiihvipieempqflzmj.supabase.co/storage/v1/object/public/assets/resume-nicolasdelgado.pdf",
      target: "_blank",
      variant: "outline" as const,
      className: "px-2 sm:px-5",
    },
  ];
  const interests = [
    { label: "Formula 1", Illustration: FormulaOneIllustration },
    { label: "Tennis", Illustration: TennisIllustration },
    { label: "Music", Illustration: MusicIllustration },
    { label: "Traveling", Illustration: GulfstreamIllustration },
  ];
  const testimonials = [
    {
      name: "Nicolas Uribe",
      image:
        "https://dtiiihvipieempqflzmj.supabase.co/storage/v1/object/public/assets/webp-compressed/nicolasuribe-photo.webp",
      quote: "Nicolas stands out for his calm presence, clear communication, and reliability.",
    },
    {
      name: "Daniel Gomez",
      image:
        "https://dtiiihvipieempqflzmj.supabase.co/storage/v1/object/public/assets/webp-compressed/danielgomez-photo.webp",
      quote: "He is thoughtful, easy to trust, and always brings a positive attitude towards others.",
    },
    {
      name: "Luis Rodriguez",
      image:
        "https://dtiiihvipieempqflzmj.supabase.co/storage/v1/object/public/assets/webp-compressed/luisrodriguez-photo.webp",
      quote: "Nicolas is someone people can count on because he is respectful, steady, and grounded.",
    },
  ];
  const contacts = [
    {
      name: "Santiago Lafaurie",
      connection: "Founder",
      image:
        "https://dtiiihvipieempqflzmj.supabase.co/storage/v1/object/public/assets/webp-compressed/santiagolafaurie-photo.webp",
    },
    {
      name: "Sebastian Mejia",
      connection: "Entrepreneur",
      image:
        "https://dtiiihvipieempqflzmj.supabase.co/storage/v1/object/public/assets/webp-compressed/sebastianmejia-photo.webp",
    },
    {
      name: "Saul Kattan",
      connection: "Consultant",
      image:
        "https://dtiiihvipieempqflzmj.supabase.co/storage/v1/object/public/assets/webp-compressed/saulkattan-photo.webp",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <section className="border-b border-border py-12 sm:py-20">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="flex w-full max-w-4xl flex-col items-center gap-6 sm:gap-8 lg:gap-10">
            <div className="relative h-36 w-36 shrink-0 sm:h-48 sm:w-48 lg:h-56 lg:w-56">
              <div className="absolute inset-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-surface shadow-[inset_0_-14px_24px_rgba(3,2,19,0.18),inset_0_1px_0_rgba(255,255,255,0.35)] dark:shadow-[inset_0_-16px_28px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.08)] sm:h-56 sm:w-56 lg:h-64 lg:w-64">
                <Image
                  src="https://dtiiihvipieempqflzmj.supabase.co/storage/v1/object/public/assets/webp-compressed/profile-picture-blur.webp"
                  alt="Portrait of Nicolas Delgado"
                  fill
                  priority
                  sizes="(min-width: 1024px) 16rem, (min-width: 640px) 14rem, 11rem"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-5">
              <h1 className="text-balance text-4xl font-bold leading-none sm:text-5xl lg:text-6xl">
                Nicolas Delgado
              </h1>
              <p className="mx-auto max-w-3xl font-mono text-base leading-relaxed sm:text-lg">
                Full-Stack Software Engineer
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-sm text-muted-foreground">
                <p className="flex items-center gap-1.5 text-foreground">
                  <MapPin className="h-3.5 w-3.5 shrink-0" strokeWidth={2} />
                  Pasto, Colombia
                </p>
                <p className="flex items-center gap-1.5 text-amber-700 dark:text-amber-300">
                  <Sparkles className="h-3.5 w-3.5 shrink-0" strokeWidth={2} />
                  Open to opportunities
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-2 pt-1 sm:gap-4">
                {actionItems.map((item) => (
                  <Button
                    key={item.label}
                    asChild
                    variant={item.variant}
                    className={`h-auto whitespace-nowrap py-2 text-center font-mono text-[10px] uppercase sm:text-xs ${item.className}`}
                  >
                    <a
                      href={item.href}
                      target={item.target}
                      rel={item.target === "_blank" ? "noreferrer" : undefined}
                    >
                      {item.label}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-12 sm:py-20">
        <h2 className="mb-8 font-mono text-2xl font-bold uppercase sm:text-3xl">About Me</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {[
            {
              title: "Education",
              content: "Universidad Cooperativa de Colombia\nSoftware Engineering, B.S.",
            },
            {
              title: "Focus Areas",
              content: "Full-stack Development, Machine Learning, Cloud Computing",
            },
            {
              title: "Interests",
              content: "Open Source, Web3, Competitive Programming",
            },
          ].map((item, index) => (
            <Card key={index} className="surface-soft-hover">
              <CardContent className="p-5 sm:p-6">
                <h3 className="mb-4 font-mono text-lg font-bold uppercase">{item.title}</h3>
                <p className="whitespace-pre-line font-mono text-sm">{item.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-12 sm:py-20">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          {[
            { number: "15+", label: "Projects" },
            { number: "3", label: "Experiences" },
            { number: "500+", label: "Git Commits" },
            { number: "10", label: "Technologies" },
          ].map((stat, index) => (
            <Card key={index} className="surface-soft-hover">
              <CardContent className="p-5 text-center sm:p-8">
                <div className="mb-2 text-3xl font-bold sm:text-4xl">{stat.number}</div>
                <div className="font-mono text-xs uppercase sm:text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t border-border py-12 sm:py-20">
        <h2 className="mb-8 font-mono text-2xl font-bold uppercase sm:text-3xl">Testimonials</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="surface-soft-hover">
              <CardContent className="p-5 sm:p-6">
                <div className="mb-5 flex items-center gap-3">
                  <Avatar className="h-14 w-14 shrink-0 border border-border">
                    <AvatarImage src={testimonial.image} alt={`Portrait of ${testimonial.name}`} />
                    <AvatarFallback>{testimonial.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-mono text-base font-bold sm:text-lg">
                      {testimonial.name}
                    </h3>
                  </div>
                </div>
                <p className="font-mono text-sm leading-relaxed sm:text-[15px]">
                  {testimonial.quote}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t border-border py-12 sm:py-20">
        <h2 className="mb-8 font-mono text-2xl font-bold uppercase sm:text-3xl">Contacts</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {contacts.map((contact) => (
            <Card key={contact.name} className="surface-soft-hover">
              <CardContent className="p-5 sm:p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Avatar className="h-14 w-14 shrink-0 border border-border">
                    <AvatarImage src={contact.image} alt={`Portrait of ${contact.name}`} />
                    <AvatarFallback>{contact.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-mono text-base font-bold sm:text-lg">
                      {contact.name}
                    </h3>
                    <p className="font-mono text-xs text-muted-foreground sm:text-sm">
                      {contact.connection}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t border-border py-12 sm:py-20">
        <h2 className="mb-8 font-mono text-2xl font-bold uppercase sm:text-3xl">PASSIONS</h2>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {interests.map(({ label, Illustration }) => (
            <Card key={label} className="surface-soft-hover">
              <CardContent className="px-3 py-4 text-center sm:px-4 sm:py-5">
                <div className="flex items-center justify-center gap-2">
                  <span className="h-5 w-7 shrink-0 text-foreground/80 sm:h-5 sm:w-8">
                    <Illustration className="h-full w-full" />
                  </span>
                  <div className="whitespace-nowrap font-mono text-[11px] font-bold uppercase sm:text-xs">
                    {label}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
