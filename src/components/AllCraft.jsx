import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllCraft = () => {
    const [loadData, setLoadData] = useState([]);
    useEffect(() => {
        fetch("https://artistry-craft-server-1.onrender.com/craft")
            .then((res) => res.json())
            .then((data) => {
                setLoadData(data);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="max-w-screen-xl mx-auto p-4">
            <p className="text-center text-2xl font-bold mb-4">All Crafts Item </p>
            <p className="text-center  w-2/3 mx-auto mb-6">Discover exceptional craftsmanship and unique stories in our curated collection of art and craft. Unearth hidden treasures and find the perfect addition to your home or a thoughtful gift from artisans around the world.</p>
            {/* <p className="text-center mb-4">Total Items: {loadData.length}</p> */}

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-green-200 shadow-xl shadow-green-400">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b text-left"></th>
                            <th className="py-2 px-4 border-b text-left">Item Name</th>
                            <th className="py-2 px-4 border-b text-left">Price</th>
                            <th className="py-2 px-4 border-b text-left">Category</th>
                            <th className="py-2 px-4 border-b text-left">Stock Status</th>
                            <th className="py-2 px-4 border-b text-left">Rating</th>
                            <th className="py-2 px-4 border-b text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loadData.map((item) => (
                            <tr key={item.id} className="border-b hover:bg-green-400/20 hover:scale-105 transition-y duration-1000">
                                <td className="py-2 px-4"><img src={item.photo} className="h-[50px]" alt="" /></td>
                                <td className="py-2 px-4">{item.itemName}</td>
                                <td className="py-2 px-4">${item.price}</td>
                                <td className="py-2 px-4">{item.category}</td>
                                <td className="py-2 px-4">{item.stock}</td>
                                <td className="py-2 px-4">{item.rating} <span className="text-yellow-500">★</span></td>
                                <td className="py-2 px-4">
                                    <Link to={`/craft/${item._id}`} className="px-4 py-2 bg-[#23BE0A] text-white rounded">
                                        View Details
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllCraft;
