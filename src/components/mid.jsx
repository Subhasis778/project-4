import "./mid.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Mid = () => {
  return (
    <>
      <div className="box">
        <h1 className="intro">
          Hi,I'm <span className="outro">Subhasis Routray</span>
          <div className="letter">
            Front End web devloper passionate about creating innovative web
            solutions
          </div>
          <div className="buttons">
            <button type="button" class="btn btn-outline-warning">
              View My work
            </button>
            <button type="button" class="btn btn-outline-warning">
              Get In Touch
            </button>
          </div>
        </h1>
        <img
          src="https://m.media-amazon.com/images/I/41jLBhDISxL.jpg"
          alt="photo"
        ></img>
      </div>
    </>
  );
};

export default Mid;
