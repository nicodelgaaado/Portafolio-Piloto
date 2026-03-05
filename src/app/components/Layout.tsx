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
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="h-10 w-10 border-2 border-black sm:h-12 sm:w-12"></div>
              <span className="font-mono uppercase tracking-wider">Portfolio</span>
            </div>

            <nav className="w-full sm:w-auto">
              <ul className="flex flex-wrap gap-3 sm:gap-6">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`font-mono text-xs uppercase tracking-wide sm:text-sm ${
                        location.pathname === item.path
                          ? "font-bold"
                          : "opacity-80 transition-opacity hover:opacity-100"
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
      <footer className="mt-20 border-t-2 border-black">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="font-mono text-sm">(C) 2026 Software Engineering Student</p>
            <div className="flex gap-4">
              {["Github", "LinkedIn", "Twitter"].map((social) => (
                <div
                  key={social}
                  className="flex h-8 w-8 items-center justify-center border-2 border-black"
                >
                  <span className="font-mono text-xs">{social[0]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
