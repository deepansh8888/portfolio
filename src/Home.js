import React from 'react';

const Home = () =>{
    const projects  = [{
        title: 'BlogWise',
        description: '',
        techimages: ['', ''],
        image:'',
        livelink: '',
        githublink: '',
    },{
        title: 'KubeWise',
        description: '',
        techimages: ['', ''],
        image:'',
        livelink: '',
        githublink: '',
    },{
        title: 'OneBlood',
        description: '',
        techimages: ['', ''],
        image:'',
        livelink: '',
        githublink: '',
    }];

    const articles = [
        {   title: 'how to set up', 
            description: ''
        }, {
            title: 'voila', 
            description: ''
        }, {
            title: 'lorem', 
            description: ''
        },{
            title: 'ipsum', 
            description: ''
        },{
            title: 'yeah', 
            description: ''
        },{
            title: 'azure', 
            description: ''
        }

        
        ]

    return (
      <>
        <div id="about">
          <a href="www.linkedin.com/in/deepansh8888">
            <img
              src="https://picsum.photos/seed/picsum/200/300"
              alt="my-photo"
            />
          </a>
          <div>
            <h1 className="thefont">i'm deepansh kumar</h1>
          </div>

          <div>
            <h2>lead frontend developer 👨🏼‍💻 </h2>
            <h2>side project connoisseur🥃</h2>
            <h2> open source maintainer</h2>
          </div>
        </div>

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
              Working on exciting projects and building innovative solutions as
              a tech-writer
            </p>
          </div>
        </div>

        <div id="skills">
          <h1 class="thefont">skills</h1>

          <div id="languages">
            <h2>languages</h2>
            <div>
              <img className="mini-images" src=" cc" alt="image-small" />
              <img className="mini-images" src=" cc" alt="image-small" />
              <img className="mini-images" src=" cc" alt="image-small" />
              <img className="mini-images" src=" cc" alt="image-small" />
            </div>
          </div>

          <div id="frontend">
            <h2>frontend</h2>
            <div>
              <img className="mini-images" src=" cc" alt="image-small" />
              <img className="mini-images" src=" cc" alt="image-small" />
              <img className="mini-images" src=" cc" alt="image-small" />
              <img className="mini-images" src=" cc" alt="image-small" />
            </div>
          </div>

          <div id="tools">
            <h2>tools</h2>
            <div>
              <img className="mini-images" src=" cc" alt="image-small" />
              <img className="mini-images" src=" cc" alt="image-small" />
              <img className="mini-images" src=" cc" alt="image-small" />
              <img className="mini-images" src=" cc" alt="image-small" />
            </div>
          </div>

          <div id="database">
            <h2>database</h2>
            <div>
              <img className="mini-images" src=" cc" alt="image-small" />
              <img className="mini-images" src=" cc" alt="image-small" />
              <img className="mini-images" src=" cc" alt="image-small" />
              <img className="mini-images" src=" cc" alt="image-small" />
            </div>
          </div>

          <div id="backend">
            <h2>backend</h2>
            <div className="tech-images">
              <img className="mini-images" src=" cc" alt="image-small" />
              <img className="mini-images" src=" cc" alt="image-small" />
              <img className="mini-images" src=" cc" alt="image-small" />
              <img className="mini-images" src=" cc" alt="image-small" />
            </div>
          </div>

          <div id="projects">
            {projects.map((project) => {
              return (
                <div id="project-card">
                  <h2>{project.title}</h2>
                  <h3>{project.description}</h3>

                  <div className="tech-images">
                    {project.techimages.map((img) => (
                      <img src={img} className="mini-images" />
                    ))}
                  </div>

                    <div id='project-image'>
                        <img src={project.image} alt='project-image' />
                    </div>

                </div>
              );
            })}
          </div>

            <div id='articles'>
            <h1 className='thefont'>articles </h1>
            <div id='articlesbox'>
                {
                    articles.map((article)=>{
                        return(
                            <div id='article-card'>
                                <h2>{article.title}</h2>
                                <h4>{article.description}</h4>
                            </div>
                        );
                    })
                }
            </div>
            </div>

            <div className='footer'>
                <a href='linkedin.com'>
                    <h1>footer</h1>
                    <img src='linkedin.png' alt='linkedinLogo' />
                </a>
                <a href='github.com'>
                    <img src='github.png' alt='githiubLogo' />
                </a>
                <a href='gmail.com'>
                    <img src='gmail.png' alt='gmailLogo' />
                </a>
            </div>

        </div>
        
      </>
    );
}

export default Home;