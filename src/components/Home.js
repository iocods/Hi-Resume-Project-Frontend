import React, {useEffect} from "react";
import { Route, Link } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";
import AddProfile from './AddProfile';
import { Typography, Button } from "@mui/material";
import IconContainer from './IconContainer';


const Home = () => {
    const user = useStoreState(state => state.userLogin);
    const resumeType = "RESUME";

  return <>
        <section className="home-top-section">
            <div className="home-text-container">
                <Typography variant="h2" style={{color: '#0011ff', margin:"2rem 0rem"}}>
                    Get Hired Today
                </Typography>
                <p>
                    Are You Tired Of Applying For Openings Without Getting any Response?
                    Put A Halt To That Today With Our Properly Built AI Resumes CV's and Cover Letter.
                </p>
                <div>
                    <Link className="button">
                        Create CV
                    </Link>
                    <Link className="button">
                        Create Resume
                    </Link>
                </div>
            </div>
            <div className="parent-img-container">
            </div>
        </section>
        <section className="home-bottom-section">
            <div>
                <p>Show them that you've got what it takes to take their Company to the next level</p>
            </div>
            <div>

            </div>
        </section>
        <AddProfile 
           type={resumeType}
        />
        <IconContainer />
    </>;
};

export default Home;