

export function SelectField(props) {
  return (
    <div className="flex items-center">
      <img className="w-fit h-fit mr-[14px]" src={props.image} alt={props.alt} />
      <select className="outline-none" value={props.valor}>
        <option value="">{props.option}</option>
        <option value="">{props.option2}</option>
      </select>
    </div>
  )
}