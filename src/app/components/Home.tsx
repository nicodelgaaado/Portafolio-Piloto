import Image from "next/image";
import { MapPin, Sparkles } from "lucide-react";

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
    { label: "Formula 1", icon: "noto:racing-car", imageClassName: "object-contain" },
    { label: "Tennis", icon: "ion:ios-tennisball", color: "#8FD14F", imageClassName: "object-contain" },
    { label: "Music", icon: "ion:ios-musical-notes", color: "#AF52DE", imageClassName: "object-contain" },
    { label: "Traveling", icon: "ion:ios-airplane", color: "#B7C3D6", imageClassName: "scale-[1.22] object-contain" },
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
          {interests.map(({ label, icon, color, imageClassName }) => (
            <Card key={label} className="surface-soft-hover">
              <CardContent className="px-3 py-4 text-center sm:px-4 sm:py-5">
                <div className="flex items-center justify-center gap-2">
                  <span className="relative h-5 w-7 shrink-0 sm:h-5 sm:w-8">
                    <Image
                      src={iconifyUrl(icon, color)}
                      alt=""
                      fill
                      unoptimized
                      sizes="(min-width: 640px) 2rem, 1.75rem"
                      className={imageClassName}
                    />
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
