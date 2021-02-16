import Image from "next/image"
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
export default function sponser(): JSX.Element {
	return (
		<main>
            i have no idea what im doing (:
            <Image width={500} height={500} src="/logo" />
		</main>
	);
}
