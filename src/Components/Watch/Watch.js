import React from 'react';
import '../Watch/Watch.css';
import phone from '../../Assets/netflix-download.jpg';
import boxshot from '../../Assets/netflix-boxshot.png';

const Watch = () => {
	return (
		<>
			<section className='watch__section'>
				<div className='watch__container'>
					<div className='watch__info'>
						<h1>Download your shows to watch offline.</h1>
						<h2>Save your favorites easily and always have something to watch.</h2>
					</div>
					<div className='watch__img'>
						<div className='watch__img--container'>
							<img src={phone} alt='phone' />
							<div className='watch__animation'>
								<div className='watch__animation--img'>
									<img src={boxshot} alt='boxshot' />
								</div>
								<div className='watch__animation--text'>
									<h3>Stranger Things</h3>
									<p>Downloading...</p>
								</div>
								<div className='watch__animation--download'></div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Watch;
