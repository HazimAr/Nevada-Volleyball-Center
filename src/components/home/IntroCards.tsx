import Link from "next/link";
import { FaBuilding, FaMoneyBill, FaVolleyballBall } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.section`
	margin-top: -150px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding:1px 0;
	z-index: 1000;
	position: relative;
`;

const StyledCard = styled.div`
	max-width: 300px;
	margin: 20px;
	height: 400px;
	padding: 20px;
	padding-bottom: 100px;
	background-color: #f6f7f9;
	position: relative;
	clip-path: polygon(0 0, 100% 0, 100% 75%, 0% 83%);
	&:nth-child(3) {
		clip-path: polygon(100% 0, 100% 83%, 53% 92%, 0 85%, 0 0);
	}
	&:nth-child(2) {
		clip-path: polygon(0 0, 100% 0, 100% 85%, 0 75%);
	}
	h2 {
		font-size: 20px;
		margin-bottom: 40px;
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
const HighLight = styled.div`
	border-top: solid var(--secondary) 5px;
	position: absolute;
	top: -0px;
	width: 60%;
	left: 50%;
	transform: translateX(-50%);
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
			<HighLight />
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
const Div = styled.div`
	background-color: white;
	position: absolute;
	height: 100%;
	width: 100%;
	clip-path: polygon(49% 10%, 100% 0, 100% 100%, 0 100%, 0 0);
`;
function Img() {
	return <FaVolleyballBall size="50px" color="var(--secondary)" />;
}
function Img2() {
	return <FaBuilding size="50px" color="var(--secondary)" />;
}
function Img3() {
	return <FaMoneyBill size="50px" color="var(--secondary)" />;
}

// eslint-disable-next-line import/no-default-export
export default function Cards(): JSX.Element {
	return (
		<Container>
			<Div />
			<Card
				Image={Img}
				link="/link"
				title="Volleyball"
				description="Here at Valley Construction Supply we believe that the construction industry is a relationship business and that our customers deserve personalized, hands-on customer service that serves them beyond their construction material needs"
			/>
			<Card
				Image={Img2}
				link="/link"
				title="Large facility"
				description="With our modern 17,000 square foot facility, we can provide any athlete an enriching volleyball experience"
			/>
			<Card
				Image={Img3}
				link="/link"
				title="Complete Inventory"
				description="We have everything any athlete will ever need. Slip resitent flooring, Netting between courts to preventing intruptions and office area for any administrative realated needs"
			/>
		</Container>
	);
}
