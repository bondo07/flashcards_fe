import dCC from '../../assets/dCC_Transparent.png'
import './Header.css'
const Header = () => {



    return ( 
        <header>
            <div>
                <img src={dCC} alt='dCC logo'/>
                <h1>
                    Libraries FlashCards!
                </h1>
            </div>
        </header>
     );
}
 
export default Header;