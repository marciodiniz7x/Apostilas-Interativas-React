import Footer from "@/components/basicos/Footer";
import Header from "@/components/basicos/Header";
import Disciplinas from "@/components/basicos/Disciplinas";
import { useEffect } from "react";

export default function pageDisciplinas() {

    useEffect(() => {
        document.title = "Disciplinas | ReactApostilas";
        
    }, []);

    return (
        <div>
            <Header />
            <Disciplinas />
            <Footer />

        </div>
    )
}