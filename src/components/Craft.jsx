import { useEffect, useState } from "react";
import CraftCard from "./CraftCard";


const Craft = () => {
    const [loadData, setLoadData] = useState([]);
    const [dataLength, setDataLength] = useState(6);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch('https://artistry-craft-server-1.onrender.com/craft')
            .then(res => res.json())
            .then(data => {
                setLoadData(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleViewMore = () => {
        setDataLength(loadData.length);
        setShowAll(true);
    };

    const handleSeeLess = () => {
        setDataLength(6);
        setShowAll(false);
    };

    return (
        <div className="md:mt-16 mt-10">
            <h1 className="text-4xl text-center mb-3 font-bold">Our Craft</h1>
            <p className="text-center mx-auto w-2/3 text-gray-500">Explore our All Crafts section to find a curated selection of handmade treasures, from intricate sculptures to vibrant textiles, showcasing exquisite craftsmanship</p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 mt-10">
                {loadData.slice(0, dataLength).map(craft => <CraftCard key={craft._id} craft={craft} />)}
            </div>
            <div className={`flex mt-5 justify-center ${dataLength === loadData.length ? 'hidden' : ''}`}>
                <button onClick={handleViewMore} className="btn bg-[#23BE0A] text-white font-bold mb-8">View More</button>
            </div>
            {showAll && (
                <div className="flex justify-center">
                    <button onClick={handleSeeLess} className="btn bg-[#23BE0A] text-white font-bold mt-5">See Less</button>
                </div>
            )}
          
        </div>
    );
};

export default Craft;
