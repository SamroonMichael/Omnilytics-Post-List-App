import React from "react";
import Avatar from "react-avatar";

import styled from "styled-components";

const UserWapper = styled.div`
	text-align: center;
	color: #0d0551;
	.author-pic {
		position: relative;
		height: 25%;
		span {
			display: block;
			width: 100%;
			height: 300px;
			border-radius: 10px;
			margin-top: 10px;
			z-index: 0;
			background: rgba(40, 61, 255, 0.13);
			box-shadow: 0px 11px 25px 0px rgba(0, 0, 0, 0.15);
		}
		.avatar {
			position: absolute;
			left: 0;
			right: 0;
			top: -10px;
			margin: 0 auto;
			background: rgba(23, 14, 111, 0.5);
		}
	}

	.author-info {
		h3 {
			z-index: 1004;
			margin-bottom: 0.6rem;
		}
	}

	@media (min-width: 481px) and (max-width: 767px) {
		.author-pic {
			width: 70%;
			margin: 0 auto;
		}

		.author-info {
			position: relative;
			bottom: 30%;
		}
	}

	@media (min-width: 667px) and (max-width: 736px) {
		.author-pic {
			width: 100%;
			margin: 0 auto;
		}

		.author-info {
			position: relative;
			bottom: 8%;
		}
	}

	@media (min-width: 320px) and (max-width: 480px) {
		.author-pic {
			width: 70%;
			margin: 0 auto;

			span {
				height: 180px;
			}
			.avatar {
				width: 85px !important;
				height: 85px !important;
			}
		}

		.author-info {
			position: relative;
			bottom: 70px;
			h3 {
				font-size: 0.9rem;
			}
		}
	}
`;

const Users = ({ users, userId }) => {
	const id = users.map((user) => user.id);
	const names = users.map((user) => user.name);
	const email = users.map((user) => user.email);

	let userNames = [];
	let userEmail = [];

	for (let i = 0; i <= names.length; i++) {
		if (userId[i] === id[i]) {
			userNames.push(names[i]);
		}
	}

	for (let i = 0; i <= names.length; i++) {
		if (userId[i] === id[i]) {
			userEmail.push(email[i]);
		}
	}

	return (
		<>
			<UserWapper>
				<div className="author-pic">
					<span></span>
					<Avatar
						facebookId="100008343750912"
						size="150"
						round={true}
						className="avatar"
					/>
				</div>
				<div className="author-info">
					{userNames.map((name, i) => (
						<h3 key={i}>{name}</h3>
					))}
					{userEmail.map((email, i) => (
						<h3 key={i}>{email}</h3>
					))}
				</div>
			</UserWapper>
		</>
	);
};

export default Users;
