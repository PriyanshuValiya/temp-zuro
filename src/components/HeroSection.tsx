import { Check, ChevronRight, CircleSlash2 } from "lucide-react";

function HeroSection() {
  return (
    <section className="bg-lightBg pl-6 md:pl-12 lg:pl-28 flex flex-col lg:flex-row items-center justify-center">
      <div className="lg:w-1/2 flex flex-col items-start lg:pr-16 mb-12 lg:mb-0">
        <div className="p-4 mb-3">
          <img
            src="./zuro-icon-green.png"
            alt="Zuro Main Icon"
            className="h-25 w-25 rounded-2xl"
          />
        </div>

        <h1 className="text-darkText text-5xl md:text-6xl font-bold ml-5 mb-6">
          Unlock Your <br /> Team's Potential
        </h1>

        <p className="text-gray-600 text-lg md:text-xl ml-5 mb-10 max-w-lg">
          Automate complex workflows and increase productivity in real time all
          on one powerful platform.
        </p>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
          <button className="flex items-center px-8 py-4 bg-[#1B7564] text-white text-lg rounded-full shadow-md hover:bg-green-900 transition-colors">
            Get this Template
            <ChevronRight />
          </button>
          <button className="flex items-center gap-x-2 px-8 py-4 bg-white text-darkText text-lg rounded-full hover:bg-gray-50 transition-colors">
            Book a Demo
            <CircleSlash2 />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-y-4 gap-x-12 text-darkText text-lg font-medium">
          <div className="flex items-center gap-x-2">
            <Check />
            Real-Time Analytics
          </div>
          <div className="flex items-center gap-x-2">
            <Check />
            Seamless Integrations
          </div>
          <div className="flex items-center gap-x-2">
            <Check />
            Scalable Infrastructure
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 flex justify-center lg:pl-16 relative">
        <div className="relative rounded-l-[2rem] p-4 lg:p-6 shadow-xl w-full max-w-2xl aspect-[1.2/1] flex items-center justify-center">
          <img
            src="./hero-section.png"
            alt="Product UI Mockup"
            className="w-full h-full object-contain rounded-[1.5rem]"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
