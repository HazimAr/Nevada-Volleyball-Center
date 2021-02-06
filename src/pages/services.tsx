import { Span, StyledButton } from "@styles/index.theme";
import axios from "axios";
import { COMPANY_EMAIL } from "config";
import Image from "next/image";
import { useState } from "react";
import { FaMailBulk } from "react-icons/fa";
import styled from "styled-components";

const StyledOutside = styled.div`
	padding: 100px 0;
	background-color: white;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;
const Input = styled.input`
	box-sizing: border-box;
`;
const Textarea = styled.textarea`
	resize: vertical;
	min-height: 50px;
	max-height: 300px;
`;
const StyledForm = styled.form`
	width: 90%;
	max-width: 400px;
	display: flex;
	flex-direction: column;
	text-align: left;
	border-radius: 10px;
	input,
	textarea {
		background-color: var(--contact);
		color: white;
		padding: 13px;
		border-radius: 5px;
		font-family: Arial, Helvetica, sans-serif;
		margin: 20px 0;
	}
`;
const StyledTitle = styled.h2`
	font-size: 32px;
	font-weight: 500;
	font-family: var(--font-title);
`;
const StyledDivs = styled.div`
	padding-top: 50px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

// eslint-disable-next-line import/no-default-export
export default function Contact(): JSX.Element {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	function handleSubmit() {
		// eslint-disable-next-line no-void
		void axios.post("/api/email", {
			name,
			phone,
			email,
			subject,
			message,
		});
	}

	return (
		<StyledOutside id="contact">
			<StyledForm onSubmit={handleSubmit}>
				<StyledTitle>
					Tell Us About Your <Span>Project</Span>
				</StyledTitle>
				<Input
					aria-label="Name"
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
					type="text"
					placeholder="Name *"
				/>
				<Input
					aria-label="Phone Number"
					value={phone}
					onChange={(e) => {
						setPhone(e.target.value);
					}}
					type="tel"
					className="input"
					placeholder="Phone *"
				/>
				<Input
					aria-label="email"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
					type="email"
					placeholder="Email *"
				/>
				<Input
					aria-label="Subject"
					value={subject}
					onChange={(e) => {
						setSubject(e.target.value);
					}}
					type="text"
					placeholder="Subject *"
				/>
				<Textarea
					aria-label="Message"
					value={message}
					onChange={(e) => {
						setMessage(e.target.value);
					}}
					className="input"
					placeholder="Message *"
				/>
				<StyledButton aria-label="Submit">Submit</StyledButton>
			</StyledForm>
			<StyledDivs>
				<FaMailBulk color="var(--highlight)" size="70px" />
				<h3>{COMPANY_EMAIL}</h3>
				<FaMailBulk color="var(--highlight)" size="70px" />
				<h3>{COMPANY_EMAIL}</h3>
				<Image
					alt=""
					layout="intrinsic"
					src="/pack/contact.svg"
					width={600}
					height={500}
				/>
			</StyledDivs>
		</StyledOutside>
	);
}
