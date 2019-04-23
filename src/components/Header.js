import React from "react";
import img from "../assets/img/react-icon.png";
import styled, {keyframes} from "styled-components";
import {backgroundHeader} from "../styles/utils";

const spin = keyframes`
	100% {
        transform: rotate(360deg);
    }
`;
const MainHeader = styled.header`
	background: ${backgroundHeader};
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
	flex-direction: column;
		img {
			width: 15%;
			height: auto;
			animation: ${spin} 3s linear infinite;
		}
		h1 {
			text-align: center;
    		color: #fff;
    		font-size: 1.7em;
		}
`;

const Header = React.memo(() => {
	return (
		<MainHeader>
			<img src={img}/>
			<h1>Create Web App</h1>
		</MainHeader>
	);
})

export default Header;
