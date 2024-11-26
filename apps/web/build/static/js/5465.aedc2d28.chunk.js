"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[5465,2574],{88568:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(39491),r=n(37954),o=n.n(r);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=(0,i.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,o=e.size,c=void 0===o?24:o,l=a(e,["color","size"]);return i.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),i.createElement("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),i.createElement("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}))}));c.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},c.displayName="Inbox";const l=c},28243:(e,t,n)=>{n.d(t,{Z:()=>M});var i=n(21339),r=n(88693),o=n(56542),s=n(75422),a=n(4570),c=n(29826),l=n(82523),d=n(52214),u=n(25400),p=n(39491),h=n(33552),x=n(39681),m=n(10548),g=n(96193),f=n(19369),y=n(73685),j=n(61265),v=n(70357),b=n(94727),C=n(44680),w=n(73392),N=n(17358),R=n(930),_=n(51764);const k=h.default.div.withConfig({displayName:"CurrencyInputPanel__InputPanel",componentId:"sc-ef61363a-0"})`
  ${g.lt};
  position: relative;
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  background-color: ${({theme:e,hideInput:t})=>t?"transparent":e.surface2};

  z-index: 1;
  width: ${({hideInput:e})=>e?"100%":"initial"};
  transition: height 1s ease;
  will-change: height;
`,E=h.default.div.withConfig({displayName:"CurrencyInputPanel__Container",componentId:"sc-ef61363a-1"})`
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  border: 1px solid ${({theme:e})=>e.surface3};
  background-color: ${({theme:e})=>e.surface2};
  width: ${({hideInput:e})=>e?"100%":"initial"};
  ${({theme:e,hideInput:t,disabled:n})=>!n&&`\n    :focus,\n    :hover {\n      border: 1px solid ${t?" transparent":e.surface2};\n    }\n  `}
`,I=(0,h.default)(v.Ux).withConfig({displayName:"CurrencyInputPanel__CurrencySelect",componentId:"sc-ef61363a-2"})`
  align-items: center;
  background-color: ${({selected:e,theme:t})=>e?t.surface1:t.accent1};
  opacity: ${({disabled:e})=>e?.4:1};
  box-shadow: ${({theme:e})=>e.deprecated_shallowShadow};
  color: ${({selected:e,theme:t})=>e?t.neutral1:t.surface2};
  cursor: pointer;
  border-radius: 16px;
  outline: none;
  user-select: none;
  border: none;
  font-size: 24px;
  font-weight: 535;
  height: ${({hideInput:e})=>e?"2.8rem":"2.4rem"};
  width: ${({hideInput:e})=>e?"100%":"initial"};
  padding: 0 8px;
  justify-content: space-between;
  margin-left: ${({hideInput:e})=>e?"0":"12px"};
  :focus,
  :hover {
    background-color: ${({selected:e,theme:t})=>e?t.surface2:(0,u._j)(.05,t.accent1)};
  }
  visibility: ${({visible:e})=>e?"visible":"hidden"};
  ${({pointerEvents:e})=>e&&"pointer-events: none"}
`,T=h.default.div.withConfig({displayName:"CurrencyInputPanel__InputRow",componentId:"sc-ef61363a-3"})`
  ${g.MG};
  align-items: center;
  justify-content: space-between;
  padding: ${({selected:e})=>e?" 1rem 1rem 0.75rem 1rem":"1rem 1rem 1rem 1rem"};
`,S=h.default.div.withConfig({displayName:"CurrencyInputPanel__LabelRow",componentId:"sc-ef61363a-4"})`
  ${g.MG};
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0 1rem 1rem;
  span:hover {
    cursor: pointer;
    color: ${({theme:e})=>(0,u._j)(.2,e.neutral2)};
  }
`,A=(0,h.default)(S).withConfig({displayName:"CurrencyInputPanel__FiatRow",componentId:"sc-ef61363a-5"})`
  justify-content: flex-end;
  padding: 0px 1rem 0.75rem;
  height: 32px;
`,O=h.default.span.withConfig({displayName:"CurrencyInputPanel__Aligner",componentId:"sc-ef61363a-6"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  line-height: 0px;
`,B=(0,h.default)(y.r).withConfig({displayName:"CurrencyInputPanel__StyledDropDown",componentId:"sc-ef61363a-7"})`
  margin: 0 0.25rem 0 0.35rem;
  height: 35%;

  path {
    stroke: ${({selected:e,theme:t})=>e?t.neutral1:t.white};
    stroke-width: 1.5px;
  }
`,U=h.default.span.withConfig({displayName:"CurrencyInputPanel__StyledTokenName",componentId:"sc-ef61363a-8"})`
  ${({active:e})=>"  margin: 0 0.25rem 0 0.25rem;"}
  font-size: 20px;
  white-space: nowrap;

  @media screen and (max-width: ${x.j$.sm}px) {
    font-size: 16px;
  }
`,D=h.default.button.withConfig({displayName:"CurrencyInputPanel__StyledBalanceMax",componentId:"sc-ef61363a-9"})`
  background-color: transparent;
  background-color: ${({theme:e})=>e.accent2};
  border: none;
  border-radius: 12px;
  color: ${({theme:e})=>e.accent1};
  cursor: pointer;
  font-size: 11px;
  font-weight: 535;
  margin-left: 0.25rem;
  opacity: ${({disabled:e})=>e?.4:1};
  padding: 4px 6px;
  pointer-events: ${({disabled:e})=>e?"none":"initial"};

  :hover {
    opacity: ${({disabled:e})=>e?.4:.8};
  }

  :focus {
    outline: none;
  }
`,$=(0,h.default)(w.I).withConfig({displayName:"CurrencyInputPanel__StyledNumericalInput",componentId:"sc-ef61363a-10"})`
  ${c._Q};
  text-align: left;
`,L=(0,h.default)(l.Z).withConfig({displayName:"CurrencyInputPanel__StyledPrefetchBalancesWrapper",componentId:"sc-ef61363a-11"})`
  width: ${({$fullWidth:e})=>e?"100%":"auto"};
`;function M({value:e,onUserInput:t,onMax:n,showMaxButton:l,onCurrencySelect:u,currency:x,otherCurrency:g,id:y,showCommonBases:v,showCurrencyAmount:w,disableNonToken:S,renderBalance:M,fiatValue:P,hideBalance:z=!1,pair:Y=null,hideInput:F=!1,locked:W=!1,loading:q=!1,...Z}){const[G,H]=(0,p.useState)(!1),{account:V,chainId:K}=(0,s.useWeb3React)(),J=(0,j._h)(V??void 0,x??void 0),X=(0,h.useTheme)(),{formatCurrencyAmount:Q}=(0,f.Gb)(),ee=(0,p.useCallback)((()=>{H(!1)}),[H]),te=(0,d.EC)(K);return(0,i.jsxs)(k,{id:y,hideInput:F,...Z,children:[!W&&(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(E,{hideInput:F,disabled:!te,children:[(0,i.jsxs)(T,{style:F?{padding:"0",borderRadius:"8px"}:{},selected:!u,children:[!F&&(0,i.jsx)($,{className:"token-amount-input",value:e,onUserInput:t,disabled:!te,$loading:q}),(0,i.jsx)(L,{shouldFetchOnAccountUpdate:G,$fullWidth:F,children:(0,i.jsx)(I,{disabled:!te,visible:void 0!==x,selected:!!x,hideInput:F,className:"open-currency-select-button",onClick:()=>{u&&H(!0)},pointerEvents:u?void 0:"none",children:(0,i.jsxs)(O,{children:[(0,i.jsxs)(N.DA,{children:[Y?(0,i.jsx)("span",{style:{marginRight:"0.5rem"},children:(0,i.jsx)(b.Z,{currency0:Y.token0,currency1:Y.token1,size:24,margin:!0})}):x&&(0,i.jsx)(C.Z,{style:{marginRight:"0.5rem"},currency:x,size:"24px"}),Y?(0,i.jsxs)(U,{className:"pair-name-container",children:[Y?.token0.symbol,":",Y?.token1.symbol]}):(0,i.jsx)(U,{className:"token-symbol-container",active:Boolean(x&&x.symbol),children:(x&&x.symbol&&x.symbol.length>20?x.symbol.slice(0,4)+"..."+x.symbol.slice(x.symbol.length-5,x.symbol.length):x?.symbol)||(0,i.jsx)(r.cC,{id:"T0Y2+3"})})]}),u&&(0,i.jsx)(B,{selected:!!x})]})})})]}),Boolean(!F&&!z&&x)&&(0,i.jsx)(A,{children:(0,i.jsxs)(N.m0,{children:[(0,i.jsx)(c.EG,{$loading:q,children:P&&(0,i.jsx)(_.x,{fiatValue:P})}),V&&(0,i.jsxs)(N.DA,{style:{height:"17px"},children:[(0,i.jsx)(m.Tv.DeprecatedBody,{onClick:n,color:X.neutral3,fontWeight:535,fontSize:14,style:{display:"inline",cursor:"pointer"},children:Boolean(!z&&x&&J)&&(M?.(J)||(0,i.jsx)(r.cC,{id:"VuFd5C",values:{0:Q({amount:J,type:f.sw.TokenNonTx})}}))}),Boolean(l&&J)&&(0,i.jsx)(a.M8,{events:[o.TM.onClick],name:o.Q0.SWAP_MAX_TOKEN_AMOUNT_SELECTED,element:o.xo.MAX_TOKEN_AMOUNT_BUTTON,children:(0,i.jsx)(D,{onClick:n,children:(0,i.jsx)(r.cC,{id:"4HtGBb"})})})]})]})})]})}),u&&(0,i.jsx)(R.Z,{isOpen:G,onDismiss:ee,onCurrencySelect:u,selectedCurrency:x,otherSelectedCurrency:g,showCommonBases:v,showCurrencyAmount:w,disableNonToken:S})]})}},98976:(e,t,n)=>{n.d(t,{q:()=>C,w:()=>N});var i=n(21339),r=n(88693),o=n(75422),s=n(7206),a=n(18910),c=n(99123),l=n(92686),d=n(9726),u=n(21914),p=n(52148),h=n(47021),x=n(33552),m=n(10548),g=n(96193),f=n(17358);const y=x.default.div.withConfig({displayName:"NavigationTabs__Tabs",componentId:"sc-e9587879-0"})`
  ${g.MG};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,j=(0,x.default)(c.rU).withConfig({displayName:"NavigationTabs__StyledLink",componentId:"sc-e9587879-1"})`
  flex: ${({flex:e})=>e??"none"};
  display: flex;
  align-items: center;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `};
`,v=(0,x.default)(m.Tv.H1Small).withConfig({displayName:"NavigationTabs__FindPoolTabsText",componentId:"sc-e9587879-2"})`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,b=(0,x.default)(a.Z).withConfig({displayName:"NavigationTabs__StyledArrowLeft",componentId:"sc-e9587879-3"})`
  color: ${({theme:e})=>e.neutral1};
`;function C({origin:e}){return(0,i.jsx)(y,{children:(0,i.jsxs)(f.m0,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,i.jsx)(c.rU,{to:e,children:(0,i.jsx)(b,{})}),(0,i.jsx)(v,{children:(0,i.jsx)(r.cC,{id:"LCFvJr"})})]})})}const w=(0,x.default)(m.Tv.H1Small).withConfig({displayName:"NavigationTabs__AddRemoveTitleText",componentId:"sc-e9587879-4"})`
  flex: 1;
  margin: auto;
  text-align: ${({$center:e})=>e?"center":"start"};
`;function N({adding:e,creating:t,autoSlippage:n,positionID:a,children:c}){const{chainId:m}=(0,o.useWeb3React)(),g=(0,x.useTheme)(),v=(0,u.T)(),C=(0,l.TH)().pathname.includes("add/v2")?"/pools/v2":"/pools"+(a?`/${a.toString()}`:"");return(0,i.jsx)(y,{children:(0,i.jsxs)(f.m0,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,i.jsx)(j,{to:C,onClick:()=>{e&&(v((0,p.dA)()),v((0,h.dA)()))},flex:c?"1":void 0,children:(0,i.jsx)(b,{stroke:g.neutral2})}),(0,i.jsx)(w,{$center:!c,children:t?(0,i.jsx)(r.cC,{id:"ma87bD"}):e?(0,i.jsx)(r.cC,{id:"E6MqGy"}):(0,i.jsx)(r.cC,{id:"cJtosk"})}),c&&(0,i.jsx)(d.xu,{style:{marginRight:".5rem"},children:c}),(0,i.jsx)(s.Z,{autoSlippage:n,chainId:m,hideRoutingSettings:!0})]})})}},34896:(e,t,n)=>{n.d(t,{SS:()=>h,sq:()=>l,MN:()=>d,RF:()=>u,uO:()=>p,I8:()=>c});var i=n(33552);const r=n.p+"static/media/big_unicorn.595c49962d708abbaaec.png",o=n.p+"static/media/noise.3c7efafc83614205bd1a.png",s=n.p+"static/media/xl_uni.9c9e061bed67e15ad3c8.png";var a=n(65023);const c=(0,i.default)(a.Tz).withConfig({displayName:"styled__DataCard",componentId:"sc-6a13bc9-0"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #2172e5 100%);
  border-radius: 12px;
  width: 100%;
  position: relative;
  overflow: hidden;
`,l=i.default.span.withConfig({displayName:"styled__CardBGImage",componentId:"sc-6a13bc9-1"})`
  background: url(${r});
  width: 1000px;
  height: 600px;
  position: absolute;
  border-radius: 12px;
  opacity: 0.4;
  top: -100px;
  left: -100px;
  transform: rotate(-15deg);
  user-select: none;
  ${({desaturate:e})=>e&&"filter: saturate(0)"}
`,d=i.default.span.withConfig({displayName:"styled__CardBGImageSmaller",componentId:"sc-6a13bc9-2"})`
  background: url(${s});
  width: 1200px;
  height: 1200px;
  position: absolute;
  border-radius: 12px;
  top: -300px;
  left: -300px;
  opacity: 0.4;
  user-select: none;

  ${({desaturate:e})=>e&&"filter: saturate(0)"}
`,u=i.default.span.withConfig({displayName:"styled__CardNoise",componentId:"sc-6a13bc9-3"})`
  background: url(${o});
  background-size: cover;
  mix-blend-mode: overlay;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
`,p=(0,i.default)(a.Tz).withConfig({displayName:"styled__CardSection",componentId:"sc-6a13bc9-4"})`
  padding: 1rem;
  z-index: 1;
  opacity: ${({disabled:e})=>e&&"0.4"};
`,h=i.default.div.withConfig({displayName:"styled__Break",componentId:"sc-6a13bc9-5"})`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
`},87876:(e,t,n)=>{n.d(t,{Z:()=>b});var i=n(21339),r=n(88693),o=n(75422),s=n(70357),a=n(32345),c=n(65023),l=n(44680),d=n(17734),u=n(17358),p=n(39491),h=n(33552),x=n(10548),m=n(48664),g=n(12973),f=n(54359);const y=h.default.div.withConfig({displayName:"UnsupportedCurrencyFooter__DetailsFooter",componentId:"sc-b083a83b-0"})`
  padding-top: calc(16px + 2rem);
  padding-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -2rem;
  width: 100%;
  max-width: 400px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  color: ${({theme:e})=>e.neutral2};
  background-color: ${({theme:e})=>e.surface2};
  z-index: ${m.k.deprecated_zero};

  transform: ${({show:e})=>e?"translateY(0%)":"translateY(-100%)"};
  transition: transform 300ms ease-in-out;
  text-align: center;
`,j=(0,h.default)(s.qL).withConfig({displayName:"UnsupportedCurrencyFooter__StyledButtonEmpty",componentId:"sc-b083a83b-1"})`
  text-decoration: none;
`,v=(0,h.default)(x.Tv.DeprecatedBlue).withConfig({displayName:"UnsupportedCurrencyFooter__AddressText",componentId:"sc-b083a83b-2"})`
  font-size: 12px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    font-size: 10px;
`}
`;function b({show:e,currencies:t}){const{chainId:n}=(0,o.useWeb3React)(),[s,h]=(0,p.useState)(!1),m=n&&t?t.map((e=>e?.wrapped)):[],b=(0,g.l6)();return(0,i.jsxs)(y,{show:e,children:[(0,i.jsx)(d.Z,{isOpen:s,onDismiss:()=>h(!1),children:(0,i.jsx)(a.ZP,{padding:"2rem",children:(0,i.jsxs)(c.Tz,{gap:"lg",children:[(0,i.jsxs)(u.m0,{children:[(0,i.jsx)(x.Tv.DeprecatedMediumHeader,{children:(0,i.jsx)(r.cC,{id:"7Osz32"})}),(0,i.jsx)(x.Tw,{onClick:()=>h(!1),"data-testid":"close-icon"})]}),m.map((e=>e&&b&&Object.keys(b).includes(e.address)&&(0,i.jsx)(a.nq,{"data-testid":"unsupported-token-card",children:(0,i.jsxs)(c.Tz,{gap:"10px",children:[(0,i.jsxs)(u.BA,{gap:"5px",align:"center",children:[(0,i.jsx)(l.Z,{currency:e,size:"24px"}),(0,i.jsx)(x.Tv.DeprecatedBody,{fontWeight:535,children:e.symbol})]}),n&&(0,i.jsx)(x.dL,{href:(0,f.E)(n,e.address,f.r.ADDRESS),children:(0,i.jsx)(v,{children:e.address})})]})},e.address?.concat("not-supported")))),(0,i.jsx)(c.Tz,{gap:"lg",children:(0,i.jsx)(x.Tv.DeprecatedBody,{fontWeight:535,children:(0,i.jsx)(r.cC,{id:"l7X7DE"})})})]})})}),(0,i.jsx)(j,{padding:"0",onClick:()=>h(!0),"data-testid":"read-more-button",children:(0,i.jsx)(x.Tv.DeprecatedBlue,{children:(0,i.jsx)(r.cC,{id:"bIjYSY"})})})]})}},45795:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Wt});var i=n(21339),r=n(75422),o=n(92686),s=n(46778),a=n(54100),c=n(88693),l=n(56542),d=n(82032),u=n(39303),p=n(4570),h=n(91997),x=n(79799),m=n(33552),g=n(10548);const f=m.default.div.withConfig({displayName:"OwnershipWarning__ExplainerText",componentId:"sc-bef8de1f-0"})`
  color: ${({theme:e})=>e.neutral2};
`,y=m.default.div.withConfig({displayName:"OwnershipWarning__TitleRow",componentId:"sc-bef8de1f-1"})`
  align-items: center;
  display: flex;
  flex-direction: row;
  color: ${({theme:e})=>e.deprecated_accentWarning};
  margin-bottom: 8px;
`,j=m.default.div.withConfig({displayName:"OwnershipWarning__Wrapper",componentId:"sc-bef8de1f-2"})`
  background-color: ${({theme:e})=>e.deprecated_accentWarningSoft};
  border-radius: 16px;
  margin-top: 12px;
  max-width: 480px;
  padding: 12px 20px;
  width: 100%;
`,v=({ownerAddress:e})=>(0,i.jsxs)(j,{children:[(0,i.jsxs)(y,{children:[(0,i.jsx)(x.Z,{style:{marginRight:"8px"}}),(0,i.jsx)(g.Tv.SubHeader,{color:"deprecated_accentWarning",children:(0,i.jsx)(c.cC,{id:"r6y+jM"})})]}),(0,i.jsx)(f,{children:(0,i.jsx)(c.cC,{id:"7o/WJ5",values:{ownerAddress:e}})})]});var b=n(87876),C=n(52214),w=n(47474),N=n(14844),R=n(89982),_=n(85813),k=n(39491),E=n(99123),I=n(9726),T=n(47029),S=n(63486),A=n(38690),O=n(19369),B=n(70357),U=n(32345),D=n(65023),$=n(28243),L=n(77725),M=n(91239),P=n(3689),z=n(21309),Y=n(25400),F=n(88568),W=n(37954),q=n.n(W);function Z(){return Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Z.apply(this,arguments)}function G(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var H=(0,k.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,r=e.size,o=void 0===r?24:r,s=G(e,["color","size"]);return k.createElement("svg",Z({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),k.createElement("path",{d:"M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"}),k.createElement("line",{x1:"1",y1:"1",x2:"23",y2:"23"}))}));H.propTypes={color:q().string,size:q().oneOfType([q().string,q().number])},H.displayName="CloudOff";const V=H;function K(){return K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},K.apply(this,arguments)}function J(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var X=(0,k.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,r=e.size,o=void 0===r?24:r,s=J(e,["color","size"]);return k.createElement("svg",K({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),k.createElement("line",{x1:"18",y1:"20",x2:"18",y2:"10"}),k.createElement("line",{x1:"12",y1:"20",x2:"12",y2:"4"}),k.createElement("line",{x1:"6",y1:"20",x2:"6",y2:"14"}))}));X.propTypes={color:q().string,size:q().oneOfType([q().string,q().number])},X.displayName="BarChart2";const Q=X;var ee=n(15256),te=n(47021),ne=n(66661);const ie=m.default.path.withConfig({displayName:"Area__Path",componentId:"sc-a0a3ffe3-0"})`
  opacity: 0.5;
  stroke: ${({fill:e,theme:t})=>e??t.accent1};
  fill: ${({fill:e,theme:t})=>e??t.accent1};
`,re=({series:e,xScale:t,yScale:n,xValue:r,yValue:o,fill:s})=>(0,k.useMemo)((()=>(0,i.jsx)(ie,{fill:s,d:(0,ne.SOn)().curve(ne.jsv).x((e=>t(r(e)))).y1((e=>n(o(e)))).y0(n(0))(e.filter((e=>{const n=t(r(e));return n>0&&n<=window.innerWidth})))??void 0})),[s,e,t,r,n,o]),oe=m.default.g.withConfig({displayName:"AxisBottom__StyledGroup",componentId:"sc-86793c1c-0"})`
  line {
    display: none;
  }

  text {
    color: ${({theme:e})=>e.neutral2};
    transform: translateY(5px);
  }
`,se=({axisGenerator:e})=>(0,i.jsx)("g",{ref:t=>{t&&(0,ne.Ys)(t).call(e).call((e=>e.select(".domain").remove()))}}),ae=({xScale:e,innerHeight:t,offset:n=0})=>(0,k.useMemo)((()=>(0,i.jsx)(oe,{transform:`translate(0, ${t+n})`,children:(0,i.jsx)(se,{axisGenerator:(0,ne.LLu)(e).ticks(6)})})),[t,n,e]),ce=e=>["M 0 0",`v ${e}`,"m 1 0","V 0","M 0 1","h 12","q 2 0, 2 2","v 22","q 0 2 -2 2","h -12","z"].join(" "),le=()=>["m 5 7","v 14","M 0 0","m 9 7","v 14","z"].join(" "),de=({color:e,size:t=10,margin:n=10})=>(0,i.jsx)("polygon",{points:`0 0, ${t} ${t}, 0 ${t}`,transform:` translate(${t+n}, ${n}) rotate(45) `,fill:e,stroke:e,strokeWidth:"4",strokeLinejoin:"round"}),ue=m.default.path.withConfig({displayName:"Brush__Handle",componentId:"sc-f6266828-0"})`
  cursor: ew-resize;
  pointer-events: none;

  stroke-width: 3;
  stroke: ${({color:e})=>e};
  fill: ${({color:e})=>e};
`,pe=m.default.path.withConfig({displayName:"Brush__HandleAccent",componentId:"sc-f6266828-1"})`
  cursor: ew-resize;
  pointer-events: none;

  stroke-width: 1.5;
  stroke: ${({theme:e})=>e.white};
  opacity: ${({theme:e})=>e.opacity.hover};
`,he=m.default.g.withConfig({displayName:"Brush__LabelGroup",componentId:"sc-f6266828-2"})`
  opacity: ${({visible:e})=>e?"1":"0"};
  transition: opacity 300ms;
`,xe=m.default.rect.withConfig({displayName:"Brush__TooltipBackground",componentId:"sc-f6266828-3"})`
  fill: ${({theme:e})=>e.surface3};
`,me=m.default.text.withConfig({displayName:"Brush__Tooltip",componentId:"sc-f6266828-4"})`
  text-anchor: middle;
  font-size: 13px;
  fill: ${({theme:e})=>e.neutral1};
`,ge=(e,t,n)=>{const i=e.map((e=>n(e).toFixed(1))),r=t.map((e=>n(e).toFixed(1)));return i.every(((e,t)=>e===r[t]))},fe=({id:e,xScale:t,interactive:n,brushLabelValue:r,brushExtent:o,setBrushExtent:s,innerWidth:a,innerHeight:c,westHandleColor:l,eastHandleColor:d})=>{const u=(0,k.useRef)(null),p=(0,k.useRef)(null),[h,x]=(0,k.useState)(o),[m,g]=(0,k.useState)(!1),[f,y]=(0,k.useState)(!1),j=(0,w.Z)(o),v=(0,k.useCallback)((e=>{const{type:n,selection:i,mode:r}=e;if(!i)return void x(null);const a=i.map(t.invert);"end"!==n||ge(o,a,t)||s(a,r),x(a)}),[t,o,s]);(0,k.useEffect)((()=>{x(o)}),[o]),(0,k.useEffect)((()=>{u.current&&(p.current=(0,ne.Yud)().extent([[Math.max(2,t(0)),0],[a-2,c]]).handleSize(30).filter((()=>n)).on("brush end",v),p.current((0,ne.Ys)(u.current)),j&&ge(o,j,t)&&(0,ne.Ys)(u.current).transition().call(p.current.move,o.map(t)),(0,ne.Ys)(u.current).selectAll(".selection").attr("stroke","none").attr("fill-opacity","0.1").attr("fill",`url(#${e}-gradient-selection)`))}),[o,v,e,c,a,n,j,t]),(0,k.useEffect)((()=>{u.current&&p.current&&p.current.move((0,ne.Ys)(u.current),o.map(t))}),[o,t]),(0,k.useEffect)((()=>{g(!0);const e=setTimeout((()=>g(!1)),1500);return()=>clearTimeout(e)}),[h]);const b=h&&t(h[0])>20,C=h&&t(h[1])>a-20,N=h&&(t(h[0])<0||t(h[1])<0),R=h&&(t(h[0])>a||t(h[1])>a),_=h&&t(h[0])>=0&&t(h[0])<=a,E=h&&t(h[1])>=0&&t(h[1])<=a;return(0,k.useMemo)((()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("defs",{children:[(0,i.jsxs)("linearGradient",{id:`${e}-gradient-selection`,x1:"0%",y1:"100%",x2:"100%",y2:"100%",children:[(0,i.jsx)("stop",{stopColor:l}),(0,i.jsx)("stop",{stopColor:d,offset:"1"})]}),(0,i.jsx)("clipPath",{id:`${e}-brush-clip`,children:(0,i.jsx)("rect",{x:"0",y:"0",width:a,height:c})})]}),(0,i.jsx)("g",{ref:u,clipPath:`url(#${e}-brush-clip)`,onMouseEnter:()=>y(!0),onMouseLeave:()=>y(!1)}),h&&(0,i.jsxs)(i.Fragment,{children:[_?(0,i.jsxs)("g",{transform:`translate(${Math.max(0,t(h[0]))}, 0), scale(${b?"-1":"1"}, 1)`,children:[(0,i.jsxs)("g",{children:[(0,i.jsx)(ue,{color:l,d:ce(c)}),(0,i.jsx)(pe,{d:le()})]}),(0,i.jsxs)(he,{transform:`translate(50,0), scale(${b?"1":"-1"}, 1)`,visible:m||f,children:[(0,i.jsx)(xe,{y:"0",x:"-30",height:"30",width:"60",rx:"8"}),(0,i.jsx)(me,{transform:"scale(-1, 1)",y:"15",dominantBaseline:"middle",children:r("w",h[0])})]})]}):null,E?(0,i.jsxs)("g",{transform:`translate(${t(h[1])}, 0), scale(${C?"-1":"1"}, 1)`,children:[(0,i.jsxs)("g",{children:[(0,i.jsx)(ue,{color:d,d:ce(c)}),(0,i.jsx)(pe,{d:le()})]}),(0,i.jsxs)(he,{transform:`translate(50,0), scale(${C?"-1":"1"}, 1)`,visible:m||f,children:[(0,i.jsx)(xe,{y:"0",x:"-30",height:"30",width:"60",rx:"8"}),(0,i.jsx)(me,{y:"15",dominantBaseline:"middle",children:r("e",h[1])})]})]}):null,N&&(0,i.jsx)(de,{color:l}),R&&(0,i.jsx)("g",{transform:`translate(${a}, 0) scale(-1, 1)`,children:(0,i.jsx)(de,{color:d})})]})]})),[r,d,E,C,b,f,e,c,a,h,R,m,N,l,_,t])},ye=m.default.line.withConfig({displayName:"Line__StyledLine",componentId:"sc-6eaa82df-0"})`
  opacity: 0.5;
  stroke-width: 2;
  stroke: ${({theme:e})=>e.neutral1};
  fill: none;
`,je=({value:e,xScale:t,innerHeight:n})=>(0,k.useMemo)((()=>(0,i.jsx)(ye,{x1:t(e),y1:"0",x2:t(e),y2:n})),[e,t,n]);function ve(){return ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},ve.apply(this,arguments)}function be(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Ce=(0,k.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,r=e.size,o=void 0===r?24:r,s=be(e,["color","size"]);return k.createElement("svg",ve({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),k.createElement("polyline",{points:"1 4 1 10 7 10"}),k.createElement("polyline",{points:"23 20 23 14 17 14"}),k.createElement("path",{d:"M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"}))}));Ce.propTypes={color:q().string,size:q().oneOfType([q().string,q().number])},Ce.displayName="RefreshCcw";const we=Ce;function Ne(){return Ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Ne.apply(this,arguments)}function Re(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var _e=(0,k.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,r=e.size,o=void 0===r?24:r,s=Re(e,["color","size"]);return k.createElement("svg",Ne({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),k.createElement("circle",{cx:"11",cy:"11",r:"8"}),k.createElement("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}),k.createElement("line",{x1:"11",y1:"8",x2:"11",y2:"14"}),k.createElement("line",{x1:"8",y1:"11",x2:"14",y2:"11"}))}));_e.propTypes={color:q().string,size:q().oneOfType([q().string,q().number])},_e.displayName="ZoomIn";const ke=_e;function Ee(){return Ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Ee.apply(this,arguments)}function Ie(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Te=(0,k.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,r=e.size,o=void 0===r?24:r,s=Ie(e,["color","size"]);return k.createElement("svg",Ee({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),k.createElement("circle",{cx:"11",cy:"11",r:"8"}),k.createElement("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}),k.createElement("line",{x1:"8",y1:"11",x2:"14",y2:"11"}))}));Te.propTypes={color:q().string,size:q().oneOfType([q().string,q().number])},Te.displayName="ZoomOut";const Se=Te,Ae=m.default.div.withConfig({displayName:"Zoom__Wrapper",componentId:"sc-3a525a68-0"})`
  display: grid;
  grid-template-columns: repeat(${({count:e})=>e.toString()}, 1fr);
  grid-gap: 6px;

  position: absolute;
  top: -32px;
  right: 0;
`,Oe=(0,m.default)(B.Ux).withConfig({displayName:"Zoom__Button",componentId:"sc-3a525a68-1"})`
  &:hover {
    background-color: ${({theme:e})=>e.surface3};
    color: ${({theme:e})=>e.neutral1};
  }

  width: 32px;
  height: 32px;
  padding: 4px;
`,Be=m.default.rect.withConfig({displayName:"Zoom__ZoomOverlay",componentId:"sc-3a525a68-2"})`
  fill: transparent;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;function Ue({svg:e,xScale:t,setZoom:n,width:r,height:o,resetBrush:s,showResetButton:a,zoomLevels:c}){const l=(0,k.useRef)(),[d,u,p,h]=(0,k.useMemo)((()=>[()=>e&&l.current&&(0,ne.Ys)(e).transition().call(l.current.scaleBy,2),()=>e&&l.current&&(0,ne.Ys)(e).transition().call(l.current.scaleBy,.5),()=>e&&l.current&&(0,ne.Ys)(e).transition().call(l.current.scaleTo,.5),()=>e&&l.current&&(0,ne.Ys)(e).call(l.current.transform,ne.CRH.translate(0,0).scale(1)).transition().call(l.current.scaleTo,.5)]),[e]);return(0,k.useEffect)((()=>{e&&(l.current=(0,ne.sPX)().scaleExtent([c.min,c.max]).extent([[0,0],[r,o]]).on("zoom",(({transform:e})=>n(e))),(0,ne.Ys)(e).call(l.current))}),[o,r,n,e,t,l,c,c.max,c.min]),(0,k.useEffect)((()=>{p()}),[p,c]),(0,i.jsxs)(Ae,{count:a?3:2,children:[a&&(0,i.jsx)(Oe,{onClick:()=>{s(),h()},disabled:!1,children:(0,i.jsx)(we,{size:16})}),(0,i.jsx)(Oe,{onClick:d,disabled:!1,children:(0,i.jsx)(ke,{size:16})}),(0,i.jsx)(Oe,{onClick:u,disabled:!1,children:(0,i.jsx)(Se,{size:16})})]})}const De=e=>e.price0,$e=e=>e.activeLiquidity;function Le({id:e="liquidityChartRangeInput",data:{series:t,current:n},ticksAtLimit:r,styles:o,dimensions:{width:s,height:a},margins:c,interactive:l=!0,brushDomain:d,brushLabels:u,onBrushDomainChange:p,zoomLevels:h}){const x=(0,k.useRef)(null),[m,g]=(0,k.useState)(null),[f,y]=(0,k.useMemo)((()=>[a-c.top-c.bottom,s-c.left-c.right]),[s,a,c]),{xScale:j,yScale:v}=(0,k.useMemo)((()=>{const e={xScale:(0,ne.BYU)().domain([n*h.initialMin,n*h.initialMax]).range([0,y]),yScale:(0,ne.BYU)().domain([0,(0,ne.Fp7)(t,$e)]).range([f,0])};if(m){const t=m.rescaleX(e.xScale);e.xScale.domain(t.domain())}return e}),[n,h.initialMin,h.initialMax,y,t,f,m]);return(0,k.useEffect)((()=>{g(null)}),[h]),(0,k.useEffect)((()=>{d||p(j.domain(),void 0)}),[d,p,j]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Ue,{svg:x.current,xScale:j,setZoom:g,width:y,height:a,resetBrush:()=>{p([n*h.initialMin,n*h.initialMax],"reset")},showResetButton:Boolean(r[te.Mb.LOWER]||r[te.Mb.UPPER]),zoomLevels:h}),(0,i.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${s} ${a}`,style:{overflow:"visible"},children:[(0,i.jsxs)("defs",{children:[(0,i.jsx)("clipPath",{id:`${e}-chart-clip`,children:(0,i.jsx)("rect",{x:"0",y:"0",width:y,height:a})}),d&&(0,i.jsx)("mask",{id:`${e}-chart-area-mask`,children:(0,i.jsx)("rect",{fill:"white",x:j(d[0]),y:"0",width:j(d[1])-j(d[0]),height:f})})]}),(0,i.jsxs)("g",{transform:`translate(${c.left},${c.top})`,children:[(0,i.jsxs)("g",{clipPath:`url(#${e}-chart-clip)`,children:[(0,i.jsx)(re,{series:t,xScale:j,yScale:v,xValue:De,yValue:$e}),d&&(0,i.jsx)("g",{mask:`url(#${e}-chart-area-mask)`,children:(0,i.jsx)(re,{series:t,xScale:j,yScale:v,xValue:De,yValue:$e,fill:o.area.selection})}),(0,i.jsx)(je,{value:n,xScale:j,innerHeight:f}),(0,i.jsx)(ae,{xScale:j,innerHeight:f})]}),(0,i.jsx)(Be,{width:y,height:a,ref:x}),(0,i.jsx)(fe,{id:e,xScale:j,interactive:l,brushLabelValue:u,brushExtent:d??j.domain(),innerWidth:y,innerHeight:f,setBrushExtent:p,westHandleColor:o.brush.handle.west,eastHandleColor:o.brush.handle.east})]})]})]})}var Me=n(66644),Pe=n(70762),ze=n(44595),Ye=n.n(ze),Fe=n(19530),We=n.n(Fe);const qe=8;function Ze(e,t,n,i,r,o){let s={...n},a=[];for(let c=r+(o?1:-1);o?c<i.length:c>=0;o?c++:c--){const n=Number(i[c].tick),r={liquidityActive:s.liquidityActive,tick:n,liquidityNet:Ye().BigInt(i[c].liquidityNet),price0:(0,u.tickToPrice)(e,t,n).toFixed(qe)};o?r.liquidityActive=Ye().add(s.liquidityActive,Ye().BigInt(i[c].liquidityNet)):!o&&Ye().notEqual(s.liquidityNet,Ye().BigInt(0))&&(r.liquidityActive=Ye().subtract(s.liquidityActive,s.liquidityNet)),a.push(r),s=r}return o||(a=a.reverse()),a}var Ge=n(77910);const He=8,Ve=(e,t)=>e&&t?Math.floor(e/u.TICK_SPACINGS[t])*u.TICK_SPACINGS[t]:void 0;const Ke=1e3;function Je(e,t,n){const[i,o]=(0,k.useState)(0),[s,a]=(0,k.useState)([]),{data:c,error:l,loading:p}=function(e,t,n,i=0){const{chainId:o}=(0,r.useWeb3React)(),s=e&&t&&n?u.Pool.getAddress(e?.wrapped,t?.wrapped,n,void 0,o?d.V3_CORE_FACTORY_ADDRESSES[o]:void 0):void 0;return(0,Me.K_)({variables:{poolAddress:s?.toLowerCase(),skip:i},skip:!s,pollInterval:We()("30s"),client:Pe.l8})}(e,t,n,i);return(0,k.useEffect)((()=>{c?.ticks.length&&(a((e=>[...e,...c.ticks])),c.ticks.length===Ke&&o((e=>e+Ke)))}),[c?.ticks]),{isLoading:p||c?.ticks.length===Ke,error:l,ticks:s}}function Xe({currencyA:e,currencyB:t,feeAmount:n}){const{isLoading:i,error:r,data:o}=function(e,t,n){const i=(0,Ge.AI)(e,t,n),r=(0,k.useMemo)((()=>Ve(i[1]?.tickCurrent,n)),[i,n]),{isLoading:o,error:s,ticks:a}=Je(e,t,n);return(0,k.useMemo)((()=>{if(!e||!t||void 0===r||i[0]!==Ge.tK.EXISTS||!a||0===a.length||o)return{isLoading:o||i[0]===Ge.tK.LOADING,error:s,activeTick:r,data:void 0};const n=e?.wrapped,c=t?.wrapped,l=a.findIndex((({tick:e})=>e>r))-1;if(l<0)return console.error("TickData pivot not found"),{isLoading:o,error:s,activeTick:r,data:void 0};const d={liquidityActive:Ye().BigInt(i[1]?.liquidity??0),tick:r,liquidityNet:Number(a[l].tick)===r?Ye().BigInt(a[l].liquidityNet):Ye().BigInt(0),price0:(0,u.tickToPrice)(n,c,r).toFixed(He)},p=Ze(n,c,d,a,l,!0),h=Ze(n,c,d,a,l,!1).concat(d).concat(p);return{isLoading:o,error:s,activeTick:r,data:h}}),[e,t,r,i,a,o,s])}(e,t,n),s=(0,k.useCallback)((()=>{if(!o?.length)return;const e=[];for(let t=0;t<o.length;t++){const n=o[t],i={activeLiquidity:parseFloat(n.liquidityActive.toString()),price0:parseFloat(n.price0)};i.activeLiquidity>0&&e.push(i)}return e}),[o]);return(0,k.useMemo)((()=>({isLoading:i,error:r,formattedData:i?void 0:s()})),[i,r,s])}const Qe={[u.FeeAmount.LOWEST]:{initialMin:.999,initialMax:1.001,min:1e-5,max:1.5},[u.FeeAmount.LOW]:{initialMin:.999,initialMax:1.001,min:1e-5,max:1.5},[u.FeeAmount.MEDIUM]:{initialMin:.5,initialMax:2,min:1e-5,max:20},[u.FeeAmount.HIGH]:{initialMin:.5,initialMax:2,min:1e-5,max:20}},et=m.default.div.withConfig({displayName:"LiquidityChartRangeInput__ChartWrapper",componentId:"sc-95d14715-0"})`
  position: relative;
  width: 100%;
  max-height: 200px;
  justify-content: center;
  align-content: center;
`;function tt({message:e,icon:t}){return(0,i.jsxs)(D.lg,{style:{height:"100%",justifyContent:"center"},children:[t,e&&(0,i.jsx)(g.Tv.DeprecatedMediumHeader,{padding:10,marginTop:"20px",textAlign:"center",children:e})]})}function nt({currencyA:e,currencyB:t,feeAmount:n,ticksAtLimit:r,price:o,priceLower:s,priceUpper:a,onLeftRangeInput:l,onRightRangeInput:d,interactive:p}){const h=(0,m.useTheme)(),x=(0,z.r)(e),g=(0,z.r)(t),f=e&&t&&e?.wrapped.sortsBefore(t?.wrapped),{isLoading:y,error:j,formattedData:v}=Xe({currencyA:e,currencyB:t,feeAmount:n}),b=(0,k.useCallback)(((e,t)=>{let n=Number(e[0]);const i=Number(e[1]);n<=0&&(n=1/10**6),(0,ee.dC)((()=>{(!r[f?te.Mb.LOWER:te.Mb.UPPER]||"handle"===t||"reset"===t)&&n>0&&l(n.toFixed(6)),(!r[f?te.Mb.UPPER:te.Mb.LOWER]||"reset"===t)&&i>0&&i<1e35&&d(i.toFixed(6))}))}),[f,l,d,r]);p=p&&Boolean(v?.length);const C=(0,k.useMemo)((()=>{const e=f?s:a?.invert(),t=f?a:s?.invert();return e&&t?[parseFloat(e?.toSignificant(6)),parseFloat(t?.toSignificant(6))]:void 0}),[f,s,a]),{formatDelta:w}=(0,O.Gb)(),N=(0,k.useCallback)(((e,t)=>{if(!o)return"";if("w"===e&&r[f?te.Mb.LOWER:te.Mb.UPPER])return"0";if("e"===e&&r[f?te.Mb.UPPER:te.Mb.LOWER])return"\u221e";const n=(t<o?-1:1)*((Math.max(t,o)-Math.min(t,o))/o)*100;return o?""+((Math.sign(n)<0?"-":"")+w(n)):""}),[w,f,o,r]),R=!e||!t||void 0===v&&!y;return(0,i.jsx)(D.Tz,{gap:"md",style:{minHeight:"200px"},children:R?(0,i.jsx)(tt,{message:(0,i.jsx)(c.cC,{id:"OZUH85"}),icon:(0,i.jsx)(F.Z,{size:56,stroke:h.neutral1})}):y?(0,i.jsx)(tt,{icon:(0,i.jsx)(P.ZP,{size:"40px",stroke:h.neutral2})}):j?(0,i.jsx)(tt,{message:(0,i.jsx)(c.cC,{id:"79D0qY"}),icon:(0,i.jsx)(V,{size:56,stroke:h.neutral2})}):v&&0!==v.length&&o?(0,i.jsx)(et,{children:(0,i.jsx)(Le,{data:{series:v,current:o},dimensions:{width:560,height:200},margins:{top:10,right:2,bottom:20,left:0},styles:{area:{selection:h.accent1},brush:{handle:{west:(0,Y.p_)(.1,x)??h.critical,east:(0,Y.p_)(.1,g)??h.accent1}}},interactive:p,brushLabels:N,brushDomain:C,onBrushDomainChange:b,zoomLevels:Qe[n??u.FeeAmount.MEDIUM],ticksAtLimit:r})}):(0,i.jsx)(tt,{message:(0,i.jsx)(c.cC,{id:"rH6vg9"}),icon:(0,i.jsx)(Q,{size:56,stroke:h.neutral2})})})}const it=k.memo(nt);var rt=n(98976),ot=n(21347),st=n(94727),at=n(34896),ct=n(44680),lt=n(38684),dt=n(17358),ut=n(59926),pt=n(82574);const ht=({position:e,title:t,inRange:n,baseCurrencyDefault:r,ticksAtLimit:o})=>{const s=(0,m.useTheme)(),{formatCurrencyAmount:a,formatDelta:l,formatPrice:d,formatTickPrice:u}=(0,O.Gb)(),p=(0,pt.B)(e.pool.token0),h=(0,pt.B)(e.pool.token1),[x,f]=(0,k.useState)(r?r===p?p:r===h?h:p:p),y=x===p,j=y?h:p,v=y?e.pool.priceOf(e.pool.token0):e.pool.priceOf(e.pool.token1),b=y?e.token0PriceLower:e.token0PriceUpper.invert(),C=y?e.token0PriceUpper:e.token0PriceLower.invert(),w=(0,k.useCallback)((()=>{f(j)}),[j]),N=e?.liquidity&&Ye().equal(e?.liquidity,Ye().BigInt(0));return(0,i.jsxs)(D.Tz,{gap:"md",style:{marginTop:"0.5rem"},children:[(0,i.jsxs)(dt.m0,{style:{marginBottom:"0.5rem"},children:[(0,i.jsxs)(dt.DA,{children:[(0,i.jsx)(st.Z,{currency0:p??void 0,currency1:h??void 0,size:24,margin:!0}),(0,i.jsxs)(g.Tv.DeprecatedLabel,{ml:"10px",fontSize:"24px",children:[p?.symbol," / ",h?.symbol]})]}),(0,i.jsx)(ot.Z,{removed:N,inRange:n})]}),(0,i.jsx)(U.hl,{children:(0,i.jsxs)(D.Tz,{gap:"md",children:[(0,i.jsxs)(dt.m0,{children:[(0,i.jsxs)(dt.DA,{children:[(0,i.jsx)(ct.Z,{currency:p}),(0,i.jsx)(g.Tv.DeprecatedLabel,{ml:"8px",children:p?.symbol})]}),(0,i.jsx)(dt.DA,{children:(0,i.jsx)(g.Tv.DeprecatedLabel,{mr:"8px",children:a({amount:e.amount0})})})]}),(0,i.jsxs)(dt.m0,{children:[(0,i.jsxs)(dt.DA,{children:[(0,i.jsx)(ct.Z,{currency:h}),(0,i.jsx)(g.Tv.DeprecatedLabel,{ml:"8px",children:h?.symbol})]}),(0,i.jsx)(dt.DA,{children:(0,i.jsx)(g.Tv.DeprecatedLabel,{mr:"8px",children:a({amount:e.amount1})})})]}),(0,i.jsx)(at.SS,{}),(0,i.jsxs)(dt.m0,{children:[(0,i.jsx)(g.Tv.DeprecatedLabel,{children:(0,i.jsx)(c.cC,{id:"EU3wU4"})}),(0,i.jsx)(g.Tv.DeprecatedLabel,{children:(0,i.jsx)(c.cC,{id:"J/hVSQ",values:{0:l(e?.pool?.fee/ut.PM)}})})]})]})}),(0,i.jsxs)(D.Tz,{gap:"md",children:[(0,i.jsxs)(dt.m0,{children:[t?(0,i.jsx)(g.Tv.DeprecatedMain,{children:t}):(0,i.jsx)("div",{}),(0,i.jsx)(lt.Z,{currencyA:y?p:h,currencyB:y?h:p,handleRateToggle:w})]}),(0,i.jsxs)(dt.m0,{children:[(0,i.jsx)(U.hl,{width:"48%",padding:"8px",children:(0,i.jsxs)(D.Tz,{gap:"4px",justify:"center",children:[(0,i.jsx)(g.Tv.DeprecatedMain,{fontSize:"12px",children:(0,i.jsx)(c.cC,{id:"EQs1sJ"})}),(0,i.jsx)(g.Tv.DeprecatedMediumHeader,{textAlign:"center",children:u({price:b,atLimit:o,direction:te.Mb.LOWER})}),(0,i.jsx)(g.Tv.DeprecatedMain,{textAlign:"center",fontSize:"12px",children:(0,i.jsx)(c.cC,{id:"7Z4WfS",values:{0:j.symbol,1:x.symbol}})}),(0,i.jsx)(g.Tv.DeprecatedSmall,{textAlign:"center",color:s.neutral3,style:{marginTop:"4px"},children:(0,i.jsx)(c.cC,{id:"WgTuci",values:{0:x?.symbol}})})]})}),(0,i.jsx)(U.hl,{width:"48%",padding:"8px",children:(0,i.jsxs)(D.Tz,{gap:"4px",justify:"center",children:[(0,i.jsx)(g.Tv.DeprecatedMain,{fontSize:"12px",children:(0,i.jsx)(c.cC,{id:"5etEUX"})}),(0,i.jsx)(g.Tv.DeprecatedMediumHeader,{textAlign:"center",children:u({price:C,atLimit:o,direction:te.Mb.UPPER})}),(0,i.jsx)(g.Tv.DeprecatedMain,{textAlign:"center",fontSize:"12px",children:(0,i.jsx)(c.cC,{id:"7Z4WfS",values:{0:j.symbol,1:x.symbol}})}),(0,i.jsx)(g.Tv.DeprecatedSmall,{textAlign:"center",color:s.neutral3,style:{marginTop:"4px"},children:(0,i.jsx)(c.cC,{id:"WgTuci",values:{0:j?.symbol}})})]})})]}),(0,i.jsx)(U.hl,{padding:"12px ",children:(0,i.jsxs)(D.Tz,{gap:"4px",justify:"center",children:[(0,i.jsx)(g.Tv.DeprecatedMain,{fontSize:"12px",children:(0,i.jsx)(c.cC,{id:"DWd30U"})}),(0,i.jsx)(g.Tv.DeprecatedMediumHeader,{children:`${d({price:v,type:O.sw.TokenTx})} `}),(0,i.jsx)(g.Tv.DeprecatedMain,{textAlign:"center",fontSize:"12px",children:(0,i.jsx)(c.cC,{id:"7Z4WfS",values:{0:j.symbol,1:x.symbol}})})]})})]})]})};var xt=n(17295);const mt=(0,m.default)(B.JU).attrs((()=>({padding:"6px",$borderRadius:"8px"}))).withConfig({displayName:"PresetsButtons__Button",componentId:"sc-1074f274-0"})`
  color: ${({theme:e})=>e.neutral1};
  flex: 1;
`;function gt({onSetFullRange:e}){return(0,i.jsx)(dt.BA,{gap:"4px",width:"auto",children:(0,i.jsx)(mt,{"data-testid":"set-full-range",onClick:e,children:(0,i.jsx)(g.Tv.DeprecatedBody,{fontSize:12,children:(0,i.jsx)(c.cC,{id:"5IHTSS"})})})})}var ft=n(12159),yt=n(69947),jt=n(12973),vt=n(81672);const bt=JSON.parse('[{"inputs":[{"components":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"_transactions","type":"tuple[]"}],"name":"wc_multiCall","outputs":[{"internalType":"bytes[]","name":"","type":"bytes[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_msgHash","type":"bytes32"},{"internalType":"bytes","name":"_signature","type":"bytes"}],"name":"isValidSignature","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"view","type":"function"}]');var Ct=n(22855),wt=n(5225);var Nt=n(15426),Rt=n(59815),_t=n(66850),kt=n(370),Et=n(15574),It=n(53055),Tt=n(59251);const St=new(n(94653).vU)([{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}]);function At(e,t){if(!e.currency.isToken)throw new Error("Must call with an amount of token");const n=St.encodeFunctionData("approve",[t,(0,u.toHex)(e.quotient)]);return{to:e.currency.address,data:n,value:"0x0"}}var Ot=n(9988),Bt=n(51232),Ut=n(93081),Dt=n(1707);const $t=m.default.div.withConfig({displayName:"Review__Wrapper",componentId:"sc-66673065-0"})`
  padding-top: 12px;
`;function Lt({position:e,outOfRange:t,ticksAtLimit:n}){return(0,i.jsx)($t,{children:(0,i.jsx)(D.Tz,{gap:"lg",children:e?(0,i.jsx)(ht,{position:e,inRange:!t,ticksAtLimit:n,title:"Selected Range"}):null})})}var Mt=n(51358);const Pt=new d.Percent(50,1e4),zt=(0,m.default)(R.e).withConfig({displayName:"AddLiquidity__StyledBodyWrapper",componentId:"sc-4a04b4c1-0"})`
  padding: ${({$hasExistingPosition:e})=>e?"10px":0};
  max-width: 640px;
`;function Yt(){const{chainId:e}=(0,r.useWeb3React)();return(0,C.EC)(e)?(0,i.jsx)(Ft,{}):(0,i.jsx)(_.PositionPageUnsupportedContent,{})}function Ft(){const e=(0,o.s0)(),{currencyIdA:t,currencyIdB:n,feeAmount:f,tokenId:y}=(0,o.UO)(),{account:j,chainId:C,provider:R}=(0,r.useWeb3React)(),_=(0,m.useTheme)(),P=(0,p.oO)(),z=(0,h.LK)(),Y=(0,Et.h7)(),F=(0,Ct.GL)(),{position:W,loading:q}=(0,kt.n)(y?a.O$.from(y):void 0),Z=!!W&&!q,{position:G}=function(e){const t=(0,jt.U8)(e?.token0),n=(0,jt.U8)(e?.token1),[,i]=(0,Ge.AI)(t??void 0,n??void 0,e?.fee);let r;return i&&e&&(r=new u.Position({pool:i,liquidity:e.liquidity.toString(),tickLower:e.tickLower,tickUpper:e.tickUpper})),{position:r,pool:i??void 0}}(W),H=f&&Object.values(u.FeeAmount).includes(parseFloat(f))?parseFloat(f):void 0,V=(0,jt.U8)(t),K=(0,jt.U8)(n),J=V&&K&&V.wrapped.equals(K.wrapped)?void 0:K,{independentField:X,typedValue:Q,startPriceTypedValue:ee}=(0,T.KS)(),{pool:ne,ticks:ie,dependentField:re,price:oe,pricesAtTicks:se,pricesAtLimit:ae,parsedAmounts:ce,currencyBalances:le,position:de,noLiquidity:ue,currencies:pe,errorMessage:he,invalidPool:xe,invalidRange:me,outOfRange:ge,depositADisabled:fe,depositBDisabled:ye,invertPrice:je,ticksAtLimit:ve}=(0,T.m2)(V??void 0,J??void 0,H,V??void 0,G),{formatPrice:be}=(0,O.Gb)(),Ce=be({price:je?oe?.invert():oe,type:O.sw.TokenTx}),{onFieldAInput:we,onFieldBInput:Ne,onLeftRangeInput:Re,onRightRangeInput:_e,onStartPriceInput:ke}=(0,T.EG)(ue),Ee=!he&&!me,[Ie,Te]=(0,k.useState)(!1),[Se,Ae]=(0,k.useState)(!1),Oe=(0,_t.Z)(),[Be,Ue]=(0,k.useState)(""),De={[X]:Q,[re]:ce[re]?.toSignificant(6)??""},$e={[te.gN.CURRENCY_A]:(0,Rt.sq)(ce[te.gN.CURRENCY_A]),[te.gN.CURRENCY_B]:(0,Rt.sq)(ce[te.gN.CURRENCY_B])},Le=[te.gN.CURRENCY_A,te.gN.CURRENCY_B].reduce(((e,t)=>({...e,[t]:(0,Ut.i)(le[t])})),{}),Me=[te.gN.CURRENCY_A,te.gN.CURRENCY_B].reduce(((e,t)=>({...e,[t]:Le[t]?.equalTo(ce[t]??"0")})),{}),Pe=function(){const{account:e}=(0,r.useWeb3React)(),t=(0,wt.Z)();return(0,Ct.cq)(t?e??void 0:void 0,bt,!0)}(),[ze,Ye]=(0,vt.q)(Pe?void 0:ce[te.gN.CURRENCY_A],C?d.NONFUNGIBLE_POSITION_MANAGER_ADDRESSES[C]:void 0),[Fe,We]=(0,vt.q)(Pe?void 0:ce[te.gN.CURRENCY_B],C?d.NONFUNGIBLE_POSITION_MANAGER_ADDRESSES[C]:void 0),qe=(0,Tt.eq)(ge?ut.fI:Pt);async function Ze(){if(C&&R&&j&&F&&V&&J&&de&&j&&Oe){const e=V.isNative?V:J.isNative?J:void 0,{calldata:t,value:n}=Z&&y?u.NonfungiblePositionManager.addCallParameters(de,{tokenId:y,slippageTolerance:qe,deadline:Oe.toString(),useNative:e}):u.NonfungiblePositionManager.addCallParameters(de,{slippageTolerance:qe,recipient:j,deadline:Oe.toString(),useNative:e,createPool:ue});let i={to:d.NONFUNGIBLE_POSITION_MANAGER_ADDRESSES[C],data:t,value:n};if(Pe){const e=ce[te.gN.CURRENCY_A],t=ce[te.gN.CURRENCY_B],n=[...e&&e.currency.isToken?[At(e,d.NONFUNGIBLE_POSITION_MANAGER_ADDRESSES[C])]:[],...t&&t.currency.isToken?[At(t,d.NONFUNGIBLE_POSITION_MANAGER_ADDRESSES[C])]:[],{to:i.to,data:i.data,value:i.value}],r=Pe.interface.encodeFunctionData("wc_multiCall",[n]);i={to:Pe.address,data:r,value:"0x0"}}const r=await R.getSigner().getChainId();if(C!==r)throw new A.CJ;Ae(!0),R.getSigner().estimateGas(i).then((e=>{const t={...i,gasLimit:(0,Ot.y)(e)};return R.getSigner().sendTransaction(t).then((e=>{Ae(!1);const t={type:It.i.ADD_LIQUIDITY_V3_POOL,baseCurrencyId:(0,Bt.H)(V),quoteCurrencyId:(0,Bt.H)(J),createPool:Boolean(ue),expectedAmountBaseRaw:ce[te.gN.CURRENCY_A]?.quotient?.toString()??"0",expectedAmountQuoteRaw:ce[te.gN.CURRENCY_B]?.quotient?.toString()??"0",feeAmount:de.pool.fee};Y(e,t),Ue(e.hash),(0,p._P)(l.vp.ADD_LIQUIDITY_SUBMITTED,{label:[pe[te.gN.CURRENCY_A]?.symbol,pe[te.gN.CURRENCY_B]?.symbol].join("/"),...P,...t})}))})).catch((e=>{console.error("Failed to send transaction",e),Ae(!1),4001!==e?.code&&console.error(e)}))}}const He=(0,k.useCallback)(((e,t)=>{const n=(0,Bt.H)(e);if(n===t)return[n,void 0];{const e="smartbch"===n||void 0!==C&&n===s.Fl[C]?.address,i=void 0!==t&&("smartbch"===t||void 0!==C&&t===s.Fl[C]?.address);return e&&i?[n,void 0]:[n,t]}}),[C]),Ve=(0,k.useCallback)((t=>{const[i,r]=He(t,n);e(void 0===r?`/add/${i}`:`/add/${i}/${r}`)}),[He,n,e]),Ke=(0,k.useCallback)((n=>{const[i,r]=He(n,t);e(void 0===r?`/add/${i}`:`/add/${r}/${i}`)}),[He,t,e]),Je=(0,k.useCallback)((i=>{Re(""),_e(""),e(`/add/${t}/${n}/${i}`)}),[t,n,e,Re,_e]),Xe=(0,k.useCallback)((()=>{Te(!1),Be&&(we(""),e("/pools")),Ue("")}),[e,we,Be]),Qe=(0,Nt.G)(pe?.CURRENCY_A,pe?.CURRENCY_B),et=(0,k.useCallback)((()=>{we(""),Ne(""),Re(""),_e(""),e("/add")}),[e,we,Ne,Re,_e]),{[te.Mb.LOWER]:tt,[te.Mb.UPPER]:nt}=ie,{[te.Mb.LOWER]:ot,[te.Mb.UPPER]:st}=se,{getDecrementLower:at,getIncrementLower:ct,getDecrementUpper:pt,getIncrementUpper:mt,getSetFullRange:St}=(0,T.a6)(V??void 0,J??void 0,H,tt,nt,ne),$t=!Pe&&ze!==vt.U.APPROVED&&!!ce[te.gN.CURRENCY_A],Yt=!Pe&&Fe!==vt.U.APPROVED&&!!ce[te.gN.CURRENCY_B],Ft=`Supplying ${fe?"":ce[te.gN.CURRENCY_A]?.toSignificant(6)} ${fe?"":pe[te.gN.CURRENCY_A]?.symbol} ${ge?"":"and"} ${ye?"":ce[te.gN.CURRENCY_B]?.toSignificant(6)} ${ye?"":pe[te.gN.CURRENCY_B]?.symbol}`,[Wt,qt]=(0,E.lr)(),Zt=(0,k.useCallback)((()=>{St();const e=ae[te.Mb.LOWER];e&&Wt.set("minPrice",e.toSignificant(5));const t=ae[te.Mb.UPPER];t&&Wt.set("maxPrice",t.toSignificant(5)),qt(Wt)}),[St,ae,Wt]),Gt=(0,w.Z)(Wt);(0,k.useEffect)((()=>{const e=Wt.get("minPrice"),t=Gt?.get("minPrice");!e||"string"!==typeof e||isNaN(e)||t&&t===e||Re(e)}),[Wt]),(0,k.useEffect)((()=>{const e=Wt.get("maxPrice"),t=Gt?.get("maxPrice");!e||"string"!==typeof e||isNaN(e)||t&&t===e||_e(e)}),[Wt]);const Ht=()=>Qe?(0,i.jsx)(B.DF,{disabled:!0,$borderRadius:"12px",padding:"12px",children:(0,i.jsx)(g.Tv.DeprecatedMain,{mb:"4px",children:(0,i.jsx)(c.cC,{id:"Iac4Ia"})})}):j?(0,i.jsxs)(D.Tz,{gap:"md",children:[(ze===vt.U.NOT_APPROVED||ze===vt.U.PENDING||Fe===vt.U.NOT_APPROVED||Fe===vt.U.PENDING)&&Ee&&(0,i.jsxs)(dt.m0,{children:[$t&&(0,i.jsx)(B.DF,{onClick:Ye,disabled:ze===vt.U.PENDING,width:Yt?"48%":"100%",children:ze===vt.U.PENDING?(0,i.jsx)(Dt.bb,{children:(0,i.jsx)(c.cC,{id:"MfyhMG",values:{0:pe[te.gN.CURRENCY_A]?.symbol}})}):(0,i.jsx)(c.cC,{id:"fgGids",values:{0:pe[te.gN.CURRENCY_A]?.symbol}})}),Yt&&(0,i.jsx)(B.DF,{onClick:We,disabled:Fe===vt.U.PENDING,width:$t?"48%":"100%",children:Fe===vt.U.PENDING?(0,i.jsx)(Dt.bb,{children:(0,i.jsx)(c.cC,{id:"MfyhMG",values:{0:pe[te.gN.CURRENCY_B]?.symbol}})}):(0,i.jsx)(c.cC,{id:"fgGids",values:{0:pe[te.gN.CURRENCY_B]?.symbol}})})]}),(0,i.jsx)(B.Kd,{onClick:()=>{Te(!0)},disabled:!Ee||!Pe&&ze!==vt.U.APPROVED&&!fe||!Pe&&Fe!==vt.U.APPROVED&&!ye,error:!Ee&&!!ce[te.gN.CURRENCY_A]&&!!ce[te.gN.CURRENCY_B],children:(0,i.jsx)(I.xv,{fontWeight:535,children:he||(0,i.jsx)(c.cC,{id:"rdUucN"})})})]}):(0,i.jsx)(p.M8,{events:[l.TM.onClick],name:l.Je.CONNECT_WALLET_BUTTON_CLICKED,properties:{received_swap_quote:!1},element:l.xo.CONNECT_WALLET_BUTTON,children:(0,i.jsx)(B.Sy,{onClick:z,$borderRadius:"12px",padding:"12px",children:(0,i.jsx)(c.cC,{id:"VHOVEJ"})})}),Vt=$e[te.gN.CURRENCY_A],Kt=$e[te.gN.CURRENCY_B],Jt=(0,k.useMemo)((()=>({data:Vt?parseFloat(Vt.toSignificant()):void 0,isLoading:!1})),[Vt]),Xt=(0,k.useMemo)((()=>({data:Kt?parseFloat(Kt.toSignificant()):void 0,isLoading:!1})),[Kt]),Qt=(0,N.Wk)(y?F:null,"ownerOf",[y]).result?.[0],en=(0,S.K)(Qt,j)||(0,S.K)(W?.operator,j),tn=Boolean(Z&&j&&!en);return console.log(ue,"<====noLiquidity"),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(Mt.zH,{children:[(0,i.jsx)(yt.Z,{isOpen:Ie,onDismiss:Xe,attemptingTxn:Se,hash:Be,reviewContent:()=>(0,i.jsx)(yt.p,{title:(0,i.jsx)(c.cC,{id:"OBdohg"}),onDismiss:Xe,topContent:()=>(0,i.jsx)(Lt,{parsedAmounts:ce,position:de,existingPosition:G,priceLower:ot,priceUpper:st,outOfRange:ge,ticksAtLimit:ve}),bottomContent:()=>(0,i.jsx)(B.DF,{style:{marginTop:"1rem"},onClick:Ze,children:(0,i.jsx)(I.xv,{fontWeight:535,fontSize:20,children:(0,i.jsx)(c.cC,{id:"m16xKo"})})})}),pendingText:Ft}),(0,i.jsxs)(zt,{$hasExistingPosition:Z,children:[(0,i.jsx)(rt.w,{creating:!1,adding:!0,positionID:y,autoSlippage:Pt,showBackLink:!Z,children:!Z&&(0,i.jsx)(dt.ZP,{justify:"flex-end",style:{width:"fit-content",minWidth:"fit-content"},children:(0,i.jsx)(Mt.SF,{children:(0,i.jsx)(B.oD,{onClick:et,children:(0,i.jsx)(g.Tv.DeprecatedBlue,{fontSize:"12px",children:(0,i.jsx)(c.cC,{id:"yYxB17"})})})})})}),(0,i.jsx)(Mt.im,{children:(0,i.jsxs)(Mt.Sx,{wide:!Z,children:[(0,i.jsxs)(D.Tz,{gap:"lg",children:[!Z&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(D.Tz,{gap:"md",children:[(0,i.jsx)(dt.m0,{paddingBottom:"20px",children:(0,i.jsx)(g.Tv.DeprecatedLabel,{children:(0,i.jsx)(c.cC,{id:"nxRg31"})})}),(0,i.jsxs)(dt.m0,{gap:"md",children:[(0,i.jsx)($.Z,{value:De[te.gN.CURRENCY_A],onUserInput:we,hideInput:!0,onMax:()=>{we(Le[te.gN.CURRENCY_A]?.toExact()??"")},onCurrencySelect:Ve,showMaxButton:!Me[te.gN.CURRENCY_A],currency:pe[te.gN.CURRENCY_A]??null,id:"add-liquidity-input-tokena",showCommonBases:!0}),(0,i.jsx)($.Z,{value:De[te.gN.CURRENCY_B],hideInput:!0,onUserInput:Ne,onCurrencySelect:Ke,onMax:()=>{Ne(Le[te.gN.CURRENCY_B]?.toExact()??"")},showMaxButton:!Me[te.gN.CURRENCY_B],currency:pe[te.gN.CURRENCY_B]??null,id:"add-liquidity-input-tokenb",showCommonBases:!0})]}),(0,i.jsx)(L.Z,{disabled:!J||!V,feeAmount:H,handleFeePoolSelect:Je,currencyA:V??void 0,currencyB:J??void 0})]})," "]}),Z&&G&&(0,i.jsx)(ht,{position:G,title:(0,i.jsx)(c.cC,{id:"dWPDm3"}),inRange:!ge,ticksAtLimit:ve})]}),!Z&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(Mt.DD,{gap:"md",disabled:!H||xe,children:[(0,i.jsxs)(dt.m0,{children:[(0,i.jsx)(g.Tv.DeprecatedLabel,{children:(0,i.jsx)(c.cC,{id:"5CZbyC"})}),Boolean(V&&J)&&(0,i.jsxs)(dt.DA,{gap:"8px",children:[(0,i.jsx)(gt,{onSetFullRange:Zt}),(0,i.jsx)(lt.Z,{currencyA:V,currencyB:J,handleRateToggle:()=>{ve[te.Mb.LOWER]||ve[te.Mb.UPPER]||(Re((je?ot:st?.invert())?.toSignificant(6)??""),_e((je?st:ot?.invert())?.toSignificant(6)??""),we(De[te.gN.CURRENCY_B]??"")),e(`/add/${n}/${t}${H?"/"+H:""}`)}})]})]}),(0,i.jsx)(xt.Z,{priceLower:ot,priceUpper:st,getDecrementLower:at,getIncrementLower:ct,getDecrementUpper:pt,getIncrementUpper:mt,onLeftRangeInput:Re,onRightRangeInput:_e,currencyA:V,currencyB:J,feeAmount:H,ticksAtLimit:ve}),ge&&(0,i.jsx)(U.U2,{padding:"8px 12px",$borderRadius:"12px",children:(0,i.jsxs)(dt.m0,{children:[(0,i.jsx)(x.Z,{stroke:_.deprecated_yellow3,size:"16px"}),(0,i.jsx)(g.Tv.DeprecatedYellow,{ml:"12px",fontSize:"12px",children:(0,i.jsx)(c.cC,{id:"b+KjnH"})})]})}),me&&(0,i.jsx)(U.U2,{padding:"8px 12px",$borderRadius:"12px",children:(0,i.jsxs)(dt.m0,{children:[(0,i.jsx)(x.Z,{stroke:_.deprecated_yellow3,size:"16px"}),(0,i.jsx)(g.Tv.DeprecatedYellow,{ml:"12px",fontSize:"12px",children:(0,i.jsx)(c.cC,{id:"Jh223O"})})]})})]}),(0,i.jsx)(Mt.DD,{gap:"md",disabled:!H||xe,children:ue?(0,i.jsxs)(D.Tz,{gap:"md",children:[ue&&(0,i.jsx)(U.Pj,{style:{display:"flex",flexDirection:"row",alignItems:"center",padding:"1rem 1rem"},children:(0,i.jsx)(g.Tv.DeprecatedBody,{fontSize:14,style:{fontWeight:535},textAlign:"left",color:_.accent1,children:(0,i.jsx)(c.cC,{id:"X6T02b"})})}),(0,i.jsx)(U.nq,{padding:"12px",children:(0,i.jsx)(Mt.Fy,{className:"start-price-input",value:ee,onUserInput:ke})}),(0,i.jsxs)(dt.m0,{style:{backgroundColor:_.surface1,padding:"12px",borderRadius:"12px"},children:[(0,i.jsx)(g.Tv.DeprecatedMain,{children:(0,i.jsx)(c.cC,{id:"Ay/EYV",values:{0:V?.symbol}})}),(0,i.jsx)(g.Tv.DeprecatedMain,{children:oe?(0,i.jsx)(g.Tv.DeprecatedMain,{children:(0,i.jsxs)(dt.DA,{children:[(0,i.jsx)(M.Z,{maxCharacters:20,text:je?oe?.invert()?.toSignificant(8):oe?.toSignificant(8)})," ",(0,i.jsxs)("span",{style:{marginLeft:"4px"},children:[J?.symbol," per ",V?.symbol]})]})}):"-"})]})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{children:"sdfsfsdfdf"}),Boolean(oe&&V&&J&&!ue)&&(0,i.jsx)(D.Tz,{gap:"2px",style:{marginTop:"0.5rem"},children:(0,i.jsx)(c.cC,{id:"7k623k",values:{0:oe&&(0,i.jsx)(M.Z,{maxCharacters:20,text:Ce}),1:V&&(0,i.jsxs)(g.Tv.DeprecatedBody,{color:"text2",fontSize:12,children:[J?.symbol," per ",V.symbol]})},components:{0:(0,i.jsx)(g.Tv.DeprecatedMain,{fontWeight:535,fontSize:12,color:"text1"}),1:(0,i.jsx)(g.Tv.DeprecatedBody,{fontWeight:535,fontSize:20,color:"text1"})}})}),(0,i.jsx)(it,{currencyA:V??void 0,currencyB:J??void 0,feeAmount:H,ticksAtLimit:ve,price:oe?parseFloat((je?oe.invert():oe).toSignificant(8)):void 0,priceLower:ot,priceUpper:st,onLeftRangeInput:Re,onRightRangeInput:_e,interactive:!Z})]})})]}),(0,i.jsx)("div",{children:(0,i.jsx)(Mt.DD,{disabled:xe||me||ue&&!ee,children:(0,i.jsxs)(D.Tz,{gap:"md",children:[(0,i.jsx)(g.Tv.DeprecatedLabel,{children:Z?(0,i.jsx)(c.cC,{id:"BRi+RY"}):(0,i.jsx)(c.cC,{id:"MU9s7M"})}),(0,i.jsx)($.Z,{value:De[te.gN.CURRENCY_A],onUserInput:we,onMax:()=>{we(Le[te.gN.CURRENCY_A]?.toExact()??"")},showMaxButton:!Me[te.gN.CURRENCY_A],currency:pe[te.gN.CURRENCY_A]??null,id:"add-liquidity-input-tokena",fiatValue:Jt,showCommonBases:!0,locked:fe}),(0,i.jsx)($.Z,{value:De[te.gN.CURRENCY_B],onUserInput:Ne,onMax:()=>{Ne(Le[te.gN.CURRENCY_B]?.toExact()??"")},showMaxButton:!Me[te.gN.CURRENCY_B],fiatValue:Xt,currency:pe[te.gN.CURRENCY_B]??null,id:"add-liquidity-input-tokenb",showCommonBases:!0,locked:ye})]})})}),(0,i.jsx)(Ht,{})]})})]}),tn&&(0,i.jsx)(v,{ownerAddress:Qt}),Qe&&(0,i.jsx)(b.Z,{show:Qe,currencies:[pe.CURRENCY_A,pe.CURRENCY_B]})]}),(0,i.jsx)(ft.c,{})]})}function Wt(){const{currencyIdA:e,currencyIdB:t}=(0,o.UO)(),{chainId:n}=(0,r.useWeb3React)(),a="smartbch"===e||void 0!==n&&e===s.Fl[n]?.address,c="smartbch"===t||void 0!==n&&t===s.Fl[n]?.address;return e&&t&&(e.toLowerCase()===t.toLowerCase()||a&&c)?(0,i.jsx)(o.Fg,{to:`/add/${e}`,replace:!0}):(0,i.jsx)(Yt,{})}},63486:(e,t,n)=>{function i(e,t){return!(!e||!t)&&(e===t||e.toLowerCase()===t.toLowerCase())}n.d(t,{K:()=>i})},82574:(e,t,n)=>{n.d(t,{B:()=>o});var i=n(52214),r=n(46778);function o(e){if(e.isNative)return e;const t=(0,i.oG)(e.chainId);return t&&r.Fl[t]?.equals(e)?(0,r.gX)(e.chainId):e}}}]);
//# sourceMappingURL=5465.aedc2d28.chunk.js.map