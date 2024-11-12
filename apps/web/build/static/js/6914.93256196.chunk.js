"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[6914],{13084:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Reflect=void 0,t.Reflect=function(){return null}},36842:function(e,t,i){var n=this&&this.__extends||function(){var e=function(t,i){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])},e(t,i)};return function(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function n(){this.constructor=t}e(t,i),t.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}(),o=this&&this.__read||function(e,t){var i="function"==typeof Symbol&&e[Symbol.iterator];if(!i)return e;var n,o,r=i.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=r.next()).done;)a.push(n.value)}catch(s){o={error:s}}finally{try{n&&!n.done&&(i=r.return)&&i.call(r)}finally{if(o)throw o.error}}return a};Object.defineProperty(t,"__esModule",{value:!0}),t.assert=t.AssertionError=void 0;var r=i(92141),a=i(60897),s=function(e){function t(t){var i=this.constructor,n=e.call(this,"Wrong assertion encountered"+(t?': "'.concat(t,'"'):""))||this;if(Object.setPrototypeOf(n,i.prototype),!n.stack)return n;try{(0,r.overwriteReadonlyProp)(n,"stack",n.stack.split("\n").filter((function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var i=o(e,2)[1];return 1!==i&&2!==i})).join("\n"))}catch(a){}return n}return n(t,e),t}(Error);t.AssertionError=s,t.assert=function(e,t){if(0===arguments.length&&(e=!0),void 0===a.assertIsRefWrapper.ref){if(!e)throw new s(t)}else a.assertIsRefWrapper.ref=void 0}},22348:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.exclude=void 0,t.exclude=function(e){var t=e instanceof Object?function(t){return e.indexOf(t)<0}:function(t){return t!==e};return function(e){return t(e)}}},48753:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.flip=void 0,t.flip=function(e,t){if(void 0!==e[t])return e[t]=!e[t]}},58633:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.id=void 0;t.id=function(e){return e}},51530:function(e,t,i){var n=this&&this.__createBinding||(Object.create?function(e,t,i,n){void 0===n&&(n=i);var o=Object.getOwnPropertyDescriptor(t,i);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,n,o)}:function(e,t,i,n){void 0===n&&(n=i),e[n]=t[i]}),o=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||n(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),o(i(36842),t),o(i(22348),t),o(i(48753),t),o(i(58633),t),o(i(26739),t),o(i(30723),t),o(i(74383),t),o(i(81768),t),o(i(56802),t),o(i(59921),t),o(i(70168),t),o(i(13084),t),o(i(85735),t),o(i(41805),t)},81768:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.is=void 0;var n=i(60897),o=["Wrong usage of the ".concat(r.name," function refer to"),"https://docs.tsafe.dev/".concat(r.name.toLowerCase())].join(" ");function r(e){var t={};if(void 0!==n.assertIsRefWrapper.ref)throw n.assertIsRefWrapper.ref=void 0,new Error(o);return n.assertIsRefWrapper.ref=t,Promise.resolve().then((function(){if(n.assertIsRefWrapper.ref===t)throw new Error(o)})),null}t.is=r},26739:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isPromiseLike=void 0,t.isPromiseLike=function(e){return"function"==typeof(null==e?void 0:e.then)}},92141:function(e,t,i){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var o in t=arguments[i])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.overwriteReadonlyProp=void 0;var o=i(36842),r=i(81768);t.overwriteReadonlyProp=function(e,t,i){try{e[t]=i}catch(d){}if(e[t]===i)return i;var a=void 0,s=Object.getOwnPropertyDescriptor(e,t)||{enumerable:!0,configurable:!0};if(s.get)throw new Error("Probably a wrong ides to overwrite ".concat(String(t)," getter"));try{Object.defineProperty(e,t,n(n({},s),{value:i}))}catch(l){(0,o.assert)((0,r.is)(l)),a=l}if(e[t]!==i)throw a||new Error("Can't assign");return i}},70168:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.noUndefined=void 0,t.noUndefined=function(e){var t={};for(var i in e)void 0!==e[i]&&(t[i]=e[i]);return t}},56802:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.objectEntries=void 0,t.objectEntries=function(e){return Object.entries(e)}},59921:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.objectFromEntries=void 0,t.objectFromEntries=function(e){return Object.fromEntries(e)}},30723:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.objectKeys=void 0,t.objectKeys=function(e){return Object.keys(e)}},74383:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.typeGuard=void 0,t.typeGuard=function(e,t){return t}},41805:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.uncapitalize=void 0,t.uncapitalize=function(e){return e.charAt(0).toLowerCase()+e.slice(1)}},60897:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.assertIsRefWrapper=void 0;var n=i(58633);t.assertIsRefWrapper={ref:(0,n.id)(void 0)}},24051:(e,t,i)=>{i.d(t,{Tg:()=>m,ll:()=>x,r4:()=>h});var n=i(21339),o=(i(79357),i(16685)),r=i(1374),a=i(56374),s=i(98878),d=i(34182),l=(i(39491),i(33552)),c=i(17513),p=i(19369);function u(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class h extends o.B{updateOptions(e){super.updateOptions(e);const{data:t,theme:i,type:n}=e;this.type!==n&&(this.type=e.type,this.api.removeSeries(this.series),this.series=this.type===a.E4.LINE?this.api.addAreaSeries():this.api.addCandlestickSeries(),this.series.setData(t),this.minPriceLine=this.series.createPriceLine({price:0}),this.maxPriceLine=this.series.createPriceLine({price:0})),this.data!==t&&(this.data=t,this.series.setData(t),this.fitContent());const{min:o,max:s}=(0,r.xV)(t);this.series.applyOptions({priceLineVisible:!1,lastValueVisible:!1,lineType:t.length<20?d.SP.WithSteps:d.SP.Curved,lineWidth:2,lineColor:i.accent1,topColor:(0,c.j)(12,i.accent1),bottomColor:(0,c.j)(12,i.accent1),crosshairMarkerRadius:5,crosshairMarkerBorderColor:(0,c.j)(30,i.accent1),crosshairMarkerBorderWidth:3,upColor:i.success,wickUpColor:i.success,downColor:i.critical,wickDownColor:i.critical,borderVisible:!1});const l={color:i.surface3,lineWidth:2,lineStyle:d.TD.Dashed,axisLabelColor:i.neutral3,axisLabelTextColor:i.neutral2};this.minPriceLine.applyOptions({price:o,...l}),this.maxPriceLine.applyOptions({price:s,...l})}constructor(e,t){super(e,t),u(this,"series",void 0),u(this,"type",void 0),u(this,"minPriceLine",void 0),u(this,"maxPriceLine",void 0),this.type=t.type,this.series=this.type===a.E4.LINE?this.api.addAreaSeries():this.api.addCandlestickSeries(),this.series.setData(this.data),this.minPriceLine=this.series.createPriceLine({price:0}),this.maxPriceLine=this.series.createPriceLine({price:0}),this.updateOptions(t),this.fitContent()}}const f=l.default.div.withConfig({displayName:"PriceChart__DeltaContainer",componentId:"sc-e495120e-0"})`
  height: 16px;
  display: flex;
  align-items: center;
  color: ${({theme:e})=>e.neutral2};
  gap: 4px;
`,x=e=>{if(!e)return[];let t=0,i=0;const n=e.map(((n,o)=>{const r=o>0?e[o-1].value:.9992*n.value,a=n.value,s=n.value+.5*Math.abs(r-a),d=n.value-.5*Math.abs(a-r);return e[t].value>n.value&&(t=o),e[i].value<n.value&&(i=o),{value:n.value,time:n.timestamp,open:r,close:a,high:s,low:d}}));return n[t].value=n[t].low,n[i].value=n[i].high,n};function m({startingPrice:e,endingPrice:t,noColor:i}){const o=(0,s.YD)(e.close??e.value,t.close??t.value),{formatDelta:r}=(0,p.Gb)();return(0,n.jsxs)(f,{children:[(0,n.jsx)(s.Kx,{delta:o,noColor:i}),r(o)]})}},88584:(e,t,i)=>{i.d(t,{P:()=>o});var n=i(21339);const o=e=>(0,n.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"transparent",...e,children:[(0,n.jsx)("path",{d:"M5.08042 8.66148C5.08043 8.58693 5.09517 8.51313 5.12378 8.44429C5.1524 8.37546 5.19432 8.31297 5.24716 8.26038C5.30001 8.2078 5.3627 8.16617 5.43167 8.13788C5.50064 8.1096 5.57452 8.09522 5.64907 8.09557L6.59187 8.09865C6.74218 8.09865 6.88635 8.15836 6.99263 8.26465C7.09893 8.37094 7.15865 8.5151 7.15865 8.66543V12.2303C7.26478 12.1988 7.4011 12.1652 7.55026 12.1301C7.65387 12.1058 7.74621 12.0471 7.8123 11.9637C7.87839 11.8803 7.91434 11.777 7.91432 11.6705V7.24848C7.91432 7.09814 7.97403 6.95397 8.08032 6.84766C8.1866 6.74135 8.33077 6.68162 8.4811 6.68158H9.42577C9.57609 6.68162 9.72026 6.74135 9.82655 6.84766C9.93284 6.95397 9.99255 7.09814 9.99255 7.24848V11.3526C9.99255 11.3526 10.2291 11.2569 10.4595 11.1596C10.545 11.1234 10.6181 11.0629 10.6694 10.9854C10.7208 10.908 10.7482 10.8172 10.7483 10.7242V5.83152C10.7483 5.68122 10.808 5.53707 10.9143 5.43078C11.0206 5.32449 11.1647 5.26478 11.315 5.26474H12.2597C12.41 5.26474 12.5542 5.32445 12.6604 5.43075C12.7667 5.53704 12.8265 5.6812 12.8265 5.83152V9.86056C13.6455 9.267 14.4754 8.55315 15.1341 7.69474C15.2297 7.57015 15.2929 7.42383 15.3181 7.26887C15.3434 7.1139 15.3299 6.95509 15.2788 6.8066C14.9739 5.9294 14.4894 5.12551 13.856 4.44636C13.2226 3.76722 12.4544 3.22777 11.6005 2.86256C10.7467 2.49734 9.82602 2.31439 8.89742 2.32542C7.96882 2.33645 7.05275 2.54121 6.20783 2.9266C5.36291 3.31199 4.60774 3.86952 3.99066 4.56352C3.37358 5.25751 2.90817 6.07269 2.62422 6.95689C2.34027 7.84107 2.24403 8.7748 2.34166 9.69832C2.43929 10.6218 2.72863 11.5148 3.19118 12.3201C3.27176 12.459 3.39031 12.572 3.53289 12.6459C3.67548 12.7198 3.83618 12.7514 3.99614 12.7372C4.17482 12.7215 4.3973 12.6992 4.66181 12.6681C4.77695 12.655 4.88326 12.6001 4.96048 12.5137C5.0377 12.4273 5.08043 12.3155 5.08053 12.1996L5.08042 8.66148Z",fill:e.fill??"#607BEE"}),(0,n.jsx)("path",{d:"M5.05957 14.3792C6.05531 15.1036 7.23206 15.5384 8.45961 15.6356C9.68716 15.7326 10.9176 15.4883 12.0149 14.9294C13.1122 14.3705 14.0334 13.519 14.6768 12.4691C15.3201 11.4191 15.6605 10.2116 15.6601 8.98024C15.6601 8.82658 15.653 8.67457 15.6428 8.52344C13.2041 12.1605 8.70139 13.8609 5.05978 14.3786",fill:e.fill??"#607BEE"})]})},66496:(e,t,i)=>{i.d(t,{M7:()=>f,d5:()=>x,ez:()=>j});var n=i(21339),o=i(88693),r=i(82032),a=i(53609),s=i(39491),d=i(33552),l=i(10548),c=i(96193),p=i(3184),u=i(71587);const h=d.default.div.withConfig({displayName:"About__TokenDescriptionContainer",componentId:"sc-2d95f369-0"})`
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  max-height: fit-content;
  line-height: 24px;
  white-space: pre-wrap;
`,f=d.default.div.withConfig({displayName:"About__AboutContainer",componentId:"sc-2d95f369-1"})`
  gap: 16px;
  padding: 24px 0px;
  ${c.Sj}
`,x=(0,d.default)(l.Tv.MediumHeader).withConfig({displayName:"About__AboutHeader",componentId:"sc-2d95f369-2"})`
  font-size: 28px !important;
`,m=d.default.div.withConfig({displayName:"About__ResourcesContainer",componentId:"sc-2d95f369-3"})`
  display: flex;
  padding-top: 12px;
  gap: 14px;
`;function j({address:e,chainId:t,description:i,homepageUrl:d,twitterName:c}){const[j,g]=(0,s.useState)(!0),C=!!i&&i.length>u.ke,b=C&&j?(0,u.Nt)(i):i,{explorer:y,infoLink:v}=(0,a.bt)(t);return(0,n.jsxs)(f,{"data-testid":"token-details-about-section",children:[(0,n.jsx)(x,{children:(0,n.jsx)(o.cC,{id:"uyJsf6"})}),(0,n.jsxs)(h,{children:[!i&&(0,n.jsx)(u.aZ,{children:(0,n.jsx)(o.cC,{id:"kXI9SA"})}),(0,n.jsx)("p",{children:b}),C&&(0,n.jsx)(u.ou,{onClick:()=>g(!j),children:j?(0,n.jsx)(o.cC,{id:"fMPkxb"}):(0,n.jsx)(o.cC,{id:"vLyv1R"})})]}),(0,n.jsx)("br",{}),(0,n.jsx)(l.Tv.SubHeaderSmall,{children:(0,n.jsx)(o.cC,{id:"Rj01Fz"})}),(0,n.jsxs)(m,{"data-cy":"resources-container",children:[(0,n.jsx)(p.Z,{name:t===r.ChainId.MAINNET?"Etherscan":"Block Explorer",link:`${y}${"NATIVE"===e?"":"address/"+e}`}),(0,n.jsx)(p.Z,{name:"More analytics",link:`${v}tokens/${e}`}),d&&(0,n.jsx)(p.Z,{name:"Website",link:d}),c&&(0,n.jsx)(p.Z,{name:"Twitter",link:`https://twitter.com/${c}`})]})]})}},83748:(e,t,i)=>{i.d(t,{BO:()=>j,Y_:()=>g});var n=i(21339),o=(i(24051),i(71936),i(59332),i(56374),i(76139),i(77489),i(89691),i(83787)),r=i(39491),a=i(33552),s=i(48664),d=i(88693),l=i(66661),c=i(19530),p=i.n(c);i(44091);p()("0.8s"),l.p4T;l.cCj;var u;i(1374);!function(e){e[e.NO_DATA_AVAILABLE=0]="NO_DATA_AVAILABLE",e[e.NO_RECENT_VOLUME=1]="NO_RECENT_VOLUME",e[e.INVALID_CHART=2]="INVALID_CHART"}(u||(u={}));i(57777),i(84087),i(10548);var h=i(96193);i(19369),i(98878);const f={hour:"numeric",minute:"numeric",hour12:!0},x={month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0};var m;!function(e){e.TICK="tick",e.CROSSHAIR="crosshair"}(m||(m={}));o.XH.HOUR,m.TICK,m.CROSSHAIR,o.XH.DAY,m.TICK,m.CROSSHAIR,o.XH.WEEK,m.TICK,m.CROSSHAIR,o.XH.MONTH,m.TICK,m.CROSSHAIR,o.XH.YEAR,m.TICK,m.CROSSHAIR;a.default.div.withConfig({displayName:"OldPriceChart__ChartHeaderWrapper",componentId:"sc-e7eeb9c1-0"})`
  position: absolute;
  ${h.Sj};
  animation-duration: ${({theme:e})=>e.transition.duration.medium};
  ${({theme:e,stale:t})=>t&&`color: ${e.neutral2}`};
`,a.default.div.withConfig({displayName:"OldPriceChart__PriceContainer",componentId:"sc-e7eeb9c1-1"})`
  display: flex;
  gap: 6px;
  font-size: 24px;
  line-height: 44px;
`,a.default.div.withConfig({displayName:"OldPriceChart__DeltaContainer",componentId:"sc-e7eeb9c1-2"})`
  height: 16px;
  display: flex;
  align-items: center;
  margin-top: 4px;
  color: ${({theme:e})=>e.neutral2};
`;u.NO_DATA_AVAILABLE,d.cC,u.NO_RECENT_VOLUME,d.cC,u.INVALID_CHART,d.cC;const j=a.default.div.withConfig({displayName:"ChartSection__ChartContainer",componentId:"sc-3351ec9a-0"})`
  display: flex;
  flex-direction: column;
  ${({isInfoTDPEnabled:e})=>!e&&"height: 436px;"}
  ${({isInfoTDPEnabled:e})=>!e&&"margin-bottom: : 24px;"}
  align-items: flex-start;
  width: 100%;
  position: relative;
`;a.default.div.withConfig({displayName:"ChartSection__TimePeriodSelectorContainer",componentId:"sc-3351ec9a-1"})`
  position: absolute;
  top: 4px;
  right: 72px;
  z-index: ${s.k.active};

  @media only screen and (max-width: ${({theme:e})=>e.breakpoint.lg}px) {
    position: static;
    margin-top: 4px;
  }

  @media only screen and (max-width: ${({theme:e})=>e.breakpoint.xs}px) {
    width: 100%;
  }
`;function g(e){return(0,r.useMemo)((()=>{const t=e?.token?.market,i=t?.priceHistory?.filter(o.yL),n=t?.price?.value;if(Array.isArray(i)&&void 0!==n){const e=Date.now()/1e3;return[...i,{timestamp:e,value:n}]}return i}),[e])}},3184:(e,t,i)=>{i.d(t,{Z:()=>d});var n=i(21339),o=i(25400),r=i(33552),a=i(10548);const s=(0,r.default)(a.dL).withConfig({displayName:"Resource__ResourceLink",componentId:"sc-fcee131f-0"})`
  display: flex;
  color: ${({theme:e})=>e.accent1};
  font-weight: 535;
  font-size: 14px;
  line-height: 20px;
  gap: 4px;
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${({theme:e})=>(0,o._j)(.1,e.accent1)};
    text-decoration: none;
  }
`;function d({name:e,link:t}){return(0,n.jsxs)(s,{href:t,children:[e,(0,n.jsx)("sup",{children:"\u2197"})]})}},77489:(e,t,i)=>{i.d(t,{WQ:()=>B,sT:()=>he,QN:()=>W,Gy:()=>H,lJ:()=>me,Pn:()=>V,yn:()=>F,ZP:()=>xe});var n=i(21339),o=i(88693),r=i(33858),a=i(17358),s=i(64784),d=i(33552),l=i(10548),c=i(73474);const p=(0,d.default)(c.nR).withConfig({displayName:"SwapSkeleton__StyledArrowWrapper",componentId:"sc-3cf12579-0"})`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
`,u=d.default.div.withConfig({displayName:"SwapSkeleton__LoadingWrapper",componentId:"sc-3cf12579-1"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: space-between;

  padding: 8px;
  border: ${({theme:e})=>`1px solid ${e.surface3}`};
  border-radius: 16px;
  background-color: ${({theme:e})=>e.surface1};
`,h=d.default.div.withConfig({displayName:"SwapSkeleton__Blob",componentId:"sc-3cf12579-2"})`
  background-color: ${({theme:e})=>e.surface2};
  border-radius: ${({radius:e})=>(e??4)+"px"};
  height: 56px;
  width: ${({width:e})=>e?e+"px":"100%"};
`,f=(0,d.default)(h).withConfig({displayName:"SwapSkeleton__ModuleBlob",componentId:"sc-3cf12579-3"})`
  background-color: ${({theme:e})=>e.surface3};
  height: 36px;
`,x=d.default.div.withConfig({displayName:"SwapSkeleton__TitleColumn",componentId:"sc-3cf12579-4"})`
  padding: 8px;
`,m=d.default.div.withConfig({displayName:"SwapSkeleton__Row",componentId:"sc-3cf12579-5"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,j=d.default.div.withConfig({displayName:"SwapSkeleton__InputColumn",componentId:"sc-3cf12579-6"})`
  display: flex;
  flex-flow: column;
  background-color: ${({theme:e})=>e.surface2};
  border-radius: 16px;
  display: flex;
  gap: 30px;
  padding: 48px 12px;
`,g=d.default.div.withConfig({displayName:"SwapSkeleton__OutputWrapper",componentId:"sc-3cf12579-7"})`
  position: relative;
`;function C(){return(0,n.jsx)(x,{children:(0,n.jsx)(l.Tv.SubHeader,{children:(0,n.jsx)(o.cC,{id:"vH2C/2"})})})}function b(){return(0,n.jsxs)(m,{children:[(0,n.jsx)(f,{width:60}),(0,n.jsx)(f,{width:100,radius:16})]})}function y(){return(0,n.jsx)(h,{radius:16})}function v(){const e=(0,d.useTheme)();return(0,n.jsxs)(u,{children:[(0,n.jsx)(C,{}),(0,n.jsx)(j,{children:(0,n.jsx)(b,{})}),(0,n.jsxs)(g,{children:[(0,n.jsx)(p,{clickable:!1,children:(0,n.jsx)(c.Gz,{children:(0,n.jsx)(s.Z,{size:"16",color:e.neutral3})})}),(0,n.jsx)(j,{children:(0,n.jsx)(b,{})})]}),(0,n.jsx)(y,{})]})}var _=i(379),w=i(89691),S=i(83787),I=i(12973),k=i(96439),N=i(18910),P=i(92686),O=i(39681),T=i(96193),$=i(51530),E=i(54359),L=i(96334),A=i(66496),D=i(83748),R=i(71587),M=i(46502);const H=d.default.div.withConfig({displayName:"Skeleton__TokenDetailsLayout",componentId:"sc-679bdc48-0"})`
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
`,B=d.default.div.withConfig({displayName:"Skeleton__LeftPanel",componentId:"sc-679bdc48-1"})`
  flex: 1;
  max-width: 780px;
  overflow: hidden;
`,W=d.default.div.withConfig({displayName:"Skeleton__RightPanel",componentId:"sc-679bdc48-2"})`
  display: none;
  flex-direction: column;
  gap: ${({isInfoTDPEnabled:e})=>e?40:20}px;
  width: ${360}px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.lg}px) {
    display: flex;
  }
`,z=d.default.div.withConfig({displayName:"Skeleton__LoadingChartContainer",componentId:"sc-679bdc48-3"})`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  height: 100%;
  padding-bottom: 66px;
  overflow: hidden;
  margin-bottom: ${({isInfoTDPEnabled:e})=>e?"14":"44"}px;
`,V=d.default.div.withConfig({displayName:"Skeleton__TokenInfoContainer",componentId:"sc-679bdc48-4"})`
  display: flex;
  justify-content: space-between;
  align-items: ${({isInfoTDPEnabled:e})=>e?"flex-start":"center"};
  margin-bottom: ${({isInfoTDPEnabled:e})=>e?"12":"4"}px;
  gap: 20px;
  ${T.Sj};
  animation-duration: ${({theme:e})=>e.transition.duration.medium};
`,F=d.default.div.withConfig({displayName:"Skeleton__TokenNameCell",componentId:"sc-679bdc48-5"})`
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
`,U=(0,d.default)(L.X).withConfig({displayName:"Skeleton__DetailBubble",componentId:"sc-679bdc48-6"})`
  height: 16px;
  width: 180px;
`,Z=(0,d.default)(U).withConfig({displayName:"Skeleton__SquaredBubble",componentId:"sc-679bdc48-7"})`
  height: 32px;
  border-radius: 8px;
`,K=(0,d.default)(U).withConfig({displayName:"Skeleton__NavBubble",componentId:"sc-679bdc48-8"})`
  width: 169px;
`,G=(0,d.default)(U).withConfig({displayName:"Skeleton__TokenLogoBubble",componentId:"sc-679bdc48-9"})`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`,Q=(0,d.default)(U).withConfig({displayName:"Skeleton__TitleBubble",componentId:"sc-679bdc48-10"})`
  width: 136px;
`,X=(0,d.default)(Z).withConfig({displayName:"Skeleton__PriceBubble",componentId:"sc-679bdc48-11"})`
  margin-top: 4px;
  height: 40px;
`,Y=(0,d.default)(Z).withConfig({displayName:"Skeleton__SectionBubble",componentId:"sc-679bdc48-12"})`
  width: 120px;
`,J=(0,d.default)(U).withConfig({displayName:"Skeleton__StatTitleBubble",componentId:"sc-679bdc48-13"})`
  width: 80px;
  margin-bottom: 4px;
`,q=(0,d.default)(Z).withConfig({displayName:"Skeleton__StatBubble",componentId:"sc-679bdc48-14"})`
  width: 116px;
`,ee=(0,d.default)(U).withConfig({displayName:"Skeleton__WideBubble",componentId:"sc-679bdc48-15"})`
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
`,oe=d.default.div.withConfig({displayName:"Skeleton__ExtraDetailsContainer",componentId:"sc-679bdc48-19"})`
  padding-top: 24px;
`,re=d.default.div.withConfig({displayName:"Skeleton__ChartAnimation",componentId:"sc-679bdc48-20"})`
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
`,ae=d.default.div.withConfig({displayName:"Skeleton__Space",componentId:"sc-679bdc48-21"})`
  height: ${({heightSize:e})=>`${e}px`};
`,se=d.css`
  color: ${({theme:e})=>e.neutral3};
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  text-decoration: none;
`,de=(0,d.default)(a.ZP).withConfig({displayName:"Skeleton__LoadingFooterHeaderContainer",componentId:"sc-679bdc48-22"})`
  align-items: center;
  ${se}

  @media screen and (min-width: ${O.j$.md}px) {
    padding: 16px 90px 8px 0;
    position: fixed;
    bottom: 0;
    right: 0;
    justify-content: flex-end;
  }
`,le=d.default.h1.withConfig({displayName:"Skeleton__LoadingFooterHeader",componentId:"sc-679bdc48-23"})`
  ${se}
`,ce=d.default.a.withConfig({displayName:"Skeleton__LoadingFooterLink",componentId:"sc-679bdc48-24"})`
  ${se}
  ${l.iV}
`;function pe(e,t,i,r){let a="";a=e?.name&&e?.symbol?`${e?.name} (${e?.symbol})`:e?.name?e?.name:e?.symbol?e?.symbol:t||"";const s=r?` on ${(0,$.capitalize)(r)}`:"",d=e?.isNative?a:(0,n.jsx)(ce,{href:(0,E.E)(i,t,E.r.TOKEN),target:"_blank",rel:"noopener noreferrer",children:a});return(0,n.jsx)(o.cC,{id:"xRUohS",values:{tokenLink:d,chainSuffix:s}})}function ue(){const e=(0,d.useTheme)();return(0,n.jsx)("svg",{width:"416",height:"160",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M 0 80 Q 104 10, 208 80 T 416 80",stroke:e.surface3,fill:"transparent",strokeWidth:"2"})})}function he(){const e=(0,w.e)();return(0,n.jsxs)(D.BO,{isInfoTDPEnabled:e,children:[(0,n.jsx)(l.Tv.HeadlineLarge,{children:(0,n.jsx)(X,{})}),(0,n.jsx)(ae,{heightSize:6}),(0,n.jsx)(z,{isInfoTDPEnabled:e,children:(0,n.jsx)("div",{children:(0,n.jsxs)(re,{children:[(0,n.jsx)(ue,{}),(0,n.jsx)(ue,{}),(0,n.jsx)(ue,{}),(0,n.jsx)(ue,{}),(0,n.jsx)(ue,{})]})})})]})}function fe(){return(0,n.jsxs)(M.h6,{children:[(0,n.jsx)(Y,{}),(0,n.jsxs)(ne,{children:[(0,n.jsxs)(M.sy,{children:[(0,n.jsxs)(M.Fy,{children:[(0,n.jsx)(J,{}),(0,n.jsx)(q,{})]}),(0,n.jsxs)(M.Fy,{children:[(0,n.jsx)(J,{}),(0,n.jsx)(q,{})]})]}),(0,n.jsxs)(M.sy,{children:[(0,n.jsxs)(M.Fy,{children:[(0,n.jsx)(J,{}),(0,n.jsx)(q,{})]}),(0,n.jsxs)(M.Fy,{children:[(0,n.jsx)(J,{}),(0,n.jsx)(q,{})]})]})]})]})}function xe(){const{chainName:e,tokenAddress:t}=(0,P.UO)(),i=(0,_.C)(),a=(0,w.e)(),s=(0,S.Tz)((0,S.Qj)(e)),d=(0,I.U8)("NATIVE"===t?"ETH":t,s);return(0,n.jsxs)(B,{children:[a?(0,n.jsxs)(r.zG,{isInfoTDPEnabled:!0,"aria-label":"breadcrumb-nav",children:[(0,n.jsxs)(r.yY,{to:`/explore/${e}`,children:[(0,n.jsx)(o.cC,{id:"8tjQCz"})," ",(0,n.jsx)(k.Z,{size:14})]}),(0,n.jsxs)(r.yY,{to:`/explore/tokens/${e}`,children:[(0,n.jsx)(o.cC,{id:"6RDwJM"})," ",(0,n.jsx)(k.Z,{size:14})]}),(0,n.jsx)(K,{})]}):(0,n.jsx)(r.zG,{children:(0,n.jsxs)(r.yY,{to:(i?"/explore":"")+(e?`/tokens/${e}`:"/tokens"),children:[(0,n.jsx)(N.Z,{size:14})," Tokens"]})}),(0,n.jsx)(V,{children:(0,n.jsxs)(F,{children:[(0,n.jsx)(G,{}),(0,n.jsx)(Q,{})]})}),(0,n.jsx)(he,{}),(0,n.jsx)(ae,{heightSize:4}),(0,n.jsx)(fe,{}),(0,n.jsx)(R.Hr,{}),(0,n.jsx)(A.M7,{children:(0,n.jsx)(A.d5,{children:(0,n.jsx)(Y,{})})}),(0,n.jsx)(ee,{}),(0,n.jsx)(ee,{}),(0,n.jsx)(ie,{style:{marginBottom:"24px"}}),(0,n.jsxs)(oe,{children:[(0,n.jsx)(te,{}),(0,n.jsx)(ie,{})]}),(0,n.jsxs)(oe,{children:[(0,n.jsx)(te,{}),(0,n.jsx)(ie,{})]}),t&&(0,n.jsxs)(de,{gap:"xs",children:[(0,n.jsx)(o.cC,{id:"yQE2r9"}),(0,n.jsx)(le,{children:pe(d,t,s,e)})]})]})}function me(){return(0,n.jsxs)(H,{children:[(0,n.jsx)(xe,{}),(0,n.jsx)(W,{children:(0,n.jsx)(v,{})})]})}},46502:(e,t,i)=>{i.d(t,{Fy:()=>x,ZP:()=>_,h6:()=>y,sy:()=>j});var n=i(21339),o=i(88693),r=i(57777),a=i(53609),s=i(89691),d=i(33552),l=i(10548),c=i(96193),p=i(19369),u=i(56184),h=i(88912),f=i(48207);const x=d.default.div.withConfig({displayName:"StatsSection__StatWrapper",componentId:"sc-99641d40-0"})`
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  min-width: 121px;
  flex: 1;
  padding-top: 24px;
  padding-bottom: ${({isInfoTDPEnabled:e})=>e?"0px":"24px"};

  @media screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    min-width: 168px;
  }
`,m=d.default.div.withConfig({displayName:"StatsSection__TokenStatsSection",componentId:"sc-99641d40-1"})`
  display: flex;
  flex-wrap: wrap;
`,j=d.default.div.withConfig({displayName:"StatsSection__StatPair",componentId:"sc-99641d40-2"})`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`,g=(0,d.default)(l.Tv.MediumHeader).withConfig({displayName:"StatsSection__Header",componentId:"sc-99641d40-3"})`
  font-size: 28px !important;
  padding-top: ${({isInfoTDPEnabled:e})=>e?"40":"24"}px;
`,C=d.default.div.withConfig({displayName:"StatsSection__StatPrice",componentId:"sc-99641d40-4"})`
  margin-top: 4px;
  font-size: 28px;
  color: ${({theme:e})=>e.neutral1};
`,b=d.default.div.withConfig({displayName:"StatsSection__NoData",componentId:"sc-99641d40-5"})`
  color: ${({theme:e})=>e.neutral3};
  ${({isInfoTDPEnabled:e})=>e&&"padding-top: 40px;"}
`,y=d.default.div.withConfig({displayName:"StatsSection__StatsWrapper",componentId:"sc-99641d40-6"})`
  gap: 16px;
  ${c.Sj}
`;function v({dataCy:e,value:t,title:i,description:o}){const{formatNumber:a}=(0,p.Gb)(),d=(0,s.e)();return(0,n.jsxs)(x,{"data-cy":`${e}`,isInfoTDPEnabled:d,children:[(0,n.jsx)(r.ud,{text:o,children:i}),(0,n.jsx)(C,{children:a({input:t,type:p.sw.FiatTokenStats})})]})}function _(e){console.log(e,"<====props");const{chainId:t,address:i,tokenQueryData:r}=e,{label:d,infoLink:c}=(0,a.bt)(t),p=(0,s.e)();console.log(c,"++++++++++++++++++++++");const x=r?.market,C=r?.project?.markets?.[0],_=C?.fullyDilutedValuation?.value,w=C?.marketCap?.value,S=r?.totalValueLockedUSD,I=r?.volumeUSD,k=x?.priceHigh52W?.value,N=x?.priceLow52W?.value;return(p?S||_||w||I:S||I||N||k)?(0,n.jsxs)(y,{"data-testid":"token-details-stats",children:[(0,n.jsx)(g,{isInfoTDPEnabled:p,children:(0,n.jsx)(o.cC,{id:"29Hx9U"})}),(0,n.jsx)(m,{children:p?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(j,{children:(0,n.jsx)(v,{dataCy:"tvl",value:S,description:f.h8[h.PU.TOTAL_VALUE_LOCKED],title:(0,n.jsx)(o.cC,{id:"FHKsZF"})})}),(0,n.jsx)(j,{children:(0,n.jsx)(v,{dataCy:"volume-24h",value:I,description:(0,n.jsx)(o.cC,{id:"4gjy7W"}),title:(0,n.jsx)(o.cC,{id:"94M5XH"})})})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(j,{children:[(0,n.jsx)(v,{dataCy:"tvl",value:S,description:f.h8[h.PU.TOTAL_VALUE_LOCKED],title:(0,n.jsx)(o.cC,{id:"FHKsZF"})}),(0,n.jsx)(v,{dataCy:"volume-24h",value:I,description:(0,n.jsx)(o.cC,{id:"QENWO5"}),title:(0,n.jsx)(o.cC,{id:"0RweTm"})})]}),(0,n.jsxs)(j,{children:[(0,n.jsx)(v,{dataCy:"52w-low",value:N,title:(0,n.jsx)(o.cC,{id:"Dw2kwD"})}),(0,n.jsx)(v,{dataCy:"52w-high",value:k,title:(0,n.jsx)(o.cC,{id:"eh5V57"})})]})]})})]}):u.N0.includes(t)?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(l.Tv.BodySecondary,{paddingTop:"12px"})}):(0,n.jsx)(b,{isInfoTDPEnabled:p,children:"No stats available"})}},71587:(e,t,i)=>{i.d(t,{Hr:()=>r,Nt:()=>d,aZ:()=>a,ke:()=>l,ou:()=>s});var n=i(25400),o=i(33552);const r=o.default.hr.withConfig({displayName:"shared__Hr",componentId:"sc-90493d31-0"})`
  background-color: ${({theme:e})=>e.surface3};
  border: none;
  height: 0.5px;
`,a=o.default.p.withConfig({displayName:"shared__NoInfoAvailable",componentId:"sc-90493d31-1"})`
  color: ${({theme:e})=>e.neutral3};
  font-weight: 485;
  font-size: 16px;
`,s=o.default.div.withConfig({displayName:"shared__TruncateDescriptionButton",componentId:"sc-90493d31-2"})`
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
//# sourceMappingURL=6914.93256196.chunk.js.map