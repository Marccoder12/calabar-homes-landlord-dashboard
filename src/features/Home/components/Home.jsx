import { useState } from "react"
import "../styles/Home.css"
import { Navbar } from "./Navbar"
import { MainContent } from "./MainContent"
export const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <MainContent />
        </div>
    );
}