import styled from "styled-components";

import { Button } from "./cards";

const Container = styled.section`
    color:black;
    z-index: 3000;
`;

// eslint-disable-next-line import/no-default-export
export default function Section(): JSX.Element {
	return (
		<Container>
			<h1>ABOUT VALLEY CONSTRUCTION SUPPLY</h1>
			<p>
				Next day delivery, quality products and superior customer
				service since 1982.
			</p>
			<div>
				<div>
					<div />
					<div>
                        <h2>Committed to superior quality and results</h2>
                        <p>
                            Valley Construction Supply is family owned and operated for
                            35+ years and we have been working hard to ensure we provide
                            every customer with remarkable service and up-to-date
                            product knowledge

                        </p>
                        <Button>
                            Learn more
                        </Button>
					</div>
				</div>
				<div />
			</div>
		</Container>
	);
}
