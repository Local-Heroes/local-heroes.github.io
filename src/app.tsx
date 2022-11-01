import * as React from 'react';
import {render} from 'react-dom';
import HeatMap from './heatmap/heatmap';


export function App() {
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