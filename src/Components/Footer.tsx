import { Span } from "@styles/index.theme";
import { IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

import { COMPANY_NAME } from "../config";
import { headerStuff } from "./Header";

const Footer = styled.footer`
	background-color: var(--secondary);
	color: rgba(255, 255, 255, 0.712); ;
`;
const FooterInside = styled.div`
	width: 90%;
	max-width: 800px;
	padding: 5% 0;
	margin: auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	@media (max-width: 700px) {
		justify-content: center;
	}
`;
const StyledCopyright = styled.p`
	margin: 0;
	font-size: 14px;
	padding: 20px 5%;
	box-sizing: border-box;
	font-size: 20px;
	text-align: left;
	background-color: var(--secondary);
	color: white;
	@media (max-width: 700px) {
		font-size: 16px;
	}
`;
const StyledContact = styled.div`
	max-width: 320px;
	text-align: left;
	& h2 {
		font-size: 24px;
		text-align: center;
	}
`;
const StyledList = styled.ul`
	max-width: 320px;
	text-align: left;
	h2 {
		font-size: 24px;
		color: white;
	}
	li {
		margin: 5px 0;
		div svg {
			transition: transform 0.3s ease;
		}
	}
	li:hover {
		color: #d3d3d3;
		cursor: pointer;
		div svg {
			transform: rotate(90deg);
		}
	}
`;

function Arrow() {
	return (
		<div style={{ marginRight: "5px", display: "inline" }}>
			<IoIosArrowForward />
		</div>
	);
}

// eslint-disable-next-line import/no-default-export
export default function footer(): JSX.Element {
	return (
		<>
			<Footer>
				<FooterInside>
					<StyledContact>
						<p>
							Valley Construction Supply continually offers
							promotions. Check out our promotions page for our
							current specials
						</p>
					</StyledContact>
					<StyledList>
						<li>
							<h2>Quick Links</h2>
						</li>
						{headerStuff.map((data) => (
							<a href={data.link} key={data.title}>
								<li>
									<Arrow />
									{data.title}
								</li>
							</a>
						))}
					</StyledList>
				</FooterInside>
			</Footer>
			<StyledCopyright>
				Copyright © 2021 |{" "}
				<a href="https://webdefy.tech">
					<Span>{COMPANY_NAME}</Span>
				</a>{" "}
				| All Rights Reserved
			</StyledCopyright>
		</>
	);
}
