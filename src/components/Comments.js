import React from "react";
import Avatar from "react-avatar";

import styled from "styled-components";

const CommentsWapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 6fr;
	gap: 5px;
	align-items: center;
	background-color: #eef0f8;
	margin: 1rem 0;
	padding: 1rem;
	border-radius: 10px;

	.comment-content {
		font-style: italic;
		font-size: 11pt;
		span {
			font-size: 9.5pt;
			font-weight: 900;
			text-decoration: underline;
			text-transform: uppercase;
			margin-bottom: 10px;
		}
		p {
			margin-top: 5px;
		}
	}
`;

const Comments = ({ comments }) => {
	return (
		<div>
			{comments.map((comment, i) => (
				<div key={comment.id}>
					<CommentsWapper>
						<Avatar facebookId="100008343750912" size="50" round={true} />
						<div className="comment-content">
							<span>{comment.name}</span>
							<p>{comment.body}</p>
						</div>
					</CommentsWapper>
				</div>
			))}
		</div>
	);
};

export default Comments;
