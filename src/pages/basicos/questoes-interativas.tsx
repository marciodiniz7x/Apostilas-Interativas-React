import Footer from "@/components/basicos/Footer";
import Header from "@/components/basicos/Header";
import QuestoesInterativas from "@/components/basicos/Questoes-Interativas";
import { useEffect } from "react";

export default function pageQuestoesInterativas() {

    useEffect(() => {
        document.title = 'Questões Interativas | ReactApostilas';
    }, []);

    return (
        <div>
            <Header />
            <QuestoesInterativas />
            <Footer />
        </div>
    )
}