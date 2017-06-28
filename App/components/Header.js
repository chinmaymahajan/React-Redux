import React from 'react';

// class  Header extends React.Component {
// 	render() {
// 		return (
// 			<div><h3>Header component</h3></div>
// 		);
// 	}
// }

const Header = ({ title }) => {
	return (
		<div>
			<h2>{title}</h2>
			<h3>Header Component</h3>
		</div>
	);
}

export default Header
