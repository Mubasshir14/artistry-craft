
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
// import banner from '../assets/banner3.jpg'
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'
import banner4 from '../assets/banner4.jpg'
import banner5 from '../assets/banner5.jpg'
import banner6 from '../assets/banner6.jpg'
import { TypeAnimation } from 'react-type-animation'
const Hero = () => {
    return (
        <div >
            <Carousel >
                <div>
                    <img src={banner1} />
                    <div className="absolute -inset-0 translate-y-1/2 p-5">
                        <p className="text-4xl hidden md:block font-bold text-black uppercase bg-gray-100/35  p-5" >
                            Discover our charming handmade greeting cards
                        </p>
                        <h1 className="text-4xl hidden md:block mt-3 mb-3 text-[#23BE0A]  font-extrabold">
                            {/* <span className='primary-color'>Visit</span> <br /> */}
                            <TypeAnimation
                                sequence={[
                                    "Visit ",
                                    1000,
                                    "ArtistryCraft",
                                    1000,
                                ]}
                                wrapper="span"
                                speed={60}
                                repeat={Infinity}
                            />
                        </h1>

                        {/* <button className="btn bg-[#23BE0A] text-white">See More</button> */}

                    </div>
                </div>

                <div>
                    <img src={banner2} />
                    <div className="absolute -inset-0 translate-y-1/2 p-5">
                        <p className="text-4xl hidden md:block font-bold text-black uppercase bg-gray-100/35  p-5">
                            Discover our charming handmade greeting cards
                        </p>
                        <h1 className="text-4xl hidden md:block mt-3 mb-3 text-[#23BE0A] font-extrabold">
                            {/* <span className='primary-color'>Visit</span> <br /> */}
                            <TypeAnimation
                                sequence={[
                                    "Visit ",
                                    1000,
                                    "ArtistryCraft",
                                    1000,
                                ]}
                                wrapper="span"
                                speed={60}
                                repeat={Infinity}
                            />
                        </h1>
                        {/* <div className="hidden md:flex md:absolute md:w-3/4 md:bottom-0 md:-left-1.5">
      <button className="btn bg-[#23BE0A] text-white">See More</button>
    </div> */}
                    </div>
                </div>
                <div>
                    <img src={banner4} />
                    <div className="absolute -inset-0 translate-y-1/2 p-5">
                        <p className="text-4xl hidden md:block font-bold text-black uppercase bg-gray-100/35  p-5">
                            Discover our charming handmade greeting cards
                        </p>
                        <h1 className="text-4xl hidden md:block mt-3 mb-3 text-[#23BE0A] font-extrabold">
                            {/* <span className='primary-color'>Visit</span> <br /> */}
                            <TypeAnimation
                                sequence={[
                                    "Visit ",
                                    1000,
                                    "ArtistryCraft",
                                    1000,
                                ]}
                                wrapper="span"
                                speed={60}
                                repeat={Infinity}
                            />
                        </h1>
                        {/* <div className="hidden md:flex md:absolute md:w-3/4 md:bottom-0 md:-left-1.5">
      <button className="btn bg-[#23BE0A] text-white">See More</button>
    </div> */}
                    </div>
                </div>
                <div>
                    <img src={banner5} />
                    <div className="absolute -inset-0 translate-y-1/2 p-5">
                        <p className="text-4xl hidden md:block font-bold text-black uppercase bg-gray-100/35  p-5">
                            Discover our charming handmade greeting cards
                        </p>
                        <h1 className="text-4xl hidden md:block mt-3 mb-3 text-[#23BE0A] font-extrabold">
                            {/* <span className='primary-color'>Visit</span> <br /> */}
                            <TypeAnimation
                                sequence={[
                                    "Visit ",
                                    1000,
                                    "ArtistryCraft",
                                    1000,
                                ]}
                                wrapper="span"
                                speed={60}
                                repeat={Infinity}
                            />
                        </h1>
                        {/* <div className="hidden md:flex md:absolute md:w-3/4 md:bottom-0 md:-left-1.5">
      <button className="btn bg-[#23BE0A] text-white">See More</button>
    </div> */}
                    </div>
                </div>
                <div>
                    <img src={banner6} />
                    <div className="absolute  -inset-0 translate-y-1/2 p-5">
                        <p className="text-4xl hidden md:block font-bold text-black uppercase bg-gray-100/35  p-5">
                            Discover our charming handmade greeting cards
                        </p>
                        <h1 className="text-4xl hidden md:block mt-3 mb-3 text-[#2cef0e] font-extrabold">
                            {/* <span className='primary-color'>Visit</span> <br /> */}
                            <TypeAnimation
                                sequence={[
                                    "Visit ",
                                    1000,
                                    "ArtistryCraft",
                                    1000,
                                ]}
                                wrapper="span"
                                speed={60}
                                repeat={Infinity}
                            />
                        </h1>
                        {/* <div className="hidden md:flex md:absolute md:w-3/4 md:bottom-0 md:-left-1.5">
      <button className="btn bg-[#23BE0A] text-white">See More</button>
    </div> */}
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Hero;