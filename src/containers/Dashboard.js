import React, { Component } from 'react';
import {Glyphicon, Button } from 'react-bootstrap';
import LineChart from '../components/LineChart';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

class Dashboard extends Component{
  constructor(props){
    super(props);
  }

componentDidMount(){
  this.props.getOverAllExpenses();
}

  render(){
    return(
      <div>
          <center>
              <Button className="transparent">
                <a href="/Menu"><Glyphicon className="menu-glyph" glyph="th" /></a>
              </Button>
          </center>
          <div style={{display:"flex", flexWrap: "wrap", marginTop:"50px"}}>
            <div className="graph">
              <span style={{marginLeft:"80px"}}>Last 6 monthes overall expenses</span>
              <LineChart data={this.props.graphData}/>
            </div>
            <div className="graph">
              <span style={{marginLeft:"80px"}}>Last 6 monthes overall expenses</span>
              <LineChart data={this.props.graphData}/>
            </div>
          </div>
       </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return {
    graphData: state.graphData
  }
}

export default connect(mapStateToProps, actions)(Dashboard);
