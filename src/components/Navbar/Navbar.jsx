import Logo from '../../assets/logo-horizontal.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
        <div className="z-50 fixed w-full shadow-md bg-nav_primary text-white pt-1 pb-1">
            <div className="container py-1 sm:py-0">
                <div className="flex justify-between items-center">
                    <div>
                        <Link to="/" className='flex items-center gap-2 text-2xl sm:text-3xl font-bold'>
                            <img src={Logo} className="w-[20vh]" alt="PiFAM_Logo" />
                        </Link>
                    </div>
                    <div className='hidden lg:block'>
                        <ul className='flex gap-4'>
                            <li>
                                <Link to="/" className='inline-block py-4 px-4 hover:text-nav_footer font-bold'  >HOME</Link>
                            </li>
                            <li>
                                <Link to="/meal_planner" id='nav' className='inline-block py-4 px-4 hover:text-nav_footer font-extrabold'  >MEAL PLANS</Link>
                            </li>
                            <li>
                                <Link to="/playlist" id='nav' className='inline-block py-4 px-4 hover:text-nav_footer font-extrabold'  >COOKING PLAYLIST</Link>
                            </li>
                            <li>
                                <Link to="/contact" id='nav' className='inline-block py-4 px-4 hover:text-nav_footer font-extrabold'  >CONTACT</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <button className='bg-none text-pine_green p-2.5 font-bold hover:bg-rhubarb_red hover:text-white rounded-md'>SIGN-UP</button> &nbsp;&nbsp;
                        <button className='bg-rhubarb_red p-2.5 font-bold hover:bg-red-500 rounded-md'>LOG IN</button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Navbar
