import "./menu.style.css";
import Burger from '../burger/burger.component'

import Pelilos from "../../assets/imgs/pelilos-sicritis.png"
import PolloPollo from "../../assets/imgs/pollopollo.png"
import TheLondoner from "../../assets/imgs/the-londoner.png"

function Menu() {
  return (

    <>
    <div className="main-menu-wrapper">
        <div className="main-menu">
            <Burger img={Pelilos}
             classHandler="burger burger1"
             type="🥩"
              name="PELILOS SICRITIS"
              price='12.50'
               ingredients="2 Beef patties, 1 Egg, 4 strips of Bacon, Fried Onion Strips, Swiss Cheese" />

             <Burger img={PolloPollo}
              classHandler="burger burger2"
               type="🐔"
               name="POLLO POLLO"
               price='13.50'
                ingredients="Fried shoyu marinated chicken, 2 strips of Bacon, Swiss Cheese" />

            <Burger img={TheLondoner}
             classHandler="burger burger3"
             type="🌱"
              name="THE LONDONER"
              price='11.25'
               ingredients="Veggie Burger, 2 Slices of Pickles, Ketchup, American Cheese" />
        </div>
        
    </div>
    
    </>
  );
}

export default Menu;
