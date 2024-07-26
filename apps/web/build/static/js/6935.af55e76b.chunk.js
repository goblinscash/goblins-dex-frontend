"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[6935],{24051:(e,t,i)=>{i.d(t,{Tg:()=>C,aU:()=>j,ll:()=>g,r4:()=>m});var n=i(21339),s=i(79357),a=i(16685),o=i(1374),r=i(56374),d=i(98878),l=i(34182),c=i(39491),h=i(33552),p=i(17513),u=i(19369);function x(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class m extends a.B{updateOptions(e){super.updateOptions(e);const{data:t,theme:i,type:n}=e;this.type!==n&&(this.type=e.type,this.api.removeSeries(this.series),this.series=this.type===r.E4.LINE?this.api.addAreaSeries():this.api.addCandlestickSeries(),this.series.setData(t),this.minPriceLine=this.series.createPriceLine({price:0}),this.maxPriceLine=this.series.createPriceLine({price:0})),this.data!==t&&(this.data=t,this.series.setData(t),this.fitContent());const{min:s,max:a}=(0,o.xV)(t);this.series.applyOptions({priceLineVisible:!1,lastValueVisible:!1,lineType:t.length<20?l.SP.WithSteps:l.SP.Curved,lineWidth:2,lineColor:i.accent1,topColor:(0,p.j)(12,i.accent1),bottomColor:(0,p.j)(12,i.accent1),crosshairMarkerRadius:5,crosshairMarkerBorderColor:(0,p.j)(30,i.accent1),crosshairMarkerBorderWidth:3,upColor:i.success,wickUpColor:i.success,downColor:i.critical,wickDownColor:i.critical,borderVisible:!1});const d={color:i.surface3,lineWidth:2,lineStyle:l.TD.Dashed,axisLabelColor:i.neutral3,axisLabelTextColor:i.neutral2};this.minPriceLine.applyOptions({price:s,...d}),this.maxPriceLine.applyOptions({price:a,...d})}constructor(e,t){super(e,t),x(this,"series",void 0),x(this,"type",void 0),x(this,"minPriceLine",void 0),x(this,"maxPriceLine",void 0),this.type=t.type,this.series=this.type===r.E4.LINE?this.api.addAreaSeries():this.api.addCandlestickSeries(),this.series.setData(this.data),this.minPriceLine=this.series.createPriceLine({price:0}),this.maxPriceLine=this.series.createPriceLine({price:0}),this.updateOptions(t),this.fitContent()}}const f=h.default.div.withConfig({displayName:"PriceChart__DeltaContainer",componentId:"sc-e495120e-0"})`
  height: 16px;
  display: flex;
  align-items: center;
  color: ${({theme:e})=>e.neutral2};
  gap: 4px;
`,g=e=>{if(!e)return[];let t=0,i=0;const n=e.map(((n,s)=>{const a=s>0?e[s-1].value:.9992*n.value,o=n.value,r=n.value+.5*Math.abs(a-o),d=n.value-.5*Math.abs(o-a);return e[t].value>n.value&&(t=s),e[i].value<n.value&&(i=s),{value:n.value,time:n.timestamp,open:a,close:o,high:r,low:d}}));return n[t].value=n[t].low,n[i].value=n[i].high,n};function C({startingPrice:e,endingPrice:t,noColor:i}){const s=(0,d.YD)(e.close??e.value,t.close??t.value),{formatDelta:a}=(0,u.Gb)();return(0,n.jsxs)(f,{children:[(0,n.jsx)(d.Kx,{delta:s,noColor:i}),a(s)]})}function j({height:e,prices:t,type:i}){const o=(0,c.useMemo)((()=>g(t)),[t]),r=(0,c.useMemo)((()=>({data:o,type:i})),[o,i]);if(!o.length)return null;const d=o[o.length-1];return(0,n.jsx)(a.k,{Model:m,params:r,height:e,children:e=>(0,n.jsx)(s._,{value:(e??d).value??(e??d).close,additionalFields:(0,n.jsx)(C,{startingPrice:o[0],endingPrice:e??d}),valueFormatterType:u.sw.FiatTokenPrice,time:e?.time})})}},88584:(e,t,i)=>{i.d(t,{P:()=>s});var n=i(21339);const s=e=>(0,n.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"transparent",...e,children:[(0,n.jsx)("path",{d:"M5.08042 8.66148C5.08043 8.58693 5.09517 8.51313 5.12378 8.44429C5.1524 8.37546 5.19432 8.31297 5.24716 8.26038C5.30001 8.2078 5.3627 8.16617 5.43167 8.13788C5.50064 8.1096 5.57452 8.09522 5.64907 8.09557L6.59187 8.09865C6.74218 8.09865 6.88635 8.15836 6.99263 8.26465C7.09893 8.37094 7.15865 8.5151 7.15865 8.66543V12.2303C7.26478 12.1988 7.4011 12.1652 7.55026 12.1301C7.65387 12.1058 7.74621 12.0471 7.8123 11.9637C7.87839 11.8803 7.91434 11.777 7.91432 11.6705V7.24848C7.91432 7.09814 7.97403 6.95397 8.08032 6.84766C8.1866 6.74135 8.33077 6.68162 8.4811 6.68158H9.42577C9.57609 6.68162 9.72026 6.74135 9.82655 6.84766C9.93284 6.95397 9.99255 7.09814 9.99255 7.24848V11.3526C9.99255 11.3526 10.2291 11.2569 10.4595 11.1596C10.545 11.1234 10.6181 11.0629 10.6694 10.9854C10.7208 10.908 10.7482 10.8172 10.7483 10.7242V5.83152C10.7483 5.68122 10.808 5.53707 10.9143 5.43078C11.0206 5.32449 11.1647 5.26478 11.315 5.26474H12.2597C12.41 5.26474 12.5542 5.32445 12.6604 5.43075C12.7667 5.53704 12.8265 5.6812 12.8265 5.83152V9.86056C13.6455 9.267 14.4754 8.55315 15.1341 7.69474C15.2297 7.57015 15.2929 7.42383 15.3181 7.26887C15.3434 7.1139 15.3299 6.95509 15.2788 6.8066C14.9739 5.9294 14.4894 5.12551 13.856 4.44636C13.2226 3.76722 12.4544 3.22777 11.6005 2.86256C10.7467 2.49734 9.82602 2.31439 8.89742 2.32542C7.96882 2.33645 7.05275 2.54121 6.20783 2.9266C5.36291 3.31199 4.60774 3.86952 3.99066 4.56352C3.37358 5.25751 2.90817 6.07269 2.62422 6.95689C2.34027 7.84107 2.24403 8.7748 2.34166 9.69832C2.43929 10.6218 2.72863 11.5148 3.19118 12.3201C3.27176 12.459 3.39031 12.572 3.53289 12.6459C3.67548 12.7198 3.83618 12.7514 3.99614 12.7372C4.17482 12.7215 4.3973 12.6992 4.66181 12.6681C4.77695 12.655 4.88326 12.6001 4.96048 12.5137C5.0377 12.4273 5.08043 12.3155 5.08053 12.1996L5.08042 8.66148Z",fill:e.fill??"#607BEE"}),(0,n.jsx)("path",{d:"M5.05957 14.3792C6.05531 15.1036 7.23206 15.5384 8.45961 15.6356C9.68716 15.7326 10.9176 15.4883 12.0149 14.9294C13.1122 14.3705 14.0334 13.519 14.6768 12.4691C15.3201 11.4191 15.6605 10.2116 15.6601 8.98024C15.6601 8.82658 15.653 8.67457 15.6428 8.52344C13.2041 12.1605 8.70139 13.8609 5.05978 14.3786",fill:e.fill??"#607BEE"})]})},2528:(e,t,i)=>{i.d(t,{Z:()=>h});var n=i(21339),s=i(88693),a=i(39491),o=i(33552);const r=o.default.div.withConfig({displayName:"PillMultiToggle__OptionsSelector",componentId:"sc-1b9da6a1-0"})`
  display: flex;
  position: relative;
  justify-content: flex-end;
  gap: 12px;
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 20px;
  height: 40px;
  padding: ${4}px;
  width: fit-content;
`,d=o.default.div.withConfig({displayName:"PillMultiToggle__ActivePill",componentId:"sc-1b9da6a1-1"})`
  position: absolute;
  height: 30px;
  background-color: ${({theme:e})=>e.surface3};
  border-radius: 15px;
  transition: left 0.3s ease, width 0.3s ease;
`,l=o.default.button.withConfig({displayName:"PillMultiToggle__OptionButton",componentId:"sc-1b9da6a1-2"})`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  font-weight: 535;
  font-size: 16px;
  padding: 8px 12px;
  border-radius: 15px;
  line-height: 20px;
  border: none;
  cursor: pointer;
  color: ${({theme:e,active:t})=>t?e.neutral1:e.neutral2};
  transition-duration: ${({theme:e})=>e.transition.duration.fast};
  :hover {
    ${({active:e,theme:t})=>!e&&`opacity: ${t.opacity.hover};`}
  }
`;function c(e){return"string"===typeof e?{value:e}:e}function h({options:e,currentSelected:t,onSelectOption:i}){const o=(0,a.useMemo)((()=>e.map((()=>(0,a.createRef)()))),[e]),[h,p]=(0,a.useState)({});return(0,a.useLayoutEffect)((()=>{const t=o.reduce(((t,i,n)=>{const s=i.current,{value:a}=c(e[n]);return t[a]={width:(s?.offsetWidth??0)+"px",left:(s?.offsetLeft??0)+"px"},t}),{});p(t)}),[e,o]),(0,n.jsxs)(r,{children:[(0,n.jsx)(d,{style:h[t]}),e.map(((e,a)=>{const{value:r,display:d}=c(e),h=o[a];return(0,n.jsx)(l,{ref:h,active:t===r,onClick:()=>i(r),children:d??(0,n.jsx)(s.cC,{id:"dCPSgO",values:{value:r}})},r)}))]})}},66496:(e,t,i)=>{i.d(t,{M7:()=>x,d5:()=>m,ez:()=>g});var n=i(21339),s=i(88693),a=i(82032),o=i(53609),r=i(39491),d=i(33552),l=i(10548),c=i(96193),h=i(3184),p=i(71587);const u=d.default.div.withConfig({displayName:"About__TokenDescriptionContainer",componentId:"sc-2d95f369-0"})`
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  max-height: fit-content;
  line-height: 24px;
  white-space: pre-wrap;
`,x=d.default.div.withConfig({displayName:"About__AboutContainer",componentId:"sc-2d95f369-1"})`
  gap: 16px;
  padding: 24px 0px;
  ${c.Sj}
`,m=(0,d.default)(l.Tv.MediumHeader).withConfig({displayName:"About__AboutHeader",componentId:"sc-2d95f369-2"})`
  font-size: 28px !important;
`,f=d.default.div.withConfig({displayName:"About__ResourcesContainer",componentId:"sc-2d95f369-3"})`
  display: flex;
  padding-top: 12px;
  gap: 14px;
`;function g({address:e,chainId:t,description:i,homepageUrl:d,twitterName:c}){const[g,C]=(0,r.useState)(!0),j=!!i&&i.length>p.ke,y=j&&g?(0,p.Nt)(i):i,{explorer:w,infoLink:b}=(0,o.bt)(t);return(0,n.jsxs)(x,{"data-testid":"token-details-about-section",children:[(0,n.jsx)(m,{children:(0,n.jsx)(s.cC,{id:"uyJsf6"})}),(0,n.jsxs)(u,{children:[!i&&(0,n.jsx)(p.aZ,{children:(0,n.jsx)(s.cC,{id:"kXI9SA"})}),(0,n.jsx)("p",{children:y}),j&&(0,n.jsx)(p.ou,{onClick:()=>C(!g),children:g?(0,n.jsx)(s.cC,{id:"fMPkxb"}):(0,n.jsx)(s.cC,{id:"vLyv1R"})})]}),(0,n.jsx)("br",{}),(0,n.jsx)(l.Tv.SubHeaderSmall,{children:(0,n.jsx)(s.cC,{id:"Rj01Fz"})}),(0,n.jsxs)(f,{"data-cy":"resources-container",children:[(0,n.jsx)(h.Z,{name:t===a.ChainId.MAINNET?"Etherscan":"Block Explorer",link:`${w}${"NATIVE"===e?"":"address/"+e}`}),(0,n.jsx)(h.Z,{name:"More analytics",link:`${b}tokens/${e}`}),d&&(0,n.jsx)(h.Z,{name:"Website",link:d}),c&&(0,n.jsx)(h.Z,{name:"Twitter",link:`https://twitter.com/${c}`})]})]})}},83748:(e,t,i)=>{i.d(t,{BO:()=>se,ZP:()=>re,Y_:()=>oe});var n=i(21339),s=i(8726),a=i(24051),o=i(71936),r=i(59332),d=i(56374),l=i(76139),c=i(77489),h=i(89691),p=i(83787),u=i(39491),x=i(33552),m=i(48664),f=i(88693),g=i(14611),C=i(85663),j=i(41848),y=i(1769),w=i(75482),b=i(3765),v=i(66661),k=i(19530),_=i.n(k),S=i(44091);const T={duration:_()("0.8s"),easing:v.p4T};function I({data:e,getX:t,getY:i,marginTop:s,curve:a,color:o,strokeWidth:r}){const d=(0,u.useRef)(null),[l,c]=(0,u.useState)(0),[h,p]=(0,u.useState)(!1),[m,f]=(0,u.useState)(!1),g=(0,S.q_)({frame:h?0:1,config:T,onRest:()=>{p(!1),f(!0)}});(0,u.useEffect)((()=>{if(d.current){const e=d.current.getTotalLength();e!==l&&c(e),e>0&&!h&&!m&&p(!0)}}));const C=(0,x.useTheme)(),j=o??C.accent1;return(0,n.jsx)(w.Z,{top:s,children:(0,n.jsx)(b.Z,{curve:a,x:t,y:i,children:({path:t})=>{const i=t(e)||"";return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(S.q.path,{d:i,ref:d,strokeWidth:r,strokeOpacity:m?1:0,fill:"none",stroke:j}),h&&0!==l&&(0,n.jsx)(S.q.path,{d:i,strokeWidth:r,fill:"none",stroke:j,strokeDashoffset:g.frame.to((e=>e*l)),strokeDasharray:l})]})}})})}const P=u.memo(I),N={duration:3e3,easing:v.cCj};function L({data:e,getX:t,getY:i,marginTop:s,curve:a,color:o,strokeWidth:r,dashed:d}){const l=(0,u.useRef)(null),[c,h]=(0,u.useState)(0),[p,m]=(0,u.useState)(!1),[f,g]=(0,u.useState)(!1),C=(0,S.q_)({frame:p?0:1,config:N,onRest:()=>{m(!1),g(!0)}});(0,u.useEffect)((()=>{if(l.current){const e=l.current.getTotalLength();e!==c&&h(e),e>0&&!p&&!f&&m(!0)}}));const j=(0,x.useTheme)(),y=o??j.accent1;return(0,n.jsx)(w.Z,{top:s,children:(0,n.jsx)(b.Z,{curve:a,x:t,y:i,children:({path:t})=>{const i=t(e)||"";return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(S.q.path,{d:i,ref:l,strokeWidth:r,strokeOpacity:f?1:C.frame.to((e=>1-e)),fill:"none",stroke:y,strokeDasharray:d?"4,4":void 0})})}})})}const $=u.memo(L);var E,A=i(1374);!function(e){e[e.NO_DATA_AVAILABLE=0]="NO_DATA_AVAILABLE",e[e.NO_RECENT_VOLUME=1]="NO_RECENT_VOLUME",e[e.INVALID_CHART=2]="INVALID_CHART"}(E||(E={}));var D=i(57777),O=i(84087),H=i(41119),M=i(10548),R=i(96193),V=i(19369),B=i(98878);const Z={hour:"numeric",minute:"numeric",hour12:!0},W={month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0};var z;!function(e){e.TICK="tick",e.CROSSHAIR="crosshair"}(z||(z={}));const F={[p.XH.HOUR]:{[z.TICK]:Z,[z.CROSSHAIR]:W},[p.XH.DAY]:{[z.TICK]:Z,[z.CROSSHAIR]:W},[p.XH.WEEK]:{[z.TICK]:{weekday:"long"},[z.CROSSHAIR]:W},[p.XH.MONTH]:{[z.TICK]:{month:"long",day:"numeric"},[z.CROSSHAIR]:W},[p.XH.YEAR]:{[z.TICK]:{month:"long"},[z.CROSSHAIR]:{month:"short",year:"numeric",day:"numeric"}}};function U(e,t,i){const n=F[e][i],s=new Intl.DateTimeFormat(t,n);return e=>{const t=1e3*e.valueOf();return s.format(t)}}const K={top:100,bottom:48,crosshair:72},Y=x.default.div.withConfig({displayName:"OldPriceChart__ChartHeaderWrapper",componentId:"sc-e7eeb9c1-0"})`
  position: absolute;
  ${R.Sj};
  animation-duration: ${({theme:e})=>e.transition.duration.medium};
  ${({theme:e,stale:t})=>t&&`color: ${e.neutral2}`};
`,X=x.default.div.withConfig({displayName:"OldPriceChart__PriceContainer",componentId:"sc-e7eeb9c1-1"})`
  display: flex;
  gap: 6px;
  font-size: 24px;
  line-height: 44px;
`,Q=x.default.div.withConfig({displayName:"OldPriceChart__DeltaContainer",componentId:"sc-e7eeb9c1-2"})`
  height: 16px;
  display: flex;
  align-items: center;
  margin-top: 4px;
  color: ${({theme:e})=>e.neutral2};
`;function G({startingPrice:e,endingPrice:t,noColor:i}){const s=(0,B.YD)(e.value,t.value),{formatDelta:a}=(0,V.Gb)();return(0,n.jsxs)(Q,{children:[a(s),(0,n.jsx)(B.Kx,{delta:s,noColor:i})]})}function q({crosshairPrice:e,chart:t}){const{formatFiatPrice:i}=(0,V.Gb)(),{startingPrice:s,endingPrice:a,lastValidPrice:o}=t,r=o!==a,d=e??(r?o:a),l=r&&!e;return(0,n.jsxs)(Y,{"data-cy":"chart-header",stale:l,children:[(0,n.jsxs)(X,{children:[(0,n.jsx)(M.Tv.HeadlineLarge,{color:"inherit",children:i({price:d.value})}),l&&(0,n.jsx)(D.ud,{text:(0,n.jsx)(f.cC,{id:"y9L4V6"}),children:(0,n.jsx)(H.Z,{size:16,"data-testid":"chart-stale-icon"})})]}),(0,n.jsx)(G,{startingPrice:s,endingPrice:d,noColor:r})]})}function J({chart:e,timePeriod:t}){const i=(0,O.eQ)(),{prices:s,blanks:a,timeScale:o,priceScale:r,dimensions:d}=e,{ticks:l,tickTimestampFormatter:c,crosshairTimestampFormatter:h}=(0,u.useMemo)((()=>{const n=Math.floor(d.width/100);return{ticks:(0,A.fj)(e.startingPrice.timestamp,e.endingPrice.timestamp,t,n),tickTimestampFormatter:U(t,i,z.TICK),crosshairTimestampFormatter:U(t,i,z.CROSSHAIR)}}),[d.width,e.startingPrice.timestamp,e.endingPrice.timestamp,t,i]),m=(0,x.useTheme)(),[f,w]=(0,u.useState)(),b=(0,u.useCallback)((()=>w(void 0)),[w]),k=(0,u.useCallback)((e=>{const{x:t}=(0,C.Z)(e)||{x:0},i=(0,A.HM)(t,s,o);if(i){const e=o(i.timestamp),t=r(i.value);w({x:e,y:t,price:i})}}),[r,o,s]);(0,u.useEffect)((()=>b()),[b,t]);const _=.85*d.width,S=!!f&&f.x>_,T=t===p.XH.HOUR?1:.9,I=(0,u.useCallback)((e=>o(e.timestamp)),[o]),N=(0,u.useCallback)((e=>r(e.value)),[r]),L=(0,u.useMemo)((()=>v.YY7.tension(T)),[T]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(q,{chart:e,crosshairPrice:f?.price}),(0,n.jsxs)("svg",{"data-cy":"price-chart",width:d.width,height:d.height,style:{minWidth:"100%"},children:[(0,n.jsx)(P,{data:s,getX:I,getY:N,marginTop:d.marginTop,curve:L,strokeWidth:2}),a.map(((e,t)=>(0,n.jsx)($,{data:e,getX:I,getY:N,marginTop:d.marginTop,curve:L,strokeWidth:2,color:m.neutral3,dashed:!0},t))),void 0!==f?(0,n.jsxs)("g",{children:[(0,n.jsx)(g.Z,{top:d.height-1,scale:o,stroke:m.surface3,hideTicks:!0,tickValues:l,tickFormat:c,tickLabelProps:()=>({fill:m.neutral2,fontSize:12,textAnchor:"middle",transform:"translate(0 -29)"})}),(0,n.jsx)("text",{x:f.x+(S?-4:4),y:K.crosshair+10,textAnchor:S?"end":"start",fontSize:12,fill:m.neutral2,children:h(f.price.timestamp)}),(0,n.jsx)(y.Z,{from:{x:f.x,y:K.crosshair},to:{x:f.x,y:d.height},stroke:m.surface3,strokeWidth:1,pointerEvents:"none",strokeDasharray:"4,4"}),(0,n.jsx)(j.Z,{left:f.x,top:f.y+d.marginTop,size:50,fill:m.accent1,stroke:m.surface3,strokeWidth:.5})]}):(0,n.jsx)(g.Z,{hideAxisLine:!0,scale:o,stroke:m.surface3,top:d.height-1,hideTicks:!0}),!d.width&&(0,n.jsx)("line",{x1:0,y1:d.height-1,x2:"100%",y2:d.height-1,fill:"transparent",shapeRendering:"crispEdges",stroke:m.surface3,strokeWidth:1}),(0,n.jsx)("rect",{x:0,y:0,width:d.width,height:d.height,fill:"transparent",onTouchStart:k,onTouchMove:k,onMouseMove:k,onMouseLeave:b})]})]})}const ee={[E.NO_DATA_AVAILABLE]:(0,n.jsx)(f.cC,{id:"g0qrI3"}),[E.NO_RECENT_VOLUME]:(0,n.jsx)(f.cC,{id:"7OwMjb"}),[E.INVALID_CHART]:(0,n.jsx)(f.cC,{id:"0WBcSC"})};function te({chart:e}){const t=(0,x.useTheme)(),i=e.dimensions.height/2+45;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(Y,{"data-cy":"chart-header",children:[(0,n.jsx)(M.Tv.HeadlineLarge,{fontSize:24,color:"neutral3",children:"Price unavailable"}),(0,n.jsx)(M.Tv.BodySmall,{color:"neutral3",children:ee[e.error]})]}),(0,n.jsx)("svg",{"data-cy":"missing-chart",width:e.dimensions.width,height:e.dimensions.height,style:{minWidth:"100%"},children:(0,n.jsx)("path",{d:`M 0 ${i} Q 104 ${i-70}, 208 ${i} T 416 ${i}\n          M 416 ${i} Q 520 ${i-70}, 624 ${i} T 832 ${i}`,stroke:t.surface3,fill:"transparent",strokeWidth:"2"})})]})}function ie({width:e,height:t,prices:i,timePeriod:s}){const a=(0,u.useMemo)((()=>function({dimensions:e,prices:t}){if(!t)return{error:E.NO_DATA_AVAILABLE,dimensions:e};const i=e.height-e.marginTop-e.marginBottom;if(i<0)return{error:E.INVALID_CHART,dimensions:e};const{prices:n,blanks:s,lastValidPrice:a}=(0,A.Bz)(t);if(n.length<2||!a)return{error:E.NO_RECENT_VOLUME,dimensions:e};const o=t[0],r=t[t.length-1],{min:d,max:l}=(0,A.VC)(t);return{prices:n,startingPrice:o,endingPrice:r,lastValidPrice:a,blanks:s,timeScale:(0,v.BYU)().domain([o.timestamp,r.timestamp]).range([0,e.width]),priceScale:(0,v.BYU)().domain([d,l]).range([i,0]),dimensions:e,error:void 0}}({dimensions:{width:e,height:t,marginBottom:K.bottom,marginTop:K.top},prices:i})),[e,t,i]);return void 0!==a.error?(0,n.jsx)(te,{chart:a}):(0,n.jsx)(J,{chart:a,timePeriod:s})}const ne=380,se=x.default.div.withConfig({displayName:"ChartSection__ChartContainer",componentId:"sc-ffe6e7f6-0"})`
  display: flex;
  flex-direction: column;
  ${({isInfoTDPEnabled:e})=>!e&&"height: 436px;"}
  ${({isInfoTDPEnabled:e})=>!e&&"margin-bottom: : 24px;"}
  align-items: flex-start;
  width: 100%;
  position: relative;
`,ae=x.default.div.withConfig({displayName:"ChartSection__TimePeriodSelectorContainer",componentId:"sc-ffe6e7f6-1"})`
  position: absolute;
  top: 4px;
  right: 72px;
  z-index: ${m.k.active};

  @media only screen and (max-width: ${({theme:e})=>e.breakpoint.lg}px) {
    position: static;
    margin-top: 4px;
  }

  @media only screen and (max-width: ${({theme:e})=>e.breakpoint.xs}px) {
    width: 100%;
  }
`;function oe(e){return(0,u.useMemo)((()=>{const t=e?.token?.market,i=t?.priceHistory?.filter(p.yL),n=t?.price?.value;if(Array.isArray(i)&&void 0!==n){const e=Date.now()/1e3;return[...i,{timestamp:e,value:n}]}return i}),[e])}function re({chartType:e,priceChartType:t,timePeriod:i,onChangeTimePeriod:s,tokenPriceQuery:a,extractedColor:o}){const d=(0,h.e)();return a?(0,n.jsx)(u.Suspense,{fallback:(0,n.jsx)(c.sT,{}),children:(0,n.jsxs)(se,{isInfoTDPEnabled:d,"data-testid":"chart-container",children:[(0,n.jsx)(de,{chartType:e,priceChartType:t,timePeriod:i,tokenPriceQuery:a,extractedColor:o}),d?(0,n.jsx)(ae,{children:(0,n.jsx)(r.Z,{timePeriod:i,onChangeTimePeriod:s})}):(0,n.jsx)(r.Z,{timePeriod:i,onChangeTimePeriod:s})]})}):(0,n.jsx)(c.sT,{})}function de({chartType:e,priceChartType:t,timePeriod:i,tokenPriceQuery:r,extractedColor:c}){const p=oe(r);if(!(0,h.e)())return(0,n.jsx)(s.Z,{children:({width:e})=>(0,n.jsx)(ie,{prices:p,width:e,height:ne,timePeriod:i})});switch(e){case d.oX.PRICE:return(0,n.jsx)(a.aU,{prices:p,height:ne,type:t});case d.oX.VOLUME:return(0,n.jsx)(l.x,{volumes:p,height:ne,color:c,timePeriod:i});case d.oX.TVL:return(0,n.jsx)(o.f,{height:ne});default:return null}}},2715:(e,t,i)=>{i.d(t,{P:()=>C});var n,s=i(21339),a=i(39491);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},o.apply(this,arguments)}function r(e,t){let{title:i,titleId:s,...r}=e;return a.createElement("svg",o({width:16,height:16,viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},r),i?a.createElement("title",{id:s},i):null,n||(n=a.createElement("path",{d:"M8.41667 15.5H7.58333C6.75 15.5 6.33333 15.0833 6.33333 14.25V1.75C6.33333 0.916667 6.75 0.5 7.58333 0.5H8.41667C9.25 0.5 9.66667 0.916667 9.66667 1.75V14.25C9.66667 15.0833 9.25 15.5 8.41667 15.5ZM15.5 8.83333V3.83333C15.5 3 15.0833 2.58333 14.25 2.58333H13.4167C12.5833 2.58333 12.1667 3 12.1667 3.83333V8.83333C12.1667 9.66667 12.5833 10.0833 13.4167 10.0833H14.25C15.0833 10.0833 15.5 9.66667 15.5 8.83333ZM3.83333 10.9167V7.58333C3.83333 6.75 3.41667 6.33333 2.58333 6.33333H1.75C0.916667 6.33333 0.5 6.75 0.5 7.58333V10.9167C0.5 11.75 0.916667 12.1667 1.75 12.1667H2.58333C3.41667 12.1667 3.83333 11.75 3.83333 10.9167Z",fill:"currentColor"})))}const d=a.forwardRef(r);i.p;var l;function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},c.apply(this,arguments)}function h(e,t){let{title:i,titleId:n,...s}=e;return a.createElement("svg",c({width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},s),i?a.createElement("title",{id:n},i):null,l||(l=a.createElement("path",{d:"M23.02 9C23.02 10.104 22.124 11 21.02 11C20.738 11 20.47 10.94 20.226 10.835L16.855 14.2061C16.96 14.4501 17.021 14.717 17.021 15C17.021 16.104 16.125 17 15.021 17C13.917 17 13.016 16.104 13.016 15C13.016 14.727 13.071 14.467 13.17 14.229L9.787 10.8459C9.551 10.9439 9.292 10.999 9.021 10.999C8.739 10.999 8.471 10.939 8.22701 10.834L4.856 14.2051C4.961 14.4491 5.022 14.716 5.022 14.999C5.022 16.103 4.126 16.999 3.022 16.999C1.918 16.999 1.017 16.103 1.017 14.999C1.017 13.895 1.90699 12.999 3.01199 12.999H3.022C3.294 12.999 3.55199 13.0541 3.78799 13.1521L7.172 9.76807C7.073 9.53107 7.017 9.27102 7.017 8.99902C7.017 7.89502 7.90699 6.99902 9.01199 6.99902H9.022C10.126 6.99902 11.022 7.89502 11.022 8.99902C11.022 9.28102 10.962 9.54897 10.856 9.79297L14.224 13.1609C14.465 13.0569 14.731 12.999 15.011 12.999H15.021C15.293 12.999 15.551 13.0541 15.787 13.1521L19.171 9.76807C19.072 9.53107 19.016 9.27102 19.016 8.99902C19.016 7.89502 19.906 6.99902 21.011 6.99902H21.021C22.125 7.00002 23.02 7.896 23.02 9Z",fill:"currentColor"})))}const p=a.forwardRef(h);i.p;var u=i(56374),x=i(2528),m=i(33552),f=i(92887);const g=[{value:u.E4.LINE,display:(0,s.jsx)(p,{})},{value:u.E4.CANDLESTICK,display:(0,s.jsx)(d,{})}],C=({currentChartType:e,onChartTypeChange:t})=>{const i=(0,m.useTheme)();return(0,s.jsx)(f.K,{$transitionDuration:i.transition.duration.fast,children:(0,s.jsx)(x.Z,{options:g,currentSelected:e,onSelectOption:t})})}},3184:(e,t,i)=>{i.d(t,{Z:()=>d});var n=i(21339),s=i(25400),a=i(33552),o=i(10548);const r=(0,a.default)(o.dL).withConfig({displayName:"Resource__ResourceLink",componentId:"sc-fcee131f-0"})`
  display: flex;
  color: ${({theme:e})=>e.accent1};
  font-weight: 535;
  font-size: 14px;
  line-height: 20px;
  gap: 4px;
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${({theme:e})=>(0,s._j)(.1,e.accent1)};
    text-decoration: none;
  }
`;function d({name:e,link:t}){return(0,n.jsxs)(r,{href:t,children:[e,(0,n.jsx)("sup",{children:"\u2197"})]})}},77489:(e,t,i)=>{i.d(t,{WQ:()=>V,sT:()=>ue,QN:()=>B,Gy:()=>R,lJ:()=>fe,Pn:()=>W,yn:()=>z,ZP:()=>me});var n=i(21339),s=i(88693),a=i(56415),o=i(17358),r=i(64784),d=i(33552),l=i(10548),c=i(73474);const h=(0,d.default)(c.nR).withConfig({displayName:"SwapSkeleton__StyledArrowWrapper",componentId:"sc-3cf12579-0"})`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
`,p=d.default.div.withConfig({displayName:"SwapSkeleton__LoadingWrapper",componentId:"sc-3cf12579-1"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: space-between;

  padding: 8px;
  border: ${({theme:e})=>`1px solid ${e.surface3}`};
  border-radius: 16px;
  background-color: ${({theme:e})=>e.surface1};
`,u=d.default.div.withConfig({displayName:"SwapSkeleton__Blob",componentId:"sc-3cf12579-2"})`
  background-color: ${({theme:e})=>e.surface2};
  border-radius: ${({radius:e})=>(e??4)+"px"};
  height: 56px;
  width: ${({width:e})=>e?e+"px":"100%"};
`,x=(0,d.default)(u).withConfig({displayName:"SwapSkeleton__ModuleBlob",componentId:"sc-3cf12579-3"})`
  background-color: ${({theme:e})=>e.surface3};
  height: 36px;
`,m=d.default.div.withConfig({displayName:"SwapSkeleton__TitleColumn",componentId:"sc-3cf12579-4"})`
  padding: 8px;
`,f=d.default.div.withConfig({displayName:"SwapSkeleton__Row",componentId:"sc-3cf12579-5"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,g=d.default.div.withConfig({displayName:"SwapSkeleton__InputColumn",componentId:"sc-3cf12579-6"})`
  display: flex;
  flex-flow: column;
  background-color: ${({theme:e})=>e.surface2};
  border-radius: 16px;
  display: flex;
  gap: 30px;
  padding: 48px 12px;
`,C=d.default.div.withConfig({displayName:"SwapSkeleton__OutputWrapper",componentId:"sc-3cf12579-7"})`
  position: relative;
`;function j(){return(0,n.jsx)(m,{children:(0,n.jsx)(l.Tv.SubHeader,{children:(0,n.jsx)(s.cC,{id:"vH2C/2"})})})}function y(){return(0,n.jsxs)(f,{children:[(0,n.jsx)(x,{width:60}),(0,n.jsx)(x,{width:100,radius:16})]})}function w(){return(0,n.jsx)(u,{radius:16})}function b(){const e=(0,d.useTheme)();return(0,n.jsxs)(p,{children:[(0,n.jsx)(j,{}),(0,n.jsx)(g,{children:(0,n.jsx)(y,{})}),(0,n.jsxs)(C,{children:[(0,n.jsx)(h,{clickable:!1,children:(0,n.jsx)(c.Gz,{children:(0,n.jsx)(r.Z,{size:"16",color:e.neutral3})})}),(0,n.jsx)(g,{children:(0,n.jsx)(y,{})})]}),(0,n.jsx)(w,{})]})}var v=i(379),k=i(89691),_=i(83787),S=i(12973),T=i(96439),I=i(18910),P=i(92686),N=i(39681),L=i(96193),$=i(51530),E=i(54359),A=i(96334),D=i(66496),O=i(83748),H=i(71587),M=i(46502);const R=d.default.div.withConfig({displayName:"Skeleton__TokenDetailsLayout",componentId:"sc-679bdc48-0"})`
  display: flex;
  padding: 0 16px 52px;
  justify-content: center;
  width: 100%;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    gap: 16px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    gap: 40px;
    padding: 48px 20px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.xl}px) {
    gap: 60px;
  }
`,V=d.default.div.withConfig({displayName:"Skeleton__LeftPanel",componentId:"sc-679bdc48-1"})`
  flex: 1;
  max-width: 780px;
  overflow: hidden;
`,B=d.default.div.withConfig({displayName:"Skeleton__RightPanel",componentId:"sc-679bdc48-2"})`
  display: none;
  flex-direction: column;
  gap: ${({isInfoTDPEnabled:e})=>e?40:20}px;
  width: ${360}px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.lg}px) {
    display: flex;
  }
`,Z=d.default.div.withConfig({displayName:"Skeleton__LoadingChartContainer",componentId:"sc-679bdc48-3"})`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  height: 100%;
  padding-bottom: 66px;
  overflow: hidden;
  margin-bottom: ${({isInfoTDPEnabled:e})=>e?"14":"44"}px;
`,W=d.default.div.withConfig({displayName:"Skeleton__TokenInfoContainer",componentId:"sc-679bdc48-4"})`
  display: flex;
  justify-content: space-between;
  align-items: ${({isInfoTDPEnabled:e})=>e?"flex-start":"center"};
  margin-bottom: ${({isInfoTDPEnabled:e})=>e?"12":"4"}px;
  gap: 20px;
  ${L.Sj};
  animation-duration: ${({theme:e})=>e.transition.duration.medium};
`,z=d.default.div.withConfig({displayName:"Skeleton__TokenNameCell",componentId:"sc-679bdc48-5"})`
  display: flex;
  gap: 8px;
  font-size: 20px;
  line-height: 28px;
  align-items: center;

  ${({isInfoTDPEnabled:e})=>e&&d.css`
      padding-top: 4px;
      min-width: 32px;
      @media screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
        flex-direction: column;
        align-items: flex-start;
      }
    `}
`,F=(0,d.default)(A.X).withConfig({displayName:"Skeleton__DetailBubble",componentId:"sc-679bdc48-6"})`
  height: 16px;
  width: 180px;
`,U=(0,d.default)(F).withConfig({displayName:"Skeleton__SquaredBubble",componentId:"sc-679bdc48-7"})`
  height: 32px;
  border-radius: 8px;
`,K=(0,d.default)(F).withConfig({displayName:"Skeleton__NavBubble",componentId:"sc-679bdc48-8"})`
  width: 169px;
`,Y=(0,d.default)(F).withConfig({displayName:"Skeleton__TokenLogoBubble",componentId:"sc-679bdc48-9"})`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`,X=(0,d.default)(F).withConfig({displayName:"Skeleton__TitleBubble",componentId:"sc-679bdc48-10"})`
  width: 136px;
`,Q=(0,d.default)(U).withConfig({displayName:"Skeleton__PriceBubble",componentId:"sc-679bdc48-11"})`
  margin-top: 4px;
  height: 40px;
`,G=(0,d.default)(U).withConfig({displayName:"Skeleton__SectionBubble",componentId:"sc-679bdc48-12"})`
  width: 120px;
`,q=(0,d.default)(F).withConfig({displayName:"Skeleton__StatTitleBubble",componentId:"sc-679bdc48-13"})`
  width: 80px;
  margin-bottom: 4px;
`,J=(0,d.default)(U).withConfig({displayName:"Skeleton__StatBubble",componentId:"sc-679bdc48-14"})`
  width: 116px;
`,ee=(0,d.default)(F).withConfig({displayName:"Skeleton__WideBubble",componentId:"sc-679bdc48-15"})`
  margin-bottom: 6px;
  width: 100%;
`,te=(0,d.default)(ee).withConfig({displayName:"Skeleton__ThinTitleBubble",componentId:"sc-679bdc48-16"})`
  width: 120px;
`,ie=(0,d.default)(ee).withConfig({displayName:"Skeleton__HalfWideBubble",componentId:"sc-679bdc48-17"})`
  width: 50%;
`,ne=d.default.div.withConfig({displayName:"Skeleton__StatsLoadingContainer",componentId:"sc-679bdc48-18"})`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`,se=d.default.div.withConfig({displayName:"Skeleton__ExtraDetailsContainer",componentId:"sc-679bdc48-19"})`
  padding-top: 24px;
`,ae=d.default.div.withConfig({displayName:"Skeleton__ChartAnimation",componentId:"sc-679bdc48-20"})`
  animation: wave 8s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  display: flex;
  overflow: hidden;
  margin-top: 90px;

  @keyframes wave {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -800px;
    }
  }
`,oe=d.default.div.withConfig({displayName:"Skeleton__Space",componentId:"sc-679bdc48-21"})`
  height: ${({heightSize:e})=>`${e}px`};
`,re=d.css`
  color: ${({theme:e})=>e.neutral3};
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  text-decoration: none;
`,de=(0,d.default)(o.ZP).withConfig({displayName:"Skeleton__LoadingFooterHeaderContainer",componentId:"sc-679bdc48-22"})`
  align-items: center;
  ${re}

  @media screen and (min-width: ${N.j$.md}px) {
    padding: 16px 90px 8px 0;
    position: fixed;
    bottom: 0;
    right: 0;
    justify-content: flex-end;
  }
`,le=d.default.h1.withConfig({displayName:"Skeleton__LoadingFooterHeader",componentId:"sc-679bdc48-23"})`
  ${re}
`,ce=d.default.a.withConfig({displayName:"Skeleton__LoadingFooterLink",componentId:"sc-679bdc48-24"})`
  ${re}
  ${l.iV}
`;function he(e,t,i,a){let o="";o=e?.name&&e?.symbol?`${e?.name} (${e?.symbol})`:e?.name?e?.name:e?.symbol?e?.symbol:t||"";const r=a?` on ${(0,$.capitalize)(a)}`:"",d=e?.isNative?o:(0,n.jsx)(ce,{href:(0,E.E)(i,t,E.r.TOKEN),target:"_blank",rel:"noopener noreferrer",children:o});return(0,n.jsx)(s.cC,{id:"xRUohS",values:{tokenLink:d,chainSuffix:r}})}function pe(){const e=(0,d.useTheme)();return(0,n.jsx)("svg",{width:"416",height:"160",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M 0 80 Q 104 10, 208 80 T 416 80",stroke:e.surface3,fill:"transparent",strokeWidth:"2"})})}function ue(){const e=(0,k.e)();return(0,n.jsxs)(O.BO,{isInfoTDPEnabled:e,children:[(0,n.jsx)(l.Tv.HeadlineLarge,{children:(0,n.jsx)(Q,{})}),(0,n.jsx)(oe,{heightSize:6}),(0,n.jsx)(Z,{isInfoTDPEnabled:e,children:(0,n.jsx)("div",{children:(0,n.jsxs)(ae,{children:[(0,n.jsx)(pe,{}),(0,n.jsx)(pe,{}),(0,n.jsx)(pe,{}),(0,n.jsx)(pe,{}),(0,n.jsx)(pe,{})]})})})]})}function xe(){return(0,n.jsxs)(M.h6,{children:[(0,n.jsx)(G,{}),(0,n.jsxs)(ne,{children:[(0,n.jsxs)(M.sy,{children:[(0,n.jsxs)(M.Fy,{children:[(0,n.jsx)(q,{}),(0,n.jsx)(J,{})]}),(0,n.jsxs)(M.Fy,{children:[(0,n.jsx)(q,{}),(0,n.jsx)(J,{})]})]}),(0,n.jsxs)(M.sy,{children:[(0,n.jsxs)(M.Fy,{children:[(0,n.jsx)(q,{}),(0,n.jsx)(J,{})]}),(0,n.jsxs)(M.Fy,{children:[(0,n.jsx)(q,{}),(0,n.jsx)(J,{})]})]})]})]})}function me(){const{chainName:e,tokenAddress:t}=(0,P.UO)(),i=(0,v.C)(),o=(0,k.e)(),r=(0,_.Tz)((0,_.Qj)(e)),d=(0,S.U8)("NATIVE"===t?"ETH":t,r);return(0,n.jsxs)(V,{children:[o?(0,n.jsxs)(a.zG,{isInfoTDPEnabled:!0,"aria-label":"breadcrumb-nav",children:[(0,n.jsxs)(a.yY,{to:`/explore/${e}`,children:[(0,n.jsx)(s.cC,{id:"8tjQCz"})," ",(0,n.jsx)(T.Z,{size:14})]}),(0,n.jsxs)(a.yY,{to:`/explore/tokens/${e}`,children:[(0,n.jsx)(s.cC,{id:"6RDwJM"})," ",(0,n.jsx)(T.Z,{size:14})]}),(0,n.jsx)(K,{})]}):(0,n.jsx)(a.zG,{children:(0,n.jsxs)(a.yY,{to:(i?"/explore":"")+(e?`/tokens/${e}`:"/tokens"),children:[(0,n.jsx)(I.Z,{size:14})," Tokens"]})}),(0,n.jsx)(W,{children:(0,n.jsxs)(z,{children:[(0,n.jsx)(Y,{}),(0,n.jsx)(X,{})]})}),(0,n.jsx)(ue,{}),(0,n.jsx)(oe,{heightSize:4}),(0,n.jsx)(xe,{}),(0,n.jsx)(H.Hr,{}),(0,n.jsx)(D.M7,{children:(0,n.jsx)(D.d5,{children:(0,n.jsx)(G,{})})}),(0,n.jsx)(ee,{}),(0,n.jsx)(ee,{}),(0,n.jsx)(ie,{style:{marginBottom:"24px"}}),(0,n.jsxs)(se,{children:[(0,n.jsx)(te,{}),(0,n.jsx)(ie,{})]}),(0,n.jsxs)(se,{children:[(0,n.jsx)(te,{}),(0,n.jsx)(ie,{})]}),t&&(0,n.jsxs)(de,{gap:"xs",children:[(0,n.jsx)(s.cC,{id:"yQE2r9"}),(0,n.jsx)(le,{children:he(d,t,r,e)})]})]})}function fe(){return(0,n.jsxs)(R,{children:[(0,n.jsx)(me,{}),(0,n.jsx)(B,{children:(0,n.jsx)(b,{})})]})}},46502:(e,t,i)=>{i.d(t,{Fy:()=>m,ZP:()=>v,h6:()=>w,sy:()=>g});var n=i(21339),s=i(88693),a=i(57777),o=i(53609),r=i(89691),d=i(33552),l=i(10548),c=i(96193),h=i(19369),p=i(56184),u=i(88912),x=i(48207);const m=d.default.div.withConfig({displayName:"StatsSection__StatWrapper",componentId:"sc-4533e32-0"})`
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  min-width: 121px;
  flex: 1;
  padding-top: 24px;
  padding-bottom: ${({isInfoTDPEnabled:e})=>e?"0px":"24px"};

  @media screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    min-width: 168px;
  }
`,f=d.default.div.withConfig({displayName:"StatsSection__TokenStatsSection",componentId:"sc-4533e32-1"})`
  display: flex;
  flex-wrap: wrap;
`,g=d.default.div.withConfig({displayName:"StatsSection__StatPair",componentId:"sc-4533e32-2"})`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`,C=(0,d.default)(l.Tv.MediumHeader).withConfig({displayName:"StatsSection__Header",componentId:"sc-4533e32-3"})`
  font-size: 28px !important;
  padding-top: ${({isInfoTDPEnabled:e})=>e?"40":"24"}px;
`,j=d.default.div.withConfig({displayName:"StatsSection__StatPrice",componentId:"sc-4533e32-4"})`
  margin-top: 4px;
  font-size: 28px;
  color: ${({theme:e})=>e.neutral1};
`,y=d.default.div.withConfig({displayName:"StatsSection__NoData",componentId:"sc-4533e32-5"})`
  color: ${({theme:e})=>e.neutral3};
  ${({isInfoTDPEnabled:e})=>e&&"padding-top: 40px;"}
`,w=d.default.div.withConfig({displayName:"StatsSection__StatsWrapper",componentId:"sc-4533e32-6"})`
  gap: 16px;
  ${c.Sj}
`;function b({dataCy:e,value:t,title:i,description:s}){const{formatNumber:o}=(0,h.Gb)(),d=(0,r.e)();return(0,n.jsxs)(m,{"data-cy":`${e}`,isInfoTDPEnabled:d,children:[(0,n.jsx)(a.ud,{text:s,children:i}),(0,n.jsx)(j,{children:o({input:t,type:h.sw.FiatTokenStats})})]})}function v(e){const{chainId:t,address:i,tokenQueryData:a}=e,{label:d,infoLink:c}=(0,o.bt)(t),h=(0,r.e)(),m=a?.market,j=a?.project?.markets?.[0],v=j?.fullyDilutedValuation?.value,k=j?.marketCap?.value,_=m?.totalValueLocked?.value,S=m?.volume24H?.value,T=m?.priceHigh52W?.value,I=m?.priceLow52W?.value;return(h?_||v||k||S:_||S||I||T)?(0,n.jsxs)(w,{"data-testid":"token-details-stats",children:[(0,n.jsx)(C,{isInfoTDPEnabled:h,children:(0,n.jsx)(s.cC,{id:"29Hx9U"})}),(0,n.jsx)(f,{children:h?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(g,{children:[(0,n.jsx)(b,{dataCy:"tvl",value:_,description:x.h8[u.PU.TOTAL_VALUE_LOCKED],title:(0,n.jsx)(s.cC,{id:"FHKsZF"})}),(0,n.jsx)(b,{dataCy:"market-cap",value:k,description:(0,n.jsx)(s.cC,{id:"eae2XY"}),title:(0,n.jsx)(s.cC,{id:"6dfcZB"})})]}),(0,n.jsxs)(g,{children:[(0,n.jsx)(b,{dataCy:"fdv",value:v,description:x.h8[u.PU.FULLY_DILUTED_VALUATION],title:(0,n.jsx)(s.cC,{id:"1ZpWKE"})}),(0,n.jsx)(b,{dataCy:"volume-24h",value:S,description:(0,n.jsx)(s.cC,{id:"TZMUCd"}),title:(0,n.jsx)(s.cC,{id:"x0PCTL"})})]})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(g,{children:[(0,n.jsx)(b,{dataCy:"tvl",value:_,description:x.h8[u.PU.TOTAL_VALUE_LOCKED],title:(0,n.jsx)(s.cC,{id:"FHKsZF"})}),(0,n.jsx)(b,{dataCy:"volume-24h",value:S,description:(0,n.jsx)(s.cC,{id:"QENWO5"}),title:(0,n.jsx)(s.cC,{id:"0RweTm"})})]}),(0,n.jsxs)(g,{children:[(0,n.jsx)(b,{dataCy:"52w-low",value:I,title:(0,n.jsx)(s.cC,{id:"Dw2kwD"})}),(0,n.jsx)(b,{dataCy:"52w-high",value:T,title:(0,n.jsx)(s.cC,{id:"eh5V57"})})]})]})})]}):p.N0.includes(t)?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(C,{isInfoTDPEnabled:h,children:(0,n.jsx)(s.cC,{id:"29Hx9U"})}),(0,n.jsx)(l.Tv.BodySecondary,{paddingTop:"12px",children:(0,n.jsx)(s.cC,{id:"9BeptC",values:{label:d},components:{0:(0,n.jsx)(l.dL,{color:"currentColor",href:`${c}tokens/${i}`})}})})]}):(0,n.jsx)(y,{isInfoTDPEnabled:h,children:"No stats available"})}},71587:(e,t,i)=>{i.d(t,{Hr:()=>a,Nt:()=>d,aZ:()=>o,ke:()=>l,ou:()=>r});var n=i(25400),s=i(33552);const a=s.default.hr.withConfig({displayName:"shared__Hr",componentId:"sc-90493d31-0"})`
  background-color: ${({theme:e})=>e.surface3};
  border: none;
  height: 0.5px;
`,o=s.default.p.withConfig({displayName:"shared__NoInfoAvailable",componentId:"sc-90493d31-1"})`
  color: ${({theme:e})=>e.neutral3};
  font-weight: 485;
  font-size: 16px;
`,r=s.default.div.withConfig({displayName:"shared__TruncateDescriptionButton",componentId:"sc-90493d31-2"})`
  color: ${({theme:e})=>e.neutral2};
  font-weight: 485;
  font-size: 0.85em;
  padding-top: 0.5em;

  &:hover,
  &:focus {
    color: ${({theme:e})=>(0,n._j)(.1,e.neutral2)};
    cursor: pointer;
  }
`,d=(e,t=l)=>{let i=e.slice(0,t);return i=`${i.slice(0,Math.min(i.length,i.lastIndexOf(" ")))}...`,i},l=400}}]);
//# sourceMappingURL=6935.af55e76b.chunk.js.map