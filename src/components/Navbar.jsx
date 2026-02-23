import { MenuIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useThemeContext } from "../context/ThemeContext";
import { navLinks } from "../data/navLinks";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const { theme } = useThemeContext();

    useEffect(() => {
        if (openMobileMenu) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [openMobileMenu]);

    return (
        <nav
            className={`fixed top-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 ${
                openMobileMenu ? "" : "backdrop-blur"
            }`}
        >
            {/* Logo */}
            <Link to="/">
                <img
                    className="h-9 md:h-9.5 w-auto shrink-0"
                    src={
                        theme === "dark"
                            ? "./assets/logo-light.svg"
                            : "./assets/logo-dark.svg"
                    }
                    alt="Logo"
                    width={140}
                    height={40}
                />
            </Link>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center gap-8 lg:gap-9 lg:pl-20">
               {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.href}
                        className="hover:text-slate-600 dark:hover:text-slate-300"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* Mobile menu */}
            <div
                className={`fixed inset-0 md:hidden flex flex-col items-center justify-center gap-6 text-lg font-medium bg-white/70 dark:bg-black/50 backdrop-blur-md transition-transform duration-300 ${
                    openMobileMenu ? "translate-x-0" : "-translate-x-full"
                }`}
            >
               {navLinks.map((link) => (
                    <Link key={link.name} to={link.href}>
                        {link.name}
                    </Link>
                ))}

                <button className="mt-4">Sign in</button>

                <button
                    onClick={() => setOpenMobileMenu(false)}
                    className="mt-6 flex items-center justify-center size-10 bg-purple-600 hover:bg-purple-700 transition text-white rounded-md"
                >
                    <XIcon />
                </button>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
                <ThemeToggle />

                <button className="hidden md:block hover:bg-slate-100 dark:hover:bg-purple-950 transition px-4 py-2 border border-purple-600 rounded-md">
                    Sign in
                </button>

                <button className="hidden md:block px-4 py-2 bg-purple-600 hover:bg-purple-700 transition text-white rounded-md">
                    Get started
                </button>

                <button
                    onClick={() => setOpenMobileMenu(!openMobileMenu)}
                    className="md:hidden"
                >
                    <MenuIcon size={26} className="active:scale-90 transition" />
                </button>
            </div>
        </nav>
    );
}