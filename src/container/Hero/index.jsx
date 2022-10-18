import { Button } from '../../components/Button';
import { BookFilter } from '../BookFilter';

export function Hero() {
  return (
    <section className="bg-[url('./src/assets/hero/hero_bg.jpg')] flex flex-col justify-center items-center w-full h-[771px] bg-cover bg-center bg-no-repeat">
      <div className='mt-[130px] mb-[150px] max-w-7xl flex flex-col items-start w-full'>
        <h1 className='text-5xl font-bold text-white text-left uppercase'>
          Fast and easy way
          <br />
          to rent a car
        </h1>

        <p className='w-[715px] text-white text-lg my-[30px]'>
          Looking for unbeatable deals on a car rental ? Rent a Hot Rate Car
          with Hotwire and you'll save up to 50 % * on your rental car . We work
          with top brand - name rental car to help you find the car rental for
          your trip .
        </p>

        <Button 
          className='bg-[#E23D3D] 
          py-[11px] px-[30px] 
          text-white rounded-lg 
          hover:bg-[#CF3030] 
          transition-colors'
        > 
          Know More
        </Button>
      </div>
        <BookFilter/>
    </section>
  );
}
