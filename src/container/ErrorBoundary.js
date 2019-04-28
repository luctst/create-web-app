import React from "react";
import styled from "styled-components";
import Container from "../styles/layout/Container";

/**
 * Styled-components
 */
const Header = styled(Container)`
	display: flex;
	justify-content: space-between;
	align-items: center;

	span:hover {
		cursor: pointer;
	}
`;
const Main = styled(Container)`
	details {
		margin-top: 5%;
	}

	details > div {
		border-radius: 5px;
		padding: 10px 20px;
		background-color: #EEE;
	}
`;

/**
 * Render the error with good UI interface.
 */
class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false,
			error: null
		};
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidCatch(error, info) {
		this.setState({
			hasError: true,
			error: error
		})
	}

	handleClick() {
		this.setState({hasError: false});
	}

	render() {
		if (this.state.hasError) {
			const firstParsing = this.state.error.stack.split("(webpack:///./");
			const secondParsing = firstParsing[1].split("?");
			return (
				<>
					<Header as="header">
						<h1>Error: {this.state.error.message}</h1>
						<span onClick={this.handleClick}>X</span>
					</Header>
					<Main as="main">
						<p>The error happen in the <code>{secondParsing[0]}</code> file.</p>
						<p>At the line <code>{secondParsing[1].split(":")[1]}</code>.</p>
						<details>
							<div>
								<code>{this.state.error.stack}</code>
							</div>
						</details>
					</Main>
				</>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
