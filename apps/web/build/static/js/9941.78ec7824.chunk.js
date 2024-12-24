"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[9941,9982,2574],{98976:(e,t,n)=>{n.d(t,{q:()=>C,w:()=>k});var i=n(21339),r=n(88693),a=n(75422),s=n(7206),c=n(18910),o=n(99123),d=n(92686),l=n(9726),u=n(21914),p=n(52148),x=n(47021),h=n(33552),m=n(10548),g=n(96193),f=n(17358);const y=h.default.div.withConfig({displayName:"NavigationTabs__Tabs",componentId:"sc-e9587879-0"})`
  ${g.MG};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,j=(0,h.default)(o.rU).withConfig({displayName:"NavigationTabs__StyledLink",componentId:"sc-e9587879-1"})`
  flex: ${({flex:e})=>e??"none"};
  display: flex;
  align-items: center;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `};
`,b=(0,h.default)(m.Tv.H1Small).withConfig({displayName:"NavigationTabs__FindPoolTabsText",componentId:"sc-e9587879-2"})`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,v=(0,h.default)(c.Z).withConfig({displayName:"NavigationTabs__StyledArrowLeft",componentId:"sc-e9587879-3"})`
  color: ${({theme:e})=>e.neutral1};
`;function C({origin:e}){return(0,i.jsx)(y,{children:(0,i.jsxs)(f.m0,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,i.jsx)(o.rU,{to:e,children:(0,i.jsx)(v,{})}),(0,i.jsx)(b,{children:(0,i.jsx)(r.cC,{id:"LCFvJr"})})]})})}const w=(0,h.default)(m.Tv.H1Small).withConfig({displayName:"NavigationTabs__AddRemoveTitleText",componentId:"sc-e9587879-4"})`
  flex: 1;
  margin: auto;
  text-align: ${({$center:e})=>e?"center":"start"};
`;function k({adding:e,creating:t,autoSlippage:n,positionID:c,children:o}){const{chainId:m}=(0,a.useWeb3React)(),g=(0,h.useTheme)(),b=(0,u.T)(),C=(0,d.TH)().pathname.includes("add/v2")?"/pools/v2":"/pools"+(c?`/${c.toString()}`:"");return(0,i.jsx)(y,{children:(0,i.jsxs)(f.m0,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,i.jsx)(j,{to:C,onClick:()=>{e&&(b((0,p.dA)()),b((0,x.dA)()))},flex:o?"1":void 0,children:(0,i.jsx)(v,{stroke:g.neutral2})}),(0,i.jsx)(w,{$center:!o,children:t?(0,i.jsx)(r.cC,{id:"ma87bD"}):e?(0,i.jsx)(r.cC,{id:"E6MqGy"}):(0,i.jsx)(r.cC,{id:"cJtosk"})}),o&&(0,i.jsx)(l.xu,{style:{marginRight:".5rem"},children:o}),(0,i.jsx)(s.Z,{autoSlippage:n,chainId:m,hideRoutingSettings:!0})]})})}},65848:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(21339),r=n(39491);const a=n(33552).default.input.withConfig({displayName:"Slider__StyledRangeInput",componentId:"sc-2b24fd52-0"})`
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  width: 100%; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &::-moz-focus-outer {
    border: 0;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: ${({size:e})=>e}px;
    width: ${({size:e})=>e}px;
    background-color: ${({theme:e})=>e.accent1};
    border-radius: 100%;
    border: none;
    transform: translateY(-50%);
    color: ${({theme:e})=>e.surface1};

    &:hover,
    &:focus {
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-moz-range-thumb {
    height: ${({size:e})=>e}px;
    width: ${({size:e})=>e}px;
    background-color: #565a69;
    border-radius: 100%;
    border: none;
    color: ${({theme:e})=>e.surface1};

    &:hover,
    &:focus {
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-ms-thumb {
    height: ${({size:e})=>e}px;
    width: ${({size:e})=>e}px;
    background-color: #565a69;
    border-radius: 100%;
    color: ${({theme:e})=>e.surface1};

    &:hover,
    &:focus {
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-webkit-slider-runnable-track {
    background: linear-gradient(90deg, ${({theme:e})=>e.accent1}, ${({theme:e})=>e.accent1});
    height: 2px;
  }

  &::-moz-range-track {
    background: linear-gradient(90deg, ${({theme:e})=>e.surface4}, ${({theme:e})=>e.surface2});
    height: 2px;
  }

  &::-ms-track {
    width: 100%;
    border-color: transparent;
    color: transparent;

    background: ${({theme:e})=>e.surface4};
    height: 2px;
  }
  &::-ms-fill-lower {
    background: ${({theme:e})=>e.surface4};
  }
  &::-ms-fill-upper {
    background: ${({theme:e})=>e.surface2};
  }
`;function s({value:e,onChange:t,min:n=0,step:s=1,max:c=100,size:o=28,...d}){const l=(0,r.useCallback)((e=>{t(parseInt(e.target.value))}),[t]);return(0,i.jsx)(a,{size:o,...d,type:"range",value:e,style:{padding:"15px 0"},onChange:l,"aria-labelledby":"input slider",step:s,min:n,max:c})}},34896:(e,t,n)=>{n.d(t,{SS:()=>x,sq:()=>d,MN:()=>l,RF:()=>u,uO:()=>p,I8:()=>o});var i=n(33552);const r=n.p+"static/media/big_unicorn.595c49962d708abbaaec.png",a=n.p+"static/media/noise.3c7efafc83614205bd1a.png",s=n.p+"static/media/xl_uni.9c9e061bed67e15ad3c8.png";var c=n(65023);const o=(0,i.default)(c.Tz).withConfig({displayName:"styled__DataCard",componentId:"sc-6a13bc9-0"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #2172e5 100%);
  border-radius: 12px;
  width: 100%;
  position: relative;
  overflow: hidden;
`,d=i.default.span.withConfig({displayName:"styled__CardBGImage",componentId:"sc-6a13bc9-1"})`
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
`,l=i.default.span.withConfig({displayName:"styled__CardBGImageSmaller",componentId:"sc-6a13bc9-2"})`
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
  background: url(${a});
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
`,p=(0,i.default)(c.Tz).withConfig({displayName:"styled__CardSection",componentId:"sc-6a13bc9-4"})`
  padding: 1rem;
  z-index: 1;
  opacity: ${({disabled:e})=>e&&"0.4"};
`,x=i.default.div.withConfig({displayName:"styled__Break",componentId:"sc-6a13bc9-5"})`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
`},95483:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(39491);function r(e,t,n=100){const[r,a]=(0,i.useState)((()=>e)),s=(0,i.useRef)(),c=(0,i.useCallback)((e=>{a(e),s.current&&clearTimeout(s.current),s.current=setTimeout((()=>{t(e),s.current=void 0}),n)}),[n,t]);return(0,i.useEffect)((()=>{s.current&&(clearTimeout(s.current),s.current=void 0),a(e)}),[e]),[r,c]}},89982:(e,t,n)=>{n.d(t,{Z:()=>c,e:()=>s});var i=n(21339),r=n(33552),a=n(48664);const s=r.default.main.withConfig({displayName:"AppBody__BodyWrapper",componentId:"sc-e9d30a3e-0"})`
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
  z-index: ${a.k.default};
`;function c(e){return(0,i.jsx)(s,{...e})}},74631:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ie});var i=n(21339),r=n(54100),a=n(88693),s=n(56542),c=n(82032),o=n(39303),d=n(75422),l=n(4570),u=n(21347),p=n(70357),x=n(32345),h=n(65023),m=n(94727),g=n(34896),f=n(3689),y=n(44680),j=n(98976),b=n(17358),v=n(65848),C=n(87402),w=n(52214),k=n(22855),S=n(95483),z=n(66850),I=n(370),T=n(5061),_=n(85813),$=n(39491),L=n(92686),q=n(9726),A=n(12973),W=n(77910),N=n(49122),R=n(21914),D=n(82574),Z=n(16019);function V(){return(0,R.C)((e=>e.burnV3))}var M=n(15574),O=n(59251),P=n(33552),F=n(10548),B=n(38690),E=n(19369),U=n(69947),G=n(46778),H=n(53055),J=n(9988),Q=n(51232),Y=n(89982),K=n(1707);const X=P.default.div.withConfig({displayName:"styled__Wrapper",componentId:"sc-53ad7253-0"})`
  position: relative;
  padding: 20px;
  min-width: 460px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToExtraSmall`
    min-width: 340px;
  `};
`,ee=(0,P.default)(K.ER).withConfig({displayName:"styled__SmallMaxButton",componentId:"sc-53ad7253-1"})`
  font-size: 12px;
`,te=(0,P.default)(q.xv).withConfig({displayName:"styled__ResponsiveHeaderText",componentId:"sc-53ad7253-2"})`
  font-size: 40px;
  font-weight: 535;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToExtraSmall`
     font-size: 24px
  `};
`,ne=new c.Percent(50,1e4);function ie(){const{chainId:e}=(0,d.useWeb3React)(),{tokenId:t}=(0,L.UO)(),n=(0,L.TH)(),a=(0,$.useMemo)((()=>{try{return r.O$.from(t)}catch{return null}}),[t]),{position:s,loading:c}=(0,I.n)(a??void 0);return null===a||a.eq(0)?(0,i.jsx)(L.Fg,{to:{...n,pathname:"/pools"},replace:!0}):(0,w.EC)(e)&&(c||s)?(0,i.jsx)(re,{tokenId:a}):(0,i.jsx)(_.PositionPageUnsupportedContent,{})}function re({tokenId:e}){const{position:t}=(0,I.n)(e),n=(0,P.useTheme)(),{account:r,chainId:w,provider:_}=(0,d.useWeb3React)(),L=(0,l.oO)(),{formatCurrencyAmount:K}=(0,E.Gb)(),[ie,re]=(0,$.useState)(!1),ae=(0,T.Z)(w).wrapped.symbol,{percent:se}=V(),{position:ce,liquidityPercentage:oe,liquidityValue0:de,liquidityValue1:le,feeValue0:ue,feeValue1:pe,outOfRange:xe,error:he}=function(e,t=!1){const{account:n}=(0,d.useWeb3React)(),{percent:r}=V(),s=(0,A.dQ)(e?.token0),l=(0,A.dQ)(e?.token1),[,u]=(0,W.AI)(s??void 0,l??void 0,e?.fee),p=(0,$.useMemo)((()=>u&&e?.liquidity&&"number"===typeof e?.tickLower&&"number"===typeof e?.tickUpper?new o.Position({pool:u,liquidity:e.liquidity.toString(),tickLower:e.tickLower,tickUpper:e.tickUpper}):void 0),[u,e]),x=new c.Percent(r,100),h=p?x.multiply(p.amount0.quotient).quotient:void 0,m=p?x.multiply(p.amount1.quotient).quotient:void 0,g=s&&h?c.CurrencyAmount.fromRawAmount(t?s:(0,D.B)(s),h):void 0,f=l&&m?c.CurrencyAmount.fromRawAmount(t?l:(0,D.B)(l),m):void 0,[y,j]=(0,N.t)(u??void 0,e?.tokenId,t),b=!(!u||!e)&&(u.tickCurrent<e.tickLower||u.tickCurrent>e.tickUpper);let v;return n||(v=(0,i.jsx)(a.cC,{id:"VHOVEJ"})),0===r&&(v=v??(0,i.jsx)(a.cC,{id:"Sta9CR"})),{position:p,liquidityPercentage:x,liquidityValue0:g,liquidityValue1:f,feeValue0:y,feeValue1:j,outOfRange:b,error:v}}(t,ie),{onPercentSelect:me}=function(){const e=(0,R.T)();return{onPercentSelect:(0,$.useCallback)((t=>{e((0,Z.o)({percent:t}))}),[e])}}(),ge=t?.liquidity?.eq(0),[fe,ye]=(0,S.Z)(se,me),je=(0,z.Z)(),be=(0,O.eq)(ne),[ve,Ce]=(0,$.useState)(!1),[we,ke]=(0,$.useState)(!1),[Se,ze]=(0,$.useState)(),Ie=(0,M.h7)(),Te=(0,k.GL)(),_e=(0,$.useCallback)((async()=>{if(ke(!0),!Te||!de||!le||!je||!r||!w||!ce||!oe||!_)return;const{calldata:t,value:n}=o.NonfungiblePositionManager.removeCallParameters(ce,{tokenId:e.toString(),liquidityPercentage:oe,slippageTolerance:be,deadline:je.toString(),collectOptions:{expectedCurrencyOwed0:ue??c.CurrencyAmount.fromRawAmount(de.currency,0),expectedCurrencyOwed1:pe??c.CurrencyAmount.fromRawAmount(le.currency,0),recipient:r}}),i={to:Te.address,data:t,value:n},a=await _.getSigner().getChainId();if(w!==a)throw new B.CJ;_.getSigner().estimateGas(i).then((e=>{const t={...i,gasLimit:(0,J.y)(e)};return _.getSigner().sendTransaction(t).then((e=>{(0,l._P)(s.vp.REMOVE_LIQUIDITY_SUBMITTED,{source:s.GM.V3,label:[de.currency.symbol,le.currency.symbol].join("/"),...L}),ze(e.hash),ke(!1),Ie(e,{type:H.i.REMOVE_LIQUIDITY_V3,baseCurrencyId:(0,Q.H)(de.currency),quoteCurrencyId:(0,Q.H)(le.currency),expectedAmountBaseRaw:de.quotient.toString(),expectedAmountQuoteRaw:le.quotient.toString()})}))})).catch((e=>{ke(!1),console.error(e)}))}),[Te,de,le,je,r,w,ce,oe,_,e,be,ue,pe,L,Ie]),$e=(0,$.useCallback)((()=>{Ce(!1),Se&&ye(0),ke(!1),ze("")}),[ye,Se]),Le=(0,i.jsx)(a.cC,{id:"F8SmOj",values:{0:de?.toSignificant(6),1:de?.currency?.symbol,2:le?.toSignificant(6),3:le?.currency?.symbol}});function qe(){return(0,i.jsxs)(h.Tz,{gap:"sm",style:{padding:"16px"},children:[(0,i.jsxs)(b.m0,{align:"flex-end",children:[(0,i.jsx)(q.xv,{fontSize:16,fontWeight:535,children:(0,i.jsx)(a.cC,{id:"I4bzgz",values:{0:de?.currency?.symbol}})}),(0,i.jsxs)(b.DA,{children:[(0,i.jsx)(q.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:de&&K({amount:de})}),(0,i.jsx)(y.Z,{size:"20px",style:{marginLeft:"8px"},currency:de?.currency})]})]}),(0,i.jsxs)(b.m0,{align:"flex-end",children:[(0,i.jsx)(q.xv,{fontSize:16,fontWeight:535,children:(0,i.jsx)(a.cC,{id:"I4bzgz",values:{0:le?.currency?.symbol}})}),(0,i.jsxs)(b.DA,{children:[(0,i.jsx)(q.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:le&&K({amount:le})}),(0,i.jsx)(y.Z,{size:"20px",style:{marginLeft:"8px"},currency:le?.currency})]})]}),ue?.greaterThan(0)||pe?.greaterThan(0)?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(F.Tv.DeprecatedItalic,{fontSize:12,color:n.neutral2,textAlign:"left",padding:"8px 0 0 0",children:(0,i.jsx)(a.cC,{id:"QwTcLK"})}),(0,i.jsxs)(b.m0,{children:[(0,i.jsx)(q.xv,{fontSize:16,fontWeight:535,children:(0,i.jsx)(a.cC,{id:"Vn8uJL",values:{0:ue?.currency?.symbol}})}),(0,i.jsxs)(b.DA,{children:[(0,i.jsx)(q.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:ue&&K({amount:ue})}),(0,i.jsx)(y.Z,{size:"20px",style:{marginLeft:"8px"},currency:ue?.currency})]})]}),(0,i.jsxs)(b.m0,{children:[(0,i.jsx)(q.xv,{fontSize:16,fontWeight:535,children:(0,i.jsx)(a.cC,{id:"Vn8uJL",values:{0:pe?.currency?.symbol}})}),(0,i.jsxs)(b.DA,{children:[(0,i.jsx)(q.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:pe&&K({amount:pe})}),(0,i.jsx)(y.Z,{size:"20px",style:{marginLeft:"8px"},currency:pe?.currency})]})]})]}):null,(0,i.jsx)(p.DF,{mt:"16px",onClick:_e,children:(0,i.jsx)(a.cC,{id:"t/YqKh"})})]})}const Ae=Boolean(de?.currency&&le?.currency&&(de.currency.isNative||le.currency.isNative||G.Fl[de.currency.chainId]?.equals(de.currency.wrapped)||G.Fl[le.currency.chainId]?.equals(le.currency.wrapped)));return(0,i.jsxs)(h.Tz,{children:[(0,i.jsx)(U.Z,{isOpen:ve,onDismiss:$e,attemptingTxn:we,hash:Se??"",reviewContent:()=>(0,i.jsx)(U.p,{title:(0,i.jsx)(a.cC,{id:"cJtosk"}),onDismiss:$e,topContent:qe}),pendingText:Le}),(0,i.jsxs)(Y.Z,{$maxWidth:"unset",children:[(0,i.jsx)(j.w,{creating:!1,adding:!1,positionID:e.toString(),autoSlippage:ne}),(0,i.jsx)(X,{children:t?(0,i.jsxs)(h.Tz,{gap:"lg",children:[(0,i.jsxs)(b.m0,{children:[(0,i.jsxs)(b.DA,{children:[(0,i.jsx)(m.Z,{currency0:de?.currency,currency1:le?.currency,size:20,margin:!0}),(0,i.jsx)(F.Tv.DeprecatedLabel,{ml:"10px",fontSize:"20px",id:"remove-liquidity-tokens",children:`${de?.currency?.symbol}/${le?.currency?.symbol}`})]}),(0,i.jsx)(u.Z,{removed:ge,inRange:!xe})]}),(0,i.jsx)(x.hl,{children:(0,i.jsxs)(h.Tz,{gap:"md",children:[(0,i.jsx)(F.Tv.DeprecatedMain,{fontWeight:485,children:(0,i.jsx)(a.cC,{id:"hehnjM"})}),(0,i.jsxs)(b.m0,{children:[(0,i.jsx)(te,{children:(0,i.jsx)(a.cC,{id:"AGSFTV",values:{percentForSlider:fe}})}),(0,i.jsxs)(b.BA,{gap:"4px",justify:"flex-end",children:[(0,i.jsx)(ee,{onClick:()=>me(25),width:"20%",children:(0,i.jsx)(a.cC,{id:"Xeb0wM"})}),(0,i.jsx)(ee,{onClick:()=>me(50),width:"20%",children:(0,i.jsx)(a.cC,{id:"wW+u6Y"})}),(0,i.jsx)(ee,{onClick:()=>me(75),width:"20%",children:(0,i.jsx)(a.cC,{id:"N+aNR1"})}),(0,i.jsx)(ee,{onClick:()=>me(100),width:"20%",children:(0,i.jsx)(a.cC,{id:"CK1KXz"})})]})]}),(0,i.jsx)(v.Z,{value:fe,onChange:ye})]})}),(0,i.jsx)(x.hl,{children:(0,i.jsxs)(h.Tz,{gap:"md",children:[(0,i.jsxs)(b.m0,{children:[(0,i.jsx)(q.xv,{fontSize:16,fontWeight:535,id:"remove-pooled-tokena-symbol",children:(0,i.jsx)(a.cC,{id:"I4bzgz",values:{0:de?.currency?.symbol}})}),(0,i.jsxs)(b.DA,{children:[(0,i.jsx)(q.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:de&&K({amount:de})}),(0,i.jsx)(y.Z,{size:"20px",style:{marginLeft:"8px"},currency:de?.currency})]})]}),(0,i.jsxs)(b.m0,{children:[(0,i.jsx)(q.xv,{fontSize:16,fontWeight:535,id:"remove-pooled-tokenb-symbol",children:(0,i.jsx)(a.cC,{id:"I4bzgz",values:{0:le?.currency?.symbol}})}),(0,i.jsxs)(b.DA,{children:[(0,i.jsx)(q.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:le&&K({amount:le})}),(0,i.jsx)(y.Z,{size:"20px",style:{marginLeft:"8px"},currency:le?.currency})]})]}),ue?.greaterThan(0)||pe?.greaterThan(0)?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(g.SS,{}),(0,i.jsxs)(b.m0,{children:[(0,i.jsx)(q.xv,{fontSize:16,fontWeight:535,children:(0,i.jsx)(a.cC,{id:"Vn8uJL",values:{0:ue?.currency?.symbol}})}),(0,i.jsxs)(b.DA,{children:[(0,i.jsx)(q.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:ue&&K({amount:ue})}),(0,i.jsx)(y.Z,{size:"20px",style:{marginLeft:"8px"},currency:ue?.currency})]})]}),(0,i.jsxs)(b.m0,{children:[(0,i.jsx)(q.xv,{fontSize:16,fontWeight:535,children:(0,i.jsx)(a.cC,{id:"Vn8uJL",values:{0:pe?.currency?.symbol}})}),(0,i.jsxs)(b.DA,{children:[(0,i.jsx)(q.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:pe&&K({amount:pe})}),(0,i.jsx)(y.Z,{size:"20px",style:{marginLeft:"8px"},currency:pe?.currency})]})]})]}):null]})}),Ae&&(0,i.jsxs)(b.m0,{children:[(0,i.jsx)(F.Tv.DeprecatedMain,{children:(0,i.jsx)(a.cC,{id:"oCijuv",values:{nativeWrappedSymbol:ae}})}),(0,i.jsx)(C.Z,{id:"receive-as-weth",isActive:ie,toggle:()=>re((e=>!e))})]}),(0,i.jsx)("div",{style:{display:"flex"},children:(0,i.jsx)(h.Tz,{gap:"md",style:{flex:"1"},children:(0,i.jsx)(p.gn,{confirmed:!1,disabled:ge||0===se||!de,onClick:()=>Ce(!0),children:ge?(0,i.jsx)(a.cC,{id:"D87pha"}):he??(0,i.jsx)(a.cC,{id:"t/YqKh"})})})})]}):(0,i.jsx)(f.ZP,{})})]})]})}},82574:(e,t,n)=>{n.d(t,{B:()=>a});var i=n(52214),r=n(46778);function a(e){if(e.isNative)return e;const t=(0,i.oG)(e.chainId);return t&&r.Fl[t]?.equals(e)?(0,r.gX)(e.chainId):e}}}]);
//# sourceMappingURL=9941.78ec7824.chunk.js.map