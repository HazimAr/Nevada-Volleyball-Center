import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import clinicData from "../content/clinics.json";
import openGymData from "../content/openGyms.json";
import tourneyData from "../content/tournements.json";

const Content = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	section {
		margin: 0px 10px;
	}
`;

const Card = styled.div`
	max-width: 500px;
	width: 90%;
	margin: 20px;
`;
const Title = styled.h1`
	font-size: 50px;
`;
type input = {
	image: string;
};
function display(inValue: input[]): JSX.Element[] {
	return inValue.map((data) => (
		<Card key={data.image}>
			<Link href="/contact">
				<a>
					<Image src={data.image} width={300} height={300} />
				</a>
			</Link>
		</Card>
	));
}
// eslint-disable-next-line import/no-default-export
export default function Events(): JSX.Element {
	return (
		<main>
			<Content>
				<section>
					<Title>Clinics</Title>
					{display(clinicData)}
				</section>
				<section>
					<Title>Tournaments</Title>
					{display(tourneyData)}
				</section>
				<section>
					<Title>Open Gyms</Title>
					{display(openGymData)}
				</section>
			</Content>
		</main>
	);
}
