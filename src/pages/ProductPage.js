import Header from "../Components/Header";
import Footer from "../Components/Footer";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Product from "../Components/Product";

function ProductPage() {
    return (
        <div className="App">
            <Header showCarousel={false} />
            <About />
            <Product />
            <Contact />
            <Footer />
        </div>
    );
}

export default ProductPage;