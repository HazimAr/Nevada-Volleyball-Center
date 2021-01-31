import { Intro, Cards, Promise } from "@components/home";

// eslint-disable-next-line import/no-default-export
export default function Home(): JSX.Element {
	return (
		<>
			<Intro />
			<Cards />
			<Promise />
		</>
	);
}
