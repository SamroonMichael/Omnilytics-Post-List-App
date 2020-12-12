import React from "react";

import styled from "styled-components";

const FooterWapper = styled.footer`
	display: grid;
	grid-template-columns: 6fr 6fr;
	gap: 30px;
	background: #03021a;
	padding: 2% 0;
	position: absolute;
	bottom: 0;
	width: 100%;
	color: #fff;
	margin-top: 2rem;
	text-align: center;

	@media only screen and (max-width: 640px) {
		font-size: 10pt;
	}
`;

const Footer = () => {
	return (
		<FooterWapper>
			<div>
				<a href="https://www.linkedin.com/in/samroonmichael/">
					Project Done By Samroom Michael
				</a>
			</div>
			<div>
				<a href="https://omnilytics.co/">For Omnilytics</a>
			</div>
		</FooterWapper>
	);
};

export default Footer;
