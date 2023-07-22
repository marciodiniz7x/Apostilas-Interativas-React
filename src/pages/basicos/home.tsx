import Banner from "@/components/basicos/Banner";
import Footer from "@/components/basicos/Footer";
import Header from "@/components/basicos/Header";
import Interface from "@/components/basicos/Home";
import { useEffect } from "react";
import { useNavigation } from "@/components/comunicacao/Navigation";


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