import React from 'react';
import Button from 'react-bootstrap/Button';
import Footer from '../pages/Footer/Footer';
import NoticeHere from '../pages/Notice/NoticeHere';
import Navbar from './Navbar/Navbar';

const Home = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <NoticeHere />
            <Footer />
        </div>
    );
};

export default Home;