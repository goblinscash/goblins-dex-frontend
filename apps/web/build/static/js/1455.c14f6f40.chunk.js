"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[1455,2574],{70359:(e,i,n)=>{n.d(i,{WP:()=>D,ZP:()=>$,rG:()=>_});var t=n(21339),r=n(88693),d=n(82032),s=n(75422),o=n(44595),a=n.n(o),c=n(25400),l=n(39491),x=n(66214),u=n(58594),h=n(99123),p=n(9726),g=n(33552),f=n(10548),j=n(59926),m=n(21309),y=n(62855),b=n(61265),v=n(51232),S=n(82574),w=n(70357),C=n(32345),z=n(65023),k=n(94727),A=n(34896),I=n(44680),T=n(17358),q=n(73474);const _=(0,g.default)(T.m0).withConfig({displayName:"PositionCard__FixedHeightRow",componentId:"sc-ca448159-0"})`
  height: 24px;
`,W=(0,g.default)(C.hl).withConfig({displayName:"PositionCard__StyledPositionCard",componentId:"sc-ca448159-1"})`
  border: none;
  background: ${({theme:e,bgColor:i})=>`radial-gradient(91.85% 100% at 1.84% 0%, ${(0,c.DZ)(.8,i)} 0%, ${e.surface2} 100%) `};
  position: relative;
  overflow: hidden;
`;function D({pair:e,showUnwrapped:i=!1,border:n}){const{account:o}=(0,s.useWeb3React)(),c=i?e.token0:(0,S.B)(e.token0),x=i?e.token1:(0,S.B)(e.token1),[u,h]=(0,l.useState)(!1),g=(0,b.mM)(o??void 0,e.liquidityToken),j=(0,y.A)(e.liquidityToken),m=g&&j&&a().greaterThanOrEqual(j.quotient,g.quotient)?new d.Percent(g.quotient,j.quotient):void 0,[v,w]=e&&j&&g&&a().greaterThanOrEqual(j.quotient,g.quotient)?[e.getLiquidityValue(e.token0,j,g,!1),e.getLiquidityValue(e.token1,j,g,!1)]:[void 0,void 0];return(0,t.jsx)(t.Fragment,{children:g&&a().greaterThan(g.quotient,a().BigInt(0))?(0,t.jsx)(C.rd,{border:n,children:(0,t.jsxs)(z.Tz,{gap:"md",children:[(0,t.jsx)(_,{children:(0,t.jsx)(T.DA,{children:(0,t.jsx)(p.xv,{fontWeight:535,fontSize:16,children:(0,t.jsx)(r.cC,{id:"VdLEAW"})})})}),(0,t.jsxs)(_,{onClick:()=>h(!u),children:[(0,t.jsxs)(T.DA,{children:[(0,t.jsx)(k.Z,{currency0:c,currency1:x,margin:!0,size:20}),(0,t.jsxs)(p.xv,{fontWeight:535,fontSize:20,children:[c.symbol,"/",x.symbol]})]}),(0,t.jsx)(T.DA,{children:(0,t.jsx)(p.xv,{fontWeight:535,fontSize:20,children:g?g.toSignificant(4):"-"})})]}),(0,t.jsxs)(z.Tz,{gap:"4px",children:[(0,t.jsxs)(_,{children:[(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(r.cC,{id:"wcXFoV"})}),(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,children:m?m.toFixed(6)+"%":"-"})]}),(0,t.jsxs)(_,{children:[(0,t.jsxs)(p.xv,{fontSize:16,fontWeight:535,children:[c.symbol,":"]}),v?(0,t.jsx)(T.DA,{children:(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:v?.toSignificant(6)})}):"-"]}),(0,t.jsxs)(_,{children:[(0,t.jsxs)(p.xv,{fontSize:16,fontWeight:535,children:[x.symbol,":"]}),w?(0,t.jsx)(T.DA,{children:(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:w?.toSignificant(6)})}):"-"]})]})]})}):(0,t.jsx)(C.hl,{children:(0,t.jsxs)(f.Tv.DeprecatedSubHeader,{style:{textAlign:"center"},children:[(0,t.jsx)("span",{role:"img","aria-label":"wizard-icon",children:"\u2b50\ufe0f"})," ",(0,t.jsx)(r.cC,{id:"Z4Vy7Z"})," "]})})})}function $({pair:e,border:i,stakedBalance:n}){const{account:o}=(0,s.useWeb3React)(),c=(0,S.B)(e.token0),g=(0,S.B)(e.token1),[C,D]=(0,l.useState)(!1),$=(0,b.mM)(o??void 0,e.liquidityToken),L=(0,y.A)(e.liquidityToken),N=n?$?.add(n):$,R=N&&L&&a().greaterThanOrEqual(L.quotient,N.quotient)?new d.Percent(N.quotient,L.quotient):void 0,[F,O]=e&&L&&N&&a().greaterThanOrEqual(L.quotient,N.quotient)?[e.getLiquidityValue(e.token0,L,N,!1),e.getLiquidityValue(e.token1,L,N,!1)]:[void 0,void 0],E=(0,m.r)(e?.token0);return(0,t.jsxs)(W,{border:i,bgColor:E,children:[(0,t.jsx)(A.RF,{}),(0,t.jsxs)(z.Tz,{gap:"md",children:[(0,t.jsxs)(_,{children:[(0,t.jsxs)(T.BA,{gap:"8px",style:{marginLeft:"8px"},children:[(0,t.jsx)(k.Z,{currency0:c,currency1:g,size:20}),(0,t.jsx)(p.xv,{fontWeight:535,fontSize:20,children:c&&g?`${c.symbol}/${g.symbol}`:(0,t.jsx)(q.bb,{children:(0,t.jsx)(r.cC,{id:"yQE2r9"})})})]}),(0,t.jsx)(T.DA,{gap:"8px",style:{marginRight:"4px"},children:(0,t.jsx)(w.qL,{padding:"6px 8px",$borderRadius:"12px",width:"100%",onClick:()=>D(!C),children:C?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.cC,{id:"wckWOP"}),(0,t.jsx)(x.Z,{size:"20",style:{marginLeft:"8px",height:"20px",minWidth:"20px"}})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.cC,{id:"wckWOP"}),(0,t.jsx)(u.Z,{size:"20",style:{marginLeft:"8px",height:"20px",minWidth:"20px"}})]})})})]}),C&&(0,t.jsxs)(z.Tz,{gap:"sm",children:[(0,t.jsxs)(_,{children:[(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(r.cC,{id:"EJ2nlN"})}),(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,children:N?N.toSignificant(4):"-"})]}),n&&(0,t.jsxs)(_,{children:[(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(r.cC,{id:"kOe6n7"})}),(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,children:n.toSignificant(4)})]}),(0,t.jsxs)(_,{children:[(0,t.jsx)(T.DA,{children:(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(r.cC,{id:"I4bzgz",values:{0:c.symbol}})})}),F?(0,t.jsxs)(T.DA,{children:[(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:F?.toSignificant(6)}),(0,t.jsx)(I.Z,{size:"20px",style:{marginLeft:"8px"},currency:c})]}):"-"]}),(0,t.jsxs)(_,{children:[(0,t.jsx)(T.DA,{children:(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(r.cC,{id:"I4bzgz",values:{0:g.symbol}})})}),O?(0,t.jsxs)(T.DA,{children:[(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:O?.toSignificant(6)}),(0,t.jsx)(I.Z,{size:"20px",style:{marginLeft:"8px"},currency:g})]}):"-"]}),(0,t.jsxs)(_,{children:[(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(r.cC,{id:"wcXFoV"})}),(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,children:R?(0,t.jsx)(r.cC,{id:"70DOjk",values:{0:"0.00"===R.toFixed(2)?"<0.01":R.toFixed(2)}}):"-"})]}),(0,t.jsx)(w.PL,{padding:"8px",$borderRadius:"8px",children:(0,t.jsx)(f.dL,{style:{width:"100%",textAlign:"center"},href:`https://v2.info.uniswap.org/account/${o}`,children:(0,t.jsx)(r.cC,{id:"DdWFnk",components:{0:(0,t.jsx)("span",{style:{fontSize:"11px"}})}})})}),$&&a().greaterThan($.quotient,j.iV)&&(0,t.jsxs)(T.m0,{marginTop:"10px",children:[(0,t.jsx)(w.DF,{padding:"8px",$borderRadius:"8px",as:h.rU,to:`/migrate/v2/${e.liquidityToken.address}`,width:"32%",children:(0,t.jsx)(r.cC,{id:"y5rS9U"})}),(0,t.jsx)(w.DF,{padding:"8px",$borderRadius:"8px",as:h.rU,to:`/add/v2/${(0,v.H)(c)}/${(0,v.H)(g)}`,width:"32%",children:(0,t.jsx)(r.cC,{id:"m16xKo"})}),(0,t.jsx)(w.DF,{padding:"8px",$borderRadius:"8px",as:h.rU,width:"32%",to:`/remove/v2/${(0,v.H)(c)}/${(0,v.H)(g)}`,children:(0,t.jsx)(r.cC,{id:"t/YqKh"})})]}),n&&a().greaterThan(n.quotient,j.iV)&&(0,t.jsx)(w.DF,{padding:"8px",$borderRadius:"8px",as:h.rU,to:`/uni/${(0,v.H)(c)}/${(0,v.H)(g)}`,width:"100%",children:(0,t.jsx)(r.cC,{id:"wD6KPn"})})]})]})]})}},96305:(e,i,n)=>{n.d(i,{A:()=>c});var t=n(21339),r=n(88693),d=n(65023),s=n(33552),o=n(10548);const a=s.default.div.withConfig({displayName:"V2Unsupported__TextWrapper",componentId:"sc-d048fc54-0"})`
  border: 1px solid ${({theme:e})=>e.neutral3};
  padding: 16px 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;function c(){return(0,t.jsx)(d.Tz,{gap:"lg",justify:"center",children:(0,t.jsx)(d.Tz,{gap:"md",style:{width:"100%"},children:(0,t.jsx)(a,{children:(0,t.jsx)(o.Tv.BodySecondary,{color:"neutral2",textAlign:"center",children:(0,t.jsx)(r.cC,{id:"JUHu1U"})})})})})}},34896:(e,i,n)=>{n.d(i,{SS:()=>h,sq:()=>c,MN:()=>l,RF:()=>x,uO:()=>u,I8:()=>a});var t=n(33552);const r=n.p+"static/media/big_unicorn.595c49962d708abbaaec.png",d=n.p+"static/media/noise.3c7efafc83614205bd1a.png",s=n.p+"static/media/xl_uni.9c9e061bed67e15ad3c8.png";var o=n(65023);const a=(0,t.default)(o.Tz).withConfig({displayName:"styled__DataCard",componentId:"sc-6a13bc9-0"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #2172e5 100%);
  border-radius: 12px;
  width: 100%;
  position: relative;
  overflow: hidden;
`,c=t.default.span.withConfig({displayName:"styled__CardBGImage",componentId:"sc-6a13bc9-1"})`
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
`,l=t.default.span.withConfig({displayName:"styled__CardBGImageSmaller",componentId:"sc-6a13bc9-2"})`
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
`,x=t.default.span.withConfig({displayName:"styled__CardNoise",componentId:"sc-6a13bc9-3"})`
  background: url(${d});
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
`,u=(0,t.default)(o.Tz).withConfig({displayName:"styled__CardSection",componentId:"sc-6a13bc9-4"})`
  padding: 1rem;
  z-index: 1;
  opacity: ${({disabled:e})=>e&&"0.4"};
`,h=t.default.div.withConfig({displayName:"styled__Break",componentId:"sc-6a13bc9-5"})`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
`},68858:(e,i,n)=>{n.d(i,{G:()=>d});var t=n(75422),r=n(52214);function d(){const{chainId:e}=(0,t.useWeb3React)();return e&&r.Ep.includes(e)}},62855:(e,i,n)=>{n.d(i,{A:()=>o});var t=n(82032),r=n(14844),d=n(39491),s=n(22855);function o(e){const i=(0,s.Ib)(e?.isToken?e.address:void 0,!1),n=(0,r.Wk)(i,"totalSupply")?.result?.[0]?.toString();return(0,d.useMemo)((()=>e?.isToken&&n?t.CurrencyAmount.fromRawAmount(e,n):void 0),[e,n])}},65850:(e,i,n)=>{n.d(i,{OY:()=>x,Oo:()=>u,_G:()=>l});var t=n(94653),r=n(82032),d=n(40148),s=n(27628),o=n(14844),a=n(39491);const c=new t.vU(d.abi);var l;function x(e){const i=(0,a.useMemo)((()=>e.map((([e,i])=>[e?.wrapped,i?.wrapped]))),[e]),n=(0,a.useMemo)((()=>i.map((([e,i])=>e&&i&&e.chainId===i.chainId&&!e.equals(i)&&r.V2_FACTORY_ADDRESSES[e.chainId]?(0,s.computePairAddress)({factoryAddress:r.V2_FACTORY_ADDRESSES[e.chainId],tokenA:e,tokenB:i}):void 0))),[i]),t=(0,o._Y)(n,c,"getReserves");return(0,a.useMemo)((()=>t.map(((e,n)=>{const{result:t,loading:d}=e,o=i[n][0],a=i[n][1];if(d)return[l.LOADING,null];if(!o||!a||o.equals(a))return[l.INVALID,null];if(!t)return[l.NOT_EXISTS,null];const{reserve0:c,reserve1:x}=t,[u,h]=o.sortsBefore(a)?[o,a]:[a,o];return[l.EXISTS,new s.Pair(r.CurrencyAmount.fromRawAmount(u,c.toString()),r.CurrencyAmount.fromRawAmount(h,x.toString()))]}))),[t,i])}function u(e,i){return x((0,a.useMemo)((()=>[[e,i]]),[e,i]))[0]}!function(e){e[e.LOADING=0]="LOADING",e[e.NOT_EXISTS=1]="NOT_EXISTS",e[e.EXISTS=2]="EXISTS",e[e.INVALID=3]="INVALID"}(l||(l={}))},82574:(e,i,n)=>{n.d(i,{B:()=>d});var t=n(52214),r=n(46778);function d(e){if(e.isNative)return e;const i=(0,t.oG)(e.chainId);return i&&r.Fl[i]?.equals(e)?(0,r.gX)(e.chainId):e}}}]);
//# sourceMappingURL=1455.c14f6f40.chunk.js.map