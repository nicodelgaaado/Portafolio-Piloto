import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <section className="border-b-2 border-black py-12 sm:py-20">
        <div className="flex flex-col gap-8 lg:gap-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8 lg:gap-10">
            <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full border-2 border-black sm:h-36 sm:w-36 lg:h-44 lg:w-44">
              <span className="font-mono text-xl uppercase sm:text-2xl lg:text-3xl">ND</span>
            </div>
            <div className="space-y-4">
              <h1 className="whitespace-nowrap text-4xl font-bold leading-none sm:text-5xl lg:text-6xl">
                Nicolas Delgado
              </h1>
              <p className="max-w-3xl font-mono text-base leading-relaxed sm:text-lg">
                Building innovative solutions through code. Passionate about clean architecture,
                scalable systems, and user-centric design.
              </p>
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
              content: "Computer Science, B.S. Expected Graduation: 2027",
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
              <p className="font-mono text-sm">{item.content}</p>
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
