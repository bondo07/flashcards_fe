import dCC from '../../assets/dCC_Transparent.png'
import './Header.css'
const Header = () => {



    return ( 
        <header>
            <div>
                <h1 className='logo'>
                    Libraries<img src={dCC} alt='dCC logo'/>FlashCards!
                </h1>
            </div>
        </header>
     );
}
 
export default Header;