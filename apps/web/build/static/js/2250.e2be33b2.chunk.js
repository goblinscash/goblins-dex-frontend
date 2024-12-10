"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[2250,9982],{95267:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(39491),i=t(37954),o=t.n(i);function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=(0,r.forwardRef)((function(e,n){var t=e.color,i=void 0===t?"currentColor":t,o=e.size,l=void 0===o?24:o,c=s(e,["color","size"]);return r.createElement("svg",a({ref:n,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),r.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),r.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));l.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},l.displayName="Plus";const c=l},28243:(e,n,t)=>{t.d(n,{Z:()=>M});var r=t(21339),i=t(88693),o=t(56542),a=t(75422),s=t(4570),l=t(29826),c=t(82523),d=t(52214),u=t(25400),p=t(39491),m=t(33552),h=t(39681),f=t(10548),y=t(96193),g=t(19369),x=t(73685),b=t(61265),w=t(70357),v=t(94727),C=t(44680),_=t(29718),N=t(17358),I=t(930),j=t(51764);const $=m.default.div.withConfig({displayName:"CurrencyInputPanel__InputPanel",componentId:"sc-ef61363a-0"})`
  ${y.lt};
  position: relative;
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  background-color: ${({theme:e,hideInput:n})=>n?"transparent":e.surface2};

  z-index: 1;
  width: ${({hideInput:e})=>e?"100%":"initial"};
  transition: height 1s ease;
  will-change: height;
`,k=m.default.div.withConfig({displayName:"CurrencyInputPanel__Container",componentId:"sc-ef61363a-1"})`
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  border: 1px solid ${({theme:e})=>e.surface3};
  background-color: ${({theme:e})=>e.surface2};
  width: ${({hideInput:e})=>e?"100%":"initial"};
  ${({theme:e,hideInput:n,disabled:t})=>!t&&`\n    :focus,\n    :hover {\n      border: 1px solid ${n?" transparent":e.surface2};\n    }\n  `}
`,T=(0,m.default)(w.Ux).withConfig({displayName:"CurrencyInputPanel__CurrencySelect",componentId:"sc-ef61363a-2"})`
  align-items: center;
  background-color: ${({selected:e,theme:n})=>e?n.surface1:n.accent1};
  opacity: ${({disabled:e})=>e?.4:1};
  box-shadow: ${({theme:e})=>e.deprecated_shallowShadow};
  color: ${({selected:e,theme:n})=>e?n.neutral1:n.surface2};
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
    background-color: ${({selected:e,theme:n})=>e?n.surface2:(0,u._j)(.05,n.accent1)};
  }
  visibility: ${({visible:e})=>e?"visible":"hidden"};
  ${({pointerEvents:e})=>e&&"pointer-events: none"}
`,P=m.default.div.withConfig({displayName:"CurrencyInputPanel__InputRow",componentId:"sc-ef61363a-3"})`
  ${y.MG};
  align-items: center;
  justify-content: space-between;
  padding: ${({selected:e})=>e?" 1rem 1rem 0.75rem 1rem":"1rem 1rem 1rem 1rem"};
`,O=m.default.div.withConfig({displayName:"CurrencyInputPanel__LabelRow",componentId:"sc-ef61363a-4"})`
  ${y.MG};
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0 1rem 1rem;
  span:hover {
    cursor: pointer;
    color: ${({theme:e})=>(0,u._j)(.2,e.neutral2)};
  }
`,A=(0,m.default)(O).withConfig({displayName:"CurrencyInputPanel__FiatRow",componentId:"sc-ef61363a-5"})`
  justify-content: flex-end;
  padding: 0px 1rem 0.75rem;
  height: 32px;
`,E=m.default.span.withConfig({displayName:"CurrencyInputPanel__Aligner",componentId:"sc-ef61363a-6"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  line-height: 0px;
`,S=(0,m.default)(x.r).withConfig({displayName:"CurrencyInputPanel__StyledDropDown",componentId:"sc-ef61363a-7"})`
  margin: 0 0.25rem 0 0.35rem;
  height: 35%;

  path {
    stroke: ${({selected:e,theme:n})=>e?n.neutral1:n.white};
    stroke-width: 1.5px;
  }
`,R=m.default.span.withConfig({displayName:"CurrencyInputPanel__StyledTokenName",componentId:"sc-ef61363a-8"})`
  ${({active:e})=>"  margin: 0 0.25rem 0 0.25rem;"}
  font-size: 20px;
  white-space: nowrap;

  @media screen and (max-width: ${h.j$.sm}px) {
    font-size: 16px;
  }
`,D=m.default.button.withConfig({displayName:"CurrencyInputPanel__StyledBalanceMax",componentId:"sc-ef61363a-9"})`
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
`,B=(0,m.default)(_.I).withConfig({displayName:"CurrencyInputPanel__StyledNumericalInput",componentId:"sc-ef61363a-10"})`
  ${l._Q};
  text-align: left;
`,W=(0,m.default)(c.Z).withConfig({displayName:"CurrencyInputPanel__StyledPrefetchBalancesWrapper",componentId:"sc-ef61363a-11"})`
  width: ${({$fullWidth:e})=>e?"100%":"auto"};
`;function M({value:e,onUserInput:n,onMax:t,showMaxButton:c,onCurrencySelect:u,currency:h,otherCurrency:y,id:x,showCommonBases:w,showCurrencyAmount:_,disableNonToken:O,renderBalance:M,fiatValue:U,hideBalance:z=!1,pair:V=null,hideInput:G=!1,locked:L=!1,loading:Z=!1,...q}){const[F,K]=(0,p.useState)(!1),{account:H,chainId:X}=(0,a.useWeb3React)(),J=(0,b._h)(H??void 0,h??void 0),Q=(0,m.useTheme)(),{formatCurrencyAmount:Y}=(0,g.Gb)(),ee=(0,p.useCallback)((()=>{K(!1)}),[K]),ne=(0,d.EC)(X);return(0,r.jsxs)($,{id:x,hideInput:G,...q,children:[!L&&(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(k,{hideInput:G,disabled:!ne,children:[(0,r.jsxs)(P,{style:G?{padding:"0",borderRadius:"8px"}:{},selected:!u,children:[!G&&(0,r.jsx)(B,{className:"token-amount-input",value:e,onUserInput:n,disabled:!ne,$loading:Z}),(0,r.jsx)(W,{shouldFetchOnAccountUpdate:F,$fullWidth:G,children:(0,r.jsx)(T,{disabled:!ne,visible:void 0!==h,selected:!!h,hideInput:G,className:"open-currency-select-button",onClick:()=>{u&&K(!0)},pointerEvents:u?void 0:"none",children:(0,r.jsxs)(E,{children:[(0,r.jsxs)(N.DA,{children:[V?(0,r.jsx)("span",{style:{marginRight:"0.5rem"},children:(0,r.jsx)(v.Z,{currency0:V.token0,currency1:V.token1,size:24,margin:!0})}):h&&(0,r.jsx)(C.Z,{style:{marginRight:"0.5rem"},currency:h,size:"24px"}),V?(0,r.jsxs)(R,{className:"pair-name-container",children:[V?.token0.symbol,":",V?.token1.symbol]}):(0,r.jsx)(R,{className:"token-symbol-container",active:Boolean(h&&h.symbol),children:(h&&h.symbol&&h.symbol.length>20?h.symbol.slice(0,4)+"..."+h.symbol.slice(h.symbol.length-5,h.symbol.length):h?.symbol)||(0,r.jsx)(i.cC,{id:"T0Y2+3"})})]}),u&&(0,r.jsx)(S,{selected:!!h})]})})})]}),Boolean(!G&&!z&&h)&&(0,r.jsx)(A,{children:(0,r.jsxs)(N.m0,{children:[(0,r.jsx)(l.EG,{$loading:Z,children:U&&(0,r.jsx)(j.x,{fiatValue:U})}),H&&(0,r.jsxs)(N.DA,{style:{height:"17px"},children:[(0,r.jsx)(f.Tv.DeprecatedBody,{onClick:t,color:Q.neutral3,fontWeight:535,fontSize:14,style:{display:"inline",cursor:"pointer"},children:Boolean(!z&&h&&J)&&(M?.(J)||(0,r.jsx)(i.cC,{id:"VuFd5C",values:{0:Y({amount:J,type:g.sw.TokenNonTx})}}))}),Boolean(c&&J)&&(0,r.jsx)(s.M8,{events:[o.TM.onClick],name:o.Q0.SWAP_MAX_TOKEN_AMOUNT_SELECTED,element:o.xo.MAX_TOKEN_AMOUNT_BUTTON,children:(0,r.jsx)(D,{onClick:t,children:(0,r.jsx)(i.cC,{id:"4HtGBb"})})})]})]})})]})}),u&&(0,r.jsx)(I.Z,{isOpen:F,onDismiss:ee,onCurrencySelect:u,selectedCurrency:h,otherSelectedCurrency:y,showCommonBases:w,showCurrencyAmount:_,disableNonToken:O})]})}},98976:(e,n,t)=>{t.d(n,{q:()=>C,w:()=>N});var r=t(21339),i=t(88693),o=t(75422),a=t(7206),s=t(18910),l=t(99123),c=t(92686),d=t(9726),u=t(21914),p=t(52148),m=t(47021),h=t(33552),f=t(10548),y=t(96193),g=t(17358);const x=h.default.div.withConfig({displayName:"NavigationTabs__Tabs",componentId:"sc-e9587879-0"})`
  ${y.MG};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,b=(0,h.default)(l.rU).withConfig({displayName:"NavigationTabs__StyledLink",componentId:"sc-e9587879-1"})`
  flex: ${({flex:e})=>e??"none"};
  display: flex;
  align-items: center;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `};
`,w=(0,h.default)(f.Tv.H1Small).withConfig({displayName:"NavigationTabs__FindPoolTabsText",componentId:"sc-e9587879-2"})`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,v=(0,h.default)(s.Z).withConfig({displayName:"NavigationTabs__StyledArrowLeft",componentId:"sc-e9587879-3"})`
  color: ${({theme:e})=>e.neutral1};
`;function C({origin:e}){return(0,r.jsx)(x,{children:(0,r.jsxs)(g.m0,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,r.jsx)(l.rU,{to:e,children:(0,r.jsx)(v,{})}),(0,r.jsx)(w,{children:(0,r.jsx)(i.cC,{id:"LCFvJr"})})]})})}const _=(0,h.default)(f.Tv.H1Small).withConfig({displayName:"NavigationTabs__AddRemoveTitleText",componentId:"sc-e9587879-4"})`
  flex: 1;
  margin: auto;
  text-align: ${({$center:e})=>e?"center":"start"};
`;function N({adding:e,creating:n,autoSlippage:t,positionID:s,children:l}){const{chainId:f}=(0,o.useWeb3React)(),y=(0,h.useTheme)(),w=(0,u.T)(),C=(0,c.TH)().pathname.includes("add/v2")?"/pools/v2":"/pools"+(s?`/${s.toString()}`:"");return(0,r.jsx)(x,{children:(0,r.jsxs)(g.m0,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,r.jsx)(b,{to:C,onClick:()=>{e&&(w((0,p.dA)()),w((0,m.dA)()))},flex:l?"1":void 0,children:(0,r.jsx)(v,{stroke:y.neutral2})}),(0,r.jsx)(_,{$center:!l,children:n?(0,r.jsx)(i.cC,{id:"ma87bD"}):e?(0,r.jsx)(i.cC,{id:"E6MqGy"}):(0,r.jsx)(i.cC,{id:"cJtosk"})}),l&&(0,r.jsx)(d.xu,{style:{marginRight:".5rem"},children:l}),(0,r.jsx)(a.Z,{autoSlippage:t,chainId:f,hideRoutingSettings:!0})]})})}},81672:(e,n,t)=>{t.d(n,{U:()=>r,q:()=>g});var r,i=t(5142),o=t(56542),a=t(75422),s=t(4570),l=t(22855),c=t(41177),d=t(18149),u=t(39491),p=t(9988);function m(e,n,t){const{chainId:m}=(0,a.useWeb3React)(),h=e?.currency?.isToken?e.currency:void 0,f=function(e,n,t){const{account:i}=(0,a.useWeb3React)(),o=e?.currency?.isToken?e.currency:void 0,{tokenAllowance:s}=(0,c.Fx)(o,i??void 0,n),l=t(o,n);return(0,u.useMemo)((()=>e&&n?e.currency.isNative?r.APPROVED:s?s.lessThan(e)?l?r.PENDING:r.NOT_APPROVED:r.APPROVED:r.UNKNOWN:r.UNKNOWN),[e,l,n,s])}(e,n,t),y=(0,l.Ib)(h?.address),g=(0,u.useCallback)((async()=>{function t(e){console.warn(`${h?.symbol||"Token"} approval failed:`,e)}if(f!==r.NOT_APPROVED)return t("approve was called unnecessarily");if(!m)return t("no chainId");if(!h)return t("no token");if(!y)return t("tokenContract is null");if(!e)return t("missing amount to approve");if(!n)return t("no spender");let a=!1;const l=await y.estimateGas.approve(n,i.Bz).catch((()=>(a=!0,y.estimateGas.approve(n,e.quotient.toString()))));return y.approve(n,a?e.quotient.toString():i.Bz,{gasLimit:(0,p.y)(l)}).then((t=>{const r={chain_id:m,token_symbol:h?.symbol,token_address:(0,d.DT)(h)};return(0,s._P)(o.Je.APPROVE_TOKEN_TXN_SUBMITTED,r),{response:t,tokenAddress:h.address,spenderAddress:n,amount:e}})).catch((e=>{throw t(e),e}))}),[f,h,y,e,n,m]);return[f,g]}!function(e){e.UNKNOWN="UNKNOWN",e.NOT_APPROVED="NOT_APPROVED",e.PENDING="PENDING",e.APPROVED="APPROVED"}(r||(r={}));var h=t(15574),f=t(53055);function y(e){const n=(0,h.h7)();return(0,u.useCallback)((()=>e().then((e=>{if(e){const{response:t,tokenAddress:r,spenderAddress:i,amount:o}=e;n(t,{type:f.i.APPROVAL,tokenAddress:r,spender:i,amount:o.quotient.toString()})}}))),[n,e])}function g(e,n){const[t,r]=m(e,n,h.wB);return[t,y(r)]}},89982:(e,n,t)=>{t.d(n,{Z:()=>s,e:()=>a});var r=t(21339),i=t(33552),o=t(48664);const a=i.default.main.withConfig({displayName:"AppBody__BodyWrapper",componentId:"sc-e9d30a3e-0"})`
  position: relative;
  margin-top: ${({$margin:e})=>e??"0px"};
  max-width: ${({$maxWidth:e})=>e??"420px"};
  width: 100%;
  background: ${({theme:e})=>e.surface1};
  border-radius: 16px;
  border: 1px solid ${({theme:e})=>e.surface3};
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  z-index: ${o.k.default};
`;function s(e){return(0,r.jsx)(a,{...e})}},54286:(e,n,t)=>{t.d(n,{u:()=>i});const r=new(t(82032).Fraction)(1,1);function i(e,n){if(n.lessThan(0)||n.greaterThan(r))throw new Error("Unexpected slippage");return[e.multiply(r.subtract(n)).quotient,e.multiply(r.add(n)).quotient]}}}]);
//# sourceMappingURL=2250.e2be33b2.chunk.js.map