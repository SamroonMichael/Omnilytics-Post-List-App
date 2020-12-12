import React, { useState, useEffect } from "react";
import axiso from "axios";
import Posts from "./components/Posts";
import Header from "./components/Header";
import GlobalStyle from "./globalStyles";
import Footer from "./components/Footer";

import styled from "styled-components";

const Main = styled.main`
	width: 100%;
	max-width: 1080px;
	min-height: 100vh;
	margin: 0 auto;
	position: relative;
	overflow: hidden;
	display: block;
	padding-bottom: 120px;

	.pagination {
		width: 100%;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		align-content: center;
		margin-top: 2.5rem;

		button {
			width: 20%;
			padding: 0.6rem;
			margin-right: 3rem;
			background: #283dff;
			box-shadow: 0 2px 5px 0 rgba(13, 28, 44, 0.9);
			font-size: 14pt;
			font-weight: 400;
			text-align: center;
			cursor: pointer;
			border: 1px solid transparent;
			border-radius: 4px;
			color: #fff;
			outline: none;

			@media only screen and (max-width: 640px) {
				width: 45%;
				margin-right: 0;
			}
		}
	}
`;

const App = () => {
	const [loading, setLoading] = useState(false);
	const [posts, setPosts] = useState([]);
	const [users, setUsers] = useState([]);
	const [comments, setCommets] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [postPerPage] = useState(10);

	useEffect(() => {
		setLoading(true);

		setTimeout(() => {
			axiso
				.all([
					axiso.get("https://jsonplaceholder.typicode.com/posts"),
					axiso.get("https://jsonplaceholder.typicode.com/users"),
					axiso.get(
						`https://jsonplaceholder.typicode.com/comments?postId=${currentPage}`
					),
				])
				.then(
					axiso.spread((postsRes, usersRes, commentsRes) => {
						setPosts(postsRes.data);
						setUsers(usersRes.data);
						setCommets(commentsRes.data);
						setLoading(false);
					})
				)
				.catch((error) => console.error(error));
		}, 2000);

		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [currentPage]);

	// Get current post
	const indexOfLastPost = currentPage * postPerPage; // 10
	const indexOfFirstPost = indexOfLastPost - postPerPage; // 0
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); // show 1 - 10 posts

	// Go next post
	const nextPageHandler = () => {
		if (currentPage <= 9) {
			setCurrentPage(currentPage + 1);
		}
		if (currentPage >= 10) {
			setCurrentPage(1);
		}
		return;
	};

	// Go back post
	const previousPageHandler = () => {
		if (currentPage >= 2) {
			setCurrentPage(currentPage - 1);
		}
		if (currentPage <= 1) {
			setCurrentPage(10);
		}
		return;
	};

	return (
		<>
			<GlobalStyle />
			<div className="App_Wapper">
				<Header />
				<Main>
					<Posts
						posts={currentPosts}
						loading={loading}
						users={users}
						comments={comments}
					/>
					<div className="pagination">
						<button onClick={previousPageHandler}>Previous</button>
						<button onClick={nextPageHandler}>Next</button>
					</div>
				</Main>
				<Footer />
			</div>
		</>
	);
};

export default App;
