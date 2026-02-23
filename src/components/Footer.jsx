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
            document.body.classList.add("max-md:overflow-hidden");
        } else {
            document.body.classList.remove("max-md:overflow-hidden");
        }
    }, [openMobileMenu]);

    return (
        <nav
            className={`flex items-center justify-between fixed z-50 top-0 w-full px-6 md:px-16 lg:px-24 xl:px-32 py-4 ${
                openMobileMenu ? "" : "backdrop-blur"
            }`}
        >
            <div className="flex flex-col leading-tight">
                <span className="text-[30px] font-extrabold tracking-tight">
                    <span className="text-[#F97316]">JFag</span>{" "}
                    <span className="text-slate-900 dark:text-slate-100">
                    Delivery
                    </span>
                </span>

                <span className="text-xs font-medium text-slate-400">
                    Dê asas às suas encomendas
                </span>
            </div>
            {/* Logo
            <Link to="/">
                <img
                    src={
                        theme === "dark"
                        ? "/Landing-react/assets/logo-lighty.png"
                        : "/Landing-react/assets/logo-lighty.png"
                    }
                    alt="JFag Motoboy"
                />
            </Link> */}

            {/* Desktop menu */}
            <div className="hidden items-center md:gap-8 lg:gap-9 md:flex lg:pl-20">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.href}
                        className="hover:text-slate-600 dark:hover:text-slate-300 transition"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* Mobile menu */}
            <div
                className={`fixed inset-0 flex flex-col items-center justify-center gap-6 text-lg font-medium bg-white/60 dark:bg-black/40 backdrop-blur-md md:hidden transition duration-300 ${
                    openMobileMenu ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.href}
                        onClick={() => setOpenMobileMenu(false)}
                    >
                        {link.name}
                    </Link>
                ))}

                <Link
                    to="/contato"
                    onClick={() => setOpenMobileMenu(false)}
                    className="px-6 py-3 bg-purple-600 hover:bg-purple-700 transition text-white rounded-md"
                >
                    Solicitar contato
                </Link>

                <button
                    className="aspect-square size-10 p-1 items-center justify-center bg-purple-600 hover:bg-purple-700 transition text-white rounded-md flex"
                    onClick={() => setOpenMobileMenu(false)}
                >
                    <XIcon />
                </button>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
                <ThemeToggle />

                <Link
                    to="/contato"
                    className="hidden md:block px-4 py-2 border border-purple-600 hover:bg-slate-100 dark:hover:bg-purple-950 transition rounded-md"
                >
                    Fale conosco
                </Link>

                <Link
                    to="/contato"
                    className="hidden md:block px-4 py-2 bg-purple-600 hover:bg-purple-700 transition text-white rounded-md"
                >
                    Solicitar contato
                </Link>

                <button
                    onClick={() => setOpenMobileMenu(!openMobileMenu)}
                    className="md:hidden"
                >
                    <MenuIcon
                        size={26}
                        className="active:scale-90 transition"
                    />
                </button>
            </div>
        </nav>
    );
}