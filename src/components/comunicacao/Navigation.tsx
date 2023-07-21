import { useRouter } from "next/router";
import React, { useState } from "react";

export const useNavigation = () => {


    const [activeSection, setActiveSection] = useState('');

    const router = useRouter();

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

    return {
        toHome,
        toQuestoes,
        toDisciplinas,
        activeSection
    }
}