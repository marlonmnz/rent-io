

export function DatePickerField(props) {
  return (
    <div className="flex items-center">
      <img className="w-fit h-fit mr-[14px]" src={props.image} alt={props.alt} />
        <input type="date" name="" id="" />
    </div>
  )
}