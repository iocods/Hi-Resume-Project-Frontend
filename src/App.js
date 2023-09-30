import {React, useEffect, useContext, useRef} from "react";
import {Routes, Route, useNavigate, Link} from "react-router-dom";
import UserRegistration from "./components/UserRegistration";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Home from "./components/Home";
import { useStoreActions, useStoreState } from "easy-peasy";
import Cv from "./components/Cv";
import DataContext, { DataProvider } from "./context/DataContext";
import Footer from "./components/Footer";

const App = () => {
  const user = useStoreState(states => states.userLogin);
  const setUser = useStoreActions(actions => actions.setUserLogin);
  const open = useStoreState(state => state.logout);
  const setOpen = useStoreActions(actions => actions.setLogout);
  const navigate = useNavigate();
  const {setDropDownFalse} = useContext(DataContext)

  useEffect(() => {
  }, []);


  const logout = () => {
    setUser({...user, username: '', password: '', authorized: false});
    sessionStorage.removeItem('jwt');
    navigate("/login", {replace: true});
  }
    return( 
      <DataProvider>
        <div onClick={setDropDownFalse}>
          <Header logout={logout} />
          <Routes>
            <Route exact path='/register' element={<UserRegistration/>} />
            <Route exact path='/' element={<Home />} />
            <Route exact path="/resume/*" element={<Resume />} />
            <Route exact path="/cv/*" element={<Cv />} />
          </Routes>
          <Footer />
        </div>
      </DataProvider>
    );
};

export default App;
