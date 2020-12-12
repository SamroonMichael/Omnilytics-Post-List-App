import React from "react";
import SkeletonElement from "./SkeletonElement";
import SkeletonComment from "./SkeletonComment";
import Glow from "./Glow";

import styled from "styled-components";

const SkeletonWapper = styled.div`
	margin: 30px auto;
	padding: 10px 15px;
	position: relative;
	overflow: hidden;

	.post-footer {
		width: 100%;
		display: grid;
		grid-template-columns: 6fr 6fr;
		align-items: center;
		background-color: #f2f2f2;
		border-radius: 4px;
		padding: 0.7rem;
	}
`;

const SkeletonPost = () => {
	return (
		<SkeletonWapper className="skeleton-wapper">
			<div className="skeleton-post">
				<SkeletonElement type="title" />
				<SkeletonElement type="text" />
				<SkeletonElement type="text" />
				<div className="post-footer">
					<div>
						<SkeletonComment />
					</div>
					<div>
						<SkeletonElement type="thumbnail" />
					</div>
				</div>
			</div>
			<Glow />
		</SkeletonWapper>
	);
};

export default SkeletonPost;
