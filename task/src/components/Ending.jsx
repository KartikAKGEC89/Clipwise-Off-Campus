import React from 'react';
import WaveSec from '../assests/Wavesec.png';
import Sales from '../assests/Sales.png';

const Ending = () => {
  return (
    <div className="relative w-full h-full">
      <div className="relative w-full h-[120vh] bg-gradient-to-r from-[#7CDDf1] to-[#69ADFF]">
        <img src={WaveSec} alt="Bg-1" className="absolute top-0 left-0 w-full h-full z-0 object-cover" />
        
        <div className="relative z-10 w-11/12 max-w-maxContent mx-auto flex flex-col lg:flex-row gap-x-5 py-10">
          <div className="lg:w-[50%] w-full flex flex-col h-full justify-center items-center lg:items-end space-y-10 mt-48 mr-24">
            <div className="text-center lg:text-end space-y-2">
              <h3 className="md:text-4xl text-xl uppercase text-[#31546D]">Best Price</h3>
              <h1 className="md:text-6xl text-3xl font-bold text-[#31546D]">Agate Phone Grip</h1>
            </div>

            <div className="flex flex-row items-center gap-x-4">
              <p className="md:text-xl text-lg text-[#41A0B7] line-through">44.50$</p>
              <p className="md:text-6xl text-3xl font-bold text-[#E35B3E]">19.50$</p>
            </div>

            <p className="text-[#31546D] md:w-[60%] text-center lg:text-end leading-relaxed font-light">
              These Pop Rock Crystal grip tops can be swapped with other tops depending on your mood, outfit, nails, phone case, holiday, etc.! Just gently squeeze the sides to remove and swap out with another color or design!
            </p>

            <button className="bg-gradient-to-r from-[#75CCEB] to-[#6FB4FF] text-white px-10 py-3 font-semibold rounded-xl hover:scale-95 transition-all duration-200 uppercase">
              Buy Now
            </button>
          </div>

          <div className="lg:w-[50%] flex flex-col items-center justify-center mt-36">
            <div className="bg-white md:px-[6rem] py-[1rem] md:py-[6rem] rounded-full shadow-2xl">
              <div className="max-w-[500px] p-[4rem] md:p-[4rem] bg-white shadow-2xl rounded-full">
                <img src={Sales} alt="tag1" className="rounded-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[10rem] relative bg-[#0A294DCC] z-20 hidden lg:block"></div>
    </div>
  );
};

export default Ending;
