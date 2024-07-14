import facebook from '../../assets/facebook-round-svgrepo-com.svg'
import instagram from '../../assets/instagram-round-svgrepo-com.svg'
import twitter from '../../assets/twitter-round-svgrepo-com.svg'

const Footer = () => {
  return (
    <>
    

<div className="absolute hidden p-2 lg:flex justify-center inset-x-0 bottom-0 left-0 z-40 w-full bg-nav_primary shadow items-center">
    <span className=" text-white  font-semibold text-md"><a href="/" className="text-center hover:underline"> ©PiFAM 
    2023</a> </span>
    {/* <ul class="flex text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li className="pl-2">
            <a href="#" class="hover:underline me-4 md:me-6"><img src={facebook} className="h-[3vh]" alt="facebook" /></a>
        </li>
        <li className="pl-2">
            <a href="#" class="hover:underline me-4 md:me-6"><img src={instagram} className="h-[3vh]" alt="instagram" /></a>
        </li>
        <li className="pl-2">
            <a href="#" class="hover:underline me-4 md:me-6"><img src={twitter} className="h-[3vh]" alt="twitter" /></a>
        </li>
    </ul> */}
</div>

    </>
  )
}

export default Footer
