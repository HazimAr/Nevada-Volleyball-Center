import { useState } from "react";
import styled from "styled-components";

const Container = styled.main`
	padding: 100px 0;
`;

const Form = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border:black;
    padding:20px;
	input,
	textarea {
		border: black solid 1px;
        padding:10px;
        margin:10px;
        border-radius: 5px;
        width:300px;
	}
`;

// eslint-disable-next-line import/no-default-export
export default function Contact(): JSX.Element {
	const [name, setname] = useState("");
	const [email, setemail] = useState("");
	const [phone, setphone] = useState("");
	const [subjecet, setsubjecet] = useState("");
	const [message, setmessage] = useState("");
	return (
		<Container>
			<h1>| Contact Nevada Volleyball Center</h1>

			<Form>
				<h2>Drop us A line</h2>
				<input
					placeholder="Your name"
					value={name}
					onChange={(e) => {
						setname(e.target.value);
					}}
					aria-label="Your Name"
					type="text"
				/>
				<input
					placeholder="Your Email"
					value={email}
					onChange={(e) => {
						setemail(e.target.value);
					}}
					aria-label="Email Address"
				/>
				<input
					placeholder="Your Phone"
					value={phone}
					onChange={(e) => {
						setphone(e.target.value);
					}}
					aria-label="Phone Number"
					type="Text"
				/>
				<input
					placeholder="Subject"
					value={subjecet}
					onChange={(e) => {
						setsubjecet(e.target.value);
					}}
					aria-label="Subject"
				/>
				<textarea
					placeholder="Message"
					value={message}
					onChange={(e) => {
						setmessage(e.target.value);
					}}
					aria-label="Message"
				/>
			</Form>
		</Container>
	);
}
