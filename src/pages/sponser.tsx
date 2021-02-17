import Image from "next/image"
import styled from "styled-components";


const StyledImage = styled(Image)`
	text-align:left;
`
// eslint-disable-next-line import/no-default-export
export default function sponser(): JSX.Element {
	return (
		<main>
            i have no idea what im doing (:
            <StyledImage width={500} height={500} src="/logo" />
		</main>
	);
}
