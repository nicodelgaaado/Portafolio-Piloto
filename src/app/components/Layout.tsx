import { Link, Outlet, useLocation } from "react-router";

export default function Layout() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/skills", label: "Skills" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 border-2 border-black"></div>
              <span className="font-mono uppercase tracking-wider">Portfolio</span>
            </div>
            
            <nav>
              <ul className="flex gap-6">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`font-mono uppercase text-sm tracking-wide hover:underline ${
                        location.pathname === item.path ? "underline" : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-black mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center">
            <p className="font-mono text-sm">© 2026 Software Engineering Student</p>
            <div className="flex gap-4">
              {["Github", "LinkedIn", "Twitter"].map((social) => (
                <div
                  key={social}
                  className="w-8 h-8 border-2 border-black flex items-center justify-center"
                >
                  <span className="text-xs font-mono">{social[0]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
