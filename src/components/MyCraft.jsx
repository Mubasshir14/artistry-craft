import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const MyCraft = () => {
    const { user } = useContext(AuthContext);
    const [loadData, setLoadData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:5000/craft')
            .then(res => res.json())
            .then(data => {
                setLoadData(data);
                const newData = data.filter(item => item.email === user.email);
                setFilteredData(newData);
            })
            .catch(error => console.error('Error fetching data:', error))
            .finally(() => setLoading(false));
    }, [user.email]);

    if (loading) {
        return <span className="loading text-green-600 text-center loading-bars loading-lg"></span>
    }

    return (
        <div className="min-h-[calc(100vh-400px)] mt-1">
            {/* <p>{filteredData.length}</p> */}

            {
                filteredData.length > 0 ?
                    <div>
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
                                    {filteredData.map((item) => (
                                        <tr key={item.id} className="border-b hover:bg-green-400/20 hover:scale-105 transition-y duration-1000">
                                            <td className="py-2 px-4"><img src={item.photo} className="h-[50px]" alt="" /></td>
                                            <td className="py-2 px-4">{item.itemName}</td>
                                            <td className="py-2 px-4">${item.price}</td>
                                            <td className="py-2 px-4">{item.category}</td>
                                            <td className="py-2 px-4">{item.stock}</td>
                                            <td className="py-2 px-4">{item.rating} <span className="text-yellow-500">★</span></td>
                                            <td className="py-2 px-4">
                                                <Link to={`/craft/${item._id}`} className="px-4 py-2 bg-[#23BE0A] text-white rounded" >
                                                    View Details
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-6 text-center">
                            <h1 className="mb-3 text-3xl font-bold">Add Your Craft</h1>
                            <div>
                                <Link to='/add' className="btn bg-[#23BE0A] text-white">Add Craft</Link>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="lg:mt-40 text-center min-h-[calc(100vh-600px)]">
                        <h1 className="mb-3 text-3xl font-bold">Add Your Craft</h1>
                        <div>
                            <Link to='/add' className="btn bg-[#23BE0A] text-white">Add Craft</Link>
                        </div>
                    </div>

            }
        </div>
    );
};

export default MyCraft;
