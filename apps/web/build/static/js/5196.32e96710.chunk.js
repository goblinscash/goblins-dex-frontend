"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[5196],{21347:(e,t,i)=>{i.d(t,{Z:()=>m});var n=i(21339),o=i(88693),r=i(26390),s=i(79799),a=i(33552),d=i(57777);const c=a.default.div.withConfig({displayName:"RangeBadge__BadgeWrapper",componentId:"sc-5538a536-0"})`
  font-size: 14px;
  display: flex;
  justify-content: flex-end;
`,l=a.default.div.withConfig({displayName:"RangeBadge__BadgeText",componentId:"sc-5538a536-1"})`
  font-weight: 535;
  font-size: 12px;
  line-height: 14px;
  margin-right: 8px;
`,p=a.default.span.withConfig({displayName:"RangeBadge__ActiveDot",componentId:"sc-5538a536-2"})`
  background-color: ${({theme:e})=>e.success};
  border-radius: 50%;
  height: 8px;
  width: 8px;
`,u=a.default.div.withConfig({displayName:"RangeBadge__LabelText",componentId:"sc-5538a536-3"})`
  align-items: center;
  color: ${({color:e})=>e};
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;function m({removed:e,inRange:t}){const i=(0,a.useTheme)();return(0,n.jsx)(c,{children:e?(0,n.jsx)(d.ud,{text:(0,n.jsx)(o.cC,{id:"MZPP7t"}),children:(0,n.jsxs)(u,{color:i.neutral2,children:[(0,n.jsx)(l,{children:(0,n.jsx)(o.cC,{id:"D87pha"})}),(0,n.jsx)(r.Z,{width:12,height:12})]})}):t?(0,n.jsx)(d.ud,{text:(0,n.jsx)(o.cC,{id:"aIvv/z"}),children:(0,n.jsxs)(u,{color:i.success,children:[(0,n.jsx)(l,{children:(0,n.jsx)(o.cC,{id:"vOyUlD"})}),(0,n.jsx)(p,{})]})}):(0,n.jsx)(d.ud,{text:(0,n.jsx)(o.cC,{id:"IwiTcw"}),children:(0,n.jsxs)(u,{color:i.deprecated_accentWarning,children:[(0,n.jsx)(l,{children:(0,n.jsx)(o.cC,{id:"i3Z+/Z"})}),(0,n.jsx)(s.Z,{width:12,height:12})]})})})}},91239:(e,t,i)=>{i.d(t,{Z:()=>a});var n=i(21339),o=i(57777),r=i(39491);const s=i(33552).default.span.withConfig({displayName:"HoverInlineText__TextWrapper",componentId:"sc-707bc6e1-0"})`
  margin-left: ${({margin:e})=>e&&"4px"};
  font-size: ${({fontSize:e})=>e??"inherit"};

  @media screen and (max-width: 600px) {
    font-size: ${({adjustSize:e})=>e&&"12px"};
  }
`,a=({text:e,maxCharacters:t=20,margin:i=!1,adjustSize:a=!1,fontSize:d,textColor:c,link:l,...p})=>{const[u,m]=(0,r.useState)(!1);return e?e.length>t?(0,n.jsx)(o.ZP,{text:e,show:u,children:(0,n.jsx)(s,{onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),margin:i,adjustSize:a,textColor:c,link:l,fontSize:d,...p,children:" "+e.slice(0,t-1)+"..."})}):(0,n.jsx)(s,{margin:i,adjustSize:a,link:l,fontSize:d,textColor:c,...p,children:e}):(0,n.jsx)("span",{})}},73018:(e,t,i)=>{i.d(t,{N:()=>A,Z:()=>M});var n=i(21339),o=i(88693),r=i(82032),s=i(39303),a=i(21347),d=i(94727),c=i(91239),l=i(3689),p=i(17358),u=i(12973),m=i(54550),f=i(77910),h=i(39491),x=i(99123),g=i(47021),w=i(33552),I=i(39681),_=i(10548),b=i(19369),y=i(82574),k=i(46778);const j=(0,w.default)(x.rU).withConfig({displayName:"PositionListItem__LinkRow",componentId:"sc-c6f6cae0-0"})`
  align-items: center;
  display: flex;
  cursor: pointer;
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${({theme:e})=>e.neutral1};
  padding: 16px;
  text-decoration: none;
  font-weight: 535;

  & > div:not(:first-child) {
    text-align: center;
  }
  :hover {
    background-color: ${({theme:e})=>e.deprecated_hoverDefault};
  }

  @media screen and (min-width: ${I.e.deprecated_upToSmall}px) {
    /* flex-direction: row; */
  }

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    flex-direction: column;
    row-gap: 8px;
  `};
`,v=w.default.div.withConfig({displayName:"PositionListItem__DataLineItem",componentId:"sc-c6f6cae0-1"})`
  font-size: 14px;
`,C=(0,w.default)(v).withConfig({displayName:"PositionListItem__RangeLineItem",componentId:"sc-c6f6cae0-2"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
  width: 100%;
`,S=w.default.span.withConfig({displayName:"PositionListItem__DoubleArrow",componentId:"sc-c6f6cae0-3"})`
  font-size: 12px;
  margin: 0 2px;
  color: ${({theme:e})=>e.neutral1};
`,T=(0,w.default)(_.Tv.BodySmall).withConfig({displayName:"PositionListItem__RangeText",componentId:"sc-c6f6cae0-4"})`
  font-size: 14px !important;
  word-break: break-word;
  padding: 0.25rem 0.25rem;
  border-radius: 8px;
`,L=(0,w.default)(_.Tv.UtilityBadge).withConfig({displayName:"PositionListItem__FeeTierText",componentId:"sc-c6f6cae0-5"})`
  font-size: 16px !important;
  margin-left: 8px !important;
  color: ${({theme:e})=>e.neutral3};
`,N=(0,w.default)(_.Tv.BodySmall).withConfig({displayName:"PositionListItem__ExtentsText",componentId:"sc-c6f6cae0-6"})`
  color: ${({theme:e})=>e.neutral2};
  display: inline-block;
  line-height: 16px;
  margin-right: 4px !important;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    display: none;
  `};
`,P=w.default.div.withConfig({displayName:"PositionListItem__PrimaryPositionIdData",componentId:"sc-c6f6cae0-7"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  > * {
    margin-right: 8px;
  }
`;function A(e){if(!e)return{};const t=e.amount0.currency,i=e.amount1.currency;if([k.h1,k.Hz,k.AA].some((e=>e.equals(t))))return{priceLower:e.token0PriceUpper.invert(),priceUpper:e.token0PriceLower.invert(),quote:t,base:i};return[...Object.values(k.Fl),k.ML].some((e=>e&&e.equals(i)))||e.token0PriceUpper.lessThan(1)?{priceLower:e.token0PriceUpper.invert(),priceUpper:e.token0PriceLower.invert(),quote:t,base:i}:{priceLower:e.token0PriceLower,priceUpper:e.token0PriceUpper,quote:i,base:t}}function M({token0:e,token1:t,tokenId:i,fee:x,liquidity:w,tickLower:I,tickUpper:k}){const{formatDelta:v,formatTickPrice:M}=(0,b.Gb)(),E=(0,u.dQ)(e),$=(0,u.dQ)(t),O=E?(0,y.B)(E):void 0,R=$?(0,y.B)($):void 0,[,z]=(0,f.AI)(O??void 0,R??void 0,x),D=(0,h.useMemo)((()=>{if(z)return new s.Position({pool:z,liquidity:w.toString(),tickLower:I,tickUpper:k})}),[w,z,I,k]),U=(0,m.Z)(x,I,k),{priceLower:X,priceUpper:q,quote:B,base:Z}=A(D),G=B&&(0,y.B)(B),W=Z&&(0,y.B)(Z),V=!!z&&(z.tickCurrent<I||z.tickCurrent>=k),Y="/pools/"+i,K=w?.eq(0);return(0,n.jsxs)(j,{to:Y,children:[(0,n.jsxs)(p.m0,{children:[(0,n.jsxs)(P,{children:[(0,n.jsx)(d.Z,{currency0:W,currency1:G,size:18,margin:!0}),(0,n.jsxs)(_.Tv.SubHeader,{children:["\xa0",G?.symbol,"\xa0/\xa0",W?.symbol]}),(0,n.jsx)(L,{children:(0,n.jsx)(o.cC,{id:"J/hVSQ",values:{0:v(parseFloat(new r.Percent(x,1e6).toSignificant()))}})})]}),(0,n.jsx)(a.Z,{removed:K,inRange:!V})]}),X&&q?(0,n.jsxs)(C,{children:[(0,n.jsxs)(T,{children:[(0,n.jsx)(N,{children:(0,n.jsx)(o.cC,{id:"0uYsLP"})}),(0,n.jsx)(o.cC,{id:"YAzUzD",values:{0:M({price:X,atLimit:U,direction:g.Mb.LOWER})},components:{0:(0,n.jsx)("span",{}),1:(0,n.jsx)(c.Z,{text:G?.symbol}),2:(0,n.jsx)(c.Z,{text:W?.symbol??""})}})]})," ",(0,n.jsxs)(_.Pw,{children:[(0,n.jsx)(S,{children:"\u2194"})," "]}),(0,n.jsxs)(_.Z,{children:[(0,n.jsx)(S,{children:"\u2194"})," "]}),(0,n.jsxs)(T,{children:[(0,n.jsx)(N,{children:(0,n.jsx)(o.cC,{id:"BniuBY"})}),(0,n.jsx)(o.cC,{id:"YAzUzD",values:{0:M({price:q,atLimit:U,direction:g.Mb.UPPER})},components:{0:(0,n.jsx)("span",{}),1:(0,n.jsx)(c.Z,{text:G?.symbol}),2:(0,n.jsx)(c.Z,{maxCharacters:10,text:W?.symbol})}})]})]}):(0,n.jsx)(l.ZP,{})]})}},54550:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(39303),o=i(39491),r=i(47021);function s(e,t,i){return(0,o.useMemo)((()=>({[r.Mb.LOWER]:e&&t?t===(0,n.nearestUsableTick)(n.TickMath.MIN_TICK,n.TICK_SPACINGS[e]):void 0,[r.Mb.UPPER]:e&&i?i===(0,n.nearestUsableTick)(n.TickMath.MAX_TICK,n.TICK_SPACINGS[e]):void 0})),[e,t,i])}},77910:(e,t,i)=>{i.d(t,{AI:()=>g,Oh:()=>x,tK:()=>h});var n=i(94653),o=i(82032),r=i(87270),s=i(39303),a=i(75422),d=i(44595),c=i.n(d),l=i(14844),p=i(39491);function u(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const m=new n.vU(r.Mt);let f=class{static getPoolAddress(e,t,i,n){this.addresses.length>this.MAX_ENTRIES&&(this.addresses=this.addresses.slice(0,this.MAX_ENTRIES/2));const{address:o}=t,{address:r}=i,a=`${e}:${o}:${r}:${n.toString()}`,d=this.addresses.find((e=>e.key===a));if(d)return d.address;const c={key:a,address:(0,s.computePoolAddress)({factoryAddress:e,tokenA:t,tokenB:i,fee:n})};return this.addresses.unshift(c),c.address}static getPool(e,t,i,n,o,r){this.pools.length>this.MAX_ENTRIES&&(this.pools=this.pools.slice(0,this.MAX_ENTRIES/2));const a=this.pools.find((s=>s.token0===e&&s.token1===t&&s.fee===i&&c().EQ(s.sqrtRatioX96,n)&&c().EQ(s.liquidity,o)&&s.tickCurrent===r));if(a)return a;const d=new s.Pool(e,t,i,n,o,r);return this.pools.unshift(d),d}};var h;function x(e){const{chainId:t}=(0,a.useWeb3React)(),i=(0,p.useMemo)((()=>t?e.map((([e,t,i])=>{if(e&&t&&i){const n=e.wrapped,o=t.wrapped;if(n.equals(o))return;return n.sortsBefore(o)?[n,o,i]:[o,n,i]}})):new Array(e.length)),[t,e]),n=(0,p.useMemo)((()=>{const e=t&&o.V3_CORE_FACTORY_ADDRESSES[t];return e?i.map((t=>t&&f.getPoolAddress(e,...t))):new Array(i.length)}),[t,i]),r=(0,l._Y)(n,m,"slot0"),s=(0,l._Y)(n,m,"liquidity");return(0,p.useMemo)((()=>e.map(((e,t)=>{const n=i[t];if(!n)return[h.INVALID,null];const[o,a,d]=n;if(!r[t])return[h.INVALID,null];const{result:c,loading:l,valid:p}=r[t];if(!s[t])return[h.INVALID,null];const{result:u,loading:m,valid:x}=s[t];if(!n||!p||!x)return[h.INVALID,null];if(l||m)return[h.LOADING,null];if(!c||!u)return[h.NOT_EXISTS,null];if(!c.sqrtPriceX96||c.sqrtPriceX96.eq(0))return[h.NOT_EXISTS,null];try{const e=f.getPool(o,a,d,c.sqrtPriceX96,u[0],c.tick);return[h.EXISTS,e]}catch(g){return console.error("Error when constructing the pool",g),[h.NOT_EXISTS,null]}}))),[s,e,r,i])}function g(e,t,i){return x((0,p.useMemo)((()=>[[e,t,i]]),[e,t,i]))[0]}u(f,"MAX_ENTRIES",128),u(f,"pools",[]),u(f,"addresses",[]),function(e){e[e.LOADING=0]="LOADING",e[e.NOT_EXISTS=1]="NOT_EXISTS",e[e.EXISTS=2]="EXISTS",e[e.INVALID=3]="INVALID"}(h||(h={}))},370:(e,t,i)=>{i.d(t,{W:()=>c,n:()=>d});var n=i(54100),o=i(14844),r=i(39491),s=i(22855);function a(e){const t=(0,s.GL)(),i=(0,r.useMemo)((()=>e?e.map((e=>[n.O$.from(e)])):[]),[e]),a=(0,o.es)(t,"positions",i),d=(0,r.useMemo)((()=>a.some((({loading:e})=>e))),[a]),c=(0,r.useMemo)((()=>a.some((({error:e})=>e))),[a]),l=(0,r.useMemo)((()=>{if(!d&&!c&&e)return a.map(((t,i)=>{const n=e[i],o=t.result;return{tokenId:n,fee:o.fee,feeGrowthInside0LastX128:o.feeGrowthInside0LastX128,feeGrowthInside1LastX128:o.feeGrowthInside1LastX128,liquidity:o.liquidity,nonce:o.nonce,operator:o.operator,tickLower:o.tickLower,tickUpper:o.tickUpper,token0:o.token0,token1:o.token1,tokensOwed0:o.tokensOwed0,tokensOwed1:o.tokensOwed1}}))}),[d,c,a,e]);return{loading:d,positions:l?.map(((e,t)=>({...e,tokenId:i[t][0]})))}}function d(e){const t=a(e?[e]:void 0);return{loading:t.loading,position:t.positions?.[0]}}function c(e){const t=(0,s.GL)(),{loading:i,result:d}=(0,o.Wk)(t,"balanceOf",[e??void 0]),c=d?.[0]?.toNumber(),l=(0,r.useMemo)((()=>{if(c&&e){const t=[];for(let i=0;i<c;i++)t.push([e,i]);return t}return[]}),[e,c]),p=(0,o.es)(t,"tokenOfOwnerByIndex",l),u=(0,r.useMemo)((()=>p.some((({loading:e})=>e))),[p]),m=(0,r.useMemo)((()=>e?p.map((({result:e})=>e)).filter((e=>!!e)).map((e=>n.O$.from(e[0]))):[]),[e,p]),{positions:f,loading:h}=a(m);return{loading:u||i||h,positions:f}}},1707:(e,t,i)=>{i.d(t,{DC:()=>a,ER:()=>d,bb:()=>c,im:()=>s,pr:()=>l});var n=i(29826),o=i(9726),r=i(33552);const s=r.default.div.withConfig({displayName:"styled__Wrapper",componentId:"sc-bfb6c8b8-0"})`
  position: relative;
  padding: 20px;
`,a=(0,r.default)(o.xv).withConfig({displayName:"styled__ClickableText",componentId:"sc-bfb6c8b8-1"})`
  :hover {
    cursor: pointer;
  }
  color: ${({theme:e})=>e.accent1};
`,d=r.default.button.withConfig({displayName:"styled__MaxButton",componentId:"sc-bfb6c8b8-2"})`
  padding: 0.5rem 1rem;
  background-color: ${({theme:e})=>e.accent2};
  border: 1px solid ${({theme:e})=>e.accent2};
  border-radius: 0.5rem;
  font-size: 1rem;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    padding: 0.25rem 0.5rem;
  `};
  font-weight: 535;
  cursor: pointer;
  margin: 0.25rem;
  overflow: hidden;
  color: ${({theme:e})=>e.accent1};
  :hover {
    border: 1px solid ${({theme:e})=>e.accent1};
  }
  :focus {
    border: 1px solid ${({theme:e})=>e.accent1};
    outline: none;
  }
`,c=r.default.span.withConfig({displayName:"styled__Dots",componentId:"sc-bfb6c8b8-3"})`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: '.';
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`,l=(0,r.default)(n.pr).withConfig({displayName:"styled__LoadingRows",componentId:"sc-bfb6c8b8-4"})`
  padding-top: 36px;
  min-width: 75%;
  max-width: 960px;
  grid-column-gap: 0.5em;
  grid-row-gap: 0.8em;
  grid-template-columns: repeat(3, 1fr);
  padding: 8px;

  & > div:nth-child(4n + 1) {
    grid-column: 1 / 3;
  }
  & > div:nth-child(4n) {
    grid-column: 3 / 4;
    margin-bottom: 2em;
  }
`}}]);
//# sourceMappingURL=5196.32e96710.chunk.js.map