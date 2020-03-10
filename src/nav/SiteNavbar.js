import React from "react";
import './SiteNavbar.css';
import {Navbar, Nav} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'

import {
    Link
} from 'react-router-dom';

function SiteNavbar() {

    return (
        <div className="custom-upbar">
            <Navbar className="custom-navbar" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Learning Diary</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#topics">Topics</Nav.Link>
{/*                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>*/}
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </div>
    )
}

    export default SiteNavbar;