import profileImg from "./assets/profile-img2.jpeg";

function Header() {
  return (
    <header className="header">
      <div className="profile-img">
        <img src={profileImg}></img>
      </div>
      <div className="header_information">
        <h1>Daniel Quintero</h1>
        <h2>Frontend Developer</h2>
        <h3>dquinteromarmolg.website</h3>
        <div className="header_buttons-container">
          <a className="button" href="">
            <i class="fa-solid fa-envelope"></i>
            Email
          </a>
          <a className="button button-blue" href="">
            <i class="fa-brands fa-linkedin"></i>Linkedin
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
