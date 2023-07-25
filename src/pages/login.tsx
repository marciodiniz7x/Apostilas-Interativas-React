import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect } from "react";
import Login from "@/components/Login";

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