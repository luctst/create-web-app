import React from "react";
import styled from "styled-components";
import Container from "../styles/layout/Container";
import {backgroundCode} from "../styles/utils";

/**
 * Styled-components
 */
const H2 = styled.h2`
	font-size: 1em;
	margin-top: 0;
`;
const Code = styled.code`
	background-color: ${backgroundCode};
	border-radius: 3px;
	margin: 0;
	padding: .2em .4em;
`;

const Content = React.memo(() => {
	return (
		<Container as="main">
			<H2>Welcome on your App !! 👋 but what to do now ? </H2>
			<p>You can start by editing the <Code>src/view/app.js</Code> file to change your app 👨‍💻 .</p>
			<p>If you want more information's of how to use this app check this link 👉 <a href="https://github.com/luctst/create-web-app">README.md</a> 👈 .</p>
		</Container>
	)
});

export default Content;
