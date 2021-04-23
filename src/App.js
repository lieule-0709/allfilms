import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './routers/Home.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import './libs/AlertBox/style.css';
import alertMessage from './libs/AlertBox/alert';

function App() {

  function closeLoginForm() {
    document.getElementById("login/registerForm").style.display = "none";
  }

  var login_click = ()=>{
    document.getElementById("login/registerForm").style.display = "block";
  }

  var login_btn_click = () => {
    let data = {
      "username": document.getElementById('lgusername').value,
      "password": document.getElementById('password').value
    }
    if (!data.username || !data.password) {
      if (!data.username) document.getElementById('lgusername').focus();
      else document.getElementById("password").focus();
      alertMessage("please fill all information", 3, 1300);
    }
    else {
      // login(data);
    }
  }

  return (
    <div className="App">
      <div className="header">
        <div className="head_content flex">
          <img className="logo" src={logo} alt="logo"></img>
          <div className="div_input">
            <input className="input" defaultValue="Tìm tên phim, diễn viên"></input>
            <FontAwesomeIcon icon={faSearch} size="3px" color="gray" className="icon_abs search" />
          </div>
          <div className="login">
            <FontAwesomeIcon icon={faUser} size="3px" color="gray" className="icon_abs user" />
            <label onClick={login_click}>login</label>
          </div>
        </div>
      </div>

      <div className="div_blur displayNone" id="login/registerForm">
        <div className="popup">
          <form className="form-container" action="">
            <label htmlFor="username"><b>Username</b></label>
            <input type="text" id="lgusername" placeholder="Enter username" name="username" />

            <label htmlFor="password"><b>Password</b></label>
            <input type="password" id="password" placeholder="Enter Password" name="password" />

            <button id="btn_login" type="button" className="btn" onClick={login_btn_click}>login</button>
            <button type="button" className="btn cancel" onClick={closeLoginForm}>close</button>
          </form>
        </div>

        <div className="popup">
          <form className="form-container" action="">
            <label htmlFor="fullName"><b>FullName</b></label>
            <input type="text" id="rgfullName" placeholder="FullName" name="fullName" />

            <label htmlFor="email"><b>Email</b></label>
            <input type="text" id="rgemail" placeholder="Email" name="email" />

            <label htmlFor="username"><b>Username</b></label>
            <input type="text" id="rgusername" placeholder="Enter username" name="username" />

            <label htmlFor="password"><b>Password</b></label>
            <input type="password" id="rgpassword" placeholder="Enter Password" name="password" />

            <button id="btn_regist" type="button" className="btn">regist</button>
            <button type="button" className="btn cancel" onClick={closeLoginForm}>Close</button>
          </form>
        </div>
      </div>

      <Router>
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route
            path="/" exact
            component={() => (
              <>
                hehe
                  <a href="/home"> Redirect Users </a>
              </>
            )}
          />
        </Switch>
      </Router>
      <footer>
        <p>Công Ty Cổ Phần ALLFILMS, Đại học Bách khoa- Đại học Đà Nẵng, 54, Nguyễn Lương Bằng, Hòa Khánh Bắc, Liên Chiểu, Đà Nẵng</p>
      </footer>
    </div>
  );
}

export default App;
