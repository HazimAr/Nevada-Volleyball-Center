import { Span, StyledButton } from "@styles/index.theme";
import fs from "fs";
import { GetStaticProps } from "next";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import styled from "styled-components";
import '../styles/sponsors.module.css'
import Carousel from '@components/sponsors/carousel'
const images = ["logo.png", "logo.png", "logo.png"];

const StyledContent = styled.article`
	text-align: left;
	width: 90%;
	margin: 100px auto;
	max-width: 700px;
	h2 {
		font-weight: 400;
	}
`;
const ImageContainer = styled.section`
	display:flex;
	flex-wrap:wrap;
	justify-content:center;
	max-width:1200px;
	margin:50px auto;


`

// eslint-disable-next-line import/no-default-export
export default function Sponsors({ source }: never): JSX.Element {
	const content = hydrate(source);
	return (
		<main>
			<StyledContent>
				<h1><Span>We ___ our sponsors</Span></h1>
				{content}
			</StyledContent>
			<h1 style={{ color: "var(--secondary)" }}>We thank our sponsors</h1>
			<ImageContainer>
				{images.map((src) => {
					return (
						<Image
							key={src}
							src={`/sponsors/${src}`}
							height={400}
							width={400}
							alt=""
						/>
					);
				})}
			</ImageContainer>
			<Carousel />
			<Link href='/contact'>
				<a>
					<StyledButton style={{marginBottom:'100px'}}>Become a Sponsor</StyledButton>
				</a>
			</Link>

		</main>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const source = String(
		fs.readFileSync(path.join(process.cwd(), "src/content/sponsors.mdx"))
	);
	const mdxSource = await renderToString(source);
	return {
		props: {
			source: mdxSource,
		},
	};
};
