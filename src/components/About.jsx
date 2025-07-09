import "./About.css";
import "bootstrap/dist/css/bootstrap.min.css";
const About = () => {
  return (
    <>
      <section id="about">
        <div className="hd-box">
          <div className="heading">About Me</div>
          <div className="text">
            <b>
              I'm a passionate front-end web devloper creating web applications
              that solve real world problems.I love working with modern
              technologies and am always eager to learn new things
            </b>
          </div>
          <br />
          <br />
          <div className="card-container">
            <div className="card-about">
              <h5>Clean code</h5>
              <p>
                Writing maintainable,scalable code that follows best practices
              </p>
            </div>
            <div className="card-about">
              <h5>Responsive design</h5>
              <p>
                Creating beautiful,mobile-first designs that work on all devices
              </p>
            </div>
            <div className="card-about">
              <h5>Performance</h5>
              <p>Optmizing applications for speed and best user experience</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
