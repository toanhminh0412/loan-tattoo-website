import Header from "../components/Header";
import PermanentMakeup from "@/components/PermanentMakeup";
import Portfolio from "../components/Portfolio";
import FAQs from "@/components/FAQs";

export default function Home() {
    return (
        <>
            <Header/>
            <FAQs/>
            <PermanentMakeup/>
            <Portfolio/>
        </>
    );
}
