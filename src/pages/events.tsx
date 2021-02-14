import Image from "next/image";
import Link from "next/Link";
import styled from "styled-components";

import clinicData from "../content/clinics.json";
import openGymData from "../content/openGyms.json";
import tourneyData from "../content/tournements.json";

const Content = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	section {
		margin: 20px 100px;
	}
`;

const Card = styled.div`
	max-width: 500px;
	width: 90%;
	margin: 20px;
	.inside {
		position: relative;
		h4 {
			position: absolute;
			bottom: 0;
			right: 10px;
		}
	}
`;
const Title = styled.h1`
	font-size: 50px;
`;
// eslint-disable-next-line import/no-default-export
export default function Events(): JSX.Element {
	return (
		<main>
			<Content>
				<section>
					<Title>Clinics</Title>
					{clinicData &&
						clinicData.map((data) => {
							return (
								<Card key={data.day}>
									<div className="inside">
										<Link href="/contact">
											<a>
												<Image
													src={data.image}
													width={300}
													height={300}
												/>
											</a>
										</Link>
									</div>
								</Card>
							);
						})}
				</section>
				<section>
					<Title>Tournaments</Title>
					{tourneyData &&
						tourneyData.map((data) => {
							return (
								<Card key={data.day}>
									<div className="inside">
										<Link href="/contact">
											<a>
												<Image
													src={data.image}
													width={300}
													height={300}
												/>
											</a>
										</Link>
									</div>
								</Card>
							);
						})}
				</section>
				<section>
					<Title>Open Gyms</Title>
					{openGymData &&
						openGymData.map((data) => {
							return (
								<Card key={data.day}>
									<div className="inside">
										<Link href="/contact">
											<a>
												<Image
													src={data.image}
													width={300}
													height={300}
												/>
											</a>
										</Link>
									</div>
								</Card>
							);
						})}
				</section>
			</Content>
		</main>
	);
}
