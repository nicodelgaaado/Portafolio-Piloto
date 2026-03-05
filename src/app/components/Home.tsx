import { Link } from "react-router";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Hero Section */}
      <section className="py-20 border-b-2 border-black">
        <div className="grid grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="border-2 border-black p-2 inline-block">
              <span className="font-mono text-sm uppercase">Software Engineer</span>
            </div>
            <h1 className="text-6xl font-bold border-b-4 border-black pb-4 inline-block">
              John Doe
            </h1>
            <p className="font-mono text-lg leading-relaxed">
              Building innovative solutions through code. Passionate about clean architecture,
              scalable systems, and user-centric design.
            </p>
            <div className="flex gap-4 pt-4">
              <Link
                to="/projects"
                className="border-2 border-black px-6 py-3 font-mono uppercase text-sm hover:bg-black hover:text-white transition-colors"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="border-2 border-black px-6 py-3 font-mono uppercase text-sm hover:bg-black hover:text-white transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
          <div className="border-2 border-black h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="w-48 h-48 border-2 border-black rounded-full mx-auto mb-4"></div>
              <span className="font-mono text-sm">[Profile Image]</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 border-b-2 border-black">
        <h2 className="text-3xl font-bold mb-8 font-mono uppercase">About Me</h2>
        <div className="grid grid-cols-3 gap-8">
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
            <div key={index} className="border-2 border-black p-6">
              <h3 className="font-mono font-bold mb-4 text-lg uppercase">{item.title}</h3>
              <p className="font-mono text-sm">{item.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20">
        <div className="grid grid-cols-4 gap-8">
          {[
            { number: "15+", label: "Projects" },
            { number: "3", label: "Internships" },
            { number: "500+", label: "Git Commits" },
            { number: "8", label: "Technologies" },
          ].map((stat, index) => (
            <div key={index} className="border-2 border-black p-8 text-center">
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="font-mono text-sm uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
