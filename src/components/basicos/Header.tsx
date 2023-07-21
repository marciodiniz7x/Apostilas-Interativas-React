import React from "react";
import { useNavigation } from "../comunicacao/Navigation";

export default function Header() {

    const { toHome, toQuestoes, toDisciplinas, activeSection } = useNavigation()

    return (
        <div className="flex justify-around items-center w-[1200px] h-[100px] bg-white">

                <div className="flex gap-1 cursor-pointer p-1 text-lg" onClick={toHome}>
                    <img className="w-7 h-7" src="/images/logo.png" alt="" />
                    <span className="text-[#FD5875] font-bold">React</span>
                    <span className="text-slate-700 font-regular">Apostilas</span>
                </div>

                <div className="flex items-center justify-between gap-9 text-slate-700" >
                    <button 
                    className={`
                    cursor-pointer hover:text-[#FD5875] duration-300
                    ${activeSection === 'home' ? 'active' : ''}
                    `} onClick={toHome}>Home</button>
                    <button className="cursor-pointer hover:text-[#FD5875] duration-300" onClick={toDisciplinas}>Disciplinas</button>
                    <button className="cursor-pointer hover:text-[#FD5875] duration-300" onClick={toQuestoes}>Exercícios</button>
                    <button className="cursor-pointer hover:text-[#FD5875] duration-300">Sobre</button>
                    <button className="cursor-pointer bg-[#FD5875] px-7 py-1 rounded-2xl text-white font-medium hover:bg-[#f7aac0] duration-700">LOGIN</button>
                </div>

        </div>
    )
}