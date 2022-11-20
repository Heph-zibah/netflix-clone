import React from 'react';
import logo from '../../Assets/netflix-logo.png';
import { IoIosArrowForward } from 'react-icons/io';
import '../Hero/Hero.css';

const Hero = () => {
	return (
		<>
			<header>
				<nav>
					<img src={logo} alt='Netflix logo' className='logo' />

					<button className='btn signin'>Sign in</button>
				</nav>

				<div className='hero__content'>
					<div className='content__header'>
						<h1>Unlimited movies, TV shows, and more.</h1>
						<h2>Watch anywhere. Cancel anytime.</h2>
					</div>
					<div className='form__div'>
						<h3>
							Ready to watch? Enter your email to create or restart your membership.
						</h3>
						<form action=''>
							<input type='email' placeholder='Email Address' />

							<button className='btn cta__btn'>
								Get Started <IoIosArrowForward size={20} />
							</button>
						</form>
					</div>
				</div>
			</header>
		</>
	);
};

export default Hero;
