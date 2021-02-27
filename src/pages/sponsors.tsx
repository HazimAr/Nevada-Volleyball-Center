import { Span, StyledButton } from "@styles/index.theme";
import Image from "next/image";
import Link from "next/link";
import { FaAtlassian } from "react-icons/fa";
import styled from "styled-components";
import "../styles/sponsors.module.css";

const images = ["logo.png", "logo.png", "logo.png"];

const StyledContent = styled.article`
	text-align: left;
	width: 90%;
	margin: 100px auto;
	max-width: 700px;
	h2 {
		font-weight: 400;
	}
	h1 {
		font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
			"Lucida Sans", Arial, sans-serif;
	}
`;
const ImageContainer = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	max-width: 1200px;
	margin: 50px auto;
`;
const StyledDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	max-width: 1200px;
	margin: auto;
	div {
		margin: 20px;
		width: 300px;
		h2 {
			font-weight: 400;
			/* font-family: "Nuto", sans-serif; */
		}
	}
`;
// eslint-disable-next-line import/no-default-export
export default function Sponsors(): JSX.Element {
	return (
		<main>
			<StyledContent>
				<h1>
					<Span>We love our sponsors</Span>
				</h1>
				<p>
					To learn about Nevada Volleyball Center partnerships
					opportunities, please send your inquiry to
					nevadavolleyballcenter@gmail.com.
					<br />
					The company we keep matters. This is why we have some of the
					best and brightest athletes and partners in all of sports.
					No partnership is too small for the goodness that comes from
					co-creation so we look forward to speaking more about
					developing something together. Please drop us a note below
					with any details that will help us understand your
					interests. Thank you!
				</p>
				<Link href="/contact">
					<a>
						<StyledButton style={{ fontSize: "18px" }}>
							Become a Sponsor
						</StyledButton>
					</a>
			</Link>
			</StyledContent>
			<StyledDiv>
				<div>
					<FaAtlassian size="40px" color="var(--secondary)" />
					<h2>3 courts</h2>
				</div>
				<div>
					<FaAtlassian size="40px" color="var(--secondary)" />
					<h2>6,782sqft</h2>
				</div>
				<div>
					<FaAtlassian size="40px" color="var(--secondary)" />
					<h2>222 feet high ceilings</h2>
				</div>
			</StyledDiv>
			<StyledDiv>
				<div>
					<FaAtlassian size="40px" color="var(--secondary)" />
					<h2>100+ foot count</h2>
				</div>
				<div>
					<FaAtlassian size="40px" color="var(--secondary)" />
					<h2>2 bathrooms</h2>
				</div>
				<div>
					<FaAtlassian size="40px" color="var(--secondary)" />
					<h2>Modern Administrative office area</h2>
				</div>
			</StyledDiv>
			<h1>We thank our sponsors</h1>
			<ImageContainer>
				{images.map((src) => (
					<Image
						key={src}
						src={`/sponsors/${src}`}
						height={250}
						width={250}
						alt=""
					/>
				))}
			</ImageContainer>
			<Link href="/contact">
				<a>
					<StyledButton style={{ marginBottom: "100px" }}>
						Become a Sponsor
					</StyledButton>
				</a>
			</Link>
		</main>
	);
}
