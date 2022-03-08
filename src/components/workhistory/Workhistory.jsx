//import { ReactComponent as WorkIcon } from "/img/work.svg";
import "./workhistory.scss"
import { 
           VerticalTimeline, 
           VerticalTimelineElement 
         }  from "react-vertical-timeline-component";
 import "react-vertical-timeline-component/style.min.css";

export default function Workhistory() {
  const timelineElements = [
    {
      id: 1,
      title: "[Software Consultant]",
      location: "Yuantong Marine Service Company Limited",
      descriptions: [
        {
            "id": "1",
            "description": "Upgraded all the related Windows apps, Web apps and reports from Windows Server 2003 to 2019."
        },
        {
            "id": "2",
            "description": "Research and evaluate the possibilities solution for upgrade."
        },
        {
          "id": "3",
          "description": "Built the testing environment and migrated the data from SQL Server 2012 to 2019 in Docker."
        },
        {
          "id": "4",
          "description": "Upgraded new version of Crystal Report in the ERP system."
        },
        {
          "id": "5",
          "description": "Rewrite all the ASP 3.0 code to ASP.NET"
        },
        {
          "id": "6",
          "description": "Upgraded the .net framework 2.0 applications to 4.8."
        },
    ],
      //"Converting data to a graphical interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data.",
      buttonText: "View Frontend Projects",
      date: "September 2021 ~ December 2021",
      icon: "img/work.svg",
    },
    {
      id: 2,
      title: "[System Analyst]",
      location: "COSCO Shipping International (Hong Kong) Co., Ltd",
      descriptions: [
        {
            "id": "1",
            "description": "Expanded the ERP system for multiple companies across many locations, including Hong Kong, Shanghai, Beijing, Japan, Singapore and Germany, boosting yearly revenue by $200 million HKD. "
        },
        {
            "id": "2",
            "description": "Developed business report and automatically send to client using SQL Data Mail, SQL Agent and stored procedure."
        },
        {
          "id": "3",
          "description": "Developed EDI exchange to ShipServ and SMIS/STEM using C# and RESTful. "
        },
        {
          "id": "4",
          "description": "Designed and developed an invoice system using C# and using EDI to transfer the invoice data to SAP."
        },
        {
          "id": "5",
          "description": "Designed and developed a mobile solution for time clock app in IOS and Android. User can use their mobile phone to Clock In/Out in office area. "
        }
      ],
      //"Converting data to a graphical interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data.",
      buttonText: "View Frontend Projects",
      date: "September 2010 ~ April 2021 ",
      icon: "work",
    },
    {
      id: 3,
      title: "[Analyst Programmer]",
      location: "COSCO Network Limited",
      descriptions: [
        {
            "id": "1",
            "description": "Tested and implemented data migration tasks from AS400 to MSSQL Server in the ERP system using C#."
        },
        {
            "id": "2",
            "description": "Designed and Developed HR and User approval workflows module in ERP system using JAVA."
        },
        {
          "id": "3",
          "description": "Developed the Order and Logistic reports in Crystal Report."
        },
        {
          "id": "4",
          "description": "Maintained and managed the software applications in COSCO (H.K) Group and the subsidiary companies."
        },
        {
          "id": "5",
          "description": "Developed the corporate website in COSCO (H.K) Group and the subsidiary companies.  "
        }
      ],
      //"Converting data to a graphical interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data.",
      buttonText: "View Frontend Projects",
      date: "September 2006 ~ August 2010",
      icon: "work",
    },
    {
      id: 4,
      title: "[Web Developer]",
      location: "COSCO Network Limited",
      descriptions: [
        {
            "id": "1",
            "description": "Developed and maintained nearly all web sites in COSCO (H.K) Group, the subsidiary companies and non-COSCO companies (e.g. Peacebook Co. Ltd)."
        },
        {
            "id": "2",
            "description": "Developed HR system for COSCO (H.K) Group using ASP 3.0, XML, XSLT."
        },
        {
          "id": "3",
          "description": "Developed the clock in/out system using U are U finger print and Visual Basic 6."
        },
       ],
      buttonText: "View Frontend Projects",
      date: "September 2000 ~ August 2006",
      icon: "work",
    },
  ];

  return (
    <div className="workhistory" id="workhistory" >
       <h1 id="workpage">Work experience</h1><br/>
       <div className="content">
            <VerticalTimeline>
            {timelineElements.map((element) => (
                  <VerticalTimelineElement 
                    key={element.key}
                    date={element.date}
                    dateClassName="date" 
                    iconStyle={{ background: '#31a8ff', color: '#fff',top:'10px' }}
                    //contentStyle={{ background: '#627da6', color: '#000' }}
                    icon={<img class="flag-size" alte="" src="img/work.svg" alt=""></img>}
                  >
                    <h3 className="vertical-timeline-element-title">{element.title}</h3>
                    <h5 className="vertical-timeline-element-subtitle"><a href="http://www.coscointl.com/en" target="_blank" alt="" rel="noreferrer">{element.location}</a></h5>
                    {/* <p id="description">//{element.description}</p> */}
                    <ul id="description">
                        {element.descriptions.map((d, i) => (
                          <li key={i}>{d.description}</li>
                        ))}
                    </ul>
                  </VerticalTimelineElement>
              ))}

            </VerticalTimeline>
      </div>
      <div className="navigator">
          <a href="#projects">
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

