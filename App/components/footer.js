import React from 'react';



const Footer = ({ title }) => {
	return(
		<div>
			<h2>{title} </h2>
			<h3>Footer</h3>
		</div>
	);
}

Footer.propTypes = {
	title: React.PropTypes.string.isRequired
};

export default Footer
