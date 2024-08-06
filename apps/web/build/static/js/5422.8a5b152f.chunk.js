"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[5422],{35422:(e,n,t)=>{t.r(n),t.d(n,{default:()=>pn});var s=t(21339),i=t(82523),o=t(88693),r=t(56542),a=t(75422),d=t(4570),l=t(24264),c=t(33858),u=t(56374),p=t(66496),h=t(33552),x=t(10548),m=t(6970);const f=h.default.div.withConfig({displayName:"AddressSection__ContractAddressSection",componentId:"sc-65f6d5a3-0"})`
  display: flex;
  flex-direction: column;
  color: ${({theme:e})=>e.neutral2};
  font-size: 0.9em;
  gap: 4px;
  padding: 4px 0px;
`,j=h.default.button.withConfig({displayName:"AddressSection__ContractAddress",componentId:"sc-65f6d5a3-1"})`
  display: flex;
  color: ${({theme:e})=>e.neutral1};
  gap: 10px;
  align-items: center;
  background: transparent;
  border: none;
  min-height: 38px;
  padding: 0px;
`;function y({address:e}){return(0,s.jsxs)(f,{children:[(0,s.jsx)(x.Tv.SubHeaderSmall,{children:(0,s.jsx)(o.cC,{id:"TPQ9LW"})}),(0,s.jsx)(j,{children:(0,s.jsx)(x.Qv,{address:e,truncatedAddress:(0,m.Xn)(e,2,3)})})]})}var C=t(77489),g=t(46502),k=t(54078),w=t(96643),b=t(79799),v=t(26390),T=t(9726);const I=h.default.div.withConfig({displayName:"TokenSafetyMessage__Label",componentId:"sc-e122e2d8-0"})`
  width: 100%;
  padding: 12px 20px 16px;
  background-color: ${({backgroundColor:e})=>e};
  border-radius: 16px;
  border: 1px solid ${({theme:e})=>e.surface3};
  color: ${({color:e})=>e};
`,D=h.default.div.withConfig({displayName:"TokenSafetyMessage__TitleRow",componentId:"sc-e122e2d8-1"})`
  align-items: center;
  font-weight: 535;
  display: inline-flex;
`,A=(0,h.default)(T.xv).withConfig({displayName:"TokenSafetyMessage__Title",componentId:"sc-e122e2d8-2"})`
  font-weight: 535;
  font-size: 16px;
  line-height: 24px;
  margin-left: 7px;
`,N=h.default.div.withConfig({displayName:"TokenSafetyMessage__DetailsRow",componentId:"sc-e122e2d8-3"})`
  margin-top: 8px;
  font-size: 12px;
  line-height: 16px;
  color: ${({theme:e})=>e.neutral2};
`,S=(0,h.default)(x.dL).withConfig({displayName:"TokenSafetyMessage__StyledLink",componentId:"sc-e122e2d8-4"})`
  color: ${({theme:e})=>e.accent1};

  font-weight: 535;
`;function B({warning:e,tokenAddress:n}){const t=(0,w.g)(e.level),i=(0,w.A)(e.level),{heading:r,description:a}=(0,k.N6)(e);return(0,s.jsxs)(I,{"data-cy":"token-safety-message",color:i,backgroundColor:t,children:[(0,k._x)(e)&&(0,s.jsxs)(D,{children:[e.canProceed?(0,s.jsx)(b.Z,{size:"16px"}):(0,s.jsx)(v.Z,{size:"16px"}),(0,s.jsx)(A,{marginLeft:"7px",children:e.message})]}),(0,s.jsxs)(N,{children:[r,Boolean(r)&&" ",a,Boolean(a)&&" ",n&&(0,s.jsx)(S,{href:k.W3,children:(0,s.jsx)(o.cC,{id:"zwWKhA"})})]})]})}var $=t(58114),_=t(46778),P=t(379),L=t(89691),M=t(83787),E=t(12973),F=t(21309),H=t(78614),Z=t(16694),z=t(39491),U=t(96439),O=t(18910),W=t(92686),R=t(63486),V=t(17358),Q=t(21123),Y=t(66644),G=t(82032),X=t(70762),K=t(86147);K.ZP`
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
`;const q=[Q.Oz.Transactions];function J({chainId:e,referenceToken:n}){const[t,i]=(0,z.useState)({sortBy:Y.at.TotalValueLockedUsd,sortDirection:Y.N9.Desc}),{pools:r,loading:a,error:d,loadMore:l}=function(e,n,t=Y.at.TotalValueLockedUsd,s=Y.N9.Desc){const i=X.uw[n||G.ChainId.MAINNET],{loading:o,error:r,data:a,fetchMore:d}=(0,Y.wU)({variables:{tokenAddress:e.toLowerCase(),orderBy:t,orderDirection:s},client:i,fetchPolicy:"cache-first"}),l=(0,z.useRef)(!1),c=(0,z.useCallback)((({onComplete:e})=>{l.current||(l.current=!0,d({variables:{skip:a?.pools?.length??0},updateQuery:(n,{fetchMoreResult:t})=>{if(!t||!n||!Object.keys(n).length)return n;e?.();const s={pools:[...n.pools,...t.pools]};return l.current=!1,s}}))}),[a?.pools?.length,d]);return(0,z.useMemo)((()=>{const e=(a?.pools??[]).map((e=>{const n=Math.random(),t=parseFloat(e.totalValueLockedUSD??"0");return{hash:e.id,token0:e.token0,token1:e.token1,txCount:parseFloat(e.txCount??"0"),tvl:t,feeTier:parseFloat(e.feeTier??"0"),volume24h:n*t,volumeWeek:n*t*7,turnover:n}})).sort(((e,n)=>n.tvl-e.tvl));return{loading:o,error:r,pools:e,loadMore:c}}),[a?.pools,r,c,o])}(n.address,e,t.sortBy,t.sortDirection),c=(0,z.useCallback)((e=>{t.sortBy===e?i({sortBy:e,sortDirection:t.sortDirection===Y.N9.Asc?Y.N9.Desc:Y.N9.Asc}):i({sortBy:e,sortDirection:Y.N9.Desc})}),[t.sortBy,t.sortDirection]);return d?(0,s.jsx)(x.Tv.BodyPrimary,{children:(0,s.jsx)(o.cC,{id:"6oxcad"})}):(0,s.jsx)("div",{"data-testid":`tdp-pools-table-${n.address.toLowerCase()}`,children:(0,s.jsx)(Q.NE,{pools:r,loading:a,chainId:e,maxHeight:600,hiddenColumns:q,loadMore:l,sortState:t,handleHeaderClick:c})})}var ee,ne=t(12762),te=t(82786),se=t(44878),ie=t(87148),oe=t(54210),re=t(95326),ae=t(10705);K.Ps`
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
`,function(e){e.BUY="Buy",e.SELL="Sell"}(ee||(ee={}));var de=t(59155),le=t(84087),ce=t(33151),ue=t(19369),pe=t(54359);const he=(0,h.default)(x.Tv.BodyPrimary).withConfig({displayName:"TransactionsTable__StyledSwapAmount",componentId:"sc-dfbcb8a8-0"})`
  display: inline-block;
  ${x.cw}
  max-width: 125px;
`;function xe({chainId:e,referenceToken:n}){const t=(0,le.eQ)(),i=(0,de.XB)(),{formatNumber:r,formatFiatPrice:a}=(0,ue.Gb)(),d=(0,M.Qj)((0,W.UO)().chainName),[l,c]=(0,z.useReducer)((e=>!e),!1),u=(0,z.useRef)(null);(0,ce.t)(u,l?c:void 0);const[p,h]=(0,z.useState)([ee.BUY,ee.SELL]),[f,j]=(0,z.useState)({sortBy:Y.AI.Timestamp,sortDirection:Y.N9.Desc}),{transactions:y,loading:C,loadMore:g}=function(e,n,t=Y.AI.Timestamp,s=Y.N9.Desc,i=[ee.BUY,ee.SELL],o=25,r){const a=X.uw[n||G.ChainId.MAINNET],{data:d,loading:l,fetchMore:c}=(0,Y.uk)({variables:{address:e.toLowerCase(),first:o,skip:r,orderBy:t,orderDirection:s},client:a}),u=(0,z.useRef)(!1),p=(0,z.useCallback)((({onComplete:e})=>{u.current||(u.current=!0,c({variables:{skip:Math.max(d?.swapsAs0?.length??0,d?.swapsAs1?.length??0)},updateQuery:(n,{fetchMoreResult:t})=>{if(!t)return n;e?.();const s={swapsAs0:[...n.swapsAs0,...t.swapsAs0],swapsAs1:[...n.swapsAs1,...t.swapsAs1]};return u.current=!1,s}}))}),[d,c]),h=(0,z.useMemo)((()=>[...d?.swapsAs0.filter((e=>e.amount0>0?i.includes(ee.SELL):i.includes(ee.BUY)))??[],...d?.swapsAs1.filter((e=>e.amount1>0?i.includes(ee.SELL):i.includes(ee.BUY)))??[]].sort(((e,n)=>n.timestamp-e.timestamp))),[d?.swapsAs0,d?.swapsAs1,i]);return(0,z.useMemo)((()=>({transactions:h,loading:l,loadMore:p})),[h,l,p])}(n.address,e,f.sortBy,f.sortDirection,p),k=(0,z.useCallback)((e=>{f.sortBy===e?j({sortBy:e,sortDirection:f.sortDirection===Y.N9.Asc?Y.N9.Desc:Y.N9.Asc}):j({sortBy:e,sortDirection:Y.N9.Desc})}),[f.sortBy,f.sortDirection]),w=(0,z.useMemo)((()=>y.map((e=>{const n={address:e.pool.token0.id,symbol:e.pool.token0.symbol,amount:e.amount0},t={address:e.pool.token1.id,symbol:e.pool.token1.symbol,amount:e.amount1};let s,i;return n.amount>0?(s=n,i=t):(s=t,i=n),{hash:e.transaction.id,timestamp:e.timestamp,input:s,output:i,usdValue:e.amountUSD,makerAddress:e.origin}}))),[y]),b=(0,z.useMemo)((()=>{const j=(0,ne.Cl)();return[j.accessor((e=>e.timestamp),{id:"timestamp",header:()=>(0,s.jsx)(se.b,{minWidth:150,justifyContent:"flex-start",grow:!0,children:(0,s.jsxs)(oe.d4,{$justify:"flex-start",onClick:()=>k(Y.AI.Timestamp),children:[f.sortBy===Y.AI.Timestamp&&(0,s.jsx)(oe.iX,{direction:f.sortDirection}),(0,s.jsx)(x.Tv.BodySecondary,{children:(0,s.jsx)(o.cC,{id:"LhMjLm"})})]})}),cell:e=>(0,s.jsx)(se.b,{loading:C,minWidth:150,justifyContent:"flex-start",grow:!0,children:(0,s.jsx)(x.Tv.BodySecondary,{children:(0,re.G)(1e3*Number(e.getValue?.()),t??ae.ZW)})})}),j.accessor((e=>e.output.address),{id:"swap-type",header:()=>(0,s.jsx)(se.b,{minWidth:50,justifyContent:"flex-start",grow:!0,children:(0,s.jsxs)(oe.j4,{modalOpen:l,onClick:c,ref:u,children:[(0,s.jsx)(ie.w,{allFilters:Object.values(ee),activeFilter:p,setFilters:h,isOpen:l}),(0,s.jsx)(x.Tv.BodySecondary,{children:(0,s.jsx)(o.cC,{id:"+zy2Nq"})})]})}),cell:e=>(0,s.jsx)(se.b,{loading:C,minWidth:50,justifyContent:"flex-start",grow:!0,children:(0,s.jsx)(x.Tv.BodyPrimary,{children:String(e.getValue?.()).toLowerCase()===n.address.toLowerCase()?(0,s.jsx)(o.cC,{id:"qiOIiY"}):(0,s.jsx)(o.cC,{id:"xNB0TS"})})})}),j.accessor((e=>e.input.address.toLowerCase()===n.address.toLowerCase()?e.input.amount:e.output.amount),{id:"reference-amount",header:()=>(0,s.jsx)(se.b,{minWidth:150,justifyContent:"flex-end",children:(0,s.jsxs)(x.Tv.BodySecondary,{children:["$",n.symbol]})}),cell:e=>(0,s.jsx)(se.b,{loading:C,minWidth:150,justifyContent:"flex-end",children:(0,s.jsx)(x.Tv.BodyPrimary,{children:r({input:Math.abs(e.getValue?.())||0})})})}),j.accessor((e=>{const t=e.input.address.toLowerCase()===n.address.toLowerCase()?e.output:e.input;return(0,s.jsxs)(he,{children:[r({input:Math.abs(t.amount)||0})," ",(0,s.jsx)(oe.m_,{to:`/explore/tokens/${d.toLowerCase()}/${t.address}`,children:t.symbol})]})}),{id:"non-reference-amount",header:()=>(0,s.jsx)(se.b,{minWidth:150,justifyContent:"flex-end",children:(0,s.jsx)(x.Tv.BodySecondary,{children:(0,s.jsx)(o.cC,{id:"YHpbe1"})})}),cell:e=>(0,s.jsx)(se.b,{loading:C,minWidth:150,justifyContent:"flex-end",children:e.getValue?.()})}),j.accessor((e=>e.usdValue),{id:"fiat-value",header:()=>(0,s.jsx)(se.b,{minWidth:125,justifyContent:"flex-end",children:(0,s.jsxs)(oe.d4,{$justify:"flex-end",onClick:()=>k(Y.AI.AmountUsd),children:[f.sortBy===Y.AI.AmountUsd&&(0,s.jsx)(oe.iX,{direction:f.sortDirection}),(0,s.jsx)(x.Tv.BodySecondary,{children:i})]})}),cell:e=>(0,s.jsx)(se.b,{loading:C,minWidth:125,justifyContent:"flex-end",children:(0,s.jsx)(x.Tv.BodyPrimary,{children:a({price:e.getValue?.()})})})}),j.accessor((e=>e.makerAddress),{id:"maker-address",header:()=>(0,s.jsx)(se.b,{minWidth:100,justifyContent:"flex-end",children:(0,s.jsx)(x.Tv.BodySecondary,{children:(0,s.jsx)(o.cC,{id:"sb9Y58"})})}),cell:n=>(0,s.jsx)(se.b,{loading:C,minWidth:100,justifyContent:"flex-end",children:(0,s.jsx)(oe.Bq,{href:(0,pe.E)(e,n.getValue?.(),pe.r.ADDRESS),children:(0,m.Xn)(n.getValue?.(),0)})})})]}),[i,e,d,p,l,a,r,k,C,t,n.address,n.symbol,f.sortBy,f.sortDirection]);return(0,s.jsx)(te.i,{columns:b,data:w,loading:C,loadMore:g,maxHeight:600})}const me=h.default.div.withConfig({displayName:"ActivitySection__Container",componentId:"sc-23e1ccec-0"})`
  width: 100%;
  display: flex;
  flex-direction: column;
`,fe=(0,h.default)(T.xv).withConfig({displayName:"ActivitySection__Tab",componentId:"sc-23e1ccec-1"})`
  cursor: pointer;
  font-size: 24px !important;
  line-height: 32px !important;
  color: ${({isActive:e,theme:n})=>e?n.neutral1:n.neutral2};
  ${x.iV};
`;var je;function ye({chainId:e,referenceToken:n}){const[t,i]=(0,z.useState)(je.Pools);return n?(0,s.jsxs)(me,{children:[(0,s.jsxs)(V.ZP,{gap:"24px",marginBottom:"12px",id:"activity-header",children:[(0,s.jsx)(fe,{isActive:t===je.Pools,onClick:()=>i(je.Pools),children:(0,s.jsx)(o.cC,{id:"lQfOr9"})}),(0,s.jsx)(fe,{isActive:t===je.Txs,onClick:()=>i(je.Txs),children:(0,s.jsx)(o.cC,{id:"4wyw8H"})})]}),t===je.Pools&&(0,s.jsx)(J,{chainId:e,referenceToken:n}),t===je.Txs&&(0,s.jsx)(xe,{chainId:e,referenceToken:n})]}):null}!function(e){e[e.Pools=0]="Pools",e[e.Txs=1]="Txs"}(je||(je={}));var Ce,ge=t(70357),ke=t(53609),we=t(47365);function be(){return be=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},be.apply(this,arguments)}function ve(e,n){let{title:t,titleId:s,...i}=e;return z.createElement("svg",be({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",ref:n,"aria-labelledby":s},i),t?z.createElement("title",{id:s},t):null,Ce||(Ce=z.createElement("path",{d:"M14.75 12C14.75 13.517 13.517 14.75 12 14.75C10.483 14.75 9.25004 13.517 9.25004 12C9.25004 11.651 9.32196 11.32 9.44096 11.012C9.63496 11.166 9.86903 11.272 10.136 11.272C10.763 11.272 11.272 10.763 11.272 10.136C11.272 9.86899 11.166 9.63492 11.012 9.44092C11.32 9.32192 11.651 9.25 12 9.25C13.517 9.25 14.75 10.483 14.75 12ZM20.5921 13.4771C19.3651 15.5311 16.609 19 12 19C7.39104 19 4.635 15.5311 3.408 13.4771C2.864 12.5671 2.864 11.4329 3.408 10.5229C4.635 8.46895 7.39104 5 12 5C16.609 5 19.3651 8.46895 20.5921 10.5229C21.1361 11.4329 21.1361 12.5671 20.5921 13.4771ZM16.25 12C16.25 9.657 14.344 7.75 12 7.75C9.65604 7.75 7.75004 9.657 7.75004 12C7.75004 14.343 9.65604 16.25 12 16.25C14.344 16.25 16.25 14.343 16.25 12Z",fill:"currentColor"})))}const Te=z.forwardRef(ve),Ie=(t.p,h.default.div.withConfig({displayName:"InvalidTokenDetails__InvalidDetailsContainer",componentId:"sc-6489a4a1-0"})`
  padding-top: 128px;
  display: flex;
  flex-direction: column;
  align-items: center;
`),De=h.default.span.withConfig({displayName:"InvalidTokenDetails__InvalidDetailsText",componentId:"sc-6489a4a1-1"})`
  margin-top: 28px;
  margin-bottom: 20px;

  text-align: center;

  color: ${({theme:e})=>e.neutral2};
  font-size: 20px;
  font-weight: 535;
  line-height: 28px;
`,Ae=(0,h.default)(ge.DF).withConfig({displayName:"InvalidTokenDetails__TokenExploreButton",componentId:"sc-6489a4a1-2"})`
  width: fit-content;
  padding: 12px 16px;
  border-radius: 12px;

  color: ${({theme:e})=>e.neutral1};
  font-size: 16px;
  font-weight: 535;
`;function Ne({pageChainId:e,isInvalidAddress:n}){const{chainId:t}=(0,a.useWeb3React)(),i=(0,W.s0)(),r=(0,we.Z)(),d=!n&&e===t,l=t?(0,ke.bt)(t)?.label:void 0;return(0,s.jsxs)(Ie,{children:[(0,s.jsx)(Te,{}),n||d?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(De,{children:(0,s.jsx)(o.cC,{id:"5pThdE"})}),(0,s.jsx)(Ae,{onClick:()=>i("/tokens"),children:(0,s.jsx)(x.Tv.SubHeader,{children:(0,s.jsx)(o.cC,{id:"1ru2CS"})})})]}):(0,s.jsxs)(s.Fragment,{children:[l&&(0,s.jsx)(De,{children:(0,s.jsx)(o.cC,{id:"xNuZYG",values:{connectedChainLabel:l}})}),(0,s.jsx)(Ae,{onClick:()=>r(e),children:(0,s.jsx)(x.Tv.SubHeader,{children:(0,s.jsx)(o.cC,{id:"1+P9RR",values:{0:(0,ke.bt)(e).label}})})})]})]})}var Se=t(71587),Be=t(65023),$e=t(88584);const _e=e=>(0,s.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"transparent",...e,children:(0,s.jsx)("path",{d:"M5.12245 9.5625C5.23495 11.8725 6.01495 14.2275 7.37245 16.32C4.19245 15.615 1.76996 12.8925 1.52246 9.5625H5.12245ZM7.37245 1.67999C4.19245 2.38499 1.76996 5.1075 1.52246 8.4375H5.12245C5.23495 6.1275 6.01495 3.77249 7.37245 1.67999ZM9.14997 1.5H8.84995L8.62496 1.82249C7.19996 3.84749 6.36745 6.1725 6.24745 8.4375H11.7525C11.6325 6.1725 10.8 3.84749 9.37496 1.82249L9.14997 1.5ZM6.24745 9.5625C6.36745 11.8275 7.19996 14.1525 8.62496 16.1775L8.84995 16.5H9.14997L9.37496 16.1775C10.8 14.1525 11.6325 11.8275 11.7525 9.5625H6.24745ZM12.8775 9.5625C12.765 11.8725 11.985 14.2275 10.6275 16.32C13.8075 15.615 16.23 12.8925 16.4775 9.5625H12.8775ZM16.4775 8.4375C16.23 5.1075 13.8075 2.38499 10.6275 1.67999C11.985 3.77249 12.765 6.1275 12.8775 8.4375H16.4775Z",fill:e.fill??"#607BEE"})}),Pe=e=>(0,s.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"transparent",...e,children:(0,s.jsx)("path",{d:"M12.8761 3H14.9451L10.4251 8.16609L15.7425 15.196H11.579L8.31797 10.9324L4.58662 15.196H2.51644L7.35104 9.67026L2.25 3H6.51922L9.46689 6.89708L12.8761 3ZM12.15 13.9576H13.2964L5.89628 4.17332H4.66605L12.15 13.9576Z",fill:e.fill??"#607BEE"})});var Le=t(74163),Me=t(57777),Ee=t(25093),Fe=t(91943),He=t(53904),Ze=t(97472),ze=t(39681),Ue=t(17513),Oe=t(95114);const We=(0,h.default)(Be.ZP).withConfig({displayName:"TokenDescription__TokenInfoSection",componentId:"sc-aefff000-0"})`
  gap: 16px;
  width: 100%;

  @media (max-width: ${ze.j$.lg-1}px) and (min-width: ${ze.j$.sm}px) {
    max-width: 45%;
  }
`,Re=(0,h.default)(V.ZP).withConfig({displayName:"TokenDescription__TokenNameRow",componentId:"sc-aefff000-1"})`
  gap: 8px;
  width: 100%;
`,Ve=(0,h.default)(Re).withConfig({displayName:"TokenDescription__TokenButtonRow",componentId:"sc-aefff000-2"})`
  flex-wrap: wrap;
`,Qe=(0,h.default)(V.ZP).withConfig({displayName:"TokenDescription__TokenInfoButton",componentId:"sc-aefff000-3"})`
  gap: 8px;
  padding: 8px 12px;
  border-radius: 20px;
  color: ${({tokenColor:e})=>e};
  background-color: ${({tokenColor:e})=>(0,Ue.j)(12,e)};
  font-size: 14px;
  font-weight: 535;
  line-height: 16px;
  width: max-content;
  ${x.iV}
`,Ye=(0,h.default)(x.Tv.BodyPrimary).withConfig({displayName:"TokenDescription__TokenDescriptionContainer",componentId:"sc-aefff000-4"})`
  ${x.cw}
  max-width: 100%;
  // max-height: fit-content;
  line-height: 24px;
  white-space: pre-wrap;
`,Ge=h.default.p.withConfig({displayName:"TokenDescription__DescriptionVisibilityWrapper",componentId:"sc-aefff000-5"})`
  display: ${({$visible:e})=>e?"inline":"none"};
`,Xe=75;function Ke({tokenAddress:e,chainId:n=G.ChainId.MAINNET,isNative:t=!1,characterCount:i=Xe}){const r=(0,h.useTheme)().neutral1,a=(0,M.Ld)(n),{data:d}=(0,Ee.wT)({variables:{address:t?(0,Oe.P)(a):e,chain:a},errorPolicy:"all"}),l=d?.token?.project,c=l?.description,u=(0,pe.E)(n,e,t?pe.r.NATIVE:pe.r.TOKEN),[,p]=(0,Fe.Z)(),f=(0,z.useCallback)((()=>{p(e)}),[e,p]),[j,y]=(0,z.useReducer)((e=>!e),!0),C=(0,Se.Nt)(c??"",i),g=!!c&&c.length>i,k=g&&j,{inputTax:w,outputTax:b}=(0,He.j)(e,e),{formatPercent:v}=(0,ue.Gb)(),{sellFeeString:T,buyFeeString:I}={sellFeeString:v(w),buyFeeString:v(b)},D=Boolean(parseFloat(T))||Boolean(parseFloat(b.toFixed(2))),A=T===I;return(0,s.jsxs)(We,{children:[(0,s.jsx)(x.Tv.HeadlineSmall,{children:(0,s.jsx)(o.cC,{id:"CE+M2e"})}),(0,s.jsxs)(Ve,{children:[!t&&(0,s.jsxs)(Qe,{tokenColor:r,onClick:f,children:[(0,s.jsx)(Ze.Z,{width:"18px",height:"18px",color:r}),(0,m.Xn)(e)]}),(0,s.jsx)(x.dL,{href:u,children:(0,s.jsxs)(Qe,{tokenColor:r,children:[(0,s.jsx)($e.P,{width:"18px",height:"18px",fill:r}),n===G.ChainId.MAINNET?(0,s.jsx)(o.cC,{id:"nS3bjC"}):(0,s.jsx)(o.cC,{id:"vtJ2yO"})]})}),!!l?.homepageUrl&&(0,s.jsx)(x.dL,{href:l.homepageUrl,children:(0,s.jsxs)(Qe,{tokenColor:r,children:[(0,s.jsx)(_e,{width:"18px",height:"18px",fill:r}),(0,s.jsx)(o.cC,{id:"On0aF2"})]})}),!!l?.twitterName&&(0,s.jsx)(x.dL,{href:`https://x.com/${l.twitterName}`,children:(0,s.jsxs)(Qe,{tokenColor:r,children:[(0,s.jsx)(Pe,{width:"18px",height:"18px",fill:r}),(0,s.jsx)(o.cC,{id:"0F2sI+"})]})})]}),(0,s.jsxs)(Ye,{children:[!c&&(0,s.jsx)(Se.aZ,{children:(0,s.jsx)(o.cC,{id:"kXI9SA"})}),c&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(Ge,{"data-testid":"token-description-full",$visible:!k,children:c}),(0,s.jsx)(Ge,{"data-testid":"token-description-truncated",$visible:k,children:C})]}),g&&(0,s.jsx)(Se.ou,{onClick:y,"data-testid":"token-description-show-more-button",children:j?(0,s.jsx)(o.cC,{id:"fMPkxb"}):(0,s.jsx)(o.cC,{id:"vLyv1R"})})]}),D&&(0,s.jsx)(Me.ud,{placement:"left",size:Me.Oz.Small,text:(0,s.jsx)(x.Tv.Caption,{color:"neutral2",children:(0,s.jsx)(Le.gE,{})}),children:(0,s.jsx)(Be.ZP,{gap:"sm",children:A?(0,s.jsxs)(x.Tv.BodyPrimary,{children:[d?.token?.symbol,"\xa0",(0,s.jsx)(o.cC,{id:"oSCKSR"}),"\xa0",T]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(x.Tv.BodyPrimary,{children:[d?.token?.symbol,"\xa0",(0,s.jsx)(o.cC,{id:"JzWZvv"}),"\xa0",I]})," ",(0,s.jsxs)(x.Tv.BodyPrimary,{children:[d?.token?.symbol,"\xa0",(0,s.jsx)(o.cC,{id:"sHAUpq"}),"\xa0",T]})," "]})})})]})}const qe=h.default.span.withConfig({displayName:"TokenDetails__TokenSymbol",componentId:"sc-28c1bd96-0"})`
  text-transform: uppercase;
  color: ${({theme:e})=>e.neutral2};
  margin-left: 8px;

  ${({isInfoTDPEnabled:e})=>e&&h.css`
      @media screen and (max-width: ${({theme:e})=>e.breakpoint.xs}px) {
        display: none;
      }
    `}
`,Je=(h.default.div.withConfig({displayName:"TokenDetails__ChartActions",componentId:"sc-28c1bd96-1"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,h.default.div.withConfig({displayName:"TokenDetails__TokenTitle",componentId:"sc-28c1bd96-2"})`
  display: flex;

  ${({isInfoTDPEnabled:e})=>e?h.css`
          overflow: hidden;
          white-space: nowrap;
        `:h.css`
          @media screen and (max-width: ${({theme:e})=>e.breakpoint.md}px) {
            display: inline;
          }
        `}
`),en=h.default.span.withConfig({displayName:"TokenDetails__TokenName",componentId:"sc-28c1bd96-3"})`
  ${x.cw}
  min-width: 40px;
`,nn=(0,h.default)(Se.Hr).withConfig({displayName:"TokenDetails__DividerLine",componentId:"sc-28c1bd96-4"})`
  margin-top: 40px;
  margin-bottom: 40px;
  @media screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    display: none;
  }
`;function tn(e,n,t){const{chainId:s}=(0,a.useWeb3React)(),i=(0,z.useMemo)((()=>{if(e)return e===_.dt?(0,_.gX)(n):t?(0,M.Pc)(t):void 0}),[n,e,t]),o=Boolean(i)||n!==s,r=function(e,n){const t=(0,H.zA)(n||!e?void 0:e);return n||!e||t&&t?.symbol===H.eu?void 0:t}(e,o);return(0,z.useMemo)((()=>({token:i??r,didFetchFromChain:!i})),[r,i])}function sn(e){return e?e.isToken?e.address:_.dt:""}function on({urlAddress:e,inputTokenAddress:n,chain:t,tokenQuery:x,tokenPriceQuery:f,timePeriod:j,onChangeTimePeriod:w}){if(!e)throw new Error("Invalid token details route: tokenAddress param is undefined");const b=(0,z.useMemo)((()=>e===_.dt?e:(0,m.UJ)(e)||void 0),[e]),{account:v,chainId:T}=(0,a.useWeb3React)(),I=(0,M.Tz)(t),D=(0,E.U8)(n,I),A=(0,E.U8)(b===_.dt?"ETH":b,I),N=x.token,{data:S}=(0,i.T)({account:v}),{token:H,didFetchFromChain:V}=((0,z.useMemo)((()=>{if(!S)return null;const e=S?.portfolios?.[0].tokenBalances,n=N?.project?.tokens;return n?n.reduce(((n,t)=>(t&&(n[t.chain]||(n[t.chain]={}),n[t.chain].address=t.address,n[t.chain].balance=e?.find((e=>e.token?.id===t.id))),n)),{}):{}}),[S?.portfolios,N?.project?.tokens]),tn(b,I,N)),Q=b?(0,k.y8)(b):null,Y=!1===Q?.canProceed,G=(0,W.s0)(),X=(0,h.useTheme)(),K=((0,F.r)(H??void 0,X.surface2,X.darkMode),(0,P.C)()),q=(0,L.e)(),[J,ee]=(0,z.useTransition)(),ne=(0,z.useCallback)((e=>{const n=sn(e.inputCurrency),s=sn(e.outputCurrency);if((0,R.K)(n,b)||(0,R.K)(s,b))return;const i=e.outputCurrency??e.inputCurrency;i&&ee((()=>G((0,M.dG)({address:i.isNative?null:i.address,chain:t,inputAddress:e.inputCurrency&&e.inputCurrency!==i?n:null,isInfoExplorePageEnabled:K}))))}),[b,t,K,G]),[te,se]=(0,z.useState)(),[ie,oe]=(0,z.useState)(!1),re=(0,z.useCallback)((e=>{te?.resolve(e),se(void 0)}),[te,se]),[ae,de]=(0,z.useState)(u.oX.PRICE),[le,ce]=(0,z.useState)(u.E4.LINE);if(void 0===H||!b)return(0,s.jsx)(Ne,{pageChainId:I,isInvalidAddress:!b});const ue=H&&(H.symbol??(0,s.jsx)(o.cC,{id:"F2FJu3"}));H&&H.name&&H.symbol&&(H.name,H.symbol);return(0,s.jsx)(d.fM,{page:r.yJ.TOKEN_DETAILS_PAGE,properties:{tokenAddress:b,tokenName:H?.name},shouldLogImpression:!0,children:(0,s.jsxs)(C.Gy,{children:[H&&!J?(0,s.jsxs)(C.WQ,{children:[q?(0,s.jsxs)(c.zG,{isInfoTDPEnabled:!0,"aria-label":"breadcrumb-nav",children:[(0,s.jsxs)(c.yY,{to:`/explore/${t.toLowerCase()}`,children:[(0,s.jsx)(o.cC,{id:"8tjQCz"})," ",(0,s.jsx)(U.Z,{size:14})]}),(0,s.jsxs)(c.yY,{to:`/explore/tokens/${t.toLowerCase()}`,children:[(0,s.jsx)(o.cC,{id:"6RDwJM"})," ",(0,s.jsx)(U.Z,{size:14})]}),(0,s.jsx)(c.f3,{address:b,currency:H,chainId:H.chainId})]}):(0,s.jsx)(c.zG,{"aria-label":"breadcrumb-nav",children:(0,s.jsxs)(c.yY,{to:`${K?"/explore":""}/tokens/${t.toLowerCase()}`,children:[(0,s.jsx)(O.Z,{"data-testid":"token-details-return-button",size:14})," Tokens"]})}),(0,s.jsx)(C.Pn,{isInfoTDPEnabled:q,"data-testid":"token-info-container",children:(0,s.jsxs)(C.yn,{isInfoTDPEnabled:q,children:[(0,s.jsx)(l.V,{currencies:[H],chainId:H.chainId,size:"32px"}),q?(0,s.jsxs)(Je,{isInfoTDPEnabled:!0,children:[(0,s.jsx)(en,{children:H.name??(0,s.jsx)(o.cC,{id:"zKpHYG"})}),(0,s.jsx)(qe,{isInfoTDPEnabled:!0,children:ue})]}):(0,s.jsxs)(Je,{children:[H.name??(0,s.jsx)(o.cC,{id:"zKpHYG"}),(0,s.jsx)(qe,{children:ue})]})]})}),(0,s.jsx)(g.ZP,{chainId:I,address:b,tokenQueryData:N}),!q&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(Se.Hr,{}),(0,s.jsx)(p.ez,{address:b,chainId:I,description:N?.project?.description,homepageUrl:N?.project?.homepageUrl,twitterName:N?.project?.twitterName}),!H.isNative&&(0,s.jsx)(y,{address:b})]}),q&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(nn,{}),(0,s.jsx)(ye,{chainId:I,referenceToken:H.wrapped})]})]}):(0,s.jsx)(C.ZP,{}),(0,s.jsxs)(C.QN,{isInfoTDPEnabled:q,onClick:()=>Y&&oe(!0),children:[(0,s.jsx)("div",{style:{pointerEvents:Y?"none":"auto"},children:(0,s.jsx)(Z.HY,{chainId:I,initialInputCurrency:D,initialOutputCurrency:A,onCurrencyChange:ne,disableTokenInputs:I!==T})}),Q&&(0,s.jsx)(B,{tokenAddress:b,warning:Q}),q&&(0,s.jsx)(Ke,{tokenAddress:b,chainId:I,isNative:H?.isNative,characterCount:200})]}),(0,s.jsx)($.Z,{isOpen:ie||!!te,tokenAddress:b,onContinue:()=>re(!0),onBlocked:()=>{oe(!1)},onCancel:()=>re(!1),showCancel:!0})]})})}var rn=t(62460),an=t(99584),dn=t(41523),ln=t(54314);const cn=(e,n)=>{const t=e?.token?.name,s=e?.token?.symbol,i="Buy & Trade",o=n?"":": Live Price & Chart on Goblins";return t||s?!t&&s?ln.ag._({id:"op841Q",values:{baseTitle:i,tokenSymbol:s,searchDetail:o}}):t&&!s?ln.ag._({id:"9XhrCC",values:{baseTitle:i,tokenName:t,searchDetail:o}}):ln.ag._({id:"FtlHKp",values:{baseTitle:i,tokenName:t,tokenSymbol:s,searchDetail:o}}):ln.ag._({id:"VnyFhc",values:{baseTitle:i,searchDetail:o}})},un=(0,h.default)(i.Z).withConfig({displayName:"TokenDetails__StyledPrefetchBalancesWrapper",componentId:"sc-cac3d422-0"})`
  display: contents;
`;function pn(){const{tokenAddress:e,chainName:n}=(0,W.UO)(),t=(0,M.Qj)(n),i=e===_.dt;console.log(t,"<===chain");const o=X.uw[G.ChainId.SMARTBCH],[r,a]=(0,z.useState)(M.XH.DAY),[d,l]=(0,z.useMemo)((()=>[i?(0,Oe.P)(t):e??"",(0,M.uw)(r)]),[t,i,r,e]),c=(0,an.Z)(),u=(0,z.useMemo)((()=>"string"===typeof c.inputCurrency?c.inputCurrency:void 0),[c]),{data:p}=(0,rn.rS)({client:o,variables:{address:d},errorPolicy:"all"}),{data:h}=(0,rn.m)({variables:{address:d,chain:t,duration:l},errorPolicy:"all"}),[x,m]=(0,z.useState)(h);return(0,z.useEffect)((()=>{h&&m(h)}),[m,h]),p?(0,s.jsxs)(un,{shouldFetchOnAccountUpdate:!0,shouldFetchOnHover:!1,children:[(0,s.jsx)(dn.q,{children:(0,s.jsx)("title",{children:cn(p)})}),(0,s.jsx)(on,{urlAddress:e,chain:t,tokenQuery:p,tokenPriceQuery:x,inputTokenAddress:u,timePeriod:r,onChangeTimePeriod:a})]}):(0,s.jsx)(C.lJ,{})}},63486:(e,n,t)=>{function s(e,n){return!(!e||!n)&&(e===n||e.toLowerCase()===n.toLowerCase())}t.d(n,{K:()=>s})}}]);
//# sourceMappingURL=5422.8a5b152f.chunk.js.map