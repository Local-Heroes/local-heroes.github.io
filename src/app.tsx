import * as React from 'react';
import {render} from 'react-dom';
import HeatMap from './heatmap/heatmap';


export function App() {
  console.log("here");
  return (<HeatMap/>)
}

export function renderToDom(container) {
  
    render(

  
    
    <App />
  
  , container);
    
  }

// export function renderToDom(container) {
//   render(<HeatMap />, container);
// }