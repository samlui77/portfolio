import {useEffect, useState } from "react";
import {
  CircularProgressbar,
  //CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';


import SkillsList from "../skillsList/SkillsList"
import "./skills.scss"
import {
  frontSkills,
  backendSkills,
  dbSkills,
  imageSkills,
  otherSkills
} from "../../data";


export default function Skills() {
  const [selected, setSelected] = useState("front");
  const [data, setData] = useState([]);
  const list=[
    {
      id:"front",
      title:"Front End", 
      icon:"img/front.svg",
    },
    {
      id:"back",
      title:"Back End", 
      icon:"img/back.svg",
    },
    {
      id:"db",
      title:"Databases", 
      icon:"img/db.svg",
    },
    {
      id:"image",
      title:"Image Processing", 
      icon:"img/camera.svg",
    },
    {
      id:"other",
      title:"Others", 
      icon:"img/other.svg",
    },
  ];

  useEffect(()=>{
    switch(selected){
       case "db": 
            setData(dbSkills);
            break;
       case "back": 
            setData(backendSkills);
            break;
      case "other": 
            setData(otherSkills);
            break; 
      case "image": 
            setData(imageSkills);
            break;     
        default:
            setData(frontSkills);
            break;
    }

  },[selected])

  return (
    <div class="skills" id="skills">
        <h1>Skills</h1>
        <ul>
            {list.map((item) => (
                <SkillsList 
                  key={item.id}
                  title={item.title} 
                  active={selected===item.id} 
                  setSelected={setSelected}
                  id={item.id}
                  icon={item.icon}
                />
            ))}
        </ul>
        <div className="container">
          
          {data.map((d, idx) => (
             <div className="item"  key={idx}>
                <h3>{d.title}</h3>
                <div className="pBar" >   
                  {/* style={{ width: 100, height: 100 }} */}
                    {/* <CircularProgressbar value={66} /> */}
                  <CircularProgressbar
                      value={d.percentage}
                      text={`${d.percentage}%`}
                      //value ={66}
                      //text={`${66}%`}
                      //counterClockwise
                      background
                      backgroundPadding={6}
                      styles={buildStyles({
                        backgroundColor: "transparent",
                        textColor: "#2ca1de",
                        pathColor: "#2ca1de",
                        trailColor: "transparent"
                      })}
                    /> 
                </div>
                <div className="exp">{d.exp}</div>
              </div>
            ))}
       </div>
       <div className="navigator">
          <a href="#about">
              <div className="navCircle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
                  </svg>
              </div>
          </a>
        </div> 


        {/* <div className="container">
          {data.map((d, idx) => (
              <div className="item" key={idx}>
                <img src={d.img} alt="" />
                <h3>{d.title}</h3>
              </div>
           ))}
         </div> */}



         {/* <div className="navigator">
          <a href="#contact">
              <div className="navCircle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
                  </svg>
              </div>
          </a>
        </div> */}
    </div>
  )
}
