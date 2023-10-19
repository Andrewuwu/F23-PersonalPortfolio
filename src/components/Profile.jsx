import "./Profile.css"

function Profile() {
    return(
    <section id="profile">
      <div class="section__pic-container">
        <img src="./src/assets/profile-pic.png" alt="John Doe profile picture" />
      </div>
      <div class="section__text">
        <p class="section__text__p1">Hello, I'm</p>
        <h1 class="title">John Doe</h1>
        <p class="section__text__p2">Frontend Developer</p>
        <div class="btn-container">
          <button
            class="btn btn-color-2"
            onclick="window.open('./src/assets/resume-example.pdf')"
          >
            Download CV
          </button>
          <button class="btn btn-color-1" onclick="location.href='./#contact'">
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src="./src/assets/linkedin.png"
            alt="My LinkedIn profile"
            class="icon"
            onclick="location.href='https://linkedin.com/'"
          />
          <img
            src="./src/assets/github.png"
            alt="My Github profile"
            class="icon"
            onclick="location.href='https://github.com/'"
          />
        </div>
      </div>
    </section>
    )
}

export default Profile