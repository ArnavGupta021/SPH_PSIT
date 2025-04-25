import React from 'react';
import NavBar from '../common/navbar';
import Footer from '../common/footer';
import './dashboard.css';
export default function Dashboard() {
    return (
        <>
        <NavBar />
        <div>
        <h1>Dashboard</h1>
        <p>Welcome to the dashboard!</p>
        </div>
        <Footer />
        </>
    );
}
