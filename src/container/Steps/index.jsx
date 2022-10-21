import { BoxIcon } from "../../components/BoxIcon";

import ArrowRight1 from '../../assets/steps/arrowRight1.svg'
import ArrowRight2 from '../../assets/steps/arrowRight2.svg'
import CalendarRed from '../../assets/steps/calendarRed.svg'
import CheckRed from '../../assets/steps/checkRed.svg'
import LocationRed from '../../assets/steps/locationRed.svg'

export function Steps () {
  return (
    <div className="my-[200px] flex flex-col items-center justify-center">
      <p className="text-[#858181] text-lg">
        How It Work
      </p>
      <h2 className="text-[#212121] font-semibold text-5xl mt-[10px] mb-[85px]">
        Rent following 3 working Steps
      </h2>
      <div className="flex items-center justify-center">
        <div className="flex items-start relative w-[500px]">
          <BoxIcon 
            src={LocationRed}
            alt="Location Icon"
            title="Choose a location"
            description={`See popular hotels at a heavily \ndiscounted price`}
          />
          <img src={ArrowRight1} alt="" className="absolute -top-3 left-[180px] max-w-none ml-5 mr-5"/>
        </div>
        <div className="flex items-end relative w-[470px]">
          <BoxIcon 
            src={CalendarRed}
            alt="Calendar Icon"
            title="Pick-up Date"
            description="Click choose and we'll pick one of the 3 hotels."
          />
          <img src={ArrowRight2} alt="" className="absolute top-16 left-[180px] max-w-none ml-5 mr-5"/>
        </div>
        <div className="flex items-end relative">
          <BoxIcon 
            src={CheckRed}
            alt="Check Icon"
            title="Book your car"            
            description="See which hotel right after you book!"
          />
        </div>
      </div>
    </div>
  )
}