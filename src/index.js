//var React=require('react');
import React from 'react';

//var ReactDom=require('react-dom');
import ReactDom from 'react-dom';



/*ReactDom.render(
React.createElement("h1",null,"hellow word"),
document.getElementById('root'));*/
const name="peeyush"
ReactDom.render(
<>
<h1>Hellow owrd</h1>
<p>nice{name}</p>
<ol>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
</ol>
</>,document.getElementById('root'),

)