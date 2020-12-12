import React from "react";

import styled from "styled-components";

// Basic styles
const SkeletonWapper = styled.div`
	.skeleton {
		background-color: #ddd;
		margin: 10px 0;
		border-radius: 4px;

		&.text {
			width: 100%;
			height: 12px;
		}

		&.title {
			width: 50%;
			height: 20px;
			margin-bottom: 15px;
		}

		&.avatar {
			width: 60px;
			height: 60px;
			border-radius: 50%;
		}

		&.thumbnail {
			width: 150px;
			height: 150px;
			margin: 0 auto;
		}
	}
`;

const SkeletonElements = ({ type }) => {
	const classes = `skeleton ${type}`;

	return (
		<SkeletonWapper>
			<div className={classes}></div>
		</SkeletonWapper>
	);
};

export default SkeletonElements;
