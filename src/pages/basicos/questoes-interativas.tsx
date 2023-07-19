import Footer from "@/components/basicos/Footer";
import Header from "@/components/basicos/Header";
import QuestoesInterativas from "@/components/basicos/Questoes-Interativas";

export default function pageQuestoesInterativas() {
    return (
        <div className="flex flex-col justify-center align-middle">
            <Header />
            <QuestoesInterativas />
            <Footer />
        </div>
    )
}