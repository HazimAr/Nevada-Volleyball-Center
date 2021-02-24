/* eslint-disable sonarjs/no-duplicate-string */
import { Span, StyledButton } from "@styles/index.theme";
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
const Card = styled.div`
	text-align: left;
	max-width: 500px;
	width: 90%;
	margin: 20px;
	Image {
		background-color: #ffffff;
	}
`;
const TextDiv = styled.div`
	h1 {
		font-size: 40px;
		margin: 10px 0;
	}
	h2 {
		font-size: 30px;
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
				<h1>
					Find the plan that's <Span>right</Span> for you
				</h1>
				<PlanMain>
					{CardData?.map((data) => {
						return (
							<Card key={data.title}>
								<Image
									src={data.image}
									height={500}
									width={500}
									alt=""
								/>
								<TextDiv>
									<h1>
										<Span>{data.title}</Span> {data.title2}
									</h1>
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
