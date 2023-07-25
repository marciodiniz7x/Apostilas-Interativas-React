import React from "react";

export default function Interface() {
    return (      
        <div className="flex flex-col items-center text-center interface">

            

            {/* Destaques */}

            
            <div className="text-white font-semibold text-lg flex gap-10 justify-center items-center w-screen mt-16">

                

                {/* 01 */}
                <button className="btn flex flex-col justify-center items-center w-[200px] h-[200px] rounded-md bg-gradient-to-b from-[#fadb77] to-[#FF405C]">
                    <img src="" alt="" />
                    <span>Matemática</span>
                </button>

                {/* 02 */}
                <button className="btn flex flex-col justify-center items-center w-[200px] h-[200px] rounded-md bg-gradient-to-b from-[#5CF4FF] to-[#4DADFF]">
                    <img src="" alt="" />
                    <span>Português</span>
                </button>

                {/* 03 */}
                <button className="btn flex flex-col justify-center items-center w-[200px] h-[200px] rounded-md bg-gradient-to-b from-[#fd7edd] to-[#4B6FC7]">
                    <img src="" alt="" />
                    <span>Informática</span>
                </button>

            </div>
        </div>
    )
}