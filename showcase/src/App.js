import { Features, Download, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
	return (
		<>
			<SectionWrapper
				title='Your own NFT Store. Start trading now!'
				description='Millions of people are trading NFTs. Join the revolution on ProNef Marketplace today.'
				showBtn
				mockupImg={assets.homeHero}
				banner='banner'
			/>
			<SectionWrapper
				title='Smart User Interface Marketplace'
				description='Experience a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design.'
				mockupImg={assets.homeCards}
				reverse
			/>
			<Features />
			<SectionWrapper
				title='Deployment'
				description="ProNef is built using Expo which runs natively on all users' devices. You can easily get your app into people's hands."
				mockupImg={assets.feature}
				reverse
			/>
			<SectionWrapper
				title='Creative way to showcase the store'
				description='The App contains two screens. The first screen lists all NFTS while the second one shows the details of a specific NFT.'
				mockupImg={assets.mockup}
				banner='banner02'
			/>
			<Download />
			<div className='px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04'>
				<p className={`${styles.pText} ${styles.whiteText}`}>
					<a href='https://amay.bio.link'>
						Made with love by{' '}
						<span className='bold'>Amay @BrajBliss</span>
					</a>
				</p>
			</div>
		</>
	);
};

export default App;
