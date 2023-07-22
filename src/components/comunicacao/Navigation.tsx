import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

export const useNavigation = () => {
  
    const [activeSection, setActiveSection] = useState('');

    const router = useRouter();

    useEffect(() => {
      setActiveSection(router.pathname);
    }, [router.pathname] );

    const navigateAndActive = (page: any) => {
      router.push(page);
      setActiveSection(page);
    }

    const toHome = () => {
      navigateAndActive('home');
    }
  
    const toQuestoes = () => {
      navigateAndActive('questoes-interativas')
    }
  
    const toDisciplinas = () => {
      navigateAndActive('disciplinas');
    }

    const toSobre = () => {
      navigateAndActive('sobre');

    }

    return {
        toHome,
        toQuestoes,
        toDisciplinas,
        toSobre,
        activeSection
    }
}