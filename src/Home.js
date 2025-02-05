import React from 'react';

const Home = () => {
  const projects = [
    {
      title: 'BlogWise',
      description: 'A blogging platform for sharing insights and stories.',
      techimages: [
        'https://picsum.photos/seed/picsum/200',
        'https://picsum.photos/seed/picsum/200'
      ],
      image: 'https://picsum.photos/seed/picsum/200',
      livelink: 'https://example.com/blogwise',
      githublink: 'https://github.com/example/blogwise',
    },
    {
      title: 'KubeWise',
      description: 'A Kubernetes management tool designed for developers.',
      techimages: [
        'https://picsum.photos/seed/picsum/200',
        'https://picsum.photos/seed/picsum/200'
      ],
      image: 'https://picsum.photos/seed/picsum/200',
      livelink: 'https://example.com/kubewise',
      githublink: 'https://github.com/example/kubewise',
    },
    {
      title: 'OneBlood',
      description: 'A platform to connect blood donors with those in need.',
      techimages: [
        'https://picsum.photos/seed/picsum/200',
        'https://picsum.photos/seed/picsum/200'
      ],
      image: 'https://picsum.photos/seed/picsum/200',
      livelink: 'https://example.com/oneblood',
      githublink: 'https://github.com/example/oneblood',
    }
  ];

  const articles = [
    {   
      title: 'How to Set Up Your Dev Environment', 
      description: 'A comprehensive guide to creating an efficient development setup.'
    },
    { 
      title: 'Voila: The Magic Behind Modern Web Apps', 
      description: 'An exploration of cutting-edge web development techniques.'
    },
    { 
      title: 'Lorem Ipsum and Its Origins', 
      description: 'A look into the history and usage of placeholder text.'
    },
    { 
      title: 'Ipsum: A Developer\'s Perspective', 
      description: 'Insights on why we use dummy text in design and development.'
    },
    { 
      title: 'Yeah, Code It!', 
      description: 'Tips and tricks to improve your coding skills in today’s landscape.'
    },
    { 
      title: 'Azure: Cloud Solutions Simplified', 
      description: 'Understanding the basics of Azure cloud services and deployments.'
    }
  ];

  return (
    <>
      <div id="main-home-container">
        <section id="about">
          <img src="https://picsum.photos/seed/picsum/200" alt="Profile Picture" />
          <h1 id='main-name'>i'm deepansh kumar</h1>
          <div id="about-text">
            <span> full-stack developer 👨‍💻</span>
            <span> cloud computing enthusiast ✨</span>
            {/* <span>side project connoisseur 🥃</span>
            <span>open source maintainer 🎥</span> */}
          </div>
        </section>

        {/* Timeline Section */}
        <div id="timeline">
          <h1 className="thefont">timeline</h1>
          <div id="iByte">
            <h2>iByte Infomatics</h2>
            <h3>Full Stack Web Developer</h3>
            <p>
              Working on exciting projects and building innovative solutions as
              a Full Stack Web Developer at iByte Infomatics.
            </p>
          </div>
          <div id="gfg">
            <h2>GeeksForGeeks</h2>
            <h3>Cloud Computing Article Writer</h3>
            <p>
              Creating engaging content and sharing insights as a tech-writer.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div id="skills">
          <h1 className="thefont">skills</h1>

          {/* Languages */}
          <div id="languages">
            <h2>languages</h2>
            <div>
              <img
                className="mini-images"
                src="https://picsum.photos/seed/picsum/200"
                alt="language"
              />
              <img
                className="mini-images"
                src="https://picsum.photos/seed/picsum/200"
                alt="language"
              />
              <img
                className="mini-images"
                src="https://picsum.photos/seed/picsum/200"
                alt="language"
              />
              <img
                className="mini-images"
                src="https://picsum.photos/seed/picsum/200"
                alt="language"
              />
            </div>
          </div>

          {/* Frontend */}
          <div id="frontend">
            <h2>frontend</h2>
            <div>
              <img
                className="mini-images"
                src="https://picsum.photos/seed/picsum/200"
                alt="frontend"
              />
              <img
                className="mini-images"
                src="https://picsum.photos/seed/picsum/200"
                alt="frontend"
              />
              <img
                className="mini-images"
                src="https://picsum.photos/seed/picsum/200"
                alt="frontend"
              />
              <img
                className="mini-images"
                src="https://picsum.photos/seed/picsum/200"
                alt="frontend"
              />
            </div>
          </div>

          {/* Tools */}
          <div id="tools">
            <h2>tools</h2>
            <div>
              <img
                className="mini-images"
                src="https://picsum.photos/seed/picsum/200"
                alt="tool"
              />
              <img
                className="mini-images"
                src="https://picsum.photos/seed/picsum/200"
                alt="tool"
              />
              <img
                className="mini-images"
                src="https://picsum.photos/seed/picsum/200"
                alt="tool"
              />
              <img
                className="mini-images"
                src="https://picsum.photos/seed/picsum/200"
                alt="tool"
              />
            </div>
          </div>

          {/* Database */}
          <div id="database">
            <h2>database</h2>
            <div>
              <img
                className="mini-images"
                src="https://picsum.photos/seed/picsum/200"
                alt="database"
              />
              <img
                className="mini-images"
                src="https://picsum.photos/seed/picsum/200"
                alt="database"
              />
              <img
                className="mini-images"
                src="https://picsum.photos/seed/picsum/200"
                alt="database"
              />
              <img
                className="mini-images"
                src="https://picsum.photos/seed/picsum/200"
                alt="database"
              />
            </div>
          </div>

          {/* Backend */}
          <div id="backend" className="">
            <h2>backend</h2>
            <div className="tech-images">
              <img
                className="mini-images"
                src="https://picsum.photos/seed/picsum/200"
                alt="backend"
              />
              <img
                className="mini-images"
                src="https://picsum.photos/seed/picsum/200"
                alt="backend"
              />
              <img
                className="mini-images"
                src="https://picsum.photos/seed/picsum/200"
                alt="backend"
              />
              <img
                className="mini-images"
                src="https://picsum.photos/seed/picsum/200"
                alt="backend"
              />
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div id="projects">
          {projects.map((project, index) => (
            <div id="project-card" key={index}>
              <h2>{project.title}</h2>
              <h3>{project.description}</h3>
              <div className="tech-images">
                {project.techimages.map((img, idx) => (
                  <img key={idx} src={img} className="mini-images" alt="tech" />
                ))}
              </div>
              <div id="project-image">
                <img src={project.image} alt="project" />
              </div>
              <div className="project-links">
                <a
                  href={project.livelink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
                <a
                  href={project.githublink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Articles Section */}
        <div id="articles">
          <h1 className="thefont">articles</h1>
          <div id="articlesbox">
            {articles.map((article, index) => (
              <div id="article-card" key={index}>
                <h2>{article.title}</h2>
                <h4>{article.description}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <a href="https://linkedin.com">
          <h1>footer</h1>
          <img src="https://picsum.photos/seed/picsum/200" alt="linkedinLogo" />
        </a>
        <a href="https://github.com">
          <img src="https://picsum.photos/seed/picsum/200" alt="githubLogo" />
        </a>
        <a href="https://gmail.com">
          <img src="https://picsum.photos/seed/picsum/200" alt="gmailLogo" />
        </a>
      </div>
    </>
  );
}

export default Home;
