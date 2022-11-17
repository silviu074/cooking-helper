import React from 'react'
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css"

export const Navbar = () => {

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
        <h3>Cooking helper</h3>
        <nav ref={navRef}>
            <a href="/">Home</a>
            <a href="/all-recipes">All Recipes</a>
            <a href="/easy-recipes">Easy Recipes</a>
            <a href="/leftovers">Leftovers</a>
            <button
				className="nav-btn nav-close-btn"
				onClick={showNavbar}>
				<FaTimes />
			</button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
			<FaBars />
		</button>
    </header>
  )
}
