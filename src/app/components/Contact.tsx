export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4 border-b-4 border-black inline-block pb-2">
          Get In Touch
        </h1>
        <p className="font-mono text-lg mt-6">
          Let's collaborate on your next project or discuss opportunities
        </p>
      </div>

      <div className="grid grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="border-2 border-black p-8">
          <h2 className="text-2xl font-bold mb-6 font-mono uppercase">Send a Message</h2>
          <form className="space-y-6">
            <div>
              <label className="block font-mono text-sm mb-2 uppercase">Name</label>
              <input
                type="text"
                className="w-full border-2 border-black p-3 font-mono focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block font-mono text-sm mb-2 uppercase">Email</label>
              <input
                type="email"
                className="w-full border-2 border-black p-3 font-mono focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block font-mono text-sm mb-2 uppercase">Subject</label>
              <input
                type="text"
                className="w-full border-2 border-black p-3 font-mono focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="What's this about?"
              />
            </div>
            <div>
              <label className="block font-mono text-sm mb-2 uppercase">Message</label>
              <textarea
                rows={6}
                className="w-full border-2 border-black p-3 font-mono focus:outline-none focus:ring-2 focus:ring-black resize-none"
                placeholder="Your message here..."
              />
            </div>
            <button
              type="submit"
              className="w-full border-2 border-black px-6 py-4 font-mono uppercase hover:bg-black hover:text-white transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          {/* Contact Details */}
          <div className="border-2 border-black p-8">
            <h2 className="text-2xl font-bold mb-6 font-mono uppercase">Contact Info</h2>
            <div className="space-y-4">
              {[
                { label: "Email", value: "john.doe@email.com" },
                { label: "Phone", value: "+1 (555) 123-4567" },
                { label: "Location", value: "San Francisco, CA" },
                { label: "Availability", value: "Open to Opportunities" },
              ].map((item, index) => (
                <div key={index} className="border-b-2 border-black pb-3 last:border-b-0">
                  <div className="font-mono text-xs uppercase opacity-60 mb-1">{item.label}</div>
                  <div className="font-mono">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="border-2 border-black p-8">
            <h2 className="text-2xl font-bold mb-6 font-mono uppercase">Connect</h2>
            <div className="space-y-3">
              {[
                { platform: "GitHub", handle: "@johndoe" },
                { platform: "LinkedIn", handle: "john-doe-dev" },
                { platform: "Twitter", handle: "@johndoe_dev" },
                { platform: "CodePen", handle: "johndoe" },
              ].map((social, index) => (
                <div
                  key={index}
                  className="border-2 border-black p-4 flex justify-between items-center hover:bg-black hover:text-white transition-colors cursor-pointer"
                >
                  <span className="font-mono font-bold">{social.platform}</span>
                  <span className="font-mono text-sm">{social.handle}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Resume Download */}
          <div className="border-2 border-black p-8 text-center">
            <div className="w-20 h-20 border-2 border-black mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl">↓</span>
            </div>
            <h3 className="font-mono font-bold mb-2 uppercase">Download Resume</h3>
            <p className="font-mono text-sm mb-4">PDF • 245 KB</p>
            <button className="border-2 border-black px-6 py-3 font-mono uppercase text-sm hover:bg-black hover:text-white transition-colors">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
