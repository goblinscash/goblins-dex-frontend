"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[4967],{24967:(e,t,n)=>{n.r(t),n.d(t,{default:()=>nt});var s=n(21339),i=n(82523),o=n(88693),r=n(56542),a=n(75422),d=n(4570),l=n(24264),c=n(33858),u=n(56374),p=n(66496),h=n(33552),x=n(10548),m=n(6970);const f=h.default.div.withConfig({displayName:"AddressSection__ContractAddressSection",componentId:"sc-65f6d5a3-0"})`
  display: flex;
  flex-direction: column;
  color: ${({theme:e})=>e.neutral2};
  font-size: 0.9em;
  gap: 4px;
  padding: 4px 0px;
`,C=h.default.button.withConfig({displayName:"AddressSection__ContractAddress",componentId:"sc-65f6d5a3-1"})`
  display: flex;
  color: ${({theme:e})=>e.neutral1};
  gap: 10px;
  align-items: center;
  background: transparent;
  border: none;
  min-height: 38px;
  padding: 0px;
`;function j({address:e}){return(0,s.jsxs)(f,{children:[(0,s.jsx)(x.Tv.SubHeaderSmall,{children:(0,s.jsx)(o.cC,{id:"TPQ9LW"})}),(0,s.jsx)(C,{children:(0,s.jsx)(x.Qv,{address:e,truncatedAddress:(0,m.Xn)(e,2,3)})})]})}var y=n(77489),k=n(46502),g=n(58114),w=n(46778),b=n(54078),v=n(379),T=n(89691),I=n(83787),D=n(12973),A=n(21309),B=n(78614),N=n(51119),S=n(39491),P=n(96439),$=n(18910),L=n(92686),_=n(63486),E=n(17358),M=n(82235),F=n(66644),H=n(82032),Z=n(70762),O=n(86147);O.ZP`
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
`;const U=[M.Oz.Transactions];function W({chainId:e,referenceToken:t}){const[n,i]=(0,S.useState)({sortBy:F.at.TotalValueLockedUsd,sortDirection:F.N9.Desc}),{pools:r,loading:a,error:d,loadMore:l}=function(e,t,n=F.at.TotalValueLockedUsd,s=F.N9.Desc){const i=Z.uw[t||H.ChainId.MAINNET],{loading:o,error:r,data:a,fetchMore:d}=(0,F.wU)({variables:{tokenAddress:e.toLowerCase(),orderBy:n,orderDirection:s},client:i,fetchPolicy:"cache-first"}),l=(0,S.useRef)(!1),c=(0,S.useCallback)((({onComplete:e})=>{l.current||(l.current=!0,d({variables:{skip:a?.pools?.length??0},updateQuery:(t,{fetchMoreResult:n})=>{if(!n||!t||!Object.keys(t).length)return t;e?.();const s={pools:[...t.pools,...n.pools]};return l.current=!1,s}}))}),[a?.pools?.length,d]);return(0,S.useMemo)((()=>{const e=(a?.pools??[]).map((e=>{const t=Math.random(),n=parseFloat(e.totalValueLockedUSD??"0");return{hash:e.id,token0:e.token0,token1:e.token1,txCount:parseFloat(e.txCount??"0"),tvl:n,feeTier:parseFloat(e.feeTier??"0"),volume24h:t*n,volumeWeek:t*n*7,turnover:t}})).sort(((e,t)=>t.tvl-e.tvl));return{loading:o,error:r,pools:e,loadMore:c}}),[a?.pools,r,c,o])}(t.address,e,n.sortBy,n.sortDirection),c=(0,S.useCallback)((e=>{n.sortBy===e?i({sortBy:e,sortDirection:n.sortDirection===F.N9.Asc?F.N9.Desc:F.N9.Asc}):i({sortBy:e,sortDirection:F.N9.Desc})}),[n.sortBy,n.sortDirection]);return d?(0,s.jsx)(x.Tv.BodyPrimary,{children:(0,s.jsx)(o.cC,{id:"6oxcad"})}):(0,s.jsx)("div",{"data-testid":`tdp-pools-table-${t.address.toLowerCase()}`,children:(0,s.jsx)(M.NE,{pools:r,loading:a,chainId:e,maxHeight:600,hiddenColumns:U,loadMore:l,sortState:n,handleHeaderClick:c})})}var z,R=n(9726),V=n(12762),Q=n(82786),Y=n(44878),G=n(87148),X=n(54210),K=n(95326),q=n(10705);O.Ps`
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
`,function(e){e.BUY="Buy",e.SELL="Sell"}(z||(z={}));var J=n(59155),ee=n(84087),te=n(33151),ne=n(19369),se=n(54359);const ie=(0,h.default)(x.Tv.BodyPrimary).withConfig({displayName:"TransactionsTable__StyledSwapAmount",componentId:"sc-901a5086-0"})`
  display: inline-block;
  ${x.cw}
  max-width: 125px;
`;function oe({chainId:e,referenceToken:t}){const n=(0,ee.eQ)(),i=(0,J.XB)(),{formatNumber:r,formatFiatPrice:a}=(0,ne.Gb)(),d=(0,I.Qj)((0,L.UO)().chainName),[l,c]=(0,S.useReducer)((e=>!e),!1),u=(0,S.useRef)(null);(0,te.t)(u,l?c:void 0);const[p,h]=(0,S.useState)([z.BUY,z.SELL]),[f,C]=(0,S.useState)({sortBy:F.AI.Timestamp,sortDirection:F.N9.Desc}),{transactions:j,loading:y,loadMore:k}=function(e,t,n=F.AI.Timestamp,s=F.N9.Desc,i=[z.BUY,z.SELL],o=25,r){const a=Z.uw[t||H.ChainId.MAINNET],{data:d,loading:l,fetchMore:c}=(0,F.uk)({variables:{address:e.toLowerCase(),first:o,skip:r,orderBy:n,orderDirection:s},client:a}),u=(0,S.useRef)(!1),p=(0,S.useCallback)((({onComplete:e})=>{u.current||(u.current=!0,c({variables:{skip:Math.max(d?.swapsAs0?.length??0,d?.swapsAs1?.length??0)},updateQuery:(t,{fetchMoreResult:n})=>{if(!n)return t;e?.();const s={swapsAs0:[...t.swapsAs0,...n.swapsAs0],swapsAs1:[...t.swapsAs1,...n.swapsAs1]};return u.current=!1,s}}))}),[d,c]),h=(0,S.useMemo)((()=>[...d?.swapsAs0.filter((e=>e.amount0>0?i.includes(z.SELL):i.includes(z.BUY)))??[],...d?.swapsAs1.filter((e=>e.amount1>0?i.includes(z.SELL):i.includes(z.BUY)))??[]].sort(((e,t)=>t.timestamp-e.timestamp))),[d?.swapsAs0,d?.swapsAs1,i]);return(0,S.useMemo)((()=>({transactions:h,loading:l,loadMore:p})),[h,l,p])}(t.address,e,f.sortBy,f.sortDirection,p),g=(0,S.useCallback)((e=>{f.sortBy===e?C({sortBy:e,sortDirection:f.sortDirection===F.N9.Asc?F.N9.Desc:F.N9.Asc}):C({sortBy:e,sortDirection:F.N9.Desc})}),[f.sortBy,f.sortDirection]),w=(0,S.useMemo)((()=>j.map((e=>{const t={address:e.pool.token0.id,symbol:e.pool.token0.symbol,amount:e.amount0},n={address:e.pool.token1.id,symbol:e.pool.token1.symbol,amount:e.amount1};let s,i;return t.amount>0?(s=t,i=n):(s=n,i=t),{hash:e.transaction.id,timestamp:e.timestamp,input:s,output:i,usdValue:e.amountUSD,makerAddress:e.origin}}))),[j]),b=(0,S.useMemo)((()=>{const C=(0,V.Cl)();return[C.accessor((e=>e.timestamp),{id:"timestamp",header:()=>(0,s.jsx)(Y.b,{minWidth:150,justifyContent:"flex-start",grow:!0,children:(0,s.jsxs)(X.d4,{$justify:"flex-start",onClick:()=>g(F.AI.Timestamp),children:[f.sortBy===F.AI.Timestamp&&(0,s.jsx)(X.iX,{direction:f.sortDirection}),(0,s.jsx)(x.Tv.BodySecondary,{children:(0,s.jsx)(o.cC,{id:"LhMjLm"})})]})}),cell:e=>(0,s.jsx)(Y.b,{loading:y,minWidth:150,justifyContent:"flex-start",grow:!0,children:(0,s.jsx)(x.Tv.BodySecondary,{children:(0,K.G)(1e3*Number(e.getValue?.()),n??q.ZW)})})}),C.accessor((e=>e.output.address),{id:"swap-type",header:()=>(0,s.jsx)(Y.b,{minWidth:50,justifyContent:"flex-start",grow:!0,children:(0,s.jsxs)(X.j4,{modalOpen:l,onClick:c,ref:u,children:[(0,s.jsx)(G.w,{allFilters:Object.values(z),activeFilter:p,setFilters:h,isOpen:l}),(0,s.jsx)(x.Tv.BodySecondary,{children:(0,s.jsx)(o.cC,{id:"+zy2Nq"})})]})}),cell:e=>(0,s.jsx)(Y.b,{loading:y,minWidth:50,justifyContent:"flex-start",grow:!0,children:(0,s.jsx)(x.Tv.BodyPrimary,{children:String(e.getValue?.()).toLowerCase()===t.address.toLowerCase()?(0,s.jsx)(o.cC,{id:"qiOIiY"}):(0,s.jsx)(o.cC,{id:"xNB0TS"})})})}),C.accessor((e=>e.input.address.toLowerCase()===t.address.toLowerCase()?e.input.amount:e.output.amount),{id:"reference-amount",header:()=>(0,s.jsx)(Y.b,{minWidth:150,justifyContent:"flex-end",children:(0,s.jsx)(x.Tv.BodySecondary,{children:t.symbol})}),cell:e=>(0,s.jsx)(Y.b,{loading:y,minWidth:150,justifyContent:"flex-end",children:(0,s.jsx)(x.Tv.BodyPrimary,{children:r({input:Math.abs(e.getValue?.())||0})})})}),C.accessor((e=>{const n=e.input.address.toLowerCase()===t.address.toLowerCase()?e.output:e.input;return(0,s.jsxs)(ie,{children:[r({input:Math.abs(n.amount)||0})," ",(0,s.jsx)(X.m_,{to:`/explore/tokens/${d.toLowerCase()}/${n.address}`,children:n.symbol})]})}),{id:"non-reference-amount",header:()=>(0,s.jsx)(Y.b,{minWidth:150,justifyContent:"flex-end",children:(0,s.jsx)(x.Tv.BodySecondary,{children:(0,s.jsx)(o.cC,{id:"YHpbe1"})})}),cell:e=>(0,s.jsx)(Y.b,{loading:y,minWidth:150,justifyContent:"flex-end",children:e.getValue?.()})}),C.accessor((e=>e.usdValue),{id:"fiat-value",header:()=>(0,s.jsx)(Y.b,{minWidth:125,justifyContent:"flex-end",children:(0,s.jsxs)(X.d4,{$justify:"flex-end",onClick:()=>g(F.AI.AmountUsd),children:[f.sortBy===F.AI.AmountUsd&&(0,s.jsx)(X.iX,{direction:f.sortDirection}),(0,s.jsx)(x.Tv.BodySecondary,{children:i})]})}),cell:e=>(0,s.jsx)(Y.b,{loading:y,minWidth:125,justifyContent:"flex-end",children:(0,s.jsx)(x.Tv.BodyPrimary,{children:a({price:e.getValue?.()})})})}),C.accessor((e=>e.makerAddress),{id:"maker-address",header:()=>(0,s.jsx)(Y.b,{minWidth:100,justifyContent:"flex-end",children:(0,s.jsx)(x.Tv.BodySecondary,{children:(0,s.jsx)(o.cC,{id:"sb9Y58"})})}),cell:t=>(0,s.jsx)(Y.b,{loading:y,minWidth:100,justifyContent:"flex-end",children:(0,s.jsx)(X.Bq,{href:(0,se.E)(e,t.getValue?.(),se.r.ADDRESS),children:(0,m.Xn)(t.getValue?.(),0)})})})]}),[i,e,d,p,l,a,r,g,y,n,t.address,t.symbol,f.sortBy,f.sortDirection]);return(0,s.jsx)(Q.i,{columns:b,data:w,loading:y,loadMore:k,maxHeight:600})}const re=h.default.div.withConfig({displayName:"ActivitySection__Container",componentId:"sc-23e1ccec-0"})`
  width: 100%;
  display: flex;
  flex-direction: column;
`,ae=(0,h.default)(R.xv).withConfig({displayName:"ActivitySection__Tab",componentId:"sc-23e1ccec-1"})`
  cursor: pointer;
  font-size: 24px !important;
  line-height: 32px !important;
  color: ${({isActive:e,theme:t})=>e?t.neutral1:t.neutral2};
  ${x.iV};
`;var de;function le({chainId:e,referenceToken:t}){const[n,i]=(0,S.useState)(de.Pools);return t?(0,s.jsxs)(re,{children:[(0,s.jsxs)(E.ZP,{gap:"24px",marginBottom:"12px",id:"activity-header",children:[(0,s.jsx)(ae,{isActive:n===de.Pools,onClick:()=>i(de.Pools),children:(0,s.jsx)(o.cC,{id:"lQfOr9"})}),(0,s.jsx)(ae,{isActive:n===de.Txs,onClick:()=>i(de.Txs),children:(0,s.jsx)(o.cC,{id:"4wyw8H"})})]}),n===de.Pools&&(0,s.jsx)(W,{chainId:e,referenceToken:t}),n===de.Txs&&(0,s.jsx)(oe,{chainId:e,referenceToken:t})]}):null}!function(e){e[e.Pools=0]="Pools",e[e.Txs=1]="Txs"}(de||(de={}));var ce,ue=n(70357),pe=n(53609),he=n(47365);function xe(){return xe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},xe.apply(this,arguments)}function me(e,t){let{title:n,titleId:s,...i}=e;return S.createElement("svg",xe({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",ref:t,"aria-labelledby":s},i),n?S.createElement("title",{id:s},n):null,ce||(ce=S.createElement("path",{d:"M14.75 12C14.75 13.517 13.517 14.75 12 14.75C10.483 14.75 9.25004 13.517 9.25004 12C9.25004 11.651 9.32196 11.32 9.44096 11.012C9.63496 11.166 9.86903 11.272 10.136 11.272C10.763 11.272 11.272 10.763 11.272 10.136C11.272 9.86899 11.166 9.63492 11.012 9.44092C11.32 9.32192 11.651 9.25 12 9.25C13.517 9.25 14.75 10.483 14.75 12ZM20.5921 13.4771C19.3651 15.5311 16.609 19 12 19C7.39104 19 4.635 15.5311 3.408 13.4771C2.864 12.5671 2.864 11.4329 3.408 10.5229C4.635 8.46895 7.39104 5 12 5C16.609 5 19.3651 8.46895 20.5921 10.5229C21.1361 11.4329 21.1361 12.5671 20.5921 13.4771ZM16.25 12C16.25 9.657 14.344 7.75 12 7.75C9.65604 7.75 7.75004 9.657 7.75004 12C7.75004 14.343 9.65604 16.25 12 16.25C14.344 16.25 16.25 14.343 16.25 12Z",fill:"currentColor"})))}const fe=S.forwardRef(me),Ce=(n.p,h.default.div.withConfig({displayName:"InvalidTokenDetails__InvalidDetailsContainer",componentId:"sc-6489a4a1-0"})`
  padding-top: 128px;
  display: flex;
  flex-direction: column;
  align-items: center;
`),je=h.default.span.withConfig({displayName:"InvalidTokenDetails__InvalidDetailsText",componentId:"sc-6489a4a1-1"})`
  margin-top: 28px;
  margin-bottom: 20px;

  text-align: center;

  color: ${({theme:e})=>e.neutral2};
  font-size: 20px;
  font-weight: 535;
  line-height: 28px;
`,ye=(0,h.default)(ue.DF).withConfig({displayName:"InvalidTokenDetails__TokenExploreButton",componentId:"sc-6489a4a1-2"})`
  width: fit-content;
  padding: 12px 16px;
  border-radius: 12px;

  color: ${({theme:e})=>e.neutral1};
  font-size: 16px;
  font-weight: 535;
`;function ke({pageChainId:e,isInvalidAddress:t}){const{chainId:n}=(0,a.useWeb3React)(),i=(0,L.s0)(),r=(0,he.Z)(),d=!t&&e===n,l=n?(0,pe.bt)(n)?.label:void 0;return(0,s.jsxs)(Ce,{children:[(0,s.jsx)(fe,{}),t||d?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(je,{children:(0,s.jsx)(o.cC,{id:"5pThdE"})}),(0,s.jsx)(ye,{onClick:()=>i("/tokens"),children:(0,s.jsx)(x.Tv.SubHeader,{children:(0,s.jsx)(o.cC,{id:"1ru2CS"})})})]}):(0,s.jsxs)(s.Fragment,{children:[l&&(0,s.jsx)(je,{children:(0,s.jsx)(o.cC,{id:"xNuZYG",values:{connectedChainLabel:l}})}),(0,s.jsx)(ye,{onClick:()=>r(e),children:(0,s.jsx)(x.Tv.SubHeader,{children:(0,s.jsx)(o.cC,{id:"1+P9RR",values:{0:(0,pe.bt)(e).label}})})})]})]})}var ge=n(71587),we=n(65023),be=n(88584);const ve=e=>(0,s.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"transparent",...e,children:(0,s.jsx)("path",{d:"M5.12245 9.5625C5.23495 11.8725 6.01495 14.2275 7.37245 16.32C4.19245 15.615 1.76996 12.8925 1.52246 9.5625H5.12245ZM7.37245 1.67999C4.19245 2.38499 1.76996 5.1075 1.52246 8.4375H5.12245C5.23495 6.1275 6.01495 3.77249 7.37245 1.67999ZM9.14997 1.5H8.84995L8.62496 1.82249C7.19996 3.84749 6.36745 6.1725 6.24745 8.4375H11.7525C11.6325 6.1725 10.8 3.84749 9.37496 1.82249L9.14997 1.5ZM6.24745 9.5625C6.36745 11.8275 7.19996 14.1525 8.62496 16.1775L8.84995 16.5H9.14997L9.37496 16.1775C10.8 14.1525 11.6325 11.8275 11.7525 9.5625H6.24745ZM12.8775 9.5625C12.765 11.8725 11.985 14.2275 10.6275 16.32C13.8075 15.615 16.23 12.8925 16.4775 9.5625H12.8775ZM16.4775 8.4375C16.23 5.1075 13.8075 2.38499 10.6275 1.67999C11.985 3.77249 12.765 6.1275 12.8775 8.4375H16.4775Z",fill:e.fill??"#607BEE"})}),Te=e=>(0,s.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"transparent",...e,children:(0,s.jsx)("path",{d:"M12.8761 3H14.9451L10.4251 8.16609L15.7425 15.196H11.579L8.31797 10.9324L4.58662 15.196H2.51644L7.35104 9.67026L2.25 3H6.51922L9.46689 6.89708L12.8761 3ZM12.15 13.9576H13.2964L5.89628 4.17332H4.66605L12.15 13.9576Z",fill:e.fill??"#607BEE"})});var Ie=n(74163),De=n(57777),Ae=n(25093),Be=n(91943),Ne=n(53904),Se=n(97472),Pe=n(39681),$e=n(17513),Le=n(95114);const _e=(0,h.default)(we.ZP).withConfig({displayName:"TokenDescription__TokenInfoSection",componentId:"sc-aefff000-0"})`
  gap: 16px;
  width: 100%;

  @media (max-width: ${Pe.j$.lg-1}px) and (min-width: ${Pe.j$.sm}px) {
    max-width: 45%;
  }
`,Ee=(0,h.default)(E.ZP).withConfig({displayName:"TokenDescription__TokenNameRow",componentId:"sc-aefff000-1"})`
  gap: 8px;
  width: 100%;
`,Me=(0,h.default)(Ee).withConfig({displayName:"TokenDescription__TokenButtonRow",componentId:"sc-aefff000-2"})`
  flex-wrap: wrap;
`,Fe=(0,h.default)(E.ZP).withConfig({displayName:"TokenDescription__TokenInfoButton",componentId:"sc-aefff000-3"})`
  gap: 8px;
  padding: 8px 12px;
  border-radius: 20px;
  color: ${({tokenColor:e})=>e};
  background-color: ${({tokenColor:e})=>(0,$e.j)(12,e)};
  font-size: 14px;
  font-weight: 535;
  line-height: 16px;
  width: max-content;
  ${x.iV}
`,He=(0,h.default)(x.Tv.BodyPrimary).withConfig({displayName:"TokenDescription__TokenDescriptionContainer",componentId:"sc-aefff000-4"})`
  ${x.cw}
  max-width: 100%;
  // max-height: fit-content;
  line-height: 24px;
  white-space: pre-wrap;
`,Ze=h.default.p.withConfig({displayName:"TokenDescription__DescriptionVisibilityWrapper",componentId:"sc-aefff000-5"})`
  display: ${({$visible:e})=>e?"inline":"none"};
`,Oe=75;function Ue({tokenAddress:e,chainId:t=H.ChainId.MAINNET,isNative:n=!1,characterCount:i=Oe}){const r=(0,h.useTheme)().neutral1,a=(0,I.Ld)(t),{data:d}=(0,Ae.wT)({variables:{address:n?(0,Le.P)(a):e,chain:a},errorPolicy:"all"}),l=d?.token?.project,c=l?.description,u=(0,se.E)(t,e,n?se.r.NATIVE:se.r.TOKEN),[,p]=(0,Be.Z)(),f=(0,S.useCallback)((()=>{p(e)}),[e,p]),[C,j]=(0,S.useReducer)((e=>!e),!0),y=(0,ge.Nt)(c??"",i),k=!!c&&c.length>i,g=k&&C,{inputTax:w,outputTax:b}=(0,Ne.j)(e,e),{formatPercent:v}=(0,ne.Gb)(),{sellFeeString:T,buyFeeString:D}={sellFeeString:v(w),buyFeeString:v(b)},A=Boolean(parseFloat(T))||Boolean(parseFloat(b.toFixed(2))),B=T===D;return(0,s.jsxs)(_e,{children:[(0,s.jsx)(x.Tv.HeadlineSmall,{children:(0,s.jsx)(o.cC,{id:"CE+M2e"})}),(0,s.jsxs)(Me,{children:[!n&&(0,s.jsxs)(Fe,{tokenColor:r,onClick:f,children:[(0,s.jsx)(Se.Z,{width:"18px",height:"18px",color:r}),(0,m.Xn)(e)]}),(0,s.jsx)(x.dL,{href:u,children:(0,s.jsxs)(Fe,{tokenColor:r,children:[(0,s.jsx)(be.P,{width:"18px",height:"18px",fill:r}),t===H.ChainId.MAINNET?(0,s.jsx)(o.cC,{id:"nS3bjC"}):(0,s.jsx)(o.cC,{id:"vtJ2yO"})]})}),!!l?.homepageUrl&&(0,s.jsx)(x.dL,{href:l.homepageUrl,children:(0,s.jsxs)(Fe,{tokenColor:r,children:[(0,s.jsx)(ve,{width:"18px",height:"18px",fill:r}),(0,s.jsx)(o.cC,{id:"On0aF2"})]})}),!!l?.twitterName&&(0,s.jsx)(x.dL,{href:`https://x.com/${l.twitterName}`,children:(0,s.jsxs)(Fe,{tokenColor:r,children:[(0,s.jsx)(Te,{width:"18px",height:"18px",fill:r}),(0,s.jsx)(o.cC,{id:"0F2sI+"})]})})]}),(0,s.jsxs)(He,{children:[!c&&(0,s.jsx)(ge.aZ,{children:(0,s.jsx)(o.cC,{id:"kXI9SA"})}),c&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(Ze,{"data-testid":"token-description-full",$visible:!g,children:c}),(0,s.jsx)(Ze,{"data-testid":"token-description-truncated",$visible:g,children:y})]}),k&&(0,s.jsx)(ge.ou,{onClick:j,"data-testid":"token-description-show-more-button",children:C?(0,s.jsx)(o.cC,{id:"fMPkxb"}):(0,s.jsx)(o.cC,{id:"vLyv1R"})})]}),A&&(0,s.jsx)(De.ud,{placement:"left",size:De.Oz.Small,text:(0,s.jsx)(x.Tv.Caption,{color:"neutral2",children:(0,s.jsx)(Ie.gE,{})}),children:(0,s.jsx)(we.ZP,{gap:"sm",children:B?(0,s.jsxs)(x.Tv.BodyPrimary,{children:[d?.token?.symbol,"\xa0",(0,s.jsx)(o.cC,{id:"oSCKSR"}),"\xa0",T]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(x.Tv.BodyPrimary,{children:[d?.token?.symbol,"\xa0",(0,s.jsx)(o.cC,{id:"JzWZvv"}),"\xa0",D]})," ",(0,s.jsxs)(x.Tv.BodyPrimary,{children:[d?.token?.symbol,"\xa0",(0,s.jsx)(o.cC,{id:"sHAUpq"}),"\xa0",T]})," "]})})})]})}const We=h.default.span.withConfig({displayName:"TokenDetails__TokenSymbol",componentId:"sc-c0ecfc22-0"})`
  text-transform: uppercase;
  color: ${({theme:e})=>e.neutral2};
  margin-left: 8px;

  ${({isInfoTDPEnabled:e})=>e&&h.css`
      @media screen and (max-width: ${({theme:e})=>e.breakpoint.xs}px) {
        display: none;
      }
    `}
`,ze=(h.default.div.withConfig({displayName:"TokenDetails__ChartActions",componentId:"sc-c0ecfc22-1"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,h.default.div.withConfig({displayName:"TokenDetails__TokenTitle",componentId:"sc-c0ecfc22-2"})`
  display: flex;

  ${({isInfoTDPEnabled:e})=>e?h.css`
          overflow: hidden;
          white-space: nowrap;
        `:h.css`
          @media screen and (max-width: ${({theme:e})=>e.breakpoint.md}px) {
            display: inline;
          }
        `}
`),Re=h.default.span.withConfig({displayName:"TokenDetails__TokenName",componentId:"sc-c0ecfc22-3"})`
  ${x.cw}
  min-width: 40px;
`,Ve=(0,h.default)(ge.Hr).withConfig({displayName:"TokenDetails__DividerLine",componentId:"sc-c0ecfc22-4"})`
  margin-top: 40px;
  margin-bottom: 40px;
  @media screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    display: none;
  }
`;function Qe(e,t,n){const{chainId:s}=(0,a.useWeb3React)(),i=(0,S.useMemo)((()=>{if(e)return e===w.dt?(0,w.gX)(t):void 0}),[t,e,n]),o=Boolean(i)||t!==s,r=function(e,t){const n=(0,B.zA)(t||!e?void 0:e);return t||!e||n&&n?.symbol===B.eu?void 0:n}(e,o);return(0,S.useMemo)((()=>({token:i??r,didFetchFromChain:!i})),[r,i])}function Ye(e){return e?e.isToken?e.address:w.dt:""}function Ge({urlAddress:e,inputTokenAddress:t,chain:n,tokenQuery:x,tokenPriceQuery:f,timePeriod:C,onChangeTimePeriod:B}){if(!e)throw new Error("Invalid token details route: tokenAddress param is undefined");const E=(0,S.useMemo)((()=>e===w.dt?e:(0,m.UJ)(e)||void 0),[e]),{account:M,chainId:F}=(0,a.useWeb3React)(),H=(0,I.Tz)(n),Z=(0,D.U8)(t,H),O=(0,D.U8)(E===w.dt?"ETH":E,H),U=x.token,{data:W}=(0,i.T)({account:M}),{token:z,didFetchFromChain:R}=Qe(E,H,U),V=E?(0,b.y8)(E):null,Q=!1===V?.canProceed,Y=(0,L.s0)(),G=(0,h.useTheme)(),X=((0,A.r)(z??void 0,G.surface2,G.darkMode),(0,v.C)()),K=(0,T.e)(),[q,J]=(0,S.useTransition)(),ee=(0,S.useCallback)((e=>{const t=Ye(e.inputCurrency),s=Ye(e.outputCurrency);if((0,_.K)(t,E)||(0,_.K)(s,E))return;const i=e.outputCurrency??e.inputCurrency;i&&J((()=>Y((0,I.dG)({address:i.isNative?null:i.address,chain:n,inputAddress:e.inputCurrency&&e.inputCurrency!==i?t:null,isInfoExplorePageEnabled:X}))))}),[E,n,X,Y]),[te,ne]=(0,S.useState)(),[se,ie]=(0,S.useState)(!1),oe=(0,S.useCallback)((e=>{te?.resolve(e),ne(void 0)}),[te,ne]),[re,ae]=(0,S.useState)(u.oX.PRICE),[de,ce]=(0,S.useState)(u.E4.LINE);if(void 0===z||!E)return(0,s.jsx)(ke,{pageChainId:H,isInvalidAddress:!E});const ue=z&&(z.symbol??(0,s.jsx)(o.cC,{id:"F2FJu3"}));z&&z.name&&z.symbol&&(z.name,z.symbol);return(0,s.jsx)(d.fM,{page:r.yJ.TOKEN_DETAILS_PAGE,properties:{tokenAddress:E,tokenName:z?.name},shouldLogImpression:!0,children:(0,s.jsxs)(y.Gy,{children:[z&&!q?(0,s.jsxs)(y.WQ,{children:[K?(0,s.jsxs)(c.zG,{isInfoTDPEnabled:!0,"aria-label":"breadcrumb-nav",children:[(0,s.jsxs)(c.yY,{to:`/explore/${n.toLowerCase()}`,children:[(0,s.jsx)(o.cC,{id:"i0qMbr"})," ",(0,s.jsx)(P.Z,{size:14})]}),(0,s.jsxs)(c.yY,{to:`/explore/tokens/${n.toLowerCase()}`,children:[(0,s.jsx)(o.cC,{id:"6RDwJM"})," ",(0,s.jsx)(P.Z,{size:14})]}),(0,s.jsx)(c.f3,{address:E,currency:z,chainId:z.chainId})]}):(0,s.jsx)(c.zG,{"aria-label":"breadcrumb-nav",children:(0,s.jsxs)(c.yY,{to:`${X?"/explore":""}/tokens/${n.toLowerCase()}`,children:[(0,s.jsx)($.Z,{"data-testid":"token-details-return-button",size:14})," Tokens"]})}),(0,s.jsx)(y.Pn,{isInfoTDPEnabled:K,"data-testid":"token-info-container",children:(0,s.jsxs)(y.yn,{isInfoTDPEnabled:K,children:[(0,s.jsx)(l.V,{currencies:[z],chainId:z.chainId,size:"32px"}),K?(0,s.jsxs)(ze,{isInfoTDPEnabled:!0,children:[(0,s.jsx)(Re,{children:z.name??(0,s.jsx)(o.cC,{id:"zKpHYG"})}),(0,s.jsx)(We,{isInfoTDPEnabled:!0,children:ue})]}):(0,s.jsxs)(ze,{children:[z.name??(0,s.jsx)(o.cC,{id:"zKpHYG"}),(0,s.jsx)(We,{children:ue})]})]})}),(0,s.jsx)(k.ZP,{chainId:H,address:E,tokenQueryData:U}),!K&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(ge.Hr,{}),(0,s.jsx)(p.ez,{address:E,chainId:H}),!z.isNative&&(0,s.jsx)(j,{address:E})]}),K&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(Ve,{}),(0,s.jsx)(le,{chainId:H,referenceToken:z.wrapped})]})]}):(0,s.jsx)(y.ZP,{}),(0,s.jsxs)(y.QN,{isInfoTDPEnabled:K,onClick:()=>Q&&ie(!0),children:[(0,s.jsx)("div",{style:{pointerEvents:Q?"none":"auto"},children:(0,s.jsx)(N.HY,{chainId:H,initialInputCurrency:Z,initialOutputCurrency:O,onCurrencyChange:ee,disableTokenInputs:H!==F})}),K&&(0,s.jsx)(Ue,{tokenAddress:E,chainId:H,isNative:z?.isNative,characterCount:200})]}),(0,s.jsx)(g.Z,{isOpen:se||!!te,tokenAddress:E,onContinue:()=>oe(!0),onBlocked:()=>{ie(!1)},onCancel:()=>oe(!1),showCancel:!0})]})})}var Xe=n(62460),Ke=n(99584),qe=n(41523),Je=n(54314);const et=(e,t)=>{const n=e?.token?.name,s=e?.token?.symbol,i="Buy & Trade",o=t?"":": Live Price & Chart on Goblins";return n||s?!n&&s?Je.ag._({id:"op841Q",values:{baseTitle:i,tokenSymbol:s,searchDetail:o}}):n&&!s?Je.ag._({id:"9XhrCC",values:{baseTitle:i,tokenName:n,searchDetail:o}}):Je.ag._({id:"FtlHKp",values:{baseTitle:i,tokenName:n,tokenSymbol:s,searchDetail:o}}):Je.ag._({id:"VnyFhc",values:{baseTitle:i,searchDetail:o}})},tt=(0,h.default)(i.Z).withConfig({displayName:"TokenDetails__StyledPrefetchBalancesWrapper",componentId:"sc-6ad11cc9-0"})`
  display: contents;
`;function nt(){const{tokenAddress:e,chainName:t}=(0,L.UO)(),n=(0,I.Qj)(t),i=e===w.dt,o=Z.uw[H.ChainId.SMARTBCH],[r,a]=(0,S.useState)(I.XH.DAY),[d,l]=(0,S.useMemo)((()=>[i?(0,Le.P)(n):e??"",(0,I.uw)(r)]),[n,i,r,e]),c=(0,Ke.Z)(),u=(0,S.useMemo)((()=>"string"===typeof c.inputCurrency?c.inputCurrency:void 0),[c]),{data:p}=(0,Xe.rS)({client:o,variables:{address:d},errorPolicy:"all"}),{data:h}=(0,Xe.m)({variables:{address:d,chain:n,duration:l},errorPolicy:"all"}),[x,m]=(0,S.useState)(h);return(0,S.useEffect)((()=>{h&&m(h)}),[m,h]),p?(0,s.jsxs)(tt,{shouldFetchOnAccountUpdate:!0,shouldFetchOnHover:!1,children:[(0,s.jsx)(qe.q,{children:(0,s.jsx)("title",{children:et(p)})}),(0,s.jsx)(Ge,{urlAddress:e,chain:n,tokenQuery:p,tokenPriceQuery:x,inputTokenAddress:u,timePeriod:r,onChangeTimePeriod:a})]}):(0,s.jsx)(y.lJ,{})}},63486:(e,t,n)=>{function s(e,t){return!(!e||!t)&&(e===t||e.toLowerCase()===t.toLowerCase())}n.d(t,{K:()=>s})}}]);
//# sourceMappingURL=4967.3d2e2782.chunk.js.map