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
            <p>Please check out my <a href='resume/drive.com' className='hover-fill'>resume</a>  and 
             <span className='hover-fill' onClick={()=>navigate('/contact')} >contact</span> me!</p>
        </div>
        </>
    );
}

export default HireMe;