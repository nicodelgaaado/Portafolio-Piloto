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
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4 border-b-4 border-black inline-block pb-2">
          Projects
        </h1>
        <p className="font-mono text-lg mt-6">
          A collection of my work showcasing various technologies and problem-solving approaches
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="border-2 border-black p-6 hover:bg-black hover:text-white transition-colors group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-xl">{project.title}</h3>
              <div className="border-2 border-black group-hover:border-white px-3 py-1 text-xs font-mono">
                {project.status}
              </div>
            </div>
            <div className="font-mono text-sm mb-4 opacity-70">{project.tech}</div>
            <p className="font-mono text-sm leading-relaxed mb-6">{project.description}</p>
            
            {/* Placeholder for project image */}
            <div className="border-2 border-black group-hover:border-white h-40 flex items-center justify-center mb-4">
              <span className="font-mono text-xs">[Project Screenshot]</span>
            </div>

            <div className="flex gap-4">
              <div className="border-2 border-black group-hover:border-white px-4 py-2 font-mono text-xs uppercase flex-1 text-center cursor-pointer">
                View Code
              </div>
              <div className="border-2 border-black group-hover:border-white px-4 py-2 font-mono text-xs uppercase flex-1 text-center cursor-pointer">
                Live Demo
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filter/Sort Section */}
      <div className="mt-12 border-2 border-black p-6">
        <div className="flex items-center justify-between">
          <span className="font-mono uppercase text-sm">Filter Projects</span>
          <div className="flex gap-4">
            {["All", "Web", "Mobile", "ML/AI", "Blockchain"].map((filter) => (
              <div
                key={filter}
                className="border-2 border-black px-4 py-2 font-mono text-xs uppercase cursor-pointer hover:bg-black hover:text-white transition-colors"
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
