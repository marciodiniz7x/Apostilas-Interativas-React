import { useRouter } from "next/router";
import React, { useState } from "react";

export const useNavigation = () => {


    const [activeSection, setActiveSection] = useState('');

    const router = useRouter();

    const toHome = () => {
      router.push('home');
      setActiveSection('home');
    }
  
    const toQuestoes = () => {
      router.push('questoes-interativas');
      setActiveSection('questoes-interativas')
    }
  
    const toDisciplinas = () => {
      router.push('disciplinas');
      setActiveSection('disciplinas');
    }

    return {
        toHome,
        toQuestoes,
        toDisciplinas,
        activeSection
    }
}