import Banner from "../Banner/Banner";
import ExtraSectionOne from "../ExtraSectionOne/ExtraSectionOne";
import ExtraSectionTwo from "../ExtraSectionTwo/ExtraSectionTwo";
import PhotoGalary from "../PhotoGalary/PhotoGalary";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PhotoGalary></PhotoGalary>
            <ShopByCategory></ShopByCategory>
            <ExtraSectionTwo></ExtraSectionTwo>
            <ExtraSectionOne></ExtraSectionOne>
            
        </div>
    );
};

export default Home;