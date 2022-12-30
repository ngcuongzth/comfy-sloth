import Hero from "../components/Layouts/Home/Hero"
import Services from "../components/Layouts/Home/Services"
import Contact from "../components/Layouts/Home/Contact"
import FeaturedProducts from "../components/Layouts/Home/FeaturedProducts"

const HomePage = () => {
    return (
        <main>
            <Hero />
            <FeaturedProducts />
            <Services />
            <Contact />
        </main>
    )
}

export default HomePage