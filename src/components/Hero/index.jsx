import { Button } from '../Button';

export function Hero() {
  return (
    <section className="bg-[url('./src/assets/hero/hero_bg.jpg')] flex justify-center w-full h-[771px] bg-cover bg-center bg-no-repeat">
      <div className='mt-[130px] w-full ml-[100px]'>
        <h1 className='text-5xl font-bold text-white text-left uppercase'>
          Fast and easy way
          <br />
          to rent a car
        </h1>

        <p className='max-w-[715px] text-white text-lg my-[30px]'>
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
          transition-colors'>Know More</Button>
      </div>
    </section>
  );
}
