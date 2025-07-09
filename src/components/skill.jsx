import "./skill.css";
const Skill = () => {
  return (
    <>
      <section id="skill">
        <div className="head">Skills</div>
        <div className="total-progress">
          <b>Java script</b>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "70%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              70%
            </div>
          </div>
          <br />
          <b>Html</b>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "90%" }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              90%
            </div>
          </div>
          <br />
          <br />
          <b>Css</b>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "80%" }}
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              80%
            </div>
          </div>
          <br />
          <b>React</b>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "95%" }}
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              95%
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
