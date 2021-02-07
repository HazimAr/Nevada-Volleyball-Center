import Promise from '@components/home/Bottom'
import Cards from '@components/home/IntroCards'
import Section from '@components/home/Mid'
import Intro from '@components/home/Top'


// eslint-disable-next-line import/no-default-export
export default function Home(): JSX.Element {
	return (
		<>
			<Intro />
			<Cards />
			<Section />
			<Promise />
		</>
	);
}
