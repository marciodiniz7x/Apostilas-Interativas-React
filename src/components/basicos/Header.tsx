import { useRouter } from "next/router"

export default function Header() {

    const router = useRouter();

    const toHome = () => {
        router.push('interface');
    }

    const toQuestoes = () => {
        router.push('questoes-interativas')
    }

    // const redirectPage = (page) => {
    //     switch (page) {
    //         case "home":
    //             window.location.href = "basicos/interface";
    //             break;
        
    //         default:
    //             break;
    //     }
    // }

    return (
        <div className="flex justify-around items-center w-[1200px] h-[100px] bg-white">

                <div className="flex gap-1 cursor-pointer p-1 text-lg">
                    <span className="text-[#FD5875] font-bold">React</span>
                    <span className="text-slate-700 font-normal">Apostilas</span>
                </div>

                <div className="flex items-center justify-between gap-9 text-slate-700" >
                    <button 
                    className="cursor-pointer hover:text-[#FD5875] duration-300" onClick={toHome}>Home</button>
                    <button className="cursor-pointer hover:text-[#FD5875] duration-300">Disciplinas</button>
                    <button className="cursor-pointer hover:text-[#FD5875] duration-300" onClick={toQuestoes}>Exercícios</button>
                    <button className="cursor-pointer hover:text-[#FD5875] duration-300">Sobre</button>
                    <button className="cursor-pointer bg-[#FD5875] px-7 py-1 rounded-2xl text-white font-medium hover:bg-[#f7aac0] duration-700">LOGIN</button>
                </div>

        </div>
    )
}