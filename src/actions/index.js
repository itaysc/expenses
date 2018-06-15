
import types from '../types.js';
import axios from 'axios';

export function getOverAllExpenses(userId) {
  return function(dispatch){
   // const request = axios.get('../src/data/overallExpenses.json', {
     const request = axios.get('http://localhost:8081/overallExpenses', {
          headers: {
              'Content-Type': 'application/json'
          }
      }).then(response =>{
          dispatch({type: types.GET_OVERALL_EXPENSES, payload: response.data}); // trigger the matching reducer
      }).catch((e)=>{
        console.log("Error fetching ovrall expeses data");
      });
  }
}

export function getGraphData(userId, itemName) {
  return function(dispatch){
    let request = null;
    switch(itemName){
      case "ClothingAndShoes":
            request = axios.get('../src/data/clothingGraphData.json', {
                   headers: {
                       'Content-Type': 'application/json'
                   }
               }).then(response =>{
                   dispatch({type: types.GET_GRAPH_DATA, payload: response.data}); // trigger the matching reducer
               }).catch((e)=>{
                 console.log("Error fetching graph data");
               });
               break;
     case "Rent":
           request = axios.get('../src/data/rentGraphData.json', {
                  headers: {
                      'Content-Type': 'application/json'
                  }
              }).then(response =>{
                  dispatch({type: types.GET_GRAPH_DATA, payload: response.data}); // trigger the matching reducer
              }).catch((e)=>{
                console.log("Error fetching graph data");
              });
              break;
      case "Payments":
            request = axios.get('../src/data/taxesGraphData.json', {
                   headers: {
                       'Content-Type': 'application/json'
                   }
               }).then(response =>{
                   dispatch({type: types.GET_GRAPH_DATA, payload: response.data}); // trigger the matching reducer
               }).catch((e)=>{
                 console.log("Error fetching graph data");
               });
               break;
     case "Household":
           request = axios.get('../src/data/houseHoldGraphData.json', {
                  headers: {
                      'Content-Type': 'application/json'
                  }
              }).then(response =>{
                  dispatch({type: types.GET_GRAPH_DATA, payload: response.data}); // trigger the matching reducer
              }).catch((e)=>{
                console.log("Error fetching graph data");
              });
              break;
    case "Incomes":
          request = axios.get('../src/data/incomeGraphData.json', {
                 headers: {
                     'Content-Type': 'application/json'
                 }
             }).then(response =>{
                 dispatch({type: types.GET_GRAPH_DATA, payload: response.data}); // trigger the matching reducer
             }).catch((e)=>{
               console.log("Error fetching graph data");
             });
             break;
    }//switch
  }
}
