import One from '../../assets/bestService/one.svg';
import { Button } from '../../components/Button';

export function BestService2() {
  return (
    <div className='bg-white py-[200px] flex flex-col justify-between items-center'>
      <p className='text-[#858181] text-lg text-center'>Best Service</p>
      <h2 className='text-[#212121] text-center font-semibold leading-normal text-5xl mt-[10px] mb-[100px]'>
        Explore Our Top Deal From 
        <br />
        Top-Rated Dealer
      </h2>
      <div className='flex items-center justify-between max-w-[1240px] w-full my-[50px]'>
        <Button className="text-[#212121] text-[17px] font-medium border-[1px] border=[#cccccc] rounded-lg py-[11px] px-[40px] hover:bg-[#E23D3D] hover:text-white hover:border-[#E23D3D] focus:bg-[#E23D3D] focus:text-white focus:border-[#E23D3D] transition-colors">Audi</Button>
        <Button className="text-[#212121] text-[17px] font-medium border-[1px] border=[#cccccc] rounded-lg py-[11px] px-[40px] hover:bg-[#E23D3D] hover:text-white hover:border-[#E23D3D] focus:bg-[#E23D3D] focus:text-white focus:border-[#E23D3D] transition-colors">BMW</Button>
        <Button className="text-[#212121] text-[17px] font-medium border-[1px] border=[#cccccc] rounded-lg py-[11px] px-[40px] hover:bg-[#E23D3D] hover:text-white hover:border-[#E23D3D] focus:bg-[#E23D3D] focus:text-white focus:border-[#E23D3D] transition-colors">Honda</Button>
        <Button className="text-[#212121] text-[17px] font-medium border-[1px] border=[#cccccc] rounded-lg py-[11px] px-[40px] hover:bg-[#E23D3D] hover:text-white hover:border-[#E23D3D] focus:bg-[#E23D3D] focus:text-white focus:border-[#E23D3D] transition-colors">Toyota</Button>
        <Button className="text-[#212121] text-[17px] font-medium border-[1px] border=[#cccccc] rounded-lg py-[11px] px-[40px] hover:bg-[#E23D3D] hover:text-white hover:border-[#E23D3D] focus:bg-[#E23D3D] focus:text-white focus:border-[#E23D3D] transition-colors">Nissan</Button>
        <Button className="text-[#212121] text-[17px] font-medium border-[1px] border=[#cccccc] rounded-lg py-[11px] px-[40px] hover:bg-[#E23D3D] hover:text-white hover:border-[#E23D3D] focus:bg-[#E23D3D] focus:text-white focus:border-[#E23D3D] transition-colors">Mazda</Button>
        <Button className="text-[#212121] text-[17px] font-medium border-[1px] border=[#cccccc] rounded-lg py-[11px] px-[40px] hover:bg-[#E23D3D] hover:text-white hover:border-[#E23D3D] focus:bg-[#E23D3D] focus:text-white focus:border-[#E23D3D] transition-colors">Citroën</Button>
        <Button className="text-[#212121] text-[17px] font-medium border-[1px] border=[#cccccc] rounded-lg py-[11px] px-[40px] hover:bg-[#E23D3D] hover:text-white hover:border-[#E23D3D] focus:bg-[#E23D3D] focus:text-white focus:border-[#E23D3D] transition-colors">Explore 20+</Button>
      </div>
    </div>
  );
}
