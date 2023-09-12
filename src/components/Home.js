import React, {useEffect} from "react";
import { Route, Link } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";
import AddProfile from '../components/AddProfile';

const Home = () => {
    const user = useStoreState(state => state.userLogin);
  return <>
        <AddProfile />
    </>;
};

export default Home;
