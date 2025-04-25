import React from 'react';
import NavBar from '../common/navbar';
import './home.css';
import Footer from '../common/footer';
export default function HomeComponent() {
    return (
        <>
        <NavBar />
        <div>
            
            <h1>Home</h1>
            <p>Welcome to the home page!</p>
        </div>
        <Footer />
        </>
    );
}