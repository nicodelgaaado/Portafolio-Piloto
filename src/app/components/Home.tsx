import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <section className="border-b-2 border-black py-12 sm:py-20">
        <div className="flex flex-col gap-8 lg:gap-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8 lg:gap-10">
            <div className="flex h-36 w-36 shrink-0 items-center justify-center rounded-full border-2 border-black sm:h-48 sm:w-48 lg:h-56 lg:w-56">
              <span className="font-mono text-sm uppercase text-black/40 sm:text-base">[profile picture]</span>
            </div>
            <div className="space-y-4">
              <h1 className="whitespace-nowrap text-4xl font-bold leading-none sm:text-5xl lg:text-6xl">
                Nicolas Delgado
              </h1>
              <p className="max-w-3xl font-mono text-base leading-relaxed sm:text-lg">
                CS Student at Universidad Cooperativa de Colombia
              </p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-sm text-black/50">
                <p className="flex items-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3.5 w-3.5 shrink-0"
                  >
                    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Pasto, Colombia
                </p>
                <p className="flex items-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3.5 w-3.5 shrink-0"
                  >
                    <path d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z" />
                    <path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z" />
                  </svg>
                  Open to opportunities
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:gap-4">
            <Link
              href="/projects"
              className="border-2 border-black px-6 py-3 text-center font-mono text-sm uppercase transition-colors hover:bg-black hover:text-white"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="border-2 border-black px-6 py-3 text-center font-mono text-sm uppercase transition-colors hover:bg-black hover:text-white"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b-2 border-black py-12 sm:py-20">
        <h2 className="mb-8 font-mono text-2xl font-bold uppercase sm:text-3xl">About Me</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {[
            {
              title: "Education",
              content: "Universidad Cooperativa de Colombia\nComputer Science, B.S. - Expected Graduation: 2027",
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
            <div key={index} className="border-2 border-black p-5 sm:p-6">
              <h3 className="mb-4 font-mono text-lg font-bold uppercase">{item.title}</h3>
              <p className="whitespace-pre-line font-mono text-sm">{item.content}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 sm:py-20">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          {[
            { number: "15+", label: "Projects" },
            { number: "3", label: "Internships" },
            { number: "500+", label: "Git Commits" },
            { number: "8", label: "Technologies" },
          ].map((stat, index) => (
            <div key={index} className="border-2 border-black p-5 text-center sm:p-8">
              <div className="mb-2 text-3xl font-bold sm:text-4xl">{stat.number}</div>
              <div className="font-mono text-xs uppercase sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
