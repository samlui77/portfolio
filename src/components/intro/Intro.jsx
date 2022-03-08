import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro(){

    const textRef = useRef();
    
    useEffect(()=>{
        init(textRef.current, 
            { 
                backDelay:1500,
                backSpeed:50,
                showCursor:true,
                strings: ['Software Developer'] 
            })
    },[])

    return(
        <div className="intro" id="intro">
            <div className="left">
                <div className="ukBg"></div>
                <div className="imgContainer">
                    <img src="img/Me.jpg" alt="Sam"/> 
                </div>
            </div>
            <div className="right">
                {/* <div className="ukBg"><img src="img/uk.png" /></div>  */}
                <div className="wrapper">
                    <h2>Hi! My name is</h2>
                    <h1>Sam Lui</h1>
                    <h3>I'm a <span ref={textRef}></span></h3>
                    <h3>based in Birmingham.</h3>
                    <h4>
                    <b>&lt;%@</b> Experienced System Analyst with over 10 years of experience in one of top 4 container shipping companies, 
                        with good experience in the problem solving, design, development and implementation of business applications
                        in the client/server and web based environments that are reliable and user-friendly. <b>%&gt;</b>
                    </h4>
                </div>
            </div>
            <div className="navigator">
                <a href="#workpage">
                    <div className="navCircle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
                        </svg>
                    </div>
                </a>
            </div>
        </div>
    )

}