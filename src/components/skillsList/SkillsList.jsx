import "./skillsList.scss"

export default function SkillsList({id, title, icon, active, setSelected}) {
  return (
    <li key={id}
        className={active ? "skillsList active" : "skillsList"}
        onClick={() => setSelected(id)}
    >
        <img src={icon} alt="" />
        {title}
    </li>
  )
}
