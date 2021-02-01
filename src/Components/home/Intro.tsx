import Image from "next/image";
import styled from "styled-components";

import { COMPANY_NAME } from "../../config";

const Container = styled.section`
	min-height: 600px;
	height: 50vh;
	background-color: var(--secondary);
	color: var(--text-light);
	position:relative;
	/* background-image: url("/Images/IMG_7257.png"); */
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
	max-width: 1200px;
	text-align: left;
	font-size: 20px;
`;
const StyledH1 = styled.h1`
	font-size: 60px;
	color: var(--gray);
	font-weight: 750;
	margin-bottom: 20px;
`;
const ImgDiv = styled.div`
	animation: 3s bounce infinite 0.8s linear both;
	@media (max-width: 1100px) {
		height: 400;
		width: 400;
	}
`;
const Dip = styled.div`
	height: 90px;
	width: 100%;
	background: #fff;
	clip-path: polygon(0 20%, 0 100%, 100% 100%, 100% 20%, 50% 100%);
	position: absolute;
	bottom: -2px;
`;

// eslint-disable-next-line import/no-default-export
export default function Intro(): JSX.Element {
	return (
		<Container>
			<Dip aria-hidden="true">
				<Image src="/" layout='fill' />
			</Dip>
			<Inside>
				<StyledText id="intro__text">
					<StyledH1>
						{COMPANY_NAME} <br />
					</StyledH1>
					<p>
						We provide 100% custom coded websites with superior
						search engine optimized results
					</p>
				</StyledText>
				<ImgDiv>
					<Image
						src="/pack/rk.svg"
						layout="intrinsic"
						height={500}
						width={500}
						id="intro__img"
						alt=""
					/>
				</ImgDiv>
			</Inside>
		</Container>
	);
}
