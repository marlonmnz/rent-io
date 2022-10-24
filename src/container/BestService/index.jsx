import One from '../../assets/bestService/one.svg';
import Two from '../../assets/bestService/two.svg';
import Three from '../../assets/bestService/three.svg';

export function BestService() {
  return (
    <div className='bg-black py-[100px] flex flex-col justify-between items-center'>
      <p className='text-white text-lg text-center'>Best Service</p>
      <h2 className='text-white text-center font-semibold leading-normal text-5xl mt-[10px] mb-[100px]'>
        Feel the best experience
        <br /> with our rental deals
      </h2>
      <div className='flex items-center'>
        <div className='pr-[204px] border-r border-white'>
          <div className='flex items-center justify-start mb-5'>
            <img src={One} alt='One' />
            <p className='font-semibold text-2xl text-white ml-5'>
              Deals for every budget
            </p>
          </div>
          <div className='flex items-center justify-start mb-5'>
            <img src={Two} alt='One' />
            <p className='font-semibold text-2xl text-white ml-5'>
              Best price guaranteed
            </p>
          </div>
          <div className='flex items-center justify-start mb-5'>
            <img src={Three} alt='One' />
            <p className='font-semibold text-2xl text-white ml-5'>
              Support 24/7
            </p>
          </div>
        </div>
        <div className='ml-[100px]'>
          <p className='font-medium text-2xl text-white mb-[10px]'>
            Deals for every budget
          </p>
          <p className='text-lg text-white'>
            Incredible prices on hotels, flights, cars and packages worldwide
          </p>
        </div>
      </div>
    </div>
  );
}
