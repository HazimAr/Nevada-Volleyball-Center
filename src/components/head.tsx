import { useEffect, useState } from "react";
import styled from "styled-components";

import { COMPANY_INFO, headerOptions } from "../config";

const width = "40px";
const height = "4px";
const color = "var(--highlight)";
const StyledMenu = styled.div`
	width: ${width};
	height: ${height};
	background: ${color};
	border-radius: 5px;
	position: absolute;
	transition: all 0.5s ease-in-out;
	z-index: 100;
	&::before,
	&::after {
		z-index: 100;
		content: "";
		left: 0;
		position: absolute;
		width: ${width};
		height: ${height};
		background: ${color};
		border-radius: 5px;
		transition: all 0.5s ease-in-out;
		transform: translateY(-16px);
	}
	&::before {
		transform: translateY(-16px);
	}
	&::after {
		transform: translateY(16px);
	}
`;
const StyledBtn = styled.button`
	position: relative;
	top: 5px;
	right: 20px;
	height: 40px;
	width: 40px;
	display: none;
	margin-left: auto;
	&:hover {
		cursor: pointer;
	}
	@media (max-width: 800px) {
		display: block;
	}
`;
function setHeader(bool: boolean): void {
	const ele: HTMLElement | null = document.querySelector("#drop-menu");
	const menus: NodeListOf<Element> | null = document.querySelectorAll(
		".open"
	);
	const time = "0.3s";
	if (bool && ele !== null) {
		ele.style.animation = `dropin ${time} forwards`;
		ele.style.animation = `dropout ${time} forwards`;
		if (menus !== null) {
			// eslint-disable-next-line @typescript-eslint/prefer-for-of
			for (let i = 0; i < menus.length; i++) {
				menus[i].classList.remove("open");
			}
		}
	}
}
// eslint-disable-next-line import/no-default-export
function IconMenu(): JSX.Element {
	const [isAnimated, setIsAnimated] = useState(false);
	return (
		<StyledBtn
			className={isAnimated ? "open" : ""}
			onClick={() => {
				setIsAnimated(!isAnimated);
				setHeader(!isAnimated);
			}}
			aria-label="Menu Dropdown"
			type="button"
		>
			<StyledMenu />
		</StyledBtn>
	);
}

const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	width: 90%;
	padding: 0 5%;
	z-index: 2000;
	background-color: white;
`;
const StyledDropHeader = styled(StyledHeader)`
	background-color: white;
	position: fixed;
	top: -300px;
	z-index: 4000;
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
	margin: 8px auto;
	position: relative;
	&:hover {
		cursor: pointer;
		color: var(--secondary);
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
	} else {
		header.style.animation = "headerComeOut 1s forwards";
	}
}

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
					<h2>{COMPANY_INFO.name}</h2>
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
