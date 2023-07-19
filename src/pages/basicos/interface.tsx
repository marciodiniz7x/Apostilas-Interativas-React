import Banner from "@/components/basicos/Banner";
import Footer from "@/components/basicos/Footer";
import Header from "@/components/basicos/Header";
import Interface from "@/components/basicos/Interface";


export default function interfacehome() {
    return (
        <div className="flex flex-col justify-center align-middle">
            <Header />
            <Banner />
            <Interface />
            <Footer />
        </div>
    )
}