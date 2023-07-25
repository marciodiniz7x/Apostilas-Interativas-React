import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Disciplinas from "@/components/Disciplinas";
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