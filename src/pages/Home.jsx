"use client";

import { VideoIcon } from "lucide-react";
import Marquee from "react-fast-marquee";
import { companiesLogo } from "../data/companiesLogo";
import { featuresData } from "../data/featuresData";
import SectionTitle from "../components/SectionTitle";
import { useThemeContext } from "../context/ThemeContext";
import { FaqSection } from "../sections/FaqSection";
import Pricing from "../sections/Pricing";

export default function Page() {
  const { theme } = useThemeContext();

  return (
    <>
      {/* HERO */}
      <div className="flex flex-col items-flex flex-col items-center justify-center text-center px-4 
          bg-[url('/assets/light-hero-gradient.svg')] 
          dark:bg-[url('/assets/dark-hero-gradient.svg')] 
          bg-no-repeat bg-cover justify-center text-center px-4 bg-[url('/assets/light-hero-gradient.svg')] dark:bg-[url('/assets/dark-hero-gradient.svg')] bg-no-repeat bg-cover">

          {/* Badge */}
          <div className="flex flex-wrap items-center justify-center gap-3 p-1.5 pr-4 mt-46 rounded-full border border-slate-300 dark:border-slate-600 bg-white/70 dark:bg-slate-600/20">
            <p className="text-xs">
              Motoboys profissionais para o seu negócio
            </p>
          </div>

          {/* TÍTULO */}
          <h1 className="mt-4 text-5xl/15 md:text-[64px]/19 font-semibold max-w-3xl">
            Motoboy de{" "}
            <span className="bg-gradient-to-r from-[#923FEF] dark:from-[#C99DFF] to-[#C35DE8] dark:to-[#E1C9FF] bg-clip-text text-transparent">
              confiança, agilidade e compromisso
            </span>
          </h1>

          {/* SUBTÍTULO */}
          <p className="text-base dark:text-slate-300 max-w-xl mt-4">
            A JFAG atende comércios, restaurantes, farmácias e empresas que precisam
            de entregas rápidas, seguras e feitas por motoboys responsáveis,
            pontuais e profissionais.
          </p>

          {/* BOTÕES */}
          <div className="flex items-center gap-4 mt-8">
            <button className="bg-purple-600 hover:bg-purple-700 transition text-white rounded-md px-6 h-11">
              Entrar em contato
            </button>

            {/* <button className="flex items-center gap-2 border border-purple-900 transition text-slate-600 dark:text-white rounded-md px-6 h-11">
              <VideoIcon strokeWidth={1} />
              <span>Como funciona</span>
            </button> */}
          </div>

          {/* CONFIANÇA */}
        <h3 className="text-base text-center text-slate-400 mt-28 pb-14 font-medium">
            Entregas feitas com responsabilidade e compromisso — parceiros que confiam na JFag
        </h3>

          <Marquee
            className="max-w-5xl mx-auto"
            gradient={true}
            speed={25}
            gradientColor={theme === "dark" ? "#000" : "#fff"}
          >
            <div className="flex items-center justify-center">
              {[...companiesLogo, ...companiesLogo].map((company, index) => (
                <img
                  key={index}
                  className="mx-11 opacity-80 hover:opacity-100 transition"
                  src={company.logo}
                  alt={`Cliente JFag - ${company.name}`}
                  width={100}
                  height={100}
                  loading="lazy"
                />
              ))}
            </div>
          </Marquee>
      </div>

      {/* SERVIÇOS */}
      <SectionTitle
        text1="SERVIÇOS"
        text2="Motoboys preparados para o dia a dia do seu negócio"
        text3="Mais tranquilidade para quem precisa entregar com eficiência."
      />

      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-4 mt-10 px-6 md:px-16 lg:px-24 xl:px-32">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className="p-6 rounded-xl space-y-3 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/20 max-w-80 md:max-w-66"
          >
            <feature.icon
              className="text-purple-500 size-8 mt-4"
              strokeWidth={1.3}
            />
            <h3 className="text-base font-medium">{feature.title}</h3>
            <p className="text-slate-400 line-clamp-2">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* TIPOS DE ATENDIMENTO */}
      <Pricing />

      {/* FAQ */}
      <FaqSection />

      {/* CTA FINAL */}
      <div className="flex flex-col items-center text-center justify-center mt-20 mb-24">
        <h3 className="text-3xl font-semibold mt-16 mb-4">
          Precisa de um motoboy confiável?
        </h3>

        <p className="text-slate-600 dark:text-slate-200 max-w-xl mx-auto">
          Conte com a JFAG para entregas feitas com cuidado, pontualidade e
          profissionalismo. Ideal para quem não pode errar no prazo.
        </p>

        <div className="flex items-center gap-4 mt-8">
          <button className="bg-purple-600 hover:bg-purple-700 transition text-white rounded-md px-6 h-11">
            Falar com a JFAG
          </button>

          <button className="border border-purple-900 transition text-slate-600 dark:text-white rounded-md px-6 h-11">
            Solicitar orçamento
          </button>
        </div>
      </div>
    </>
  );
}