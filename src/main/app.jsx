import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react';
import Todo from '../view/todo';
import About from '../view/about';
import Menu from '../template/menu';

export default props => (
  <div className='container'>
    <Menu />
    <Todo />
    <About />
  </div>
)
