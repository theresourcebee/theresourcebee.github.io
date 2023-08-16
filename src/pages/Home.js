import Header from "../Components/Header";
import Footer from "../Components/Footer";
import About from "../Components/About";
import Homepage from "../Components/Homepage";
import Contact from "../Components/Contact";
import Portfolio from "../Components/Portfolio";

function Home(props) {
    return (
        <div className="App">
            <Header showCarousel={true} />
            <About />
            <Homepage />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;