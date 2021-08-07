import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { init } from 'ityped'

import React,{useEffect,useRef} from 'react'
import "./intro.scss"
const Intro = () => {
    const textRef=useRef()

    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            backDelay:  500,

            backSpeed:  100,
            strings: ['FrontEnd Developer', 'React Developer!']
        })
        
    }, [])


    return (
        <div id="intro" className="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/intro.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There ,my name is</h2>
                    <h1>Karan Joshi</h1>
                    <h3>I am a <span ref={textRef}> </span> </h3>
                </div>
                <a href="#projects">
                    <ExpandMoreIcon/>
                </a>
            </div>
        </div>
    )
}

export default Intro
