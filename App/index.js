import React from 'react';
import {render} from 'react-dom';

const Hello = () => {
  return (
    <div>
      <h1>Welcome to React-Redux</h1>
    </div>
  )
}

render(
	<Hello/>,
  document.getElementById('root')
)

export default Hello
