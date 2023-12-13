import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sobre from "@/components/Sobre";
import { useEffect } from "react";

export default function pageSobre() {

    useEffect(() => {
        document.title = 'Sobre | ReactApostilas'
    }, [])

    return (
        <div>
            <Header />
            <Sobre />
            <Footer />
        </div>
    )
}