import Link from "next/link";
import styled from "styled-components";

const Header = styled.header`
	background-color: white;
	display: flex;
	justify-content: space-between;
	box-sizing: border-box;
	padding: 0 5%;
	align-items: center;
`;
const StyledUl = styled.ul`
	display: flex;
	@media (max-width: 800px) {
		display: none;
	}
`;
const StyledLink = styled.li`
	margin: 0 20px;
	font-size: 22px;
	text-transform: uppercase;
`;
type a = {
	title: string;
	link: string;
};

const headerStuff: a[] = [
	{ title: "Home", link: "/#" },
	{ title: "Something", link: "/#" },
	{ title: "HAZIMOS", link: "/#" },
	{ title: "Contact", link: "/#" },
];

// eslint-disable-next-line import/no-default-export
export default function Main(): JSX.Element {
	return (
		<Header>
			<h1>NVC</h1>
			<StyledUl>
				{headerStuff.map((data) => (
					<StyledLink key={data.title}>
						<Link href={data.link}>
							<a>{data.title}</a>
						</Link>
					</StyledLink>
				))}
			</StyledUl>
		</Header>
	);
}
