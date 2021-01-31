import Link from "next/link";
import { FaAirbnb } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.section`
	margin-top: -150px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding: 50px 0;
`;

const StyledCard = styled.div`
	max-width: 300px;
	margin: 20px;
	height: 400px;
	padding: 20px;
	padding-bottom: 40px;
	background-color: #f6f7f9;
	clip-path: polygon(0 0, 100% 0, 100% 75%, 0% 85%);
	&:first-child {
		clip-path: polygon(0 0, 100% 0, 100% 85%, 0 75%);
	}
	&:nth-child(2) {
		clip-path: polygon(100% 0, 100% 83%, 53% 92%, 0 85%, 0 0);
		padding-bottom: 60px;
	}
`;
export const Button = styled.button`
	text-transform: uppercase;
	padding: 10px 0;
	width: fit-content;
	font-size: 18px;
	border-bottom: var(--secondary) 3px solid;
	&:hover {
		cursor: pointer;
	}
`;
function Card(props: {
	// eslint-disable-next-line react/no-unused-prop-types
	Image: Function;
	title: string;
	description: string;
	link: string;
}): JSX.Element {
	return (
		<StyledCard>
			<props.Image />
			<h2>{props.title}</h2>
			<p>{props.description}</p>
			<Link href={props.link}>
				<a>
					<Button>Read more</Button>
				</a>
			</Link>
		</StyledCard>
	);
}

function Img() {
	return <FaAirbnb size="60px" />;
}

// eslint-disable-next-line import/no-default-export
export default function Cards(): JSX.Element {
	return (
		<Container>
			<Card
				Image={Img}
				link="/link"
				title="Complete Inventory"
				description="Here at Valley Construction Supply we believe that the construction industry is a relationship business and that our customers deserve personalized, hands-on customer service that serves them beyond their construction material needs"
			/>
			<Card
				Image={Img}
				link="/link"
				title="Complete Inventory"
				description="Here at Valley Construction Supply we believe that the construction industry is a relationship business and that our customers deserve personalized, hands-on customer service that serves them beyond their construction material needs"
			/>
			<Card
				Image={Img}
				link="/link"
				title="Complete Inventory"
				description="Here at Valley Construction Supply we believe that the construction industry is a relationship business and that our customers deserve personalized, hands-on customer service that serves them beyond their construction material needs"
			/>
		</Container>
	);
}
