import Image from "next/image";
import Link from "next/link";
import { FaAccessibleIcon, FaCheckCircle, FaWrench, FaYoast } from "react-icons/fa";
import styled from "styled-components";

import { Button } from "./cards";

const Section = styled.section`
	box-sizing: border-box;
	padding-bottom: 50px;
	display: flex;
	flex-direction: column;
	justify-content: center;
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
		text-align: right;
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
	}
    p {
        font-size: 20px;
    }
`;
const CardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	text-align: left;
	max-width: 1200px;
	margin: auto;
`;

function Img() {
	return <FaWrench color="var(--secondary)" size="40px" className="card-img" />;
}
function Img2() {
	return <FaAccessibleIcon color="var(--secondary)" size="40px" className="card-img" />;
}
function Img3() {
	return <FaCheckCircle color="var(--secondary)" size="40px" className="card-img" />;
}
function Img4() {
	return <FaYoast color="var(--secondary)" size="40px" className="card-img" />;
}

function Card(props: {
	// eslint-disable-next-line react/no-unused-prop-types
	image: Function;
	title: string;
	text: string;
	link: string;
}) {
	return (
		<StyledCard>
			<props.image />
			<h2>{props.title}</h2>
			<p>{props.text}</p>
			<Link href={props.link}>
				<Button>Learn more {"=>"}</Button>
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
					<h1>FOR HAZIMOS!</h1>
					<p>
						Here at Valley Construction Supply we believe that the
						construction industry is a relationship business and
						that our customers deserve personalized, hands-on
						customer service that serves them beyond their
						construction material needs
					</p>
				</StyledTextDiv>
				<Image src="/logo.png" height={400} width={400} />
			</div>
			<CardContainer>
				<Card
					link="/"
					image={Img}
					title="for hazimos"
					text="Valley Construction Supply continually offers promotions. Check out our promotions page for our current specials"
				/>
				<Card
					link="/"
					image={Img2}
					title="for hazimos"
					text="Valley Construction Supply continually offers promotions. Check out our promotions page for our current specials"
				/>
				<Card
					link="/"
					image={Img3}
					title="for hazimos"
					text="Valley Construction Supply continually offers promotions. Check out our promotions page for our current specials"
				/>
				<Card
					link="/"
					image={Img4}
					title="for hazimos"
					text="Valley Construction Supply continually offers promotions. Check out our promotions page for our current specials"
				/>
			</CardContainer>
		</Section>
	);
}
