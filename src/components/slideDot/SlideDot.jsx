import "./slideDot.scss"

export default function SlideDot({id,  active, dotSelected}) {
  return (
    <div id={"dot" + (id-1)}
        className={active ? "slideDot active" : "slideDot"}
        onClick={() => dotSelected(id)}
    >
    </div>
  )
}