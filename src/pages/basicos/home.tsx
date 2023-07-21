import Banner from "@/components/basicos/Banner";
import Footer from "@/components/basicos/Footer";
import Header from "@/components/basicos/Header";
import Interface from "@/components/basicos/Home";
import { useEffect } from "react";


export default function interfacehome() {

    useEffect(() => {
        document.title = "Início | React Apostilas";
    }, []);

    return (
        <div className="flex flex-col justify-center align-middle">
            <Header />
            <Banner />
            <Interface />
            <Footer />
        </div>
    )
}