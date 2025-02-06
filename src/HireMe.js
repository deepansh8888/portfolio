import React from 'react';
import { useNavigate } from 'react-router-dom';

const HireMe = () => {
    const navigate = useNavigate();
    return(
        <>
        <div>
        <h1><span>🤝</span>let's work together </h1>
        </div>

        <div>
            <p>I am always open to contract work, side projects, and collaborations.</p>
            <p>Please check out my <a href='resume/drive.com' className='hover-fill'>  resume</a>  and 
             <span className='hover-fill' onClick={()=>navigate('/contact')} >  contact  </span> me!</p>
        </div>

        <div className='contact-page-footer'>
                <a href='linkedIn.com'>
                    <img src='linkedin.png' alt='linkedinLogo' />
                </a>
                <a href='github.com'>
                    <img src='github.png' alt='githiubLogo' />
                </a>
                <a href='gmail.com'>
                    <img src='gmail.png' alt='gmailLogo' />
                </a>
            </div>


            <div className='contact-page-footer'>
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

export default HireMe;