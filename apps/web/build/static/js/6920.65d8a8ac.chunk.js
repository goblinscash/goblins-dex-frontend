"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[6920,5187],{95267:(e,t,o)=>{o.d(t,{Z:()=>d});var i=o(39491),n=o(37954),a=o.n(n);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},s.apply(this,arguments)}function r(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=(0,i.forwardRef)((function(e,t){var o=e.color,n=void 0===o?"currentColor":o,a=e.size,l=void 0===a?24:a,d=r(e,["color","size"]);return i.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),i.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));l.propTypes={color:a().string,size:a().oneOfType([a().string,a().number])},l.displayName="Plus";const d=l},76743:(e,t,o)=>{o.r(t),o.d(t,{default:()=>j});var i=o(21339),n=o(88693),a=o(56542),s=o(4570),r=o(70357),l=o(49680),d=o(99123),c=o(33552),p=o(10548),u=o(7518);const m=o.p+"static/media/404-page-dark.f24684e761633ae99402.png",h=o.p+"static/media/404-page-light.c448d3fd36de14609aba.png",x=c.default.img.withConfig({displayName:"NotFound__Image",componentId:"sc-22bd2404-0"})`
  max-width: 510px;
  width: 100%;
  padding: 0 75px;
`,f=c.default.div.withConfig({displayName:"NotFound__Container",componentId:"sc-22bd2404-1"})`
  display: flex;
  flex-direction: column;
  align-items: center;
`,g=(0,c.default)(f).withConfig({displayName:"NotFound__Header",componentId:"sc-22bd2404-2"})`
  gap: 30px;
`,y=(0,c.default)(f).withConfig({displayName:"NotFound__PageWrapper",componentId:"sc-22bd2404-3"})`
  flex: 1;
  justify-content: center;
  gap: 50px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    justify-content: space-between;
    padding-top: 64px;
  }
`;function j(){const e=(0,u.Gv)(),t=(0,l.dD)(),o=t?p.Tv.LargeHeader:p.Tv.Hero,c=t?p.Tv.HeadlineMedium:p.Tv.HeadlineLarge;return(0,i.jsx)(y,{children:(0,i.jsxs)(s.fM,{page:a.yJ.NOT_FOUND,shouldLogImpression:!0,children:[(0,i.jsxs)(g,{children:[(0,i.jsxs)(f,{children:[(0,i.jsx)(o,{children:"404"}),(0,i.jsx)(c,{color:"neutral2",children:(0,i.jsx)(n.cC,{id:"yduHrq"})})]}),(0,i.jsx)(x,{src:e?m:h,alt:"Liluni"})]}),(0,i.jsx)(r.Hm,{as:d.rU,to:"/",children:(0,i.jsx)(n.cC,{id:"GTK9OW"})})]})})}},99357:(e,t,o)=>{o.r(t),o.d(t,{default:()=>Nt});var i=o(21339),n=o(88693),a=o(56374),s=o(65023),r=o(82032),l=o(79357),d=o(16685),c=o(24051),p=o(76139),u=o(83748),m=o(77489),h=o(25093),x=o(83787),f=o(12973),g=o(59815),y=o(39491),j=o(33552),w=o(10548),b=o(48664),k=o(19369);const C=380,v=(a.oX.PRICE,a.oX.VOLUME,a.oX.LIQUIDITY,j.default.div.withConfig({displayName:"ChartSection__TimePeriodSelectorContainer",componentId:"sc-6b853911-0"})`
  position: absolute;
  top: 4px;
  right: 72px;
  z-index: ${b.k.active};
  @media only screen and (max-width: ${({theme:e})=>e.breakpoint.lg}px) {
    position: static;
    margin-top: 4px;
  }
  @media only screen and (max-width: ${({theme:e})=>e.breakpoint.xs}px) {
    width: 100%;
  }
`,{[a.oX.PRICE]:function({currencyA:e,currencyB:t,timePeriod:o,height:n,priceChartType:a}){const{formatCurrencyAmount:s,formatPrice:p}=(0,k.Gb)(),f=(0,h.m)({variables:{...(0,x.PT)(e),duration:(0,x.uw)(o)}}),j=(0,u.Y_)(f.data),b=(0,y.useMemo)((()=>(0,c.ll)(j)),[j]),C=(0,y.useMemo)((()=>({data:b,type:a})),[b,a]),v=(0,g.ZP)(e);if(!b.length||!e||!t)return(0,i.jsx)(m.sT,{});const T=b[b.length-1];return(0,i.jsx)(d.k,{Model:c.r4,params:C,height:n,children:o=>{const n=o??T,a=Math.floor((n.value??n.close)*10**t.decimals),d=(0,i.jsx)(w.Tv.HeadlineMedium,{children:`1 ${e.symbol} = ${s({amount:r.CurrencyAmount.fromRawAmount(t,a)})} \n            ${t.symbol} ${v?"("+p({price:v})+")":""}`});return(0,i.jsx)(l._,{value:d,additionalFields:(0,i.jsx)(c.Tg,{startingPrice:b[0],endingPrice:n}),valueFormatterType:k.sw.FiatTokenPrice,time:o?.time})}})},[a.oX.VOLUME]:p.x,[a.oX.LIQUIDITY]:m.sT});function T(e){const[t,o]=(0,y.useState)(x.XH.DAY),[n,a]=[(0,f.U8)(e.token0?.id),(0,f.U8)(e.token1?.id)],s=(0,y.useMemo)((()=>e.volume?.map((e=>({value:Number(e.volumeUSD),timestamp:e.date})))),[e.volume]);if(e.loading||!n||!a)return(0,i.jsx)(m.sT,{});const r=v[e.chartType],l={...e,height:C,timePeriod:t,currencyA:n,currencyB:a,volumes:s};return(0,i.jsx)(u.BO,{isInfoTDPEnabled:!0,"data-testid":"pdp-chart-container",children:(0,i.jsx)(r,{...l})})}var P=o(62773),$=o(88584);const I=e=>(0,i.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,i.jsx)("path",{id:"box-search_2",d:"M6.32064 7.43328C6.4873 7.50661 6.66065 7.55329 6.83398 7.59329V13.94C6.72732 13.9133 6.62067 13.8733 6.52067 13.8266L2.52067 12.0466C1.80067 11.7266 1.33398 11.0133 1.33398 10.2199V5.77996C1.33398 5.59996 1.36064 5.41995 1.40731 5.25329L6.32064 7.43328ZM12.754 4.37328C12.5807 4.19995 12.3806 4.05328 12.1473 3.95328L8.1473 2.17329C7.6273 1.93996 7.04067 1.93996 6.52067 2.17329L2.52067 3.95328C2.28734 4.05328 2.08731 4.19995 1.91398 4.37328L6.72062 6.51328C7.10729 6.68661 7.55401 6.68661 7.94735 6.51328L12.754 4.37328ZM11.1347 7.92862C11.8227 7.76662 12.4766 7.81863 13.0646 8.02129C13.1966 8.06663 13.334 7.97729 13.334 7.83729V5.77996C13.334 5.59996 13.3073 5.41995 13.2607 5.25329L8.34733 7.43328C8.18066 7.49995 8.00732 7.55329 7.83398 7.59329V13.94C7.84598 13.948 7.84599 13.9479 7.85799 13.9559L8.98665 13.452C9.10132 13.4006 9.13533 13.262 9.066 13.158C8.584 12.4373 8.37864 11.522 8.57397 10.5586C8.83464 9.27263 9.85802 8.22929 11.1347 7.92862ZM15.0207 14.3526C14.9233 14.4499 14.7953 14.4993 14.6673 14.4993C14.5393 14.4993 14.4113 14.4506 14.314 14.3526L13.2807 13.3193C12.896 13.5713 12.4386 13.7213 11.9453 13.7213C10.5973 13.7213 9.50065 12.6246 9.50065 11.2766C9.50065 9.92862 10.5973 8.83194 11.9453 8.83194C13.2926 8.83194 14.3893 9.92862 14.3893 11.2766C14.3893 11.77 14.24 12.228 13.988 12.6119L15.0213 13.6453C15.216 13.8406 15.216 14.1573 15.0207 14.3526ZM13.3893 11.2773C13.3893 10.4806 12.7413 9.83261 11.9453 9.83261C11.1486 9.83261 10.5007 10.4806 10.5007 11.2773C10.5007 12.0739 11.1486 12.722 11.9453 12.722C12.7413 12.7213 13.3893 12.0733 13.3893 11.2773Z",fill:"white"})});var D=o(44680),S=o(17358),_=o(379),N=o(91943),L=o(97472),B=o(96439),U=o(92686),E=o(39681),M=o(6970),F=o(54359),R=o(46733),O=o(61300);const Z=(0,j.default)(w.Tv.BodyPrimary).withConfig({displayName:"PoolDetailsLink__TokenName",componentId:"sc-635980a9-0"})`
  display: none;

  @media (max-width: ${E.j$.lg-1}px) and (min-width: ${E.j$.xs-1}px) {
    display: block;
  }
  ${w.cw}
`,A=(0,j.default)(S.ZP).withConfig({displayName:"PoolDetailsLink__TokenTextWrapper",componentId:"sc-635980a9-1"})`
  gap: 8px;
  margin-right: 12px;
  ${({isClickable:e})=>e&&w.iV}
`,W=(0,j.default)(w.Tv.BodyPrimary).withConfig({displayName:"PoolDetailsLink__SymbolText",componentId:"sc-635980a9-2"})`
  flex-shrink: 0;

  @media (max-width: ${E.j$.lg-1}px) and (min-width: ${E.j$.xs-1}px) {
    color: ${({theme:e})=>e.neutral2};
  }
  ${w.cw}
`,V=(0,j.default)(S.ZP).withConfig({displayName:"PoolDetailsLink__CopyAddress",componentId:"sc-635980a9-3"})`
  gap: 8px;
  padding: 8px 12px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.surface3};
  font-size: 14px;
  font-weight: 535;
  line-height: 16px;
  width: max-content;
  flex-shrink: 0;
  ${w.iV}
`,z=(0,j.default)(L.Z).withConfig({displayName:"PoolDetailsLink__StyledCopyIcon",componentId:"sc-635980a9-4"})`
  width: 16px;
  height: 16px;
  color: ${({theme:e})=>e.neutral2};
  flex-shrink: 0;
`,H=j.default.div.withConfig({displayName:"PoolDetailsLink__ExplorerWrapper",componentId:"sc-635980a9-5"})`
  padding: 8px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.surface3};
  display: flex;
  ${w.iV}
`,G=(0,j.default)(S.ZP).withConfig({displayName:"PoolDetailsLink__ButtonsRow",componentId:"sc-635980a9-6"})`
  gap: 8px;
  flex-shrink: 0;
  width: max-content;
`;function Y({address:e,chainId:t,tokens:o,loading:a}){const s=(0,j.useTheme)(),l=[(0,f.U8)(o[0]?.id,t)??void 0,(0,f.U8)(o[1]?.id,t)??void 0],[,d]=(0,N.Z)(),c=(0,y.useCallback)((()=>{e&&d(e)}),[e,d]),p=2===o.length,u=e&&t&&(0,F.E)(t,e,p?F.r.ADDRESS:F.r.TOKEN),m=(0,U.s0)(),h=(0,_.C)(),g=(0,x.Ld)(t),b=(0,y.useCallback)((()=>{p||m((0,x.dG)({address:o[0]?.id,chain:g,isInfoExplorePageEnabled:h}))}),[m,o,p,g,h]);return!a&&e&&t?(0,i.jsxs)(S.ZP,{align:"space-between",children:[(0,i.jsxs)(A,{"data-testid":p?`pdp-pool-logo-${o[0]?.symbol}-${o[1]?.symbol}`:`pdp-token-logo-${o[0]?.symbol}`,isClickable:!p,onClick:b,children:[p?(0,i.jsx)(P.io,{chainId:t,currencies:l,size:20}):(0,i.jsx)(D.Z,{currency:l[0],size:"20px"}),(0,i.jsx)(Z,{children:p?(0,i.jsx)(n.cC,{id:"ou6PkF"}):o[0]?.name}),(0,i.jsx)(W,{children:p?`${(0,O.sg)(o[0]?.symbol)}/${o[1]?.symbol}`:(0,i.jsxs)(S.ZP,{gap:"4px",children:[(0,O.sg)(o[0]?.symbol)," ",(0,i.jsx)(B.Z,{size:16,color:s.neutral2})]})})]}),(0,i.jsxs)(G,{children:[(0,i.jsxs)(V,{"data-testid":`copy-address-${e}`,onClick:c,children:[(0,M.Xn)(e),(0,i.jsx)(z,{})]}),u&&(0,i.jsx)(w.dL,{href:u,"data-testid":`explorer-url-${u}`,children:(0,i.jsx)(H,{children:t===r.ChainId.MAINNET?(0,i.jsx)($.P,{width:"16px",height:"16px",fill:s.neutral2}):(0,i.jsx)(I,{width:"16px",height:"16px",stroke:s.darkMode?"none":s.neutral2})})})]})]}):(0,i.jsxs)(S.ZP,{gap:"8px",padding:"6px 0px",children:[(0,i.jsx)(R.F,{}),(0,i.jsx)(R.k,{$width:117})]})}var X=o(96334),q=o(98878),Q=o(21309),K=o(7108),J=o(99123),ee=o(9726),te=o(49908);const oe=(0,j.default)(ee.xv).withConfig({displayName:"PoolDetailsStats__HeaderText",componentId:"sc-40792738-0"})`
  font-weight: 485;
  font-size: 24px;
  line-height: 36px;
  @media (max-width: ${E.j$.lg-1}px) {
    width: 100%;
  }
`,ie=(0,j.default)(s.ZP).withConfig({displayName:"PoolDetailsStats__StatsWrapper",componentId:"sc-40792738-1"})`
  gap: 24px;
  padding: 20px;
  border-radius: 20px;
  background: ${({theme:e})=>e.surface2};
  width: 100%;
  z-index: 1;
  margin-top: ${({loaded:e})=>e&&"-24px"};

  @media (max-width: ${E.j$.lg-1}px) {
    flex-direction: row;
    background: transparent;
    flex-wrap: wrap;
    padding: 20px 0px;
    justify-content: space-between;
    margin-top: 0px;
  }
`,ne=(0,j.default)(s.ZP).withConfig({displayName:"PoolDetailsStats__StatItemColumn",componentId:"sc-40792738-2"})`
  gap: 8px;
  flex: 1;
  min-width: 180px;

  @media (max-width: ${E.j$.sm}px) {
    min-width: 150px;
  }
`,ae=(0,j.default)(S.ZP).withConfig({displayName:"PoolDetailsStats__PoolBalanceSymbols",componentId:"sc-40792738-3"})`
  justify-content: space-between;

  @media (max-width: ${E.j$.lg-1}px) {
    flex-direction: column;
  }
`,se=(0,j.default)(S.ZP).withConfig({displayName:"PoolDetailsStats__PoolBalanceTokenNamesContainer",componentId:"sc-40792738-4"})`
  font-weight: 485;
  font-size: 16px;
  line-height: 24px;
  width: max-content;

  @media (max-width: ${E.j$.lg-1}px) {
    font-size: 20px;
    line-height: 28px;
    width: 100%;
  }
`,re=(0,j.default)(J.rU).withConfig({displayName:"PoolDetailsStats__StyledLink",componentId:"sc-40792738-5"})`
  display: flex;
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  ${w.iV}
`,le=j.css`
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-right: 1px solid ${({theme:e})=>e.surface2};
`,de=j.css`
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left: 1px solid ${({theme:e})=>e.surface2};
`,ce=j.default.div.withConfig({displayName:"PoolDetailsStats__BalanceChartSide",componentId:"sc-40792738-6"})`
  height: 8px;
  width: ${({percent:e})=>100*e}%;
  background: ${({$color:e})=>e};
  ${({isLeft:e})=>e?le:de}
`,pe=(0,j.default)(X.X).withConfig({displayName:"PoolDetailsStats__StatSectionBubble",componentId:"sc-40792738-7"})`
  width: 180px;
  height: 40px;
`,ue=(0,j.default)(X.X).withConfig({displayName:"PoolDetailsStats__StatHeaderBubble",componentId:"sc-40792738-8"})`
  width: 116px;
  height: 24px;
  border-radius: 8px;
`,me=({token:e,chainId:t})=>{const o=(0,K.e)().lg,{formatNumber:n}=(0,k.Gb)();return(0,i.jsxs)(se,{children:[!o&&(0,i.jsx)(D.Z,{currency:e.currency,size:"20px",style:{marginRight:"8px"}}),n({input:e.tvl,type:k.sw.TokenQuantityStats}),"\xa0",(0,i.jsxs)(re,{to:(0,x.dG)({address:e.id,chain:(0,x.Ld)(t),isInfoExplorePageEnabled:!0}),children:[o&&(0,i.jsx)(D.Z,{currency:e.currency,size:"16px",style:{marginRight:"4px",marginLeft:"4px"}}),(0,O.sg)(e.symbol)]})]})};function he({poolData:e,isReversed:t,chainId:o,loading:a}){const r=(0,K.e)().lg,l=(0,j.useTheme)(),d=(0,f.U8)(e?.token0?.id,o)??void 0,c=(0,f.U8)(e?.token1?.id,o)??void 0,p=(0,Q.r)(d,l.surface2,l.darkMode);let u=(0,Q.r)(c,l.surface2,l.darkMode);p===u&&p===l.accent1&&(u=te.O9.blue400);const[m,h]=(0,y.useMemo)((()=>{if(e){const o=e?.tvlToken0/e?.token0Price+e?.tvlToken1,i={...e?.token0,price:e?.token0Price,tvl:e?.tvlToken0,color:p,percent:e?.tvlToken0/e?.token0Price/o,currency:d},n={...e?.token1,price:e?.token1Price,tvl:e?.tvlToken1,color:u,percent:e?.tvlToken1/o,currency:c};return t?[n,i]:[i,n]}return[void 0,void 0]}),[p,u,d,c,t,e]),x=(0,y.useMemo)((()=>e&&e.poolDayData&&e.poolDayData.length?e.poolDayData.reduce(((e,t)=>t.date>e.date?t:e),e.poolDayData[0]):0),[e?.poolDayData]);return!a&&m&&h&&e&&x?(0,i.jsxs)(ie,{loaded:!0,children:[(0,i.jsx)(oe,{children:(0,i.jsx)(n.cC,{id:"29Hx9U"})}),(0,i.jsxs)(ne,{children:[(0,i.jsx)(w.Tv.BodySecondary,{children:(0,i.jsx)(n.cC,{id:"2mfj90"})}),(0,i.jsxs)(ae,{children:[(0,i.jsx)(me,{token:m,chainId:o}),(0,i.jsx)(me,{token:h,chainId:o})]}),r&&(0,i.jsxs)(S.ZP,{"data-testid":"pool-balance-chart",children:[m.color&&(0,i.jsx)(ce,{percent:m.percent,$color:m.color,isLeft:!0}),h.color&&(0,i.jsx)(ce,{percent:h.percent,$color:h.color,isLeft:!1})]})]}),(0,i.jsx)(ge,{title:(0,i.jsx)(n.cC,{id:"FHKsZF"}),value:e.tvlUSD,delta:e.tvlUSDChange}),(0,i.jsx)(ge,{title:(0,i.jsx)(n.cC,{id:"0RweTm"}),value:x.volumeUSD,delta:e.volumeUSDChange}),(0,i.jsx)(ge,{title:(0,i.jsx)(n.cC,{id:"PpS90j"}),value:x.feesUSD})]}):(0,i.jsxs)(ie,{children:[(0,i.jsx)(oe,{children:(0,i.jsx)(ue,{})}),Array.from({length:4}).map(((e,t)=>(0,i.jsxs)(s.ZP,{gap:"md",children:[(0,i.jsx)(R.k,{}),(0,i.jsx)(pe,{})]},`loading-info-row-${t}`)))]})}const xe=(0,j.default)(S.ZP).withConfig({displayName:"PoolDetailsStats__StatsTextContainer",componentId:"sc-40792738-9"})`
  gap: 4px;
  width: 100%;
  align-items: flex-end;

  @media (max-width: ${E.j$.lg-1}px) {
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
  }
`,fe=(0,j.default)(ee.xv).withConfig({displayName:"PoolDetailsStats__StatItemText",componentId:"sc-40792738-10"})`
  color: ${({theme:e})=>e.neutral1};
  font-size: 36px;
  font-weight: 485;
  line-height: 44px;

  @media (max-width: ${E.j$.lg-1}px) {
    font-size: 20px;
    line-height: 28px;
  }
`;function ge({title:e,value:t,delta:o}){const{formatNumber:n,formatDelta:a}=(0,k.Gb)();return(0,i.jsxs)(ne,{children:[(0,i.jsx)(w.Tv.BodySecondary,{children:e}),(0,i.jsxs)(xe,{children:[(0,i.jsx)(fe,{children:n({input:t,type:k.sw.FiatTokenStats})}),!!o&&(0,i.jsxs)(S.ZP,{width:"max-content",padding:"4px 0px",children:[(0,i.jsx)(q.Kx,{delta:o}),(0,i.jsx)(w.Tv.BodySecondary,{children:a(o)})]})]})]})}var ye=o(75422),je=o(13691),we=o(6125),be=o(73474),ke=o(44488),Ce=o(57213),ve=o(6681),Te=o(95267),Pe=o(54311),$e=o(17513),Ie=o(51232);const De=(0,j.default)(S.ZP).withConfig({displayName:"PoolDetailsStatsButtons__PoolDetailsStatsButtonsRow",componentId:"sc-3631444b-0"})`
  gap: 12px;
  z-index: 1;

  @media (max-width: ${E.j$.lg-1}px) {
    display: none;
  }
`,Se=j.default.button.withConfig({displayName:"PoolDetailsStatsButtons__PoolButton",componentId:"sc-3631444b-1"})`
  display: flex;
  flex-direction: row;
  padding: 12px 16px 12px 12px;
  border: unset;
  border-radius: 900px;
  width: ${({open:e})=>e?"100px":"50%"};
  gap: 8px;
  color: ${({theme:e,open:t})=>t?"#1b1b1b":e.accent1};
  background-color: ${({theme:e,open:t})=>!t&&(0,$e.j)(12,e.accent1)};
  justify-content: center;
  transition: ${({theme:e})=>`width ${e.transition.duration.medium} ${e.transition.timing.inOut}`};
  border: ${({theme:e,open:t})=>t&&`1px solid ${e.surface3}`};
  ${w.iV}
`,_e=(0,j.default)(we.o).withConfig({displayName:"PoolDetailsStatsButtons__SwapIcon",componentId:"sc-3631444b-2"})`
  fill: ${({theme:e})=>e.accent1};
  rotate: 90deg;
`,Ne=(0,j.default)(X.X).withConfig({displayName:"PoolDetailsStatsButtons__ButtonBubble",componentId:"sc-3631444b-3"})`
  height: 44px;
  width: 175px;
  border-radius: 900px;
`,Le=j.default.div.withConfig({displayName:"PoolDetailsStatsButtons__SwapModalWrapper",componentId:"sc-3631444b-4"})`
  z-index: 0;
  max-height: ${({open:e})=>e?"100vh":"0"};
  transition: ${({theme:e})=>`max-height ${e.transition.duration.medium} ${e.transition.timing.ease}`};
  padding-bottom: ${({open:e})=>e?"24px":"0"};

  ${be.R0} {
    &:before {
      background-color: unset;
    }
  }

  @media (max-width: ${E.j$.lg-1}px) {
    display: none;
  }
`;function Be({chainId:e,token0:t,token1:o,feeTier:a,loading:r}){const{chainId:l,connector:d,account:c}=(0,ye.useWeb3React)(),{positions:p}=(0,je.Z)(c??"",e?[e]:void 0),u=p&&function(e,t,o,i){return e?.find((e=>(e?.details.token0.toLowerCase()===t?.id||e?.details.token0.toLowerCase()===o?.id)&&(e?.details.token1.toLowerCase()===t?.id||e?.details.token1.toLowerCase()===o?.id)&&e?.details.fee==i&&!e.closed))}(p,t,o,a),m=u?.details.tokenId,h=(0,ke.o)(),x=(0,U.s0)(),g=(0,f.U8)(t?.id,e),j=(0,f.U8)(o?.id,e),[b,k]=(0,y.useReducer)((e=>!e),!1),[C,v]=(0,y.useReducer)((e=>!e),!1);return!r&&g&&j?(0,i.jsxs)(s.ZP,{gap:"lg",children:[(0,i.jsxs)(De,{children:[(0,i.jsx)(Se,{onClick:k,open:b,"data-testid":`pool-details-${b?"close":"swap"}-button`,children:b?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(ve.Z,{size:20}),(0,i.jsx)(w.Tv.BodyPrimary,{fontWeight:535,color:"accentActive",children:(0,i.jsx)(n.cC,{id:"yz7wBu"})})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(_e,{}),(0,i.jsx)(w.Tv.BodyPrimary,{fontWeight:535,color:"accentActive",children:(0,i.jsx)(n.cC,{id:"vH2C/2"})})]})}),(0,i.jsxs)(Se,{onClick:async()=>{g&&j&&(l!==e&&e&&await h(d,e),x(`/add/${(0,Ie.H)(g)}/${(0,Ie.H)(j)}/${a}${m?`/${m}`:""}`))},onMouseEnter:v,onMouseLeave:v,"data-testid":"pool-details-add-liquidity-button",children:[!C&&(0,i.jsx)(Te.Z,{size:20}),(0,i.jsx)(w.Tv.BodyPrimary,{fontWeight:535,color:"accentActive",children:(0,i.jsx)(n.cC,{id:"E6MqGy"})}),C&&(0,i.jsx)(Pe.Z,{size:20})]})]}),(0,i.jsx)(Le,{open:b,"data-testid":"pool-details-swap-modal",children:(0,i.jsx)(Ce.HY,{chainId:e,initialInputCurrency:g,initialOutputCurrency:j,disableTokenInputs:e!==l})})]}):(0,i.jsxs)(De,{"data-testid":"pdp-buttons-loading-skeleton",children:[(0,i.jsx)(Ne,{}),(0,i.jsx)(Ne,{})]})}var Ue=o(39303);const Ee=e=>(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",...e,children:[(0,i.jsxs)("g",{clipPath:"url(#clip0_2958_135280)",children:[(0,i.jsx)("path",{d:"M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z",stroke:"#9B9B9B",strokeLinecap:"round",strokeLinejoin:"round"}),(0,i.jsx)("path",{d:"M2.46484 2.46509L9.53484 9.53509",stroke:"#9B9B9B",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,i.jsx)("defs",{children:(0,i.jsx)("clipPath",{id:"clip0_2958_135280",children:(0,i.jsx)("rect",{width:"12",height:"12",fill:"white"})})})]});var Me=o(59926),Fe=o(79799),Re=o(47021);const Oe=(0,j.default)(s.ZP).withConfig({displayName:"PoolDetailsPositionsTable__PositionTableWrapper",componentId:"sc-e4efa33-0"})`
  gap: 24px;
  margin-top: 24px;
  width: 100%;
`,Ze=(0,j.default)(s.ZP).withConfig({displayName:"PoolDetailsPositionsTable__PositionWrapper",componentId:"sc-e4efa33-1"})`
  gap: 4px;
  background: ${({theme:e})=>e.surface2};
  border-radius: 12px;
  width: 100%;
  ${w.iV}
  padding: 16px;
`,Ae=(0,j.default)(w.Tv.LabelMicro).withConfig({displayName:"PoolDetailsPositionsTable__FeeTier",componentId:"sc-e4efa33-2"})`
  padding: 4px 6px;
  background: ${({theme:e})=>e.surface2};
`,We=(0,j.default)(S.ZP).withConfig({displayName:"PoolDetailsPositionsTable__StatusWrapper",componentId:"sc-e4efa33-3"})`
  gap: 8px;
  width: max-content;
  margin-right: 0;
  margin-left: auto;
  color ${({theme:e,status:t})=>t===Ye.IN_RANGE?e.success:t===Ye.OUT_OF_RANGE?e.deprecated_accentWarning:e.neutral2};
`,Ve=(0,j.default)(S.ZP).withConfig({displayName:"PoolDetailsPositionsTable__RangeWrapper",componentId:"sc-e4efa33-4"})`
  gap: 10px;

  @media screen and (max-width: ${E.j$.sm}px) {
    flex-direction: column;
    gap: 4px;
    align-items: flex-start;
  }
`,ze=(0,j.default)((e=>(0,i.jsx)("svg",{width:"14",height:"9",viewBox:"0 0 14 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,i.jsx)("path",{d:"M4.00284 8.5L0.184659 4.68182L4.00284 0.863636L4.65909 1.51136L1.95739 4.21307H12.1335L9.43182 1.51136L10.0881 0.863636L13.9062 4.68182L10.0881 8.5L9.43182 7.84375L12.1335 5.15057H1.95739L4.65909 7.84375L4.00284 8.5Z",fill:"#5E5E5E"})}))).withConfig({displayName:"PoolDetailsPositionsTable__StyledDoubleArrow",componentId:"sc-e4efa33-5"})`
  @media screen and (max-width: ${E.j$.sm}px) {
    display: none;
  }
`,He=(0,j.default)(w.Tv.Caption).withConfig({displayName:"PoolDetailsPositionsTable__RangeText",componentId:"sc-e4efa33-6"})`
  width: max-content;
  white-space: nowrap;
`,Ge=j.default.div.withConfig({displayName:"PoolDetailsPositionsTable__StyledDot",componentId:"sc-e4efa33-7"})`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.success};
`;var Ye;function Xe({positionInfo:e}){const t=[(0,f.U8)(e.details.token0,e.chainId),(0,f.U8)(e.details.token1,e.chainId)],{chainId:o,connector:a}=(0,ye.useWeb3React)(),s=(0,U.s0)(),r=(0,ke.o)(),l=(0,j.useTheme)(),{formatTickPrice:d}=(0,k.Gb)(),c=(0,y.useCallback)((async()=>{o!==e.chainId&&await r(a,e.chainId),s("/pool/"+e.details.tokenId)}),[a,s,e.chainId,e.details.tokenId,r,o]),p=e.inRange?Ye.IN_RANGE:e.closed?Ye.CLOSED:Ye.OUT_OF_RANGE,u=e.position.token0PriceLower.invert(),m=e.position.token0PriceUpper.invert(),h={LOWER:0===parseFloat(m.toFixed(0)),UPPER:parseFloat(u.toFixed(0))>Number.MAX_SAFE_INTEGER};return(0,i.jsxs)(Ze,{onClick:c,children:[(0,i.jsxs)(S.ZP,{gap:"8px",children:[(0,i.jsx)(P.ge,{chainId:e.chainId,currencies:t,size:16}),(0,i.jsxs)(w.Tv.SubHeader,{children:[e.pool.token0.symbol,"/",e.pool.token1.symbol]}),(0,i.jsxs)(Ae,{children:[e.pool.fee/Me.PM,"%"]}),(0,i.jsxs)(We,{status:p,children:[(0,i.jsx)(w.Tv.Caption,{color:"inherit",children:p}),p===Ye.IN_RANGE&&(0,i.jsx)(Ge,{}),p===Ye.OUT_OF_RANGE&&(0,i.jsx)(Fe.Z,{size:12,color:l.deprecated_accentWarning}),p===Ye.CLOSED&&(0,i.jsx)(Ee,{})]})]}),(0,i.jsxs)(Ve,{children:[(0,i.jsxs)(He,{"data-testid":`position-min-${m.toFixed(0)}`,children:[(0,i.jsx)(n.cC,{id:"0uYsLP"}),"\xa0",d({price:m,atLimit:h,direction:Re.Mb.LOWER}),"\xa0",e.pool.token0.symbol,"\xa0",(0,i.jsx)(n.cC,{id:"b2jAb+"}),"\xa0",e.pool.token1.symbol]}),(0,i.jsx)(ze,{}),(0,i.jsxs)(He,{"data-testid":`position-max-${u.toFixed(0)}`,children:[(0,i.jsx)(n.cC,{id:"BniuBY"}),"\xa0",d({price:u,atLimit:h,direction:Re.Mb.UPPER}),"\xa0",e.pool.token0.symbol,"\xa0",(0,i.jsx)(n.cC,{id:"b2jAb+"}),"\xa0",e.pool.token1.symbol]})]})]})}function qe({positions:e}){return(0,i.jsx)(Oe,{children:e.map(((e,t)=>(0,i.jsx)(Xe,{positionInfo:e},`pool-position-${t}`)))})}!function(e){e.IN_RANGE="In range",e.OUT_OF_RANGE="Out of range",e.CLOSED="Closed"}(Ye||(Ye={}));var Qe=o(12762),Ke=o(82786),Je=o(44878),et=o(87148),tt=o(54210),ot=o(95326),it=o(66644),nt=o(32605);function at(e){const t=e.toString(),o=t.replace(".","").replace(/^0+/,"");return(t.includes(".")?o:o.replace(/0+$/,"")).length}var st,rt=o(70762);nt.Ps`
  query PoolTransactions(
    $address: String!
    $first: Int
    $skip: Int
    $orderBy: Transaction_orderBy
    $orderDirection: OrderDirection
  ) {
    mints(
      first: $first
      skip: $skip
      orderBy: timestamp
      orderDirection: $orderDirection
      where: { pool: $address }
      subgraphError: allow
    ) {
      timestamp
      transaction {
        id
      }
      pool {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
      }
      owner
      sender
      origin
      amount0
      amount1
      amountUSD
    }
    swaps(
      first: $first
      skip: $skip
      orderBy: timestamp
      orderDirection: $orderDirection
      where: { pool: $address }
      subgraphError: allow
    ) {
      timestamp
      transaction {
        id
      }
      pool {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
      }
      origin
      amount0
      amount1
      amountUSD
    }
    burns(
      first: $first
      skip: $skip
      orderBy: timestamp
      orderDirection: $orderDirection
      where: { pool: $address }
      subgraphError: allow
    ) {
      timestamp
      transaction {
        id
      }
      pool {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
      }
      origin
      amount
      amount0
      amount1
      amountUSD
    }
  }
`,function(e){e.BUY="Buy",e.SELL="Sell",e.BURN="Burn",e.MINT="Mint"}(st||(st={}));var lt=o(59155),dt=o(84087),ct=o(33151);const pt=(0,j.default)(w.dL).withConfig({displayName:"PoolDetailsTransactionsTable__StyledExternalLink",componentId:"sc-6e2b50f9-0"})`
  color: ${({theme:e})=>e.neutral2};
  stroke: ${({theme:e})=>e.neutral2};
`;function ut({poolAddress:e,token0:t,token1:o,isReversed:a}){const s=(0,x.Qj)((0,U.UO)().chainName),l=(0,x.Tz)(s),d=(0,j.useTheme)(),c=(0,dt.eQ)(),p=(0,lt.XB)(),{formatNumber:u,formatFiatPrice:m}=(0,k.Gb)(),[h,f]=(0,y.useReducer)((e=>!e),!1),g=(0,y.useRef)(null);(0,ct.t)(g,h?f:void 0);const[b,C]=(0,y.useState)([st.BUY,st.SELL,st.BURN,st.MINT]),[v,T]=(0,y.useState)({sortBy:it.ri.Timestamp,sortDirection:it.N9.Desc}),{transactions:P,loading:$,loadMore:I,error:D}=function(e,t,o=it.ri.Timestamp,i=it.N9.Desc,n=[st.BUY,st.SELL,st.BURN,st.MINT],a=25,s){const l=rt.uw[t||r.ChainId.MAINNET],{data:d,loading:c,fetchMore:p,error:u}=(0,it.PG)({variables:{address:e.toLowerCase(),first:a,skip:s,orderBy:o,orderDirection:i},client:l}),m=(0,y.useRef)(!1),h=(0,y.useCallback)((({onComplete:e})=>{m.current||(m.current=!0,p({variables:{skip:Math.max(d?.swaps?.length??0,d?.mints?.length??0,d?.burns?.length??0)},updateQuery:(t,{fetchMoreResult:o})=>{if(!o)return t;e?.();const i={mints:[...t.mints,...o.mints],swaps:[...t.swaps,...o.swaps],burns:[...t.burns,...o.burns]};return m.current=!1,i}}))}),[d?.burns?.length,d?.mints?.length,d?.swaps?.length,p]),x=(0,y.useMemo)((()=>{const e=n.includes(st.MINT)?d?.mints.map((e=>({...e,type:st.MINT,isExactIn:void 0}))):[],t=n.includes(st.BURN)?d?.burns.map((e=>({...e,type:st.BURN,isExactIn:void 0}))).filter((e=>"0"!==e.amount0&&"0"!==e.amount1)):[];return[...e??[],...(n.includes(st.BUY)||n.includes(st.SELL)?d?.swaps.map((e=>{const t=e.amount0>0?e.pool.token0:e.pool.token1,o=at(e.amount0),i=at(e.amount1),a=t.id.toLowerCase()===e.pool.token0?.id.toLowerCase()?o<i:i<o;return a&&n.includes(st.SELL)?{...e,type:st.SELL,isExactIn:a}:!a&&n.includes(st.BUY)?{...e,type:st.BUY,isExactIn:a}:void 0})).filter((e=>void 0!==e)):[])??[],...t??[]].sort(((e,t)=>t?.timestamp-e?.timestamp)).map((e=>({timestamp:e?.timestamp,transaction:e?.transaction.id,pool:{token0:{id:e?.pool.token0.id,symbol:e?.pool.token0.symbol},token1:{id:e?.pool.token1.id,symbol:e?.pool.token1.symbol}},maker:e?.origin,amount0:e?.amount0,amount1:e?.amount1,amountUSD:e?.amountUSD,type:e?.type,isExactIn:e?.isExactIn})))}),[d?.burns,d?.mints,d?.swaps,n]);return(0,y.useMemo)((()=>({transactions:x,loading:c,loadMore:h,error:u})),[x,c,h,u])}(e,l,v.sortBy,v.sortDirection,b);console.log(a,"<====isReversed");const S=(0,y.useCallback)((e=>{v.sortBy===e?T({sortBy:e,sortDirection:v.sortDirection===it.N9.Asc?it.N9.Desc:it.N9.Asc}):T({sortBy:e,sortDirection:it.N9.Desc})}),[v.sortBy,v.sortDirection]),_=(0,y.useMemo)((()=>{const e=(0,Qe.Cl)();return[e.accessor((e=>e.timestamp),{id:"timestamp",header:()=>(0,i.jsx)(Je.b,{minWidth:150,justifyContent:"flex-start",children:(0,i.jsxs)(tt.d4,{$justify:"flex-start",onClick:()=>S(it.ri.Timestamp),children:[v.sortBy===it.ri.Timestamp&&(0,i.jsx)(tt.iX,{direction:v.sortDirection}),(0,i.jsx)(w.Tv.BodySecondary,{children:(0,i.jsx)(n.cC,{id:"LhMjLm"})})]})}),cell:e=>(0,i.jsx)(Je.b,{loading:$,minWidth:150,justifyContent:"flex-start",children:(0,i.jsx)(w.Tv.BodySecondary,{children:(0,ot.G)(1e3*Number(e.getValue?.()),c)})})}),e.accessor((e=>{let t,o;if(e.type===st.BUY||e.type===st.SELL){const[a,s]=e.amount0>0?[e.pool.token0,e.pool.token1]:[e.pool.token1,e.pool.token0];t=e.isExactIn?"critical":"success",o=e.isExactIn?(0,i.jsxs)("span",{children:[(0,i.jsx)(n.cC,{id:"xNB0TS"}),"\xa0",a.symbol]}):(0,i.jsxs)("span",{children:[(0,i.jsx)(n.cC,{id:"qiOIiY"}),"\xa0",s.symbol]})}else t=e.type===st.MINT?"success":"critical",o=e.type===st.MINT?(0,i.jsx)(n.cC,{id:"m16xKo"}):(0,i.jsx)(n.cC,{id:"t/YqKh"});return(0,i.jsx)(w.Tv.BodyPrimary,{color:t,children:o})}),{id:"swap-type",header:()=>(0,i.jsx)(Je.b,{minWidth:100,justifyContent:"flex-start",children:(0,i.jsxs)(tt.j4,{modalOpen:h,onClick:()=>f(),ref:g,children:[(0,i.jsx)(et.w,{allFilters:Object.values(st),activeFilter:b,setFilters:C,isOpen:h}),(0,i.jsx)(w.Tv.BodySecondary,{children:(0,i.jsx)(n.cC,{id:"+zy2Nq"})})]})}),cell:e=>(0,i.jsx)(Je.b,{loading:$,minWidth:100,justifyContent:"flex-start",children:e.getValue?.()})}),e.accessor((e=>e.amountUSD),{id:"fiat-value",header:()=>(0,i.jsx)(Je.b,{minWidth:125,justifyContent:"flex-end",grow:!0,children:(0,i.jsx)(w.Tv.BodySecondary,{children:(0,i.jsx)(n.cC,{id:"ylhjte",values:{activeLocalCurrency:p}})})}),cell:e=>(0,i.jsx)(Je.b,{loading:$,minWidth:125,justifyContent:"flex-end",grow:!0,children:(0,i.jsx)(w.Tv.BodyPrimary,{children:m({price:e.getValue?.()})})})}),e.accessor((e=>({amount0:e.amount0,amount1:e.amount1})),{id:"input-amount",header:()=>(0,i.jsx)(Je.b,{loading:$,minWidth:125,justifyContent:"flex-end",grow:!0,children:(0,i.jsx)(w.m_,{to:`/explore/tokens/${s.toLowerCase()}/${t?.id}`,children:(0,i.jsx)(w.Tv.BodySecondary,{children:(0,O.sg)(t?.symbol)})})}),cell:e=>{let t=e.getValue?.();return(0,i.jsx)(Je.b,{loading:$,minWidth:125,justifyContent:"flex-end",grow:!0,children:(0,i.jsx)(w.Tv.BodyPrimary,{children:u({input:Math.abs(a?t?.amount1||0:t?.amount0||0),type:k.sw.TokenTx})})})}}),e.accessor((e=>({amount0:e.amount0,amount1:e.amount1})),{id:"output-amount",header:()=>(0,i.jsx)(Je.b,{loading:$,minWidth:125,justifyContent:"flex-end",grow:!0,children:(0,i.jsx)(w.m_,{to:`/explore/tokens/${s.toLowerCase()}/${o?.id}`,children:(0,i.jsx)(w.Tv.BodySecondary,{children:(0,O.sg)(o?.symbol)})})}),cell:e=>{let t=e.getValue?.();return(0,i.jsx)(Je.b,{loading:$,minWidth:125,justifyContent:"flex-end",grow:!0,children:(0,i.jsx)(w.Tv.BodyPrimary,{children:u({input:Math.abs(a?t?.amount0||0:t?.amount1||0),type:k.sw.TokenTx})})})}}),e.accessor((e=>e.maker),{id:"maker-address",header:()=>(0,i.jsx)(Je.b,{minWidth:100,justifyContent:"flex-end",grow:!0,children:(0,i.jsx)(w.Tv.BodySecondary,{children:(0,i.jsx)(n.cC,{id:"sb9Y58"})})}),cell:e=>(0,i.jsx)(Je.b,{loading:$,minWidth:100,justifyContent:"flex-end",grow:!0,children:(0,i.jsx)(pt,{href:(0,F.E)(l,e.getValue?.(),F.r.ADDRESS),children:(0,i.jsx)(w.Tv.BodyPrimary,{children:(0,M.Xn)(e.getValue?.(),0)})})})}),e.accessor((e=>(0,F.E)(l,e.transaction,F.r.TRANSACTION)),{id:"etherscan-link",header:()=>(0,i.jsx)(Je.b,{minWidth:32,justifyContent:"flex-end",children:(0,i.jsx)(w.Tv.BodySecondary,{children:(0,i.jsx)(n.cC,{id:"S3piC2"})})}),cell:e=>(0,i.jsx)(Je.b,{loading:$,minWidth:32,justifyContent:"flex-end",children:(0,i.jsx)(pt,{href:e.getValue?.(),"data-testid":e.getValue?.(),children:(0,i.jsx)(Pe.Z,{size:"16px",stroke:d.neutral1})})})})]}),[a,p,l,s,b,h,m,u,S,$,c,v.sortBy,v.sortDirection,d.neutral1,t?.id,t?.symbol,o?.id,o?.symbol]);return D?(0,i.jsx)(n.cC,{id:"03MhdB"}):(0,i.jsx)("div",{"data-testid":"pool-details-transactions-table",children:(0,i.jsx)(Ke.i,{columns:_,data:P,loading:$,loadMore:I,maxHeight:600})})}var mt;!function(e){e.TRANSACTIONS="transactions",e.POSITIONS="positions"}(mt||(mt={}));const ht=(0,j.default)(w.Tv.HeadlineMedium).withConfig({displayName:"PoolDetailsTable__TableHeader",componentId:"sc-7623dadc-0"})`
  color: ${({theme:e,active:t})=>!t&&e.neutral2};
  ${({disabled:e})=>!e&&w.iV}
  user-select: none;
`;function xt({poolAddress:e,token0:t,token1:o,isReversed:a}){const[r,l]=(0,y.useState)(mt.TRANSACTIONS),d=(0,x.Qj)((0,U.UO)().chainName),c=(0,x.Tz)(d),{account:p}=(0,ye.useWeb3React)(),{positions:u}=(0,je.Z)(p??"",[c]),m=(0,y.useMemo)((()=>u?.filter((t=>Ue.Pool.getAddress(t.pool.token0,t.pool.token1,t.pool.fee).toLowerCase()===e.toLowerCase()))??[]),[e,u]);return(0,i.jsxs)(s.ZP,{gap:"lg",children:[(0,i.jsxs)(S.ZP,{gap:"16px",children:[(0,i.jsx)(ht,{active:r===mt.TRANSACTIONS,onClick:()=>l(mt.TRANSACTIONS),disabled:!m.length,children:(0,i.jsx)(n.cC,{id:"4wyw8H"})}),Boolean(m.length)&&(0,i.jsxs)(ht,{active:r===mt.POSITIONS,onClick:()=>l(mt.POSITIONS),children:[(0,i.jsx)(n.cC,{id:"12Jgfh"}),` (${m?.length})`]})]}),r===mt.TRANSACTIONS?(0,i.jsx)(ut,{poolAddress:e,token0:t,token1:o,isReversed:a}):(0,i.jsx)(qe,{positions:m})]})}var ft=o(53609),gt=o(19530),yt=o.n(gt);const jt=(e,t,o)=>{const i=parseFloat(e)-parseFloat(t),n=parseFloat(t)-parseFloat(o),a=(i-n)/n*100;return isNaN(a)||!isFinite(a)?[i,0]:[i,a]},wt=e=>{let t="query blocks {";return t+=e.map((e=>`t${e}:blocks(first: 1, orderBy: timestamp, orderDirection: desc, where: { timestamp_gt: ${e}, timestamp_lt: ${e+600} }) {\n        number\n      }`)),t+="}",(0,nt.ZP)(t)};function bt(e,t){const[o,i]=(0,y.useState)(),[n,a]=(0,y.useState)(!1),s=rt.Pf[t],r=o?.[t];(0,y.useEffect)((()=>{r||n||async function(){const n=await async function(e,t,o,i,n=1e3){let a={},s=!1,r=0;try{for(;!s;){let l=i.length;r+n<i.length&&(l=r+n);const d=i.slice(r,l),c=await t.query({query:e(...o,d),fetchPolicy:"network-only"});a={...a,...c.data},Object.keys(c.data).length<n||r+n>i.length?s=!0:r+=n}return a}catch(l){return void console.log(l)}}(wt,s,[],e);n?i({...o??{},[t]:n}):a(!0)}()}),[]);const l=(0,y.useMemo)((()=>{if(o?.[t]){const e=o?.[t],i=[];for(const o in e)if(e[o].length>0){const n=e[o][0].number,a=ft.DM[t],s=n>a?n:a;i.push({timestamp:o.split("t")[1],number:s})}return i}}),[t,o]);return{blocks:l,error:n}}function kt(e,t){const o=[e],i=rt.uw[t||r.ChainId.MAINNET],[n,a,s]=function(){const e=Date.now();return[Math.floor((e-yt()("1d"))/1e3),Math.floor((e-yt()("2d"))/1e3),Math.floor((e-yt()("7d"))/1e3)]}(),{blocks:l,error:d}=bt([n,a,s],t||r.ChainId.MAINNET),[c,p,u]=l??[],{loading:m,error:h,data:x}=(0,it.zm)({variables:{poolId:o},client:i,fetchPolicy:"no-cache"}),{loading:f,error:g,data:j}=(0,it.zm)({variables:{poolId:o,block:c&&{number:parseFloat(c.number)}},client:i,fetchPolicy:"no-cache"}),{loading:w,error:b,data:k}=(0,it.zm)({variables:{poolId:o,block:p&&{number:parseFloat(p.number)}},client:i,fetchPolicy:"no-cache"}),{loading:C,error:v,data:T}=(0,it.zm)({variables:{poolId:o,block:u&&{number:parseFloat(u.number)}},client:i,fetchPolicy:"no-cache"});return(0,y.useMemo)((()=>{const t=Boolean(h||g||b||v),o=Boolean(m||f||w||C);if(t||o)return{loading:o,error:t,data:void 0};const i=x?.pools[0],n=j?.pools[0],a=k?.pools[0],s=T?.pools[0],r=x?.bundles?.[0]?.ethPriceUSD?parseFloat(x?.bundles?.[0]?.ethPriceUSD):0,[l,d]=i&&n&&a?jt(i.volumeUSD,n.volumeUSD,a.volumeUSD):i?[parseFloat(i.volumeUSD),0]:[0,0],c=i&&s?parseFloat(i.volumeUSD)-parseFloat(s.volumeUSD):i?parseFloat(i.volumeUSD):0,p=i&&n?parseFloat(i.volumeUSD)-parseFloat(n.volumeUSD):i?parseFloat(i.volumeUSD):0,u=i?parseFloat(i.feeTier)/1e4/100:0,y=i?.volumeToken0?parseFloat(i.volumeToken0)*u/2:0,P=i?.volumeToken1?parseFloat(i.volumeToken1)*u/2:0,$=i?parseFloat(i.totalValueLockedToken0)-y:0,I=i?parseFloat(i.totalValueLockedToken1)-P:0;let D=i?parseFloat(i.totalValueLockedUSD):0;const S=i&&n?(parseFloat(i.totalValueLockedUSD)-parseFloat(n.totalValueLockedUSD))/parseFloat("0"===n.totalValueLockedUSD?"1":n.totalValueLockedUSD)*100:0,_=i?$*parseFloat(i.token0.derivedETH)*r+I*parseFloat(i.token1.derivedETH)*r:void 0;return _&&(D=_),{data:i?{...i,address:e,volumeUSD:l,volumeUSDChange:d,volumeUSDWeek:c,volumeUSD24H:p,tvlUSD:parseFloat(i.totalValueLockedUSD),tvlUSDChange:S,tvlToken0:parseFloat(i.totalValueLockedToken0),tvlToken1:parseFloat(i.totalValueLockedToken1),tick:parseFloat(i.tick)}:void 0,error:t,loading:o}}),[d,x?.bundles,x?.pools,j?.pools,k?.pools,T?.pools,h,g,b,v,m,f,w,C,e])}nt.ZP`
  query PoolData($poolId: [ID!], $block: Block_height = null) {
    pools(
      where: { id_in: $poolId }
      block: $block
      orderBy: totalValueLockedUSD
      orderDirection: desc
      subgraphError: allow
    ) {
      id
      feeTier
      liquidity
      sqrtPrice
      tick
      token0 {
        id
        symbol
        name
        decimals
        derivedETH
      }
      token1 {
        id
        symbol
        name
        decimals
        derivedETH
      }
      token0Price
      token1Price
      volumeUSD
      volumeToken0
      volumeToken1
      txCount
      totalValueLockedToken0
      totalValueLockedToken1
      totalValueLockedUSD
    }
    bundles(where: { id: "1" }) {
      ethPriceUSD
    }
  }
`;var Ct=o(76743);const vt=(0,j.default)(S.ZP).withConfig({displayName:"PoolDetails__PageWrapper",componentId:"sc-d1fb40ff-0"})`
  padding: 48px;
  width: 100%;
  align-items: flex-start;
  gap: 60px;
  max-width: 1400px;

  @media (max-width: ${E.j$.lg-1}px) {
    flex-direction: column;
    gap: unset;
  }

  @media (max-width: ${E.j$.sm-1}px) {
    padding: 48px 16px;
  }
`,Tt=(0,j.default)(s.ZP).withConfig({displayName:"PoolDetails__LeftColumn",componentId:"sc-d1fb40ff-1"})`
  gap: 24px;
  width: 65vw;
  overflow: hidden;
  justify-content: flex-start;

  @media (max-width: ${E.j$.lg-1}px) {
    width: 100%;
  }
`,Pt=j.default.div.withConfig({displayName:"PoolDetails__ChartTypeSelectorContainer",componentId:"sc-d1fb40ff-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,$t=j.default.hr.withConfig({displayName:"PoolDetails__HR",componentId:"sc-d1fb40ff-3"})`
  border: 0.5px solid ${({theme:e})=>e.surface3};
  margin: 16px 0px;
  width: 100%;
`,It=(0,j.default)(s.ZP).withConfig({displayName:"PoolDetails__RightColumn",componentId:"sc-d1fb40ff-4"})`
  gap: 24px;
  margin: 0 48px 0 auto;
  width: 22vw;
  min-width: 360px;

  @media (max-width: ${E.j$.lg-1}px) {
    margin: 44px 0px;
    width: 100%;
    min-width: unset;
  }
`,Dt=(0,j.default)(s.ZP).withConfig({displayName:"PoolDetails__TokenDetailsWrapper",componentId:"sc-d1fb40ff-5"})`
  gap: 24px;
  padding: 20px;

  @media (max-width: ${E.j$.lg-1}px) and (min-width: ${E.j$.sm}px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding: unset;
  }

  @media (max-width: ${E.j$.sm-1}px) {
    padding: unset;
  }
`,St=(0,j.default)(ee.xv).withConfig({displayName:"PoolDetails__TokenDetailsHeader",componentId:"sc-d1fb40ff-6"})`
  width: 100%;
  font-size: 24px;
  font-weight: 485;
  line-height: 32px;
`,_t=(0,j.default)(s.ZP).withConfig({displayName:"PoolDetails__LinksContainer",componentId:"sc-d1fb40ff-7"})`
  gap: 16px;
  width: 100%;
`;function Nt(){const{poolAddress:e,chainName:t}=(0,U.UO)(),o=(0,x._3)(t),r=o&&(0,x.Tz)(o),{data:l,loading:d}=kt(e??"",r),[c,p]=(0,y.useReducer)((e=>!e),!1),u=c?l?.token1:l?.token0,m=c?l?.token0:l?.token1,h=!t||!e||!(0,x._3)(t)||!(0,M.UJ)(e),f=!d&&!l||h,[g,j]=(0,y.useState)(a.oX.VOLUME),[w,b]=(0,y.useState)(a.E4.LINE);return f?(0,i.jsx)(Ct.default,{}):(console.log(l,"poolData"),(0,i.jsxs)(vt,{children:[(0,i.jsxs)(Tt,{children:[(0,i.jsxs)(s.ZP,{gap:"lg",children:[(0,i.jsx)(P.G7,{chainId:r,poolAddress:e,token0:u,token1:m,loading:d}),(0,i.jsxs)(S.ZP,{justify:"space-between",children:[(0,i.jsx)(P.dG,{chainId:r,token0:u,token1:m,feeTier:l?.feeTier,toggleReversed:p,loading:d}),(0,i.jsx)(Pt,{})]}),(0,i.jsx)(T,{token0:u,token1:m,chartType:g,priceChartType:w,feeTier:l?.feeTier,volume:l?.poolDayData||[],loading:d})]}),(0,i.jsx)($t,{}),(0,i.jsx)(xt,{poolAddress:e,token0:u,token1:m,isReversed:c})]}),(0,i.jsxs)(It,{children:[(0,i.jsx)(Be,{chainId:r,token0:u,token1:m,feeTier:l?.feeTier,loading:d}),(0,i.jsx)(he,{poolData:l,isReversed:c,chainId:r,loading:d}),(0,i.jsxs)(Dt,{children:[(0,i.jsx)(St,{children:(0,i.jsx)(n.cC,{id:"Rj01Fz"})}),(0,i.jsxs)(_t,{children:[(0,i.jsx)(Y,{address:e,chainId:r,tokens:[u,m],loading:d}),(0,i.jsx)(Y,{address:u?.id,chainId:r,tokens:[u],loading:d}),(0,i.jsx)(Y,{address:m?.id,chainId:r,tokens:[m],loading:d})]})]})]})]}))}}}]);
//# sourceMappingURL=6920.65d8a8ac.chunk.js.map