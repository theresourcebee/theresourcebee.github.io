import Footer from "../Components/Footer";
import Contact from "../Components/Contact";
import Header from "../Components/Header";

function ContactPage() {
    return (
        <div className="App">
            <Header showCarousel={false} />
            <Contact />
            <Footer />
        </div>
    );
}

export default ContactPage;