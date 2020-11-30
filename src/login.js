// import logo from './logo.svg';
import './login.css';
import {ReactComponent as Logo} from './image/logo.svg'
import {ReactComponent as Google} from './image/Google.svg'
import {ReactComponent as Facebook} from './image/Facebook.svg'
import {ReactComponent as ShopBag} from './image/ShopBag.svg'
import {ReactComponent as UsernameIcon} from './image/UsernameIcon.svg' 
import {ReactComponent as PasswordIcon} from './image/Lock.svg'

import SlideShow from './SlideShow'

function Login() {
  return (
    <div>
        <div className = "Left">
          {/* logo */}
          <text className="Product-Title">Furniture Marketplace</text>
          {/* picture */}
          <Logo className = "Logo"/>
          <ShopBag className = "Text-Logo"/>
          {/* <img src={backgroud} className="Image" alt="null"></img> */}
          {/* slide show */}
          <SlideShow/>

        </div>

        <div className = "Right">
          <text className="Login-Title">Login to Shop Bag</text>
          
          <div className="Username-Box" placeholder="Username">
            <UsernameIcon className="Username-Icon"></UsernameIcon>
            <input type="Text" placeholder="Username" className="Input"></input>
          </div>

          <div className="Password-Box" placeholder="Password">
              <PasswordIcon className="Password-Icon"></PasswordIcon>
              <input type="Password" placeholder="Password" className="Input"></input>
          </div>

          <button className="Login-Button">
            Login
          </button>

          <text className="Text-Register">Didn’t Have Account? <b>Register</b></text>
         
          <button className="Google-Box">
            <Google/>
          </button>

          <button className="Facebook-Box">
            <Facebook/>
          </button>

        </div>
    </div>
  );
}

export default Login;
