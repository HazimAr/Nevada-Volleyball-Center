/* eslint-disable sonarjs/no-duplicate-string */
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import CardData from "../content/rentals.json";

const Content = styled.section`
	margin: 100px auto;
	h1 {
		font-size: 50px;
	}
`;
const StyledButton = styled.button`
	font-size: 25px;
	background-color: var(--secondary);
	color: white;
	padding: 10px 40px;
	border-radius: 60px;
	display: flex;
	align-items: center;
	transition: background-color 0.3s ease;
	svg {
		padding-left: 10px;
		transition: transform 0.3s ease;
	}
	:hover {
		background-color: #af302e;
		cursor: pointer;
		svg {
			transform: translateX(10px);
		}
	}
`;
const Card = styled.div`
	text-align: left;
	max-width: 400px;
	width: 90%;
	margin: 20px;
`;
const TextDiv = styled.div`
	h1 {
		font-size: 30px;
		margin: 10px 0;
	}
	h2 {
		margin: 5px 0;
	}
	h3 {
		font-style: italic;
		margin: 0;
		font-weight: 300;
	}
`;
const PlanMain = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;
// eslint-disable-next-line import/no-default-export
export default function Events(): JSX.Element {
	return (
		<main>
			<Content>
				<h1>Find the plan that's right for you</h1>
				<PlanMain>
					{CardData?.map((data) => {
						return (
							<Card key={data.title}>
								<Image
									src={data.image}
									height={400}
									width={400}
									alt=""
								/>
								<TextDiv>
									<h1>{data.title}</h1>
									<h3>{data.h3}</h3>
									<h2>{data.h2}</h2>
									<p>{data.description}</p>
									<Link href="/contact">
										<a>
											<StyledButton
												style={{ fontSize: "18px" }}
											>
												Get in Touch
											</StyledButton>
										</a>
									</Link>
								</TextDiv>
							</Card>
						);
					})}
				</PlanMain>
			</Content>
		</main>
	);
}
