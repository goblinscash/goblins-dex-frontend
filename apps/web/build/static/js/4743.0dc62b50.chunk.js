"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[4743,2574],{88568:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(39491),o=n(37954),r=n.n(o);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=(0,i.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,r=e.size,a=void 0===r?24:r,l=d(e,["color","size"]);return i.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),i.createElement("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),i.createElement("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}))}));a.propTypes={color:r().string,size:r().oneOfType([r().string,r().number])},a.displayName="Inbox";const l=a},68858:(e,t,n)=>{n.d(t,{G:()=>r});var i=n(75422),o=n(52214);function r(){const{chainId:e}=(0,i.useWeb3React)();return e&&o.Ep.includes(e)}},60052:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ve});var i,o,r,s=n(21339),d=n(88693),a=n(56542),l=n(75422),c=n(4570),p=n(91997),x=n(70357),u=n(65023),f=n(39491),h=n(99123),m=n(33552),g=n(10548);function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},j.apply(this,arguments)}function w(e,t){let{title:n,titleId:s,...d}=e;return f.createElement("svg",j({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},d),n?f.createElement("title",{id:s},n):null,i||(i=f.createElement("path",{d:"M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),o||(o=f.createElement("path",{d:"M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),r||(r=f.createElement("path",{d:"M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}const y=f.forwardRef(w);n.p;var v,b=n(33151),C=n(52943),k=n(53499);!function(e){e.LEFT="LEFT",e.RIGHT="RIGHT"}(v||(v={}));const O=(0,m.default)(y).withConfig({displayName:"Menu__StyledMenuIcon",componentId:"sc-ac391358-0"})`
  path {
    stroke: ${({theme:e})=>e.neutral1};
  }
`,_=m.default.div.withConfig({displayName:"Menu__StyledMenu",componentId:"sc-ac391358-1"})`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
`,I=m.default.span.withConfig({displayName:"Menu__MenuFlyout",componentId:"sc-ac391358-2"})`
  min-width: 196px;
  max-height: 350px;
  overflow: auto;
  background-color: ${({theme:e})=>e.surface1};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);
  border: 1px solid ${({theme:e})=>e.surface1};
  border-radius: 12px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  position: absolute;
  top: 3rem;
  z-index: 100;

  ${({flyoutAlignment:e=v.RIGHT})=>e===v.RIGHT?m.css`
          right: 0rem;
        `:m.css`
          left: 0rem;
        `};
`,T=(0,m.default)(g.dL).withConfig({displayName:"Menu__MenuItem",componentId:"sc-ac391358-3"})`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 0.5rem;
  justify-content: space-between;
  color: ${({theme:e})=>e.neutral2};
  :hover {
    color: ${({theme:e})=>e.neutral1};
    cursor: pointer;
    text-decoration: none;
  }
`,P=(0,m.default)(h.rU).withConfig({displayName:"Menu__InternalMenuItem",componentId:"sc-ac391358-4"})`
  flex: 1;
  padding: 0.5rem 0.5rem;
  color: ${({theme:e})=>e.neutral2};
  width: max-content;
  text-decoration: none;
  :hover {
    color: ${({theme:e})=>e.neutral1};
    cursor: pointer;
    text-decoration: none;
  }
  > svg {
    margin-right: 8px;
  }
`,L=(0,m.default)(T).withConfig({displayName:"Menu__ExternalMenuItem",componentId:"sc-ac391358-5"})`
  width: max-content;
  text-decoration: none;
`;var E=n(73018),N=n(39681);const $=m.default.div.withConfig({displayName:"PositionList__DesktopHeader",componentId:"sc-dcaf7249-0"})`
  display: none;
  font-size: 14px;
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};

  @media screen and (min-width: ${N.e.deprecated_upToSmall}px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
    & > div:last-child {
      text-align: right;
      margin-right: 12px;
    }
  }
`,M=m.default.div.withConfig({displayName:"PositionList__MobileHeader",componentId:"sc-dcaf7249-1"})`
  font-weight: medium;
  padding: 8px;
  font-weight: 535;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};

  @media screen and (min-width: ${N.e.deprecated_upToSmall}px) {
    display: none;
  }

  @media screen and (max-width: ${N.e.deprecated_upToExtraSmall}px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`,z=m.default.div.withConfig({displayName:"PositionList__ToggleWrap",componentId:"sc-dcaf7249-2"})`
  display: flex;
  flex-direction: row;
  align-items: center;
`,W=m.default.button.withConfig({displayName:"PositionList__ToggleLabel",componentId:"sc-dcaf7249-3"})`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${({theme:e})=>e.accent1};
  font-size: 14px;
  font-weight: 485;
`;function H({positions:e,setUserHideClosedPositions:t,userHideClosedPositions:n}){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)($,{children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(d.cC,{id:"LcLwJZ"}),e&&" ("+e.length+")"]}),(0,s.jsx)(W,{id:"desktop-hide-closed-positions",onClick:()=>{t(!n)},children:n?(0,s.jsx)(d.cC,{id:"GOctE4"}):(0,s.jsx)(d.cC,{id:"l+HNUa"})})]}),(0,s.jsxs)(M,{children:[(0,s.jsx)(d.cC,{id:"LcLwJZ"}),(0,s.jsx)(z,{children:(0,s.jsx)(W,{onClick:()=>{t(!n)},children:n?(0,s.jsx)(d.cC,{id:"GOctE4"}):(0,s.jsx)(d.cC,{id:"l+HNUa"})})})]}),e.map((e=>(0,s.jsx)(E.Z,{...e},e.tokenId.toString())))]})}var R=n(17358),B=n(12159),S=n(52214),Z=n(51491),G=n(68858),F=n(370),U=n(79799),A=n(88568),J=n(2996),D=n(37954),q=n.n(D);function Q(){return Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Q.apply(this,arguments)}function V(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var Y=(0,f.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,o=e.size,r=void 0===o?24:o,s=V(e,["color","size"]);return f.createElement("svg",Q({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),f.createElement("polygon",{points:"12 2 2 7 12 12 22 7 12 2"}),f.createElement("polyline",{points:"2 17 12 22 22 17"}),f.createElement("polyline",{points:"2 12 12 17 22 12"}))}));Y.propTypes={color:q().string,size:q().oneOfType([q().string,q().number])},Y.displayName="Layers";const K=Y;function X(){return X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},X.apply(this,arguments)}function ee(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var te=(0,f.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,o=e.size,r=void 0===o?24:o,s=ee(e,["color","size"]);return f.createElement("svg",X({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),f.createElement("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),f.createElement("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"}))}));te.propTypes={color:q().string,size:q().oneOfType([q().string,q().number])},te.displayName="BookOpen";const ne=te;var ie=n(58594),oe=n(59251),re=n(1707);const se=(0,m.default)(u.Tz).withConfig({displayName:"Pool__PageWrapper",componentId:"sc-3d583cf1-0"})`
  padding: 68px 8px 0px;
  max-width: 870px;
  width: 100%;

  @media (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    max-width: 800px;
    padding-top: 48px;
  }

  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    max-width: 500px;
    padding-top: 20px;
  }
`,de=(0,m.default)(R.m0).withConfig({displayName:"Pool__TitleRow",componentId:"sc-3d583cf1-1"})`
  color: ${({theme:e})=>e.neutral2};
  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex-wrap: wrap;
    gap: 12px;
    width: 100%;
  }
`,ae=(0,m.default)(R.DA).withConfig({displayName:"Pool__ButtonRow",componentId:"sc-3d583cf1-2"})`
  & > *:not(:last-child) {
    margin-left: 8px;
  }

  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`,le=(0,m.default)((({flyoutAlignment:e=v.RIGHT,ToggleUI:t,menuItems:n,...i})=>{const o=(0,f.useRef)(),r=(0,C.Wt)(k.Lk.POOL_OVERVIEW_OPTIONS),d=(0,C.xk)(k.Lk.POOL_OVERVIEW_OPTIONS);(0,b.t)(o,r?d:void 0);const a=t||O;return(0,s.jsxs)(_,{ref:o,...i,children:[(0,s.jsx)(a,{onClick:d}),r&&(0,s.jsx)(I,{flyoutAlignment:e,children:n.map((({content:e,link:t,external:n},i)=>n?(0,s.jsx)(L,{href:t,children:e},i):(0,s.jsx)(P,{to:t,children:e},i)))})]})})).withConfig({displayName:"Pool__PoolMenu",componentId:"sc-3d583cf1-3"})`
  margin-left: 0;
  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex: 1 1 auto;
    width: 50%;
  }

  a {
    width: 100%;
  }
`,ce=m.default.div.withConfig({displayName:"Pool__PoolMenuItem",componentId:"sc-3d583cf1-4"})`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-weight: 535;
`,pe=(0,m.default)(x.Ux).withConfig({displayName:"Pool__MoreOptionsButton",componentId:"sc-3d583cf1-5"})`
  border-radius: 12px;
  flex: 1 1 auto;
  padding: 6px 8px;
  width: 100%;
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  margin-right: 8px;
`,xe=(0,m.default)(g.Tv.BodyPrimary).withConfig({displayName:"Pool__MoreOptionsText",componentId:"sc-3d583cf1-6"})`
  align-items: center;
  display: flex;
`,ue=m.default.div.withConfig({displayName:"Pool__ErrorContainer",componentId:"sc-3d583cf1-7"})`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  max-width: 300px;
  min-height: 25vh;
`,fe=m.css`
  width: 48px;
  height: 48px;
  margin-bottom: 0.5rem;
`,he=(0,m.default)(U.Z).withConfig({displayName:"Pool__NetworkIcon",componentId:"sc-3d583cf1-8"})`
  ${fe}
`,me=(0,m.default)(A.Z).withConfig({displayName:"Pool__InboxIcon",componentId:"sc-3d583cf1-9"})`
  ${fe}
`,ge=(0,m.default)(x.DF).withConfig({displayName:"Pool__ResponsiveButtonPrimary",componentId:"sc-3d583cf1-10"})`
  border-radius: 12px;
  font-size: 16px;
  padding: 6px 8px;
  width: fit-content;
  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex: 1 1 auto;
    width: 50%;
  }
`,je=m.default.main.withConfig({displayName:"Pool__MainContentWrapper",componentId:"sc-3d583cf1-11"})`
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  padding: 0;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;function we(){return(0,s.jsxs)(re.pr,{children:[(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{})]})}function ye(){const e=(0,m.useTheme)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(se,{children:(0,s.jsx)(u.Tz,{gap:"lg",justify:"center",children:(0,s.jsxs)(u.Tz,{gap:"lg",style:{width:"100%"},children:[(0,s.jsx)(de,{padding:"0",children:(0,s.jsx)(g.Tv.H1Large,{children:(0,s.jsx)(d.cC,{id:"lQfOr9"})})}),(0,s.jsx)(je,{children:(0,s.jsx)(ue,{children:(0,s.jsxs)(g.Tv.BodyPrimary,{color:e.neutral3,textAlign:"center",children:[(0,s.jsx)(he,{strokeWidth:1.2}),(0,s.jsx)("div",{"data-testid":"pools-unsupported-err",children:(0,s.jsx)(d.cC,{id:"nFZR3H"})})]})})})]})})}),(0,s.jsx)(B.c,{})]})}function ve(){const{account:e,chainId:t}=(0,l.useWeb3React)(),n=(0,G.G)(),i=(0,p.LK)(),o=(0,m.useTheme)(),[r,j]=(0,oe.QP)(),{positions:w,loading:y}=(0,F.W)(e),[b,C]=w?.reduce(((e,t)=>(e[t.liquidity?.isZero()?1:0].push(t),e)),[[],[]])??[[],[]],k=(0,f.useMemo)((()=>[...b,...r?[]:C]),[C,b,r]),O=(0,Z.J)(k);if(!(0,S.EC)(t))return(0,s.jsx)(ye,{});const _=Boolean(!e),I=[{content:(0,s.jsxs)(ce,{children:[(0,s.jsx)(d.cC,{id:"y5rS9U"}),(0,s.jsx)(J.Z,{size:16})]}),link:"/migrate/v2",external:!1},{content:(0,s.jsxs)(ce,{children:[(0,s.jsx)(d.cC,{id:"F+Ocff"}),(0,s.jsx)(K,{size:16})]}),link:"/pools/v2",external:!1},{content:(0,s.jsxs)(ce,{children:[(0,s.jsx)(d.cC,{id:"rjZpLn"}),(0,s.jsx)(ne,{size:16})]}),link:"https://support.uniswap.org/hc/en-us/categories/8122334631437-Providing-Liquidity-",external:!0}];return(0,s.jsxs)(c.fM,{page:a.yJ.POOL_PAGE,shouldLogImpression:!0,children:[(0,s.jsx)(se,{children:(0,s.jsx)(u.Tz,{gap:"lg",justify:"center",children:(0,s.jsxs)(u.Tz,{gap:"lg",style:{width:"100%"},children:[(0,s.jsxs)(de,{padding:"0",children:[(0,s.jsx)(g.Tv.LargeHeader,{children:(0,s.jsx)(d.cC,{id:"lQfOr9"})}),(0,s.jsxs)(ae,{children:[n&&(0,s.jsx)(le,{menuItems:I,flyoutAlignment:v.LEFT,ToggleUI:e=>(0,s.jsx)(pe,{...e,children:(0,s.jsxs)(xe,{children:[(0,s.jsx)(d.cC,{id:"2FYpfJ"}),(0,s.jsx)(ie.Z,{size:15})]})})}),(0,s.jsxs)(ge,{"data-cy":"join-pool-button",id:"join-pool-button",as:h.rU,to:"/add/smartbch",children:["+ ",(0,s.jsx)(d.cC,{id:"1k0YWs"})]})]})]}),(0,s.jsx)(je,{children:y?(0,s.jsx)(we,{}):O&&C&&O.length>0?(0,s.jsx)(H,{positions:O,setUserHideClosedPositions:j,userHideClosedPositions:r}):(0,s.jsxs)(ue,{children:[(0,s.jsxs)(g.Tv.BodyPrimary,{color:o.neutral3,textAlign:"center",children:[(0,s.jsx)(me,{strokeWidth:1,style:{marginTop:"2em"}}),(0,s.jsx)("div",{children:(0,s.jsx)(d.cC,{id:"YgSnQ0"})})]}),!_&&C.length>0&&(0,s.jsx)(x.oD,{style:{marginTop:".5rem"},onClick:()=>j(!r),children:(0,s.jsx)(d.cC,{id:"GOctE4"})}),_&&(0,s.jsx)(c.M8,{events:[a.TM.onClick],name:a.Je.CONNECT_WALLET_BUTTON_CLICKED,properties:{received_swap_quote:!1},element:a.xo.CONNECT_WALLET_BUTTON,children:(0,s.jsx)(x.DF,{style:{marginTop:"2em",marginBottom:"2em",padding:"8px 16px"},onClick:i,children:(0,s.jsx)(d.cC,{id:"GdzYJ9"})})})]})}),(0,s.jsx)(g.Pw,{})]})})}),(0,s.jsx)(B.c,{})]})}},82574:(e,t,n)=>{n.d(t,{B:()=>r});var i=n(52214),o=n(46778);function r(e){if(e.isNative)return e;const t=(0,i.oG)(e.chainId);return t&&o.Fl[t]?.equals(e)?(0,o.gX)(e.chainId):e}}}]);
//# sourceMappingURL=4743.0dc62b50.chunk.js.map