import React, { Fragment } from 'react';
import RepoItem from './RepoItem';
import PropTypes from 'prop-types';

const Repos = ({ repos }) => {
	return (
		<div>
			{repos && (
				<Fragment>
					{repos.map((repo) => (
						<RepoItem repo={repo} key={repo.id} />
					))}
				</Fragment>
			)}
		</div>
	);
};

Repos.propTypes = {
	repos: PropTypes.array.isRequired,
};

export default Repos;
