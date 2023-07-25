import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function useNavigation () {
    const [activeSection, setActiveSection] = useState('');

    const router = useRouter();

    useEffect(() => {
        setActiveSection(router.pathname);
    }, [router.pathname]);

    const toHome = () => {
        router.push('home');
    }

    const toDisciplinas = () => {
        router.push('disciplinas');
    }

    const toQuestoes = () => {
        router.push('questoes-interativas');
    }

    const toSobre = () => {
        router.push('sobre');
        setActiveSection('sobre');
    }

    const toLogin = () => {
        router.push('login');
    }

    return { 
        activeSection, 
        toHome, 
        toDisciplinas, 
        toQuestoes, 
        toSobre, 
        toLogin 
    };
}