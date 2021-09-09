import Button from '@restart/ui/esm/Button';
import React from 'react';
import Header from './Header';
import Card1 from './Card1';
import './styles/ImgStyle.css';

function Main() {
    return(
        <>
        <div className="MainParent">
            <Header></Header>
            <div className="mainDesign">
                <Button className="btn btn-primary">Search</Button>
            </div>
            <div className="Childclass"> 
                <Card1></Card1>
            </div>
        </div>
        </>
    );
}

export default Main;