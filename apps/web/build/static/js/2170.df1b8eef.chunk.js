"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[2170,9982],{95267:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(39491),i=n(37954),r=n.n(i);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=(0,o.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,r=e.size,c=void 0===r?24:r,d=s(e,["color","size"]);return o.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),o.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),o.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));c.propTypes={color:r().string,size:r().oneOfType([r().string,r().number])},c.displayName="Plus";const d=c},77725:(e,t,n)=>{n.d(t,{Z:()=>D});var o=n(21339),i=n(88693),r=n(56542),a=n(39303),s=n(75422),c=n(4570),d=n(70357),u=n(32345),l=n(65023),p=n(17358),m=n(11020),f=n(19530),g=n.n(f),C=n(39491),b=n(40841),h=n(32605),I=n(70762);const R=h.ZP`
  query FeeTierDistribution($token0: String!, $token1: String!) {
    _meta {
      block {
        number
      }
    }
    asToken0: pools(
      orderBy: totalValueLockedToken0
      orderDirection: desc
      where: { token0: $token0, token1: $token1 }
    ) {
      feeTier
      totalValueLockedToken0
      totalValueLockedToken1
    }
    asToken1: pools(
      orderBy: totalValueLockedToken0
      orderDirection: desc
      where: { token0: $token1, token1: $token0 }
    ) {
      feeTier
      totalValueLockedToken0
      totalValueLockedToken1
    }
  }
`;var T=n(77910);const A=20;function N(e,t){const{isLoading:n,error:o,distributions:i}=function(e,t){const n=(0,m.ZP)(),{isLoading:o,error:i,data:r}=function(e,t,n){const{data:o,loading:i,error:r}=(0,b.a)(R,{variables:{token0:e?.toLowerCase(),token1:t?.toLowerCase()},pollInterval:n,client:I.l8});return(0,C.useMemo)((()=>({error:r,isLoading:i,data:o})),[o,r,i])}(e?.address,t?.address,g()("30s")),{asToken0:s,asToken1:c,_meta:d}=r??{};return(0,C.useMemo)((()=>{if(!n||!d||!s||!c)return{isLoading:o,error:i};if(n-(d?.block?.number??0)>A)return console.log(`Graph stale (latest block: ${n})`),{isLoading:o,error:i};const e=s.concat(c).reduce(((e,t)=>(e[t.feeTier][0]=(e[t.feeTier][0]??0)+Number(t.totalValueLockedToken0),e[t.feeTier][1]=(e[t.feeTier][1]??0)+Number(t.totalValueLockedToken1),e)),{[a.FeeAmount.LOWEST]:[void 0,void 0],[a.FeeAmount.LOW]:[void 0,void 0],[a.FeeAmount.MEDIUM]:[void 0,void 0],[a.FeeAmount.HIGH]:[void 0,void 0]}),[t,r]=Object.values(e).reduce(((e,t)=>(e[0]+=t[0]??0,e[1]+=t[1]??0,e)),[0,0]),u=(e,t,n,o)=>void 0===e&&void 0===n?void 0:((e??0)+(n??0))/(t+o)||0,l={[a.FeeAmount.LOWEST]:u(e[a.FeeAmount.LOWEST][0],t,e[a.FeeAmount.LOWEST][1],r),[a.FeeAmount.LOW]:u(e[a.FeeAmount.LOW][0],t,e[a.FeeAmount.LOW][1],r),[a.FeeAmount.MEDIUM]:u(e[a.FeeAmount.MEDIUM][0],t,e[a.FeeAmount.MEDIUM][1],r),[a.FeeAmount.HIGH]:u(e[a.FeeAmount.HIGH][0],t,e[a.FeeAmount.HIGH][1],r)};return{isLoading:o,error:i,distributions:l}}),[d,s,c,o,i,n])}(e?.wrapped,t?.wrapped),[r]=(0,T.AI)(e,t,a.FeeAmount.LOWEST),[s]=(0,T.AI)(e,t,a.FeeAmount.LOW),[c]=(0,T.AI)(e,t,a.FeeAmount.MEDIUM),[d]=(0,T.AI)(e,t,a.FeeAmount.HIGH);return(0,C.useMemo)((()=>{if(n||o||!i)return{isLoading:n,isError:!!o,distributions:i};const e=Object.keys(i).map((e=>Number(e))).filter((e=>0!==i[e]&&void 0!==i[e])).reduce(((e,t)=>(i[e]??0)>(i[t]??0)?e:t),-1),t=n||o||!i||r===T.tK.LOADING||s===T.tK.LOADING||c===T.tK.LOADING||d===T.tK.LOADING?void 0:{[a.FeeAmount.LOWEST]:r===T.tK.EXISTS?100*(i[a.FeeAmount.LOWEST]??0):void 0,[a.FeeAmount.LOW]:s===T.tK.EXISTS?100*(i[a.FeeAmount.LOW]??0):void 0,[a.FeeAmount.MEDIUM]:c===T.tK.EXISTS?100*(i[a.FeeAmount.MEDIUM]??0):void 0,[a.FeeAmount.HIGH]:d===T.tK.EXISTS?100*(i[a.FeeAmount.HIGH]??0):void 0};return{isLoading:n,isError:!!o,distributions:t,largestUsageFeeTier:-1===e?void 0:e}}),[n,o,i,r,s,c,d])}var E=n(47474),x=n(51358),k=n(9726),y=n(33552),v=n(10548),_=n(19369),S=n(61816);function O({feeAmount:e,distributions:t,poolState:n}){return(0,o.jsx)(S.Z,{children:(0,o.jsx)(v.Tv.DeprecatedLabel,{fontSize:10,children:t&&n!==T.tK.NOT_EXISTS&&n!==T.tK.INVALID?void 0!==t[e]?(0,o.jsx)(i.cC,{id:"P1NNMy",values:{0:t[e]?.toFixed(0)}}):(0,o.jsx)(i.cC,{id:"plhHQt"}):(0,o.jsx)(i.cC,{id:"cKHbrZ"})})})}var P=n(82032);const U={[a.FeeAmount.LOWEST]:{label:"0.01",description:(0,o.jsx)(i.cC,{id:"6AHHoU"}),supportedChains:[P.ChainId.ARBITRUM_ONE,P.ChainId.BNB,P.ChainId.CELO,P.ChainId.CELO_ALFAJORES,P.ChainId.MAINNET,P.ChainId.OPTIMISM,P.ChainId.POLYGON,P.ChainId.POLYGON_MUMBAI,P.ChainId.AVALANCHE,P.ChainId.BASE]},[a.FeeAmount.LOW]:{label:"0.05",description:(0,o.jsx)(i.cC,{id:"ig/lul"}),supportedChains:P.SUPPORTED_CHAINS},[a.FeeAmount.MEDIUM]:{label:"0.3",description:(0,o.jsx)(i.cC,{id:"DlUgFZ"}),supportedChains:P.SUPPORTED_CHAINS},[a.FeeAmount.HIGH]:{label:"1",description:(0,o.jsx)(i.cC,{id:"fiGxJ/"}),supportedChains:P.SUPPORTED_CHAINS}},L=(0,y.default)(v.Tv.DeprecatedLabel).withConfig({displayName:"FeeOption__ResponsiveText",componentId:"sc-fea24ac3-0"})`
  line-height: 16px;
  font-size: 14px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    font-size: 12px;
    line-height: 12px;
  `};
`;function M({feeAmount:e,active:t,poolState:n,distributions:r,onClick:a}){const{formatDelta:s}=(0,_.Gb)();return(0,o.jsx)(d.ro,{active:t,onClick:a,children:(0,o.jsxs)(l.Tz,{gap:"sm",justify:"flex-start",children:[(0,o.jsxs)(l.Tz,{justify:"flex-start",gap:"6px",children:[(0,o.jsx)(L,{children:(0,o.jsx)(i.cC,{id:"J/hVSQ",values:{0:s(parseFloat(U[e].label))}})}),(0,o.jsx)(v.Tv.DeprecatedMain,{fontWeight:485,fontSize:"12px",textAlign:"left",children:U[e].description})]}),r&&(0,o.jsx)(O,{distributions:r,feeAmount:e,poolState:n})]})})}const w=(0,y.default)(u.ZP).withConfig({displayName:"FeeSelector__FocusedOutlineCard",componentId:"sc-eec9571-0"})`
  border: 1px solid ${({theme:e})=>e.surface3};
  animation: ${({pulsing:e,theme:t})=>{return e&&(n=t.accent1,y.keyframes`
  0% {
    box-shadow: 0 0 0 0 ${n};
  }

  70% {
    box-shadow: 0 0 0 2px ${n};
  }

  100% {
    box-shadow: 0 0 0 0 ${n};
  }
`);var n}} 0.6s linear;
  align-self: center;
`,j=y.default.div.withConfig({displayName:"FeeSelector__Select",componentId:"sc-eec9571-1"})`
  align-items: flex-start;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 8px;
`;function D({disabled:e=!1,feeAmount:t,handleFeePoolSelect:n,currencyA:u,currencyB:m}){const{chainId:f}=(0,s.useWeb3React)(),g=(0,c.oO)(),{formatDelta:b}=(0,_.Gb)(),{isLoading:h,isError:I,largestUsageFeeTier:R,distributions:A}=N(u,m),y=(0,T.Oh)([[u,m,a.FeeAmount.LOWEST],[u,m,a.FeeAmount.LOW],[u,m,a.FeeAmount.MEDIUM],[u,m,a.FeeAmount.HIGH]]),S=(0,C.useMemo)((()=>y.reduce(((e,[t,n])=>e={...e,[n?.fee]:t}),{[a.FeeAmount.LOWEST]:T.tK.NOT_EXISTS,[a.FeeAmount.LOW]:T.tK.NOT_EXISTS,[a.FeeAmount.MEDIUM]:T.tK.NOT_EXISTS,[a.FeeAmount.HIGH]:T.tK.NOT_EXISTS})),[y]),[P,L]=(0,C.useState)(!1),[D,F]=(0,C.useState)(!1),W=(0,E.Z)(t),B=(0,C.useRef)(!1),$=(0,C.useCallback)((e=>{(0,c._P)(r.vp.SELECT_LIQUIDITY_POOL_FEE_TIER,{action:r.jI.MANUAL,...g}),n(e)}),[n,g]);return(0,C.useEffect)((()=>{t||h||I||(R?(L(!1),B.current=!0,(0,c._P)(r.vp.SELECT_LIQUIDITY_POOL_FEE_TIER,{action:r.jI.RECOMMENDED,...g}),n(R)):L(!0))}),[t,h,I,R,n,g]),(0,C.useEffect)((()=>{L(I)}),[I]),(0,C.useEffect)((()=>{t&&W!==t&&F(!0)}),[W,t]),(0,o.jsx)(l.Tz,{gap:"16px",children:(0,o.jsxs)(x.DD,{gap:"md",disabled:e,children:[(0,o.jsx)(w,{pulsing:D,onAnimationEnd:()=>F(!1),children:(0,o.jsxs)(p.m0,{children:[(0,o.jsx)(l.Tz,{id:"add-liquidity-selected-fee",children:t?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(v.Tv.DeprecatedLabel,{className:"selected-fee-label",children:(0,o.jsx)(i.cC,{id:"GczB8z",values:{0:b(parseFloat(U[t].label))}})}),(0,o.jsx)(k.xu,{style:{width:"fit-content",marginTop:"8px"},className:"selected-fee-percentage",children:A&&(0,o.jsx)(O,{distributions:A,feeAmount:t,poolState:S[t]})})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(v.Tv.DeprecatedLabel,{children:(0,o.jsx)(i.cC,{id:"EU3wU4"})}),(0,o.jsx)(v.Tv.DeprecatedMain,{fontWeight:485,fontSize:"12px",textAlign:"left",children:(0,o.jsx)(i.cC,{id:"8ZKEXr"})})]})}),(0,o.jsx)(d.Ux,{onClick:()=>L(!P),width:"auto",padding:"4px",$borderRadius:"6px",children:P?(0,o.jsx)(i.cC,{id:"vLyv1R"}):(0,o.jsx)(i.cC,{id:"ePK91l"})})]})}),f&&P&&(0,o.jsx)(j,{children:[a.FeeAmount.LOWEST,a.FeeAmount.LOW,a.FeeAmount.MEDIUM,a.FeeAmount.HIGH].map(((e,n)=>{const{supportedChains:i}=U[e];return i.includes(f)?(0,o.jsx)(M,{feeAmount:e,active:t===e,onClick:()=>$(e),distributions:A,poolState:S[e]},n):null}))})]})})}},17295:(e,t,n)=>{n.d(t,{Z:()=>_});var o=n(21339),i=n(88693),r=n(70357),a=n(32345),s=n(65023),c=n(39491),d=n(95267),u=n(37954),l=n.n(u);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},p.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var f=(0,c.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,i=e.size,r=void 0===i?24:i,a=m(e,["color","size"]);return c.createElement("svg",p({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),c.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));f.propTypes={color:l().string,size:l().oneOfType([l().string,l().number])},f.displayName="Minus";const g=f;var C=n(33552),b=n(10548),h=n(29718);const I=C.default.div.withConfig({displayName:"InputStepCounter__InputRow",componentId:"sc-45cb4a1c-0"})`
  display: flex;
`,R=(0,C.default)(r.Ux).withConfig({displayName:"InputStepCounter__SmallButton",componentId:"sc-45cb4a1c-1"})`
  border-radius: 8px;
  padding: 4px;
`,T=(0,C.default)(a.nq).withConfig({displayName:"InputStepCounter__FocusedOutlineCard",componentId:"sc-45cb4a1c-2"})`
  border-color: ${({active:e,theme:t})=>e&&t.deprecated_stateOverlayPressed};
  padding: 12px;
  animation: ${({pulsing:e,theme:t})=>{return e&&(n=t.accent1,C.keyframes`
  0% {
    box-shadow: 0 0 0 0 ${n};
  }

  70% {
    box-shadow: 0 0 0 2px ${n};
  }

  100% {
    box-shadow: 0 0 0 0 ${n};
  }
`);var n}} 0.8s linear;
`,A=(0,C.default)(h.I).withConfig({displayName:"InputStepCounter__StyledInput",componentId:"sc-45cb4a1c-3"})`
  background-color: transparent;
  font-weight: 535;
  text-align: left;
  width: 100%;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    font-size: 16px;
  `};
`,N=(0,C.default)(s.Tz).withConfig({displayName:"InputStepCounter__InputColumn",componentId:"sc-45cb4a1c-4"})`
  width: 100%;
`,E=(0,C.default)(b.Tv.DeprecatedSmall).withConfig({displayName:"InputStepCounter__InputTitle",componentId:"sc-45cb4a1c-5"})`
  color: ${({theme:e})=>e.neutral2};
  font-size: 12px;
  font-weight: 535;
`,x=(0,C.default)(b.Tv.DeprecatedWhite).withConfig({displayName:"InputStepCounter__ButtonLabel",componentId:"sc-45cb4a1c-6"})`
  color: ${({theme:e,disabled:t})=>t?e.neutral2:e.neutral1} !important;
  display: flex;
`,k=({value:e,decrement:t,increment:n,decrementDisabled:r=!1,incrementDisabled:a=!1,width:u,locked:l,onUserInput:p,title:m,tokenA:f,tokenB:C})=>{const[b,h]=(0,c.useState)(!1),[k,y]=(0,c.useState)(""),[v,_]=(0,c.useState)(!1),[S,O]=(0,c.useState)(!1),P=(0,c.useCallback)((()=>{_(!1),h(!1),p(k)}),[k,p]),U=(0,c.useCallback)((()=>{_(!1),p(t())}),[t,p]),L=(0,c.useCallback)((()=>{_(!1),p(n())}),[n,p]);return(0,c.useEffect)((()=>{k===e||v||setTimeout((()=>{y(e),O(!0),setTimeout((function(){O(!1)}),1800)}),0)}),[k,v,e]),(0,o.jsx)(T,{pulsing:S,active:b,onFocus:()=>{_(!0),h(!0)},onBlur:P,width:u,children:(0,o.jsxs)(I,{children:[(0,o.jsxs)(N,{justify:"flex-start",children:[(0,o.jsx)(E,{fontSize:12,textAlign:"center",children:m}),(0,o.jsx)(A,{className:"rate-input-0",value:k,fontSize:"20px",disabled:l,onUserInput:e=>{y(e)}}),(0,o.jsx)(E,{fontSize:12,textAlign:"left",children:(0,o.jsx)(i.cC,{id:"1/LP4K",values:{tokenB:C,tokenA:f}})})]}),(0,o.jsxs)(s.Tz,{gap:"8px",children:[!l&&(0,o.jsx)(R,{"data-testid":"increment-price-range",onClick:L,disabled:a,children:(0,o.jsx)(x,{disabled:a,fontSize:"12px",children:(0,o.jsx)(d.Z,{size:18})})}),!l&&(0,o.jsx)(R,{"data-testid":"decrement-price-range",onClick:U,disabled:r,children:(0,o.jsx)(x,{disabled:r,fontSize:"12px",children:(0,o.jsx)(g,{size:18})})})]})]})})};var y=n(17358),v=n(47021);function _({priceLower:e,priceUpper:t,onLeftRangeInput:n,onRightRangeInput:r,getDecrementLower:a,getIncrementLower:s,getDecrementUpper:c,getIncrementUpper:d,currencyA:u,currencyB:l,feeAmount:p,ticksAtLimit:m}){const f=(u??void 0)?.wrapped,g=(l??void 0)?.wrapped,C=f&&g&&f.sortsBefore(g),b=C?e:t?.invert(),h=C?t:e?.invert();return(0,o.jsxs)(y.BA,{gap:"md",children:[(0,o.jsx)(k,{value:m[C?v.Mb.LOWER:v.Mb.UPPER]?"0":b?.toSignificant(8)??"",onUserInput:n,decrement:C?a:d,increment:C?s:c,decrementDisabled:void 0===b||m[C?v.Mb.LOWER:v.Mb.UPPER],incrementDisabled:void 0===b||m[C?v.Mb.LOWER:v.Mb.UPPER],feeAmount:p,label:b?`${l?.symbol}`:"-",title:(0,o.jsx)(i.cC,{id:"uEoBVI"}),tokenA:u?.symbol,tokenB:l?.symbol}),(0,o.jsx)(k,{value:m[C?v.Mb.UPPER:v.Mb.LOWER]?"\u221e":h?.toSignificant(8)??"",onUserInput:r,decrement:C?c:s,increment:C?d:a,incrementDisabled:void 0===h||m[C?v.Mb.UPPER:v.Mb.LOWER],decrementDisabled:void 0===h||m[C?v.Mb.UPPER:v.Mb.LOWER],feeAmount:p,label:h?`${l?.symbol}`:"-",tokenA:u?.symbol,tokenB:l?.symbol,title:(0,o.jsx)(i.cC,{id:"kAC8rT"})})]})}},81672:(e,t,n)=>{n.d(t,{U:()=>o,q:()=>b});var o,i=n(5142),r=n(56542),a=n(75422),s=n(4570),c=n(22855),d=n(41177),u=n(18149),l=n(39491),p=n(9988);function m(e,t,n){const{chainId:m}=(0,a.useWeb3React)(),f=e?.currency?.isToken?e.currency:void 0,g=function(e,t,n){const{account:i}=(0,a.useWeb3React)(),r=e?.currency?.isToken?e.currency:void 0,{tokenAllowance:s}=(0,d.Fx)(r,i??void 0,t),c=n(r,t);return(0,l.useMemo)((()=>e&&t?e.currency.isNative?o.APPROVED:s?s.lessThan(e)?c?o.PENDING:o.NOT_APPROVED:o.APPROVED:o.UNKNOWN:o.UNKNOWN),[e,c,t,s])}(e,t,n),C=(0,c.Ib)(f?.address),b=(0,l.useCallback)((async()=>{function n(e){console.warn(`${f?.symbol||"Token"} approval failed:`,e)}if(g!==o.NOT_APPROVED)return n("approve was called unnecessarily");if(!m)return n("no chainId");if(!f)return n("no token");if(!C)return n("tokenContract is null");if(!e)return n("missing amount to approve");if(!t)return n("no spender");let a=!1;const c=await C.estimateGas.approve(t,i.Bz).catch((()=>(a=!0,C.estimateGas.approve(t,e.quotient.toString()))));return C.approve(t,a?e.quotient.toString():i.Bz,{gasLimit:(0,p.y)(c)}).then((n=>{const o={chain_id:m,token_symbol:f?.symbol,token_address:(0,u.DT)(f)};return(0,s._P)(r.Je.APPROVE_TOKEN_TXN_SUBMITTED,o),{response:n,tokenAddress:f.address,spenderAddress:t,amount:e}})).catch((e=>{throw n(e),e}))}),[g,f,C,e,t,m]);return[g,b]}!function(e){e.UNKNOWN="UNKNOWN",e.NOT_APPROVED="NOT_APPROVED",e.PENDING="PENDING",e.APPROVED="APPROVED"}(o||(o={}));var f=n(15574),g=n(53055);function C(e){const t=(0,f.h7)();return(0,l.useCallback)((()=>e().then((e=>{if(e){const{response:n,tokenAddress:o,spenderAddress:i,amount:r}=e;t(n,{type:g.i.APPROVAL,tokenAddress:o,spender:i,amount:r.quotient.toString()})}}))),[t,e])}function b(e,t){const[n,o]=m(e,t,f.wB);return[n,C(o)]}},5225:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(75422),i=n(14844),r=n(39491),a=n(22855);function s(){const{account:e}=(0,o.useWeb3React)(),t=(0,a.c5)(),n=(0,r.useMemo)((()=>[e??void 0]),[e]),s=(0,i.Wk)(t,"isArgentWallet",n,i.DB);return Boolean(s?.result?.[0])}},51358:(e,t,n)=>{n.d(t,{DD:()=>c,Fy:()=>d,SF:()=>l,Sx:()=>u,im:()=>a,zH:()=>s});var o=n(65023),i=n(29718),r=n(33552);const a=r.default.div.withConfig({displayName:"styled__Wrapper",componentId:"sc-740507e2-0"})`
  position: relative;
  padding: 26px 16px;
`,s=r.default.div.withConfig({displayName:"styled__ScrollablePage",componentId:"sc-740507e2-1"})`
  padding: 20px 8px 0px;
  position: relative;
  display: flex;
  flex-direction: column;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    margin: 0 auto;
  `};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    padding: 48px 8px 0px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding-top: 20px;
  }
`,c=(0,r.default)(o.Tz).withConfig({displayName:"styled__DynamicSection",componentId:"sc-740507e2-2"})`
  opacity: ${({disabled:e})=>e?"0.2":"1"};
  pointer-events: ${({disabled:e})=>e?"none":"initial"};
`,d=(0,r.default)(i.I).withConfig({displayName:"styled__StyledInput",componentId:"sc-740507e2-3"})`
  background-color: ${({theme:e})=>e.surface1};
  text-align: left;
  font-size: 18px;
  width: 100%;
`,u=r.default.div.withConfig({displayName:"styled__ResponsiveTwoColumns",componentId:"sc-740507e2-4"})`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 20px;

  border-top: 1px solid ${({theme:e})=>e.surface3};

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    margin-top: 0;
  `};
`,l=r.default.div.withConfig({displayName:"styled__MediumOnly",componentId:"sc-740507e2-5"})`
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    display: none;
  `};
`},89982:(e,t,n)=>{n.d(t,{Z:()=>s,e:()=>a});var o=n(21339),i=n(33552),r=n(48664);const a=i.default.main.withConfig({displayName:"AppBody__BodyWrapper",componentId:"sc-e9d30a3e-0"})`
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
  z-index: ${r.k.default};
`;function s(e){return(0,o.jsx)(a,{...e})}},47029:(e,t,n)=>{n.d(t,{a6:()=>E,m2:()=>N,EG:()=>A,KS:()=>T});var o=n(21339),i=n(88693),r=n(82032),a=n(39303),s=n(75422),c=n(77910),d=n(44595),u=n.n(d),l=n(83014),p=n(39491),m=n(99123),f=n(21914);function g(e,t,n){if(e&&t&&"number"===typeof n)return(0,a.tickToPrice)(e,t,n)}var C=n(59926),b=n(61265),h=n(47021);function I(e,t,n,o){if(!e||!t||!n||!o)return;const i=function(e,t,n){if(!e||!t||!n)return;if(!n.match(/^\d*\.?\d+$/))return;const[o,i]=n.split("."),a=i?.length??0,s=u().BigInt((o??"")+(i??""));return new r.Price(e,t,u().multiply(u().BigInt(10**a),u().BigInt(10**e.decimals)),u().multiply(s,u().BigInt(10**t.decimals)))}(e,t,o);if(!i)return;let s;const c=(0,a.encodeSqrtRatioX96)(i.numerator,i.denominator);return s=u().greaterThanOrEqual(c,a.TickMath.MAX_SQRT_RATIO)?a.TickMath.MAX_TICK:u().lessThanOrEqual(c,a.TickMath.MIN_SQRT_RATIO)?a.TickMath.MIN_TICK:(0,a.priceToClosestTick)(i),(0,a.nearestUsableTick)(s,a.TICK_SPACINGS[n])}var R=n(61300);function T(){return(0,f.C)((e=>e.mintV3))}function A(e){const t=(0,f.T)(),n=(0,p.useCallback)((n=>{t((0,h.LC)({field:h.gN.CURRENCY_A,typedValue:n,noLiquidity:!0===e}))}),[t,e]),o=(0,p.useCallback)((n=>{t((0,h.LC)({field:h.gN.CURRENCY_B,typedValue:n,noLiquidity:!0===e}))}),[t,e]),[i,r]=(0,m.lr)();return{onFieldAInput:n,onFieldBInput:o,onLeftRangeInput:(0,p.useCallback)((e=>{e=(0,R.E0)(parseFloat(e)),t((0,h.yw)({typedValue:e}));const n=i.get("minPrice");(!n||n&&n!==e)&&(i.set("minPrice",e),r(i))}),[t,i,r]),onRightRangeInput:(0,p.useCallback)((e=>{t((0,h.ay)({typedValue:e}));const n=i.get("maxPrice");(!n||n&&n!==e)&&(i.set("maxPrice",e),r(i))}),[t,i,r]),onStartPriceInput:(0,p.useCallback)((e=>{t((0,h.A8)({typedValue:e}))}),[t])}}function N(e,t,n,d,m){const{account:f}=(0,s.useWeb3React)(),{independentField:R,typedValue:A,leftRangeTypedValue:N,rightRangeTypedValue:E,startPriceTypedValue:x}=T(),k=R===h.gN.CURRENCY_A?h.gN.CURRENCY_B:h.gN.CURRENCY_A,y=(0,p.useMemo)((()=>({[h.gN.CURRENCY_A]:e,[h.gN.CURRENCY_B]:t})),[e,t]),[v,_,S]=(0,p.useMemo)((()=>[e?.wrapped,t?.wrapped,d?.wrapped]),[e,t,d]),[O,P]=(0,p.useMemo)((()=>v&&_?v.sortsBefore(_)?[v,_]:[_,v]:[void 0,void 0]),[v,_]),U=(0,b.K5)(f??void 0,(0,p.useMemo)((()=>[y[h.gN.CURRENCY_A],y[h.gN.CURRENCY_B]]),[y])),L={[h.gN.CURRENCY_A]:U[0],[h.gN.CURRENCY_B]:U[1]},[M,w]=(0,c.AI)(y[h.gN.CURRENCY_A],y[h.gN.CURRENCY_B],n),j=M===c.tK.NOT_EXISTS,D=Boolean(S&&O&&!S.equals(O)),F=(0,p.useMemo)((()=>{if(!j)return w&&O?w.priceOf(O):void 0;{const e=(0,l.Z)(x,D?O:P);if(e&&O&&P){const t=(0,l.Z)("1",D?P:O),n=t&&e?new r.Price(t.currency,e.currency,t.quotient,e.quotient):void 0;return(D?n?.invert():n)??void 0}}}),[j,x,D,P,O,w]),W=(0,p.useMemo)((()=>{const e=F?(0,a.encodeSqrtRatioX96)(F.numerator,F.denominator):void 0;return F&&e&&!(u().greaterThanOrEqual(e,a.TickMath.MIN_SQRT_RATIO)&&u().lessThan(e,a.TickMath.MAX_SQRT_RATIO))}),[F]),B=(0,p.useMemo)((()=>{if(v&&_&&n&&F&&!W){const e=(0,a.priceToClosestTick)(F),t=a.TickMath.getSqrtRatioAtTick(e);return new a.Pool(v,_,n,t,u().BigInt(0),e,[])}}),[n,W,F,v,_]),$=w??B,K=(0,p.useMemo)((()=>({[h.Mb.LOWER]:n?(0,a.nearestUsableTick)(a.TickMath.MIN_TICK,a.TICK_SPACINGS[n]):void 0,[h.Mb.UPPER]:n?(0,a.nearestUsableTick)(a.TickMath.MAX_TICK,a.TICK_SPACINGS[n]):void 0})),[n]),G=(0,p.useMemo)((()=>({[h.Mb.LOWER]:"number"===typeof m?.tickLower?m.tickLower:D&&"boolean"===typeof E||!D&&"boolean"===typeof N?K[h.Mb.LOWER]:D?I(P,O,n,E.toString()):I(O,P,n,N.toString()),[h.Mb.UPPER]:"number"===typeof m?.tickUpper?m.tickUpper:!D&&"boolean"===typeof E||D&&"boolean"===typeof N?K[h.Mb.UPPER]:D?I(P,O,n,N.toString()):I(O,P,n,E.toString())})),[m,n,D,N,E,O,P,K]),{[h.Mb.LOWER]:V,[h.Mb.UPPER]:z}=G||{},Y=(0,p.useMemo)((()=>({[h.Mb.LOWER]:n&&V===K.LOWER,[h.Mb.UPPER]:n&&z===K.UPPER})),[K,V,z,n]),q=Boolean("number"===typeof V&&"number"===typeof z&&V>=z),H=(0,p.useMemo)((()=>({[h.Mb.LOWER]:g(O,P,K.LOWER),[h.Mb.UPPER]:g(O,P,K.UPPER)})),[O,P,K.LOWER,K.UPPER]),X=(0,p.useMemo)((()=>({[h.Mb.LOWER]:g(O,P,G[h.Mb.LOWER]),[h.Mb.UPPER]:g(O,P,G[h.Mb.UPPER])})),[O,P,G]),{[h.Mb.LOWER]:Z,[h.Mb.UPPER]:Q}=X,J=Boolean(!q&&F&&Z&&Q&&(F.lessThan(Z)||F.greaterThan(Q))),ee=(0,l.Z)(A,y[R]),te=(0,p.useMemo)((()=>{const n=ee?.wrapped,o=k===h.gN.CURRENCY_B?t:e;if(ee&&n&&"number"===typeof V&&"number"===typeof z&&$){if(J||q)return;const e=n.currency.equals($.token0)?a.Position.fromAmount0({pool:$,tickLower:V,tickUpper:z,amount0:ee.quotient,useFullPrecision:!0}):a.Position.fromAmount1({pool:$,tickLower:V,tickUpper:z,amount1:ee.quotient}),t=n.currency.equals($.token0)?e.amount1:e.amount0;return o&&r.CurrencyAmount.fromRawAmount(o,t.quotient)}}),[ee,J,k,t,e,V,z,$,q]),ne=(0,p.useMemo)((()=>({[h.gN.CURRENCY_A]:R===h.gN.CURRENCY_A?ee:te,[h.gN.CURRENCY_B]:R===h.gN.CURRENCY_A?te:ee})),[te,ee,R]),oe=Boolean("number"===typeof z&&$&&$.tickCurrent>=z),ie=Boolean("number"===typeof V&&$&&$.tickCurrent<=V),re=q||Boolean(oe&&$&&v&&$.token0.equals(v)||ie&&$&&v&&$.token1.equals(v)),ae=q||Boolean(oe&&$&&_&&$.token0.equals(_)||ie&&$&&_&&$.token1.equals(_)),se=(0,p.useMemo)((()=>{if(!$||!v||!_||"number"!==typeof V||"number"!==typeof z||q)return;const e=oe?C.iV:ne?.[v.equals($.token0)?h.gN.CURRENCY_A:h.gN.CURRENCY_B]?.quotient,t=ie?C.iV:ne?.[v.equals($.token0)?h.gN.CURRENCY_B:h.gN.CURRENCY_A]?.quotient;return void 0!==e&&void 0!==t?a.Position.fromAmounts({pool:$,tickLower:V,tickUpper:z,amount0:e,amount1:t,useFullPrecision:!0}):void 0}),[ne,$,v,_,oe,ie,q,V,z]);let ce;f||(ce=(0,o.jsx)(i.cC,{id:"VHOVEJ"})),M===c.tK.INVALID&&(ce=ce??(0,o.jsx)(i.cC,{id:"R7D79P"})),W&&(ce=ce??(0,o.jsx)(i.cC,{id:"HXBqgG"})),(ne[h.gN.CURRENCY_A]||re)&&(ne[h.gN.CURRENCY_B]||ae)||(ce=ce??(0,o.jsx)(i.cC,{id:"iPMIoT"}));const{[h.gN.CURRENCY_A]:de,[h.gN.CURRENCY_B]:ue}=ne;de&&L?.[h.gN.CURRENCY_A]?.lessThan(de)&&(ce=(0,o.jsx)(i.cC,{id:"m6RmA/",values:{0:y[h.gN.CURRENCY_A]?.symbol}})),ue&&L?.[h.gN.CURRENCY_B]?.lessThan(ue)&&(ce=(0,o.jsx)(i.cC,{id:"m6RmA/",values:{0:y[h.gN.CURRENCY_B]?.symbol}}));const le=M===c.tK.INVALID;return{dependentField:k,currencies:y,pool:w,poolState:M,currencyBalances:L,parsedAmounts:ne,ticks:G,price:F,pricesAtTicks:X,pricesAtLimit:H,position:se,noLiquidity:j,errorMessage:ce,invalidPool:le,invalidRange:q,outOfRange:J,depositADisabled:re,depositBDisabled:ae,invertPrice:D,ticksAtLimit:Y}}function E(e,t,n,o,i,s){const c=(0,f.T)(),d=(0,p.useMemo)((()=>e?.wrapped),[e]),u=(0,p.useMemo)((()=>t?.wrapped),[t]);return{getDecrementLower:(0,p.useCallback)((()=>{if(d&&u&&"number"===typeof o&&n){return(0,a.tickToPrice)(d,u,o-a.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}if("number"!==typeof o&&d&&u&&n&&s){return(0,a.tickToPrice)(d,u,s.tickCurrent-a.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}return""}),[d,u,o,n,s]),getIncrementLower:(0,p.useCallback)((()=>{if(d&&u&&"number"===typeof o&&n){return(0,a.tickToPrice)(d,u,o+a.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}if("number"!==typeof o&&d&&u&&n&&s){return(0,a.tickToPrice)(d,u,s.tickCurrent+a.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}return""}),[d,u,o,n,s]),getDecrementUpper:(0,p.useCallback)((()=>{if(d&&u&&"number"===typeof i&&n){return(0,a.tickToPrice)(d,u,i-a.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}if("number"!==typeof i&&d&&u&&n&&s){return(0,a.tickToPrice)(d,u,s.tickCurrent-a.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}return""}),[d,u,i,n,s]),getIncrementUpper:(0,p.useCallback)((()=>{if(d&&u&&"number"===typeof i&&n){return(0,a.tickToPrice)(d,u,i+a.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}if("number"!==typeof i&&d&&u&&n&&s){return(0,a.tickToPrice)(d,u,s.tickCurrent+a.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}return""}),[d,u,i,n,s]),getSetFullRange:(0,p.useCallback)((()=>{c((0,h._h)())}),[c])}}}}]);
//# sourceMappingURL=2170.df1b8eef.chunk.js.map