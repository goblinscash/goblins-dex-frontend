"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[5813],{38684:(e,n,t)=>{t.d(n,{Z:()=>o});var i=t(21339),r=t(88693),s=t(33552);const d=s.default.button.withConfig({displayName:"MultiToggle__ToggleWrapper",componentId:"sc-6dfd833b-0"})`
  display: flex;
  align-items: center;
  width: ${({width:e})=>e??"100%"};
  padding: 1px;
  background: ${({theme:e})=>e.surface2};
  border-radius: 8px;
  border: ${({theme:e})=>"1px solid "+e.surface3};
  cursor: pointer;
  outline: none;
`,a=s.default.span.withConfig({displayName:"MultiToggle__ToggleElement",componentId:"sc-6dfd833b-1"})`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 4px 0.5rem;
  border-radius: 6px;
  justify-content: center;
  height: 100%;
  background: ${({theme:e,isActive:n})=>n?e.surface1:"none"};
  color: ${({theme:e,isActive:n})=>n?e.neutral1:e.neutral3};
  font-size: ${({fontSize:e})=>e??"1rem"};
  font-weight: 535;
  white-space: nowrap;
  :hover {
    user-select: initial;
    color: ${({theme:e,isActive:n})=>n?e.neutral2:e.neutral3};
  }
`;function o({currencyA:e,currencyB:n,handleRateToggle:t}){const s=e?.wrapped,o=n?.wrapped,c=s&&o&&s.sortsBefore(o);return s&&o?(0,i.jsx)("div",{style:{width:"fit-content",display:"flex",alignItems:"center"},onClick:t,children:(0,i.jsxs)(d,{width:"fit-content",children:[(0,i.jsx)(a,{isActive:c,fontSize:"12px",children:(0,i.jsx)(r.cC,{id:"J/hVSQ",values:{0:c?e.symbol:n.symbol}})}),(0,i.jsx)(a,{isActive:!c,fontSize:"12px",children:(0,i.jsx)(r.cC,{id:"J/hVSQ",values:{0:c?n.symbol:e.symbol}})})]})}):null}},49122:(e,n,t)=>{t.d(n,{t:()=>x});var i=t(54100),r=t(82032),s=t(14844),d=t(11020),a=t(39491),o=t(82574),c=t(22855);const l=i.O$.from(2).pow(128).sub(1);function x(e,n,t=!1){const i=(0,c.GL)(!1),x=(0,s.Wk)(n?i:null,"ownerOf",[n]).result?.[0],h=n?.toHexString(),p=(0,d.ZP)(),[u,m]=(0,a.useState)();return(0,a.useEffect)((()=>{!async function(){if(i&&h&&x)try{const e=await i.callStatic.collect({tokenId:h,recipient:x,amount0Max:l,amount1Max:l},{from:x});m([e.amount0,e.amount1])}catch{}}()}),[i,h,x,p]),e&&u?[r.CurrencyAmount.fromRawAmount(t?e.token0:(0,o.B)(e.token0),u[0].toString()),r.CurrencyAmount.fromRawAmount(t?e.token1:(0,o.B)(e.token1),u[1].toString())]:[void 0,void 0]}},85813:(e,n,t)=>{t.r(n),t.d(n,{PositionPageUnsupportedContent:()=>Ce,default:()=>Te});var i=t(21339),r=t(54100),s=t(88693),d=t(54314),a=t(56542),o=t(82032),c=t(39303),l=t(75422),x=t(4570),h=t(61816),p=t(70357),u=t(32345),m=t(65023),g=t(94727),j=t(29826),f=t(44680),y=t(17358),v=t(73474),w=t(87402),b=t(69947),C=t(52214),T=t(379),P=t(83787),D=t(12973),k=t(22855),I=t(54550),S=t(77910),M=t(59815),R=t(49122),A=t(370),_=t(14844),z=t(5061),L=t(39491),$=t(41523),N=t(99123),E=t(92686),W=t(47021),B=t(15574),O=t(33552),Z=t(10548),q=t(51232),U=t(38690),H=t(19369),F=t(82574),G=t(21347),J=t(73018),Q=t(38684),V=t(12159);const K="data:application/json;base64,";var Y=t(53055),X=t(9988),ee=t(54359),ne=t(1707);const te=(0,O.default)(p.DF).withConfig({displayName:"PositionPage__PositionPageButtonPrimary",componentId:"sc-81a3c6d5-0"})`
  width: 228px;
  height: 40px;
  font-size: 16px;
  line-height: 20px;
  border-radius: 12px;
`,ie=O.default.div.withConfig({displayName:"PositionPage__PageWrapper",componentId:"sc-81a3c6d5-1"})`
  padding: 68px 16px 16px 16px;

  min-width: 800px;
  max-width: 960px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    min-width: 100%;
    padding: 16px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    min-width: 100%;
    padding: 16px;
  }
`,re=O.default.div.withConfig({displayName:"PositionPage__BadgeText",componentId:"sc-81a3c6d5-2"})`
  font-weight: 535;
  font-size: 14px;
  color: ${({theme:e})=>e.neutral2};
`,se=(0,O.default)((({end:e,...n})=>(0,i.jsx)(Z.Tv.DeprecatedLabel,{...n}))).withConfig({displayName:"PositionPage__Label",componentId:"sc-81a3c6d5-3"})`
  display: flex;
  font-size: 16px;
  justify-content: ${({end:e})=>e?"flex-end":"flex-start"};
  align-items: center;
`,de=O.default.span.withConfig({displayName:"PositionPage__ExtentsText",componentId:"sc-81a3c6d5-4"})`
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  text-align: center;
  margin-right: 4px;
  font-weight: 535;
`,ae=(0,O.default)(Z.Tv.DeprecatedMain).withConfig({displayName:"PositionPage__HoverText",componentId:"sc-81a3c6d5-5"})`
  text-decoration: none;
  color: ${({theme:e})=>e.neutral2};
  :hover {
    color: ${({theme:e})=>e.neutral1};
    text-decoration: none;
  }
`,oe=O.default.span.withConfig({displayName:"PositionPage__DoubleArrow",componentId:"sc-81a3c6d5-6"})`
  color: ${({theme:e})=>e.neutral3};
  margin: 0 1rem;
`,ce=(0,O.default)(y.m0).withConfig({displayName:"PositionPage__ResponsiveRow",componentId:"sc-81a3c6d5-7"})`
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 16px;
    width: 100%;
  }
`,le=(0,O.default)(ce).withConfig({displayName:"PositionPage__ActionButtonResponsiveRow",componentId:"sc-81a3c6d5-8"})`
  width: 50%;
  justify-content: flex-end;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    width: 100%;
    flex-direction: row;
    * {
      width: 100%;
    }
  }
`,xe=(0,O.default)(p.gn).withConfig({displayName:"PositionPage__ResponsiveButtonConfirmed",componentId:"sc-81a3c6d5-9"})`
  border-radius: 12px;
  padding: 6px 8px;
  width: fit-content;
  font-size: 16px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    width: fit-content;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    width: fit-content;
  }
`,he=O.default.div.withConfig({displayName:"PositionPage__NFTGrid",componentId:"sc-81a3c6d5-10"})`
  display: grid;
  grid-template: 'overlap';
  min-height: 400px;
`,pe=O.default.canvas.withConfig({displayName:"PositionPage__NFTCanvas",componentId:"sc-81a3c6d5-11"})`
  grid-area: overlap;
`,ue=O.default.img.withConfig({displayName:"PositionPage__NFTImage",componentId:"sc-81a3c6d5-12"})`
  grid-area: overlap;
  height: 400px;
  /* Ensures SVG appears on top of canvas. */
  z-index: 1;
`,me=(0,O.default)(Z.Tv.H1Medium).withConfig({displayName:"PositionPage__PairHeader",componentId:"sc-81a3c6d5-13"})`
  margin-right: 10px;
`;function ge({inverted:e,pool:n,currencyQuote:t,currencyBase:r}){const{formatPrice:d}=(0,H.Gb)();return n&&t&&r?(0,i.jsx)(u.hl,{padding:"12px",children:(0,i.jsxs)(m.Tz,{gap:"sm",justify:"center",children:[(0,i.jsx)(de,{children:(0,i.jsx)(s.cC,{id:"DWd30U"})}),(0,i.jsx)(Z.Tv.DeprecatedMediumHeader,{textAlign:"center",children:d({price:e?n.token1Price:n.token0Price,type:H.sw.TokenTx})}),(0,i.jsx)(de,{children:(0,i.jsx)(s.cC,{id:"7Z4WfS",values:{0:t?.symbol,1:r?.symbol}})})]})}):null}const je=({children:e,chainId:n,address:t})=>{const r=(0,T.C)(),s=(0,P.dG)({address:t,chain:(0,P.Ld)(n),isInfoExplorePageEnabled:r});return(0,i.jsx)(Z.bm,{to:s,children:e})},fe=({children:e,chainId:n,address:t})=>(0,i.jsx)(Z.dL,{href:(0,ee.E)(n,t,ee.r.TOKEN),children:e});function ye({chainId:e,currency:n}){const t=n?.address;if("number"===typeof e&&t){const r=(0,P.bx)(e)?je:fe;return(0,i.jsx)(r,{chainId:e,address:t,children:(0,i.jsxs)(y.DA,{children:[(0,i.jsx)(f.Z,{currency:n,size:"20px",style:{marginRight:"0.5rem"}}),(0,i.jsxs)(Z.Tv.DeprecatedMain,{children:[n?.symbol," \u2197"]})]})})}return(0,i.jsxs)(y.DA,{children:[(0,i.jsx)(f.Z,{currency:n,size:"20px",style:{marginRight:"0.5rem"}}),(0,i.jsx)(Z.Tv.DeprecatedMain,{children:n?.symbol})]})}function ve(e,n,t){const i=n.getContext("2d");if(i){let{width:r,height:s}=e;const d=r/s;s=t,r=Math.round(d*t),n.width=r*devicePixelRatio,n.height=s*devicePixelRatio,n.style.width=r+"px",n.style.height=s+"px",i.scale(devicePixelRatio,devicePixelRatio),i.clearRect(0,0,r,s),i.drawImage(e,0,0,r,s)}}function we({image:e,height:n}){const[t,r]=(0,L.useState)(!1),s=(0,L.useRef)(null),d=(0,L.useRef)(null);return(0,i.jsxs)(he,{onMouseEnter:()=>{r(!0)},onMouseLeave:()=>{d.current&&s.current&&ve(d.current,s.current,n),r(!1)},children:[(0,i.jsx)(pe,{ref:s}),(0,i.jsx)(ue,{ref:d,src:e,hidden:!t,onLoad:()=>{d.current&&s.current&&ve(d.current,s.current,n)}})]})}const be=({priceLower:e,priceUpper:n,quote:t,base:i,invert:r})=>({priceUpper:r?e?.invert():n,priceLower:r?n?.invert():e,quote:r?i:t,base:r?t:i});function Ce(){return(0,i.jsx)(ie,{children:(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"},children:[(0,i.jsx)(Z.Tv.HeadlineLarge,{style:{marginBottom:"8px"},children:(0,i.jsx)(s.cC,{id:"Ij/sE3"})}),(0,i.jsx)(Z.Tv.BodyPrimary,{style:{marginBottom:"32px"},children:(0,i.jsx)(s.cC,{id:"Jbim1e"})}),(0,i.jsx)(te,{as:N.rU,to:"/pools",width:"fit-content",children:(0,i.jsx)(s.cC,{id:"7IwSeQ"})})]})})}function Te(){const{chainId:e}=(0,l.useWeb3React)();return(0,C.EC)(e)?(0,i.jsx)(De,{}):(0,i.jsx)(Ce,{})}const Pe=(0,O.default)(y.DA).withConfig({displayName:"PositionPage__PositionLabelRow",componentId:"sc-81a3c6d5-14"})({flexWrap:"wrap",gap:8});function De(){const{tokenId:e}=(0,E.UO)(),{chainId:n,account:t,provider:C}=(0,l.useWeb3React)(),T=(0,O.useTheme)(),{formatCurrencyAmount:P,formatDelta:te,formatTickPrice:he}=(0,H.Gb)(),pe=function(e){if(e)try{return r.O$.from(e)}catch(n){return}}(e),{loading:ue,position:je}=(0,A.n)(pe),{token0:fe,token1:ve,fee:Te,liquidity:De,tickLower:ke,tickUpper:Ie,tokenId:Se}=je||{},Me=De?.eq(0),Re=function(e){const n=(0,k.GL)(),t=(0,L.useMemo)((()=>[e instanceof r.O$?e.toHexString():e?.toString(16)]),[e]),{result:i,error:s,loading:d,valid:a}=(0,_.Wk)(n,"tokenURI",t,{..._.DB,gasRequired:3e6});return(0,L.useMemo)((()=>{if(s||!a||!e)return{valid:!1,loading:!1};if(d)return{valid:!0,loading:!0};if(!i)return{valid:!1,loading:!1};const[n]=i;if(!n||!n.startsWith(K))return{valid:!1,loading:!1};try{return{valid:!0,loading:!1,result:JSON.parse(atob(n.slice(K.length)))}}catch(s){return{valid:!1,loading:!1}}}),[s,d,i,e,a])}(pe),Ae=(0,D.dQ)(fe),_e=(0,D.dQ)(ve),ze=Ae?(0,F.B)(Ae):void 0,Le=_e?(0,F.B)(_e):void 0,[$e,Ne]=(0,L.useState)(!1),Ee=(0,z.Z)(n).wrapped.symbol,[We,Be]=(0,S.AI)(Ae??void 0,_e??void 0,Te),Oe=(0,L.useMemo)((()=>{if(Be&&De&&"number"===typeof ke&&"number"===typeof Ie)return new c.Position({pool:Be,liquidity:De.toString(),tickLower:ke,tickUpper:Ie})}),[De,Be,ke,Ie]),Ze=(0,I.Z)(Te,ke,Ie),qe=(0,J.N)(Oe),[Ue,He]=(0,L.useState)(!1),{priceLower:Fe,priceUpper:Ge,base:Je}=be({priceLower:qe.priceLower,priceUpper:qe.priceUpper,quote:qe.quote,base:qe.base,invert:Ue}),Qe=_e?Je?.equals(_e):void 0,Ve=Qe?ze:Le,Ke=Qe?Le:ze,Ye=(0,L.useMemo)((()=>Fe&&Be&&Ge?function(e,n,t){try{if(!n.greaterThan(e))return 100;if(!n.lessThan(t))return 0;const i=Number.parseFloat(e.toSignificant(15)),r=Number.parseFloat(t.toSignificant(15)),s=Number.parseFloat(n.toSignificant(15)),d=Math.floor(1/((Math.sqrt(i*r)-Math.sqrt(r*s))/(s-Math.sqrt(r*s))+1)*100);if(d<0||d>100)throw Error("Out of range");return d}catch{return}}(Qe?Ge.invert():Fe,Be.token0Price,Qe?Fe.invert():Ge):void 0),[Qe,Be,Fe,Ge]),[Xe,en]=(0,R.t)(Be??void 0,je?.tokenId,$e),nn=Be?$e?Be.token0:(0,F.B)(Be.token0):void 0,tn=Be?$e?Be.token1:(0,F.B)(Be.token1):void 0,[rn,sn]=(0,L.useState)(!1),[dn,an]=(0,L.useState)(null),on=(0,B.ub)(dn??void 0),[cn,ln]=(0,L.useState)(!1),xn=(0,M.ZP)(Ae??void 0),hn=(0,M.ZP)(_e??void 0),pn=(0,L.useMemo)((()=>{if(!xn||!hn||!Xe||!en)return null;const e=Xe?.wrapped,n=en?.wrapped;if(!e||!n)return null;const t=xn.quote(e),i=hn.quote(n);return t.add(i)}),[xn,hn,Xe,en]),un=(0,L.useMemo)((()=>{if(!xn||!hn||!Oe)return null;const e=xn.quote(Oe.amount0),n=hn.quote(Oe.amount1);return e.add(n)}),[xn,hn,Oe]),mn=(0,B.h7)(),gn=(0,k.GL)(),jn=(0,L.useCallback)((async()=>{if(!nn||!tn||!n||!gn||!t||!Se||!C)return;sn(!0);const{calldata:e,value:i}=c.NonfungiblePositionManager.collectCallParameters({tokenId:Se.toString(),expectedCurrencyOwed0:Xe??o.CurrencyAmount.fromRawAmount(nn,0),expectedCurrencyOwed1:en??o.CurrencyAmount.fromRawAmount(tn,0),recipient:t}),r={to:gn.address,data:e,value:i},s=await C.getSigner().getChainId();if(n!==s)throw new U.CJ;C.getSigner().estimateGas(r).then((e=>{const n={...r,gasLimit:(0,X.y)(e)};return C.getSigner().sendTransaction(n).then((e=>{an(e.hash),sn(!1),(0,x._P)(a.vp.COLLECT_LIQUIDITY_SUBMITTED,{source:a.GM.V3,label:[nn.symbol,tn.symbol].join("/")}),mn(e,{type:Y.i.COLLECT_FEES,currencyId0:(0,q.H)(nn),currencyId1:(0,q.H)(tn),expectedCurrencyOwed0:Xe?.quotient.toString()??o.CurrencyAmount.fromRawAmount(nn,0).toExact(),expectedCurrencyOwed1:en?.quotient.toString()??o.CurrencyAmount.fromRawAmount(tn,0).toExact()})}))})).catch((e=>{sn(!1),console.error(e)}))}),[n,Xe,en,nn,tn,gn,t,Se,mn,C]),fn=(0,_.Wk)(Se?gn:null,"ownerOf",[Se]).result?.[0],yn=fn===t||je?.operator===t,vn=Qe?Xe:en,wn=Qe?en:Xe,bn=Be&&"number"===typeof ke?Be.tickCurrent<ke:void 0,Cn=Be&&"number"===typeof Ie?Be.tickCurrent>=Ie:void 0,Tn="boolean"===typeof bn&&"boolean"===typeof Cn&&(!bn&&!Cn);function Pn(){return(0,i.jsxs)(m.Tz,{gap:"md",style:{marginTop:"20px"},children:[(0,i.jsx)(u.hl,{padding:"12px 16px",children:(0,i.jsxs)(m.Tz,{gap:"md",children:[(0,i.jsxs)(y.m0,{children:[(0,i.jsxs)(y.DA,{children:[(0,i.jsx)(f.Z,{currency:vn?.currency,size:"20px",style:{marginRight:"0.5rem"}}),(0,i.jsx)(Z.Tv.DeprecatedMain,{children:vn?P({amount:vn}):"-"})]}),(0,i.jsx)(Z.Tv.DeprecatedMain,{children:vn?.currency?.symbol})]}),(0,i.jsxs)(y.m0,{children:[(0,i.jsxs)(y.DA,{children:[(0,i.jsx)(f.Z,{currency:wn?.currency,size:"20px",style:{marginRight:"0.5rem"}}),(0,i.jsx)(Z.Tv.DeprecatedMain,{children:wn?P({amount:wn}):"-"})]}),(0,i.jsx)(Z.Tv.DeprecatedMain,{children:wn?.currency?.symbol})]})]})}),(0,i.jsx)(Z.Tv.DeprecatedItalic,{children:(0,i.jsx)(s.cC,{id:"R8aNfS"})}),(0,i.jsx)(p.DF,{"data-testid":"modal-collect-fees-button",onClick:jn,children:(0,i.jsx)(s.cC,{id:"vR1m9d"})})]})}const Dn=Boolean(yn&&(Xe?.greaterThan(0)||en?.greaterThan(0))&&ze&&Le&&(ze.isNative||Le.isNative)&&!dn);return je||ue?ue||We===S.tK.LOADING||!Te?(0,i.jsxs)(ne.pr,{children:[(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{})]}):(0,i.jsx)(x.fM,{page:a.yJ.POOL_PAGE,shouldLogImpression:!0,children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)($.q,{children:(0,i.jsx)("title",{children:d.ag._({id:"jv+got",values:{0:Ve?.symbol,1:Ke?.symbol}})})}),(0,i.jsxs)(ie,{children:[(0,i.jsx)(b.Z,{isOpen:cn,onDismiss:()=>ln(!1),attemptingTxn:rn,hash:dn??"",reviewContent:()=>(0,i.jsx)(b.p,{title:(0,i.jsx)(s.cC,{id:"tu/fxg"}),onDismiss:()=>ln(!1),topContent:Pn}),pendingText:(0,i.jsx)(s.cC,{id:"SGG5Oz"})}),(0,i.jsxs)(m.Tz,{gap:"md",children:[(0,i.jsxs)(m.Tz,{gap:"sm",children:[(0,i.jsx)(N.rU,{"data-cy":"visit-pool",style:{textDecoration:"none",width:"fit-content",marginBottom:"0.5rem"},to:"/pools",children:(0,i.jsx)(ae,{children:(0,i.jsx)(s.cC,{id:"sYYMH3"})})}),(0,i.jsxs)(ce,{children:[(0,i.jsxs)(Pe,{children:[(0,i.jsx)(g.Z,{currency0:Ke,currency1:Ve,size:24,margin:!0}),(0,i.jsxs)(me,{children:["\xa0",Ve?.symbol,"\xa0/\xa0",Ke?.symbol]}),(0,i.jsx)(h.Z,{style:{marginRight:"8px"},children:(0,i.jsx)(re,{children:(0,i.jsx)(s.cC,{id:"J/hVSQ",values:{0:te(parseFloat(new o.Percent(Te,1e6).toSignificant()))}})})}),(0,i.jsx)(G.Z,{removed:Me,inRange:Tn})]}),yn&&(0,i.jsxs)(le,{children:[ze&&Le&&Te&&Se?(0,i.jsx)(p.Ux,{as:N.rU,to:`/add/${(0,q.H)(ze)}/${(0,q.H)(Le)}/${Te}/${Se}`,padding:"6px 8px",width:"fit-content",$borderRadius:"12px",style:{marginRight:"8px"},children:(0,i.jsx)(s.cC,{id:"3pgmAj"})}):null,Se&&!Me?(0,i.jsx)(p.Hm,{as:N.rU,to:`/remove/${Se}`,padding:"6px 8px",width:"fit-content",$borderRadius:"12px",children:(0,i.jsx)(s.cC,{id:"cJtosk"})}):null]})]})]}),(0,i.jsxs)(ce,{align:"flex-start",children:[(0,i.jsx)(Z.Pw,{style:{height:"100%",marginRight:12},children:"result"in Re?(0,i.jsxs)(u.Wm,{width:"100%",height:"100%",style:{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"space-around",minWidth:"340px"},children:[(0,i.jsx)(we,{image:Re.result.image,height:400}),"number"===typeof n&&fn&&!yn?(0,i.jsx)(Z.dL,{href:(0,ee.E)(n,fn,ee.r.ADDRESS),children:(0,i.jsx)(s.cC,{id:"LtI9AS"})}):null]}):(0,i.jsx)(u.Wm,{width:"100%",height:"100%",style:{minWidth:"340px",position:"relative",overflow:"hidden"},children:(0,i.jsx)(j.tG,{})})}),(0,i.jsxs)(m.Tz,{gap:"sm",style:{width:"100%",height:"100%"},children:[(0,i.jsx)(u.Wm,{children:(0,i.jsxs)(m.Tz,{gap:"md",style:{width:"100%"},children:[(0,i.jsxs)(m.Tz,{gap:"md",children:[(0,i.jsx)(se,{children:(0,i.jsx)(s.cC,{id:"6y2TB3"})}),un?.greaterThan(new o.Fraction(1,100))?(0,i.jsx)(Z.Tv.DeprecatedLargeHeader,{fontSize:"36px",fontWeight:535,children:(0,i.jsx)(s.cC,{id:"J/hVSQ",values:{0:P({amount:un,type:H.sw.FiatTokenPrice})}})}):(0,i.jsx)(Z.Tv.DeprecatedLargeHeader,{color:T.neutral1,fontSize:"36px",fontWeight:535,children:(0,i.jsx)(s.cC,{id:"eKC+EC"})})]}),(0,i.jsx)(u.hl,{padding:"12px 16px",children:(0,i.jsxs)(m.Tz,{gap:"md",children:[(0,i.jsxs)(y.m0,{children:[(0,i.jsx)(ye,{chainId:n,currency:Ve}),(0,i.jsxs)(y.DA,{children:[(0,i.jsx)(Z.Tv.DeprecatedMain,{children:P({amount:Qe?Oe?.amount0:Oe?.amount1})}),"number"!==typeof Ye||Me?null:(0,i.jsx)(h.Z,{style:{marginLeft:"10px"},children:(0,i.jsx)(re,{children:(0,i.jsx)(s.cC,{id:"hbO8db",values:{0:Qe?Ye:100-Ye}})})})]})]}),(0,i.jsxs)(y.m0,{children:[(0,i.jsx)(ye,{chainId:n,currency:Ke}),(0,i.jsxs)(y.DA,{children:[(0,i.jsx)(Z.Tv.DeprecatedMain,{children:P({amount:Qe?Oe?.amount1:Oe?.amount0})}),"number"!==typeof Ye||Me?null:(0,i.jsx)(h.Z,{style:{marginLeft:"10px"},children:(0,i.jsx)(re,{children:(0,i.jsx)(s.cC,{id:"hbO8db",values:{0:Qe?100-Ye:Ye}})})})]})]})]})})]})}),(0,i.jsx)(u.Wm,{children:(0,i.jsxs)(m.Tz,{gap:"md",style:{width:"100%"},children:[(0,i.jsx)(m.Tz,{gap:"md",children:(0,i.jsxs)(y.m0,{style:{alignItems:"flex-start"},children:[(0,i.jsxs)(m.Tz,{gap:"md",children:[(0,i.jsx)(se,{children:(0,i.jsx)(s.cC,{id:"XCqY8/"})}),pn?.greaterThan(new o.Fraction(1,100))?(0,i.jsx)(Z.Tv.DeprecatedLargeHeader,{color:T.success,fontSize:"36px",fontWeight:535,children:(0,i.jsx)(s.cC,{id:"J/hVSQ",values:{0:P({amount:pn,type:H.sw.FiatTokenPrice})}})}):(0,i.jsx)(Z.Tv.DeprecatedLargeHeader,{color:T.neutral1,fontSize:"36px",fontWeight:535,children:(0,i.jsx)(s.cC,{id:"eKC+EC"})})]}),yn&&(Xe?.greaterThan(0)||en?.greaterThan(0)||dn)?(0,i.jsx)(xe,{"data-testid":"collect-fees-button",disabled:rn||!!dn,confirmed:!!dn&&!on,width:"fit-content",style:{borderRadius:"12px"},padding:"4px 8px",onClick:()=>ln(!0),children:dn&&!on?(0,i.jsx)(Z.Tv.DeprecatedMain,{color:T.neutral1,children:(0,i.jsx)(s.cC,{id:"Jpq3gO"})}):on||rn?(0,i.jsxs)(Z.Tv.DeprecatedMain,{color:T.neutral1,children:[" ",(0,i.jsx)(v.bb,{children:(0,i.jsx)(s.cC,{id:"1RB9kv"})})]}):(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(Z.Tv.DeprecatedMain,{color:T.white,children:(0,i.jsx)(s.cC,{id:"h5pjuM"})})})}):null]})}),(0,i.jsx)(u.hl,{padding:"12px 16px",children:(0,i.jsxs)(m.Tz,{gap:"md",children:[(0,i.jsxs)(y.m0,{children:[(0,i.jsxs)(y.DA,{children:[(0,i.jsx)(f.Z,{currency:vn?.currency,size:"20px",style:{marginRight:"0.5rem"}}),(0,i.jsx)(Z.Tv.DeprecatedMain,{children:vn?.currency?.symbol})]}),(0,i.jsx)(y.DA,{children:(0,i.jsx)(Z.Tv.DeprecatedMain,{children:vn?P({amount:vn}):"-"})})]}),(0,i.jsxs)(y.m0,{children:[(0,i.jsxs)(y.DA,{children:[(0,i.jsx)(f.Z,{currency:wn?.currency,size:"20px",style:{marginRight:"0.5rem"}}),(0,i.jsx)(Z.Tv.DeprecatedMain,{children:wn?.currency?.symbol})]}),(0,i.jsx)(y.DA,{children:(0,i.jsx)(Z.Tv.DeprecatedMain,{children:wn?P({amount:wn}):"-"})})]})]})}),Dn&&(0,i.jsx)(m.Tz,{gap:"md",children:(0,i.jsxs)(y.m0,{children:[(0,i.jsx)(Z.Tv.DeprecatedMain,{children:(0,i.jsx)(s.cC,{id:"oCijuv",values:{nativeWrappedSymbol:Ee}})}),(0,i.jsx)(w.Z,{id:"receive-as-weth",isActive:$e,toggle:()=>Ne((e=>!e))})]})})]})})]})]}),(0,i.jsx)(u.Wm,{children:(0,i.jsxs)(m.Tz,{gap:"md",children:[(0,i.jsxs)(y.m0,{children:[(0,i.jsxs)(y.DA,{children:[(0,i.jsx)(se,{display:"flex",style:{marginRight:"12px"},children:(0,i.jsx)(s.cC,{id:"7Bu2+f"})}),(0,i.jsx)(Z.v_,{children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(G.Z,{removed:Me,inRange:Tn}),(0,i.jsx)("span",{style:{width:"8px"}})]})})]}),(0,i.jsx)(y.DA,{children:Ke&&Ve&&(0,i.jsx)(Q.Z,{currencyA:Ke,currencyB:Ve,handleRateToggle:()=>He(!Ue)})})]}),(0,i.jsxs)(y.m0,{children:[(0,i.jsx)(u.hl,{padding:"12px",width:"100%",children:(0,i.jsxs)(m.Tz,{gap:"sm",justify:"center",children:[(0,i.jsx)(de,{children:(0,i.jsx)(s.cC,{id:"EQs1sJ"})}),(0,i.jsx)(Z.Tv.DeprecatedMediumHeader,{textAlign:"center",children:he({price:Fe,atLimit:Ze,direction:W.Mb.LOWER,numberType:H.sw.TokenTx})}),(0,i.jsxs)(de,{children:[" ",(0,i.jsx)(s.cC,{id:"7Z4WfS",values:{0:Ve?.symbol,1:Ke?.symbol}})]}),Tn&&(0,i.jsx)(Z.Tv.DeprecatedSmall,{color:T.neutral3,children:(0,i.jsx)(s.cC,{id:"NxMldE",values:{0:Ke?.symbol}})})]})}),(0,i.jsx)(oe,{children:"\u27f7"}),(0,i.jsx)(u.hl,{padding:"12px",width:"100%",children:(0,i.jsxs)(m.Tz,{gap:"sm",justify:"center",children:[(0,i.jsx)(de,{children:(0,i.jsx)(s.cC,{id:"5etEUX"})}),(0,i.jsx)(Z.Tv.DeprecatedMediumHeader,{textAlign:"center",children:he({price:Ge,atLimit:Ze,direction:W.Mb.UPPER,numberType:H.sw.TokenTx})}),(0,i.jsxs)(de,{children:[" ",(0,i.jsx)(s.cC,{id:"7Z4WfS",values:{0:Ve?.symbol,1:Ke?.symbol}})]}),Tn&&(0,i.jsx)(Z.Tv.DeprecatedSmall,{color:T.neutral3,children:(0,i.jsx)(s.cC,{id:"NxMldE",values:{0:Ve?.symbol}})})]})})]}),(0,i.jsx)(ge,{inverted:Qe,pool:Be,currencyQuote:Ve,currencyBase:Ke})]})})]})]}),(0,i.jsx)(V.c,{})]})}):(0,i.jsx)(Ce,{})}}}]);
//# sourceMappingURL=5813.eeb142c1.chunk.js.map