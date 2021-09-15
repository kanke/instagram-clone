import React from 'react';
import './Header.css';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import Avatar from '@material-ui/core/Avatar'
import {Form, FormGroup, Input} from 'reactstrap';


const Header = () => {
    return (
        <div className="navbar">
            <div>
                <a href="/">
                    <div className="font-face-bill">
                        Boolgram
                    </div>
                </a>
            </div>
            <div>
                <Form inline>
                    <FormGroup className="searching">
                        <Input className="search-bar" type="search" name="search-bar-name" id="searchBar"
                               placeholder="&#xF002; Search"/>
                    </FormGroup>
                </Form>
            </div>
            <div>
                <nav className="nav">
                    <HomeOutlinedIcon className="nav-items" alt="home"/>
                    <SendOutlinedIcon className="nav-items" alt="direct message"/>
                    <ExploreOutlinedIcon className="nav-items" alt="explore"/>
                    <FavoriteBorderOutlinedIcon className="nav-items" alt="like"/>
                    <Avatar alt="Baby Yoda" src="https://imgur.com/VCpS8cd.jpeg" className="nav-items"/>
                </nav>
            </div>
        </div>
    );
}

export default Header;