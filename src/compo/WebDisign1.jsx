import React from 'react';
import Header from '../webDisign1/header';
import Slide from '../webDisign1/slide';
import Contents from '../webDisign1/Contents';
// import Footer from '../webDisign1/Footer';

const WebDisign1 = () => {
    return (
        <>
            <div style={{width:'700px', height:'1200px'}}>
                <Header /><hr />
                <Slide /><hr />
                <Contents /><hr />
                {/* <Footer /> */}
            </div >
        </>
    );
};

export default WebDisign1;