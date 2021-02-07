import { Span } from "@styles/index.theme";
import { FaFacebook, FaHeart, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

import { COMPANY_INFO, COMPANY_SOCIALS } from "../config";
import { headerOptions } from "@components/header";

const Footer = styled.footer`
	background-color: #262f3a;
	color: rgba(223, 223, 223, 0.712); ;
`;
const FooterInside = styled.div`
	width: 90%;
	max-width: 1000px;
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
	border-top: #2c4258 solid 0.5px;
	font-size: 14px;
	padding: 20px 5%;
	box-sizing: border-box;
	font-size: 20px;
	text-align: left;
	background-color: #262f3a;
	color: rgba(223, 223, 223, 0.712);
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
	p {
		color: inherit;
	}
`;
const StyledList = styled.ul`
	max-width: 300px;
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
const StyledSocials = styled.div`
	display: flex;
	width: 120px;
	justify-content: space-evenly;
	a svg {
		color: var(--highlight);
	}
	a:hover {
		svg {
			color: var(--hover);
		}
	}
`;
const size = "30px";
// eslint-disable-next-line import/no-default-export
export default function footer(): JSX.Element {
	return (
		<>
			<Footer>
				<FooterInside>
					<StyledContact>
						<h1>{COMPANY_INFO.name}</h1>
						<p>
							Valley Construction Supply continually offers
							promotions. Check out our promotions page for our
							current specials
						</p>
						<StyledSocials>
							<a
								href={COMPANY_SOCIALS.linkedin}
								target="_blank"
								rel="noreferrer"
							>
								<FaLinkedin size={size} />
							</a>
							<a
								href={COMPANY_SOCIALS.facebook}
								target="_blank"
								rel="noreferrer"
							>
								<FaFacebook size={size} />
							</a>
							<a
								href={COMPANY_SOCIALS.instagram}
								target="_blank"
								rel="noreferrer"
							>
								<FaInstagram size={size} />
							</a>
						</StyledSocials>
					</StyledContact>
					<StyledList>
						<li>
							<h2>Quick Links</h2>
						</li>
						{headerOptions.map((data) => (
							<a href={data[1]} key={data[0]}>
								<li>
									<Arrow />
									{data[0]}
								</li>
							</a>
						))}
					</StyledList>
					<StyledList>
						<li>
							<h2>Contact </h2>
						</li>
						<a
							href={`mailto:${COMPANY_INFO.email}`}
							target="_blank"
							rel="noreferrer"
						>
							<li>
								<Arrow />
								{COMPANY_INFO.email}
							</li>
						</a>
						<a
							href={`tel:+1${COMPANY_INFO.phone}`}
							target="_blank"
							rel="noreferrer"
						>
							<li>
								<Arrow />
								{COMPANY_INFO.phone}
							</li>
						</a>
						<a
							href="https://www.google.com/maps/place/3778+W+Cheyenne+Ave+STE+120,+North+Las+Vegas,+NV+89032/"
							target="_blank"
							rel="noreferrer"
						>
							<li>
								<Arrow />
								{COMPANY_INFO.address1}
								<br />
								<Arrow />
								{COMPANY_INFO.address2}
							</li>
						</a>
					</StyledList>
				</FooterInside>
			</Footer>
			<StyledCopyright>
				Copyright © 2021{" "}
				<a href="https://webdefyer.com">
					Designed with <FaHeart color="red" /> by
					<Span> Webdefyer</Span>
				</a>{" "}
			</StyledCopyright>
		</>
	);
}
