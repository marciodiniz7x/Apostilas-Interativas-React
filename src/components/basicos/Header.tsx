import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Header() {

    const [activeSection, setActiveSection] = useState('Home');

    const router = useRouter();

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
    }

    return (
        <div className="flex justify-around items-center w-[1200px] h-[100px] bg-white">

                <div className="flex gap-1 cursor-pointer p-1 text-lg" onClick={toHome}>
                    <img className="w-7 h-7" src="/images/logo.png" alt="" />
                    <span className="text-[#FD5875] font-bold">React</span>
                    <span className="text-slate-700 font-regular">Apostilas</span>
                </div>

                <ul className="flex items-center justify-between gap-9 text-slate-700" >

                    <li>
                        <button 
                        className={`
                        cursor-pointer hover:text-[#FD5875] duration-300
                        ${activeSection === 'home' ? 'active' : ''}
                        `} onClick={toHome}>Home</button>
                    </li>

                    <li>
                        <button className={`
                        cursor-pointer hover:text-[#FD5875] duration-300 ${activeSection === 'disciplinas' ? 'active' : ''}
                        `} onClick={toDisciplinas}>Disciplinas</button>
                    </li>

                    <li>
                        <button className={`
                        cursor-pointer hover:text-[#FD5875] duration-300 ${activeSection === 'questoes-interativas' ? 'active' : ''}
                        `} onClick={toQuestoes}>Exercícios</button>
                    </li>

                    <li>
                        <button className="cursor-pointer hover:text-[#FD5875] duration-300" onClick={toSobre}>Sobre</button>
                    </li>

                    <li>
                        <button className="cursor-pointer bg-[#FD5875] px-7 py-1 rounded-2xl text-white font-medium hover:bg-[#f7aac0] duration-700">LOGIN</button>
                    </li>

                </ul>

        </div>
    )
}