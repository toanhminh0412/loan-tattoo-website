import Header from "../components/Header";
import PermanentMakeup from "@/components/PermanentMakeup";
import Portfolio from "../components/Portfolio";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <>
            <Header/>
            <Contact/>
            <PermanentMakeup/>
            <Portfolio/>
        </>
    );
}
