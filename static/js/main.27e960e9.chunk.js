(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,n){e.exports=n(41)},37:function(e,t,n){},40:function(e){e.exports={}},41:function(e,t,n){"use strict";n.r(t);var a=n(3),o=n.n(a),c=n(29),i=n.n(c),r=(n(37),n(19)),s=n(22),l=n(31),u=n(25),p={id:"fc",type:"fill"},d=function(e){var t=Object(a.useState)(null),n=Object(r.a)(t,2),c=n[0],i=n[1],d=Object(a.useState)(null),m=Object(r.a)(d,2),f=(m[0],m[1]);Object(a.useEffect)(function(){fetch(e.dataURL).then(function(e){return e.json()}).then(function(e){i(e.layers[0].source)})},[]);Object(a.useMemo)(function(){return c},[c]),c&&function(e){var t=Object(l.bbox)(e),n=new u.a({width:800,height:600}).fitBounds([[t[0],t[1]],[t[2],t[3]]],{padding:12});n.longitude,n.latitude,n.zoom}(c);var b=o.a.useState({width:800,height:600}),h=Object(r.a)(b,2),w=h[0],j=h[1];Object(a.useCallback)(function(e){var t=e.features,n=e.point,a=n.x,o=n.y,c=t&&t[0];f(c&&{feature:c,x:a,y:o})},[]);return o.a.createElement("div",null,c&&o.a.createElement(s.d,Object.assign({},w,{onViewportChange:function(e){j(e)},interactiveLayerIds:["fc"],mapboxApiAccessToken:"pk.eyJ1IjoicHVydmFzaW5naCIsImEiOiJjbDQ4amRrYjQwc3RwM2NsbGttbnlpaTRmIn0.djnJ9PjVpJ7g8aIWHHnPGA"}),o.a.createElement(s.c,{type:"geojson",data:c},o.a.createElement(s.a,Object.assign({},p,{paint:{"fill-outline-color":"white","fill-color":"red","fill-opacity":.5}}))),o.a.createElement("div",{style:{position:"absolute",left:"15px",top:"5%"}},o.a.createElement(s.b,{showCompass:!1}))))};n(40);function m(){return o.a.createElement("div",null,o.a.createElement(d,{dataURL:"https://raw.githubusercontent.com/purvasingh96/Mapbox-react-app/main/src/data/playground.json"}),o.a.createElement(d,{dataURL:"https://raw.githubusercontent.com/purvasingh96/Mapbox-react-app/main/src/data/COVID.json"}))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.27e960e9.chunk.js.map