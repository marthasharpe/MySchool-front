import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import NewResource from '../resourceModal/ResourceModal';
import './SideTabs.css';

const SideTabs = () => {
    return (
        <Nav>
            <NewResource />
            <NavLink to="/subjects" className="link">Subjects</NavLink>
        </Nav>
    )
}

export default SideTabs;
