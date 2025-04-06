'use client'
import React, { useEffect, useRef } from 'react'
import mermaid from 'mermaid'

mermaid.initialize(
{
  startOnLoad: true,
  theme: "default",
  securityLevel: "loose",
  themeCSS: `
    g.classGroup rect {
      fill: #282a36;
      stroke: #6272a4;
    } 
    g.classGroup text {
      fill: #f8f8f2;
    }
    g.classGroup line {
      stroke: #f8f8f2;
      stroke-width: 0.5;
    }
    .classLabel .box {
      stroke: #21222c;
      stroke-width: 3;
      fill: #21222c;
      opacity: 1;
    }
    .classLabel .label {
      fill: #f1fa8c;
    }
    .relation {
      stroke: #ff79c6;
      stroke-width: 1;
    }
    #compositionStart, #compositionEnd {
      fill: #bd93f9;
      stroke: #bd93f9;
      stroke-width: 1;
    }
    #aggregationEnd, #aggregationStart {
      fill: #21222c;
      stroke: #50fa7b;
      stroke-width: 1;
    }
    #dependencyStart, #dependencyEnd {
      fill: #00bcd4;
      stroke: #00bcd4;
      stroke-width: 1;
    } 
    #extensionStart, #extensionEnd {
      fill: #f8f8f2;
      stroke: #f8f8f2;
      stroke-width: 1;
    }`,
  fontFamily: "Fira Code"
});

export default function MermaidDiagram({code}:{code:string}){
        return (<div></div>);
}

// <!-- <MermaidDiagram code={abc} suppressHydrationWarning/> -->
// export default function MermaidDiagram({children}:{children: React.ReactNode}){
//         mermaid.initialize({});
//         const mermaid_ref = useRef(null);
//         useEffect(()=>{
//                 mermaid.contentLoaded();
//         },[children]);
//         mermaid.contentLoaded();
//         const gcode = React.Children.map(children,(child)=>{
//                 return child['props'].children
//         })?.flat(1)[0];
//
//         return (<pre ref={mermaid_ref} className="mermaid"> {gcode} </pre>);
// }
