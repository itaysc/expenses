import React, {Component} from 'react';
import {Glyphicon, Button, PanelGroup, Panel} from 'react-bootstrap';
import LineChart from '../components/LineChart';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

class MenuItem extends Component{
  constructor(props){
    super(props);
    this.state={
      itemName: props.match.params.itemName
    }
  }

  componentDidMount(){
    this.props.getGraphData("1", this.state.itemName);
  }

  render(){
    return(
        <div className="menuItemContainer">
          <center>
              <div className="graph">
                <span style={{marginLeft:"80px"}}>Last 6 monthes data</span>
                <LineChart data={this.props.graphData}/>
              </div>
           </center>
        </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return({
    graphData: state.graphData
  });
}

export default connect(mapStateToProps, actions)(MenuItem);
