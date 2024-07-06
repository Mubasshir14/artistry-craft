



const Review = () => {
    return (
        <div className="mt-16">
            {/* <p className="text-xl font-medium text-center text-[#23BE0A]">Testimonials</p>

            <h1 className="mt-2 text-2xl text-center font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                What clients saying
            </h1>
            <div className="md:hidden flex-col">
                <section className="bg-white dark:bg-gray-900">
                    <div className="max-w-6xl px-6 py-10 mx-auto">


                        <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
                            <div className="absolute w-full bg-[#23BE0A]-z-10 md:h-96 rounded-2xl"></div>

                            <div className="w-full p-6 bg-[#23BE0A] md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                                <img className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="client photo" />

                                <div className="mt-2 md:mx-6">
                                    <div>
                                        <p className="text-xl font-medium tracking-tight text-white">Ema Watson</p>
                                        <p className="text-white ">Marketing Manager at Stech</p>
                                    </div>

                                    <p className="mt-4 text-lg leading-relaxed text-white md:text-xl"> “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda”.</p>
                                </div>
                            </div>
                        </main>
                    </div>
                </section>
                <section className="bg-white dark:bg-gray-900">
                    <div className="max-w-6xl px-6 py-10 mx-auto">


                        <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
                            <div className="absolute w-full bg-[#23BE0A]-z-10 md:h-96 rounded-2xl"></div>

                            <div className="w-full p-6 bg-[#23BE0A] md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                                <img className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="client photo" />

                                <div className="mt-2 md:mx-6">
                                    <div>
                                        <p className="text-xl font-medium tracking-tight text-white">Ema Watson</p>
                                        <p className="text-white ">Marketing Manager at Stech</p>
                                    </div>

                                    <p className="mt-4 text-lg leading-relaxed text-white md:text-xl"> “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda”.</p>
                                </div>
                            </div>
                        </main>
                    </div>
                </section>
            </div> */}
            <h2 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                Our Team
            </h2>
            {/* <section  className="bg-white dark:bg-gray-900 block lg:hidden">
                        <div className="container px-6 py-8 mx-auto">
                            

                            <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                <div className="w-full max-w-xs text-center">
                                    <img
                                        className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                                        src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80"
                                        alt="Ahmed Omer"
                                    />
                                    <div className="mt-2">
                                        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Ahmed Omer</h3>
                                        <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">Founder & CEO</span>
                                    </div>
                                </div>

                                <div className="w-full max-w-xs text-center">
                                    <img
                                        className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                                        src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                                        alt="Jane Doe"
                                    />
                                    <div className="mt-2">
                                        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Jane Doe</h3>
                                        <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">Co-founder & Head of Design</span>
                                    </div>
                                </div>

                                <div className="w-full max-w-xs text-center">
                                    <img
                                        className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                                        src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
                                        alt="Steve Ben"
                                    />
                                    <div className="mt-2">
                                        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Steve Ben</h3>
                                        <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">Product Designer</span>
                                    </div>
                                </div>

                                <div className="w-full max-w-xs text-center">
                                    <img
                                        className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                                        alt="Patterson Johnson"
                                    />
                                    <div className="mt-2">
                                        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Patterson Johnson</h3>
                                        <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">Lead Craftsman</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
            <div className="md:ml-0 ml-8">
 
                    <section className="bg-white dark:bg-gray-900">
                        <div className="container px-6 py-8 mx-auto">
                            

                            <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                <div className="w-full max-w-xs text-center">
                                    <img
                                        className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                                        src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80"
                                        alt="Ahmed Omer"
                                    />
                                    <div className="mt-2">
                                        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Ahmed Omer</h3>
                                        <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">Founder & CEO</span>
                                    </div>
                                </div>

                                <div className="w-full max-w-xs text-center">
                                    <img
                                        className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                                        src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                                        alt="Jane Doe"
                                    />
                                    <div className="mt-2">
                                        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Jane Doe</h3>
                                        <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">Co-founder & Head of Design</span>
                                    </div>
                                </div>

                                <div className="w-full max-w-xs text-center">
                                    <img
                                        className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                                        src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
                                        alt="Steve Ben"
                                    />
                                    <div className="mt-2">
                                        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Steve Ben</h3>
                                        <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">Product Designer</span>
                                    </div>
                                </div>

                                <div className="w-full max-w-xs text-center">
                                    <img
                                        className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                                        alt="Patterson Johnson"
                                    />
                                    <div className="mt-2">
                                        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Patterson Johnson</h3>
                                        <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">Lead Craftsman</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


            </div>
        </div>

    );
};

export default Review;