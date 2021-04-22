import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './routers/Home.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

function App() {
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
                  <a href="">login</a>
              </div>
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
