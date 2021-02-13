import fs from "fs";
import { GetStaticProps } from "next";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import path from "path";
import styled from "styled-components";

const Article = styled.article`
	text-align: left;
	width: 90%;
	max-width: 700px;
	margin: 100px auto;
	font-size: 21px;
	letter-spacing: -0.003em;
	line-height: 1.5;
	font-style: normal;
	word-break: break-word;
`;

// eslint-disable-next-line import/no-default-export
export default function Covid({ source }: never): JSX.Element {
	const content = hydrate(source);
	return (
		<main>
			<Article>{content}</Article>
		</main>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const source = String(
		fs.readFileSync(path.join(process.cwd(), "src/content/covid.mdx"))
	);
	const mdxSource = await renderToString(source);
	return {
		props: {
			source: mdxSource,
		},
	};
};
