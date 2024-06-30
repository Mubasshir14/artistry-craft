import { Link } from "react-router-dom";


const Category = () => {
    return (
        <div className='mt-16'>
            <h1 className='text-3xl text-center font-bold mb-4'>Craft Collection</h1>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  h-[200px] bg-cover relative'>
                <img src='https://i.ibb.co/t87GwTY/pexels-anntarazevich-6146662.jpg' alt="" />

                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>

                <span className='text-2xl font-bold text-white tracking-wider'></span>
                <div className='pt-8 text-center'>
                <Link to='/all'  ><button className='text-cen4 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Card Making</button></Link>
                    {/* <a href="/"><button className='text-cen4 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button></a> */}

                </div>

                </div>

            </div>
            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  h-[200px] bg-cover relative'>
                <img src='https://i.ibb.co/86WM5VY/scrapbooking-4322281-1280.jpg' alt="" />

                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>

                <span className='text-2xl font-bold text-white tracking-wider'></span>
                <div className='pt-8 text-center'>
                <Link to='/all'><button className='text-cen4 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Scrapbooking</button></Link>
                    {/* <a href="/"><button className='text-cen4 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button></a> */}

                </div>

                </div>

            </div>
            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  h-[200px] bg-cover relative'>
                <img src='https://i.ibb.co/S5DBX8p/makeup-3081015-1280.jpg' alt="" />

                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>

                <span className='text-2xl font-bold text-white tracking-wider'></span>
                <div className='pt-8 text-center'>
                <Link to='/all'><button className='text-cen4 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Glass Painting</button></Link>
                    {/* <a href="/"><button className='text-cen4 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button></a> */}

                </div>

                </div>

            </div>
            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  h-[200px] bg-cover relative'>
                <img src='https://i.ibb.co/M6jzmVM/lights-1088141-1280.jpg' alt="" />

                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>

                <span className='text-2xl font-bold text-white tracking-wider'></span>
                <div className='pt-8 text-center'>
                <Link to='/all'><button className='text-cen4 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Lampworking</button></Link>
                    {/* <a href="/"><button className='text-cen4 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button></a> */}

                </div>

                </div>

            </div>
            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  h-[200px] bg-cover relative'>
                <img src='https://i.ibb.co/86WM5VY/scrapbooking-4322281-1280.jpg' alt="" />

                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>

                <span className='text-2xl font-bold text-white tracking-wider'></span>
                <div className='pt-8 text-center'>
                <Link to='/all'><button className='text-cen4 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Glass Dying & Staining</button></Link>
                    {/* <a href="/"><button className='text-cen4 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button></a> */}

                </div>

                </div>

            </div>
            {/* <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  h-[200px] bg-cover relative'>
                <img src={proj1} alt="" />

                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>

                <span className='text-2xl font-bold text-white tracking-wider'></span>
                <div className='pt-8 text-center'>
                <a  href="#"><button className='text-cen4 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Card Making</button></a>
                    <a href="/"><button className='text-cen4 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button></a>

                </div>

                </div>

            </div> */}
        </div>
        </div>
    );
};

export default Category;