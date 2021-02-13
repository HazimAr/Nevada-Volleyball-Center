import Image from "next/image";
import styled from "styled-components";

import jsonData from '../content/events.json'

const Content = styled.section`
	display:flex;
	flex-wrap:wrap;
	justify-content:center;
	align-items:center;
`

const Card = styled.div`
	max-width: 300px;
	width:90%;
	margin:20px;
	.inside {
		position:relative;
		border:rgba(0, 0, 0, 0.13) 1px solid;
		h4 {
			position: absolute;
			bottom:0;
			right:10px;
			
		}
	}
`
const Text = styled.div`
	text-align:left;
	box-sizing: border-box;
	padding: 5%;
`
// eslint-disable-next-line import/no-default-export
export default function Events(): JSX.Element {
	return <main>
		<Content>
			{jsonData && jsonData.map(data => {
				return (
					<Card key={data.day}>
						<h3>{data.day}</h3>
						<div className='inside'>
							<Image src={data.image} width={300} height={300} />
							<Text>
								<h2>{data.title}</h2>
								<p>{data.description}</p>
							</Text>
							<h4>{data.time}</h4>
						</div>
					</Card>
				)
			})}
		</Content>
	</main>;
}
