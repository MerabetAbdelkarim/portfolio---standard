import { useEffect, useRef, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);

    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
        console.log(nav)
    };

    // Array containing navigation items
    const navItems = [
        { id: 1, text: 'About', link: '/#about' },
        { id: 2, text: 'Services', link: '/#services' },
        { id: 3, text: 'Project', link: '/#projects' },
    ];

    useEffect(() => {
        let handleNav = () => {
            setNav(false)
        }
        document.addEventListener("mousedown", handleNav)
    }, [])

    return (
        <>
            <div className='sticky  top-0 z-50  shadow-sm bg-white w-full  min-h-[50px]' >
                <div className='container  flex justify-between items-center  h-16 text-black'>
                    {/* Logo */}
                    <a href="/" className='capitalize font-medium text-gray-900'>Mostefaoui Mohammed</a>

                    {/* Desktop Navigation */}
                    <ul className='hidden md:flex space-x-4 capitalize text-gray-700'>
                        {navItems.map(item => (
                            <li
                                key={item.id}
                            >
                                <a className='p-4 text-gray-600  rounded-xl m-2 cursor-pointer duration-300 hover:text-black' href={item.link}>{item.text}</a>
                            </li>
                        ))}
                        <li>
                            <a href="#contact"
                                className="bg-blue-700 py-2 px-6 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 hover:bg-blue-800">contact</a>
                        </li>

                    </ul>

                    {/* Mobile Navigation Icon */}
                    <div onClick={handleNav} className='block md:hidden'>
                        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                    </div>

                    {/* Mobile Navigation Menu */}
                    <ul
                        className={
                            nav
                                ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r  bg-gray-100 ease-in-out duration-500'
                                : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                        }
                    >
                        {/* Mobile Logo */}
                        <h1 className='w-full text-2xl font-bold text-[#00df9a] m-4'>Mohammed Mostefaoui</h1>

                        {/* Mobile Navigation Items */}
                        {navItems.map(item => (
                            <li
                                key={item.id}
                                className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
                            >
                                <a href={item.link}>{item.text}</a>
                            </li>
                        ))}
                        <li className='p-4 bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'>
                            <a href='#contact'>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;