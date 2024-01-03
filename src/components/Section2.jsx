import imgCircle from '../assets/images/bg-pattern-circles.svg';
import imgPhone from '../assets/images/illustration-phones.svg';

const Section2 = () => {
    return (
			<section className='mt-[250px] md:mt-0 relative min-h-[550px] md:min-h-min font-Overpass'>
				<div className=' absolute top-[-230px] left-1/2 transform -translate-x-1/2 z-50 md:top-[-40px]  md:left-[250px] '>
					<img src={imgPhone} alt='' className='max-w-[370px] sm:max-w-[350px] md:max-w-[420px] ' />
				</div>

				<div className='bg-[#3B3C5B] relative text-center text-white  rounded-bl-[80px] rounded-tr-[80px] h-[500px] md:h-[330px] overflow-hidden flex flex-col justify-end pb-10  md:flex-row '>
					<div className=' md:w-[50%] md:relative '>

						<img
							className='absolute z-1  top-[-100px] w-full md:top-[-300px] md:scale-[120%]'
							src={imgCircle}
							alt=''
						/>
					</div>

					<div className='py-12 z-20 md:w-[50%] md:flex md:flex-col md:items-star md:justify-center md:text-left md:pr-8 '>
						<h1 className='text-[2.3em] mb-6 font-bold md:text-left w-full'>
							State of the Art <br className='md:hidden' /> Infrastructure
						</h1>
						<p className='text-[1em] md:text-[0.9em] w-[90%]  md:text-left text-center text-grayish-blue'>
							With reliability and speed in mind, worldwide data centers provide
							the backbone for ultra-fast connectivity. This ensures your site
							will load instantly, no matter where your readers are, keeping
							your site competitive.
						</p>
					</div>
				</div>
			</section>
		);
}

export { Section2 }