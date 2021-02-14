import styled from "styled-components";

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
	width: 90%;
	max-width: 1200px;
	box-sizing: border-box;
	padding-right: 30%;
	text-align: left;
	font-size: 20px;
	margin-bottom:100px;
	@media (max-width: 600px) {
		padding-right: unset;
		h1 {
			font-size: 45px;
		}
	}
	p {
		color: inherit;
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
							Nevada <br />
							Volleyball <br />
							Center <br />
						</StyledH1>
						<p>
							Nevada Volleyball Center is a state of the art
							facility, with training equipment fit for any
							athletes needs. Blah blah blah blah blah blah blah
							blah blah blah blah blah blah
						</p>
					</StyledText>
				</Inside>
			</Container>
		</>
	);
}
