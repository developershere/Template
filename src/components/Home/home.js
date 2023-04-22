import BestAuthor from "../BestAuthor/bestAuthor";
import Service from "../Service/service";
import Banner from "../banner/banner";
import Carousal from "../carousal/carousal";
import Footer from "../footer/footer";

import Header from "../header/header";
import MostProduct from "../mostProductArea/mostproduct";
import Products from "../products/products";
import TopInteresting from "../topInteresting/topInteresting";
 import ViewDescription from "../view dwscription/description";

function Home(){
   return<>
    <Header/>
    <Service/>
    {/* <div id="test">jjuu</div> */}
    <Carousal />
    <TopInteresting/>
    <BestAuthor/>
    <Products/>
    <Banner/>
    <MostProduct/>
      <ViewDescription/>
    <Footer/>
   
   </>
}

export default Home;