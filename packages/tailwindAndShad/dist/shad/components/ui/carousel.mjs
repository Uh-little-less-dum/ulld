"use client"
"use client";import{b as v}from"../../../chunk-7BOHER4E.mjs";import{a as u}from"../../../chunk-ORBRSQKI.mjs";import"../../../chunk-PD25TUY5.mjs";import*as e from"react";import h from"embla-carousel-react";import{ArrowLeft as E,ArrowRight as T}from"lucide-react";var R=e.createContext(null);function m(){let o=e.useContext(R);if(!o)throw new Error("useCarousel must be used within a <Carousel />");return o}var L=e.forwardRef(({orientation:o="horizontal",opts:r,setApi:a,plugins:l,className:n,children:c,...i},f)=>{let[y,t]=h({...r,axis:o==="horizontal"?"x":"y"},l),[x,N]=e.useState(!1),[P,b]=e.useState(!1),C=e.useCallback(s=>{s&&(N(s.canScrollPrev()),b(s.canScrollNext()))},[]),p=e.useCallback(()=>{t==null||t.scrollPrev()},[t]),d=e.useCallback(()=>{t==null||t.scrollNext()},[t]),w=e.useCallback(s=>{s.key==="ArrowLeft"?(s.preventDefault(),p()):s.key==="ArrowRight"&&(s.preventDefault(),d())},[p,d]);return e.useEffect(()=>{!t||!a||a(t)},[t,a]),e.useEffect(()=>{if(t)return C(t),t.on("reInit",C),t.on("select",C),()=>{t==null||t.off("select",C)}},[t,C]),e.createElement(R.Provider,{value:{carouselRef:y,api:t,opts:r,orientation:o||((r==null?void 0:r.axis)==="y"?"vertical":"horizontal"),scrollPrev:p,scrollNext:d,canScrollPrev:x,canScrollNext:P}},e.createElement("div",{ref:f,onKeyDownCapture:w,className:u("relative",n),role:"region","aria-roledescription":"carousel",...i},c))});L.displayName="Carousel";var S=e.forwardRef(({className:o,...r},a)=>{let{carouselRef:l,orientation:n}=m();return e.createElement("div",{ref:l,className:"overflow-hidden"},e.createElement("div",{ref:a,className:u("flex",n==="horizontal"?"-ml-4":"-mt-4 flex-col",o),...r}))});S.displayName="CarouselContent";var H=e.forwardRef(({className:o,...r},a)=>{let{orientation:l}=m();return e.createElement("div",{ref:a,role:"group","aria-roledescription":"slide",className:u("min-w-0 shrink-0 grow-0 basis-full",l==="horizontal"?"pl-4":"pt-4",o),...r})});H.displayName="CarouselItem";var M=e.forwardRef(({className:o,variant:r="outline",size:a="icon",...l},n)=>{let{orientation:c,scrollPrev:i,canScrollPrev:f}=m();return e.createElement(v,{ref:n,variant:r,size:a,className:u("absolute  h-8 w-8 rounded-full",c==="horizontal"?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",o),disabled:!f,onClick:i,...l},e.createElement(E,{className:"h-4 w-4"}),e.createElement("span",{className:"sr-only"},"Previous slide"))});M.displayName="CarouselPrevious";var D=e.forwardRef(({className:o,variant:r="outline",size:a="icon",...l},n)=>{let{orientation:c,scrollNext:i,canScrollNext:f}=m();return e.createElement(v,{ref:n,variant:r,size:a,className:u("absolute h-8 w-8 rounded-full",c==="horizontal"?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",o),disabled:!f,onClick:i,...l},e.createElement(T,{className:"h-4 w-4"}),e.createElement("span",{className:"sr-only"},"Next slide"))});D.displayName="CarouselNext";export{L as Carousel,S as CarouselContent,H as CarouselItem,D as CarouselNext,M as CarouselPrevious};
//# sourceMappingURL=carousel.mjs.map