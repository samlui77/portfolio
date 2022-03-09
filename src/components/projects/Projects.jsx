import { useEffect, useState } from "react";
import SlideDot from "../slideDot/SlideDot";
import "./projects.scss"

export default function Projects() {

  const [selected, dotSelected] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "img/website.svg",
      title: "Yuantong ERP System",
      tech:"[HTML] [JavaScript] [AJAX] [CSS] [JSP] [JAVA] [VB.NET] [C#] [ASP.NET] [Visual Studio 2012] [XML] [Crystal Report] [MS-SQL Server 2012]",
      desc:
        "ERP system is the management platform for ship equipment procurement. I have been involved in designing and developing the HR module, User Management Module, Part of Order and Logistic Process module, User approval workflows and print out template.",
      img:
        "img/yterp.jpg",
    },
    {
      id: "2",
      icon: "img/website.svg",
      title: "Yuantong ERP Monitoring System",
      tech:"[HTML] [JavaScript] [AJAX] [CSS] [JSP] [JAVA] [MS-SQL Server 2012]",
      desc:
        "Monitoring System provide the platform for ship owner to keep trace the transaction process status. I have been involved in designing and developing part Backend Development.",
      img:
        "img/monitoring.jpg",
      link:
        "http://yterp.cosco.com.hk/",
    },
    {
      id: "3",
      icon: "img/window.svg",
      title: "Yuantong EDI Transceiver Application",
      tech:"[C#] [RESTFul] [Visual Studio 2012] [XML] [MS-SQL Server 2012]",
      desc:
        "SMIS is an internal procurement platform for Yuantong’s customers. I have been involved in designing and developing the workflow, EDI format and the transceiver application",
      img:
        "img/edi.jpg",
    },
    {
      id: "4",
      icon: "img/globe.svg",
      title: "COSCO Shipping Logistic(HK) Website",
      tech:"[HTML] [Angular JS] [JQuery] [Javascript] [CSS] [JSP] [JAVA] [WEB API] [Tomcat] [MSSQL 2012] [PhotoShop CC]",
      desc:
        "This is a individual full stack web development project of the corporate website include the content management system (CMS). I have been involved in developing and designing UI Design, Color Management, Front-end & Backend Development and Database Design.",
      img:
        "img/coscoLogisticWeb.jpg",
    },
    {
      id: "5",
      icon: "img/window.svg",
      title: "Yuehon Investment Limited Invoice System",
      tech:"[C#] [Visual Studio 2012/2022] [JSON] [RESTful API] [.NET Core 6] [Entity Framework] [ADO.NET] [MS-SQL Server 2012]",
      desc:
        "Designed and developed an invoice system in C# windows application and using EDI to transfer the invoice data to SAP",
      img:
        "img/invoice.jpg",
    },
    {
      id: "6",
      icon: "img/website.svg",
      title: "Travel Agency Web Application and Website",
      tech:"[HTML] [AJAX] [Javascript] [CSS] [JSP] [JAVA] [Tomcat] [MSSQL 2005] [MSSQL Agent Job] [MSSQL Database mail] [PhotoShop CS3]",
      desc:
        "An online system gives travel planners a portal to order Cusises, Packages, Local Tours Travel Insurance and Tickets directly from the travel agency website. I have been involved in developing and designing UI Design, Color Management, Front-end & Backend Development and Database Design.",
      img:
      "img/travel.jpg",
    },
  ];

  // const handleClick = (way) => {
  //   way === "left"
  //     ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 0)
  //     : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : data.length - 1 );
  //     alert(currentSlide);
  // };

  useEffect(()=>{
      setCurrentSlide(selected-1);
      //shoot(selected); 
   },[selected]);

  //  const shoot = (idx) => {
  //     for (var i = 0; i < data.length-1; i++) {
  //       document.getElementById('dot'+(i)).className = "slideDot";
  //       //alert(i + "--" + idx);
  //       //alert(i+"--"+document.getElementById('dot'+(i+1)).className);
  //     }
  //     //alert(idx);
  //     document.getElementById('dot'+(idx)).className = "slideDot active";
  //     //alert(currentSlide + ' '+ idx);
  //   //setCurrentSlide(idx-1);
  //  }

  return (
       <div className="projects" id="projects">
        {/* <div className="title">test</div> */}
        {/* <h1><span className="codeTag">&lt;</span>Projects. <span className="slash">/</span><span className="codeTag">&gt;</span></h1> */}
        <h1>Projects.</h1>
        {/* <div className="copyRight">*All projects Copyright &copy; by my clients and my previous companies. All Rights Reserved.</div> */}
        
        <div className="slider"
            /// style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        >
         
          {data.map((d) => (
            <div className="container" key={d.id}>
            <div className="item" key={d.id}>
                <div className="left">
                  <div className="leftContainer">
                      <div className="imgContainer">
                        <img src={d.icon} alt=""/>
                      </div>
                    <h2>{d.title}</h2>
                    <p>{d.desc}</p>
                    <span>{d.tech}</span>
                    
                     {/* {d.link ? <a target='_blank' href={d.link}>Visit</a> : ""}  */}
                      
                  </div>
                </div>
                <div className="right">
                  {/* <img src="img/test.png" alt=""/> */}
                  <img src={d.img} alt=""/>
                </div>
            </div>
          </div>
          ))}
      </div>
        
      <div className="slideshowDots">
           {data.map((d) => (
              <SlideDot 
              key={d.id}
              active={selected===d.id} 
              dotSelected={dotSelected}
              id={d.id}
            />
            // <div
            //   className={`slideDot {currentSlide === d.id} ? " active" : ""}`}
            //   onClick={() => {
            //    shoot(d.id);
            //   }}
            // ></div>
          ))} 
      </div>
      <div className="navigator">
          <a href="#skills">
              <div className="navCircle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
                  </svg>
              </div>
          </a>
        </div>
        {/* <img src="img/arrow.png"  className="arrow left" alt=""></img>
        <img src="img/arrow.png"  className="arrow right" alt=""></img> */}



        {/* <span  style={{ display: (currentSlide>0) ? "block" : "none" }} className="arrow left" onClick={() => {handleClick("left"); shoot(currentSlide+1) }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
          </svg>
        </span>
        <span style={{ display: (currentSlide<data.length-1 ) ? "block" : "none" }} className="arrow right" onClick={() => {handleClick(); shoot(currentSlide+1); }}>
          <svg className="arrow right" xmlns="http://www.w3.org/2000/svg" width="76" height="76" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </span> */}
    </div>
  );
}
