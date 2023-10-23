import "./Navbar.css"

function Navbar() {
    return(
        <nav id="desktop-nav">
            <div class="title">Bob Bob</div>
            <div>
                <ul class="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )

}

export default Navbar;