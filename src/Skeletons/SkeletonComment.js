import React from "react";
import SkeletonElement from "./SkeletonElement";

import styled from "styled-components";

const SkeletonWapper = styled.div`
	margin: 20px auto;
	padding: 10px 15px;
	background-color: #f2f2f2;

	.skeleton-comment {
		display: grid;
		grid-template-columns: 1fr 11fr;
		gap: 10px;
		align-items: center;
	}
`;

const SkeletonComment = () => {
	return (
		<SkeletonWapper>
			<div className="skeleton-comment">
				<div>
					<SkeletonElement type="avatar" />
				</div>
				<div>
					<SkeletonElement type="title" />
					<SkeletonElement type="text" />
					<SkeletonElement type="text" />
				</div>
			</div>
		</SkeletonWapper>
	);
};

export default SkeletonComment;
