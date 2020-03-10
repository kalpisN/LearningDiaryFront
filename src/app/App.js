import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import SiteNavbar from '../nav/SiteNavbar';
import Topic from "../topics/Topic";

function App() {
    return (
        <div className="App container-fluid">
            <Router>
                <div className="row">
                    <SiteNavbar/>
                    <div className="col-xl-9">
                        <Switch>
                            <Route exact path="/" component={Topic}/>

                        </Switch>
                    </div>
                </div>
            </Router>
        </div>
    );
}


/*const Demoteksti = () => (
<div>Tämä on oppimispäiväkirja</div>
);*/

export default App;
