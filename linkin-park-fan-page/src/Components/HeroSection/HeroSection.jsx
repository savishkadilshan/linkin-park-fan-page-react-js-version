import React from 'react'
import './HeroSection.css'
import './toggle.js'

function HeroSection() {
  return (
    <>
        <section className='hero-section'>
            <nav id="nav">
            <img src="/src/assets/img/logos/header-logo.png" alt="main-logo" />
            <div className="nav-links" id="nav-links">
                <i className="fa-solid fa-xmark" onclick="hideMenu()"></i>
                <ul>
                    <li><a href="#">Members</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Celebrations</a></li>
                    <li><a href="#">Albums</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">For Fans</a></li>
                </ul>
            </div>
            <i className="fa-solid fa-bars" onclick="showMenu()"></i>
            </nav>

            <div className="hero-content">
                <img src="/src/assets/img/logos/linkin-park-hero-section.png" alt="linkin-park-hero-section" />
                <p class="hero-content-desktop-text">Linkin Park was an American rock band that formed in 1996. <br /> They were known for their unique fusion of rock, metal, and hip-hop, and their powerful and emotional lyrics. <br /> The band achieved worldwide success with albums such as "Hybrid Theory" and "Meteora," and were known for hits like "In the End," "Numb," and "Crawling."</p>
                <p class="hero-content-mobile-text">Linkin Park was an American rock band that formed in 1996. <br /> They were known for their unique fusion of rock, metal, and hip-hop, and their powerful and emotional lyrics.</p>
            </div>
        </section>
    </>
  )
}

export default HeroSection