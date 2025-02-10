import React from "react";
import {
  experiences,
  projects,
  articles,
  skills,
  publications,
  footerData,
} from "./portfolioData";

const Home = () => {
  return (
    <>
      <div id="about-main-div">
        <section id="about">
          <img
            id="about-photo"
            src="/techImages/deepansh.jpg"
            alt="Profile Picture"
          />
          <div>
            <p id="about-name">i'm deepansh kumar</p>
            <div id="about-content">
              <span>full-stack developer 👨‍💻</span>
              <span>cloud computing enthusiast ☁️</span>
              <span>like to spend time cubing 🚀</span>
              <span>✨✨</span>
            </div>
          </div>
        </section>
      </div>

      <div id="main-home-container">
        {/* Timeline Section */}
        <div className="main-headings">
          <h1 className="thefont">timeline</h1>
        </div>
        <div id="timeline">
          <div className="experience">
            {experiences.map((experience) => {
              return (
                <>
                  <h2>{experience.company}</h2>
                  <h3>{experience.profile}</h3>
                  <p>{experience.date}</p>
                  <p>{experience.content}</p>
                </>
              );
            })}
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <div className="main-headings">
            {" "}
            <h1 className="thefont">skills</h1>
          </div>
          <div>
            {skills.map((skillCategory) => {
              return (
                <div id="skill-card">
                  <h2>{skillCategory.title}</h2>
                  <div id="tech-images-div">
                    {skillCategory.images.map((img) => {
                      return (
                        <>
                          <img
                            src={img}
                            alt="tech-img"
                            className="mini-images"
                          />
                        </>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <div className="main-headings">
            <h1 className="thefont">projects</h1>
          </div>

          {projects.map((project, index) => (
            <div id="project-card" key={index}>
              <h2>{project.title}</h2>
              <h3>{project.description}</h3>
              {/* <div className="tech-images">
                {project.techimages.map((img, idx) => (
                  <img key={idx} src={img} className="mini-images" alt="tech" />
                ))}
              </div> */}
              <div id="project-image">
                <img src={project.image} alt="project" />
              </div>
              <div className="project-links">
                <a href={project.livelink}>Live </a>
                <br />
                <br />
                <a href={project.githublink}>GitHub</a>
              </div>
            </div>
          ))}
        </div>

        {/* Articles Section */}
        <div>
          <div className="main-headings">
            <h1 className="thefont">articles</h1>
          </div>

          <div id="articlesbox">
            {articles.map((article, index) => (
              <div id="article-card" key={index}>
                <h2>{article.title}</h2>
                <h4>{article.description}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Publications Section */}
        <div>
          <div className="main-headings">
            <h1 className="thefont">research</h1>
          </div>
          <div id="publicationsbox">
            {publications.map((publication, index) => (
              <a href={publication.link} className="full-div-links">
                <div id="publication-card" key={index}>
                  <h2>{publication.title}</h2>
                  <h4>{publication.description}</h4>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        {footerData.map((data) => {
          return (
            <a href={data.href}>
              <img src={data.src} alt={data.alt} />
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Home;
