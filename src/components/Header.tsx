import React from "react"
import { useNavigation } from "./Navigation";

export default function Header() {

    const {activeSection,
            toHome, toDisciplinas, toLogin, toQuestoes, toSobre} = useNavigation()

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
                        cursor-pointer duration-300
                        ${activeSection === '/home' ? 'active' : ''}
                        `} onClick={toHome}>Home</button>
                    </li>

                    <li>
                        <button className={`
                        cursor-pointer duration-300 ${activeSection === '/disciplinas' ? 'active' : ''}
                        `} onClick={toDisciplinas}>Disciplinas</button>
                    </li>

                    <li>
                        <button className={`
                        cursor-pointer duration-300 ${activeSection === '/questoes-interativas' ? 'active' : ''}
                        `} onClick={toQuestoes}>Exercícios</button>
                    </li>

                    <li>
                        <button className={`cursor-pointer duration-300 
                        ${activeSection === '/sobre' ? 'active' : ''}`} onClick={toSobre}>Sobre</button>
                    </li>

                    <li>
                        <button className="btn cursor-pointer bg-[#FD5875] px-7 py-1 rounded-2xl text-white font-medium duration-700" onClick={toLogin}>LOGIN</button>
                    </li>

                </ul>

        </div>
    )
}