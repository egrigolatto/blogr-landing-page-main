
import { Logo } from "./Logo"
import { Navbar } from "./Navbar";
import imgMobile from '../assets/images/bg-pattern-intro-mobile.svg'
import imgDesktop from '../assets/images/bg-pattern-intro-desktop.svg'



const Header = () => {

    return (
			<header className='h-[95vh] pt-10 bg-gradient-to-r from-very-light-red-gradient to-light-red-gradient bg-cover bg-center relative  z-0 rounded-bl-[80px] '>
				<div className='flex justify-between items-center w-[90%]  mx-auto relative z-10 md:flex-1'>
					<a href='#' className='sm:p-6'>
						<Logo
							className='transform scale-[70%] md:scale-[100%]'
							fill='#fff'
						/>
					</a>
					<Navbar />
				</div>

				<div className=' z-10 h-[90%] flex flex-col items-center justify-center w-[85%] mx-auto  md:h-[70%] '>
					<h1 className='text-white text-Overpass text-[2em] text-center font-semibold mb-3 md:text-[4vw]'>
						A modern <br className='md:hidden' /> publishing plataform
					</h1>
					<p className='text-white text-center w-[95%] mb-6 md:text-[1.2em] md:mb-8'>
						Grow your audience and build your online brand
					</p>
					<div className='flex items-center justify-center gap-2 w-[90%]'>
						<button className='text-light-red-gradient bg-white rounded-[20px]  py-[8px] text-[.85em] text-Overpass font-semibold flex-1 max-w-[150px] hover:text-white hover:bg-[#FE7C87] transition-all'>
							Start For Free
						</button>
						<button className='text-white bg-transparent rounded-[20px]  py-[8px] text-[.85em] text-Overpass font-semibold border-[1px] border-white flex-1 max-w-[150px] hover:text-light-red-gradient hover:bg-white transition-all'>
							Learn More
						</button>
					</div>
				</div>
				<div className='absolute top-0 -z-40  h-full overflow-hidden rounded-bl-[80px]'>
					<img
						className='transform translate-y-[150px] translate-x-[110px] scale-[400%] md:hidden'
						src={imgMobile}
						alt=''
					/>
					<img
						className='hidden md:block transform translate-y-[-350px] translate-x-[200px] scale-[180%] '
						src={imgDesktop}
						alt=''
					/>
				</div>
			</header>
		);
}

export { Header }
