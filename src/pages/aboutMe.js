import ProfilePicture from "../images/me.jpg";
import "../stylesheets/aboutMe.css";
import Resume from "../files/Zabloon Albert Resume.pdf";
function AboutMe() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
      className="screen-root-div"
    >
      <h1 className="heading">About</h1>

      <div className="about-wrapper">
        <div className="about-section">
          <h1 className="about-section-heading" style={{ color: "#ed7d31" }}>
            About Me
          </h1>

          <div className="grid-row">
            <div>
              <label>First Name</label>
              <div className="value">Zabloon</div>
            </div>
            <div>
              <label>Last Name</label>
              <div className="value">Albert</div>
            </div>

            <div>
              <label>Email</label>
              <div className="value">zabloona@gmail.com</div>
            </div>

            <div>
              <label>Phone</label>
              <div className="value">+92 306-2925548</div>
            </div>

            <div>
              <label>Last Position</label>
              <div className="value">Frontend Engineer</div>
            </div>

            <div>
              <label>Organization</label>
              <div className="value">Daraz.pk ( Alibaba Group )</div>
            </div>

            <div>
              <a href={Resume} download="Zabloon Albert Resume">
                <button className="button">Download Resume</button>
              </a>
            </div>
          </div>
        </div>

        <div className="image-section">
          <div className="shadow-image-container">
            <div className="shadowCircle"></div>
            <img
              className="profilePicture"
              src={ProfilePicture}
              alt="Zabloon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
