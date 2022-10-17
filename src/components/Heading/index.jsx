import { Button } from "../Button";

export function Heading () {

  return (
    <header className="w-full py-[30px] px-24 flex items-center justify-center bg-white">
      <a href="" className="text-3xl text-[#212121] font-semibold">Rent.io</a>
      <nav className="flex items-center justify-between w-full">
        <div className="flex ml-[150px]">
          <a href="" className="text-lg font-medium text-[#212121] mr-[50px] hover:underline underline-offset-8 decoration-2 decoration-[#E23D3D] transition-all">Rent</a>
          <a href="" className="text-lg font-medium text-[#212121] mr-[50px] hover:underline underline-offset-8 decoration-2 decoration-[#E23D3D] transition-all">Share</a>
          <a href="" className="text-lg font-medium text-[#212121] mr-[50px] hover:underline underline-offset-8 decoration-2 decoration-[#E23D3D] transition-all">Ride</a>
          <a href="" className="text-lg font-medium text-[#212121] mr-[50px] hover:underline underline-offset-8 decoration-2 decoration-[#E23D3D] transition-all">Service</a>
        </div>
        <div className="flex items-center">
          <a href="" className="text-lg font-medium text-[#212121] mr-[60px] hover:underline underline-offset-8 decoration-2 decoration-[#E23D3D] transition-all">Sign Up</a>
          <Button className="bg-[#E23D3D] py-[11px] px-[30px] text-white rounded-lg hover:bg-[#CF3030] transition-colors"/>
        </div>
      </nav>
    </header>
  )
}