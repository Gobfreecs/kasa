import './collapse.scss'
import arrow from '../../assets/arrow.png';
import { useState } from 'react';
import PropTypes from "prop-types";


export default function Collapse({title, content}) {

    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className="collapse" >
                <h3 className='collapse_title' onClick={() => setToggle(!toggle)} >
                    {title}
                    <img 
                        className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'} 
                        src={arrow} 
                        alt="show content" 
                    />
                </h3>
                <div className={toggle ? 'collapse_content' : 'collapse_content_hidden'}>
                    {content}
                </div> 
            </div>
        </>
    )
}

Collapse.propTypes = {  
    title: PropTypes.string,
    content: PropTypes.string,
  }