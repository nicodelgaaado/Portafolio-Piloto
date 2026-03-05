export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      tech: "React, Node.js, MongoDB",
      description: "Full-stack e-commerce solution with payment integration and admin dashboard",
      status: "Completed",
    },
    {
      title: "Task Management App",
      tech: "Vue.js, Firebase, Tailwind CSS",
      description: "Real-time collaborative task manager with team features",
      status: "In Progress",
    },
    {
      title: "Machine Learning Image Classifier",
      tech: "Python, TensorFlow, Flask",
      description: "CNN-based image classification API with 94% accuracy",
      status: "Completed",
    },
    {
      title: "Social Media Analytics Dashboard",
      tech: "React, D3.js, Express",
      description: "Analytics platform for tracking social media metrics and engagement",
      status: "Completed",
    },
    {
      title: "Mobile Weather App",
      tech: "React Native, OpenWeather API",
      description: "Cross-platform weather application with location-based forecasts",
      status: "In Progress",
    },
    {
      title: "Blockchain Voting System",
      tech: "Solidity, Web3.js, React",
      description: "Decentralized voting platform ensuring transparency and security",
      status: "Completed",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
      <div className="mb-10 sm:mb-12">
        <h1 className="text-4xl font-bold sm:text-5xl">
          Projects
        </h1>
        <p className="mt-6 font-mono text-base sm:text-lg">
          A collection of my work showcasing various technologies and problem-solving approaches
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border-2 border-black p-5 transition-colors sm:p-6"
          >
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <h3 className="text-lg font-bold sm:text-xl">{project.title}</h3>
              <div className="w-fit border-2 border-black px-3 py-1 font-mono text-xs">
                {project.status}
              </div>
            </div>
            <div className="mb-4 font-mono text-sm opacity-70">{project.tech}</div>
            <p className="mb-6 font-mono text-sm leading-relaxed">{project.description}</p>

            {/* Placeholder for project image */}
            <div className="mb-4 flex h-36 items-center justify-center border-2 border-black sm:h-40">
              <span className="font-mono text-xs">[Project Screenshot]</span>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <div className="flex-1 cursor-pointer border-2 border-black px-4 py-2 text-center font-mono text-xs uppercase">
                View Code
              </div>
              <div className="flex-1 cursor-pointer border-2 border-black px-4 py-2 text-center font-mono text-xs uppercase">
                Live Demo
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filter/Sort Section */}
      <div className="mt-10 border-2 border-black p-4 sm:mt-12 sm:p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <span className="font-mono text-sm uppercase">Filter Projects</span>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            {["All", "Web", "Mobile", "ML/AI", "Blockchain"].map((filter) => (
              <div
                key={filter}
                className="cursor-pointer border-2 border-black px-3 py-2 font-mono text-[10px] uppercase transition-colors hover:bg-black hover:text-white sm:px-4 sm:text-xs"
              >
                {filter}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
