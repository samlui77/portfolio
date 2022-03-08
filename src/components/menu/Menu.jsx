import "./menu.scss"

export default function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
        <ul>
            <li onClick={()=>setMenuOpen(false)}><a href="#intro">Home</a></li>
            <li onClick={()=>setMenuOpen(false)}><a href="#workpage">Experience</a></li>
            <li onClick={()=>setMenuOpen(false)}><a href="#projects">Projects</a></li>
            <li onClick={()=>setMenuOpen(false)}><a href="#skills">Skills</a></li>
            <li onClick={()=>setMenuOpen(false)}><a href="#about">Contact</a></li>
        </ul>
    </div>
  )
}
