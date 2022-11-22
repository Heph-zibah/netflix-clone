import React from 'react';
import '../Enjoy/Enjoy.css';

const Enjoy = () => {
	return (
		<>
			<section className='enjoy__section'>
				<div className='enjoy__container'>
					<div className='enjoy__info'>
						<h1>Enjoy on your TV.</h1>
						<h2>
							Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
							players, and more.
						</h2>
					</div>
					<div className='enjoy__img'>
						<div className='enjoy__img--container'>
							<img
								src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png'
								alt='laptop'
							/>

							<div className='enjoy__video'>
								<video autoplay playsInline muted loop>
									<source
										src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v'
										type='video/mp4'
									></source>
								</video>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Enjoy;
