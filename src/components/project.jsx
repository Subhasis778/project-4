import "./project.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import img1 from "../assets/logo.svg";

const Project = () => {
  return (
    <>
      <section id="project">
        <div className="container">
          <div className="hding">Featured Projects</div>;
          <div className="cards">
            <div className="card">
              <img
                src="https://tse4.mm.bing.net/th/id/OIP.bK-j7oUl6kNbPK5RzkTMuwHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
                class="card-img-top"
                alt="comp"
              ></img>
              <h4>Html project 1</h4>
              <p>Front-end web application built with html tags</p>
              <div className="but">
                <button
                  type="button"
                  class="btn btn-outline-primary color-blue
            "
                >
                  code
                </button>
                <button type="button" class="btn btn-primary">
                  demo
                </button>
              </div>
            </div>
            <div className="card">
              <img
                src="https://png.pngtree.com/background/20230522/original/pngtree-futuristic-design-background-wallpaper-techy-wallpaper-picture-image_2688431.jpg"
                class="card-img-top"
                alt="comp"
              ></img>
              <h4>Html Project 2</h4>
              <p>
                Front end web application built with html tags and html forms
              </p>
              <div className="but">
                <button type="button" class="btn btn-outline-primary">
                  code
                </button>
                <button type="button" class="btn btn-primary">
                  demo
                </button>
              </div>
            </div>
            <div className="card">
              <img
                src="https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg"
                class="card-img-top"
                alt="comp"
              ></img>
              <h4>Html and css project</h4>
              <p>
                Front end web application built with html tags and css
                attributes
              </p>
              <div className="but">
                <button type="button" class="btn btn-outline-primary">
                  code
                </button>
                <button type="button" class="btn btn-primary">
                  demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
