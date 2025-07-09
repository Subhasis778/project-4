import "./Down.css";
const Down = () => {
  return (
    <>
      <section id="contact">
        <div className="bottom-container">
          <div className="bottom-heading">Get In Touch</div>
          <div className="info-abt">
            Have a project in mind? Let's work together to bring your ideas to
            life
          </div>
          <br />
          <div className="info-box">
            <div className="info">
              <h6>Email</h6>
              <p>sroutray890@gmail.com</p>
            </div>
            <div className="info">
              <h6>Phone</h6>
              <p>+91(7855)-836-778</p>
            </div>
            <div className="info">
              <h6>Location</h6>
              <p>Bhubaneswar,Odisha</p>
            </div>
          </div>
          <div className="info-btn">
            <button
              type="button"
              className="btn btn-outline-light"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/subhasis-routray-130b2532a",
                  "_blank"
                )
              }
            >
              LinkedIn
            </button>

            <button
              type="button"
              class="btn btn-outline-light"
              onClick={() =>
                window.open("https://github.com/Subhasis778", "_blank")
              }
            >
              GitHub
            </button>
            <button
              type="button"
              class="btn btn-outline-light"
              onClick={() =>
                window.open(
                  "https://x.com/SubhasisRo75598?t=_eHLqhVobwSee7wiRk3J8w&s=08",
                  "_blank"
                )
              }
            >
              Twitter
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Down;
