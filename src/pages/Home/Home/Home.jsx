import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import ExtraSectionOne from "../ExtraSectionOne/ExtraSectionOne";
import ExtraSectionTwo from "../ExtraSectionTwo/ExtraSectionTwo";
import PhotoGalary from "../PhotoGalary/PhotoGalary";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import TeamMember from "../TeamMember/TeamMember";

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <PhotoGalary></PhotoGalary>
            <ShopByCategory></ShopByCategory>
            <TeamMember></TeamMember>
            <ExtraSectionTwo></ExtraSectionTwo>
            <ExtraSectionOne></ExtraSectionOne>
            
        </div>
    );
};

export default Home;