import imgMobile from '../assets/images/illustration-editor-mobile.svg';
import imgDesktop from '../assets/images/illustration-editor-desktop.svg';

const Section1 = () => {
    return (
			<section className=' w-[90%] md:w-[85%] m-auto flex flex-col justify-center items-center py-10 font-Overpass md:pb-[10vw] md:mt-10 '>
				<h1 className='text-[1.5em] mb-6 text-very-dark-blue font-semibold text-Overpass md:my-8 md:text-[2em]'>
					Designed for the future
				</h1>

				<div className=' md:flex '>
					<div className=' md:w-[48%] md:order-2 relative '>
						<img className='w-full mb-10 md:hidden' src={imgMobile} alt='' />
						<img
							className='hidden md:block absolute top-1/2 right-0 transform -translate-x-[-220px] -translate-y-1/2 scale-[140%] w-full'
							src={imgDesktop}
							alt=''
						/>
					</div>

					<div className='text-center  md:w-[48%] md:order-1 md:text-left md:mt-6 '>
						<div className='mb-4'>
							<h1 className='text-[1.5em] mb-4  text-very-dark-blue font-semibold'>
								Introducing an <br className='sm:hidden' /> extensible editor
							</h1>
							<p className='text-very-dark-grayish-blue md:text-[.9em]'>
								Blogr features an exceedingly intuitive interface which lets you
								focus on one thing: creating content. The editor supports
								management of multiple blogs and allows easy manipulation of
								embeds such as images, videos, and Markdown. Extensibility with
								plugins and themes provide easy ways to add functionality or
								change the looks of a blog.
							</p>
						</div>
						<div className='md:mt-14'>
							<h1 className='text-[1.5em] mb-4  text-very-dark-blue font-semibold'>
								Robust content <br className='sm:hidden' /> management{' '}
							</h1>
							<p className='text-very-dark-grayish-blue md:text-[.9em]'>
								Flexible content management enables users to easily move through
								posts. Increase the usability of your blog by adding customized
								categories, sections, format, or flow. With this functionality,
								you’re in full control.
							</p>
						</div>
					</div>
				</div>
			</section>
		);
}

export { Section1 }