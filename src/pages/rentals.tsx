import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import styled from "styled-components";

const Content = styled.section`
    text-align:left;
    width:90%;
    max-width: 700px;
    margin:100px auto;
    h1 {
        font-size: 50px;
    }
`;

const StyledButton = styled.button`
	font-size: 25px;
	background-color: var(--secondary);
	color: white;
	padding: 10px 40px;
	border-radius: 60px;
	display: flex;
	align-items: center;
	margin: auto;
	transition: background-color 0.3s ease;
	svg {
		padding-left: 10px;
		transition: transform 0.3s ease;
	}
	:hover {
		background-color: #af302e;
		cursor: pointer;
		svg {
			transform: translateX(10px);
		}
	}
`;

// eslint-disable-next-line import/no-default-export
export default function Events(): JSX.Element {
	return (
		<main>
            <Content>
                <h2>Covid-19 Disclaimer</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat natus, quos accusantium dolorum, veritatis veniam ipsum incidunt esse facilis mollitia eum beatae perspiciatis earum dolor sequi dolore doloribus minima vel.</p>
                <h1>Court Rentals</h1>
                <p>Loram insome dolor sit amet consectetur, adipisicing elit. Reiciendis ipsum quasi eveniet reprehenderit, architecto quas quo. Laboriosam officiis quo quisquam! Amet repellat et ratione saepe laborum necessitatibus molestiae praesentium quos?</p>
                <h2>Pricing</h2>
                <p>$50 for 12 months <br /> $55 for 6 months <br /> $60 for under 6months</p>
                <p>Loram insom dolor sit amet consectetur, adipisicing elit. Reiciendis ipsum quasi eveniet reprehenderit, architecto quas quo. Laboriosam officiis quo quisquam! Amet repellat et ratione saepe laborum necessitatibus molestiae praesentium quos?</p>
                <Link href='/contact'>
                    <a>
                        <StyledButton>
					        Get In Touch
					        <FaArrowRight />
				        </StyledButton>
                    </a>
                </Link>
			</Content>
		</main>
	);
}
