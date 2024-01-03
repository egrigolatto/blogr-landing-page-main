import laptopMobile from '../assets/images/illustration-laptop-mobile.svg';
import laptopDesktop from '../assets/images/illustration-laptop-desktop.svg';

const Section3 = () => {
    return (
			<section className='font-Overpass mb-[80px] md:flex  md:pt-[200px] md:pb-[100px] '>
				<div className='md:w-[50%] md:relative md:h-full  '>
					<img src={laptopMobile} className='w-full md:hidden' alt='' />
					<img
						src={laptopDesktop}
						alt=''
						className='hidden md:block absolute left-[-150px] top-[-100px] md:min-w-[600px] '
					/>
				</div>

				<div className='flex flex-col w-[90%] m-auto text-center md:w-[50%] md:text-left md:h-full'>
					<h1 className='text-[1.8em] mb-6 text-very-dark-black-blue font-semibold'>
						Free, open, simple
					</h1>
					<p className='mb-6 text-very-dark-grayish-blue mb:text-[0.85em]'>
						Blogr is a free and open source application backed by a large
						community of helpful developers. It supports features such as code
						syntax highlighting, RSS feeds, social media integration,
						third-party commenting tools, and works seamlessly with Google
						Analytics. The architecture is clean and is relatively easy to
						learn.
					</p>
					<h1 className='text-[1.8em] mb-6 text-very-dark-black-blue font-semibold'>
						Powerful tooling
					</h1>
					<p className='text-very-dark-grayish-blue'>
						Batteries included. We built a simple and straightforward CLI tool
						that makes customization and deployment a breeze, but capable of
						producing even the most complicated sites.
					</p>
				</div>
			</section>
		);
}

export { Section3 }