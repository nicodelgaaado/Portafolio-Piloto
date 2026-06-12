import Image from "next/image";
import { ArrowUpRight, MapPin, Sparkles } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function iconifyUrl(icon: string, color?: string) {
  const baseUrl = `https://api.iconify.design/${icon.replace(":", "/")}.svg`;

  if (!color) {
    return baseUrl;
  }

  return `${baseUrl}?color=${encodeURIComponent(color)}`;
}

export default function Home() {
  const actionItems = [
    {
      label: "Email Me",
      href: "mailto:nicolasfedericodelgado@gmail.com",
      variant: "default" as const,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nicodelgaaado/",
      target: "_blank",
      variant: "outline" as const,
    },
    {
      label: "GitHub",
      href: "https://github.com/nicodelgaaado",
      target: "_blank",
      variant: "outline" as const,
    },
    {
      label: "Resume",
      href: "https://pub-533f2ecea7b3468f82f593eb24ccba91.r2.dev/assets/resume-nicolasdelgado.pdf",
      target: "_blank",
      variant: "outline" as const,
    },
  ];
  const interests = [
    { label: "Formula 1", icon: "noto:racing-car", imageClassName: "object-contain" },
    { label: "Tennis", icon: "ion:ios-tennisball", color: "#8FD14F", imageClassName: "object-contain" },
    { label: "Music", icon: "ion:ios-musical-notes", color: "#AF52DE", imageClassName: "object-contain" },
    { label: "Traveling", icon: "ion:ios-airplane", color: "#B7C3D6", imageClassName: "scale-[1.22] object-contain" },
  ];
  const about = [
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
  ];
  const stats = [
    { number: "15+", label: "Projects" },
    { number: "3", label: "Experiences" },
    { number: "500+", label: "Git Commits" },
    { number: "10", label: "Technologies" },
  ];
  const testimonials = [
    {
      name: "Nicolas Uribe",
      image:
        "https://pub-533f2ecea7b3468f82f593eb24ccba91.r2.dev/assets/webp-compressed/nicolasuribe-photo.webp",
      quote: "Nicolas stands out for his calm presence, clear communication, and reliability.",
    },
    {
      name: "Daniel Gomez",
      image:
        "https://pub-533f2ecea7b3468f82f593eb24ccba91.r2.dev/assets/webp-compressed/danielgomez-photo.webp",
      quote: "He is thoughtful, easy to trust, and always brings a positive attitude towards others.",
    },
    {
      name: "Luis Rodriguez",
      image:
        "https://pub-533f2ecea7b3468f82f593eb24ccba91.r2.dev/assets/webp-compressed/luisrodriguez-photo.webp",
      quote: "Nicolas is someone people can count on because he is respectful, steady, and grounded.",
    },
  ];
  const contacts = [
    {
      name: "Santiago Lafaurie",
      connection: "Founder",
      image:
        "https://pub-533f2ecea7b3468f82f593eb24ccba91.r2.dev/assets/webp-compressed/santiagolafaurie-photo.webp",
    },
    {
      name: "Sebastian Mejia",
      connection: "Entrepreneur",
      image:
        "https://pub-533f2ecea7b3468f82f593eb24ccba91.r2.dev/assets/webp-compressed/sebastianmejia-photo.webp",
    },
    {
      name: "Saul Kattan",
      connection: "Consultant",
      image:
        "https://pub-533f2ecea7b3468f82f593eb24ccba91.r2.dev/assets/webp-compressed/saulkattan-photo.webp",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      {/* Hero */}
      <section className="py-14 sm:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div className="flex flex-col items-start gap-6 text-left">
            <span className="accent-chip">
              <Sparkles className="h-3.5 w-3.5" strokeWidth={2} />
              Open to opportunities
            </span>
            <div className="space-y-4">
              <h1 className="text-balance text-5xl font-bold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
                Nicolas Delgado
              </h1>
              <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Full-stack software engineer crafting thoughtful, performant web
                applications from frontend interfaces to backend systems.
              </p>
            </div>
            <p className="flex items-center gap-1.5 font-mono text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 shrink-0 text-primary" strokeWidth={2} />
              Pasto, Colombia
            </p>
            <div className="flex flex-wrap gap-2.5 pt-1">
              {actionItems.map((item) => (
                <Button
                  key={item.label}
                  asChild
                  variant={item.variant}
                  className="h-auto rounded-full px-5 py-2.5 text-sm font-medium"
                >
                  <a
                    href={item.href}
                    target={item.target}
                    rel={item.target === "_blank" ? "noreferrer" : undefined}
                  >
                    {item.label}
                    {item.variant === "default" ? (
                      <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                    ) : null}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-[var(--accent-soft)] blur-2xl" aria-hidden="true" />
              <div className="relative h-56 w-56 overflow-hidden rounded-full border border-border bg-surface shadow-[var(--surface-hover-shadow)] sm:h-64 sm:w-64 lg:h-72 lg:w-72">
                <Image
                  src="https://pub-533f2ecea7b3468f82f593eb24ccba91.r2.dev/assets/webp-compressed/profile-picture-blur.webp"
                  alt="Portrait of Nicolas Delgado"
                  fill
                  priority
                  sizes="(min-width: 1024px) 18rem, (min-width: 640px) 16rem, 14rem"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-14 sm:pb-20">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="surface-soft-hover border-border-subtle">
              <CardContent className="flex flex-col items-center gap-1 p-5 text-center sm:p-7">
                <div className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                  {stat.number}
                </div>
                <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="border-t border-border/70 py-14 sm:py-20">
        <div className="mb-10 max-w-2xl">
          <span className="eyebrow">About Me</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            A bit of background
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {about.map((item) => (
            <Card key={item.title} className="surface-soft-hover border-border-subtle">
              <CardContent className="p-6">
                <h3 className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                  {item.title}
                </h3>
                <p className="whitespace-pre-line leading-relaxed text-foreground">{item.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-border/70 py-14 sm:py-20">
        <div className="mb-10 max-w-2xl">
          <span className="eyebrow">Testimonials</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            What people say
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="surface-soft-hover border-border-subtle">
              <CardContent className="flex h-full flex-col gap-5 p-6">
                <p className="text-pretty leading-relaxed text-foreground">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-auto flex items-center gap-3">
                  <Avatar className="h-11 w-11 shrink-0 border border-border">
                    <AvatarImage src={testimonial.image} alt={`Portrait of ${testimonial.name}`} />
                    <AvatarFallback>{testimonial.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-sm font-semibold">{testimonial.name}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Network */}
      <section className="border-t border-border/70 py-14 sm:py-20">
        <div className="mb-10 max-w-2xl">
          <span className="eyebrow">Network</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            People I&apos;ve worked with
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {contacts.map((contact) => (
            <Card key={contact.name} className="surface-soft-hover border-border-subtle">
              <CardContent className="flex items-center gap-3 p-6">
                <Avatar className="h-12 w-12 shrink-0 border border-border">
                  <AvatarImage src={contact.image} alt={`Portrait of ${contact.name}`} />
                  <AvatarFallback>{contact.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-sm font-semibold">{contact.name}</h3>
                  <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {contact.connection}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Passions */}
      <section className="border-t border-border/70 py-14 sm:py-20">
        <div className="mb-10 max-w-2xl">
          <span className="eyebrow">Beyond Code</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Passions</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {interests.map(({ label, icon, color, imageClassName }) => (
            <Card key={label} className="surface-soft-hover border-border-subtle">
              <CardContent className="flex items-center justify-center gap-2.5 px-4 py-5">
                <span className="relative h-5 w-7 shrink-0">
                  <Image
                    src={iconifyUrl(icon, color)}
                    alt=""
                    fill
                    unoptimized
                    sizes="2rem"
                    className={imageClassName}
                  />
                </span>
                <div className="whitespace-nowrap text-sm font-medium">{label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
