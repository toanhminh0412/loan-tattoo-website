import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";

export default function Home() {
    return (
        <>
            <Header/>
            <AboutMe/>
            <div className="mt-20">
                <Portfolio/>
            </div>
            <Testimonials/>
        </>
    );
}
