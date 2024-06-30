import Swal from 'sweetalert2';
import bg from '../assets/bg.jpg'
import { useContext } from 'react';
import { AuthContext } from './AuthProvider';


const AddCraft = () => {
    const {user} = useContext(AuthContext);
    const handleAdd = e => {
        e.preventDefault();
        const form = e.target
        const itemName = form.itemName.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const category = form.category.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const stock = form.stock.value;
        const email = form.email.value;
        const name = form.name.value;
        const description = form.description.value;

        console.log(itemName, photo, price, category, rating, customization, stock, email, name, description);

        const craft = {itemName, photo, price, category, rating, customization, stock, email, name, description};
        console.log(craft);


        // send data to server
        fetch('http://localhost:5000/craft',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(craft)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)

            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'

            })}
        })
    }


    return (
        <div className='mt-8'>

            <section
                style={{
                    background: `url(${bg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '20px',
                    boxShadow: '16px'

                }}
                className="bg-white dark:bg-gray-900">
                <div className="flex justify-center min-h-screen">


                    <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                        <div className="w-full">
                            <h1 className="text-2xl font-bold tracking-wider  uppercase text-center text-[#23BE0A] dark:text-white">
                                Add Crafts
                            </h1>

                            <form onSubmit={handleAdd} className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                                <div>

                                    <input type="text" placeholder="Item Name" name="itemName" className="block required: w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-[#23BE0A]           dark:focus:border-[#23BE0A]  focus:ring-[#23BE0A] focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div>

                                    <input type="photo" name="photo" placeholder="Photo URl" className="block required: w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-[#23BE0A]           dark:focus:border-[#23BE0A]  focus:ring-[#23BE0A] focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div>

                                    <input type="text" name="price" placeholder="Price" className="block w-full required: px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-[#23BE0A]           dark:focus:border-[#23BE0A]  focus:ring-[#23BE0A] focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div>
                                    <select id="category" name="category" className="block w-full required: px-5 py-3 mt-2 text-gray-400 placeholder-gray-400 bg-white border border-gray-200  rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-[#23BE0A]           dark:focus:border-[#23BE0A]  focus:ring-[#23BE0A] focus:outline-none focus:ring focus:ring-opacity-40">
                                        <option value="" disabled selected>Select Category</option>
                                        <option value="Card Making">Card Making</option>
                                        <option value="Scrapbooking">Scrapbooking</option>
                                        <option value="Paper Quilling & Origami">Paper Quilling & Origami</option>
                                        <option value="Glass Painting">Glass Painting</option>
                                        <option value="Lampworking">Lampworking</option>
                                        <option value="Glass Dying & Staining">Glass Dying & Staining</option>
                                    </select>
                                </div>


                                <div>

                                    <input type="text" name="rating" placeholder="Rating" className="block w-full px-5 py-3 mt-2 required: text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 
                                    focus:border-[#23BE0A]           dark:focus:border-[#23BE0A]  focus:ring-[#23BE0A] focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div>
                                    <select id="customization" name="customization" className="block w-full px-5 py-3 mt-2 required: text-gray-400 placeholder-gray-400 bg-white border border-gray-200  rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-[#23BE0A]           dark:focus:border-[#23BE0A]  focus:ring-[#23BE0A] focus:outline-none focus:ring focus:ring-opacity-40">
                                        <option value="" disabled selected>Select Customization</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div>

                                    <input type="text" name="time" placeholder="Process Time" className="block w-full px-5 py-3 mt-2 required: text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-[#23BE0A]           dark:focus:border-[#23BE0A]  focus:ring-[#23BE0A] focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                                <div>
                                    <select id="stock" name="stock" className="block w-full px-5 py-3 mt-2 required: text-gray-400 placeholder-gray-400 bg-white border border-gray-200  rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-[#23BE0A]           dark:focus:border-[#23BE0A]  focus:ring-[#23BE0A] focus:outline-none focus:ring focus:ring-opacity-40">
                                        <option value="" disabled selected>Stock Status</option>
                                        <option value="Instock">Instock</option>
                                        <option value="Made To Order">Made To Order</option>
                                    </select>
                                </div>
                                <div>

                                    <input type="email" defaultValue={user?.email}  name="email" placeholder="Email" className="block w-full required: px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-[#23BE0A]           dark:focus:border-[#23BE0A]  focus:ring-[#23BE0A] focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                                <div>

                                    <input type="text" name="name" placeholder="Name"  defaultValue={user?.displayName} className="block w-full required px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-[#23BE0A]           dark:focus:border-[#23BE0A]  focus:ring-[#23BE0A]  focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                                <div className='col-span-1 md:col-span-2'>

                                    <input type="text" name="description" placeholder="Short Description" className="block w-full px-5 py-3 mt-2 required: text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 
                                    focus:border-[#23BE0A]           dark:focus:border-[#23BE0A]  focus:ring-[#23BE0A] focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                                <div className="col-span-1 md:col-span-2">
                                    <input className="btn w-full bg-[#23BE0A] text-white" type="submit" value="Add Item" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AddCraft;