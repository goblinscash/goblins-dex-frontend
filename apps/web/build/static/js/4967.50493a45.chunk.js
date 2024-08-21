"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[4967],{24967:(e,n,t)=>{t.r(n),t.d(n,{default:()=>tn});var s=t(21339),i=t(82523),o=t(88693),r=t(56542),a=t(75422),d=t(4570),l=t(24264),c=t(33858),u=t(56374),h=t(66496),p=t(33552),x=t(10548),m=t(6970);const f=p.default.div.withConfig({displayName:"AddressSection__ContractAddressSection",componentId:"sc-65f6d5a3-0"})`
  display: flex;
  flex-direction: column;
  color: ${({theme:e})=>e.neutral2};
  font-size: 0.9em;
  gap: 4px;
  padding: 4px 0px;
`,C=p.default.button.withConfig({displayName:"AddressSection__ContractAddress",componentId:"sc-65f6d5a3-1"})`
  display: flex;
  color: ${({theme:e})=>e.neutral1};
  gap: 10px;
  align-items: center;
  background: transparent;
  border: none;
  min-height: 38px;
  padding: 0px;
`;function j({address:e}){return(0,s.jsxs)(f,{children:[(0,s.jsx)(x.Tv.SubHeaderSmall,{children:(0,s.jsx)(o.cC,{id:"TPQ9LW"})}),(0,s.jsx)(C,{children:(0,s.jsx)(x.Qv,{address:e,truncatedAddress:(0,m.Xn)(e,2,3)})})]})}var y=t(77489),k=t(46502),g=t(58114),w=t(46778),b=t(54078),v=t(379),T=t(89691),I=t(83787),D=t(12973),A=t(21309),B=t(78614),N=t(51119),S=t(39491),$=t(96439),P=t(18910),L=t(92686),_=t(63486),E=t(17358),M=t(21123),F=t(66644),H=t(82032),Z=t(70762),O=t(86147);O.ZP`
  query PoolsFromTokenAddress(
    $tokenAddress: String!
    $skip: Int
    $orderBy: Pool_orderBy
    $orderDirection: OrderDirection
  ) {
    pools(
      where: { or: [{ token0: $tokenAddress }, { token1: $tokenAddress }] }
      first: 20
      skip: $skip
      orderBy: $orderBy
      orderDirection: $orderDirection
      subgraphError: allow
    ) {
      id
      txCount
      totalValueLockedUSD
      feeTier
      token0 {
        id
        symbol
      }
      token1 {
        id
        symbol
      }
    }
  }
`;const U=[M.Oz.Transactions];function z({chainId:e,referenceToken:n}){const[t,i]=(0,S.useState)({sortBy:F.at.TotalValueLockedUsd,sortDirection:F.N9.Desc}),{pools:r,loading:a,error:d,loadMore:l}=function(e,n,t=F.at.TotalValueLockedUsd,s=F.N9.Desc){const i=Z.uw[n||H.ChainId.MAINNET],{loading:o,error:r,data:a,fetchMore:d}=(0,F.wU)({variables:{tokenAddress:e.toLowerCase(),orderBy:t,orderDirection:s},client:i,fetchPolicy:"cache-first"}),l=(0,S.useRef)(!1),c=(0,S.useCallback)((({onComplete:e})=>{l.current||(l.current=!0,d({variables:{skip:a?.pools?.length??0},updateQuery:(n,{fetchMoreResult:t})=>{if(!t||!n||!Object.keys(n).length)return n;e?.();const s={pools:[...n.pools,...t.pools]};return l.current=!1,s}}))}),[a?.pools?.length,d]);return(0,S.useMemo)((()=>{const e=(a?.pools??[]).map((e=>{const n=Math.random(),t=parseFloat(e.totalValueLockedUSD??"0");return{hash:e.id,token0:e.token0,token1:e.token1,txCount:parseFloat(e.txCount??"0"),tvl:t,feeTier:parseFloat(e.feeTier??"0"),volume24h:n*t,volumeWeek:n*t*7,turnover:n}})).sort(((e,n)=>n.tvl-e.tvl));return{loading:o,error:r,pools:e,loadMore:c}}),[a?.pools,r,c,o])}(n.address,e,t.sortBy,t.sortDirection),c=(0,S.useCallback)((e=>{t.sortBy===e?i({sortBy:e,sortDirection:t.sortDirection===F.N9.Asc?F.N9.Desc:F.N9.Asc}):i({sortBy:e,sortDirection:F.N9.Desc})}),[t.sortBy,t.sortDirection]);return d?(0,s.jsx)(x.Tv.BodyPrimary,{children:(0,s.jsx)(o.cC,{id:"6oxcad"})}):(0,s.jsx)("div",{"data-testid":`tdp-pools-table-${n.address.toLowerCase()}`,children:(0,s.jsx)(M.NE,{pools:r,loading:a,chainId:e,maxHeight:600,hiddenColumns:U,loadMore:l,sortState:t,handleHeaderClick:c})})}var W,R=t(9726),V=t(12762),Q=t(82786),Y=t(44878),G=t(87148),X=t(54210),K=t(95326),q=t(10705);O.Ps`
  query TokenTransactions(
    $address: String!
    $first: Int
    $skip: Int
    $orderBy: Swap_orderBy
    $orderDirection: OrderDirection
  ) {
    swapsAs0: swaps(
      first: $first
      skip: $skip
      orderBy: $orderBy
      orderDirection: $orderDirection
      where: { token0: $address }
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
    swapsAs1: swaps(
      first: $first
      skip: $skip
      orderBy: $orderBy
      orderDirection: $orderDirection
      where: { token1: $address }
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
  }
`,function(e){e.BUY="Buy",e.SELL="Sell"}(W||(W={}));var J=t(59155),ee=t(84087),ne=t(33151),te=t(19369),se=t(54359);const ie=(0,p.default)(x.Tv.BodyPrimary).withConfig({displayName:"TransactionsTable__StyledSwapAmount",componentId:"sc-dfbcb8a8-0"})`
  display: inline-block;
  ${x.cw}
  max-width: 125px;
`;function oe({chainId:e,referenceToken:n}){const t=(0,ee.eQ)(),i=(0,J.XB)(),{formatNumber:r,formatFiatPrice:a}=(0,te.Gb)(),d=(0,I.Qj)((0,L.UO)().chainName),[l,c]=(0,S.useReducer)((e=>!e),!1),u=(0,S.useRef)(null);(0,ne.t)(u,l?c:void 0);const[h,p]=(0,S.useState)([W.BUY,W.SELL]),[f,C]=(0,S.useState)({sortBy:F.AI.Timestamp,sortDirection:F.N9.Desc}),{transactions:j,loading:y,loadMore:k}=function(e,n,t=F.AI.Timestamp,s=F.N9.Desc,i=[W.BUY,W.SELL],o=25,r){const a=Z.uw[n||H.ChainId.MAINNET],{data:d,loading:l,fetchMore:c}=(0,F.uk)({variables:{address:e.toLowerCase(),first:o,skip:r,orderBy:t,orderDirection:s},client:a}),u=(0,S.useRef)(!1),h=(0,S.useCallback)((({onComplete:e})=>{u.current||(u.current=!0,c({variables:{skip:Math.max(d?.swapsAs0?.length??0,d?.swapsAs1?.length??0)},updateQuery:(n,{fetchMoreResult:t})=>{if(!t)return n;e?.();const s={swapsAs0:[...n.swapsAs0,...t.swapsAs0],swapsAs1:[...n.swapsAs1,...t.swapsAs1]};return u.current=!1,s}}))}),[d,c]),p=(0,S.useMemo)((()=>[...d?.swapsAs0.filter((e=>e.amount0>0?i.includes(W.SELL):i.includes(W.BUY)))??[],...d?.swapsAs1.filter((e=>e.amount1>0?i.includes(W.SELL):i.includes(W.BUY)))??[]].sort(((e,n)=>n.timestamp-e.timestamp))),[d?.swapsAs0,d?.swapsAs1,i]);return(0,S.useMemo)((()=>({transactions:p,loading:l,loadMore:h})),[p,l,h])}(n.address,e,f.sortBy,f.sortDirection,h),g=(0,S.useCallback)((e=>{f.sortBy===e?C({sortBy:e,sortDirection:f.sortDirection===F.N9.Asc?F.N9.Desc:F.N9.Asc}):C({sortBy:e,sortDirection:F.N9.Desc})}),[f.sortBy,f.sortDirection]),w=(0,S.useMemo)((()=>j.map((e=>{const n={address:e.pool.token0.id,symbol:e.pool.token0.symbol,amount:e.amount0},t={address:e.pool.token1.id,symbol:e.pool.token1.symbol,amount:e.amount1};let s,i;return n.amount>0?(s=n,i=t):(s=t,i=n),{hash:e.transaction.id,timestamp:e.timestamp,input:s,output:i,usdValue:e.amountUSD,makerAddress:e.origin}}))),[j]),b=(0,S.useMemo)((()=>{const C=(0,V.Cl)();return[C.accessor((e=>e.timestamp),{id:"timestamp",header:()=>(0,s.jsx)(Y.b,{minWidth:150,justifyContent:"flex-start",grow:!0,children:(0,s.jsxs)(X.d4,{$justify:"flex-start",onClick:()=>g(F.AI.Timestamp),children:[f.sortBy===F.AI.Timestamp&&(0,s.jsx)(X.iX,{direction:f.sortDirection}),(0,s.jsx)(x.Tv.BodySecondary,{children:(0,s.jsx)(o.cC,{id:"LhMjLm"})})]})}),cell:e=>(0,s.jsx)(Y.b,{loading:y,minWidth:150,justifyContent:"flex-start",grow:!0,children:(0,s.jsx)(x.Tv.BodySecondary,{children:(0,K.G)(1e3*Number(e.getValue?.()),t??q.ZW)})})}),C.accessor((e=>e.output.address),{id:"swap-type",header:()=>(0,s.jsx)(Y.b,{minWidth:50,justifyContent:"flex-start",grow:!0,children:(0,s.jsxs)(X.j4,{modalOpen:l,onClick:c,ref:u,children:[(0,s.jsx)(G.w,{allFilters:Object.values(W),activeFilter:h,setFilters:p,isOpen:l}),(0,s.jsx)(x.Tv.BodySecondary,{children:(0,s.jsx)(o.cC,{id:"+zy2Nq"})})]})}),cell:e=>(0,s.jsx)(Y.b,{loading:y,minWidth:50,justifyContent:"flex-start",grow:!0,children:(0,s.jsx)(x.Tv.BodyPrimary,{children:String(e.getValue?.()).toLowerCase()===n.address.toLowerCase()?(0,s.jsx)(o.cC,{id:"qiOIiY"}):(0,s.jsx)(o.cC,{id:"xNB0TS"})})})}),C.accessor((e=>e.input.address.toLowerCase()===n.address.toLowerCase()?e.input.amount:e.output.amount),{id:"reference-amount",header:()=>(0,s.jsx)(Y.b,{minWidth:150,justifyContent:"flex-end",children:(0,s.jsxs)(x.Tv.BodySecondary,{children:["$",n.symbol]})}),cell:e=>(0,s.jsx)(Y.b,{loading:y,minWidth:150,justifyContent:"flex-end",children:(0,s.jsx)(x.Tv.BodyPrimary,{children:r({input:Math.abs(e.getValue?.())||0})})})}),C.accessor((e=>{const t=e.input.address.toLowerCase()===n.address.toLowerCase()?e.output:e.input;return(0,s.jsxs)(ie,{children:[r({input:Math.abs(t.amount)||0})," ",(0,s.jsx)(X.m_,{to:`/explore/tokens/${d.toLowerCase()}/${t.address}`,children:t.symbol})]})}),{id:"non-reference-amount",header:()=>(0,s.jsx)(Y.b,{minWidth:150,justifyContent:"flex-end",children:(0,s.jsx)(x.Tv.BodySecondary,{children:(0,s.jsx)(o.cC,{id:"YHpbe1"})})}),cell:e=>(0,s.jsx)(Y.b,{loading:y,minWidth:150,justifyContent:"flex-end",children:e.getValue?.()})}),C.accessor((e=>e.usdValue),{id:"fiat-value",header:()=>(0,s.jsx)(Y.b,{minWidth:125,justifyContent:"flex-end",children:(0,s.jsxs)(X.d4,{$justify:"flex-end",onClick:()=>g(F.AI.AmountUsd),children:[f.sortBy===F.AI.AmountUsd&&(0,s.jsx)(X.iX,{direction:f.sortDirection}),(0,s.jsx)(x.Tv.BodySecondary,{children:i})]})}),cell:e=>(0,s.jsx)(Y.b,{loading:y,minWidth:125,justifyContent:"flex-end",children:(0,s.jsx)(x.Tv.BodyPrimary,{children:a({price:e.getValue?.()})})})}),C.accessor((e=>e.makerAddress),{id:"maker-address",header:()=>(0,s.jsx)(Y.b,{minWidth:100,justifyContent:"flex-end",children:(0,s.jsx)(x.Tv.BodySecondary,{children:(0,s.jsx)(o.cC,{id:"sb9Y58"})})}),cell:n=>(0,s.jsx)(Y.b,{loading:y,minWidth:100,justifyContent:"flex-end",children:(0,s.jsx)(X.Bq,{href:(0,se.E)(e,n.getValue?.(),se.r.ADDRESS),children:(0,m.Xn)(n.getValue?.(),0)})})})]}),[i,e,d,h,l,a,r,g,y,t,n.address,n.symbol,f.sortBy,f.sortDirection]);return(0,s.jsx)(Q.i,{columns:b,data:w,loading:y,loadMore:k,maxHeight:600})}const re=p.default.div.withConfig({displayName:"ActivitySection__Container",componentId:"sc-23e1ccec-0"})`
  width: 100%;
  display: flex;
  flex-direction: column;
`,ae=(0,p.default)(R.xv).withConfig({displayName:"ActivitySection__Tab",componentId:"sc-23e1ccec-1"})`
  cursor: pointer;
  font-size: 24px !important;
  line-height: 32px !important;
  color: ${({isActive:e,theme:n})=>e?n.neutral1:n.neutral2};
  ${x.iV};
`;var de;function le({chainId:e,referenceToken:n}){const[t,i]=(0,S.useState)(de.Pools);return n?(0,s.jsxs)(re,{children:[(0,s.jsxs)(E.ZP,{gap:"24px",marginBottom:"12px",id:"activity-header",children:[(0,s.jsx)(ae,{isActive:t===de.Pools,onClick:()=>i(de.Pools),children:(0,s.jsx)(o.cC,{id:"lQfOr9"})}),(0,s.jsx)(ae,{isActive:t===de.Txs,onClick:()=>i(de.Txs),children:(0,s.jsx)(o.cC,{id:"4wyw8H"})})]}),t===de.Pools&&(0,s.jsx)(z,{chainId:e,referenceToken:n}),t===de.Txs&&(0,s.jsx)(oe,{chainId:e,referenceToken:n})]}):null}!function(e){e[e.Pools=0]="Pools",e[e.Txs=1]="Txs"}(de||(de={}));var ce,ue=t(70357),he=t(53609),pe=t(47365);function xe(){return xe=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},xe.apply(this,arguments)}function me(e,n){let{title:t,titleId:s,...i}=e;return S.createElement("svg",xe({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",ref:n,"aria-labelledby":s},i),t?S.createElement("title",{id:s},t):null,ce||(ce=S.createElement("path",{d:"M14.75 12C14.75 13.517 13.517 14.75 12 14.75C10.483 14.75 9.25004 13.517 9.25004 12C9.25004 11.651 9.32196 11.32 9.44096 11.012C9.63496 11.166 9.86903 11.272 10.136 11.272C10.763 11.272 11.272 10.763 11.272 10.136C11.272 9.86899 11.166 9.63492 11.012 9.44092C11.32 9.32192 11.651 9.25 12 9.25C13.517 9.25 14.75 10.483 14.75 12ZM20.5921 13.4771C19.3651 15.5311 16.609 19 12 19C7.39104 19 4.635 15.5311 3.408 13.4771C2.864 12.5671 2.864 11.4329 3.408 10.5229C4.635 8.46895 7.39104 5 12 5C16.609 5 19.3651 8.46895 20.5921 10.5229C21.1361 11.4329 21.1361 12.5671 20.5921 13.4771ZM16.25 12C16.25 9.657 14.344 7.75 12 7.75C9.65604 7.75 7.75004 9.657 7.75004 12C7.75004 14.343 9.65604 16.25 12 16.25C14.344 16.25 16.25 14.343 16.25 12Z",fill:"currentColor"})))}const fe=S.forwardRef(me),Ce=(t.p,p.default.div.withConfig({displayName:"InvalidTokenDetails__InvalidDetailsContainer",componentId:"sc-6489a4a1-0"})`
  padding-top: 128px;
  display: flex;
  flex-direction: column;
  align-items: center;
`),je=p.default.span.withConfig({displayName:"InvalidTokenDetails__InvalidDetailsText",componentId:"sc-6489a4a1-1"})`
  margin-top: 28px;
  margin-bottom: 20px;

  text-align: center;

  color: ${({theme:e})=>e.neutral2};
  font-size: 20px;
  font-weight: 535;
  line-height: 28px;
`,ye=(0,p.default)(ue.DF).withConfig({displayName:"InvalidTokenDetails__TokenExploreButton",componentId:"sc-6489a4a1-2"})`
  width: fit-content;
  padding: 12px 16px;
  border-radius: 12px;

  color: ${({theme:e})=>e.neutral1};
  font-size: 16px;
  font-weight: 535;
`;function ke({pageChainId:e,isInvalidAddress:n}){const{chainId:t}=(0,a.useWeb3React)(),i=(0,L.s0)(),r=(0,pe.Z)(),d=!n&&e===t,l=t?(0,he.bt)(t)?.label:void 0;return(0,s.jsxs)(Ce,{children:[(0,s.jsx)(fe,{}),n||d?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(je,{children:(0,s.jsx)(o.cC,{id:"5pThdE"})}),(0,s.jsx)(ye,{onClick:()=>i("/tokens"),children:(0,s.jsx)(x.Tv.SubHeader,{children:(0,s.jsx)(o.cC,{id:"1ru2CS"})})})]}):(0,s.jsxs)(s.Fragment,{children:[l&&(0,s.jsx)(je,{children:(0,s.jsx)(o.cC,{id:"xNuZYG",values:{connectedChainLabel:l}})}),(0,s.jsx)(ye,{onClick:()=>r(e),children:(0,s.jsx)(x.Tv.SubHeader,{children:(0,s.jsx)(o.cC,{id:"1+P9RR",values:{0:(0,he.bt)(e).label}})})})]})]})}var ge=t(71587),we=t(65023),be=t(88584);const ve=e=>(0,s.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"transparent",...e,children:(0,s.jsx)("path",{d:"M5.12245 9.5625C5.23495 11.8725 6.01495 14.2275 7.37245 16.32C4.19245 15.615 1.76996 12.8925 1.52246 9.5625H5.12245ZM7.37245 1.67999C4.19245 2.38499 1.76996 5.1075 1.52246 8.4375H5.12245C5.23495 6.1275 6.01495 3.77249 7.37245 1.67999ZM9.14997 1.5H8.84995L8.62496 1.82249C7.19996 3.84749 6.36745 6.1725 6.24745 8.4375H11.7525C11.6325 6.1725 10.8 3.84749 9.37496 1.82249L9.14997 1.5ZM6.24745 9.5625C6.36745 11.8275 7.19996 14.1525 8.62496 16.1775L8.84995 16.5H9.14997L9.37496 16.1775C10.8 14.1525 11.6325 11.8275 11.7525 9.5625H6.24745ZM12.8775 9.5625C12.765 11.8725 11.985 14.2275 10.6275 16.32C13.8075 15.615 16.23 12.8925 16.4775 9.5625H12.8775ZM16.4775 8.4375C16.23 5.1075 13.8075 2.38499 10.6275 1.67999C11.985 3.77249 12.765 6.1275 12.8775 8.4375H16.4775Z",fill:e.fill??"#607BEE"})}),Te=e=>(0,s.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"transparent",...e,children:(0,s.jsx)("path",{d:"M12.8761 3H14.9451L10.4251 8.16609L15.7425 15.196H11.579L8.31797 10.9324L4.58662 15.196H2.51644L7.35104 9.67026L2.25 3H6.51922L9.46689 6.89708L12.8761 3ZM12.15 13.9576H13.2964L5.89628 4.17332H4.66605L12.15 13.9576Z",fill:e.fill??"#607BEE"})});var Ie=t(74163),De=t(57777),Ae=t(25093),Be=t(91943),Ne=t(53904),Se=t(97472),$e=t(39681),Pe=t(17513),Le=t(95114);const _e=(0,p.default)(we.ZP).withConfig({displayName:"TokenDescription__TokenInfoSection",componentId:"sc-aefff000-0"})`
  gap: 16px;
  width: 100%;

  @media (max-width: ${$e.j$.lg-1}px) and (min-width: ${$e.j$.sm}px) {
    max-width: 45%;
  }
`,Ee=(0,p.default)(E.ZP).withConfig({displayName:"TokenDescription__TokenNameRow",componentId:"sc-aefff000-1"})`
  gap: 8px;
  width: 100%;
`,Me=(0,p.default)(Ee).withConfig({displayName:"TokenDescription__TokenButtonRow",componentId:"sc-aefff000-2"})`
  flex-wrap: wrap;
`,Fe=(0,p.default)(E.ZP).withConfig({displayName:"TokenDescription__TokenInfoButton",componentId:"sc-aefff000-3"})`
  gap: 8px;
  padding: 8px 12px;
  border-radius: 20px;
  color: ${({tokenColor:e})=>e};
  background-color: ${({tokenColor:e})=>(0,Pe.j)(12,e)};
  font-size: 14px;
  font-weight: 535;
  line-height: 16px;
  width: max-content;
  ${x.iV}
`,He=(0,p.default)(x.Tv.BodyPrimary).withConfig({displayName:"TokenDescription__TokenDescriptionContainer",componentId:"sc-aefff000-4"})`
  ${x.cw}
  max-width: 100%;
  // max-height: fit-content;
  line-height: 24px;
  white-space: pre-wrap;
`,Ze=p.default.p.withConfig({displayName:"TokenDescription__DescriptionVisibilityWrapper",componentId:"sc-aefff000-5"})`
  display: ${({$visible:e})=>e?"inline":"none"};
`,Oe=75;function Ue({tokenAddress:e,chainId:n=H.ChainId.MAINNET,isNative:t=!1,characterCount:i=Oe}){const r=(0,p.useTheme)().neutral1,a=(0,I.Ld)(n),{data:d}=(0,Ae.wT)({variables:{address:t?(0,Le.P)(a):e,chain:a},errorPolicy:"all"}),l=d?.token?.project,c=l?.description,u=(0,se.E)(n,e,t?se.r.NATIVE:se.r.TOKEN),[,h]=(0,Be.Z)(),f=(0,S.useCallback)((()=>{h(e)}),[e,h]),[C,j]=(0,S.useReducer)((e=>!e),!0),y=(0,ge.Nt)(c??"",i),k=!!c&&c.length>i,g=k&&C,{inputTax:w,outputTax:b}=(0,Ne.j)(e,e),{formatPercent:v}=(0,te.Gb)(),{sellFeeString:T,buyFeeString:D}={sellFeeString:v(w),buyFeeString:v(b)},A=Boolean(parseFloat(T))||Boolean(parseFloat(b.toFixed(2))),B=T===D;return(0,s.jsxs)(_e,{children:[(0,s.jsx)(x.Tv.HeadlineSmall,{children:(0,s.jsx)(o.cC,{id:"CE+M2e"})}),(0,s.jsxs)(Me,{children:[!t&&(0,s.jsxs)(Fe,{tokenColor:r,onClick:f,children:[(0,s.jsx)(Se.Z,{width:"18px",height:"18px",color:r}),(0,m.Xn)(e)]}),(0,s.jsx)(x.dL,{href:u,children:(0,s.jsxs)(Fe,{tokenColor:r,children:[(0,s.jsx)(be.P,{width:"18px",height:"18px",fill:r}),n===H.ChainId.MAINNET?(0,s.jsx)(o.cC,{id:"nS3bjC"}):(0,s.jsx)(o.cC,{id:"vtJ2yO"})]})}),!!l?.homepageUrl&&(0,s.jsx)(x.dL,{href:l.homepageUrl,children:(0,s.jsxs)(Fe,{tokenColor:r,children:[(0,s.jsx)(ve,{width:"18px",height:"18px",fill:r}),(0,s.jsx)(o.cC,{id:"On0aF2"})]})}),!!l?.twitterName&&(0,s.jsx)(x.dL,{href:`https://x.com/${l.twitterName}`,children:(0,s.jsxs)(Fe,{tokenColor:r,children:[(0,s.jsx)(Te,{width:"18px",height:"18px",fill:r}),(0,s.jsx)(o.cC,{id:"0F2sI+"})]})})]}),(0,s.jsxs)(He,{children:[!c&&(0,s.jsx)(ge.aZ,{children:(0,s.jsx)(o.cC,{id:"kXI9SA"})}),c&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(Ze,{"data-testid":"token-description-full",$visible:!g,children:c}),(0,s.jsx)(Ze,{"data-testid":"token-description-truncated",$visible:g,children:y})]}),k&&(0,s.jsx)(ge.ou,{onClick:j,"data-testid":"token-description-show-more-button",children:C?(0,s.jsx)(o.cC,{id:"fMPkxb"}):(0,s.jsx)(o.cC,{id:"vLyv1R"})})]}),A&&(0,s.jsx)(De.ud,{placement:"left",size:De.Oz.Small,text:(0,s.jsx)(x.Tv.Caption,{color:"neutral2",children:(0,s.jsx)(Ie.gE,{})}),children:(0,s.jsx)(we.ZP,{gap:"sm",children:B?(0,s.jsxs)(x.Tv.BodyPrimary,{children:[d?.token?.symbol,"\xa0",(0,s.jsx)(o.cC,{id:"oSCKSR"}),"\xa0",T]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(x.Tv.BodyPrimary,{children:[d?.token?.symbol,"\xa0",(0,s.jsx)(o.cC,{id:"JzWZvv"}),"\xa0",D]})," ",(0,s.jsxs)(x.Tv.BodyPrimary,{children:[d?.token?.symbol,"\xa0",(0,s.jsx)(o.cC,{id:"sHAUpq"}),"\xa0",T]})," "]})})})]})}const ze=p.default.span.withConfig({displayName:"TokenDetails__TokenSymbol",componentId:"sc-32fe5f6c-0"})`
  text-transform: uppercase;
  color: ${({theme:e})=>e.neutral2};
  margin-left: 8px;

  ${({isInfoTDPEnabled:e})=>e&&p.css`
      @media screen and (max-width: ${({theme:e})=>e.breakpoint.xs}px) {
        display: none;
      }
    `}
`,We=(p.default.div.withConfig({displayName:"TokenDetails__ChartActions",componentId:"sc-32fe5f6c-1"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,p.default.div.withConfig({displayName:"TokenDetails__TokenTitle",componentId:"sc-32fe5f6c-2"})`
  display: flex;

  ${({isInfoTDPEnabled:e})=>e?p.css`
          overflow: hidden;
          white-space: nowrap;
        `:p.css`
          @media screen and (max-width: ${({theme:e})=>e.breakpoint.md}px) {
            display: inline;
          }
        `}
`),Re=p.default.span.withConfig({displayName:"TokenDetails__TokenName",componentId:"sc-32fe5f6c-3"})`
  ${x.cw}
  min-width: 40px;
`,Ve=(0,p.default)(ge.Hr).withConfig({displayName:"TokenDetails__DividerLine",componentId:"sc-32fe5f6c-4"})`
  margin-top: 40px;
  margin-bottom: 40px;
  @media screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    display: none;
  }
`;function Qe(e,n,t){const{chainId:s}=(0,a.useWeb3React)(),i=(0,S.useMemo)((()=>{if(e)return e===w.dt?(0,w.gX)(n):void 0}),[n,e,t]),o=Boolean(i)||n!==s,r=function(e,n){const t=(0,B.zA)(n||!e?void 0:e);return n||!e||t&&t?.symbol===B.eu?void 0:t}(e,o);return(0,S.useMemo)((()=>({token:i??r,didFetchFromChain:!i})),[r,i])}function Ye(e){return e?e.isToken?e.address:w.dt:""}function Ge({urlAddress:e,inputTokenAddress:n,chain:t,tokenQuery:x,tokenPriceQuery:f,timePeriod:C,onChangeTimePeriod:B}){if(!e)throw new Error("Invalid token details route: tokenAddress param is undefined");const E=(0,S.useMemo)((()=>e===w.dt?e:(0,m.UJ)(e)||void 0),[e]),{account:M,chainId:F}=(0,a.useWeb3React)(),H=(0,I.Tz)(t),Z=(0,D.U8)(n,H),O=(0,D.U8)(E===w.dt?"ETH":E,H),U=x.token,{data:z}=(0,i.T)({account:M}),{token:W,didFetchFromChain:R}=Qe(E,H,U),V=E?(0,b.y8)(E):null,Q=!1===V?.canProceed,Y=(0,L.s0)(),G=(0,p.useTheme)(),X=((0,A.r)(W??void 0,G.surface2,G.darkMode),(0,v.C)()),K=(0,T.e)(),[q,J]=(0,S.useTransition)(),ee=(0,S.useCallback)((e=>{const n=Ye(e.inputCurrency),s=Ye(e.outputCurrency);if((0,_.K)(n,E)||(0,_.K)(s,E))return;const i=e.outputCurrency??e.inputCurrency;i&&J((()=>Y((0,I.dG)({address:i.isNative?null:i.address,chain:t,inputAddress:e.inputCurrency&&e.inputCurrency!==i?n:null,isInfoExplorePageEnabled:X}))))}),[E,t,X,Y]),[ne,te]=(0,S.useState)(),[se,ie]=(0,S.useState)(!1),oe=(0,S.useCallback)((e=>{ne?.resolve(e),te(void 0)}),[ne,te]),[re,ae]=(0,S.useState)(u.oX.PRICE),[de,ce]=(0,S.useState)(u.E4.LINE);if(void 0===W||!E)return(0,s.jsx)(ke,{pageChainId:H,isInvalidAddress:!E});const ue=W&&(W.symbol??(0,s.jsx)(o.cC,{id:"F2FJu3"}));W&&W.name&&W.symbol&&(W.name,W.symbol);return(0,s.jsx)(d.fM,{page:r.yJ.TOKEN_DETAILS_PAGE,properties:{tokenAddress:E,tokenName:W?.name},shouldLogImpression:!0,children:(0,s.jsxs)(y.Gy,{children:[W&&!q?(0,s.jsxs)(y.WQ,{children:[K?(0,s.jsxs)(c.zG,{isInfoTDPEnabled:!0,"aria-label":"breadcrumb-nav",children:[(0,s.jsxs)(c.yY,{to:`/explore/${t.toLowerCase()}`,children:[(0,s.jsx)(o.cC,{id:"8tjQCz"})," ",(0,s.jsx)($.Z,{size:14})]}),(0,s.jsxs)(c.yY,{to:`/explore/tokens/${t.toLowerCase()}`,children:[(0,s.jsx)(o.cC,{id:"6RDwJM"})," ",(0,s.jsx)($.Z,{size:14})]}),(0,s.jsx)(c.f3,{address:E,currency:W,chainId:W.chainId})]}):(0,s.jsx)(c.zG,{"aria-label":"breadcrumb-nav",children:(0,s.jsxs)(c.yY,{to:`${X?"/explore":""}/tokens/${t.toLowerCase()}`,children:[(0,s.jsx)(P.Z,{"data-testid":"token-details-return-button",size:14})," Tokens"]})}),(0,s.jsx)(y.Pn,{isInfoTDPEnabled:K,"data-testid":"token-info-container",children:(0,s.jsxs)(y.yn,{isInfoTDPEnabled:K,children:[(0,s.jsx)(l.V,{currencies:[W],chainId:W.chainId,size:"32px"}),K?(0,s.jsxs)(We,{isInfoTDPEnabled:!0,children:[(0,s.jsx)(Re,{children:W.name??(0,s.jsx)(o.cC,{id:"zKpHYG"})}),(0,s.jsx)(ze,{isInfoTDPEnabled:!0,children:ue})]}):(0,s.jsxs)(We,{children:[W.name??(0,s.jsx)(o.cC,{id:"zKpHYG"}),(0,s.jsx)(ze,{children:ue})]})]})}),(0,s.jsx)(k.ZP,{chainId:H,address:E,tokenQueryData:U}),!K&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(ge.Hr,{}),(0,s.jsx)(h.ez,{address:E,chainId:H}),!W.isNative&&(0,s.jsx)(j,{address:E})]}),K&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(Ve,{}),(0,s.jsx)(le,{chainId:H,referenceToken:W.wrapped})]})]}):(0,s.jsx)(y.ZP,{}),(0,s.jsxs)(y.QN,{isInfoTDPEnabled:K,onClick:()=>Q&&ie(!0),children:[(0,s.jsx)("div",{style:{pointerEvents:Q?"none":"auto"},children:(0,s.jsx)(N.HY,{chainId:H,initialInputCurrency:Z,initialOutputCurrency:O,onCurrencyChange:ee,disableTokenInputs:H!==F})}),K&&(0,s.jsx)(Ue,{tokenAddress:E,chainId:H,isNative:W?.isNative,characterCount:200})]}),(0,s.jsx)(g.Z,{isOpen:se||!!ne,tokenAddress:E,onContinue:()=>oe(!0),onBlocked:()=>{ie(!1)},onCancel:()=>oe(!1),showCancel:!0})]})})}var Xe=t(62460),Ke=t(99584),qe=t(41523),Je=t(54314);const en=(e,n)=>{const t=e?.token?.name,s=e?.token?.symbol,i="Buy & Trade",o=n?"":": Live Price & Chart on Goblins";return t||s?!t&&s?Je.ag._({id:"op841Q",values:{baseTitle:i,tokenSymbol:s,searchDetail:o}}):t&&!s?Je.ag._({id:"9XhrCC",values:{baseTitle:i,tokenName:t,searchDetail:o}}):Je.ag._({id:"FtlHKp",values:{baseTitle:i,tokenName:t,tokenSymbol:s,searchDetail:o}}):Je.ag._({id:"VnyFhc",values:{baseTitle:i,searchDetail:o}})},nn=(0,p.default)(i.Z).withConfig({displayName:"TokenDetails__StyledPrefetchBalancesWrapper",componentId:"sc-eb1de2ca-0"})`
  display: contents;
`;function tn(){const{tokenAddress:e,chainName:n}=(0,L.UO)(),t=(0,I.Qj)(n),i=e===w.dt;console.log(t,"<===chain");const o=Z.uw[H.ChainId.SMARTBCH],[r,a]=(0,S.useState)(I.XH.DAY),[d,l]=(0,S.useMemo)((()=>[i?(0,Le.P)(t):e??"",(0,I.uw)(r)]),[t,i,r,e]),c=(0,Ke.Z)(),u=(0,S.useMemo)((()=>"string"===typeof c.inputCurrency?c.inputCurrency:void 0),[c]),{data:h}=(0,Xe.rS)({client:o,variables:{address:d},errorPolicy:"all"}),{data:p}=(0,Xe.m)({variables:{address:d,chain:t,duration:l},errorPolicy:"all"}),[x,m]=(0,S.useState)(p);return(0,S.useEffect)((()=>{p&&m(p)}),[m,p]),console.log(h,"<====tokenQuery"),h?(0,s.jsxs)(nn,{shouldFetchOnAccountUpdate:!0,shouldFetchOnHover:!1,children:[(0,s.jsx)(qe.q,{children:(0,s.jsx)("title",{children:en(h)})}),(0,s.jsx)(Ge,{urlAddress:e,chain:t,tokenQuery:h,tokenPriceQuery:x,inputTokenAddress:u,timePeriod:r,onChangeTimePeriod:a})]}):(0,s.jsx)(y.lJ,{})}},63486:(e,n,t)=>{function s(e,n){return!(!e||!n)&&(e===n||e.toLowerCase()===n.toLowerCase())}t.d(n,{K:()=>s})}}]);
//# sourceMappingURL=4967.50493a45.chunk.js.map