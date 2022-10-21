export function BoxIcon(props, className){
  return (
    <div className="flex flex-col justify-center items-center">
      <div className='w-20 h-20 bg-white shadow-xl rounded-lg flex items-center justify-center'>      
        <img src={props.src} alt={props.alt} />
      </div>
      <h3 className="mt-5 mb-[10px] text-[#212121] text-2xl font-semibold">{props.title}</h3>
      <p className="text-[#858181] text-lg">{props.description}</p>
    </div>    
  );
}