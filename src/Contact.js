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
                <h2>deepansh8888@gmail.com</h2>
            </div>
            <div id='googleForm'>
                <h1><span> 🙋🏼‍♂️ </span></h1>
                <h2>ask me anything</h2>
            </div>
        </div>



        <div className='footer'>
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
        </>
    );
}

export default Contact;