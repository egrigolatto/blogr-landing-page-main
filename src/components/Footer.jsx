import { Logo } from './Logo';

const Footer = () => {
	return (
		<footer className='bg-very-dark-black-blue py-14 flex flex-wrap justify-center items-start rounded-tr-[80px] md:px-[100px]'>
			<div className='mb-16 text-center flex justify-center w-full md:w-1/4 '>
				<Logo fill='#fff' />
			</div>

			<div className='text-center  w-full md:w-1/4'>
				<p className='mb-6 text-white'>
					<a href='#'>Product</a>
				</p>
				<ul className='text-grayish-blue mb-6'>
					<li>
						<a href='#'>Overview</a>
					</li>
					<li>
						<a href='#'>Pricing</a>
					</li>
					<li>
						<a href='#'>Marketplace </a>
					</li>
					<li>
						<a href='#'> Features</a>
					</li>
					<li>
						<a href='#'>Integrations </a>
					</li>
				</ul>
			</div>

			<div className='text-center w-full md:w-1/4'>
				<p className='mb-6 text-white '>
					<a href='#'>Company</a>
				</p>
				<ul className='text-grayish-blue mb-6'>
					<li>
						<a href='#'>About</a>
					</li>
					<li>
						<a href='#'>Team</a>
					</li>
					<li>
						<a href='#'>Blog</a>
					</li>
					<li>
						<a href='#'>Careers</a>
					</li>
				</ul>
			</div>

			<div className='text-center  w-full md:w-1/4'>
				<p className='mb-6 text-white '>
					<a href='#'>Connect</a>
				</p>
				<ul className='text-grayish-blue mb-6'>
					<li>
						<a href='#'>Contact</a>
					</li>
					<li>
						<a href='#'>Newsletter</a>
					</li>
					<li>
						<a href='#'>LinkedIn</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export { Footer };
