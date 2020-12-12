import React from "react";

import styled from "styled-components";

const GlowWapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	animation: loading 1s infinite;

	@keyframes loading {
		0% {
			transform: translateX(-150%);
		}
		50% {
			transform: translateX(-60%);
		}
		100% {
			transform: translateX(150%);
		}
	}

	.shimmer {
		width: 50%;
		height: 100%;
		background-color: rgba(255, 255, 255, 0.2);
		transform: skewX(-20deg);
		box-shadow: 0 0 30px 30px rgba(255, 255, 255, 0.05);
	}
`;

const Glow = () => {
	return (
		<GlowWapper>
			<div className="shimmer"></div>
		</GlowWapper>
	);
};

export default Glow;
