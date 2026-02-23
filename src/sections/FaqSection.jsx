import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useThemeContext } from "../context/ThemeContext";
import SectionTitle from "../components/SectionTitle";
import { faqsData } from "../data/faqsData";

export const FaqSection = () => {
    const { theme } = useThemeContext();
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div className="relative max-w-2xl mx-auto flex flex-col items-center justify-center px-4 md:px-0">
            <img
                className="absolute -mb-120 -left-40 -z-10 pointer-events-none"
                src={
                    theme === "dark"
                        ? "./assets/color-splash.svg"
                        : "./assets/color-splash-light.svg"
                }
                alt="decorative background"
                width={1000}
                height={1000}
                fetchPriority="high"
            />

            <SectionTitle
                text1="DÚVIDAS"
                text2="Perguntas frequentes"
                text3="Tire suas dúvidas sobre nossos serviços de motoboy e atendimento profissional."
            />

            <div className="mt-8 w-full">
                {faqsData.map((faq, index) => (
                    <div
                        key={index}
                        className="border-b border-slate-300 dark:border-purple-900 py-4 cursor-pointer w-full"
                        onClick={() =>
                            setOpenIndex(openIndex === index ? null : index)
                        }
                        aria-expanded={openIndex === index}
                    >
                        <div className="flex items-center justify-between gap-4">
                            <h3 className="text-base font-medium">
                                {faq.question}
                            </h3>
                            <ChevronDown
                                size={18}
                                className={`transition-all duration-500 ease-in-out ${
                                    openIndex === index ? "rotate-180" : ""
                                }`}
                            />
                        </div>

                        <p
                            className={`text-sm text-slate-600 dark:text-slate-300 transition-all duration-500 ease-in-out max-w-xl ${
                                openIndex === index
                                    ? "opacity-100 max-h-[500px] translate-y-0 pt-4"
                                    : "opacity-0 max-h-0 overflow-hidden -translate-y-2"
                            }`}
                        >
                            {faq.answer}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};