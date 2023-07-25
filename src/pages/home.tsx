import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Interface from "@/components/Home";
import { useEffect } from "react";

export default function interfacehome() {

    useEffect(() => {
        document.title = "Início | ReactApostilas";
    }, []);

    return (
        <div>
            <Header />
            <Banner />
            <Interface />
            <Footer />
        </div>
    )
}