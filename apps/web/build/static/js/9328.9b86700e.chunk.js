"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[9328,9982],{95267:(e,n,t)=>{t.d(n,{Z:()=>c});var i=t(39491),r=t(37954),s=t.n(r);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},o.apply(this,arguments)}function d(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=(0,i.forwardRef)((function(e,n){var t=e.color,r=void 0===t?"currentColor":t,s=e.size,a=void 0===s?24:s,c=d(e,["color","size"]);return i.createElement("svg",o({ref:n,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),i.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),i.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));a.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},a.displayName="Plus";const c=a},98976:(e,n,t)=>{t.d(n,{q:()=>T,w:()=>_});var i=t(21339),r=t(88693),s=t(75422),o=t(7206),d=t(18910),a=t(99123),c=t(92686),l=t(9726),x=t(21914),p=t(52148),m=t(47021),h=t(33552),g=t(10548),u=t(96193),f=t(17358);const j=h.default.div.withConfig({displayName:"NavigationTabs__Tabs",componentId:"sc-e9587879-0"})`
  ${u.MG};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,v=(0,h.default)(a.rU).withConfig({displayName:"NavigationTabs__StyledLink",componentId:"sc-e9587879-1"})`
  flex: ${({flex:e})=>e??"none"};
  display: flex;
  align-items: center;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `};
`,b=(0,h.default)(g.Tv.H1Small).withConfig({displayName:"NavigationTabs__FindPoolTabsText",componentId:"sc-e9587879-2"})`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,y=(0,h.default)(d.Z).withConfig({displayName:"NavigationTabs__StyledArrowLeft",componentId:"sc-e9587879-3"})`
  color: ${({theme:e})=>e.neutral1};
`;function T({origin:e}){return(0,i.jsx)(j,{children:(0,i.jsxs)(f.m0,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,i.jsx)(a.rU,{to:e,children:(0,i.jsx)(y,{})}),(0,i.jsx)(b,{children:(0,i.jsx)(r.cC,{id:"LCFvJr"})})]})})}const C=(0,h.default)(g.Tv.H1Small).withConfig({displayName:"NavigationTabs__AddRemoveTitleText",componentId:"sc-e9587879-4"})`
  flex: 1;
  margin: auto;
  text-align: ${({$center:e})=>e?"center":"start"};
`;function _({adding:e,creating:n,autoSlippage:t,positionID:d,children:a}){const{chainId:g}=(0,s.useWeb3React)(),u=(0,h.useTheme)(),b=(0,x.T)(),T=(0,c.TH)().pathname.includes("add/v2")?"/pools/v2":"/pools"+(d?`/${d.toString()}`:"");return(0,i.jsx)(j,{children:(0,i.jsxs)(f.m0,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,i.jsx)(v,{to:T,onClick:()=>{e&&(b((0,p.dA)()),b((0,m.dA)()))},flex:a?"1":void 0,children:(0,i.jsx)(y,{stroke:u.neutral2})}),(0,i.jsx)(C,{$center:!a,children:n?(0,i.jsx)(r.cC,{id:"ma87bD"}):e?(0,i.jsx)(r.cC,{id:"E6MqGy"}):(0,i.jsx)(r.cC,{id:"cJtosk"})}),a&&(0,i.jsx)(l.xu,{style:{marginRight:".5rem"},children:a}),(0,i.jsx)(o.Z,{autoSlippage:t,chainId:g,hideRoutingSettings:!0})]})})}},89982:(e,n,t)=>{t.d(n,{Z:()=>d,e:()=>o});var i=t(21339),r=t(33552),s=t(48664);const o=r.default.main.withConfig({displayName:"AppBody__BodyWrapper",componentId:"sc-e9d30a3e-0"})`
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
  z-index: ${s.k.default};
`;function d(e){return(0,i.jsx)(o,{...e})}},1707:(e,n,t)=>{t.d(n,{DC:()=>d,ER:()=>a,bb:()=>c,im:()=>o,pr:()=>l});var i=t(29826),r=t(9726),s=t(33552);const o=s.default.div.withConfig({displayName:"styled__Wrapper",componentId:"sc-bfb6c8b8-0"})`
  position: relative;
  padding: 20px;
`,d=(0,s.default)(r.xv).withConfig({displayName:"styled__ClickableText",componentId:"sc-bfb6c8b8-1"})`
  :hover {
    cursor: pointer;
  }
  color: ${({theme:e})=>e.accent1};
`,a=s.default.button.withConfig({displayName:"styled__MaxButton",componentId:"sc-bfb6c8b8-2"})`
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
`,c=s.default.span.withConfig({displayName:"styled__Dots",componentId:"sc-bfb6c8b8-3"})`
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
`,l=(0,s.default)(i.pr).withConfig({displayName:"styled__LoadingRows",componentId:"sc-bfb6c8b8-4"})`
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
`},39328:(e,n,t)=>{t.r(n),t.d(n,{default:()=>z});var i,r=t(21339),s=t(88693),o=t(56542),d=t(75422),a=t(4570),c=t(96305),l=t(68858),x=t(44595),p=t.n(x),m=t(39491),h=t(95267),g=t(92686),u=t(9726),f=t(10548),j=t(70357),v=t(32345),b=t(65023),y=t(44680),T=t(98976),C=t(70359),_=t(17358),w=t(41726),I=t(12159),N=t(46778),O=t(65850),S=t(61265),k=t(59251),$=t(51232),E=t(89982),A=t(1707);function z(){const e=new URLSearchParams((0,g.TH)().search),{account:n,chainId:t}=(0,d.useWeb3React)(),[x,z]=(0,m.useState)(!1),[L,W]=(0,m.useState)(i.TOKEN1),[B,K]=(0,m.useState)((()=>t?(0,N.gX)(t):null)),[P,D]=(0,m.useState)(null),[G,R]=(0,O.Oo)(B??void 0,P??void 0),Z=(0,k.uB)();(0,m.useEffect)((()=>{R&&Z(R)}),[R,Z]);const q=G===O._G.NOT_EXISTS||Boolean(G===O._G.EXISTS&&R&&p().equal(R.reserve0.quotient,p().BigInt(0))&&p().equal(R.reserve1.quotient,p().BigInt(0))),H=(0,S.mM)(n??void 0,R?.liquidityToken),M=Boolean(H&&p().greaterThan(H.quotient,p().BigInt(0))),F=(0,m.useCallback)((e=>{L===i.TOKEN0?K(e):D(e)}),[L]),X=(0,m.useCallback)((()=>{z(!1)}),[z]),Y=(0,r.jsx)(v.hl,{padding:"45px 10px",children:(0,r.jsx)(u.xv,{textAlign:"center",children:n?(0,r.jsx)(s.cC,{id:"pKO91W"}):(0,r.jsx)(s.cC,{id:"4YB3Bt"})})});return(0,l.G)()?(0,r.jsx)(a.fM,{page:o.yJ.POOL_PAGE,shouldLogImpression:!0,children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(E.Z,{children:[(0,r.jsx)(T.q,{origin:e.get("origin")??"/pools/v2"}),(0,r.jsxs)(b.Tz,{style:{padding:"1rem"},gap:"md",children:[(0,r.jsx)(v.Pj,{children:(0,r.jsx)(b.Tz,{gap:"10px",children:(0,r.jsx)(f.Tv.DeprecatedLink,{fontWeight:485,color:"accent1",children:(0,r.jsx)(s.cC,{id:"qtO+b3",components:{0:(0,r.jsx)("b",{})}})})})}),(0,r.jsx)(j.KA,{onClick:()=>{z(!0),W(i.TOKEN0)},children:B?(0,r.jsxs)(_.ZP,{children:[(0,r.jsx)(y.Z,{currency:B}),(0,r.jsx)(u.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:B.symbol})]}):(0,r.jsx)(u.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:(0,r.jsx)(s.cC,{id:"T0Y2+3"})})}),(0,r.jsx)(b.lg,{children:(0,r.jsx)(h.Z,{size:"16",color:"#888D9B"})}),(0,r.jsx)(j.KA,{onClick:()=>{z(!0),W(i.TOKEN1)},children:P?(0,r.jsxs)(_.ZP,{children:[(0,r.jsx)(y.Z,{currency:P}),(0,r.jsx)(u.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:P.symbol})]}):(0,r.jsx)(u.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:(0,r.jsx)(s.cC,{id:"T0Y2+3"})})}),M&&(0,r.jsxs)(b.lg,{style:{justifyItems:"center",backgroundColor:"",padding:"12px 0px",borderRadius:"12px"},children:[(0,r.jsx)(u.xv,{textAlign:"center",fontWeight:535,children:(0,r.jsx)(s.cC,{id:"lYF0uv"})}),(0,r.jsx)(f.m_,{to:"pools/v2",children:(0,r.jsx)(u.xv,{textAlign:"center",children:(0,r.jsx)(s.cC,{id:"/4YRTg"})})})]}),B&&P?G===O._G.EXISTS?M&&R?(0,r.jsx)(C.WP,{pair:R,border:"1px solid #CED0D9"}):(0,r.jsx)(v.hl,{padding:"45px 10px",children:(0,r.jsxs)(b.Tz,{gap:"sm",justify:"center",children:[(0,r.jsx)(u.xv,{textAlign:"center",children:(0,r.jsx)(s.cC,{id:"Lu0Uod"})}),(0,r.jsx)(f.m_,{to:`/add/${(0,$.H)(B)}/${(0,$.H)(P)}`,children:(0,r.jsx)(u.xv,{textAlign:"center",children:(0,r.jsx)(s.cC,{id:"xJEVlK"})})})]})}):q?(0,r.jsx)(v.hl,{padding:"45px 10px",children:(0,r.jsxs)(b.Tz,{gap:"sm",justify:"center",children:[(0,r.jsx)(u.xv,{textAlign:"center",children:(0,r.jsx)(s.cC,{id:"+8rnEI"})}),(0,r.jsx)(f.m_,{to:`/add/${(0,$.H)(B)}/${(0,$.H)(P)}`,children:(0,r.jsx)(s.cC,{id:"I1gztT"})})]})}):G===O._G.INVALID?(0,r.jsx)(v.hl,{padding:"45px 10px",children:(0,r.jsx)(b.Tz,{gap:"sm",justify:"center",children:(0,r.jsx)(u.xv,{textAlign:"center",fontWeight:535,children:(0,r.jsx)(s.cC,{id:"ovVGFw"})})})}):G===O._G.LOADING?(0,r.jsx)(v.hl,{padding:"45px 10px",children:(0,r.jsx)(b.Tz,{gap:"sm",justify:"center",children:(0,r.jsxs)(u.xv,{textAlign:"center",children:[(0,r.jsx)(s.cC,{id:"yQE2r9"}),(0,r.jsx)(A.bb,{})]})})}):null:Y]}),(0,r.jsx)(w.Z,{isOpen:x,onCurrencySelect:F,onDismiss:X,showCommonBases:!0,selectedCurrency:(L===i.TOKEN0?P:B)??void 0})]}),(0,r.jsx)(I.c,{})]})}):(0,r.jsx)(c.A,{})}!function(e){e[e.TOKEN0=0]="TOKEN0",e[e.TOKEN1=1]="TOKEN1"}(i||(i={}))}}]);
//# sourceMappingURL=9328.9b86700e.chunk.js.map