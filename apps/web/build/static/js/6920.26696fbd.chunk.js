"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[6920,5187],{95267:(e,t,o)=>{o.d(t,{Z:()=>l});var i=o(39491),n=o(37954),a=o.n(n);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},s.apply(this,arguments)}function r(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var d=(0,i.forwardRef)((function(e,t){var o=e.color,n=void 0===o?"currentColor":o,a=e.size,d=void 0===a?24:a,l=r(e,["color","size"]);return i.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),i.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),i.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));d.propTypes={color:a().string,size:a().oneOfType([a().string,a().number])},d.displayName="Plus";const l=d},76743:(e,t,o)=>{o.r(t),o.d(t,{default:()=>y});var i=o(21339),n=o(88693),a=o(56542),s=o(4570),r=o(70357),d=o(49680),l=o(99123),c=o(33552),p=o(10548),m=o(7518);const u=o.p+"static/media/404-page-dark.f24684e761633ae99402.png",h=o.p+"static/media/404-page-light.c448d3fd36de14609aba.png",x=c.default.img.withConfig({displayName:"NotFound__Image",componentId:"sc-22bd2404-0"})`
  max-width: 510px;
  width: 100%;
  padding: 0 75px;
`,f=c.default.div.withConfig({displayName:"NotFound__Container",componentId:"sc-22bd2404-1"})`
  display: flex;
  flex-direction: column;
  align-items: center;
`,g=(0,c.default)(f).withConfig({displayName:"NotFound__Header",componentId:"sc-22bd2404-2"})`
  gap: 30px;
`,j=(0,c.default)(f).withConfig({displayName:"NotFound__PageWrapper",componentId:"sc-22bd2404-3"})`
  flex: 1;
  justify-content: center;
  gap: 50px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    justify-content: space-between;
    padding-top: 64px;
  }
`;function y(){const e=(0,m.Gv)(),t=(0,d.dD)(),o=t?p.Tv.LargeHeader:p.Tv.Hero,c=t?p.Tv.HeadlineMedium:p.Tv.HeadlineLarge;return(0,i.jsx)(j,{children:(0,i.jsxs)(s.fM,{page:a.yJ.NOT_FOUND,shouldLogImpression:!0,children:[(0,i.jsxs)(g,{children:[(0,i.jsxs)(f,{children:[(0,i.jsx)(o,{children:"404"}),(0,i.jsx)(c,{color:"neutral2",children:(0,i.jsx)(n.cC,{id:"yduHrq"})})]}),(0,i.jsx)(x,{src:e?u:h,alt:"Liluni"})]}),(0,i.jsx)(r.Hm,{as:l.rU,to:"/",children:(0,i.jsx)(n.cC,{id:"GTK9OW"})})]})})}},99357:(e,t,o)=>{o.r(t),o.d(t,{default:()=>Bt});var i=o(21339),n=o(88693),a=o(56374),s=o(65023),r=o(82032),d=o(79357),l=o(16685),c=o(24051),p=o(59332),m=o(76139),u=o(83748),h=o(77489),x=o(25093),f=o(83787),g=o(12973),j=o(59815),y=o(39491),b=o(33552),w=o(10548),k=o(48664),C=o(19369);const v=380,T=(a.oX.PRICE,a.oX.VOLUME,a.oX.LIQUIDITY,b.default.div.withConfig({displayName:"ChartSection__TimePeriodSelectorContainer",componentId:"sc-f34cdf-0"})`
  position: absolute;
  top: 4px;
  right: 72px;
  z-index: ${k.k.active};
  @media only screen and (max-width: ${({theme:e})=>e.breakpoint.lg}px) {
    position: static;
    margin-top: 4px;
  }
  @media only screen and (max-width: ${({theme:e})=>e.breakpoint.xs}px) {
    width: 100%;
  }
`),P={[a.oX.PRICE]:function({currencyA:e,currencyB:t,timePeriod:o,height:n,priceChartType:a}){const{formatCurrencyAmount:s,formatPrice:p}=(0,C.Gb)(),m=(0,x.m)({variables:{...(0,f.PT)(e),duration:(0,f.uw)(o)}}),g=(0,u.Y_)(m.data),b=(0,y.useMemo)((()=>(0,c.ll)(g)),[g]),k=(0,y.useMemo)((()=>({data:b,type:a})),[b,a]),v=(0,j.ZP)(e);if(!b.length||!e||!t)return(0,i.jsx)(h.sT,{});const T=b[b.length-1];return(0,i.jsx)(l.k,{Model:c.r4,params:k,height:n,children:o=>{const n=o??T,a=Math.floor((n.value??n.close)*10**t.decimals),l=(0,i.jsx)(w.Tv.HeadlineMedium,{children:`1 ${e.symbol} = ${s({amount:r.CurrencyAmount.fromRawAmount(t,a)})} \n            ${t.symbol} ${v?"("+p({price:v})+")":""}`});return(0,i.jsx)(d._,{value:l,additionalFields:(0,i.jsx)(c.Tg,{startingPrice:b[0],endingPrice:n}),valueFormatterType:C.sw.FiatTokenPrice,time:o?.time})}})},[a.oX.VOLUME]:m.x,[a.oX.LIQUIDITY]:h.sT};function $(e){const[t,o]=(0,y.useState)(f.XH.DAY),[n,a]=[(0,g.U8)(e.token0?.id),(0,g.U8)(e.token1?.id)],s=(0,y.useMemo)((()=>[...Array(20).keys()].map((e=>({value:1e5*Math.random()+500,timestamp:100123131+1e3*e})))),[t]);if(e.loading||!n||!a)return(0,i.jsx)(h.sT,{});const r=P[e.chartType],d={...e,height:v,timePeriod:t,currencyA:n,currencyB:a,volumes:s};return(0,i.jsxs)(u.BO,{isInfoTDPEnabled:!0,"data-testid":"pdp-chart-container",children:[(0,i.jsx)(r,{...d}),(0,i.jsx)(T,{children:(0,i.jsx)(p.Z,{timePeriod:t,onChangeTimePeriod:o})})]})}var I=o(62773),S=o(88584);const _=e=>(0,i.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,i.jsx)("path",{id:"box-search_2",d:"M6.32064 7.43328C6.4873 7.50661 6.66065 7.55329 6.83398 7.59329V13.94C6.72732 13.9133 6.62067 13.8733 6.52067 13.8266L2.52067 12.0466C1.80067 11.7266 1.33398 11.0133 1.33398 10.2199V5.77996C1.33398 5.59996 1.36064 5.41995 1.40731 5.25329L6.32064 7.43328ZM12.754 4.37328C12.5807 4.19995 12.3806 4.05328 12.1473 3.95328L8.1473 2.17329C7.6273 1.93996 7.04067 1.93996 6.52067 2.17329L2.52067 3.95328C2.28734 4.05328 2.08731 4.19995 1.91398 4.37328L6.72062 6.51328C7.10729 6.68661 7.55401 6.68661 7.94735 6.51328L12.754 4.37328ZM11.1347 7.92862C11.8227 7.76662 12.4766 7.81863 13.0646 8.02129C13.1966 8.06663 13.334 7.97729 13.334 7.83729V5.77996C13.334 5.59996 13.3073 5.41995 13.2607 5.25329L8.34733 7.43328C8.18066 7.49995 8.00732 7.55329 7.83398 7.59329V13.94C7.84598 13.948 7.84599 13.9479 7.85799 13.9559L8.98665 13.452C9.10132 13.4006 9.13533 13.262 9.066 13.158C8.584 12.4373 8.37864 11.522 8.57397 10.5586C8.83464 9.27263 9.85802 8.22929 11.1347 7.92862ZM15.0207 14.3526C14.9233 14.4499 14.7953 14.4993 14.6673 14.4993C14.5393 14.4993 14.4113 14.4506 14.314 14.3526L13.2807 13.3193C12.896 13.5713 12.4386 13.7213 11.9453 13.7213C10.5973 13.7213 9.50065 12.6246 9.50065 11.2766C9.50065 9.92862 10.5973 8.83194 11.9453 8.83194C13.2926 8.83194 14.3893 9.92862 14.3893 11.2766C14.3893 11.77 14.24 12.228 13.988 12.6119L15.0213 13.6453C15.216 13.8406 15.216 14.1573 15.0207 14.3526ZM13.3893 11.2773C13.3893 10.4806 12.7413 9.83261 11.9453 9.83261C11.1486 9.83261 10.5007 10.4806 10.5007 11.2773C10.5007 12.0739 11.1486 12.722 11.9453 12.722C12.7413 12.7213 13.3893 12.0733 13.3893 11.2773Z",fill:"white"})});var D=o(44680),N=o(17358),L=o(379),B=o(91943),U=o(97472),E=o(96439),M=o(92686),F=o(39681),O=o(6970),Z=o(54359),R=o(46733);const A=(0,b.default)(w.Tv.BodyPrimary).withConfig({displayName:"PoolDetailsLink__TokenName",componentId:"sc-15d87bb3-0"})`
  display: none;

  @media (max-width: ${F.j$.lg-1}px) and (min-width: ${F.j$.xs-1}px) {
    display: block;
  }
  ${w.cw}
`,W=(0,b.default)(N.ZP).withConfig({displayName:"PoolDetailsLink__TokenTextWrapper",componentId:"sc-15d87bb3-1"})`
  gap: 8px;
  margin-right: 12px;
  ${({isClickable:e})=>e&&w.iV}
`,z=(0,b.default)(w.Tv.BodyPrimary).withConfig({displayName:"PoolDetailsLink__SymbolText",componentId:"sc-15d87bb3-2"})`
  flex-shrink: 0;

  @media (max-width: ${F.j$.lg-1}px) and (min-width: ${F.j$.xs-1}px) {
    color: ${({theme:e})=>e.neutral2};
  }
  ${w.cw}
`,V=(0,b.default)(N.ZP).withConfig({displayName:"PoolDetailsLink__CopyAddress",componentId:"sc-15d87bb3-3"})`
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
`,H=(0,b.default)(U.Z).withConfig({displayName:"PoolDetailsLink__StyledCopyIcon",componentId:"sc-15d87bb3-4"})`
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
`;function Y({address:e,chainId:t,tokens:o,loading:a}){const s=(0,b.useTheme)(),d=[(0,g.U8)(o[0]?.id,t)??void 0,(0,g.U8)(o[1]?.id,t)??void 0],[,l]=(0,B.Z)(),c=(0,y.useCallback)((()=>{e&&l(e)}),[e,l]),p=2===o.length,m=e&&t&&(0,Z.E)(t,e,p?Z.r.ADDRESS:Z.r.TOKEN),u=(0,M.s0)(),h=(0,L.C)(),x=(0,f.Ld)(t),j=(0,y.useCallback)((()=>{p||u((0,f.dG)({address:o[0]?.id,chain:x,isInfoExplorePageEnabled:h}))}),[u,o,p,x,h]);return!a&&e&&t?(0,i.jsxs)(N.ZP,{align:"space-between",children:[(0,i.jsxs)(W,{"data-testid":p?`pdp-pool-logo-${o[0]?.symbol}-${o[1]?.symbol}`:`pdp-token-logo-${o[0]?.symbol}`,isClickable:!p,onClick:j,children:[p?(0,i.jsx)(I.io,{chainId:t,currencies:d,size:20}):(0,i.jsx)(D.Z,{currency:d[0],size:"20px"}),(0,i.jsx)(A,{children:p?(0,i.jsx)(n.cC,{id:"ou6PkF"}):o[0]?.name}),(0,i.jsx)(z,{children:p?`${o[0]?.symbol} / ${o[1]?.symbol}`:(0,i.jsxs)(N.ZP,{gap:"4px",children:[o[0]?.symbol," ",(0,i.jsx)(E.Z,{size:16,color:s.neutral2})]})})]}),(0,i.jsxs)(X,{children:[(0,i.jsxs)(V,{"data-testid":`copy-address-${e}`,onClick:c,children:[(0,O.Xn)(e),(0,i.jsx)(H,{})]}),m&&(0,i.jsx)(w.dL,{href:m,"data-testid":`explorer-url-${m}`,children:(0,i.jsx)(G,{children:t===r.ChainId.MAINNET?(0,i.jsx)(S.P,{width:"16px",height:"16px",fill:s.neutral2}):(0,i.jsx)(_,{width:"16px",height:"16px",stroke:s.darkMode?"none":s.neutral2})})})]})]}):(0,i.jsxs)(N.ZP,{gap:"8px",padding:"6px 0px",children:[(0,i.jsx)(R.F,{}),(0,i.jsx)(R.k,{$width:117})]})}var q=o(96334),Q=o(98878),K=o(21309),J=o(7108),ee=o(99123),te=o(9726),oe=o(49908);const ie=(0,b.default)(te.xv).withConfig({displayName:"PoolDetailsStats__HeaderText",componentId:"sc-2f5c2b89-0"})`
  font-weight: 485;
  font-size: 24px;
  line-height: 36px;
  @media (max-width: ${F.j$.lg-1}px) {
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

  @media (max-width: ${F.j$.lg-1}px) {
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

  @media (max-width: ${F.j$.sm}px) {
    min-width: 150px;
  }
`,se=(0,b.default)(N.ZP).withConfig({displayName:"PoolDetailsStats__PoolBalanceSymbols",componentId:"sc-2f5c2b89-3"})`
  justify-content: space-between;

  @media (max-width: ${F.j$.lg-1}px) {
    flex-direction: column;
  }
`,re=(0,b.default)(N.ZP).withConfig({displayName:"PoolDetailsStats__PoolBalanceTokenNamesContainer",componentId:"sc-2f5c2b89-4"})`
  font-weight: 485;
  font-size: 16px;
  line-height: 24px;
  width: max-content;

  @media (max-width: ${F.j$.lg-1}px) {
    font-size: 20px;
    line-height: 28px;
    width: 100%;
  }
`,de=(0,b.default)(ee.rU).withConfig({displayName:"PoolDetailsStats__StyledLink",componentId:"sc-2f5c2b89-5"})`
  display: flex;
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  ${w.iV}
`,le=b.css`
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
  ${({isLeft:e})=>e?le:ce}
`,me=(0,b.default)(q.X).withConfig({displayName:"PoolDetailsStats__StatSectionBubble",componentId:"sc-2f5c2b89-7"})`
  width: 180px;
  height: 40px;
`,ue=(0,b.default)(q.X).withConfig({displayName:"PoolDetailsStats__StatHeaderBubble",componentId:"sc-2f5c2b89-8"})`
  width: 116px;
  height: 24px;
  border-radius: 8px;
`,he=({token:e,chainId:t})=>{const o=(0,J.e)().lg,{formatNumber:n}=(0,C.Gb)();return(0,i.jsxs)(re,{children:[!o&&(0,i.jsx)(D.Z,{currency:e.currency,size:"20px",style:{marginRight:"8px"}}),n({input:e.tvl,type:C.sw.TokenQuantityStats}),"\xa0",(0,i.jsxs)(de,{to:(0,f.dG)({address:e.id,chain:(0,f.Ld)(t),isInfoExplorePageEnabled:!0}),children:[o&&(0,i.jsx)(D.Z,{currency:e.currency,size:"16px",style:{marginRight:"4px",marginLeft:"4px"}}),e.symbol]})]})};function xe({poolData:e,isReversed:t,chainId:o,loading:a}){const r=(0,J.e)().lg,d=(0,b.useTheme)(),l=(0,g.U8)(e?.token0?.id,o)??void 0,c=(0,g.U8)(e?.token1?.id,o)??void 0,p=(0,K.r)(l,d.surface2,d.darkMode);let m=(0,K.r)(c,d.surface2,d.darkMode);p===m&&p===d.accent1&&(m=oe.O9.blue400);const[u,h]=(0,y.useMemo)((()=>{if(e){const o=e?.tvlToken0/e?.token0Price+e?.tvlToken1,i={...e?.token0,price:e?.token0Price,tvl:e?.tvlToken0,color:p,percent:e?.tvlToken0/e?.token0Price/o,currency:l},n={...e?.token1,price:e?.token1Price,tvl:e?.tvlToken1,color:m,percent:e?.tvlToken1/o,currency:c};return t?[n,i]:[i,n]}return[void 0,void 0]}),[p,m,l,c,t,e]);return!a&&u&&h&&e?(0,i.jsxs)(ne,{loaded:!0,children:[(0,i.jsx)(ie,{children:(0,i.jsx)(n.cC,{id:"29Hx9U"})}),(0,i.jsxs)(ae,{children:[(0,i.jsx)(w.Tv.BodySecondary,{children:(0,i.jsx)(n.cC,{id:"2mfj90"})}),(0,i.jsxs)(se,{children:[(0,i.jsx)(he,{token:u,chainId:o}),(0,i.jsx)(he,{token:h,chainId:o})]}),r&&(0,i.jsxs)(N.ZP,{"data-testid":"pool-balance-chart",children:[u.color&&(0,i.jsx)(pe,{percent:u.percent,$color:u.color,isLeft:!0}),h.color&&(0,i.jsx)(pe,{percent:h.percent,$color:h.color,isLeft:!1})]})]}),(0,i.jsx)(je,{title:(0,i.jsx)(n.cC,{id:"FHKsZF"}),value:e.tvlUSD,delta:e.tvlUSDChange}),(0,i.jsx)(je,{title:(0,i.jsx)(n.cC,{id:"0RweTm"}),value:e.volumeUSD,delta:e.volumeUSDChange}),(0,i.jsx)(je,{title:(0,i.jsx)(n.cC,{id:"PpS90j"}),value:e.volumeUSD*(e.feeTier/1e6)})]}):(0,i.jsxs)(ne,{children:[(0,i.jsx)(ie,{children:(0,i.jsx)(ue,{})}),Array.from({length:4}).map(((e,t)=>(0,i.jsxs)(s.ZP,{gap:"md",children:[(0,i.jsx)(R.k,{}),(0,i.jsx)(me,{})]},`loading-info-row-${t}`)))]})}const fe=(0,b.default)(N.ZP).withConfig({displayName:"PoolDetailsStats__StatsTextContainer",componentId:"sc-2f5c2b89-9"})`
  gap: 4px;
  width: 100%;
  align-items: flex-end;

  @media (max-width: ${F.j$.lg-1}px) {
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
  }
`,ge=(0,b.default)(te.xv).withConfig({displayName:"PoolDetailsStats__StatItemText",componentId:"sc-2f5c2b89-10"})`
  color: ${({theme:e})=>e.neutral1};
  font-size: 36px;
  font-weight: 485;
  line-height: 44px;

  @media (max-width: ${F.j$.lg-1}px) {
    font-size: 20px;
    line-height: 28px;
  }
`;function je({title:e,value:t,delta:o}){const{formatNumber:n,formatDelta:a}=(0,C.Gb)();return(0,i.jsxs)(ae,{children:[(0,i.jsx)(w.Tv.BodySecondary,{children:e}),(0,i.jsxs)(fe,{children:[(0,i.jsx)(ge,{children:n({input:t,type:C.sw.FiatTokenStats})}),!!o&&(0,i.jsxs)(N.ZP,{width:"max-content",padding:"4px 0px",children:[(0,i.jsx)(Q.Kx,{delta:o}),(0,i.jsx)(w.Tv.BodySecondary,{children:a(o)})]})]})]})}var ye=o(75422),be=o(13691),we=o(6125),ke=o(73474),Ce=o(44488),ve=o(29441),Te=o(6681),Pe=o(95267),$e=o(54311),Ie=o(17513),Se=o(51232);const _e=(0,b.default)(N.ZP).withConfig({displayName:"PoolDetailsStatsButtons__PoolDetailsStatsButtonsRow",componentId:"sc-e1598f45-0"})`
  gap: 12px;
  z-index: 1;

  @media (max-width: ${F.j$.lg-1}px) {
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

  ${ke.R0} {
    &:before {
      background-color: unset;
    }
  }

  @media (max-width: ${F.j$.lg-1}px) {
    display: none;
  }
`;function Ue({chainId:e,token0:t,token1:o,feeTier:a,loading:r}){const{chainId:d,connector:l,account:c}=(0,ye.useWeb3React)(),{positions:p}=(0,be.Z)(c??"",e?[e]:void 0),m=p&&function(e,t,o,i){return e?.find((e=>(e?.details.token0.toLowerCase()===t?.id||e?.details.token0.toLowerCase()===o?.id)&&(e?.details.token1.toLowerCase()===t?.id||e?.details.token1.toLowerCase()===o?.id)&&e?.details.fee==i&&!e.closed))}(p,t,o,a),u=m?.details.tokenId,h=(0,Ce.o)(),x=(0,M.s0)(),f=(0,g.U8)(t?.id,e),j=(0,g.U8)(o?.id,e),[b,k]=(0,y.useReducer)((e=>!e),!1),[C,v]=(0,y.useReducer)((e=>!e),!1);return!r&&f&&j?(0,i.jsxs)(s.ZP,{gap:"lg",children:[(0,i.jsxs)(_e,{children:[(0,i.jsx)(De,{onClick:k,open:b,"data-testid":`pool-details-${b?"close":"swap"}-button`,children:b?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Te.Z,{size:20}),(0,i.jsx)(w.Tv.BodyPrimary,{fontWeight:535,color:"accentActive",children:(0,i.jsx)(n.cC,{id:"yz7wBu"})})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Ne,{}),(0,i.jsx)(w.Tv.BodyPrimary,{fontWeight:535,color:"accentActive",children:(0,i.jsx)(n.cC,{id:"vH2C/2"})})]})}),(0,i.jsxs)(De,{onClick:async()=>{f&&j&&(d!==e&&e&&await h(l,e),x(`/add/${(0,Se.H)(f)}/${(0,Se.H)(j)}/${a}${u?`/${u}`:""}`))},onMouseEnter:v,onMouseLeave:v,"data-testid":"pool-details-add-liquidity-button",children:[!C&&(0,i.jsx)(Pe.Z,{size:20}),(0,i.jsx)(w.Tv.BodyPrimary,{fontWeight:535,color:"accentActive",children:(0,i.jsx)(n.cC,{id:"E6MqGy"})}),C&&(0,i.jsx)($e.Z,{size:20})]})]}),(0,i.jsx)(Be,{open:b,"data-testid":"pool-details-swap-modal",children:(0,i.jsx)(ve.HY,{chainId:e,initialInputCurrency:f,initialOutputCurrency:j,disableTokenInputs:e!==d})})]}):(0,i.jsxs)(_e,{"data-testid":"pdp-buttons-loading-skeleton",children:[(0,i.jsx)(Le,{}),(0,i.jsx)(Le,{})]})}var Ee=o(39303);const Me=e=>(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",...e,children:[(0,i.jsxs)("g",{clipPath:"url(#clip0_2958_135280)",children:[(0,i.jsx)("path",{d:"M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z",stroke:"#9B9B9B",strokeLinecap:"round",strokeLinejoin:"round"}),(0,i.jsx)("path",{d:"M2.46484 2.46509L9.53484 9.53509",stroke:"#9B9B9B",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,i.jsx)("defs",{children:(0,i.jsx)("clipPath",{id:"clip0_2958_135280",children:(0,i.jsx)("rect",{width:"12",height:"12",fill:"white"})})})]});var Fe=o(59926),Oe=o(79799),Ze=o(47021);const Re=(0,b.default)(s.ZP).withConfig({displayName:"PoolDetailsPositionsTable__PositionTableWrapper",componentId:"sc-e4efa33-0"})`
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
`,We=(0,b.default)(w.Tv.LabelMicro).withConfig({displayName:"PoolDetailsPositionsTable__FeeTier",componentId:"sc-e4efa33-2"})`
  padding: 4px 6px;
  background: ${({theme:e})=>e.surface2};
`,ze=(0,b.default)(N.ZP).withConfig({displayName:"PoolDetailsPositionsTable__StatusWrapper",componentId:"sc-e4efa33-3"})`
  gap: 8px;
  width: max-content;
  margin-right: 0;
  margin-left: auto;
  color ${({theme:e,status:t})=>t===Ye.IN_RANGE?e.success:t===Ye.OUT_OF_RANGE?e.deprecated_accentWarning:e.neutral2};
`,Ve=(0,b.default)(N.ZP).withConfig({displayName:"PoolDetailsPositionsTable__RangeWrapper",componentId:"sc-e4efa33-4"})`
  gap: 10px;

  @media screen and (max-width: ${F.j$.sm}px) {
    flex-direction: column;
    gap: 4px;
    align-items: flex-start;
  }
`,He=(0,b.default)((e=>(0,i.jsx)("svg",{width:"14",height:"9",viewBox:"0 0 14 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,i.jsx)("path",{d:"M4.00284 8.5L0.184659 4.68182L4.00284 0.863636L4.65909 1.51136L1.95739 4.21307H12.1335L9.43182 1.51136L10.0881 0.863636L13.9062 4.68182L10.0881 8.5L9.43182 7.84375L12.1335 5.15057H1.95739L4.65909 7.84375L4.00284 8.5Z",fill:"#5E5E5E"})}))).withConfig({displayName:"PoolDetailsPositionsTable__StyledDoubleArrow",componentId:"sc-e4efa33-5"})`
  @media screen and (max-width: ${F.j$.sm}px) {
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
`;var Ye;function qe({positionInfo:e}){const t=[(0,g.U8)(e.details.token0,e.chainId),(0,g.U8)(e.details.token1,e.chainId)],{chainId:o,connector:a}=(0,ye.useWeb3React)(),s=(0,M.s0)(),r=(0,Ce.o)(),d=(0,b.useTheme)(),{formatTickPrice:l}=(0,C.Gb)(),c=(0,y.useCallback)((async()=>{o!==e.chainId&&await r(a,e.chainId),s("/pool/"+e.details.tokenId)}),[a,s,e.chainId,e.details.tokenId,r,o]),p=e.inRange?Ye.IN_RANGE:e.closed?Ye.CLOSED:Ye.OUT_OF_RANGE,m=e.position.token0PriceLower.invert(),u=e.position.token0PriceUpper.invert(),h={LOWER:0===parseFloat(u.toFixed(0)),UPPER:parseFloat(m.toFixed(0))>Number.MAX_SAFE_INTEGER};return(0,i.jsxs)(Ae,{onClick:c,children:[(0,i.jsxs)(N.ZP,{gap:"8px",children:[(0,i.jsx)(I.ge,{chainId:e.chainId,currencies:t,size:16}),(0,i.jsxs)(w.Tv.SubHeader,{children:[e.pool.token0.symbol,"/",e.pool.token1.symbol]}),(0,i.jsxs)(We,{children:[e.pool.fee/Fe.PM,"%"]}),(0,i.jsxs)(ze,{status:p,children:[(0,i.jsx)(w.Tv.Caption,{color:"inherit",children:p}),p===Ye.IN_RANGE&&(0,i.jsx)(Xe,{}),p===Ye.OUT_OF_RANGE&&(0,i.jsx)(Oe.Z,{size:12,color:d.deprecated_accentWarning}),p===Ye.CLOSED&&(0,i.jsx)(Me,{})]})]}),(0,i.jsxs)(Ve,{children:[(0,i.jsxs)(Ge,{"data-testid":`position-min-${u.toFixed(0)}`,children:[(0,i.jsx)(n.cC,{id:"0uYsLP"}),"\xa0",l({price:u,atLimit:h,direction:Ze.Mb.LOWER}),"\xa0",e.pool.token0.symbol,"\xa0",(0,i.jsx)(n.cC,{id:"b2jAb+"}),"\xa0",e.pool.token1.symbol]}),(0,i.jsx)(He,{}),(0,i.jsxs)(Ge,{"data-testid":`position-max-${m.toFixed(0)}`,children:[(0,i.jsx)(n.cC,{id:"BniuBY"}),"\xa0",l({price:m,atLimit:h,direction:Ze.Mb.UPPER}),"\xa0",e.pool.token0.symbol,"\xa0",(0,i.jsx)(n.cC,{id:"b2jAb+"}),"\xa0",e.pool.token1.symbol]})]})]})}function Qe({positions:e}){return(0,i.jsx)(Re,{children:e.map(((e,t)=>(0,i.jsx)(qe,{positionInfo:e},`pool-position-${t}`)))})}!function(e){e.IN_RANGE="In range",e.OUT_OF_RANGE="Out of range",e.CLOSED="Closed"}(Ye||(Ye={}));var Ke=o(12762),Je=o(82786),et=o(44878),tt=o(87148),ot=o(54210),it=o(95326),nt=o(66644),at=o(32605);function st(e){const t=e.toString(),o=t.replace(".","").replace(/^0+/,"");return(t.includes(".")?o:o.replace(/0+$/,"")).length}var rt,dt=o(70762);at.Ps`
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
`,function(e){e.BUY="Buy",e.SELL="Sell",e.BURN="Burn",e.MINT="Mint"}(rt||(rt={}));var lt=o(59155),ct=o(84087),pt=o(33151);const mt=(0,b.default)(w.dL).withConfig({displayName:"PoolDetailsTransactionsTable__StyledExternalLink",componentId:"sc-b8829eff-0"})`
  color: ${({theme:e})=>e.neutral2};
  stroke: ${({theme:e})=>e.neutral2};
`;function ut({poolAddress:e,token0:t,token1:o}){const a=(0,f.Qj)((0,M.UO)().chainName),s=(0,f.Tz)(a),d=(0,b.useTheme)(),l=(0,ct.eQ)(),c=(0,lt.XB)(),{formatNumber:p,formatFiatPrice:m}=(0,C.Gb)(),[u,h]=(0,y.useReducer)((e=>!e),!1),x=(0,y.useRef)(null);(0,pt.t)(x,u?h:void 0);const[g,j]=(0,y.useState)([rt.BUY,rt.SELL,rt.BURN,rt.MINT]),[k,v]=(0,y.useState)({sortBy:nt.ri.Timestamp,sortDirection:nt.N9.Desc}),{transactions:T,loading:P,loadMore:$,error:I}=function(e,t,o=nt.ri.Timestamp,i=nt.N9.Desc,n=[rt.BUY,rt.SELL,rt.BURN,rt.MINT],a=25,s){const d=dt.uw[t||r.ChainId.MAINNET],{data:l,loading:c,fetchMore:p,error:m}=(0,nt.PG)({variables:{address:e.toLowerCase(),first:a,skip:s,orderBy:o,orderDirection:i},client:d}),u=(0,y.useRef)(!1),h=(0,y.useCallback)((({onComplete:e})=>{u.current||(u.current=!0,p({variables:{skip:Math.max(l?.swaps?.length??0,l?.mints?.length??0,l?.burns?.length??0)},updateQuery:(t,{fetchMoreResult:o})=>{if(!o)return t;e?.();const i={mints:[...t.mints,...o.mints],swaps:[...t.swaps,...o.swaps],burns:[...t.burns,...o.burns]};return u.current=!1,i}}))}),[l?.burns?.length,l?.mints?.length,l?.swaps?.length,p]),x=(0,y.useMemo)((()=>{const e=n.includes(rt.MINT)?l?.mints.map((e=>({...e,type:rt.MINT,isExactIn:void 0}))):[],t=n.includes(rt.BURN)?l?.burns.map((e=>({...e,type:rt.BURN,isExactIn:void 0}))).filter((e=>"0"!==e.amount0&&"0"!==e.amount1)):[];return[...e??[],...(n.includes(rt.BUY)||n.includes(rt.SELL)?l?.swaps.map((e=>{const t=e.amount0>0?e.pool.token0:e.pool.token1,o=st(e.amount0),i=st(e.amount1),a=t.id.toLowerCase()===e.pool.token0?.id.toLowerCase()?o<i:i<o;return a&&n.includes(rt.SELL)?{...e,type:rt.SELL,isExactIn:a}:!a&&n.includes(rt.BUY)?{...e,type:rt.BUY,isExactIn:a}:void 0})).filter((e=>void 0!==e)):[])??[],...t??[]].sort(((e,t)=>t?.timestamp-e?.timestamp)).map((e=>({timestamp:e?.timestamp,transaction:e?.transaction.id,pool:{token0:{id:e?.pool.token0.id,symbol:e?.pool.token0.symbol},token1:{id:e?.pool.token1.id,symbol:e?.pool.token1.symbol}},maker:e?.origin,amount0:e?.amount0,amount1:e?.amount1,amountUSD:e?.amountUSD,type:e?.type,isExactIn:e?.isExactIn})))}),[l?.burns,l?.mints,l?.swaps,n]);return(0,y.useMemo)((()=>({transactions:x,loading:c,loadMore:h,error:m})),[x,c,h,m])}(e,s,k.sortBy,k.sortDirection,g),S=(0,y.useCallback)((e=>{k.sortBy===e?v({sortBy:e,sortDirection:k.sortDirection===nt.N9.Asc?nt.N9.Desc:nt.N9.Asc}):v({sortBy:e,sortDirection:nt.N9.Desc})}),[k.sortBy,k.sortDirection]),_=(0,y.useMemo)((()=>{const e=(0,Ke.Cl)();return[e.accessor((e=>e.timestamp),{id:"timestamp",header:()=>(0,i.jsx)(et.b,{minWidth:150,justifyContent:"flex-start",children:(0,i.jsxs)(ot.d4,{$justify:"flex-start",onClick:()=>S(nt.ri.Timestamp),children:[k.sortBy===nt.ri.Timestamp&&(0,i.jsx)(ot.iX,{direction:k.sortDirection}),(0,i.jsx)(w.Tv.BodySecondary,{children:(0,i.jsx)(n.cC,{id:"LhMjLm"})})]})}),cell:e=>(0,i.jsx)(et.b,{loading:P,minWidth:150,justifyContent:"flex-start",children:(0,i.jsx)(w.Tv.BodySecondary,{children:(0,it.G)(1e3*Number(e.getValue?.()),l)})})}),e.accessor((e=>{let t,o;if(e.type===rt.BUY||e.type===rt.SELL){const[a,s]=e.amount0>0?[e.pool.token0,e.pool.token1]:[e.pool.token1,e.pool.token0];t=e.isExactIn?"critical":"success",o=e.isExactIn?(0,i.jsxs)("span",{children:[(0,i.jsx)(n.cC,{id:"xNB0TS"}),"\xa0",a.symbol]}):(0,i.jsxs)("span",{children:[(0,i.jsx)(n.cC,{id:"qiOIiY"}),"\xa0",s.symbol]})}else t=e.type===rt.MINT?"success":"critical",o=e.type===rt.MINT?(0,i.jsx)(n.cC,{id:"m16xKo"}):(0,i.jsx)(n.cC,{id:"t/YqKh"});return(0,i.jsx)(w.Tv.BodyPrimary,{color:t,children:o})}),{id:"swap-type",header:()=>(0,i.jsx)(et.b,{minWidth:100,justifyContent:"flex-start",children:(0,i.jsxs)(ot.j4,{modalOpen:u,onClick:()=>h(),ref:x,children:[(0,i.jsx)(tt.w,{allFilters:Object.values(rt),activeFilter:g,setFilters:j,isOpen:u}),(0,i.jsx)(w.Tv.BodySecondary,{children:(0,i.jsx)(n.cC,{id:"+zy2Nq"})})]})}),cell:e=>(0,i.jsx)(et.b,{loading:P,minWidth:100,justifyContent:"flex-start",children:e.getValue?.()})}),e.accessor((e=>e.amountUSD),{id:"fiat-value",header:()=>(0,i.jsx)(et.b,{minWidth:125,justifyContent:"flex-end",grow:!0,children:(0,i.jsx)(w.Tv.BodySecondary,{children:(0,i.jsx)(n.cC,{id:"ylhjte",values:{activeLocalCurrency:c}})})}),cell:e=>(0,i.jsx)(et.b,{loading:P,minWidth:125,justifyContent:"flex-end",grow:!0,children:(0,i.jsx)(w.Tv.BodyPrimary,{children:m({price:e.getValue?.()})})})}),e.accessor((e=>e.pool.token0.id.toLowerCase()===t?.id.toLowerCase()?e.amount0:e.amount1),{id:"input-amount",header:()=>(0,i.jsx)(et.b,{loading:P,minWidth:125,justifyContent:"flex-end",grow:!0,children:(0,i.jsx)(w.m_,{to:`/explore/tokens/${a.toLowerCase()}/${t?.id}`,children:(0,i.jsx)(w.Tv.BodySecondary,{children:t?.symbol})})}),cell:e=>(0,i.jsx)(et.b,{loading:P,minWidth:125,justifyContent:"flex-end",grow:!0,children:(0,i.jsx)(w.Tv.BodyPrimary,{children:p({input:Math.abs(e.getValue?.()??0),type:C.sw.TokenTx})})})}),e.accessor((e=>e.pool.token0.id.toLowerCase()===t?.id.toLowerCase()?e.amount1:e.amount0),{id:"output-amount",header:()=>(0,i.jsx)(et.b,{loading:P,minWidth:125,justifyContent:"flex-end",grow:!0,children:(0,i.jsx)(w.m_,{to:`/explore/tokens/${a.toLowerCase()}/${o?.id}`,children:(0,i.jsx)(w.Tv.BodySecondary,{children:o?.symbol})})}),cell:e=>(0,i.jsx)(et.b,{loading:P,minWidth:125,justifyContent:"flex-end",grow:!0,children:(0,i.jsx)(w.Tv.BodyPrimary,{children:p({input:Math.abs(e.getValue?.()??0),type:C.sw.TokenTx})})})}),e.accessor((e=>e.maker),{id:"maker-address",header:()=>(0,i.jsx)(et.b,{minWidth:100,justifyContent:"flex-end",grow:!0,children:(0,i.jsx)(w.Tv.BodySecondary,{children:(0,i.jsx)(n.cC,{id:"sb9Y58"})})}),cell:e=>(0,i.jsx)(et.b,{loading:P,minWidth:100,justifyContent:"flex-end",grow:!0,children:(0,i.jsx)(mt,{href:(0,Z.E)(s,e.getValue?.(),Z.r.ADDRESS),children:(0,i.jsx)(w.Tv.BodyPrimary,{children:(0,O.Xn)(e.getValue?.(),0)})})})}),e.accessor((e=>(0,Z.E)(s,e.transaction,Z.r.TRANSACTION)),{id:"etherscan-link",header:()=>(0,i.jsx)(et.b,{minWidth:32,justifyContent:"flex-end",children:(0,i.jsx)(w.Tv.BodySecondary,{children:(0,i.jsx)(n.cC,{id:"S3piC2"})})}),cell:e=>(0,i.jsx)(et.b,{loading:P,minWidth:32,justifyContent:"flex-end",children:(0,i.jsx)(mt,{href:e.getValue?.(),"data-testid":e.getValue?.(),children:(0,i.jsx)($e.Z,{size:"16px",stroke:d.neutral1})})})})]}),[c,s,a,g,u,m,p,S,P,l,k.sortBy,k.sortDirection,d.neutral1,t?.id,t?.symbol,o?.id,o?.symbol]);return I?(0,i.jsx)(n.cC,{id:"03MhdB"}):(0,i.jsx)("div",{"data-testid":"pool-details-transactions-table",children:(0,i.jsx)(Je.i,{columns:_,data:T,loading:P,loadMore:$,maxHeight:600})})}var ht;!function(e){e.TRANSACTIONS="transactions",e.POSITIONS="positions"}(ht||(ht={}));const xt=(0,b.default)(w.Tv.HeadlineMedium).withConfig({displayName:"PoolDetailsTable__TableHeader",componentId:"sc-d7ee789b-0"})`
  color: ${({theme:e,active:t})=>!t&&e.neutral2};
  ${({disabled:e})=>!e&&w.iV}
  user-select: none;
`;function ft({poolAddress:e,token0:t,token1:o}){const[a,r]=(0,y.useState)(ht.TRANSACTIONS),d=(0,f.Qj)((0,M.UO)().chainName),l=(0,f.Tz)(d),{account:c}=(0,ye.useWeb3React)(),{positions:p}=(0,be.Z)(c??"",[l]),m=(0,y.useMemo)((()=>p?.filter((t=>Ee.Pool.getAddress(t.pool.token0,t.pool.token1,t.pool.fee).toLowerCase()===e.toLowerCase()))??[]),[e,p]);return(0,i.jsxs)(s.ZP,{gap:"lg",children:[(0,i.jsxs)(N.ZP,{gap:"16px",children:[(0,i.jsx)(xt,{active:a===ht.TRANSACTIONS,onClick:()=>r(ht.TRANSACTIONS),disabled:!m.length,children:(0,i.jsx)(n.cC,{id:"4wyw8H"})}),Boolean(m.length)&&(0,i.jsxs)(xt,{active:a===ht.POSITIONS,onClick:()=>r(ht.POSITIONS),children:[(0,i.jsx)(n.cC,{id:"12Jgfh"}),` (${m?.length})`]})]}),a===ht.TRANSACTIONS?(0,i.jsx)(ut,{poolAddress:e,token0:t,token1:o}):(0,i.jsx)(Qe,{positions:m})]})}var gt=o(2715),jt=o(53609),yt=o(19530),bt=o.n(yt);const wt=(e,t,o)=>{const i=parseFloat(e)-parseFloat(t),n=parseFloat(t)-parseFloat(o),a=(i-n)/n*100;return isNaN(a)||!isFinite(a)?[i,0]:[i,a]},kt=e=>{let t="query blocks {";return t+=e.map((e=>`t${e}:blocks(first: 1, orderBy: timestamp, orderDirection: desc, where: { timestamp_gt: ${e}, timestamp_lt: ${e+600} }) {\n        number\n      }`)),t+="}",(0,at.ZP)(t)};function Ct(e,t){const[o,i]=(0,y.useState)(),[n,a]=(0,y.useState)(!1),s=dt.Pf[t],r=o?.[t];console.log(kt,s,[],e,"<====timestampstimestamps"),(0,y.useEffect)((()=>{r||n||async function(){const n=await async function(e,t,o,i,n=1e3){let a={},s=!1,r=0;try{for(;!s;){let d=i.length;r+n<i.length&&(d=r+n);const l=i.slice(r,d),c=await t.query({query:e(...o,l),fetchPolicy:"network-only"});a={...a,...c.data},Object.keys(c.data).length<n||r+n>i.length?s=!0:r+=n}return a}catch(d){return void console.log(d)}}(kt,s,[],e);console.log(n,"<====results"),n?i({...o??{},[t]:n}):a(!0)}()}),[]);const d=(0,y.useMemo)((()=>{if(o?.[t]){const e=o?.[t],i=[];for(const o in e)if(e[o].length>0){const n=e[o][0].number,a=jt.DM[t],s=n>a?n:a;i.push({timestamp:o.split("t")[1],number:s})}return i}}),[t,o]);return{blocks:d,error:n}}function vt(e,t){const o=[e],i=dt.uw[t||r.ChainId.MAINNET],[n,a,s]=function(){const e=Date.now();return[Math.floor((e-bt()("1d"))/1e3),Math.floor((e-bt()("2d"))/1e3),Math.floor((e-bt()("7d"))/1e3)]}(),{blocks:d,error:l}=Ct([n,a,s],t||r.ChainId.MAINNET),[c,p,m]=d??[],{loading:u,error:h,data:x}=(0,nt.zm)({variables:{poolId:o},client:i,fetchPolicy:"no-cache"}),{loading:f,error:g,data:j}=(0,nt.zm)({variables:{poolId:o,block:c&&{number:parseFloat(c.number)}},client:i,fetchPolicy:"no-cache"}),{loading:b,error:w,data:k}=(0,nt.zm)({variables:{poolId:o,block:p&&{number:parseFloat(p.number)}},client:i,fetchPolicy:"no-cache"}),{loading:C,error:v,data:T}=(0,nt.zm)({variables:{poolId:o,block:m&&{number:parseFloat(m.number)}},client:i,fetchPolicy:"no-cache"});return(0,y.useMemo)((()=>{const t=Boolean(h||g||w||v),o=Boolean(u||f||b||C);if(t||o)return{loading:o,error:t,data:void 0};const i=x?.pools[0],n=j?.pools[0],a=k?.pools[0],s=T?.pools[0],r=x?.bundles?.[0]?.ethPriceUSD?parseFloat(x?.bundles?.[0]?.ethPriceUSD):0,[d,l]=i&&n&&a?wt(i.volumeUSD,n.volumeUSD,a.volumeUSD):i?[parseFloat(i.volumeUSD),0]:[0,0],c=i&&s?parseFloat(i.volumeUSD)-parseFloat(s.volumeUSD):i?parseFloat(i.volumeUSD):0,p=i&&n?parseFloat(i.volumeUSD)-parseFloat(n.volumeUSD):i?parseFloat(i.volumeUSD):0,m=i?parseFloat(i.feeTier)/1e4/100:0,y=i?.volumeToken0?parseFloat(i.volumeToken0)*m/2:0,P=i?.volumeToken1?parseFloat(i.volumeToken1)*m/2:0,$=i?parseFloat(i.totalValueLockedToken0)-y:0,I=i?parseFloat(i.totalValueLockedToken1)-P:0;let S=i?parseFloat(i.totalValueLockedUSD):0;const _=i&&n?(parseFloat(i.totalValueLockedUSD)-parseFloat(n.totalValueLockedUSD))/parseFloat("0"===n.totalValueLockedUSD?"1":n.totalValueLockedUSD)*100:0,D=i?$*parseFloat(i.token0.derivedETH)*r+I*parseFloat(i.token1.derivedETH)*r:void 0;return D&&(S=D),{data:i?{...i,address:e,volumeUSD:d,volumeUSDChange:l,volumeUSDWeek:c,volumeUSD24H:p,tvlUSD:S,tvlUSDChange:_,tvlToken0:$,tvlToken1:I,tick:parseFloat(i.tick)}:void 0,error:t,loading:o}}),[l,x?.bundles,x?.pools,j?.pools,k?.pools,T?.pools,h,g,w,v,u,f,b,C,e])}at.ZP`
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
`;var Tt=o(76743);const Pt=(0,b.default)(N.ZP).withConfig({displayName:"PoolDetails__PageWrapper",componentId:"sc-d7a22450-0"})`
  padding: 48px;
  width: 100%;
  align-items: flex-start;
  gap: 60px;

  @media (max-width: ${F.j$.lg-1}px) {
    flex-direction: column;
    gap: unset;
  }

  @media (max-width: ${F.j$.sm-1}px) {
    padding: 48px 16px;
  }
`,$t=(0,b.default)(s.ZP).withConfig({displayName:"PoolDetails__LeftColumn",componentId:"sc-d7a22450-1"})`
  gap: 24px;
  width: 65vw;
  overflow: hidden;
  justify-content: flex-start;

  @media (max-width: ${F.j$.lg-1}px) {
    width: 100%;
  }
`,It=b.default.div.withConfig({displayName:"PoolDetails__ChartTypeSelectorContainer",componentId:"sc-d7a22450-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,St=b.default.hr.withConfig({displayName:"PoolDetails__HR",componentId:"sc-d7a22450-3"})`
  border: 0.5px solid ${({theme:e})=>e.surface3};
  margin: 16px 0px;
  width: 100%;
`,_t=(0,b.default)(s.ZP).withConfig({displayName:"PoolDetails__RightColumn",componentId:"sc-d7a22450-4"})`
  gap: 24px;
  margin: 0 48px 0 auto;
  width: 22vw;
  min-width: 360px;

  @media (max-width: ${F.j$.lg-1}px) {
    margin: 44px 0px;
    width: 100%;
    min-width: unset;
  }
`,Dt=(0,b.default)(s.ZP).withConfig({displayName:"PoolDetails__TokenDetailsWrapper",componentId:"sc-d7a22450-5"})`
  gap: 24px;
  padding: 20px;

  @media (max-width: ${F.j$.lg-1}px) and (min-width: ${F.j$.sm}px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding: unset;
  }

  @media (max-width: ${F.j$.sm-1}px) {
    padding: unset;
  }
`,Nt=(0,b.default)(te.xv).withConfig({displayName:"PoolDetails__TokenDetailsHeader",componentId:"sc-d7a22450-6"})`
  width: 100%;
  font-size: 24px;
  font-weight: 485;
  line-height: 32px;
`,Lt=(0,b.default)(s.ZP).withConfig({displayName:"PoolDetails__LinksContainer",componentId:"sc-d7a22450-7"})`
  gap: 16px;
  width: 100%;
`;function Bt(){const{poolAddress:e,chainName:t}=(0,M.UO)(),o=(0,f._3)(t),r=o&&(0,f.Tz)(o),{data:d,loading:l}=vt(e??"",r),[c,p]=(0,y.useReducer)((e=>!e),!1),m=c?d?.token1:d?.token0,u=c?d?.token0:d?.token1,h=!t||!e||!(0,f._3)(t)||!(0,O.UJ)(e),x=!l&&!d||h,[g,j]=(0,y.useState)(a.oX.VOLUME),[b,w]=(0,y.useState)(a.E4.LINE);return x?(0,i.jsx)(Tt.default,{}):(0,i.jsxs)(Pt,{children:[(0,i.jsxs)($t,{children:[(0,i.jsxs)(s.ZP,{gap:"lg",children:[(0,i.jsx)(I.G7,{chainId:r,poolAddress:e,token0:m,token1:u,loading:l}),(0,i.jsxs)(N.ZP,{justify:"space-between",children:[(0,i.jsx)(I.dG,{chainId:r,token0:m,token1:u,feeTier:d?.feeTier,toggleReversed:p,loading:l}),(0,i.jsx)(It,{children:g===a.oX.VOLUME&&(0,i.jsx)(gt.P,{currentChartType:b,onChartTypeChange:w})})]}),(0,i.jsx)($,{token0:m,token1:u,chartType:g,priceChartType:b,feeTier:d?.feeTier,loading:l})]}),(0,i.jsx)(St,{}),(0,i.jsx)(ft,{poolAddress:e,token0:m,token1:u})]}),(0,i.jsxs)(_t,{children:[(0,i.jsx)(Ue,{chainId:r,token0:m,token1:u,feeTier:d?.feeTier,loading:l}),(0,i.jsx)(xe,{poolData:d,isReversed:c,chainId:r,loading:l}),(0,i.jsxs)(Dt,{children:[(0,i.jsx)(Nt,{children:(0,i.jsx)(n.cC,{id:"Rj01Fz"})}),(0,i.jsxs)(Lt,{children:[(0,i.jsx)(Y,{address:e,chainId:r,tokens:[m,u],loading:l}),(0,i.jsx)(Y,{address:m?.id,chainId:r,tokens:[m],loading:l}),(0,i.jsx)(Y,{address:u?.id,chainId:r,tokens:[u],loading:l})]})]})]})]})}}}]);
//# sourceMappingURL=6920.26696fbd.chunk.js.map