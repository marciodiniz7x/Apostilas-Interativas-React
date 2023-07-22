import Footer from "@/components/basicos/Footer";
import Header from "@/components/basicos/Header";
import Sobre from "@/components/basicos/Sobre";
import { useEffect } from "react";

export default function pageSobre() {

    useEffect(() => {
        document.title = 'Sobre | ReactApostilas'
    })

    return (
        <div>
            <Header />
            <Sobre />
            <Footer />
        </div>
    )
}