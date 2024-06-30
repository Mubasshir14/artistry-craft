import bg from '../assets/bg.jpg'

const UpdateCraft = () => {
    return (
        <div className='mt-16'>

            <section
            style={{ 
                background: `url(${bg})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' ,
                
            }} 
            className="bg-white dark:bg-gray-900">
                <div className="flex justify-center min-h-screen">


                    <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                        <div className="w-full">
                            <h1 className="text-2xl font-bold tracking-wider  uppercase text-center text-[#23BE0A] dark:text-white">
                                Add Crafts
                            </h1>

                            <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                                <div>

                                    <input type="text" placeholder="Item Name" name="item-name" className="block required: w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-[#23BE0A]           dark:focus:border-[#23BE0A]  focus:ring-[#23BE0A] focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div>

                                    <input type="photo" name="photo" placeholder="Photo URl" className="block required: w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-[#23BE0A]           dark:focus:border-[#23BE0A]  focus:ring-[#23BE0A] focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div>

                                    <input type="text" name="price" placeholder="price" className="block w-full required: px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-[#23BE0A]           dark:focus:border-[#23BE0A]  focus:ring-[#23BE0A] focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div>
                                    <select id="category" name="category" className="block w-full required: px-5 py-3 mt-2 text-gray-400 placeholder-gray-400 bg-white border border-gray-200  rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-[#23BE0A]           dark:focus:border-[#23BE0A]  focus:ring-[#23BE0A] focus:outline-none focus:ring focus:ring-opacity-40">
                                        <option value="" disabled selected>Select Category</option>
                                        <option value="option1">Card Making</option>
                                        <option value="option2">Scrapbooking</option>
                                        <option value="option3">Paper Quilling & Origami</option>
                                        <option value="option4">Glass Painting</option>
                                        <option value="option5">Lampworking</option>
                                        <option value="option6">Glass Dying & Staining</option>
                                    </select>
                                </div>


                                <div>

                                    <input type="text" name="rating" placeholder="Rating" className="block w-full px-5 py-3 mt-2 required: text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 
                                    focus:border-[#23BE0A]           dark:focus:border-[#23BE0A]  focus:ring-[#23BE0A] focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div>
                                    <select id="customization" name="customization" className="block w-full px-5 py-3 mt-2 required: text-gray-400 placeholder-gray-400 bg-white border border-gray-200  rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-[#23BE0A]           dark:focus:border-[#23BE0A]  focus:ring-[#23BE0A] focus:outline-none focus:ring focus:ring-opacity-40">
                                        <option value="" disabled selected>Select Customization</option>
                                        <option value="option1">Yes</option>
                                        <option value="option2">No</option>
                                    </select>
                                </div>
                                <div>

                                    <input type="text" name="time" placeholder="Process Time" className="block w-full px-5 py-3 mt-2 required: text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-[#23BE0A]           dark:focus:border-[#23BE0A]  focus:ring-[#23BE0A] focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                                <div>
                                    <select id="stock" name="stock" className="block w-full px-5 py-3 mt-2 required: text-gray-400 placeholder-gray-400 bg-white border border-gray-200  rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-[#23BE0A]           dark:focus:border-[#23BE0A]  focus:ring-[#23BE0A] focus:outline-none focus:ring focus:ring-opacity-40">
                                        <option value="" disabled selected>Stock Status</option>
                                        <option value="option1">Instock</option>
                                        <option value="option2">Made To Order</option>
                                    </select>
                                </div>
                                <div>

                                    <input type="email" name="email" placeholder="Email" className="block w-full required: px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-[#23BE0A]           dark:focus:border-[#23BE0A]  focus:ring-[#23BE0A] focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                                <div>

                                    <input type="text" name="name" placeholder="Name" className="block w-full required px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-[#23BE0A]           dark:focus:border-[#23BE0A]  focus:ring-[#23BE0A]  focus:outline-none focus:ring focus:ring-opacity-40" />
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

export default UpdateCraft;