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
      livelink: 'https://blogwise-frontend.onrender.com/',
      githublink: 'https://github.com/deepansh8888/blogwise',
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
      githublink: 'https://github.com/deepansh8888/OneBlood',
    },
    {
      title: 'OneBlood',
      description: 'A platform to connect blood donors with those in need.',
      techimages: [
        'https://picsum.photos/seed/picsum/200',
        'https://picsum.photos/seed/picsum/200'
      ],
      image: 'https://picsum.photos/seed/picsum/200',
      livelink: 'https://oneblood-frontend.onrender.com/',
      githublink: 'https://github.com/deepansh8888/OneBlood',
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
      description: 'Tips and tricks to improve your coding skills in today landscape.'
    },
    { 
      title: 'Azure: Cloud Solutions Simplified', 
      description: 'Understanding the basics of Azure cloud services and deployments.'
    }
  ];

  const skills = [
    {
      title: 'languages',
      images: ['/techImages/cpp.png', '/techImages/javascript.png', '/techImages/cLang.png'],
    },{
      title: 'frameworks',
      images: ['/techImages/react.png', '/techImages/express.png' , '/techImages/node.png'],
    },{
      title: 'tools',
      images: ['/techImages/azure.png', '/techImages/docker.png', '/techImages/kubernetes.png', '/techImages/git.png', '/techImages/vscode.png', '/techImages/github.png'],
    },{
      title: 'database',
      images: ['/techImages/mysql.png', '/techImages/mongodb.png'],
    },
  ];

  return (
    <>
      <div id="main-home-container">
        <section id="about">
          <img id='my-photo' src="/techImages/deepansh.jpg" alt="Profile Picture" />
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

        <div id='skills'>
        <h1 className="thefont">skills</h1>
          <div>
            {
              skills.map((skillCategory)=>{
                return (<div id='skill-card'>
                  <h2>{skillCategory.title}</h2>
                  <div id='tech-images-div'>
                    {
                      skillCategory.images.map((img)=>{
                        return (
                          <>
                          <img src={img} alt='tech-img' className='mini-images' />
                          </>
                        );
                      })
                    }
                  </div>
                </div>);
              })
            }
          </div>
        </div>
          

        {/* Projects Section */}
        <div id="projects">
        <h1 className="thefont">projects</h1>
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
                <a href={project.livelink}>
                  Live  </a><br/><br/>
                <a href={project.githublink}  >
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
        <a href="https://www.linkedin.com/in/deepansh8888">
          <img src="/techImages/linkedinIcon.png" alt="linkedinLogo" />
        </a>
        <a href="https://github.com/deepansh8888">
          <img src="/techImages/githubIcon.png" alt="githubLogo" />
        </a>
        <a href="mailto:deepansh8888@gmail.com">
          <img src="/techImages/mailIcon.png" alt="gmailLogo" />
        </a>
      </div>
    </>
  );
}

export default Home;
