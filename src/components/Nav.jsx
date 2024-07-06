import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Nav = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);

    const handleToggle = e => {
        setTheme(e.target.checked ? 'dark' : 'light');
    };



    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error.message))
    }

    const navItem = (
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/all'>All Categories</NavLink></li>
            <li><NavLink to='/add'>Add Craft</NavLink></li>
            <li><NavLink to='/mycraft'>My Craft</NavLink></li>
            {user ? (
                <li>
                    <Link onClick={handleLogOut} to='/' className="md:hidden">Sign Out</Link>
                </li>
            ) : (
                ''
            )}
            <li>
                <label className="grid md:hidden cursor-pointer">
                    <input
                        onChange={handleToggle}
                        type="checkbox"
                        checked={theme === 'dark'}
                        className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
                    <svg
                        className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5" />
                        <path
                            d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                    </svg>
                    <svg
                        className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                </label>
            </li>
        </>
    );

    return (
        <div>
            <div className="navbar bg-base-100 border-b-4 border-[#23BE0A]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navItem}
                        </ul>
                    </div>
                    <p className="font-bold btn-ghost text-2xl">Artistry<span className="text-[#23BE0A]">Crafts</span></p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal mr-6 px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end flex gap-4">
                    <label className="md:grid hidden cursor-pointer place-items-center">
                        <input
                            onChange={handleToggle}
                            type="checkbox"
                            checked={theme === 'dark'}
                            className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
                        <svg
                            className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5" />
                            <path
                                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                        </svg>
                        <svg
                            className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </label>
                    {user ? (
                        <>
                            <img src={user?.photoURL} alt={user?.displayName} title={user?.displayName} className="w-8 h-8 rounded-full" />

                            <Link onClick={handleLogOut} to='/' className="btn hidden md:flex text-white bg-[#59C6D2]">Sign Out</Link>

                        </>

                    ) : (
                        <>
                            <Link to='/signin' className="btn text-white bg-[#23BE0A]">Sign In</Link>
                            <Link to='/signup' className="btn hidden md:flex text-white bg-[#59C6D2] ">Sign Up</Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Nav;
