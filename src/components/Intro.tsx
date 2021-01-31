import styled from "styled-components"

const Section = styled.section`
    padding: 200px;
    background-color:var(--primary);
    color:white;
`
const StyledTitle = styled.h1`
    font-size: 60px;
    width: 300px;
`

// eslint-disable-next-line import/no-default-export
export default function IntroBitch(): JSX.Element
{
    return <Section>
        <div>
            <StyledTitle>WordPress Unleashed</StyledTitle>
        </div>
    </Section>;
}