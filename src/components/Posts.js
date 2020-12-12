import React, { useState } from "react";
import Comments from "./Comments";
import Users from "./Users";
import SkeletonPost from "../Skeletons/SkeletonPost";

import styled from "styled-components";

const PostListWapper = styled.div`
	ul {
		li {
			border-bottom: 2px solid rgb(3, 2, 26);
			margin-top: 1.5rem;
			padding: 0.5rem;
		}
	}

	.post-title {
		padding: 0.5rem;
		text-transform: uppercase;
		line-height: 1.3;
		text-align: center;
		margin-bottom: 1.5rem;
	}

	/* Hide Moblie Comments */
	.comments-show-sm {
		display: none;
	}

	.post-content {
		padding: 0.5rem;
		line-height: 2;
		font-size: 13pt;
		margin-bottom: 2rem;
	}

	.post-footer {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: 100px;
	}

	@media (min-width: 481px) and (max-width: 767px) {
		.post-title {
			font-size: 0.8rem;
		}
	}

	@media only screen and (max-width: 640px) {
		.comments-hide-sm {
			display: none;
		}

		.comments-show-sm {
			display: flex;
			flex-flow: column nowrap;
			transition: 0.3s ease-in-out;

			.sm-comments-btn {
				background: #283dff;
				box-shadow: 0 2px 5px 0 rgba(13, 28, 44, 0.25);
				outline: none;
				padding: 1rem;
				width: 70%;
				display: block;
				margin: 0 auto;
				border: 1px solid transparent;
				border-radius: 4px;
				color: #fff;
				margin-bottom: 2rem;
				font-size: 13pt;
				cursor: pointer;
			}
		}
		.post-footer {
			display: flex;
			flex-flow: column wrap;
			gap: 10px;
		}
	}

	@media (min-width: 320px) and (max-width: 480px) {
		ul {
			padding: 0.4rem;
			li {
				margin-top: 1.3rem;
				padding: 0;
			}
		}

		.post-title {
			font-size: 0.5rem;
		}

		.post-content {
			padding: 0;
			font-size: 10pt;
			line-height: 1.6;
		}
	}
`;

const Posts = ({ posts, loading, users, comments }) => {
	const [activeComments, setActiveComments] = useState(false);

	if (loading) {
		const currentPosts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		return (
			<>
				{currentPosts.map((skeleton) => (
					<SkeletonPost key={skeleton} />
				))}
			</>
		);
	}

	const onButtonToggle = () => {
		setActiveComments(!activeComments);
	};

	const activeButton = activeComments ? "Hide Comments" : "Show Comments";

	const usersId = posts.map((post) => post.userId);

	return (
		<PostListWapper>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						<div className="post-title">
							<h1>{post.title}</h1>
							{/* <h5>Post: {post.userId}</h5> */}
						</div>
						<div className="post-content">{post.body}</div>
						<div className="post-footer">
							<div className="comments-hide-sm">
								<Comments comments={comments} />
							</div>
							<Users users={users} userId={usersId} />
						</div>
						{/* Component show in Mobile */}
						<div className="comments-show-sm">
							<button onClick={onButtonToggle} className="sm-comments-btn">
								{activeButton}
							</button>
							{activeComments ? <Comments comments={comments} /> : null}
						</div>
					</li>
				))}
			</ul>
		</PostListWapper>
	);
};

export default Posts;
