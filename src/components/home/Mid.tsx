import { Span } from "@styles/index.theme";
import Image from "next/image";
import { BiHappyBeaming, BiRun } from "react-icons/bi";
import styled from "styled-components";
import {GiRunningShoe} from "react-icons/gi";

const Container = styled.section`
	background-color: white;
	padding: 80px 0;
	text-align: left;
	position: relative;
	h1 {
		font-size: 50px;
		max-width: 600px;
		margin: 0;
	}
	p {
		margin: 0;
	}
`;
const Text = styled.div`
	box-sizing: border-box;
	max-width: 600px;
	text-align: center;
	margin: auto;
	h1 {
		font-weight: 400;
		font-size: 42px;
		margin: 20px auto;
	}
`;
const Flex = styled.div`
	background-color: var(--secondary);
	margin: 60px 0;
	padding: 20px 0;
	padding-bottom: 80px;
	.upto {
		transform: translateY(-60px);
		max-width: 1200px;
		margin: auto;
		display: flex;
		flex-wrap: wrap;
		height: fit-content;
		justify-content: space-evenly;
	}
`;

const Card = styled.div`
	width: 300px;
	height: 100%;
	background-color: white;
	box-shadow: 0 0 10px #5e5e5e;
	border-radius: 2px;
	padding: 30px;
	color: #505050;
	line-height: 170%;
`;
const NumDivDiv = styled.div`
	max-width: 1000px;
	margin: auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	color: white;
	@media (max-width:700px) {
		justify-content:center;
		align-items:center;
		flex-direction:column;
	}
`;
const NumDiv = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	margin: 20px 40px;
	margin-left:50px;
	h3,
	h4 {
		margin: 5px 0;
		font-weight: 400;
	}
	h3 {
		font-size: 43px;
		font-weight: 700;
	}
	svg {
		position: absolute;
		left: -60px;
	}
`;
// eslint-disable-next-line react/no-unused-prop-types
function CardThing(Props: { Image: Function; title: string; text: string }) {
	return (
		<NumDiv>
			<Props.Image />
			<h3>{Props.title}</h3>
			<h4>{Props.text}</h4>
		</NumDiv>
	);
}
function img1() {
	return <BiHappyBeaming size="40px" />;
}

function img2() {
	return <BiRun size="40px" />;
}

function img3() {
	return <GiRunningShoe size="40px" />;
}
// eslint-disable-next-line import/no-default-export
export default function Section(): JSX.Element {
	return (
		<Container>
			<Text>
				<h1>
					About <Span>Nevada Volleyball Center</Span>
				</h1>
				<p>
					Established in 2020, Nevada Volleyball Center is a state of
					the art training facility that has been honed to perfection
					over the last 3 years.
				</p>
			</Text>
			<div>
				<Flex>
					<div className="upto">
						<Image
							src="/Images/IMG_7250.png"
							width={500}
							height={350}
						/>
						<Card>
							<h2>Committed to superior quality and results</h2>
							<p>
								Nevada Volleyball Center is family owned and
								operated for 3+ years and we have been working
								hard to ensure we provide every athlete with
								remarkable service and prodigious volleyball
							</p>
							<a>Learn more</a>
						</Card>
					</div>
					<NumDivDiv>
						<CardThing
							title="500+"
							text="Satisfied indviduals"
							Image={img1}
						/>
						<CardThing
							title="17K+"
							text="Square feet of gym space"
							Image={img2}
						/>
						<CardThing
							title="3+"
							text="Slip Resistent Courts"
							Image={img3}
						/>
					</NumDivDiv>
				</Flex>
			</div>
		</Container>
	);
}
