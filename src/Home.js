import React from 'react';

const Home = () => {
  // Filler data for projects
  const projects = [
    {
      title: 'BlogWise',
      description: 'A modern blogging platform to share your ideas and stories.',
      techimages: [
        'https://via.placeholder.com/50?text=React',
        'https://via.placeholder.com/50?text=Node'
      ],
      image: 'https://picsum.photos/seed/blogwise/400/300',
      livelink: 'https://blogwise.example.com',
      githublink: 'https://github.com/example/blogwise',
    },
    {
      title: 'KubeWise',
      description: 'A tool for managing Kubernetes clusters efficiently.',
      techimages: [
        'https://via.placeholder.com/50?text=K8s',
        'https://via.placeholder.com/50?text=Docker'
      ],
      image: 'https://picsum.photos/seed/kubewise/400/300',
      livelink: 'https://kubewise.example.com',
      githublink: 'https://github.com/example/kubewise',
    },
    {
      title: 'OneBlood',
      description: 'A platform connecting blood donors with recipients in need.',
      techimages: [
        'https://via.placeholder.com/50?text=Firebase',
        'https://via.placeholder.com/50?text=React'
      ],
      image: 'https://picsum.photos/seed/oneblood/400/300',
      livelink: 'https://oneblood.example.com',
      githublink: 'https://github.com/example/oneblood',
    }
  ];

  // Filler data for articles
  const articles = [
    { 
      title: 'How to Set Up Your Dev Environment', 
      description: 'A step-by-step guide on creating a productive development setup.'
    },
    { 
      title: 'Voila! Building a Modern Web App', 
      description: 'Learn how to build sleek web applications using the latest tools.'
    },
    { 
      title: 'Lorem Ipsum: Understanding Dummy Text', 
      description: 'An overview of lorem ipsum text and its importance in design.'
    },
    { 
      title: 'Ipsum Dolor: A Deep Dive', 
      description: 'Exploring the history and usage of placeholder text in publishing.'
    },
    { 
      title: 'Yeah, We Can Code!', 
      description: 'Tips and tricks to enhance your coding skills in modern JavaScript.'
    },
    { 
      title: 'Azure: Cloud Solutions Simplified', 
      description: 'Discover how Azure can streamline your cloud computing needs.'
    }
  ];

  return (
    <>
      <div id='main-home-container'>
        {/* About Section */}
        <div id="about">
          <a href="https://www.linkedin.com/in/deepansh8888">
            <img
              src="https://picsum.photos/seed/picsum/200/300"
              alt="my-photo"
            />
          </a>
          <div>
            <h1 className="thefont">i'm deepansh kumar</h1>
          </div>
          <div>
            <h2>lead frontend developer 👨🏼‍💻</h2>
            <h2>side project connoisseur 🥃</h2>
            <h2>open source maintainer</h2>
          </div>
        </div>

        {/* Timeline Section */}
        <div id="timeline">
          <h1 className="thefont">timeline</h1>
          <div id="iByte">
            <h2>iByte Infomatics</h2>
            <h3>Full Stack Web Developer</h3>
            <p>
              Working on innovative projects and crafting robust solutions as a Full Stack Web Developer at iByte Infomatics.
            </p>
          </div>
          <div id="gfg">
            <h2>GeeksForGeeks</h2>
            <h3>Cloud Computing Article Writer</h3>
            <p>
              Sharing insights on cloud computing and modern web technologies through engaging technical articles.
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
              <img className="mini-images" src="https://via.placeholder.com/50?text=JS" alt="JavaScript" />
              <img className="mini-images" src="https://via.placeholder.com/50?text=Python" alt="Python" />
              <img className="mini-images" src="https://via.placeholder.com/50?text=Java" alt="Java" />
              <img className="mini-images" src="https://via.placeholder.com/50?text=C%23" alt="C#" />
            </div>
          </div>

          {/* Frontend */}
          <div id="frontend">
            <h2>frontend</h2>
            <div>
              <img className="mini-images" src="https://via.placeholder.com/50?text=React" alt="React" />
              <img className="mini-images" src="https://via.placeholder.com/50?text=Angular" alt="Angular" />
              <img className="mini-images" src="https://via.placeholder.com/50?text=Vue" alt="Vue" />
              <img className="mini-images" src="https://via.placeholder.com/50?text=Svelte" alt="Svelte" />
            </div>
          </div>

          {/* Tools */}
          <div id="tools">
            <h2>tools</h2>
            <div>
              <img className="mini-images" src="https://via.placeholder.com/50?text=VSCode" alt="VSCode" />
              <img className="mini-images" src="https://via.placeholder.com/50?text=Git" alt="Git" />
              <img className="mini-images" src="https://via.placeholder.com/50?text=Figma" alt="Figma" />
              <img className="mini-images" src="https://via.placeholder.com/50?text=Slack" alt="Slack" />
            </div>
          </div>

          {/* Database */}
          <div id="database">
            <h2>database</h2>
            <div>
              <img className="mini-images" src="https://via.placeholder.com/50?text=MySQL" alt="MySQL" />
              <img className="mini-images" src="https://via.placeholder.com/50?text=MongoDB" alt="MongoDB" />
              <img className="mini-images" src="https://via.placeholder.com/50?text=PostgreSQL" alt="PostgreSQL" />
              <img className="mini-images" src="https://via.placeholder.com/50?text=Redis" alt="Redis" />
            </div>
          </div>

          {/* Backend */}
          <div id="backend">
            <h2>backend</h2>
            <div className="tech-images">
              <img className="mini-images" src="https://via.placeholder.com/50?text=Node" alt="Node.js" />
              <img className="mini-images" src="https://via.placeholder.com/50?text=Express" alt="Express.js" />
              <img className="mini-images" src="https://via.placeholder.com/50?text=Django" alt="Django" />
              <img className="mini-images" src="https://via.placeholder.com/50?text=Flask" alt="Flask" />
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
                  <img key={idx} src={img} className="mini-images" alt="tech icon" />
                ))}
              </div>
              <div id="project-image">
                <img src={project.image} alt="project" />
              </div>
              <div className="project-links">
                <a href={project.livelink} target="_blank" rel="noopener noreferrer">Live</a>
                <a href={project.githublink} target="_blank" rel="noopener noreferrer">GitHub</a>
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
        <a href="https://www.linkedin.com">
          <h1>footer</h1>
          <img src="https://via.placeholder.com/50?text=LinkedIn" alt="linkedinLogo" />
        </a>
        <a href="https://github.com">
          <img src="https://via.placeholder.com/50?text=GitHub" alt="githubLogo" />
        </a>
        <a href="https://mail.google.com">
          <img src="https://via.placeholder.com/50?text=Gmail" alt="gmailLogo" />
        </a>
      </div>
    </>
  );
}

export default Home;
