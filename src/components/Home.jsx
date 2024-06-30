import Category from "./Category";
import Craft from "./Craft";
import Gallery from "./Gallery";
import Hero from "./Hero";
import Review from "./Review";

const Home = () => {
    return (
        <div>
            <Hero/>
            <Craft/>
            <Category/>
            <Gallery/>
            <Review/>
        </div>
    );
};

export default Home;
