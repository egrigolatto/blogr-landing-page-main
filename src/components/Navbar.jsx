import  { useState, useEffect } from 'react';

const Navbar = () => {

  // estados
	const [mouseStates, setMouseStates] = useState({}); // estado para manejar despliegue menu, mousestate recibe un objeto, un par clave-valor con el nombre y el valor true o false {Company: false} que habilia el despliegue del menu
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);// is mobile es para controlar el cambio de pantalla
  const [iconMenu, setIconMenu] = useState(false);
  const [mouseStateMobile, setMouseStateMobile] = useState({});

  const handleMouseStateMobile = nombre => {
    setMouseStateMobile(prev => ({ ...prev, [nombre]: !prev[nombre] }));
  }
	const handleMouseEnter = nombre => {
		// en este state "prev" es el estado anterior de la funcion, que se actualiza con nombre
		// esta funcion cuando pasamos el mouse por encima cambia el valor a true
		// {Product: true, Company: false} esto es lo que va viene cada vez que pasamos sobre el div que tiene el evento
		setMouseStates(prev => ({ ...prev, [nombre]: true }));
	};

	const handleMouseLeave = nombre => {
		// lo mismo que el de arriba pero cambia el valor a false cuando el mouse sale del div
		setMouseStates(prev => ({ ...prev, [nombre]: false }));
	};
	// con menustate menejo el estado de la flecha hacia arriba y abajo en el menu, recibo los valores de la misma manera que la funcion anteriro {Product: true} en ab se a si es true o false se ejecutara
	const [menuStates, setMenuStates] = useState({});
  // esta funcion se ejecuta dentro del evento de pasar el mouse
  const handleToggleMenu = nombre => {
    //al valor que recibe lo cambia por el opuseto con !
		setMenuStates(prev => ({ ...prev, [nombre]: !prev[nombre] }));
	};
  // use effect se va a ejecutar despues que componente se monte y va a ejecutar el evento resize para verificar el ancho de pantalla, luego limpia la funcion con un return
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const navegacion = [
		{
			nombre: 'Product',
			path: '#',
			elementos: [
				{ nombre: 'Overview', path: '#' },
				{ nombre: 'Pricing', path: '#' },
				{ nombre: 'Marketplace', path: '#' },
				{ nombre: 'Features', path: '#' },
				{ nombre: 'Integrations', path: '#' },
			],
		},
		{
			nombre: 'Company',
			path: '#',
			elementos: [
				{ nombre: 'About', path: '#' },
				{ nombre: 'Team', path: '#' },
				{ nombre: 'Blog', path: '#' },
				{ nombre: 'Careers', path: '#' },
			],
		},
		{
			nombre: 'Connect',
			path: '#',
			elementos: [
				{ nombre: 'Contact', path: '#' },
				{ nombre: 'Newsletter', path: '#' },
				{ nombre: 'Linkedin', path: '#' },
			],
		},
	];

	const Flecha = ({ rotar }) => {
		return (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='10'
				height='7'
				className='mx-[8px] sm:mt-1'
				style={{ transform: rotar ? 'rotate(180deg)' : 'rotate(0deg)' }}
			>
				<path
					fill='none'
					stroke={isMobile ? '#FF7B86' : '#fff'}
					strokeWidth='2'
					opacity='.75'
					d='M1 1l4 4 4-4'
				/>
			</svg>
		);
  }; 
  const handleIconMenu = (param) => {
    if (param) {
      return (
				<svg width='32' height='18' xmlns='http://www.w3.org/2000/svg'>
					<g fill='#FFF' fillRule='evenodd'>
						<path d='M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z' />
					</g>
				</svg>
			);
    } else {
      return (
				<svg width='26' height='26' xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M23.607.98l1.414 1.413L14.414 13l10.607 10.607-1.414 1.414L13 14.414 2.393 25.021.98 23.607 11.586 13 .98 2.393 2.393.98 13 11.586 23.607.98z'
						fill='#FFF'
						fillRule='evenodd'
					/>
				</svg>
			);
         
       
     }
  }

	return (
		<nav className='md:w-full md:flex'>
			{isMobile ? (
				// mobile
				<div className='md:hidden'>
					<button className='md:hidden' onClick={() => setIconMenu(!iconMenu)}>
						{handleIconMenu(!iconMenu)}
					</button>
					{iconMenu && (
						<div className='absolute mx-auto left-0 right-0 top-[120px]  transition-all duration-300  w-[90%] text-center bg-white rounded p-5 md:hidden'>
							{navegacion.map(nave => (
								<div
									key={nave.nombre}
									onClick={() => {
										handleMouseStateMobile(nave.nombre);
									}}
									className='text-center'
								>
									<div className='flex items-center justify-center mb-4 '>
										<a
											href={nave.path}
											className='text-very-dark-blue font-bold font-Overpass text-[1.2em] '
										>
											{nave.nombre}
										</a>
										<Flecha rotar={mouseStateMobile[nave.nombre]} />
									</div>

									<ul
										className={`bg-[#EFEFF1] rounded flex flex-col items-center justify-center mb-4 py-4 ${
											mouseStateMobile[nave.nombre] ? '' : 'hidden'
										}`}
									>
										{nave.elementos.map(elem => (
											<li className='my-1' key={elem.nombre}>
												<a
													className='font-Overpass font-semibold text-[.9em] text-very-dark-grayish-blue'
													href={elem.path}
												>
													{elem.nombre}
												</a>
											</li>
										))}
									</ul>
								</div>
							))}
							<div className='border-t-[1px] border-[#EFEFF1] pt-6 flex flex-col items-center'>
								<a
									className='font-Overpass text-very-dark-blue font-bold mb-4 '
									href='#'
								>
									Login
								</a>
								<a
									className='font-Overpass px-[30px] font-bold py-[10px] rounded-[20px] text-[.9em] text-white bg-gradient-to-r from-very-light-red-gradient to-light-red-gradient'
									href='#'
								>
									Sign Up
								</a>
							</div>
						</div>
					)}
				</div>
			) : (
				// desktop
				<div className='flex md:ml-10 w-[100%]  items-center justify-between'>
					<div className='flex'>
						{navegacion.map(nave => (
							<div
								key={nave.nombre}
								onMouseEnter={() => {
									handleMouseEnter(nave.nombre);
									handleToggleMenu(nave.nombre);
								}}
								onMouseLeave={() => {
									handleMouseLeave(nave.nombre);
									handleToggleMenu(nave.nombre);
								}}
								className='md:py-6 flex-1'
							>
								<a
									href={nave.path}
									className='md:flex md:items-center md:justify-center md:text-white md:py-2 md:mr-4'
								>
									{nave.nombre}
									<Flecha
										rotar={menuStates[nave.nombre] || mouseStates[nave.nombre]}
									/>
								</a>
								<ul
									className={
										mouseStates[nave.nombre] || menuStates[nave.nombre]
											? 'md:flex md:flex-col md:absolute bg-white md:rounded-[6px] md:p-5 md:pr-14 md:mt-6  md:ml-[-15px] font-Ubuntu'
											: 'hidden'
									}
								>
									{nave.elementos.map(elem => (
										<li
											key={elem.nombre}
											className='md:text-[.8em] md:py-1 md:text-very-dark-grayish-blue cursor-pointer
                    md:hover:text-very-dark-black-blue md:hover:font-semibold'
										>
											{elem.nombre}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
					<div className='flex items-center justify-center'>
						<a
							href='#'
							className='font-Overpass text-white font-bold mb-4 pt-5'
						>
							Login
						</a>
						<a
							href='#'
							className='font-Overpass px-[30px] font-bold py-[10px] rounded-[20px] text-[.9em] text-light-red-gradient bg-white ml-8  hover:text-white hover:bg-[#FE7C87] transition-all'
						>
							Sign Up
						</a>
					</div>
				</div>
			)}
		</nav>
	);



};

export { Navbar };
