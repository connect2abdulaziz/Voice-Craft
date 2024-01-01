import React ,{ useState }from 'react';
import './styles.css'; // Assuming you have a CSS file named style.css
import log from './images/undraw_data_input_fxv2.svg';
import register from './images/undraw_recording_re_5xyq.svg';
import user from './images/user.png';
import lock from './images/lock.png'
import email from './images/email.png'
import fb from './images/facebook.png'
import link from './images/linkedin.png'
import google from './images/social.png'
import twiiter from './images/twitter.png'
const SignLogin = () => {

  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };
  return (
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
      <div className="signin-signup">
        <form action="#" className="sign-in-form">
          <h2 className="title">Sign in</h2>
          <div className="input-field">
          <img src={user} alt="" className="w-8 pt-3 pl-1"/>
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-field">
          <img src={lock} alt="" className="w-8 pt-3 pl-1"/>
            <input type="password" placeholder="Password" />
          </div>
          <input type="submit" value="Login" className="btn solid" />
          <p className="social-text">Or Sign in with social platforms</p>
          <div className="social-media">
            <a href="./" className="social-icon">
            <img src={google} alt="" className="w-10"/>
            </a>
            <a href="./" className="social-icon">
            <img src={fb} alt="" className="w-10"/>
            </a>
            <a href="./" className="social-icon">
            <img src={twiiter} alt="" className="w-10"/>
            </a>
            <a href="./" className="social-icon">
            <img src={link} alt="" className="w-10"/>
            </a>
          </div>
        </form>
        <form action="./" className="sign-up-form">
          <h2 className="title">Sign up</h2>
          <div className="input-field">
          <img src={user} alt="" className="w-8 pt-3 pl-1"/>
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-field">
          <img src={email} alt="" className="w-8 pt-3 pl-1"/>
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-field">
          <img src={lock} alt="" className="w-8 pt-3 pl-1"/>
            <input type="password" placeholder="Password" />
          </div>
          <input type="submit" className="btn" value="Sign up" />
          <p className="social-text">Or Sign up with social platforms</p>
          <div className="social-media">
            <a href="./" className="social-icon">
            <img src={google} alt="" className="w-10"/>
            </a>
            <a href="./" className="social-icon">
            <img src={fb} alt="" className="w-10"/>
            </a>
            <a href="./" className="social-icon">
            <img src={twiiter} alt="" className="w-10"/>
            </a>
            <a href="./" className="social-icon">
            <img src={link} alt="" className="w-10"/>
            </a>
          </div>
        </form>
      </div>
    </div>
    <div className="panels-container">
      <div className="panel left-panel">
        <div className="content">
          <h3>New here ?</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
            ex ratione. Aliquid!
          </p>
          <button className="btn transparent" id="sign-up-btn" onClick={handleSignUpClick}>
            Sign up
          </button>
        </div>
        <img src={log} className="image" alt="" />
      </div>
      <div className="panel right-panel">
        <div className="content">
          <h3>One of us ?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            laboriosam ad deleniti.
          </p>
          <button className="btn transparent" id="sign-in-btn" onClick={handleSignInClick}>
            Sign in
          </button>
        </div>
        <img src={register} className="image" alt="" />
      </div>
    </div>
    </div>
    
  );
}

export default SignLogin;
