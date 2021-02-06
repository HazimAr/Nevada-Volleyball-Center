import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";

import IconMenu, { setHeader } from "./Menu";

const StyledHeader = styled.header`
	display: flex;
	width: 90%;
	padding: 10px 5%;
	z-index: 1000;
`;
const StyledDropHeader = styled(StyledHeader)`
	display: none;
	background-color: var(--primary);
	position: fixed;
	padding: 10px 5%;
	z-index: 20;
	box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.2);
`;
const StyledLinkContainer = styled.ul`
	display: flex;
	width: 60%;
	max-width: 700px;
	margin-left: auto;
	font-size: 25px;
	@media (max-width: 800px) {
		display: none;
	}
	@media (max-width: 1300px) {
		font-size: 20px;
	}
	@media (max-width: 1100px) {
		font-size: 15px;
	}
`;
const StyledLink = styled.li`
	margin: 10px auto;
	position: relative;
	transition: all ease-in-out 0.3s;
	&:hover {
		cursor: pointer;
		color: var(--highlight);
	}
	&::before {
		content: "";
		position: absolute;
		border-width: 1px;
		width: 0;
		left: 50%;
		transform: translateX(-50%);
		height: 2px;
		bottom: 1px;
		background-color: var(--highlight);
		visibility: hidden;
		transition: all 0.2s ease-in-out;
	}
	&:hover::before {
		visibility: visible;
		width: 100%;
	}
`;
const StyledImage = styled(Image)`
	&:hover {
		cursor: pointer;
	}
`;
const StyledMenuContainer = styled.div`
	display: none;
	height: 100vh;
	width: 60vw;
	position: fixed;
	right: -100vw;
	top: 0;
	z-index: 100;
	background-color: var(--secondary);
	@media (max-width: 800px) {
		display: block;
	}
`;
const DeselectMenu = styled.button`
	height: 100vh;
	left: -40vw;
	top: 0;
	width: 40vw;
	position: absolute;
`;
const StyledMenuList = styled.ul`
	display: flex;
	flex-direction: column;
	height: 60%;
	justify-content: center;
	& li {
		font-size: 20px;
		line-height: 18px;
		padding: 15px 0;
		text-align: left;
		margin: 0;
	}
`;

export function checkHeader(): void {
	const header: HTMLElement | null = document.querySelector("#drop-header");
	if (header === null) {
		return;
	}
	if (window.scrollY > 50) {
		header.style.animation = "headerComeIn 1s forwards";
		header.style.display = "flex";
	} else {
		header.style.animation = "headerComeOut 1s forwards";
	}
}
export const headerOptions = [
	["Home", "/#"],
	["Services", "/services"],
	["Portfolio", "/#portfolio"],
	["Pricing", "/#pricing"],
	["Contact", "/contact"],
];

type Color = {
	name: string;
	light: string;
	dark: string;
};

const colors: Color[] = [
	{ name: "secondary", light: "#f8f8f8", dark: "#202d3d" },
	{ name: "text", light: "#151515", dark: "#ffffff" },
	{ name: "gray", light: "#575757", dark: "#ffffff" },
	{ name: "accent", light: "#f8f9fd", dark: "#253648" },
	{ name: "primary", light: "#ffffff", dark: "#202d3d" },
];

// eslint-disable-next-line import/no-default-export
export default function Header(): JSX.Element {
	useEffect(() => {
		window.addEventListener("scroll", () => {
			checkHeader();
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	function HeaderContent(): JSX.Element {
		return (
			<>
				{/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
				<a href="/#" aria-label="Company Logo">
					<StyledImage
						height={50}
						width={150}
						src="/Images/LogoDark.png"
						alt="Company Logo"
					/>
				</a>
				<StyledLinkContainer>
					{headerOptions.map((temp, i) => (
						<StyledLink id={`head-${i}`} key={temp[1]}>
							<a href={temp[1]}>{temp[0]}</a>
						</StyledLink>
					))}
				</StyledLinkContainer>
				<IconMenu />
			</>
		);
	}

	return (
		<>
			<StyledMenuContainer
				aria-label="Dropdown Mobile Menu"
				id="drop-menu"
			>
				<DeselectMenu
					aria-label="Deselect Menu"
					onClick={() => {
						setHeader(false);
					}}
				/>
				<StyledMenuList>
					{headerOptions.map((temp) => (
						<StyledLink key={`menu-${temp[0]}`}>
							<a
								onClick={() => {
									setHeader(false);
								}}
								href={temp[1]}
							>
								{temp[0]}
							</a>
						</StyledLink>
					))}
				</StyledMenuList>
			</StyledMenuContainer>
			<StyledHeader>
				<HeaderContent />
			</StyledHeader>
			<StyledDropHeader id="drop-header">
				<HeaderContent />
			</StyledDropHeader>
		</>
	);
}
