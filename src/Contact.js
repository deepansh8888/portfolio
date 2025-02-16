import React from 'react';

const Contact = () => {
   
    return (
        <>
        <h1><span>👋🏼</span> say hi</h1>
        <p> I enjoy connecting with other developers, drop me a message and let's talk! </p>
        <p>Social media is great for informal chats.</p>
        <p>Email works best for in depth discussions.</p>
        <p>Consider my AMA if others can benefit from the question.</p>

        <div>
            <div id='mail'>
                <h1><span> 📧  </span></h1>
                <a href='mailto:deepansh8888@gmail.com'>
                    <h2 className='hover-fill'>deepansh8888@gmail.com</h2>
                    </a>
            </div>
            <div id='askmeanythig'>
                <h1><span> 🙋🏼‍♂️ </span></h1>
                <a href='https://github.com/deepansh8888/portfolio-ama/issues/new?template=Blank+issue'>
                <h2 className='hover-fill'>ask me anything</h2>
                </a>
            </div>
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

export default Contact;