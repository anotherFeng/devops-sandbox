import React from 'react';
import ReactDom from 'react-dom';

const Hello = () => {
  return (
    <div>Yo!</div>
  )
}

ReactDom.render(<Hello/>, document.getElementById('app'));