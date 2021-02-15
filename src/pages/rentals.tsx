import Image from "next/image";
import styled from "styled-components";


type CardDataType = {
	image: string,
	title: string,
	h3: string,
	h4: string,
	description:string,
}

const CardData: CardDataType[] = [
	{
		image: "/",
		title: "Growing Buisness",
		h3: "Starting at",
		h4: "Starting at",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, in nobis! Perspiciatis magnam quam, itaque odit doloribus optio natus sint iste maiores dolores tempore veritatis et nesciunt, aliquam minus vel."
	}
]

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
	margin: auto;
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


`

const PlanMain = styled.section`
	display:flex;
	flex-wrap:wrap;

`
// eslint-disable-next-line import/no-default-export
export default function Events(): JSX.Element {
	return (
		<main>
			<Content>
				<h1>Find the plan that's right for you</h1>
				<StyledButton>Get in Touch</StyledButton>
				<PlanMain>
					{CardData?.map(data => {
						return (
							<Card key={data.title}>
								<Image src={data.image} height={400} width={300} alt="" />

							</Card>
						)
					})}
				</PlanMain>
			</Content>
		</main>
	);
}
