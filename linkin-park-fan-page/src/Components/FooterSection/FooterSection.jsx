import React from 'react'
import './FooterSection.css'

function FooterSection() {
    return (
        <>
            <footer>
                <div className="footer-sec-one">
                    <img src="/src/assets/img/logos/linkin-park-footer-logo.png" alt="linkin-park-logo" />
                    <div className="footer-nav-links">
                        <ul>
                            <li><a href="#">Members</a></li>
                            <li><a href="#">Events</a></li>
                            <li><a href="#">Celebrations</a></li>
                            <li><a href="#">Albums</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">For Fans</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-sec-two">
                    <p>Webpage Design by Savishka Dilshan</p>
                    <p>&copy; 2023 TheSavishka inc. All Right Recieved.</p>
                </div>
            </footer>
        </>
    )
}

export default FooterSection