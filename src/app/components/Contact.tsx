export default function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
      <div className="mb-10 sm:mb-12">
        <h1 className="text-4xl font-bold sm:text-5xl">
          Get In Touch
        </h1>
        <p className="mt-6 font-mono text-base sm:text-lg">
          Let&apos;s collaborate on your next project or discuss opportunities
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Contact Form */}
        <div className="border-2 border-black p-5 sm:p-8">
          <h2 className="mb-6 font-mono text-xl font-bold uppercase sm:text-2xl">Send a Message</h2>
          <form className="space-y-6">
            <div>
              <label className="mb-2 block font-mono text-sm uppercase">Name</label>
              <input
                type="text"
                className="w-full border-2 border-black p-3 font-mono focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="mb-2 block font-mono text-sm uppercase">Email</label>
              <input
                type="email"
                className="w-full border-2 border-black p-3 font-mono focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="mb-2 block font-mono text-sm uppercase">Subject</label>
              <input
                type="text"
                className="w-full border-2 border-black p-3 font-mono focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="What&apos;s this about?"
              />
            </div>
            <div>
              <label className="mb-2 block font-mono text-sm uppercase">Message</label>
              <textarea
                rows={6}
                className="w-full resize-none border-2 border-black p-3 font-mono focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Your message here..."
              />
            </div>
            <button
              type="submit"
              className="w-full border-2 border-black px-6 py-3 font-mono uppercase transition-colors hover:bg-black hover:text-white sm:py-4"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-6 sm:space-y-8">
          {/* Contact Details */}
          <div className="border-2 border-black p-5 sm:p-8">
            <h2 className="mb-6 font-mono text-xl font-bold uppercase sm:text-2xl">Contact Info</h2>
            <div className="space-y-4">
              {[
                { label: "Email", value: "john.doe@email.com" },
                { label: "Phone", value: "+1 (555) 123-4567" },
                { label: "Location", value: "San Francisco, CA" },
                { label: "Availability", value: "Open to Opportunities" },
              ].map((item, index) => (
                <div key={index} className="border-b-2 border-black pb-3 last:border-b-0">
                  <div className="mb-1 font-mono text-xs uppercase opacity-60">{item.label}</div>
                  <div className="break-words font-mono">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="border-2 border-black p-5 sm:p-8">
            <h2 className="mb-6 font-mono text-xl font-bold uppercase sm:text-2xl">Connect</h2>
            <div className="space-y-3">
              {[
                { platform: "GitHub", handle: "@johndoe" },
                { platform: "LinkedIn", handle: "john-doe-dev" },
                { platform: "Twitter", handle: "@johndoe_dev" },
                { platform: "CodePen", handle: "johndoe" },
              ].map((social, index) => (
                <div
                  key={index}
                  className="flex cursor-pointer flex-col items-start justify-between gap-1 border-2 border-black p-4 transition-colors hover:bg-black hover:text-white sm:flex-row sm:items-center sm:gap-2"
                >
                  <span className="font-mono font-bold">{social.platform}</span>
                  <span className="font-mono text-sm">{social.handle}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Resume Download */}
          <div className="border-2 border-black p-5 text-center sm:p-8">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center border-2 border-black sm:h-20 sm:w-20">
              <span className="text-lg font-bold">DL</span>
            </div>
            <h3 className="mb-2 font-mono font-bold uppercase">Download Resume</h3>
            <p className="mb-4 font-mono text-sm">PDF | 245 KB</p>
            <button className="w-full border-2 border-black px-6 py-3 font-mono text-sm uppercase transition-colors hover:bg-black hover:text-white sm:w-auto">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
