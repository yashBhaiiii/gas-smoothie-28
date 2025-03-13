
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";

const DarkHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1f2c]/70 backdrop-blur-lg border-b border-white/5">
      <div className="container mx-auto px-4 h-20">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="text-purple-400 font-medium text-2xl flex items-center">
              <span className="mr-2">📄</span>
              <span>Smart Contract Copilot</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="/" label="Home" />
            <NavLink href="/features" label="Features" />
            <NavLink href="/testimonials" label="Testimonials" />
            <Button variant="outline" className="border-purple-400/30 text-white hover:bg-purple-800/40">
              <LogOut size={16} className="mr-2" />
              Logout
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link
      to={href}
      className="text-gray-300 hover:text-purple-400 transition-colors font-medium"
    >
      {label}
    </Link>
  );
};

export default DarkHeader;
