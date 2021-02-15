import { Span } from "@styles/index.theme";
import { COMPANY_INFO } from "config";
import Image from "next/image";
import Link from "next/link";
import { FaAccessibleIcon, FaCheckCircle, FaWrench } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

import { Button } from "./IntroCards";

const Section = styled.section`
	box-sizing: border-box;
	padding-bottom: 50px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	z-index: 2000;
	background-color: white;
	& div {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
`;

const StyledTextDiv = styled.div`
	max-width: 400px;
	margin: 20px;
	display: flex;
	flex-direction: column;
	text-align: left;
	h1 {
		font-size: 40px;
		margin: 0;
	}
	p {
		font-size: 20px;
	}
`;

const StyledCard = styled.div`
	width: 90%;
	max-width: 450px;
	width: 90%;
	box-sizing: border-box;
	padding-left: 70px;
	margin: 40px 20px;
	display: flex;
	flex-direction: column;
	position: relative;
	.card-img {
		position: absolute;
		left: 0;
		top: 0;
	}
	h2 {
		text-transform: uppercase;
		margin-bottom: 0;
		font-weight: 600;
	}
	p {
		font-size: 20px;
	}
	button svg {
		margin-left: 10px;
		transition: transform ease-in-out 0.3s;
	}
	button:hover svg {
		transform: translateX(7px);
	}
`;
const CardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	text-align: left;
	max-width: 1500px;
	margin: auto;
`;

function Img() {
	return (
		<FaWrench color="var(--secondary)" size="40px" className="card-img" />
	);
}
function Img2() {
	return (
		<FaAccessibleIcon
			color="var(--secondary)"
			size="40px"
			className="card-img"
		/>
	);
}
function Img3() {
	return (
		<FaCheckCircle
			color="var(--secondary)"
			size="40px"
			className="card-img"
		/>
	);
}

function Card(Props: {
	Image: Function;
	title: string;
	text: string;
	link: string;
}) {
	return (
		<StyledCard>
			<Props.Image />
			<h2>{Props.title}</h2>
			<p>{Props.text}</p>
			<Link href={Props.link}>
				<Button aria-label={`${Props.title} Article`}>
					Learn more <IoIosArrowForward />
				</Button>
			</Link>
		</StyledCard>
	);
}

// eslint-disable-next-line import/no-default-export
export default function Promise(): JSX.Element {
	return (
		<Section>
			<div>
				<StyledTextDiv>
					<h1>
						<Span>{COMPANY_INFO.name}</Span>
					</h1>
					<p>
						Here at Nevada Volleyball Center we believe that the
						volleyball industry is a relationship between the athletes and the court
						our customers deserve personalized, hands-on customer
						service that serves them beyond their volleyball needs
					</p>
				</StyledTextDiv>
				<Image
					alt=""
					src="/Images/IMG_7230.png"
					height={288}
					width={384}
				/>
			</div>
			<CardContainer>
				<Card
					link="/"
					Image={Img}
					title="Court Rentals"
					text="We are renting out all 3 of our courts starting as $50/hour"
				/>
				<Card
					link="/"
					Image={Img2}
					title="Events"
					text="Every week we host Events ranging from Open Gyms, Clinics, and tournements"
				/>
				<Card
					link="/"
					Image={Img3}
					title="Covid-19"
					text="Health and saftey is our number 1 priotity, good spell, so we take precautions and follow regulations to ensure all our staff, athletes and spectators are safe."
				/>
			</CardContainer>
		</Section>
	);
}
