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
                Having pursued my interest in information technology, I just
                graduated with a BSc (Hons) in Computing from Islington College.
                Additionally, I was qualified to obtain a AAA scholarship for
                the first academic year of study.
              </p>
            </div>
            <div className="box">
              <h4>2018 - 2020</h4>
              <h3>NEB (+2)</h3>
              <p>
                I pursued the physical science program at Trinity International
                College for two years and completed my high school journey.
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
                During my three months as an intern frontend developer at
                ShotCoder IT, I had the chance to improve my skills and
                collaborate with other IT experts on real-world projects.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Tech;
