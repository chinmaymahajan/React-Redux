import React from 'react';
import {render} from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const headerTitle = "Header";
const footerTitle = "Footer";

const Hello = ({ type2, type1 }) => {
  return (
    <div>

			<Header title={type1}/>
      <h1>Welcome to React-Redux{type2} </h1>
			<Footer title={type2}/>
    </div>
  )
}

render(
	<Hello type1={headerTitle} type2={footerTitle}/>,
  document.getElementById('root')
)

Hello.propTypes = {
	type1: React.PropTypes.string,
	type2: React.PropTypes.string,
}

Hello.defaultProps = {
	title1: 'unknown title'
}

export default Hello
