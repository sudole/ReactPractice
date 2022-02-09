import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { About } from './components/About';
import { Contact } from './components/Contact';

import './custom.css'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import ReactFragementDemo from './components/Samples/ReactFragmentDemo';
import StateDescription from './StateDescription';
import OnClickEventHandler from './OnClickEventHandler';
import { OneWayBinding } from './components/Demos/OneWayBinding/OneWayBinding';
import TodoListInMemory from './components/TodoListInMemory';
import FunctionStateDemo from './components/Samples/FunctionStateDemo';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/ReactFragmentDemo' component={ReactFragementDemo} />
        <Route path='/StateDescription' component={StateDescription} />
        <Route path='/OnClickEventHandler' component={OnClickEventHandler} />
        <Route path='/OneWayBinding' component={OneWayBinding} />
        <Route path='/TodoListInMemory' component={TodoListInMemory} />
        <Route path='/FunctionStateDemo' component={FunctionStateDemo} />
      </Layout>
    );
  }
}
