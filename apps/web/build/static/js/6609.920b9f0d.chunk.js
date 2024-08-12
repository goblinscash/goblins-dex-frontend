"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[6609,5187],{95267:(e,t,o)=>{o.d(t,{Z:()=>d});var i=o(39491),n=o(37954),a=o.n(n);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},s.apply(this,arguments)}function r(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=(0,i.forwardRef)((function(e,t){var o=e.color,n=void 0===o?"currentColor":o,a=e.size,l=void 0===a?24:a,d=r(e,["color","size"]);return i.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),i.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));l.propTypes={color:a().string,size:a().oneOfType([a().string,a().number])},l.displayName="Plus";const d=l},76743:(e,t,o)=>{o.r(t),o.d(t,{default:()=>j});var i=o(21339),n=o(88693),a=o(56542),s=o(4570),r=o(70357),l=o(49680),d=o(99123),c=o(33552),p=o(10548),u=o(7518);const h=o.p+"static/media/404-page-dark.f24684e761633ae99402.png",m=o.p+"static/media/404-page-light.c448d3fd36de14609aba.png",x=c.default.img.withConfig({displayName:"NotFound__Image",componentId:"sc-22bd2404-0"})`
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
`;function j(){const e=(0,u.Gv)(),t=(0,l.dD)(),o=t?p.Tv.LargeHeader:p.Tv.Hero,c=t?p.Tv.HeadlineMedium:p.Tv.HeadlineLarge;return(0,i.jsx)(y,{children:(0,i.jsxs)(s.fM,{page:a.yJ.NOT_FOUND,shouldLogImpression:!0,children:[(0,i.jsxs)(g,{children:[(0,i.jsxs)(f,{children:[(0,i.jsx)(o,{children:"404"}),(0,i.jsx)(c,{color:"neutral2",children:(0,i.jsx)(n.cC,{id:"yduHrq"})})]}),(0,i.jsx)(x,{src:e?h:m,alt:"Liluni"})]}),(0,i.jsx)(r.Hm,{as:d.rU,to:"/",children:(0,i.jsx)(n.cC,{id:"GTK9OW"})})]})})}},66192:(e,t,o)=>{o.r(t),o.d(t,{default:()=>Yt});var i=o(21339),n=o(88693),a=o(56374),s=o(65023),r=o(82032),l=o(79357),d=o(16685),c=o(24051),p=o(59332),u=o(76139),h=o(83748),m=o(77489),x=o(25093),f=o(83787),g=o(12973),y=o(59815),j=o(39491),b=o(33552),w=o(10548),C=o(48664),k=o(19369);const v=380,T=(a.oX.PRICE,a.oX.VOLUME,a.oX.LIQUIDITY,b.default.div.withConfig({displayName:"ChartSection__TimePeriodSelectorContainer",componentId:"sc-d6e7da1a-0"})`
  position: absolute;
  top: 4px;
  right: 72px;
  z-index: ${C.k.active};
  @media only screen and (max-width: ${({theme:e})=>e.breakpoint.lg}px) {
    position: static;
    margin-top: 4px;
  }
  @media only screen and (max-width: ${({theme:e})=>e.breakpoint.xs}px) {
    width: 100%;
  }
`),P={[a.oX.PRICE]:function({currencyA:e,currencyB:t,timePeriod:o,height:n,priceChartType:a}){const{formatCurrencyAmount:s,formatPrice:p}=(0,k.Gb)(),u=(0,x.m)({variables:{...(0,f.PT)(e),duration:(0,f.uw)(o)}}),g=(0,h.Y_)(u.data),b=(0,j.useMemo)((()=>(0,c.ll)(g)),[g]),C=(0,j.useMemo)((()=>({data:b,type:a})),[b,a]),v=(0,y.ZP)(e);if(!b.length||!e||!t)return(0,i.jsx)(m.sT,{});const T=b[b.length-1];return(0,i.jsx)(d.k,{Model:c.r4,params:C,height:n,children:o=>{const n=o??T,a=Math.floor((n.value??n.close)*10**t.decimals),d=(0,i.jsx)(w.Tv.HeadlineMedium,{children:`1 ${e.symbol} = ${s({amount:r.CurrencyAmount.fromRawAmount(t,a)})} \n            ${t.symbol} ${v?"("+p({price:v})+")":""}`});return(0,i.jsx)(l._,{value:d,additionalFields:(0,i.jsx)(c.Tg,{startingPrice:b[0],endingPrice:n}),valueFormatterType:k.sw.FiatTokenPrice,time:o?.time})}})},[a.oX.VOLUME]:u.x,[a.oX.LIQUIDITY]:m.sT};function $(e){const[t,o]=(0,j.useState)(f.XH.DAY),[n,a]=[(0,g.U8)(e.token0?.id),(0,g.U8)(e.token1?.id)],s=(0,j.useMemo)((()=>[...Array(20).keys()].map((e=>({value:1e5*Math.random()+500,timestamp:100123131+1e3*e})))),[t]);if(e.loading||!n||!a)return(0,i.jsx)(m.sT,{});const r=P[e.chartType],l={...e,height:v,timePeriod:t,currencyA:n,currencyB:a,volumes:s};return(0,i.jsxs)(h.BO,{isInfoTDPEnabled:!0,"data-testid":"pdp-chart-container",children:[(0,i.jsx)(r,{...l}),(0,i.jsx)(T,{children:(0,i.jsx)(p.Z,{timePeriod:t,onChangeTimePeriod:o})})]})}var I=o(62773),S=o(88584);const _=e=>(0,i.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,i.jsx)("path",{id:"box-search_2",d:"M6.32064 7.43328C6.4873 7.50661 6.66065 7.55329 6.83398 7.59329V13.94C6.72732 13.9133 6.62067 13.8733 6.52067 13.8266L2.52067 12.0466C1.80067 11.7266 1.33398 11.0133 1.33398 10.2199V5.77996C1.33398 5.59996 1.36064 5.41995 1.40731 5.25329L6.32064 7.43328ZM12.754 4.37328C12.5807 4.19995 12.3806 4.05328 12.1473 3.95328L8.1473 2.17329C7.6273 1.93996 7.04067 1.93996 6.52067 2.17329L2.52067 3.95328C2.28734 4.05328 2.08731 4.19995 1.91398 4.37328L6.72062 6.51328C7.10729 6.68661 7.55401 6.68661 7.94735 6.51328L12.754 4.37328ZM11.1347 7.92862C11.8227 7.76662 12.4766 7.81863 13.0646 8.02129C13.1966 8.06663 13.334 7.97729 13.334 7.83729V5.77996C13.334 5.59996 13.3073 5.41995 13.2607 5.25329L8.34733 7.43328C8.18066 7.49995 8.00732 7.55329 7.83398 7.59329V13.94C7.84598 13.948 7.84599 13.9479 7.85799 13.9559L8.98665 13.452C9.10132 13.4006 9.13533 13.262 9.066 13.158C8.584 12.4373 8.37864 11.522 8.57397 10.5586C8.83464 9.27263 9.85802 8.22929 11.1347 7.92862ZM15.0207 14.3526C14.9233 14.4499 14.7953 14.4993 14.6673 14.4993C14.5393 14.4993 14.4113 14.4506 14.314 14.3526L13.2807 13.3193C12.896 13.5713 12.4386 13.7213 11.9453 13.7213C10.5973 13.7213 9.50065 12.6246 9.50065 11.2766C9.50065 9.92862 10.5973 8.83194 11.9453 8.83194C13.2926 8.83194 14.3893 9.92862 14.3893 11.2766C14.3893 11.77 14.24 12.228 13.988 12.6119L15.0213 13.6453C15.216 13.8406 15.216 14.1573 15.0207 14.3526ZM13.3893 11.2773C13.3893 10.4806 12.7413 9.83261 11.9453 9.83261C11.1486 9.83261 10.5007 10.4806 10.5007 11.2773C10.5007 12.0739 11.1486 12.722 11.9453 12.722C12.7413 12.7213 13.3893 12.0733 13.3893 11.2773Z",fill:"white"})});var D=o(44680),N=o(17358),L=o(379),B=o(91943),E=o(97472),U=o(96439),M=o(92686),O=o(39681),F=o(6970),Z=o(54359),R=o(46733);const A=(0,b.default)(w.Tv.BodyPrimary).withConfig({displayName:"PoolDetailsLink__TokenName",componentId:"sc-15d87bb3-0"})`
  display: none;

  @media (max-width: ${O.j$.lg-1}px) and (min-width: ${O.j$.xs-1}px) {
    display: block;
  }
  ${w.cw}
`,H=(0,b.default)(N.ZP).withConfig({displayName:"PoolDetailsLink__TokenTextWrapper",componentId:"sc-15d87bb3-1"})`
  gap: 8px;
  margin-right: 12px;
  ${({isClickable:e})=>e&&w.iV}
`,V=(0,b.default)(w.Tv.BodyPrimary).withConfig({displayName:"PoolDetailsLink__SymbolText",componentId:"sc-15d87bb3-2"})`
  flex-shrink: 0;

  @media (max-width: ${O.j$.lg-1}px) and (min-width: ${O.j$.xs-1}px) {
    color: ${({theme:e})=>e.neutral2};
  }
  ${w.cw}
`,W=(0,b.default)(N.ZP).withConfig({displayName:"PoolDetailsLink__CopyAddress",componentId:"sc-15d87bb3-3"})`
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
`,z=(0,b.default)(E.Z).withConfig({displayName:"PoolDetailsLink__StyledCopyIcon",componentId:"sc-15d87bb3-4"})`
  width: 16px;
  height: 16px;
  color: ${({theme:e})=>e.neutral2};
  flex-shrink: 0;
`,G=b.default.div.withConfig({displayName:"PoolDetailsLink__ExplorerWrapper",componentId:"sc-15d87bb3-5"})`
  padding: 8px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.surface3};
  display: flex;
  ${w.iV}
`,X=(0,b.default)(N.ZP).withConfig({displayName:"PoolDetailsLink__ButtonsRow",componentId:"sc-15d87bb3-6"})`
  gap: 8px;
  flex-shrink: 0;
  width: max-content;
`;function Y({address:e,chainId:t,tokens:o,loading:a}){const s=(0,b.useTheme)(),l=[(0,g.U8)(o[0]?.id,t)??void 0,(0,g.U8)(o[1]?.id,t)??void 0],[,d]=(0,B.Z)(),c=(0,j.useCallback)((()=>{e&&d(e)}),[e,d]),p=2===o.length,u=e&&t&&(0,Z.E)(t,e,p?Z.r.ADDRESS:Z.r.TOKEN),h=(0,M.s0)(),m=(0,L.C)(),x=(0,f.Ld)(t),y=(0,j.useCallback)((()=>{p||h((0,f.dG)({address:o[0]?.id,chain:x,isInfoExplorePageEnabled:m}))}),[h,o,p,x,m]);return!a&&e&&t?(0,i.jsxs)(N.ZP,{align:"space-between",children:[(0,i.jsxs)(H,{"data-testid":p?`pdp-pool-logo-${o[0]?.symbol}-${o[1]?.symbol}`:`pdp-token-logo-${o[0]?.symbol}`,isClickable:!p,onClick:y,children:[p?(0,i.jsx)(I.io,{chainId:t,currencies:l,size:20}):(0,i.jsx)(D.Z,{currency:l[0],size:"20px"}),(0,i.jsx)(A,{children:p?(0,i.jsx)(n.cC,{id:"ou6PkF"}):o[0]?.name}),(0,i.jsx)(V,{children:p?`${o[0]?.symbol} / ${o[1]?.symbol}`:(0,i.jsxs)(N.ZP,{gap:"4px",children:[o[0]?.symbol," ",(0,i.jsx)(U.Z,{size:16,color:s.neutral2})]})})]}),(0,i.jsxs)(X,{children:[(0,i.jsxs)(W,{"data-testid":`copy-address-${e}`,onClick:c,children:[(0,F.Xn)(e),(0,i.jsx)(z,{})]}),u&&(0,i.jsx)(w.dL,{href:u,"data-testid":`explorer-url-${u}`,children:(0,i.jsx)(G,{children:t===r.ChainId.MAINNET?(0,i.jsx)(S.P,{width:"16px",height:"16px",fill:s.neutral2}):(0,i.jsx)(_,{width:"16px",height:"16px",stroke:s.darkMode?"none":s.neutral2})})})]})]}):(0,i.jsxs)(N.ZP,{gap:"8px",padding:"6px 0px",children:[(0,i.jsx)(R.F,{}),(0,i.jsx)(R.k,{$width:117})]})}var q=o(96334),K=o(98878),Q=o(21309),J=o(7108),ee=o(99123),te=o(9726),oe=o(49908);const ie=(0,b.default)(te.xv).withConfig({displayName:"PoolDetailsStats__HeaderText",componentId:"sc-2f5c2b89-0"})`
  font-weight: 485;
  font-size: 24px;
  line-height: 36px;
  @media (max-width: ${O.j$.lg-1}px) {
    width: 100%;
  }
`,ne=(0,b.default)(s.ZP).withConfig({displayName:"PoolDetailsStats__StatsWrapper",componentId:"sc-2f5c2b89-1"})`
  gap: 24px;
  padding: 20px;
  border-radius: 20px;
  background: ${({theme:e})=>e.surface2};
  width: 100%;
  z-index: 1;
  margin-top: ${({loaded:e})=>e&&"-24px"};

  @media (max-width: ${O.j$.lg-1}px) {
    flex-direction: row;
    background: transparent;
    flex-wrap: wrap;
    padding: 20px 0px;
    justify-content: space-between;
    margin-top: 0px;
  }
`,ae=(0,b.default)(s.ZP).withConfig({displayName:"PoolDetailsStats__StatItemColumn",componentId:"sc-2f5c2b89-2"})`
  gap: 8px;
  flex: 1;
  min-width: 180px;

  @media (max-width: ${O.j$.sm}px) {
    min-width: 150px;
  }
`,se=(0,b.default)(N.ZP).withConfig({displayName:"PoolDetailsStats__PoolBalanceSymbols",componentId:"sc-2f5c2b89-3"})`
  justify-content: space-between;

  @media (max-width: ${O.j$.lg-1}px) {
    flex-direction: column;
  }
`,re=(0,b.default)(N.ZP).withConfig({displayName:"PoolDetailsStats__PoolBalanceTokenNamesContainer",componentId:"sc-2f5c2b89-4"})`
  font-weight: 485;
  font-size: 16px;
  line-height: 24px;
  width: max-content;

  @media (max-width: ${O.j$.lg-1}px) {
    font-size: 20px;
    line-height: 28px;
    width: 100%;
  }
`,le=(0,b.default)(ee.rU).withConfig({displayName:"PoolDetailsStats__StyledLink",componentId:"sc-2f5c2b89-5"})`
  display: flex;
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  ${w.iV}
`,de=b.css`
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-right: 1px solid ${({theme:e})=>e.surface2};
`,ce=b.css`
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left: 1px solid ${({theme:e})=>e.surface2};
`,pe=b.default.div.withConfig({displayName:"PoolDetailsStats__BalanceChartSide",componentId:"sc-2f5c2b89-6"})`
  height: 8px;
  width: ${({percent:e})=>100*e}%;
  background: ${({$color:e})=>e};
  ${({isLeft:e})=>e?de:ce}
`,ue=(0,b.default)(q.X).withConfig({displayName:"PoolDetailsStats__StatSectionBubble",componentId:"sc-2f5c2b89-7"})`
  width: 180px;
  height: 40px;
`,he=(0,b.default)(q.X).withConfig({displayName:"PoolDetailsStats__StatHeaderBubble",componentId:"sc-2f5c2b89-8"})`
  width: 116px;
  height: 24px;
  border-radius: 8px;
`,me=({token:e,chainId:t})=>{const o=(0,J.e)().lg,{formatNumber:n}=(0,k.Gb)();return(0,i.jsxs)(re,{children:[!o&&(0,i.jsx)(D.Z,{currency:e.currency,size:"20px",style:{marginRight:"8px"}}),n({input:e.tvl,type:k.sw.TokenQuantityStats}),"\xa0",(0,i.jsxs)(le,{to:(0,f.dG)({address:e.id,chain:(0,f.Ld)(t),isInfoExplorePageEnabled:!0}),children:[o&&(0,i.jsx)(D.Z,{currency:e.currency,size:"16px",style:{marginRight:"4px",marginLeft:"4px"}}),e.symbol]})]})};function xe({poolData:e,isReversed:t,chainId:o,loading:a}){const r=(0,J.e)().lg,l=(0,b.useTheme)(),d=(0,g.U8)(e?.token0?.id,o)??void 0,c=(0,g.U8)(e?.token1?.id,o)??void 0,p=(0,Q.r)(d,l.surface2,l.darkMode);let u=(0,Q.r)(c,l.surface2,l.darkMode);p===u&&p===l.accent1&&(u=oe.O9.blue400);const[h,m]=(0,j.useMemo)((()=>{if(e){const o=e?.tvlToken0/e?.token0Price+e?.tvlToken1,i={...e?.token0,price:e?.token0Price,tvl:e?.tvlToken0,color:p,percent:e?.tvlToken0/e?.token0Price/o,currency:d},n={...e?.token1,price:e?.token1Price,tvl:e?.tvlToken1,color:u,percent:e?.tvlToken1/o,currency:c};return t?[n,i]:[i,n]}return[void 0,void 0]}),[p,u,d,c,t,e]);return!a&&h&&m&&e?(0,i.jsxs)(ne,{loaded:!0,children:[(0,i.jsx)(ie,{children:(0,i.jsx)(n.cC,{id:"29Hx9U"})}),(0,i.jsxs)(ae,{children:[(0,i.jsx)(w.Tv.BodySecondary,{children:(0,i.jsx)(n.cC,{id:"2mfj90"})}),(0,i.jsxs)(se,{children:[(0,i.jsx)(me,{token:h,chainId:o}),(0,i.jsx)(me,{token:m,chainId:o})]}),r&&(0,i.jsxs)(N.ZP,{"data-testid":"pool-balance-chart",children:[h.color&&(0,i.jsx)(pe,{percent:h.percent,$color:h.color,isLeft:!0}),m.color&&(0,i.jsx)(pe,{percent:m.percent,$color:m.color,isLeft:!1})]})]}),(0,i.jsx)(ye,{title:(0,i.jsx)(n.cC,{id:"FHKsZF"}),value:e.tvlUSD,delta:e.tvlUSDChange}),(0,i.jsx)(ye,{title:(0,i.jsx)(n.cC,{id:"0RweTm"}),value:e.volumeUSD,delta:e.volumeUSDChange}),(0,i.jsx)(ye,{title:(0,i.jsx)(n.cC,{id:"PpS90j"}),value:e.volumeUSD*(e.feeTier/1e6)})]}):(0,i.jsxs)(ne,{children:[(0,i.jsx)(ie,{children:(0,i.jsx)(he,{})}),Array.from({length:4}).map(((e,t)=>(0,i.jsxs)(s.ZP,{gap:"md",children:[(0,i.jsx)(R.k,{}),(0,i.jsx)(ue,{})]},`loading-info-row-${t}`)))]})}const fe=(0,b.default)(N.ZP).withConfig({displayName:"PoolDetailsStats__StatsTextContainer",componentId:"sc-2f5c2b89-9"})`
  gap: 4px;
  width: 100%;
  align-items: flex-end;

  @media (max-width: ${O.j$.lg-1}px) {
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
  }
`,ge=(0,b.default)(te.xv).withConfig({displayName:"PoolDetailsStats__StatItemText",componentId:"sc-2f5c2b89-10"})`
  color: ${({theme:e})=>e.neutral1};
  font-size: 36px;
  font-weight: 485;
  line-height: 44px;

  @media (max-width: ${O.j$.lg-1}px) {
    font-size: 20px;
    line-height: 28px;
  }
`;function ye({title:e,value:t,delta:o}){const{formatNumber:n,formatDelta:a}=(0,k.Gb)();return(0,i.jsxs)(ae,{children:[(0,i.jsx)(w.Tv.BodySecondary,{children:e}),(0,i.jsxs)(fe,{children:[(0,i.jsx)(ge,{children:n({input:t,type:k.sw.FiatTokenStats})}),!!o&&(0,i.jsxs)(N.ZP,{width:"max-content",padding:"4px 0px",children:[(0,i.jsx)(K.Kx,{delta:o}),(0,i.jsx)(w.Tv.BodySecondary,{children:a(o)})]})]})]})}var je=o(75422),be=o(13691),we=o(6125),Ce=o(73474),ke=o(44488),ve=o(67254),Te=o(6681),Pe=o(95267),$e=o(54311),Ie=o(17513),Se=o(51232);const _e=(0,b.default)(N.ZP).withConfig({displayName:"PoolDetailsStatsButtons__PoolDetailsStatsButtonsRow",componentId:"sc-e1598f45-0"})`
  gap: 12px;
  z-index: 1;

  @media (max-width: ${O.j$.lg-1}px) {
    display: none;
  }
`,De=b.default.button.withConfig({displayName:"PoolDetailsStatsButtons__PoolButton",componentId:"sc-e1598f45-1"})`
  display: flex;
  flex-direction: row;
  padding: 12px 16px 12px 12px;
  border: unset;
  border-radius: 900px;
  width: ${({open:e})=>e?"100px":"50%"};
  gap: 8px;
  color: ${({theme:e,open:t})=>t?e.neutral1:e.accent1};
  background-color: ${({theme:e,open:t})=>!t&&(0,Ie.j)(12,e.accent1)};
  justify-content: center;
  transition: ${({theme:e})=>`width ${e.transition.duration.medium} ${e.transition.timing.inOut}`};
  border: ${({theme:e,open:t})=>t&&`1px solid ${e.surface3}`};
  ${w.iV}
`,Ne=(0,b.default)(we.o).withConfig({displayName:"PoolDetailsStatsButtons__SwapIcon",componentId:"sc-e1598f45-2"})`
  fill: ${({theme:e})=>e.accent1};
  rotate: 90deg;
`,Le=(0,b.default)(q.X).withConfig({displayName:"PoolDetailsStatsButtons__ButtonBubble",componentId:"sc-e1598f45-3"})`
  height: 44px;
  width: 175px;
  border-radius: 900px;
`,Be=b.default.div.withConfig({displayName:"PoolDetailsStatsButtons__SwapModalWrapper",componentId:"sc-e1598f45-4"})`
  z-index: 0;
  max-height: ${({open:e})=>e?"100vh":"0"};
  transition: ${({theme:e})=>`max-height ${e.transition.duration.medium} ${e.transition.timing.ease}`};
  padding-bottom: ${({open:e})=>e?"24px":"0"};

  ${Ce.R0} {
    &:before {
      background-color: unset;
    }
  }

  @media (max-width: ${O.j$.lg-1}px) {
    display: none;
  }
`;function Ee({chainId:e,token0:t,token1:o,feeTier:a,loading:r}){const{chainId:l,connector:d,account:c}=(0,je.useWeb3React)(),{positions:p}=(0,be.Z)(c??"",e?[e]:void 0),u=p&&function(e,t,o,i){return e?.find((e=>(e?.details.token0.toLowerCase()===t?.id||e?.details.token0.toLowerCase()===o?.id)&&(e?.details.token1.toLowerCase()===t?.id||e?.details.token1.toLowerCase()===o?.id)&&e?.details.fee==i&&!e.closed))}(p,t,o,a),h=u?.details.tokenId,m=(0,ke.o)(),x=(0,M.s0)(),f=(0,g.U8)(t?.id,e),y=(0,g.U8)(o?.id,e),[b,C]=(0,j.useReducer)((e=>!e),!1),[k,v]=(0,j.useReducer)((e=>!e),!1);return!r&&f&&y?(0,i.jsxs)(s.ZP,{gap:"lg",children:[(0,i.jsxs)(_e,{children:[(0,i.jsx)(De,{onClick:C,open:b,"data-testid":`pool-details-${b?"close":"swap"}-button`,children:b?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Te.Z,{size:20}),(0,i.jsx)(w.Tv.BodyPrimary,{fontWeight:535,color:"accentActive",children:(0,i.jsx)(n.cC,{id:"yz7wBu"})})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Ne,{}),(0,i.jsx)(w.Tv.BodyPrimary,{fontWeight:535,color:"accentActive",children:(0,i.jsx)(n.cC,{id:"vH2C/2"})})]})}),(0,i.jsxs)(De,{onClick:async()=>{f&&y&&(l!==e&&e&&await m(d,e),x(`/add/${(0,Se.H)(f)}/${(0,Se.H)(y)}/${a}${h?`/${h}`:""}`))},onMouseEnter:v,onMouseLeave:v,"data-testid":"pool-details-add-liquidity-button",children:[!k&&(0,i.jsx)(Pe.Z,{size:20}),(0,i.jsx)(w.Tv.BodyPrimary,{fontWeight:535,color:"accentActive",children:(0,i.jsx)(n.cC,{id:"E6MqGy"})}),k&&(0,i.jsx)($e.Z,{size:20})]})]}),(0,i.jsx)(Be,{open:b,"data-testid":"pool-details-swap-modal",children:(0,i.jsx)(ve.HY,{chainId:e,initialInputCurrency:f,initialOutputCurrency:y,disableTokenInputs:e!==l})})]}):(0,i.jsxs)(_e,{"data-testid":"pdp-buttons-loading-skeleton",children:[(0,i.jsx)(Le,{}),(0,i.jsx)(Le,{})]})}var Ue=o(39303);const Me=e=>(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",...e,children:[(0,i.jsxs)("g",{clipPath:"url(#clip0_2958_135280)",children:[(0,i.jsx)("path",{d:"M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z",stroke:"#9B9B9B",strokeLinecap:"round",strokeLinejoin:"round"}),(0,i.jsx)("path",{d:"M2.46484 2.46509L9.53484 9.53509",stroke:"#9B9B9B",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,i.jsx)("defs",{children:(0,i.jsx)("clipPath",{id:"clip0_2958_135280",children:(0,i.jsx)("rect",{width:"12",height:"12",fill:"white"})})})]});var Oe=o(59926),Fe=o(79799),Ze=o(47021);const Re=(0,b.default)(s.ZP).withConfig({displayName:"PoolDetailsPositionsTable__PositionTableWrapper",componentId:"sc-e4efa33-0"})`
  gap: 24px;
  margin-top: 24px;
  width: 100%;
`,Ae=(0,b.default)(s.ZP).withConfig({displayName:"PoolDetailsPositionsTable__PositionWrapper",componentId:"sc-e4efa33-1"})`
  gap: 4px;
  background: ${({theme:e})=>e.surface2};
  border-radius: 12px;
  width: 100%;
  ${w.iV}
  padding: 16px;
`,He=(0,b.default)(w.Tv.LabelMicro).withConfig({displayName:"PoolDetailsPositionsTable__FeeTier",componentId:"sc-e4efa33-2"})`
  padding: 4px 6px;
  background: ${({theme:e})=>e.surface2};
`,Ve=(0,b.default)(N.ZP).withConfig({displayName:"PoolDetailsPositionsTable__StatusWrapper",componentId:"sc-e4efa33-3"})`
  gap: 8px;
  width: max-content;
  margin-right: 0;
  margin-left: auto;
  color ${({theme:e,status:t})=>t===Ye.IN_RANGE?e.success:t===Ye.OUT_OF_RANGE?e.deprecated_accentWarning:e.neutral2};
`,We=(0,b.default)(N.ZP).withConfig({displayName:"PoolDetailsPositionsTable__RangeWrapper",componentId:"sc-e4efa33-4"})`
  gap: 10px;

  @media screen and (max-width: ${O.j$.sm}px) {
    flex-direction: column;
    gap: 4px;
    align-items: flex-start;
  }
`,ze=(0,b.default)((e=>(0,i.jsx)("svg",{width:"14",height:"9",viewBox:"0 0 14 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,i.jsx)("path",{d:"M4.00284 8.5L0.184659 4.68182L4.00284 0.863636L4.65909 1.51136L1.95739 4.21307H12.1335L9.43182 1.51136L10.0881 0.863636L13.9062 4.68182L10.0881 8.5L9.43182 7.84375L12.1335 5.15057H1.95739L4.65909 7.84375L4.00284 8.5Z",fill:"#5E5E5E"})}))).withConfig({displayName:"PoolDetailsPositionsTable__StyledDoubleArrow",componentId:"sc-e4efa33-5"})`
  @media screen and (max-width: ${O.j$.sm}px) {
    display: none;
  }
`,Ge=(0,b.default)(w.Tv.Caption).withConfig({displayName:"PoolDetailsPositionsTable__RangeText",componentId:"sc-e4efa33-6"})`
  width: max-content;
  white-space: nowrap;
`,Xe=b.default.div.withConfig({displayName:"PoolDetailsPositionsTable__StyledDot",componentId:"sc-e4efa33-7"})`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.success};
`;var Ye;function qe({positionInfo:e}){const t=[(0,g.U8)(e.details.token0,e.chainId),(0,g.U8)(e.details.token1,e.chainId)],{chainId:o,connector:a}=(0,je.useWeb3React)(),s=(0,M.s0)(),r=(0,ke.o)(),l=(0,b.useTheme)(),{formatTickPrice:d}=(0,k.Gb)(),c=(0,j.useCallback)((async()=>{o!==e.chainId&&await r(a,e.chainId),s("/pool/"+e.details.tokenId)}),[a,s,e.chainId,e.details.tokenId,r,o]),p=e.inRange?Ye.IN_RANGE:e.closed?Ye.CLOSED:Ye.OUT_OF_RANGE,u=e.position.token0PriceLower.invert(),h=e.position.token0PriceUpper.invert(),m={LOWER:0===parseFloat(h.toFixed(0)),UPPER:parseFloat(u.toFixed(0))>Number.MAX_SAFE_INTEGER};return(0,i.jsxs)(Ae,{onClick:c,children:[(0,i.jsxs)(N.ZP,{gap:"8px",children:[(0,i.jsx)(I.ge,{chainId:e.chainId,currencies:t,size:16}),(0,i.jsxs)(w.Tv.SubHeader,{children:[e.pool.token0.symbol,"/",e.pool.token1.symbol]}),(0,i.jsxs)(He,{children:[e.pool.fee/Oe.PM,"%"]}),(0,i.jsxs)(Ve,{status:p,children:[(0,i.jsx)(w.Tv.Caption,{color:"inherit",children:p}),p===Ye.IN_RANGE&&(0,i.jsx)(Xe,{}),p===Ye.OUT_OF_RANGE&&(0,i.jsx)(Fe.Z,{size:12,color:l.deprecated_accentWarning}),p===Ye.CLOSED&&(0,i.jsx)(Me,{})]})]}),(0,i.jsxs)(We,{children:[(0,i.jsxs)(Ge,{"data-testid":`position-min-${h.toFixed(0)}`,children:[(0,i.jsx)(n.cC,{id:"0uYsLP"}),"\xa0",d({price:h,atLimit:m,direction:Ze.Mb.LOWER}),"\xa0",e.pool.token0.symbol,"\xa0",(0,i.jsx)(n.cC,{id:"b2jAb+"}),"\xa0",e.pool.token1.symbol]}),(0,i.jsx)(ze,{}),(0,i.jsxs)(Ge,{"data-testid":`position-max-${u.toFixed(0)}`,children:[(0,i.jsx)(n.cC,{id:"BniuBY"}),"\xa0",d({price:u,atLimit:m,direction:Ze.Mb.UPPER}),"\xa0",e.pool.token0.symbol,"\xa0",(0,i.jsx)(n.cC,{id:"b2jAb+"}),"\xa0",e.pool.token1.symbol]})]})]})}function Ke({positions:e}){return(0,i.jsx)(Re,{children:e.map(((e,t)=>(0,i.jsx)(qe,{positionInfo:e},`pool-position-${t}`)))})}!function(e){e.IN_RANGE="In range",e.OUT_OF_RANGE="Out of range",e.CLOSED="Closed"}(Ye||(Ye={}));var Qe=o(12762),Je=o(82786),et=o(44878),tt=o(87148),ot=o(54210),it=o(95326),nt=o(66644),at=o(86147);function st(e){const t=e.toString(),o=t.replace(".","").replace(/^0+/,"");return(t.includes(".")?o:o.replace(/0+$/,"")).length}var rt,lt=o(70762);at.Ps`
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
`,function(e){e.BUY="Buy",e.SELL="Sell",e.BURN="Burn",e.MINT="Mint"}(rt||(rt={}));var dt=o(59155),ct=o(84087),pt=o(33151);const ut=(0,b.default)(w.dL).withConfig({displayName:"PoolDetailsTransactionsTable__StyledExternalLink",componentId:"sc-b8829eff-0"})`
  color: ${({theme:e})=>e.neutral2};
  stroke: ${({theme:e})=>e.neutral2};
`;function ht({poolAddress:e,token0:t,token1:o}){const a=(0,f.Qj)((0,M.UO)().chainName),s=(0,f.Tz)(a),l=(0,b.useTheme)(),d=(0,ct.eQ)(),c=(0,dt.XB)(),{formatNumber:p,formatFiatPrice:u}=(0,k.Gb)(),[h,m]=(0,j.useReducer)((e=>!e),!1),x=(0,j.useRef)(null);(0,pt.t)(x,h?m:void 0);const[g,y]=(0,j.useState)([rt.BUY,rt.SELL,rt.BURN,rt.MINT]),[C,v]=(0,j.useState)({sortBy:nt.ri.Timestamp,sortDirection:nt.N9.Desc}),{transactions:T,loading:P,loadMore:$,error:I}=function(e,t,o=nt.ri.Timestamp,i=nt.N9.Desc,n=[rt.BUY,rt.SELL,rt.BURN,rt.MINT],a=25,s){const l=lt.uw[t||r.ChainId.MAINNET],{data:d,loading:c,fetchMore:p,error:u}=(0,nt.PG)({variables:{address:e.toLowerCase(),first:a,skip:s,orderBy:o,orderDirection:i},client:l}),h=(0,j.useRef)(!1),m=(0,j.useCallback)((({onComplete:e})=>{h.current||(h.current=!0,p({variables:{skip:Math.max(d?.swaps?.length??0,d?.mints?.length??0,d?.burns?.length??0)},updateQuery:(t,{fetchMoreResult:o})=>{if(!o)return t;e?.();const i={mints:[...t.mints,...o.mints],swaps:[...t.swaps,...o.swaps],burns:[...t.burns,...o.burns]};return h.current=!1,i}}))}),[d?.burns?.length,d?.mints?.length,d?.swaps?.length,p]),x=(0,j.useMemo)((()=>{const e=n.includes(rt.MINT)?d?.mints.map((e=>({...e,type:rt.MINT,isExactIn:void 0}))):[],t=n.includes(rt.BURN)?d?.burns.map((e=>({...e,type:rt.BURN,isExactIn:void 0}))).filter((e=>"0"!==e.amount0&&"0"!==e.amount1)):[];return[...e??[],...(n.includes(rt.BUY)||n.includes(rt.SELL)?d?.swaps.map((e=>{const t=e.amount0>0?e.pool.token0:e.pool.token1,o=st(e.amount0),i=st(e.amount1),a=t.id.toLowerCase()===e.pool.token0?.id.toLowerCase()?o<i:i<o;return a&&n.includes(rt.SELL)?{...e,type:rt.SELL,isExactIn:a}:!a&&n.includes(rt.BUY)?{...e,type:rt.BUY,isExactIn:a}:void 0})).filter((e=>void 0!==e)):[])??[],...t??[]].sort(((e,t)=>t?.timestamp-e?.timestamp)).map((e=>({timestamp:e?.timestamp,transaction:e?.transaction.id,pool:{token0:{id:e?.pool.token0.id,symbol:e?.pool.token0.symbol},token1:{id:e?.pool.token1.id,symbol:e?.pool.token1.symbol}},maker:e?.origin,amount0:e?.amount0,amount1:e?.amount1,amountUSD:e?.amountUSD,type:e?.type,isExactIn:e?.isExactIn})))}),[d?.burns,d?.mints,d?.swaps,n]);return(0,j.useMemo)((()=>({transactions:x,loading:c,loadMore:m,error:u})),[x,c,m,u])}(e,s,C.sortBy,C.sortDirection,g),S=(0,j.useCallback)((e=>{C.sortBy===e?v({sortBy:e,sortDirection:C.sortDirection===nt.N9.Asc?nt.N9.Desc:nt.N9.Asc}):v({sortBy:e,sortDirection:nt.N9.Desc})}),[C.sortBy,C.sortDirection]),_=(0,j.useMemo)((()=>{const e=(0,Qe.Cl)();return[e.accessor((e=>e.timestamp),{id:"timestamp",header:()=>(0,i.jsx)(et.b,{minWidth:150,justifyContent:"flex-start",children:(0,i.jsxs)(ot.d4,{$justify:"flex-start",onClick:()=>S(nt.ri.Timestamp),children:[C.sortBy===nt.ri.Timestamp&&(0,i.jsx)(ot.iX,{direction:C.sortDirection}),(0,i.jsx)(w.Tv.BodySecondary,{children:(0,i.jsx)(n.cC,{id:"LhMjLm"})})]})}),cell:e=>(0,i.jsx)(et.b,{loading:P,minWidth:150,justifyContent:"flex-start",children:(0,i.jsx)(w.Tv.BodySecondary,{children:(0,it.G)(1e3*Number(e.getValue?.()),d)})})}),e.accessor((e=>{let t,o;if(e.type===rt.BUY||e.type===rt.SELL){const[a,s]=e.amount0>0?[e.pool.token0,e.pool.token1]:[e.pool.token1,e.pool.token0];t=e.isExactIn?"critical":"success",o=e.isExactIn?(0,i.jsxs)("span",{children:[(0,i.jsx)(n.cC,{id:"xNB0TS"}),"\xa0",a.symbol]}):(0,i.jsxs)("span",{children:[(0,i.jsx)(n.cC,{id:"qiOIiY"}),"\xa0",s.symbol]})}else t=e.type===rt.MINT?"success":"critical",o=e.type===rt.MINT?(0,i.jsx)(n.cC,{id:"m16xKo"}):(0,i.jsx)(n.cC,{id:"t/YqKh"});return(0,i.jsx)(w.Tv.BodyPrimary,{color:t,children:o})}),{id:"swap-type",header:()=>(0,i.jsx)(et.b,{minWidth:100,justifyContent:"flex-start",children:(0,i.jsxs)(ot.j4,{modalOpen:h,onClick:()=>m(),ref:x,children:[(0,i.jsx)(tt.w,{allFilters:Object.values(rt),activeFilter:g,setFilters:y,isOpen:h}),(0,i.jsx)(w.Tv.BodySecondary,{children:(0,i.jsx)(n.cC,{id:"+zy2Nq"})})]})}),cell:e=>(0,i.jsx)(et.b,{loading:P,minWidth:100,justifyContent:"flex-start",children:e.getValue?.()})}),e.accessor((e=>e.amountUSD),{id:"fiat-value",header:()=>(0,i.jsx)(et.b,{minWidth:125,justifyContent:"flex-end",grow:!0,children:(0,i.jsx)(w.Tv.BodySecondary,{children:(0,i.jsx)(n.cC,{id:"ylhjte",values:{activeLocalCurrency:c}})})}),cell:e=>(0,i.jsx)(et.b,{loading:P,minWidth:125,justifyContent:"flex-end",grow:!0,children:(0,i.jsx)(w.Tv.BodyPrimary,{children:u({price:e.getValue?.()})})})}),e.accessor((e=>e.pool.token0.id.toLowerCase()===t?.id.toLowerCase()?e.amount0:e.amount1),{id:"input-amount",header:()=>(0,i.jsx)(et.b,{loading:P,minWidth:125,justifyContent:"flex-end",grow:!0,children:(0,i.jsx)(w.m_,{to:`/explore/tokens/${a.toLowerCase()}/${t?.id}`,children:(0,i.jsx)(w.Tv.BodySecondary,{children:t?.symbol})})}),cell:e=>(0,i.jsx)(et.b,{loading:P,minWidth:125,justifyContent:"flex-end",grow:!0,children:(0,i.jsx)(w.Tv.BodyPrimary,{children:p({input:Math.abs(e.getValue?.()??0),type:k.sw.TokenTx})})})}),e.accessor((e=>e.pool.token0.id.toLowerCase()===t?.id.toLowerCase()?e.amount1:e.amount0),{id:"output-amount",header:()=>(0,i.jsx)(et.b,{loading:P,minWidth:125,justifyContent:"flex-end",grow:!0,children:(0,i.jsx)(w.m_,{to:`/explore/tokens/${a.toLowerCase()}/${o?.id}`,children:(0,i.jsx)(w.Tv.BodySecondary,{children:o?.symbol})})}),cell:e=>(0,i.jsx)(et.b,{loading:P,minWidth:125,justifyContent:"flex-end",grow:!0,children:(0,i.jsx)(w.Tv.BodyPrimary,{children:p({input:Math.abs(e.getValue?.()??0),type:k.sw.TokenTx})})})}),e.accessor((e=>e.maker),{id:"maker-address",header:()=>(0,i.jsx)(et.b,{minWidth:100,justifyContent:"flex-end",grow:!0,children:(0,i.jsx)(w.Tv.BodySecondary,{children:(0,i.jsx)(n.cC,{id:"sb9Y58"})})}),cell:e=>(0,i.jsx)(et.b,{loading:P,minWidth:100,justifyContent:"flex-end",grow:!0,children:(0,i.jsx)(ut,{href:(0,Z.E)(s,e.getValue?.(),Z.r.ADDRESS),children:(0,i.jsx)(w.Tv.BodyPrimary,{children:(0,F.Xn)(e.getValue?.(),0)})})})}),e.accessor((e=>(0,Z.E)(s,e.transaction,Z.r.TRANSACTION)),{id:"etherscan-link",header:()=>(0,i.jsx)(et.b,{minWidth:32,justifyContent:"flex-end",children:(0,i.jsx)(w.Tv.BodySecondary,{children:(0,i.jsx)(n.cC,{id:"S3piC2"})})}),cell:e=>(0,i.jsx)(et.b,{loading:P,minWidth:32,justifyContent:"flex-end",children:(0,i.jsx)(ut,{href:e.getValue?.(),"data-testid":e.getValue?.(),children:(0,i.jsx)($e.Z,{size:"16px",stroke:l.neutral1})})})})]}),[c,s,a,g,h,u,p,S,P,d,C.sortBy,C.sortDirection,l.neutral1,t?.id,t?.symbol,o?.id,o?.symbol]);return I?(0,i.jsx)(n.cC,{id:"03MhdB"}):(0,i.jsx)("div",{"data-testid":"pool-details-transactions-table",children:(0,i.jsx)(Je.i,{columns:_,data:T,loading:P,loadMore:$,maxHeight:600})})}var mt;!function(e){e.TRANSACTIONS="transactions",e.POSITIONS="positions"}(mt||(mt={}));const xt=(0,b.default)(w.Tv.HeadlineMedium).withConfig({displayName:"PoolDetailsTable__TableHeader",componentId:"sc-82406054-0"})`
  color: ${({theme:e,active:t})=>!t&&e.neutral2};
  ${({disabled:e})=>!e&&w.iV}
  user-select: none;
`;function ft({poolAddress:e,token0:t,token1:o}){const[a,r]=(0,j.useState)(mt.TRANSACTIONS),l=(0,f.Qj)((0,M.UO)().chainName),d=(0,f.Tz)(l),{account:c}=(0,je.useWeb3React)(),{positions:p}=(0,be.Z)(c??"",[d]),u=(0,j.useMemo)((()=>p?.filter((t=>Ue.Pool.getAddress(t.pool.token0,t.pool.token1,t.pool.fee).toLowerCase()===e.toLowerCase()))??[]),[e,p]);return(0,i.jsxs)(s.ZP,{gap:"lg",children:[(0,i.jsxs)(N.ZP,{gap:"16px",children:[(0,i.jsx)(xt,{active:a===mt.TRANSACTIONS,onClick:()=>r(mt.TRANSACTIONS),disabled:!u.length,children:(0,i.jsx)(n.cC,{id:"4wyw8H"})}),Boolean(u.length)&&(0,i.jsxs)(xt,{active:a===mt.POSITIONS,onClick:()=>r(mt.POSITIONS),children:[(0,i.jsx)(n.cC,{id:"12Jgfh"}),` (${u?.length})`]})]}),a===mt.TRANSACTIONS?(0,i.jsx)(ht,{poolAddress:e,token0:t,token1:o}):(0,i.jsx)(Ke,{positions:u})]})}var gt;function yt(){return yt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},yt.apply(this,arguments)}function jt(e,t){let{title:o,titleId:i,...n}=e;return j.createElement("svg",yt({width:16,height:16,viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},n),o?j.createElement("title",{id:i},o):null,gt||(gt=j.createElement("path",{d:"M8.41667 15.5H7.58333C6.75 15.5 6.33333 15.0833 6.33333 14.25V1.75C6.33333 0.916667 6.75 0.5 7.58333 0.5H8.41667C9.25 0.5 9.66667 0.916667 9.66667 1.75V14.25C9.66667 15.0833 9.25 15.5 8.41667 15.5ZM15.5 8.83333V3.83333C15.5 3 15.0833 2.58333 14.25 2.58333H13.4167C12.5833 2.58333 12.1667 3 12.1667 3.83333V8.83333C12.1667 9.66667 12.5833 10.0833 13.4167 10.0833H14.25C15.0833 10.0833 15.5 9.66667 15.5 8.83333ZM3.83333 10.9167V7.58333C3.83333 6.75 3.41667 6.33333 2.58333 6.33333H1.75C0.916667 6.33333 0.5 6.75 0.5 7.58333V10.9167C0.5 11.75 0.916667 12.1667 1.75 12.1667H2.58333C3.41667 12.1667 3.83333 11.75 3.83333 10.9167Z",fill:"currentColor"})))}const bt=j.forwardRef(jt);o.p;var wt;function Ct(){return Ct=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},Ct.apply(this,arguments)}function kt(e,t){let{title:o,titleId:i,...n}=e;return j.createElement("svg",Ct({width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},n),o?j.createElement("title",{id:i},o):null,wt||(wt=j.createElement("path",{d:"M23.02 9C23.02 10.104 22.124 11 21.02 11C20.738 11 20.47 10.94 20.226 10.835L16.855 14.2061C16.96 14.4501 17.021 14.717 17.021 15C17.021 16.104 16.125 17 15.021 17C13.917 17 13.016 16.104 13.016 15C13.016 14.727 13.071 14.467 13.17 14.229L9.787 10.8459C9.551 10.9439 9.292 10.999 9.021 10.999C8.739 10.999 8.471 10.939 8.22701 10.834L4.856 14.2051C4.961 14.4491 5.022 14.716 5.022 14.999C5.022 16.103 4.126 16.999 3.022 16.999C1.918 16.999 1.017 16.103 1.017 14.999C1.017 13.895 1.90699 12.999 3.01199 12.999H3.022C3.294 12.999 3.55199 13.0541 3.78799 13.1521L7.172 9.76807C7.073 9.53107 7.017 9.27102 7.017 8.99902C7.017 7.89502 7.90699 6.99902 9.01199 6.99902H9.022C10.126 6.99902 11.022 7.89502 11.022 8.99902C11.022 9.28102 10.962 9.54897 10.856 9.79297L14.224 13.1609C14.465 13.0569 14.731 12.999 15.011 12.999H15.021C15.293 12.999 15.551 13.0541 15.787 13.1521L19.171 9.76807C19.072 9.53107 19.016 9.27102 19.016 8.99902C19.016 7.89502 19.906 6.99902 21.011 6.99902H21.021C22.125 7.00002 23.02 7.896 23.02 9Z",fill:"currentColor"})))}const vt=j.forwardRef(kt),Tt=(o.p,b.default.div.withConfig({displayName:"PillMultiToggle__OptionsSelector",componentId:"sc-1b9da6a1-0"})`
  display: flex;
  position: relative;
  justify-content: flex-end;
  gap: 12px;
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 20px;
  height: 40px;
  padding: ${4}px;
  width: fit-content;
`),Pt=b.default.div.withConfig({displayName:"PillMultiToggle__ActivePill",componentId:"sc-1b9da6a1-1"})`
  position: absolute;
  height: 30px;
  background-color: ${({theme:e})=>e.surface3};
  border-radius: 15px;
  transition: left 0.3s ease, width 0.3s ease;
`,$t=b.default.button.withConfig({displayName:"PillMultiToggle__OptionButton",componentId:"sc-1b9da6a1-2"})`
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
`;function It(e){return"string"===typeof e?{value:e}:e}function St({options:e,currentSelected:t,onSelectOption:o}){const a=(0,j.useMemo)((()=>e.map((()=>(0,j.createRef)()))),[e]),[s,r]=(0,j.useState)({});return(0,j.useLayoutEffect)((()=>{const t=a.reduce(((t,o,i)=>{const n=o.current,{value:a}=It(e[i]);return t[a]={width:(n?.offsetWidth??0)+"px",left:(n?.offsetLeft??0)+"px"},t}),{});r(t)}),[e,a]),(0,i.jsxs)(Tt,{children:[(0,i.jsx)(Pt,{style:s[t]}),e.map(((e,s)=>{const{value:r,display:l}=It(e),d=a[s];return(0,i.jsx)($t,{ref:d,active:t===r,onClick:()=>o(r),children:l??(0,i.jsx)(n.cC,{id:"dCPSgO",values:{value:r}})},r)}))]})}var _t=o(92887);const Dt=[{value:a.E4.LINE,display:(0,i.jsx)(vt,{})},{value:a.E4.CANDLESTICK,display:(0,i.jsx)(bt,{})}],Nt=({currentChartType:e,onChartTypeChange:t})=>{const o=(0,b.useTheme)();return(0,i.jsx)(_t.K,{$transitionDuration:o.transition.duration.fast,children:(0,i.jsx)(St,{options:Dt,currentSelected:e,onSelectOption:t})})};var Lt=o(53609),Bt=o(19530),Et=o.n(Bt);const Ut=(e,t,o)=>{const i=parseFloat(e)-parseFloat(t),n=parseFloat(t)-parseFloat(o),a=(i-n)/n*100;return isNaN(a)||!isFinite(a)?[i,0]:[i,a]},Mt=e=>{let t="query blocks {";return t+=e.map((e=>`t${e}:blocks(first: 1, orderBy: timestamp, orderDirection: desc, where: { timestamp_gt: ${e}, timestamp_lt: ${e+600} }) {\n        number\n      }`)),t+="}",(0,at.ZP)(t)};function Ot(e,t){const[o,i]=(0,j.useState)(),[n,a]=(0,j.useState)(!1),s=lt.Pf[t],r=o?.[t];console.log(Mt,s,[],e,"<====timestampstimestamps"),(0,j.useEffect)((()=>{r||n||async function(){const n=await async function(e,t,o,i,n=1e3){let a={},s=!1,r=0;try{for(;!s;){let l=i.length;r+n<i.length&&(l=r+n);const d=i.slice(r,l),c=await t.query({query:e(...o,d),fetchPolicy:"network-only"});a={...a,...c.data},Object.keys(c.data).length<n||r+n>i.length?s=!0:r+=n}return a}catch(l){return void console.log(l)}}(Mt,s,[],e);console.log(n,"<====results"),n?i({...o??{},[t]:n}):a(!0)}()}),[]);const l=(0,j.useMemo)((()=>{if(o?.[t]){const e=o?.[t],i=[];for(const o in e)if(e[o].length>0){const n=e[o][0].number,a=Lt.DM[t],s=n>a?n:a;i.push({timestamp:o.split("t")[1],number:s})}return i}}),[t,o]);return{blocks:l,error:n}}function Ft(e,t){const o=[e],i=lt.uw[t||r.ChainId.MAINNET],[n,a,s]=function(){const e=Date.now();return[Math.floor((e-Et()("1d"))/1e3),Math.floor((e-Et()("2d"))/1e3),Math.floor((e-Et()("7d"))/1e3)]}(),{blocks:l,error:d}=Ot([n,a,s],t||r.ChainId.MAINNET),[c,p,u]=l??[],{loading:h,error:m,data:x}=(0,nt.zm)({variables:{poolId:o},client:i,fetchPolicy:"no-cache"}),{loading:f,error:g,data:y}=(0,nt.zm)({variables:{poolId:o,block:c&&{number:parseFloat(c.number)}},client:i,fetchPolicy:"no-cache"}),{loading:b,error:w,data:C}=(0,nt.zm)({variables:{poolId:o,block:p&&{number:parseFloat(p.number)}},client:i,fetchPolicy:"no-cache"}),{loading:k,error:v,data:T}=(0,nt.zm)({variables:{poolId:o,block:u&&{number:parseFloat(u.number)}},client:i,fetchPolicy:"no-cache"});return(0,j.useMemo)((()=>{const t=Boolean(m||g||w||v),o=Boolean(h||f||b||k);if(t||o)return{loading:o,error:t,data:void 0};const i=x?.pools[0],n=y?.pools[0],a=C?.pools[0],s=T?.pools[0],r=x?.bundles?.[0]?.ethPriceUSD?parseFloat(x?.bundles?.[0]?.ethPriceUSD):0,[l,d]=i&&n&&a?Ut(i.volumeUSD,n.volumeUSD,a.volumeUSD):i?[parseFloat(i.volumeUSD),0]:[0,0],c=i&&s?parseFloat(i.volumeUSD)-parseFloat(s.volumeUSD):i?parseFloat(i.volumeUSD):0,p=i&&n?parseFloat(i.volumeUSD)-parseFloat(n.volumeUSD):i?parseFloat(i.volumeUSD):0,u=i?parseFloat(i.feeTier)/1e4/100:0,j=i?.volumeToken0?parseFloat(i.volumeToken0)*u/2:0,P=i?.volumeToken1?parseFloat(i.volumeToken1)*u/2:0,$=i?parseFloat(i.totalValueLockedToken0)-j:0,I=i?parseFloat(i.totalValueLockedToken1)-P:0;let S=i?parseFloat(i.totalValueLockedUSD):0;const _=i&&n?(parseFloat(i.totalValueLockedUSD)-parseFloat(n.totalValueLockedUSD))/parseFloat("0"===n.totalValueLockedUSD?"1":n.totalValueLockedUSD)*100:0,D=i?$*parseFloat(i.token0.derivedETH)*r+I*parseFloat(i.token1.derivedETH)*r:void 0;return D&&(S=D),{data:i?{...i,address:e,volumeUSD:l,volumeUSDChange:d,volumeUSDWeek:c,volumeUSD24H:p,tvlUSD:S,tvlUSDChange:_,tvlToken0:$,tvlToken1:I,tick:parseFloat(i.tick)}:void 0,error:t,loading:o}}),[d,x?.bundles,x?.pools,y?.pools,C?.pools,T?.pools,m,g,w,v,h,f,b,k,e])}at.ZP`
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
`;var Zt=o(76743);const Rt=(0,b.default)(N.ZP).withConfig({displayName:"PoolDetails__PageWrapper",componentId:"sc-e7526d41-0"})`
  padding: 48px;
  width: 100%;
  align-items: flex-start;
  gap: 60px;

  @media (max-width: ${O.j$.lg-1}px) {
    flex-direction: column;
    gap: unset;
  }

  @media (max-width: ${O.j$.sm-1}px) {
    padding: 48px 16px;
  }
`,At=(0,b.default)(s.ZP).withConfig({displayName:"PoolDetails__LeftColumn",componentId:"sc-e7526d41-1"})`
  gap: 24px;
  width: 65vw;
  overflow: hidden;
  justify-content: flex-start;

  @media (max-width: ${O.j$.lg-1}px) {
    width: 100%;
  }
`,Ht=b.default.div.withConfig({displayName:"PoolDetails__ChartTypeSelectorContainer",componentId:"sc-e7526d41-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,Vt=b.default.hr.withConfig({displayName:"PoolDetails__HR",componentId:"sc-e7526d41-3"})`
  border: 0.5px solid ${({theme:e})=>e.surface3};
  margin: 16px 0px;
  width: 100%;
`,Wt=(0,b.default)(s.ZP).withConfig({displayName:"PoolDetails__RightColumn",componentId:"sc-e7526d41-4"})`
  gap: 24px;
  margin: 0 48px 0 auto;
  width: 22vw;
  min-width: 360px;

  @media (max-width: ${O.j$.lg-1}px) {
    margin: 44px 0px;
    width: 100%;
    min-width: unset;
  }
`,zt=(0,b.default)(s.ZP).withConfig({displayName:"PoolDetails__TokenDetailsWrapper",componentId:"sc-e7526d41-5"})`
  gap: 24px;
  padding: 20px;

  @media (max-width: ${O.j$.lg-1}px) and (min-width: ${O.j$.sm}px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding: unset;
  }

  @media (max-width: ${O.j$.sm-1}px) {
    padding: unset;
  }
`,Gt=(0,b.default)(te.xv).withConfig({displayName:"PoolDetails__TokenDetailsHeader",componentId:"sc-e7526d41-6"})`
  width: 100%;
  font-size: 24px;
  font-weight: 485;
  line-height: 32px;
`,Xt=(0,b.default)(s.ZP).withConfig({displayName:"PoolDetails__LinksContainer",componentId:"sc-e7526d41-7"})`
  gap: 16px;
  width: 100%;
`;function Yt(){const{poolAddress:e,chainName:t}=(0,M.UO)(),o=(0,f._3)(t),r=o&&(0,f.Tz)(o),{data:l,loading:d}=Ft(e??"",r),[c,p]=(0,j.useReducer)((e=>!e),!1),u=c?l?.token1:l?.token0,h=c?l?.token0:l?.token1,m=!t||!e||!(0,f._3)(t)||!(0,F.UJ)(e),x=!d&&!l||m,[g,y]=(0,j.useState)(a.oX.VOLUME),[b,w]=(0,j.useState)(a.E4.LINE);return x?(0,i.jsx)(Zt.default,{}):(0,i.jsxs)(Rt,{children:[(0,i.jsxs)(At,{children:[(0,i.jsxs)(s.ZP,{gap:"lg",children:[(0,i.jsx)(I.G7,{chainId:r,poolAddress:e,token0:u,token1:h,loading:d}),(0,i.jsxs)(N.ZP,{justify:"space-between",children:[(0,i.jsx)(I.dG,{chainId:r,token0:u,token1:h,feeTier:l?.feeTier,toggleReversed:p,loading:d}),(0,i.jsx)(Ht,{children:g===a.oX.VOLUME&&(0,i.jsx)(Nt,{currentChartType:b,onChartTypeChange:w})})]}),(0,i.jsx)($,{token0:u,token1:h,chartType:g,priceChartType:b,feeTier:l?.feeTier,loading:d})]}),(0,i.jsx)(Vt,{}),(0,i.jsx)(ft,{poolAddress:e,token0:u,token1:h})]}),(0,i.jsxs)(Wt,{children:[(0,i.jsx)(Ee,{chainId:r,token0:u,token1:h,feeTier:l?.feeTier,loading:d}),(0,i.jsx)(xe,{poolData:l,isReversed:c,chainId:r,loading:d}),(0,i.jsxs)(zt,{children:[(0,i.jsx)(Gt,{children:(0,i.jsx)(n.cC,{id:"Rj01Fz"})}),(0,i.jsxs)(Xt,{children:[(0,i.jsx)(Y,{address:e,chainId:r,tokens:[u,h],loading:d}),(0,i.jsx)(Y,{address:u?.id,chainId:r,tokens:[u],loading:d}),(0,i.jsx)(Y,{address:h?.id,chainId:r,tokens:[h],loading:d})]})]})]})]})}}}]);
//# sourceMappingURL=6609.920b9f0d.chunk.js.map