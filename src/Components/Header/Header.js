import React, {useContext} from 'react';
import { useHistory } from 'react-router-dom';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';

import { AuthContext, FirebaseContext } from '../../store/Context';


function Header() {

  const {user} = useContext(AuthContext);

  const {firebase} = useContext(FirebaseContext);

  const history = useHistory();

  const handleLogout = () => {
    
    firebase.auth().signOut();

    history.push('/login');

  }

  const handleLoginButtonClick = () => {

    history.push('/login');

  }

  const handleSellButtonClick = () => {

    if(!user){

      history.push('/login');

      return;

    }

    history.push('/create');

  }





  return (

    <div className="headerParentDiv">

      <div className="headerChildDiv">

        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>

        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>

        <div className="productSearch">

          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>

          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>

        </div>

        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>

        <div className="loginPage">

          { user ? 
          
            <span> {`Hi,  ${user.displayName}`} </span> 
            : 
            <span style={{ cursor: 'pointer' }} onClick={()=>handleLoginButtonClick()}> Login </span> }

          <hr />

        </div>

        { user && <span style={{ cursor: 'pointer' }} onClick={()=>handleLogout()}>Logout</span>}

        <div className="sellMenu" style={{ cursor: 'pointer' }} onClick={handleSellButtonClick} >
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>

      </div>

    </div>

  );

}

export default Header;
