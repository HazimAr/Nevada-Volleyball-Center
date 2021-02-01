import styled from "styled-components";

import { COMPANY_NAME, COMPANY_EMAIL } from "../config";

const Footer = styled.footer`
	background-color: var(--secondary);
	color: var(--text-light);
`;
const FooterInside = styled.div`
	width: 90%;
	max-width: 1200px;
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
	padding: 20px 0;
	color: var(--text-light);
	font-size: 20px;
	background-color: var(--secondary);
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
const StyledLink = styled.a`
	padding: 20px;
	margin: 20px 0;
`;
const StyledList = styled.ul`
	max-width: 320px;
	text-align: left;
	& h2 {
		font-size: 24px;
	}
`;
// eslint-disable-next-line import/no-default-export
export default function footer(): JSX.Element {
	return (
		<>
			<Footer>
				<FooterInside>
					<StyledContact>
						<p>
							Here at Valley Construction Supply we believe that
							the construction industry is a relationship business
							and that our customers deserve personalized,
							hands-on customer service that serves them beyond
							their construction material needs.
						</p>
					</StyledContact>
					<StyledList>
						<li>
							<h2>Links</h2>
						</li>
						<li>Web Development</li>
						<li>Database Infrastructure</li>
						<li>SEO Services</li>
						<li>Graphic Design</li>
						<li>Hosting</li>
					</StyledList>
					<StyledContact>
						<h2>Contact Us</h2>
						<StyledLink href={`mailto:${COMPANY_EMAIL}`}>
							{" "}
							{COMPANY_EMAIL}
							<br />
						</StyledLink>
					</StyledContact>
				</FooterInside>
			</Footer>
			<StyledCopyright>
				Copyright © 2021 |{" "}
				<a href="https://webdefy.tech">{COMPANY_NAME}</a> | All Rights
				Reserved
				<br />
				Developed By <a href="https://webdefy.tech/">Webdefyer</a>
			</StyledCopyright>
		</>
	);
}
