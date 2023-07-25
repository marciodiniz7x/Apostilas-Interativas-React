export default function Login() {
    return (
        <div className="interface flex items-center justify-center min-h-[85vh]">

            <div className="flex bg-white w-[800px] h-[500px] rounded-xl shadow-2xl shadow-[#4dcdff]">

                {/* LEFT */}
                <div className="w-[60%] h-500px rounded-l-xl"></div>

                {/* RIGHT */}
                <div className="flex gap-8 flex-col justify-center items-center w-[350px] h-500px bg-gradient-to-b from-[#5CF4FF] to-[#4DADFF] rounded-r-xl text-white text-center">
                    <span className="text-2xl font-bold">Bem-vindo(a) de volta!</span>
                    <span className="px-12" >Seu progresso não pode parar! Volte e dê continuidade aos seus estudos e upe o seu perfil.</span>
                </div>
               
            </div>

        </div>
    )
}