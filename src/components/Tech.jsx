import "../styles/tech.css";

function Tech() {
  return (
    <div className="tech">
      <div className="tech-row">
        <section className="col">
          <header className="title">
            <h2>Education 🎓</h2>
          </header>
          <div className="contents">
            <div className="box">
              <h4>2021 - 2023</h4>
              <h3>Bachelor Degree</h3>
              <p>
                I am a recent graduate of BSc (Hons) Computing from Islington
                College where I had pursed my interest in information
                technology. Furthermore, I had an opportunity to receive AAA
                scholarship for the academic first year.
              </p>
            </div>
            <div className="box">
              <h4>2018 - 2020</h4>
              <h3>NEB (+2)</h3>
              <p>
                I completed my high school from Trinity International College
                where I pursed the faculty of physical science.
              </p>
            </div>
          </div>
        </section>

        <section className="col">
          <header className="title">
            <h2>Experience 💻</h2>
          </header>
          <div className="contents">
            <div className="box">
              <h4>Jan 2023 - Apr 2023</h4>
              <h3>Frontend Developer Intern</h3>
              <p>
                I worked as a frontend developer intern for 3 months in
                ShotCoder Tech company where I had the opportunity to explore my
                skills and create real-world projects with other tech talents.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Tech;
