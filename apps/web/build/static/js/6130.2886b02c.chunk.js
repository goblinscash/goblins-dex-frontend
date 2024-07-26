"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[6130],{26130:(e,n,t)=>{t.r(n),t.d(n,{default:()=>Gn});var i=t(21339),s=t(82523),o=t(88693),a=t(56542),r=t(75422),d=t(4570),l=t(24264),c=t(56415),p=t(98516),h=t(56374),u=t(66496),x=t(33552),m=t(10548),f=t(6970);const y=x.default.div.withConfig({displayName:"AddressSection__ContractAddressSection",componentId:"sc-65f6d5a3-0"})`
  display: flex;
  flex-direction: column;
  color: ${({theme:e})=>e.neutral2};
  font-size: 0.9em;
  gap: 4px;
  padding: 4px 0px;
`,C=x.default.button.withConfig({displayName:"AddressSection__ContractAddress",componentId:"sc-65f6d5a3-1"})`
  display: flex;
  color: ${({theme:e})=>e.neutral1};
  gap: 10px;
  align-items: center;
  background: transparent;
  border: none;
  min-height: 38px;
  padding: 0px;
`;function j({address:e}){return(0,i.jsxs)(y,{children:[(0,i.jsx)(m.Tv.SubHeaderSmall,{children:(0,i.jsx)(o.cC,{id:"TPQ9LW"})}),(0,i.jsx)(C,{children:(0,i.jsx)(m.Qv,{address:e,truncatedAddress:(0,f.Xn)(e,2,3)})})]})}var g=t(83748),b=t(77489),w=t(46502),k=t(54078),T=t(96643),v=t(79799),I=t(26390),B=t(9726);const N=x.default.div.withConfig({displayName:"TokenSafetyMessage__Label",componentId:"sc-e122e2d8-0"})`
  width: 100%;
  padding: 12px 20px 16px;
  background-color: ${({backgroundColor:e})=>e};
  border-radius: 16px;
  border: 1px solid ${({theme:e})=>e.surface3};
  color: ${({color:e})=>e};
`,P=x.default.div.withConfig({displayName:"TokenSafetyMessage__TitleRow",componentId:"sc-e122e2d8-1"})`
  align-items: center;
  font-weight: 535;
  display: inline-flex;
`,S=(0,x.default)(B.xv).withConfig({displayName:"TokenSafetyMessage__Title",componentId:"sc-e122e2d8-2"})`
  font-weight: 535;
  font-size: 16px;
  line-height: 24px;
  margin-left: 7px;
`,D=x.default.div.withConfig({displayName:"TokenSafetyMessage__DetailsRow",componentId:"sc-e122e2d8-3"})`
  margin-top: 8px;
  font-size: 12px;
  line-height: 16px;
  color: ${({theme:e})=>e.neutral2};
`,_=(0,x.default)(m.dL).withConfig({displayName:"TokenSafetyMessage__StyledLink",componentId:"sc-e122e2d8-4"})`
  color: ${({theme:e})=>e.accent1};

  font-weight: 535;
`;function $({warning:e,tokenAddress:n}){const t=(0,T.g)(e.level),s=(0,T.A)(e.level),{heading:a,description:r}=(0,k.N6)(e);return(0,i.jsxs)(N,{"data-cy":"token-safety-message",color:s,backgroundColor:t,children:[(0,k._x)(e)&&(0,i.jsxs)(P,{children:[e.canProceed?(0,i.jsx)(v.Z,{size:"16px"}):(0,i.jsx)(I.Z,{size:"16px"}),(0,i.jsx)(S,{marginLeft:"7px",children:e.message})]}),(0,i.jsxs)(D,{children:[a,Boolean(a)&&" ",r,Boolean(r)&&" ",n&&(0,i.jsx)(_,{href:k.W3,children:(0,i.jsx)(o.cC,{id:"zwWKhA"})})]})]})}var E=t(58114),A=t(46778),L=t(379),M=t(89691),F=t(83787),H=t(12973),Z=t(21309),R=t(39491);const z=e=>{const{chainId:n}=(0,r.useWeb3React)(),t=(0,F.Ld)(n),i=(0,R.useRef)(t);(0,R.useEffect)((()=>{i.current!==t&&e(t),i.current=t}),[t])};var O=t(78614),W=t(66642),U=t(96439),V=t(18910),Q=t(92686),G=t(63486),Y=t(17358),X=t(21123),q=t(66644),K=t(82032),J=t(70762),ee=t(32605);ee.ZP`
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
`;const ne=[X.Oz.Transactions];function te({chainId:e,referenceToken:n}){const[t,s]=(0,R.useState)({sortBy:q.at.TotalValueLockedUsd,sortDirection:q.N9.Desc}),{pools:a,loading:r,error:d,loadMore:l}=function(e,n,t=q.at.TotalValueLockedUsd,i=q.N9.Desc){const s=J.uw[n||K.ChainId.MAINNET],{loading:o,error:a,data:r,fetchMore:d}=(0,q.wU)({variables:{tokenAddress:e.toLowerCase(),orderBy:t,orderDirection:i},client:s,fetchPolicy:"cache-first"}),l=(0,R.useRef)(!1),c=(0,R.useCallback)((({onComplete:e})=>{l.current||(l.current=!0,d({variables:{skip:r?.pools?.length??0},updateQuery:(n,{fetchMoreResult:t})=>{if(!t||!n||!Object.keys(n).length)return n;e?.();const i={pools:[...n.pools,...t.pools]};return l.current=!1,i}}))}),[r?.pools?.length,d]);return(0,R.useMemo)((()=>{const e=(r?.pools??[]).map((e=>{const n=Math.random(),t=parseFloat(e.totalValueLockedUSD??"0");return{hash:e.id,token0:e.token0,token1:e.token1,txCount:parseFloat(e.txCount??"0"),tvl:t,feeTier:parseFloat(e.feeTier??"0"),volume24h:n*t,volumeWeek:n*t*7,turnover:n}})).sort(((e,n)=>n.tvl-e.tvl));return{loading:o,error:a,pools:e,loadMore:c}}),[r?.pools,a,c,o])}(n.address,e,t.sortBy,t.sortDirection),c=(0,R.useCallback)((e=>{t.sortBy===e?s({sortBy:e,sortDirection:t.sortDirection===q.N9.Asc?q.N9.Desc:q.N9.Asc}):s({sortBy:e,sortDirection:q.N9.Desc})}),[t.sortBy,t.sortDirection]);return d?(0,i.jsx)(m.Tv.BodyPrimary,{children:(0,i.jsx)(o.cC,{id:"6oxcad"})}):(0,i.jsx)("div",{"data-testid":`tdp-pools-table-${n.address.toLowerCase()}`,children:(0,i.jsx)(X.NE,{pools:a,loading:r,chainId:e,maxHeight:600,hiddenColumns:ne,loadMore:l,sortState:t,handleHeaderClick:c})})}var ie,se=t(12762),oe=t(82786),ae=t(44878),re=t(87148),de=t(54210),le=t(95326),ce=t(10705);ee.Ps`
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
`,function(e){e.BUY="Buy",e.SELL="Sell"}(ie||(ie={}));var pe=t(59155),he=t(84087),ue=t(33151),xe=t(19369),me=t(54359);const fe=(0,x.default)(m.Tv.BodyPrimary).withConfig({displayName:"TransactionsTable__StyledSwapAmount",componentId:"sc-dfbcb8a8-0"})`
  display: inline-block;
  ${m.cw}
  max-width: 125px;
`;function ye({chainId:e,referenceToken:n}){const t=(0,he.eQ)(),s=(0,pe.XB)(),{formatNumber:a,formatFiatPrice:r}=(0,xe.Gb)(),d=(0,F.Qj)((0,Q.UO)().chainName),[l,c]=(0,R.useReducer)((e=>!e),!1),p=(0,R.useRef)(null);(0,ue.t)(p,l?c:void 0);const[h,u]=(0,R.useState)([ie.BUY,ie.SELL]),[x,y]=(0,R.useState)({sortBy:q.AI.Timestamp,sortDirection:q.N9.Desc}),{transactions:C,loading:j,loadMore:g}=function(e,n,t=q.AI.Timestamp,i=q.N9.Desc,s=[ie.BUY,ie.SELL],o=25,a){const r=J.uw[n||K.ChainId.MAINNET],{data:d,loading:l,fetchMore:c}=(0,q.uk)({variables:{address:e.toLowerCase(),first:o,skip:a,orderBy:t,orderDirection:i},client:r}),p=(0,R.useRef)(!1),h=(0,R.useCallback)((({onComplete:e})=>{p.current||(p.current=!0,c({variables:{skip:Math.max(d?.swapsAs0?.length??0,d?.swapsAs1?.length??0)},updateQuery:(n,{fetchMoreResult:t})=>{if(!t)return n;e?.();const i={swapsAs0:[...n.swapsAs0,...t.swapsAs0],swapsAs1:[...n.swapsAs1,...t.swapsAs1]};return p.current=!1,i}}))}),[d,c]),u=(0,R.useMemo)((()=>[...d?.swapsAs0.filter((e=>e.amount0>0?s.includes(ie.SELL):s.includes(ie.BUY)))??[],...d?.swapsAs1.filter((e=>e.amount1>0?s.includes(ie.SELL):s.includes(ie.BUY)))??[]].sort(((e,n)=>n.timestamp-e.timestamp))),[d?.swapsAs0,d?.swapsAs1,s]);return(0,R.useMemo)((()=>({transactions:u,loading:l,loadMore:h})),[u,l,h])}(n.address,e,x.sortBy,x.sortDirection,h),b=(0,R.useCallback)((e=>{x.sortBy===e?y({sortBy:e,sortDirection:x.sortDirection===q.N9.Asc?q.N9.Desc:q.N9.Asc}):y({sortBy:e,sortDirection:q.N9.Desc})}),[x.sortBy,x.sortDirection]),w=(0,R.useMemo)((()=>C.map((e=>{const n={address:e.pool.token0.id,symbol:e.pool.token0.symbol,amount:e.amount0},t={address:e.pool.token1.id,symbol:e.pool.token1.symbol,amount:e.amount1};let i,s;return n.amount>0?(i=n,s=t):(i=t,s=n),{hash:e.transaction.id,timestamp:e.timestamp,input:i,output:s,usdValue:e.amountUSD,makerAddress:e.origin}}))),[C]),k=(0,R.useMemo)((()=>{const y=(0,se.Cl)();return[y.accessor((e=>e.timestamp),{id:"timestamp",header:()=>(0,i.jsx)(ae.b,{minWidth:150,justifyContent:"flex-start",grow:!0,children:(0,i.jsxs)(de.d4,{$justify:"flex-start",onClick:()=>b(q.AI.Timestamp),children:[x.sortBy===q.AI.Timestamp&&(0,i.jsx)(de.iX,{direction:x.sortDirection}),(0,i.jsx)(m.Tv.BodySecondary,{children:(0,i.jsx)(o.cC,{id:"LhMjLm"})})]})}),cell:e=>(0,i.jsx)(ae.b,{loading:j,minWidth:150,justifyContent:"flex-start",grow:!0,children:(0,i.jsx)(m.Tv.BodySecondary,{children:(0,le.G)(1e3*Number(e.getValue?.()),t??ce.ZW)})})}),y.accessor((e=>e.output.address),{id:"swap-type",header:()=>(0,i.jsx)(ae.b,{minWidth:50,justifyContent:"flex-start",grow:!0,children:(0,i.jsxs)(de.j4,{modalOpen:l,onClick:c,ref:p,children:[(0,i.jsx)(re.w,{allFilters:Object.values(ie),activeFilter:h,setFilters:u,isOpen:l}),(0,i.jsx)(m.Tv.BodySecondary,{children:(0,i.jsx)(o.cC,{id:"+zy2Nq"})})]})}),cell:e=>(0,i.jsx)(ae.b,{loading:j,minWidth:50,justifyContent:"flex-start",grow:!0,children:(0,i.jsx)(m.Tv.BodyPrimary,{children:String(e.getValue?.()).toLowerCase()===n.address.toLowerCase()?(0,i.jsx)(o.cC,{id:"qiOIiY"}):(0,i.jsx)(o.cC,{id:"xNB0TS"})})})}),y.accessor((e=>e.input.address.toLowerCase()===n.address.toLowerCase()?e.input.amount:e.output.amount),{id:"reference-amount",header:()=>(0,i.jsx)(ae.b,{minWidth:150,justifyContent:"flex-end",children:(0,i.jsxs)(m.Tv.BodySecondary,{children:["$",n.symbol]})}),cell:e=>(0,i.jsx)(ae.b,{loading:j,minWidth:150,justifyContent:"flex-end",children:(0,i.jsx)(m.Tv.BodyPrimary,{children:a({input:Math.abs(e.getValue?.())||0})})})}),y.accessor((e=>{const t=e.input.address.toLowerCase()===n.address.toLowerCase()?e.output:e.input;return(0,i.jsxs)(fe,{children:[a({input:Math.abs(t.amount)||0})," ",(0,i.jsx)(de.m_,{to:`/explore/tokens/${d.toLowerCase()}/${t.address}`,children:t.symbol})]})}),{id:"non-reference-amount",header:()=>(0,i.jsx)(ae.b,{minWidth:150,justifyContent:"flex-end",children:(0,i.jsx)(m.Tv.BodySecondary,{children:(0,i.jsx)(o.cC,{id:"YHpbe1"})})}),cell:e=>(0,i.jsx)(ae.b,{loading:j,minWidth:150,justifyContent:"flex-end",children:e.getValue?.()})}),y.accessor((e=>e.usdValue),{id:"fiat-value",header:()=>(0,i.jsx)(ae.b,{minWidth:125,justifyContent:"flex-end",children:(0,i.jsxs)(de.d4,{$justify:"flex-end",onClick:()=>b(q.AI.AmountUsd),children:[x.sortBy===q.AI.AmountUsd&&(0,i.jsx)(de.iX,{direction:x.sortDirection}),(0,i.jsx)(m.Tv.BodySecondary,{children:s})]})}),cell:e=>(0,i.jsx)(ae.b,{loading:j,minWidth:125,justifyContent:"flex-end",children:(0,i.jsx)(m.Tv.BodyPrimary,{children:r({price:e.getValue?.()})})})}),y.accessor((e=>e.makerAddress),{id:"maker-address",header:()=>(0,i.jsx)(ae.b,{minWidth:100,justifyContent:"flex-end",children:(0,i.jsx)(m.Tv.BodySecondary,{children:(0,i.jsx)(o.cC,{id:"sb9Y58"})})}),cell:n=>(0,i.jsx)(ae.b,{loading:j,minWidth:100,justifyContent:"flex-end",children:(0,i.jsx)(de.Bq,{href:(0,me.E)(e,n.getValue?.(),me.r.ADDRESS),children:(0,f.Xn)(n.getValue?.(),0)})})})]}),[s,e,d,h,l,r,a,b,j,t,n.address,n.symbol,x.sortBy,x.sortDirection]);return(0,i.jsx)(oe.i,{columns:k,data:w,loading:j,loadMore:g,maxHeight:600})}const Ce=x.default.div.withConfig({displayName:"ActivitySection__Container",componentId:"sc-23e1ccec-0"})`
  width: 100%;
  display: flex;
  flex-direction: column;
`,je=(0,x.default)(B.xv).withConfig({displayName:"ActivitySection__Tab",componentId:"sc-23e1ccec-1"})`
  cursor: pointer;
  font-size: 24px !important;
  line-height: 32px !important;
  color: ${({isActive:e,theme:n})=>e?n.neutral1:n.neutral2};
  ${m.iV};
`;var ge;function be({chainId:e,referenceToken:n}){const[t,s]=(0,R.useState)(ge.Pools);return n?(0,i.jsxs)(Ce,{children:[(0,i.jsxs)(Y.ZP,{gap:"24px",marginBottom:"12px",id:"activity-header",children:[(0,i.jsx)(je,{isActive:t===ge.Pools,onClick:()=>s(ge.Pools),children:(0,i.jsx)(o.cC,{id:"lQfOr9"})}),(0,i.jsx)(je,{isActive:t===ge.Txs,onClick:()=>s(ge.Txs),children:(0,i.jsx)(o.cC,{id:"4wyw8H"})})]}),t===ge.Pools&&(0,i.jsx)(te,{chainId:e,referenceToken:n}),t===ge.Txs&&(0,i.jsx)(ye,{chainId:e,referenceToken:n})]}):null}!function(e){e[e.Pools=0]="Pools",e[e.Txs=1]="Txs"}(ge||(ge={}));var we=t(53609),ke=t(52214),Te=t(25093),ve=t(59815),Ie=t(72988);const Be=x.default.div.withConfig({displayName:"BalanceSummary__BalancesCard",componentId:"sc-a93662ad-0"})`
  color: ${({theme:e})=>e.neutral1};
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: fit-content;
  ${({isInfoTDPEnabled:e})=>!e&&"padding: 16px;"}
  width: 100%;

  // 768 hardcoded to match NFT-redesign navbar breakpoints
  // src/nft/css/sprinkles.css.ts
  // change to match theme breakpoints when this navbar is updated
  @media screen and (min-width: 768px) {
    display: flex;
  }
`,Ne=x.default.div.withConfig({displayName:"BalanceSummary__BalanceSection",componentId:"sc-a93662ad-1"})`
  height: fit-content;
  width: 100%;
`,Pe=x.default.div.withConfig({displayName:"BalanceSummary__BalanceRow",componentId:"sc-a93662ad-2"})`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-top: 12px;
`,Se=x.default.div.withConfig({displayName:"BalanceSummary__BalanceItem",componentId:"sc-a93662ad-3"})`
  display: flex;
  align-items: center;
`,De=x.default.div.withConfig({displayName:"BalanceSummary__BalanceContainer",componentId:"sc-a93662ad-4"})`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  flex: 1;
`,_e=x.default.div.withConfig({displayName:"BalanceSummary__BalanceAmountsContainer",componentId:"sc-a93662ad-5"})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  ${({isInfoTDPEnabled:e})=>e&&"margin-left: 12px;"}
`,$e=x.default.div.withConfig({displayName:"BalanceSummary__StyledNetworkLabel",componentId:"sc-a93662ad-6"})`
  color: ${({color:e})=>e};
  font-size: 12px;
  line-height: 16px;
`,Ee=({currency:e,chainId:n=K.ChainId.MAINNET,balance:t,gqlBalance:s,onClick:o})=>{const{formatCurrencyAmount:a,formatNumber:r}=(0,xe.Gb)(),{label:d,color:c}=(0,we.bt)((0,ke.oG)(n)??K.ChainId.MAINNET),p=(0,R.useMemo)((()=>[e]),[e]),h=(0,L.C)(),u=a({amount:t,type:xe.sw.TokenNonTx}),x=a({amount:(0,ve.sq)(t),type:xe.sw.PortfolioBalance}),f=r({input:s?.quantity,type:xe.sw.TokenNonTx}),y=r({input:s?.denominatedValue?.value,type:xe.sw.PortfolioBalance});return h?(0,i.jsxs)(Pe,{onClick:o,children:[(0,i.jsx)(l.V,{currencies:p,chainId:n,size:"2rem"}),(0,i.jsxs)(_e,{isInfoTDPEnabled:!0,children:[(0,i.jsx)(Se,{children:(0,i.jsx)(m.Tv.BodyPrimary,{children:y})}),(0,i.jsx)(Se,{children:(0,i.jsx)(m.Tv.BodySecondary,{children:f})})]})]}):(0,i.jsxs)(Pe,{children:[(0,i.jsx)(l.V,{currencies:p,chainId:n,size:"2rem"}),(0,i.jsxs)(De,{children:[(0,i.jsxs)(_e,{children:[(0,i.jsx)(Se,{children:(0,i.jsxs)(m.Tv.SubHeader,{children:[u," ",e?.symbol]})}),(0,i.jsx)(Se,{children:(0,i.jsx)(m.Tv.BodyPrimary,{children:x})})]}),(0,i.jsx)($e,{color:c,children:d})]})]})},Ae=({connectedChainBalance:e})=>{const{chainId:n}=(0,r.useWeb3React)();if(!n||!e||!e.greaterThan(0))return null;const t=e.currency,{label:s}=(0,we.bt)((0,ke.oG)(n)??K.ChainId.MAINNET);return(0,i.jsxs)(Ne,{children:[(0,i.jsx)(m.Tv.SubHeaderSmall,{color:"neutral1",children:(0,i.jsx)(o.cC,{id:"32vUOj",values:{chainName:s}})}),(0,i.jsx)(Ee,{currency:t,chainId:n,balance:e})]})},Le=({pageChainBalance:e})=>{if(!e||!e.token)return null;const n=(0,F.Pc)(e.token);return(0,i.jsxs)(Ne,{children:[(0,i.jsx)(m.Tv.HeadlineSmall,{color:"neutral1",children:(0,i.jsx)(o.cC,{id:"sQikRY"})}),(0,i.jsx)(Ee,{currency:n,chainId:n?.chainId,gqlBalance:e})]})},Me=({otherChainBalances:e,hasPageChainBalance:n})=>{const t=(0,Q.s0)(),s=(0,L.C)();return e.length?(0,i.jsxs)(Ne,{children:[n?(0,i.jsx)(m.Tv.SubHeaderSmall,{children:(0,i.jsx)(o.cC,{id:"tcMwDA"})}):(0,i.jsx)(m.Tv.HeadlineSmall,{children:(0,i.jsx)(o.cC,{id:"tQinFN"})}),e.map((e=>{const n=e.token&&(0,F.Pc)(e.token),o=(e.token&&(0,F.Tz)(e.token.chain))??K.ChainId.MAINNET;return(0,i.jsx)(Ee,{currency:n,chainId:o,gqlBalance:e,onClick:()=>t((0,F.dG)({address:e.token?.address,chain:e.token?.chain??Te.qo.Ethereum,isInfoExplorePageEnabled:s}))},e.id)}))]}):null};function Fe({currency:e,chain:n,multiChainMap:t}){const{account:s}=(0,r.useWeb3React)(),o=(0,M.e)(),a=(0,Ie.ZP)(s,e),d=t[n].balance,l=[];for(const[i,r]of Object.entries(t))i!==n&&void 0!==r.balance&&l.push(r.balance);const c=d||Boolean(l.length);return s&&c?(0,i.jsxs)(Be,{isInfoTDPEnabled:o,children:[!o&&(0,i.jsx)(Ae,{connectedChainBalance:a}),o&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Le,{pageChainBalance:d}),(0,i.jsx)(Me,{otherChainBalances:l,hasPageChainBalance:!!d})]})]}):null}var He=t(2715),Ze=t(34056),Re=t(2528),ze=t(7108),Oe=t(81223),We=t(52943),Ue=t(53499);const Ve=x.css`
  border-radius: 20px;
  min-width: 93px;
  height: 40px;
`,Qe=x.css`
  min-width: 130px;
  border-radius: 16px;
  right: 20px;
`;function Ge({options:e,currentChartType:n,onSelectOption:t}){const s=(0,x.useTheme)(),a=(0,We.xk)(Ue.Lk.TDP_CHART_TYPE_SELECTOR);return(0,i.jsx)(Ze.u,{modal:Ue.Lk.TDP_CHART_TYPE_SELECTOR,menuLabel:(0,i.jsx)(i.Fragment,{children:n}),internalMenuItems:(0,i.jsx)(i.Fragment,{children:e.map((e=>(0,i.jsxs)(Ze.f,{onClick:()=>{t(e),a()},children:[(0,i.jsx)(o.cC,{id:"JdnGjM",values:{chartType:e}}),e===n&&(0,i.jsx)(Oe.Z,{size:16,color:s.accent1})]},e)))}),buttonCss:Ve,menuFlyoutCss:Qe})}function Ye({options:e,currentChartType:n,onChartTypeChange:t}){return(0,ze.e)().sm?(0,i.jsx)(Re.Z,{options:e,currentSelected:n,onSelectOption:t}):(0,i.jsx)(Ge,{options:e,currentChartType:n,onSelectOption:t})}var Xe,qe=t(70357),Ke=t(47365);function Je(){return Je=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Je.apply(this,arguments)}function en(e,n){let{title:t,titleId:i,...s}=e;return R.createElement("svg",Je({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",ref:n,"aria-labelledby":i},s),t?R.createElement("title",{id:i},t):null,Xe||(Xe=R.createElement("path",{d:"M14.75 12C14.75 13.517 13.517 14.75 12 14.75C10.483 14.75 9.25004 13.517 9.25004 12C9.25004 11.651 9.32196 11.32 9.44096 11.012C9.63496 11.166 9.86903 11.272 10.136 11.272C10.763 11.272 11.272 10.763 11.272 10.136C11.272 9.86899 11.166 9.63492 11.012 9.44092C11.32 9.32192 11.651 9.25 12 9.25C13.517 9.25 14.75 10.483 14.75 12ZM20.5921 13.4771C19.3651 15.5311 16.609 19 12 19C7.39104 19 4.635 15.5311 3.408 13.4771C2.864 12.5671 2.864 11.4329 3.408 10.5229C4.635 8.46895 7.39104 5 12 5C16.609 5 19.3651 8.46895 20.5921 10.5229C21.1361 11.4329 21.1361 12.5671 20.5921 13.4771ZM16.25 12C16.25 9.657 14.344 7.75 12 7.75C9.65604 7.75 7.75004 9.657 7.75004 12C7.75004 14.343 9.65604 16.25 12 16.25C14.344 16.25 16.25 14.343 16.25 12Z",fill:"currentColor"})))}const nn=R.forwardRef(en),tn=(t.p,x.default.div.withConfig({displayName:"InvalidTokenDetails__InvalidDetailsContainer",componentId:"sc-6489a4a1-0"})`
  padding-top: 128px;
  display: flex;
  flex-direction: column;
  align-items: center;
`),sn=x.default.span.withConfig({displayName:"InvalidTokenDetails__InvalidDetailsText",componentId:"sc-6489a4a1-1"})`
  margin-top: 28px;
  margin-bottom: 20px;

  text-align: center;

  color: ${({theme:e})=>e.neutral2};
  font-size: 20px;
  font-weight: 535;
  line-height: 28px;
`,on=(0,x.default)(qe.DF).withConfig({displayName:"InvalidTokenDetails__TokenExploreButton",componentId:"sc-6489a4a1-2"})`
  width: fit-content;
  padding: 12px 16px;
  border-radius: 12px;

  color: ${({theme:e})=>e.neutral1};
  font-size: 16px;
  font-weight: 535;
`;function an({pageChainId:e,isInvalidAddress:n}){const{chainId:t}=(0,r.useWeb3React)(),s=(0,Q.s0)(),a=(0,Ke.Z)(),d=!n&&e===t,l=t?(0,we.bt)(t)?.label:void 0;return(0,i.jsxs)(tn,{children:[(0,i.jsx)(nn,{}),n||d?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(sn,{children:(0,i.jsx)(o.cC,{id:"5pThdE"})}),(0,i.jsx)(on,{onClick:()=>s("/tokens"),children:(0,i.jsx)(m.Tv.SubHeader,{children:(0,i.jsx)(o.cC,{id:"1ru2CS"})})})]}):(0,i.jsxs)(i.Fragment,{children:[l&&(0,i.jsx)(sn,{children:(0,i.jsx)(o.cC,{id:"xNuZYG",values:{connectedChainLabel:l}})}),(0,i.jsx)(on,{onClick:()=>a(e),children:(0,i.jsx)(m.Tv.SubHeader,{children:(0,i.jsx)(o.cC,{id:"1+P9RR",values:{0:(0,we.bt)(e).label}})})})]})]})}const rn=x.default.div.withConfig({displayName:"MobileBalanceSummaryFooter__Wrapper",componentId:"sc-24e9f897-0"})`
  align-content: center;
  align-items: center;
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  color: ${({theme:e})=>e.neutral2};
  display: flex;
  flex-direction: row;
  font-weight: 535;
  font-size: 14px;
  height: fit-content;
  justify-content: space-between;
  left: 0;
  line-height: 20px;
  position: fixed;

  ${({isInfoTDPEnabled:e})=>e?x.css`
          border-radius: 20px;
          bottom: 56px;
          margin: 8px;
          padding: 12px 32px;
          width: calc(100vw - 16px);
        `:x.css`
          border-bottom: none;
          border-radius: 20px 20px 0px 0px;
          bottom: 52px;
          padding: 12px 16px;
          width: 100%;
        `}

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    bottom: 0px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.lg}px) {
    display: none;
  }
`,dn=x.default.div.withConfig({displayName:"MobileBalanceSummaryFooter__BalanceValue",componentId:"sc-24e9f897-1"})`
  color: ${({theme:e})=>e.neutral1};
  font-size: 20px;
  line-height: ${({isInfoTDPEnabled:e})=>e?"20px":"28px"};
  display: flex;
  gap: 8px;
`,ln=x.default.div.withConfig({displayName:"MobileBalanceSummaryFooter__Balance",componentId:"sc-24e9f897-2"})`
  align-items: ${({isInfoTDPEnabled:e})=>e?"flex-end":"center"};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`,cn=x.default.div.withConfig({displayName:"MobileBalanceSummaryFooter__BalanceInfo",componentId:"sc-24e9f897-3"})`
  display: flex;
  flex: 10 1 auto;
  flex-direction: column;
  justify-content: flex-start;
  ${({isInfoTDPEnabled:e})=>e&&"gap: 6px;"}
`,pn=(0,x.default)(m.Tv.Caption).withConfig({displayName:"MobileBalanceSummaryFooter__FiatValue",componentId:"sc-24e9f897-4"})`
  ${({isInfoTDPEnabled:e,theme:n})=>!e&&`color: ${n.neutral2};`}
  font-size: 12px;
  line-height: 16px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    line-height: 24px;
  }
`,hn=(0,x.default)(m.m_).withConfig({displayName:"MobileBalanceSummaryFooter__SwapButton",componentId:"sc-24e9f897-5"})`
  background-color: ${({theme:e})=>e.accent1};
  border: none;
  border-radius: ${({isInfoTDPEnabled:e})=>e?"22px":"12px"};
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  display: flex;
  flex: 1 1 auto;
  padding: 12px 16px;
  font-size: ${({isInfoTDPEnabled:e})=>e?"16px":"1em"};
  font-weight: 535;
  height: 44px;
  justify-content: center;
  margin: auto;
  max-width: 100vw;
`;function un({currency:e,pageChainBalance:n}){const t=(0,M.e)(),{account:s}=(0,r.useWeb3React)(),a=(0,Ie.ZP)(s,e),{formatCurrencyAmount:d,formatNumber:l}=(0,xe.Gb)(),c=d({amount:a,type:xe.sw.TokenNonTx}),p=d({amount:(0,ve.sq)(a),type:xe.sw.FiatTokenStats}),h=l({input:n?.quantity,type:xe.sw.TokenNonTx}),u=l({input:n?.denominatedValue?.value,type:xe.sw.PortfolioBalance}),x=F.yC[e.chainId].toLowerCase();return(0,i.jsxs)(rn,{isInfoTDPEnabled:t,children:[Boolean(s&&(t?n:a))&&(0,i.jsxs)(cn,{isInfoTDPEnabled:t,children:[t?(0,i.jsx)(o.cC,{id:"sQikRY"}):(0,i.jsx)(o.cC,{id:"xn9ewN",values:{0:e.symbol}}),(0,i.jsxs)(ln,{isInfoTDPEnabled:t,children:[(0,i.jsxs)(dn,{isInfoTDPEnabled:t,children:[t?h:c," ",e.symbol]}),(0,i.jsx)(pn,{isInfoTDPEnabled:t,children:t?`(${u})`:p})]})]}),(0,i.jsx)(hn,{isInfoTDPEnabled:t,to:`/swap?chain=${x}&outputCurrency=${e.isNative?A.dt:e.address}`,children:(0,i.jsx)(o.cC,{id:"vH2C/2"})})]})}var xn=t(71587),mn=t(65023),fn=t(88584);const yn=e=>(0,i.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"transparent",...e,children:(0,i.jsx)("path",{d:"M5.12245 9.5625C5.23495 11.8725 6.01495 14.2275 7.37245 16.32C4.19245 15.615 1.76996 12.8925 1.52246 9.5625H5.12245ZM7.37245 1.67999C4.19245 2.38499 1.76996 5.1075 1.52246 8.4375H5.12245C5.23495 6.1275 6.01495 3.77249 7.37245 1.67999ZM9.14997 1.5H8.84995L8.62496 1.82249C7.19996 3.84749 6.36745 6.1725 6.24745 8.4375H11.7525C11.6325 6.1725 10.8 3.84749 9.37496 1.82249L9.14997 1.5ZM6.24745 9.5625C6.36745 11.8275 7.19996 14.1525 8.62496 16.1775L8.84995 16.5H9.14997L9.37496 16.1775C10.8 14.1525 11.6325 11.8275 11.7525 9.5625H6.24745ZM12.8775 9.5625C12.765 11.8725 11.985 14.2275 10.6275 16.32C13.8075 15.615 16.23 12.8925 16.4775 9.5625H12.8775ZM16.4775 8.4375C16.23 5.1075 13.8075 2.38499 10.6275 1.67999C11.985 3.77249 12.765 6.1275 12.8775 8.4375H16.4775Z",fill:e.fill??"#607BEE"})}),Cn=e=>(0,i.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"transparent",...e,children:(0,i.jsx)("path",{d:"M12.8761 3H14.9451L10.4251 8.16609L15.7425 15.196H11.579L8.31797 10.9324L4.58662 15.196H2.51644L7.35104 9.67026L2.25 3H6.51922L9.46689 6.89708L12.8761 3ZM12.15 13.9576H13.2964L5.89628 4.17332H4.66605L12.15 13.9576Z",fill:e.fill??"#607BEE"})});var jn=t(74163),gn=t(57777),bn=t(91943),wn=t(53904),kn=t(97472),Tn=t(39681),vn=t(17513),In=t(95114);const Bn=(0,x.default)(mn.ZP).withConfig({displayName:"TokenDescription__TokenInfoSection",componentId:"sc-aefff000-0"})`
  gap: 16px;
  width: 100%;

  @media (max-width: ${Tn.j$.lg-1}px) and (min-width: ${Tn.j$.sm}px) {
    max-width: 45%;
  }
`,Nn=(0,x.default)(Y.ZP).withConfig({displayName:"TokenDescription__TokenNameRow",componentId:"sc-aefff000-1"})`
  gap: 8px;
  width: 100%;
`,Pn=(0,x.default)(Nn).withConfig({displayName:"TokenDescription__TokenButtonRow",componentId:"sc-aefff000-2"})`
  flex-wrap: wrap;
`,Sn=(0,x.default)(Y.ZP).withConfig({displayName:"TokenDescription__TokenInfoButton",componentId:"sc-aefff000-3"})`
  gap: 8px;
  padding: 8px 12px;
  border-radius: 20px;
  color: ${({tokenColor:e})=>e};
  background-color: ${({tokenColor:e})=>(0,vn.j)(12,e)};
  font-size: 14px;
  font-weight: 535;
  line-height: 16px;
  width: max-content;
  ${m.iV}
`,Dn=(0,x.default)(m.Tv.BodyPrimary).withConfig({displayName:"TokenDescription__TokenDescriptionContainer",componentId:"sc-aefff000-4"})`
  ${m.cw}
  max-width: 100%;
  // max-height: fit-content;
  line-height: 24px;
  white-space: pre-wrap;
`,_n=x.default.p.withConfig({displayName:"TokenDescription__DescriptionVisibilityWrapper",componentId:"sc-aefff000-5"})`
  display: ${({$visible:e})=>e?"inline":"none"};
`,$n=75;function En({tokenAddress:e,chainId:n=K.ChainId.MAINNET,isNative:t=!1,characterCount:s=$n}){const a=(0,x.useTheme)().neutral1,r=(0,F.Ld)(n),{data:d}=(0,Te.wT)({variables:{address:t?(0,In.P)(r):e,chain:r},errorPolicy:"all"}),l=d?.token?.project,c=l?.description,p=(0,me.E)(n,e,t?me.r.NATIVE:me.r.TOKEN),[,h]=(0,bn.Z)(),u=(0,R.useCallback)((()=>{h(e)}),[e,h]),[y,C]=(0,R.useReducer)((e=>!e),!0),j=(0,xn.Nt)(c??"",s),g=!!c&&c.length>s,b=g&&y,{inputTax:w,outputTax:k}=(0,wn.j)(e,e),{formatPercent:T}=(0,xe.Gb)(),{sellFeeString:v,buyFeeString:I}={sellFeeString:T(w),buyFeeString:T(k)},B=Boolean(parseFloat(v))||Boolean(parseFloat(k.toFixed(2))),N=v===I;return(0,i.jsxs)(Bn,{children:[(0,i.jsx)(m.Tv.HeadlineSmall,{children:(0,i.jsx)(o.cC,{id:"CE+M2e"})}),(0,i.jsxs)(Pn,{children:[!t&&(0,i.jsxs)(Sn,{tokenColor:a,onClick:u,children:[(0,i.jsx)(kn.Z,{width:"18px",height:"18px",color:a}),(0,f.Xn)(e)]}),(0,i.jsx)(m.dL,{href:p,children:(0,i.jsxs)(Sn,{tokenColor:a,children:[(0,i.jsx)(fn.P,{width:"18px",height:"18px",fill:a}),n===K.ChainId.MAINNET?(0,i.jsx)(o.cC,{id:"nS3bjC"}):(0,i.jsx)(o.cC,{id:"vtJ2yO"})]})}),!!l?.homepageUrl&&(0,i.jsx)(m.dL,{href:l.homepageUrl,children:(0,i.jsxs)(Sn,{tokenColor:a,children:[(0,i.jsx)(yn,{width:"18px",height:"18px",fill:a}),(0,i.jsx)(o.cC,{id:"On0aF2"})]})}),!!l?.twitterName&&(0,i.jsx)(m.dL,{href:`https://x.com/${l.twitterName}`,children:(0,i.jsxs)(Sn,{tokenColor:a,children:[(0,i.jsx)(Cn,{width:"18px",height:"18px",fill:a}),(0,i.jsx)(o.cC,{id:"0F2sI+"})]})})]}),(0,i.jsxs)(Dn,{children:[!c&&(0,i.jsx)(xn.aZ,{children:(0,i.jsx)(o.cC,{id:"kXI9SA"})}),c&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(_n,{"data-testid":"token-description-full",$visible:!b,children:c}),(0,i.jsx)(_n,{"data-testid":"token-description-truncated",$visible:b,children:j})]}),g&&(0,i.jsx)(xn.ou,{onClick:C,"data-testid":"token-description-show-more-button",children:y?(0,i.jsx)(o.cC,{id:"fMPkxb"}):(0,i.jsx)(o.cC,{id:"vLyv1R"})})]}),B&&(0,i.jsx)(gn.ud,{placement:"left",size:gn.Oz.Small,text:(0,i.jsx)(m.Tv.Caption,{color:"neutral2",children:(0,i.jsx)(jn.gE,{})}),children:(0,i.jsx)(mn.ZP,{gap:"sm",children:N?(0,i.jsxs)(m.Tv.BodyPrimary,{children:[d?.token?.symbol,"\xa0",(0,i.jsx)(o.cC,{id:"oSCKSR"}),"\xa0",v]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(m.Tv.BodyPrimary,{children:[d?.token?.symbol,"\xa0",(0,i.jsx)(o.cC,{id:"JzWZvv"}),"\xa0",I]})," ",(0,i.jsxs)(m.Tv.BodyPrimary,{children:[d?.token?.symbol,"\xa0",(0,i.jsx)(o.cC,{id:"sHAUpq"}),"\xa0",v]})," "]})})})]})}const An=x.default.span.withConfig({displayName:"TokenDetails__TokenSymbol",componentId:"sc-eb54e388-0"})`
  text-transform: uppercase;
  color: ${({theme:e})=>e.neutral2};
  margin-left: 8px;

  ${({isInfoTDPEnabled:e})=>e&&x.css`
      @media screen and (max-width: ${({theme:e})=>e.breakpoint.xs}px) {
        display: none;
      }
    `}
`,Ln=x.default.div.withConfig({displayName:"TokenDetails__ChartActions",componentId:"sc-eb54e388-1"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,Mn=x.default.div.withConfig({displayName:"TokenDetails__TokenTitle",componentId:"sc-eb54e388-2"})`
  display: flex;

  ${({isInfoTDPEnabled:e})=>e?x.css`
          overflow: hidden;
          white-space: nowrap;
        `:x.css`
          @media screen and (max-width: ${({theme:e})=>e.breakpoint.md}px) {
            display: inline;
          }
        `}
`,Fn=x.default.span.withConfig({displayName:"TokenDetails__TokenName",componentId:"sc-eb54e388-3"})`
  ${m.cw}
  min-width: 40px;
`,Hn=(0,x.default)(xn.Hr).withConfig({displayName:"TokenDetails__DividerLine",componentId:"sc-eb54e388-4"})`
  margin-top: 40px;
  margin-bottom: 40px;
  @media screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    display: none;
  }
`;function Zn(e,n,t){const{chainId:i}=(0,r.useWeb3React)(),s=(0,R.useMemo)((()=>{if(e)return e===A.dt?(0,A.gX)(n):t?(0,F.Pc)(t):void 0}),[n,e,t]),o=Boolean(s)||n!==i,a=function(e,n){const t=(0,O.zA)(n||!e?void 0:e);return n||!e||t&&t?.symbol===O.eu?void 0:t}(e,o);return(0,R.useMemo)((()=>({token:s??a,didFetchFromChain:!s})),[a,s])}function Rn(e){return e?e.isToken?e.address:A.dt:""}function zn({urlAddress:e,inputTokenAddress:n,chain:t,tokenQuery:m,tokenPriceQuery:y,timePeriod:C,onChangeTimePeriod:T}){if(!e)throw new Error("Invalid token details route: tokenAddress param is undefined");const v=(0,R.useMemo)((()=>e===A.dt?e:(0,f.UJ)(e)||void 0),[e]),{account:I,chainId:B}=(0,r.useWeb3React)(),N=(0,F.Tz)(t),P=(0,H.U8)(n,N),S=(0,H.U8)(v===A.dt?"ETH":v,N),D=m.token,{data:_}=(0,s.T)({account:I}),O=(0,R.useMemo)((()=>{const e=_?.portfolios?.[0].tokenBalances,n=D?.project?.tokens;return n?n.reduce(((n,t)=>(t&&(n[t.chain]||(n[t.chain]={}),n[t.chain].address=t.address,n[t.chain].balance=e?.find((e=>e.token?.id===t.id))),n)),{}):{}}),[_?.portfolios,D?.project?.tokens]),{token:Y,didFetchFromChain:X}=Zn(v,N,D),q=v?(0,k.y8)(v):null,K=!1===q?.canProceed,J=(0,Q.s0)(),ee=(0,x.useTheme)(),ne=(0,Z.r)(Y??void 0,ee.surface2,ee.darkMode),te=(0,L.C)(),ie=(0,M.e)(),[se,oe]=(0,R.useTransition)(),ae=(0,R.useCallback)((e=>{if(!v)return;const n=O[e]?.address;n?oe((()=>J((0,F.dG)({address:n,chain:e,isInfoExplorePageEnabled:te})))):(X||Y?.isNative)&&oe((()=>J((0,F.dG)({address:v,chain:e,isInfoExplorePageEnabled:te}))))}),[v,O,X,Y?.isNative,J,te]);z(ae);const re=(0,R.useCallback)((e=>{const n=Rn(e.inputCurrency),i=Rn(e.outputCurrency);if((0,G.K)(n,v)||(0,G.K)(i,v))return;const s=e.outputCurrency??e.inputCurrency;s&&oe((()=>J((0,F.dG)({address:s.isNative?null:s.address,chain:t,inputAddress:e.inputCurrency&&e.inputCurrency!==s?n:null,isInfoExplorePageEnabled:te}))))}),[v,t,te,J]),[de,le]=(0,R.useState)(),[ce,pe]=(0,R.useState)(!1),he=(0,R.useCallback)((e=>{de?.resolve(e),le(void 0)}),[de,le]),[ue,xe]=(0,R.useState)(h.oX.PRICE),[me,fe]=(0,R.useState)(h.E4.LINE);if(void 0===Y||!v)return(0,i.jsx)(an,{pageChainId:N,isInvalidAddress:!v});const ye=Y&&(Y.symbol??(0,i.jsx)(o.cC,{id:"F2FJu3"})),Ce=Y&&Y.name&&Y.symbol?`${Y.name} (${Y.symbol})`:Y?.name||Y?.symbol||"";return(0,i.jsx)(d.fM,{page:a.yJ.TOKEN_DETAILS_PAGE,properties:{tokenAddress:v,tokenName:Y?.name},shouldLogImpression:!0,children:(0,i.jsxs)(b.Gy,{children:[Y&&!se?(0,i.jsxs)(b.WQ,{children:[ie?(0,i.jsxs)(c.zG,{isInfoTDPEnabled:!0,"aria-label":"breadcrumb-nav",children:[(0,i.jsxs)(c.yY,{to:`/explore/${t.toLowerCase()}`,children:[(0,i.jsx)(o.cC,{id:"8tjQCz"})," ",(0,i.jsx)(U.Z,{size:14})]}),(0,i.jsxs)(c.yY,{to:`/explore/tokens/${t.toLowerCase()}`,children:[(0,i.jsx)(o.cC,{id:"6RDwJM"})," ",(0,i.jsx)(U.Z,{size:14})]}),(0,i.jsx)(c.f3,{address:v,currency:Y,chainId:Y.chainId})]}):(0,i.jsx)(c.zG,{"aria-label":"breadcrumb-nav",children:(0,i.jsxs)(c.yY,{to:`${te?"/explore":""}/tokens/${t.toLowerCase()}`,children:[(0,i.jsx)(V.Z,{"data-testid":"token-details-return-button",size:14})," Tokens"]})}),(0,i.jsxs)(b.Pn,{isInfoTDPEnabled:ie,"data-testid":"token-info-container",children:[(0,i.jsxs)(b.yn,{isInfoTDPEnabled:ie,children:[(0,i.jsx)(l.V,{currencies:[Y],chainId:Y.chainId,size:"32px"}),ie?(0,i.jsxs)(Mn,{isInfoTDPEnabled:!0,children:[(0,i.jsx)(Fn,{children:Y.name??(0,i.jsx)(o.cC,{id:"zKpHYG"})}),(0,i.jsx)(An,{isInfoTDPEnabled:!0,children:ye})]}):(0,i.jsxs)(Mn,{children:[Y.name??(0,i.jsx)(o.cC,{id:"zKpHYG"}),(0,i.jsx)(An,{children:ye})]})]}),(0,i.jsx)(Ln,{children:ie?(0,i.jsxs)(i.Fragment,{children:[ue===h.oX.PRICE&&(0,i.jsx)(He.P,{currentChartType:me,onChartTypeChange:fe}),(0,i.jsx)(Ye,{options:[h.oX.PRICE,h.oX.VOLUME,h.oX.TVL],currentChartType:ue,onChartTypeChange:e=>{xe(e),e===h.oX.PRICE&&fe(h.E4.LINE)}})]}):(0,i.jsx)(p.Z,{name:Ce})})]}),(0,i.jsx)(g.ZP,{chartType:ue,priceChartType:me,timePeriod:C,onChangeTimePeriod:T,tokenPriceQuery:y,extractedColor:ne}),(0,i.jsx)(w.ZP,{chainId:N,address:v,tokenQueryData:D}),!ie&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(xn.Hr,{}),(0,i.jsx)(u.ez,{address:v,chainId:N,description:D?.project?.description,homepageUrl:D?.project?.homepageUrl,twitterName:D?.project?.twitterName}),!Y.isNative&&(0,i.jsx)(j,{address:v})]}),ie&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Hn,{}),(0,i.jsx)(be,{chainId:N,referenceToken:Y.wrapped})]})]}):(0,i.jsx)(b.ZP,{}),(0,i.jsxs)(b.QN,{isInfoTDPEnabled:ie,onClick:()=>K&&pe(!0),children:[(0,i.jsx)("div",{style:{pointerEvents:K?"none":"auto"},children:(0,i.jsx)(W.HY,{chainId:N,initialInputCurrency:P,initialOutputCurrency:S,onCurrencyChange:re,disableTokenInputs:N!==B})}),q&&(0,i.jsx)($,{tokenAddress:v,warning:q}),Y&&(0,i.jsx)(Fe,{currency:Y,chain:t,multiChainMap:O}),ie&&(0,i.jsx)(En,{tokenAddress:v,chainId:N,isNative:Y?.isNative,characterCount:200})]}),Y&&(0,i.jsx)(un,{currency:Y,pageChainBalance:O[t].balance}),(0,i.jsx)(E.Z,{isOpen:ce||!!de,tokenAddress:v,onContinue:()=>he(!0),onBlocked:()=>{pe(!1)},onCancel:()=>he(!1),showCancel:!0})]})})}var On=t(99584),Wn=t(41523),Un=t(54314);const Vn=(e,n)=>{const t=e?.token?.name,i=e?.token?.symbol,s="Buy & Trade",o=n?"":": Live Price & Chart on Goblins";return t||i?!t&&i?Un.ag._({id:"op841Q",values:{baseTitle:s,tokenSymbol:i,searchDetail:o}}):t&&!i?Un.ag._({id:"9XhrCC",values:{baseTitle:s,tokenName:t,searchDetail:o}}):Un.ag._({id:"FtlHKp",values:{baseTitle:s,tokenName:t,tokenSymbol:i,searchDetail:o}}):Un.ag._({id:"VnyFhc",values:{baseTitle:s,searchDetail:o}})},Qn=(0,x.default)(s.Z).withConfig({displayName:"TokenDetails__StyledPrefetchBalancesWrapper",componentId:"sc-5df0e377-0"})`
  display: contents;
`;function Gn(){const{tokenAddress:e,chainName:n}=(0,Q.UO)(),t=(0,F.Qj)(n),s=e===A.dt,[o,a]=(0,R.useState)(F.XH.DAY),[r,d]=(0,R.useMemo)((()=>[s?(0,In.P)(t):e??"",(0,F.uw)(o)]),[t,s,o,e]),l=(0,On.Z)(),c=(0,R.useMemo)((()=>"string"===typeof l.inputCurrency?l.inputCurrency:void 0),[l]),{data:p}=(0,Te.rS)({variables:{address:r,chain:t},errorPolicy:"all"}),{data:h}=(0,Te.m)({variables:{address:r,chain:t,duration:d},errorPolicy:"all"}),[u,x]=(0,R.useState)(h);return(0,R.useEffect)((()=>{h&&x(h)}),[x,h]),p?(0,i.jsxs)(Qn,{shouldFetchOnAccountUpdate:!0,shouldFetchOnHover:!1,children:[(0,i.jsx)(Wn.q,{children:(0,i.jsx)("title",{children:Vn(p)})}),(0,i.jsx)(zn,{urlAddress:e,chain:t,tokenQuery:p,tokenPriceQuery:u,inputTokenAddress:c,timePeriod:o,onChangeTimePeriod:a})]}):(0,i.jsx)(b.lJ,{})}},63486:(e,n,t)=>{function i(e,n){return!(!e||!n)&&(e===n||e.toLowerCase()===n.toLowerCase())}t.d(n,{K:()=>i})}}]);
//# sourceMappingURL=6130.2886b02c.chunk.js.map