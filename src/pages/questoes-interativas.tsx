import Footer from "@/components/Footer";
import Header from "@/components/Header";
import QuestoesInterativas from "@/components/Questoes-Interativas";
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