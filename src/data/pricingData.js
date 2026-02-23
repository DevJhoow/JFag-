import { CheckIcon } from "lucide-react";

export const pricingData = [
    {
        title: "Plano Básico",
        price: 99,
        features: [
            { name: "Motoboy dedicado", icon: CheckIcon },
            { name: "Entregas rápidas", icon: CheckIcon },
            { name: "Suporte em horário comercial", icon: CheckIcon },
        ],
        buttonText: "Solicitar contato",
    },
    {
        title: "Plano Profissional",
        price: 199,
        mostPopular: true,
        features: [
            { name: "Motoboy exclusivo", icon: CheckIcon },
            { name: "Prioridade nas entregas", icon: CheckIcon },
            { name: "Relatórios mensais", icon: CheckIcon },
            { name: "Suporte prioritário", icon: CheckIcon },
        ],
        buttonText: "Mais contratado",
    },
    {
        title: "Plano Empresarial",
        price: 0,
        features: [
            { name: "Solução personalizada", icon: CheckIcon },
            { name: "Alta demanda diária", icon: CheckIcon },
            { name: "Gestão completa de entregas", icon: CheckIcon },
        ],
        buttonText: "Falar com especialista",
    },
];