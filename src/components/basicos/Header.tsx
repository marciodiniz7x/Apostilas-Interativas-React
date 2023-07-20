export default function Header() {
    return (
        <div className="flex justify-around items-center w-[1200px] h-[100px] bg-white">

                <div className="flex cursor-pointer p-1 text-lg border-2 border-y-indigo-700 border-x-[#f79618]">
                    <span className="text-[#613eff] font-bold">React</span>
                    <span className="text-slate-700 font-normal">Apostilas</span>
                </div>

                <div className="flex items-center justify-between gap-9 text-slate-700" >
                    <span className="cursor-pointer hover:text-[#f79618] duration-300">Home</span>
                    <span className="cursor-pointer hover:text-[#f79618] duration-300">Disciplinas</span>
                    <span className="cursor-pointer hover:text-[#f79618] duration-300">Exercícios</span>
                    <span className="cursor-pointer hover:text-[#f79618] duration-300">Sobre</span>
                    <button className="cursor-pointer bg-[#f79618] px-7 py-1 rounded-2xl text-white hover:bg-slate-700 duration-700">LOGIN</button>
                </div>

        </div>
    )
}