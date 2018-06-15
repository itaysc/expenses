import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NavBar from './NavBar';
import Dashboard from '../containers/Dashboard';
import MenuItem from '../containers/MenuItem';
import Menu from './Menu';

export default class App extends Component {

  render() {
    return (
    	<div>
        <Router>
      		<NavBar>
				      <Switch>
	                  <Route exact path='/Dashboard' component={Dashboard} />
                    <Route exact path='/Menu' component={Menu} />
                    <Route exact path='/MenuItem/:itemName' component={MenuItem} />
	             </Switch>
      		</NavBar>
        </Router>

    	</div>
    );
  }
}
