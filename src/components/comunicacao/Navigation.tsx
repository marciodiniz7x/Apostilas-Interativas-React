import { useRouter } from "next/router";

export const useNavigation = () => {
    const router = useRouter();

    const toHome = () => {
      router.push('interface');
    }
  
    const toQuestoes = () => {
      router.push('questoes-interativas');
    }
  
    const toDisciplinas = () => {
      router.push('disciplinas');
    }

    return {
        toHome,
        toQuestoes,
        toDisciplinas
    }
}