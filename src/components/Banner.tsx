
import React from "react";
import { useNavigation } from "./Navigation";

export default function() {

    const {toDisciplinas} = useNavigation();
    

    return (
        <div className="flex w-[1200px] h-[500px]">

            <div className="flex flex-col justify-center items-center left w-[600px] h-[500px] bg-white ">
                <div className="flex flex-col justify-center gap-3 w-[400px]">
                    <span className="text-4xl font-bold">Plataforma de Estudos Estilosa e Interativa</span>
                    <span>Com apostilas exercícios interativos</span>
                    <button className="btn bg-[#FF405C] hover:bg-[#4B6FC7] w-[150px] py-2 mt-6 text-white font-medium rounded-3xl duration-300" onClick={toDisciplinas}>Iniciar Estudos</button>
                </div>
            </div>

            <div className="right flex justify-center items-center left w-[600px] h-[500px] bg-white">

            </div>

        </div>
    )
}