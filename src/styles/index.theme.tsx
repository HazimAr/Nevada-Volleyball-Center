import styled from "styled-components";

const StyledButton = styled.button`
	background-color: var(--highlight);
	color: white;
	font-size: 20px;
	width: fit-content;
	padding: 10px 40px;
	font-weight: 500;
	transition: all ease-in-out 0.4s;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	border-radius: 30px;
	&:hover {
		cursor: pointer;
		background-color: var(--hover);
	}
`;
const Span = styled.span`
	color: var(--secondary);
`;
export { StyledButton, Span };
