import React from "react";
import Logo from "../logo.svg";

import styled from "styled-components";

const HeaderWapper = styled.header`
	display: block;
	position: relative;
	width: 100%;
	height: 5rem;
	z-index: 1005;

	.navigation-floating {
		position: fixed;
		right: 0;
		left: 0;
		display: flex;
		align-items: center;
		box-shadow: 0 13px 39px 0 rgba(3, 2, 26, 0.1);
		border-radius: 10px;
		background: #ffffff;
		width: 100%;
		max-width: 1180px;
		margin: 0 auto;
		margin-top: 0.7rem;
		padding: 0.7rem;

		.logo_wapper {
			flex: 0.165;
		}

		h1 {
			font-size: 1.7rem;
			margin: 0 auto;
			margin-bottom: 8px;
			font-weight: 900;
			text-transform: uppercase;
		}
	}

	@media (min-width: 768px) and (max-width: 1024px) {
		.navigation-floating {
			width: 94%;

			.logo_wapper {
				flex: 0.29;
			}

			h1 {
				font-size: 1.9rem;
			}
		}
	}

	@media (min-width: 481px) and (max-width: 767px) {
		.navigation-floating {
			width: 94%;

			.logo_wapper {
				flex: 0.4;
			}

			h1 {
				font-size: 1.6rem;
			}
		}
	}

	@media (min-width: 320px) and (max-width: 480px) {
		.navigation-floating {
			width: 94%;
			.logo_wapper {
				flex: 0.55;
			}

			h1 {
				font-size: 13pt;
			}
		}
	}
`;

const Header = () => {
	return (
		<>
			<HeaderWapper>
				<div className="navigation-floating">
					<div className="logo_wapper">
						<img src={Logo} alt="Logo" />
					</div>
					<h1>Post List App</h1>
				</div>
			</HeaderWapper>
		</>
	);
};

export default Header;
