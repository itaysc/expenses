import React, {Component} from 'react';
import menuImageData from '../data/menuData';
import SmallScreenMenu from './SmallScreenMenu';
import LargeScreenMenu from './LargeScreenMenu';

export default (props)=>{
    return(
      <div>
          <div className="hidden-xs hidden-sm">
            <LargeScreenMenu history={props.history} menuItems={menuImageData}/>
          </div>
          <div className="hidden-md hidden-lg">
            <SmallScreenMenu history={props.history} menuItems={menuImageData}/>
          </div>
      </div>
    );
}
