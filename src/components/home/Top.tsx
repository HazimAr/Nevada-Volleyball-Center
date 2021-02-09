import styled from "styled-components";

import { COMPANY_INFO } from "../../config";

const Container = styled.section`
	min-height: 600px;
	height: 50vh;
	color: var(--text-light);
`;
const StyledImage = styled.img`
	z-index: -1;
	width: 100%;
	min-width: 800px;
	position: fixed;
	left: 0;
	top: 0;
`;
const Inside = styled.div`
	display: flex;
	width: 100%;
	max-width: 1000px;
	height: 100%;
	margin: auto;
	justify-content: space-between;
	align-items: center;
	@media (max-width: 1100px) {
		justify-content: center;
		flex-wrap: wrap-reverse;
	}
`;
const StyledText = styled.div`
	width:90%;
	max-width: 1200px;
	box-sizing: border-box;
	padding-right: 30%;
	text-align: left;
	font-size: 20px;
	@media (max-width:600px){
		padding-right: unset;
		h1 {
			font-size: 45px;
		}
	}
	p {
		color:inherit;
	}
`;
const StyledH1 = styled.h1`
	font-size: 60px;
	color: var(--gray);
	font-weight: 750;
	margin-bottom: 20px;
`;
// eslint-disable-next-line import/no-default-export
export default function Intro(): JSX.Element {
	return (
		<>
			<StyledImage src="/Images/IMG_7244.png" alt="" />
			<Container>
				<Inside>
					<StyledText id="intro__text">
						<StyledH1>
							{COMPANY_INFO.name} <br />
						</StyledH1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, harum in aut quae laboriosam est sunt officiis beatae a aperiam optio et iusto excepturi minima obcaecati expedita facilis odit tempora.
						</p>
					</StyledText>
				</Inside>
			</Container>
		</>
	);
}
