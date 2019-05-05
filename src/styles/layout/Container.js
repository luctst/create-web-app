import styled from "styled-components";

const Container = styled.div.attrs({
	dataTest: "test"
})`
	@media(min-width: 1000px) {
		max-width: 950px;
	}

	@media(min-width: 1400px) {
		max-width: 1200px;
	}

	margin: 0 auto;
	margin-top: 5%;
`;

export default Container;
