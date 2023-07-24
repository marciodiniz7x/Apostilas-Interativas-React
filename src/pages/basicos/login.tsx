import Footer from "@/components/basicos/Footer";
import Header from "@/components/basicos/Header";
import { useEffect } from "react";
import Login from "@/components/basicos/Login";

export default function pageDisciplinas() {

    useEffect(() => {
        document.title = "Login | ReactApostilas";
        
    }, []);

    return (
        <div>
            <Header />
            <Login />
            <Footer />

        </div>
    )
}