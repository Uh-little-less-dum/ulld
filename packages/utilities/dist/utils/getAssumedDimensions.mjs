import '../chunk-T7KECS5U.mjs';

var a=({width:i,height:n,maxViewportWidth:r=90,maxViewportHeight:o=70,maxSource:t="container",includeMin:m=!0})=>{let e={maxWidth:"100%",maxHeight:"100%"};return i&&(e.width=i>1?`min(${r}${t==="container"?"%":"vw"}, ${i}px)`:`${i}vw`),n&&(e.height=n>1?`min(${o}${t==="container"?"%":"vh"}, ${n}px)`:`${n}vh`),m&&(e.minWidth=e.width,e.minHeight=e.height),e};

export { a as getAssumedDimensions };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=getAssumedDimensions.mjs.map