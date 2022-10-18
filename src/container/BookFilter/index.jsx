import { SelectField } from '../../components/SelectField'
import { Button } from '../../components/Button'

import locationImage from '../../assets/hero/location.svg'
import calendarImage from '../../assets/hero/calendar.svg'
import { DatePickerField } from '../../components/DatePickerField'


export function BookFilter() {
  return (
    <div className="w-full max-w-[1030px] bg-white py-[41px] px-20 rounded-xl flex items-center justify-around">
      <SelectField 
        image={locationImage}
        alt="Location Icon"
        value="Choose a location"
        option="Choose a location"
        option2="Brazil"
      />
      <DatePickerField 
        image={calendarImage}
        alt="Location Icon"
      />
      <DatePickerField 
        image={calendarImage}
        alt="Location Icon"
      />
      <Button
        className='bg-[#E23D3D] 
        py-[11px] px-[30px] 
        text-white rounded-lg 
        hover:bg-[#CF3030] 
        transition-colors'
      >
        Book Now
      </Button>
    </div>
  )
}