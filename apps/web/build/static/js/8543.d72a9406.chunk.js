"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[8543],{38543:(e,i,n)=>{n.r(i),n.d(i,{default:()=>ii});var a=n(21339),t=n(56542),o=n(4570),r=n(25093),l=n(92688),d=n(27382),s=n(39491),c=n(92686),p=n(33552),m=n(41362),h=n(44091);const u=p.default.div.withConfig({displayName:"Carousel__CarouselContainer",componentId:"sc-718aa339-0"})`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`,x=p.default.div.withConfig({displayName:"Carousel__CarouselCardContainer",componentId:"sc-718aa339-1"})`
  position: relative;
  width: 100%;
  overflow-x: hidden;
  max-width: 100%;
  height: 390px;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    max-width: 600px;
  }
`,g=(0,p.default)(h.a.div).withConfig({displayName:"Carousel__CarouselItemCard",componentId:"sc-718aa339-2"})`
  display: flex;
  justify-content: center;
  padding: 4px 12px 32px;
  position: absolute;
  will-change: transform;
  width: calc(100%);
  height: calc(100%);

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    padding: 4px 32px 32px;
  }
`,f=p.default.div.withConfig({displayName:"Carousel__CarouselItemIcon",componentId:"sc-718aa339-3"})`
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;
  display: none;
  user-select: none;
  height: calc(100%);
  padding: 4px 0 32px;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    display: flex;
  }

  :hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,b=800,C=({children:e,activeIndex:i,toggleNextSlide:n})=>{const t=(0,s.useCallback)(((i,n=e.length)=>(0,d.ef)(i,n)),[e]),o=(0,s.useCallback)(((e,i,n)=>(0,d.E)(e,i,n,t)),[t]),[r,l]=(0,h.bY)(e.length,(i=>({x:(i<e.length-1?i:-1)*b}))),c=(0,s.useRef)([0,1]),p=(0,s.useCallback)(((i,n)=>{const a=t(Math.floor(i/b)%e.length),r=n<0?e.length-2:1;l((t=>{const l=o(t,a,r),s=o(t,c.current[0],c.current[1]),p=(0,d.Z1)(a,r,l,e.length,i);return{x:-i%(b*e.length)+b*p,immediate:n<0?s>l:s<l,config:{tension:250,friction:30}}})),c.current=[a,r]}),[t,o,l,e.length]),C=(0,s.useRef)(0);(0,s.useEffect)((()=>{p(i*b,C.current)}),[i,p]);const w=(0,s.useCallback)((e=>{C.current=e,n(e)}),[n]);return(0,s.useEffect)((()=>{const e=setInterval((async()=>{w(1)}),7e3);return()=>{clearInterval(e)}}),[w,i]),(0,a.jsxs)(u,{children:[(0,a.jsx)(f,{onClick:()=>w(-1),children:(0,a.jsx)(m.wy,{width:"16px",height:"16px"})}),(0,a.jsx)(x,{children:r.map((({x:i},n)=>(0,a.jsx)(g,{style:{x:i},children:e[n]},n)))}),(0,a.jsx)(f,{onClick:()=>w(1),children:(0,a.jsx)(m.XC,{width:"16px",height:"16px"})})]})},w=({children:e})=>(0,a.jsx)(C,{activeIndex:0,toggleNextSlide:()=>{},children:[e]});var y=n(29826),v=n(96334),j=n(89458),_=n(17184),T=n(8202),k=n(19369);const N=p.default.div.withConfig({displayName:"CarouselCard__CarouselCardBorder",componentId:"sc-a2f657bb-0"})`
  width: 100%;
  position: relative;
  border-radius: 21px;
  cursor: pointer;
  border: 1px solid transparent;
  transition-property: border-color;
  transition-duration: ${({theme:e})=>e.transition.duration.fast};
  transition-timing-function: ${({theme:e})=>e.transition.timing.inOut};

  :hover {
    border: 1px solid ${({theme:e})=>e.surface3};
  }

  ::after {
    content: '';
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 21px;
    z-index: -1;
    box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
    transition-property: opacity;
    transition-duration: ${({theme:e})=>e.transition.duration.fast};
    transition-timing-function: ${({theme:e})=>e.transition.timing.inOut};
  }

  :hover::after {
    opacity: 1;
  }
`,$=p.default.div.withConfig({displayName:"CarouselCard__CardHeaderContainer",componentId:"sc-a2f657bb-1"})`
  position: relative;
  background-image: ${({src:e})=>`url(${e})`};
  background-size: cover;
  background-position: center;
`,I=p.default.div.withConfig({displayName:"CarouselCard__LoadingCardHeaderContainer",componentId:"sc-a2f657bb-2"})`
  position: relative;
  animation: ${y.gz} 1.5s infinite;
  animation-fill-mode: both;
  background: linear-gradient(
    to left,
    ${({theme:e})=>e.surface3} 25%,
    ${({theme:e})=>e.surface3} 50%,
    ${({theme:e})=>e.surface3} 75%
  );
  will-change: background-position;
  background-size: 400%;
`,S=p.default.div.withConfig({displayName:"CarouselCard__CardHeaderColumn",componentId:"sc-a2f657bb-3"})`
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  height: 202px;
  justify-content: center;
  padding: 0 40px;
  z-index: 1;
`,H=p.default.div.withConfig({displayName:"CarouselCard__IconContainer",componentId:"sc-a2f657bb-4"})`
  display: inline-flex;
  vertical-align: text-bottom;
  margin-left: 2px;
  transform: translateY(-2px) translateX(2px);
`,z=p.default.div.withConfig({displayName:"CarouselCard__CollectionNameContainer",componentId:"sc-a2f657bb-5"})`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-align: center;
  max-height: 56px;
`,F=(0,p.default)(v.X).withConfig({displayName:"CarouselCard__LoadingCollectionNameContainer",componentId:"sc-a2f657bb-6"})`
  width: 50%;
`,E=p.default.div.withConfig({displayName:"CarouselCard__HeaderOverlay",componentId:"sc-a2f657bb-7"})`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%, rgba(0, 0, 0, 0.08));
  bottom: 0px;
  left: 0px;
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: 0;

  // overlay workaround for firefox only
  @supports (-moz-appearance: none) {
    bottom: -1px;
  }
`,P=p.default.img.withConfig({displayName:"CarouselCard__CollectionImage",componentId:"sc-a2f657bb-8"})`
  width: 86px;
  height: 86px;
  background: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  border: 2px solid ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  border-radius: 100px;
`,B=p.default.div.withConfig({displayName:"CarouselCard__LoadingCollectionImage",componentId:"sc-a2f657bb-9"})`
  width: 86px;
  height: 86px;
  border-radius: 100px;
  animation: ${y.gz} 1.5s infinite;
  animation-fill-mode: both;
  background: linear-gradient(
    to left,
    ${({theme:e})=>e.surface3} 25%,
    ${({theme:e})=>e.surface3} 50%,
    ${({theme:e})=>e.surface3} 75%
  );
  will-change: background-position;
  background-size: 400%;
`,D=(0,p.default)(v.X).withConfig({displayName:"CarouselCard__LoadingTableElement",componentId:"sc-a2f657bb-10"})`
  width: 50px;
`,X=p.default.div.withConfig({displayName:"CarouselCard__TableElement",componentId:"sc-a2f657bb-11"})`
  display: flex;
  align-items: center;
  gap: 6px;
`,O=p.default.div.withConfig({displayName:"CarouselCard__FirstColumnTextWrapper",componentId:"sc-a2f657bb-12"})``,V=p.default.div.withConfig({displayName:"CarouselCard__CardBottomContainer",componentId:"sc-a2f657bb-13"})`
  display: grid;
  flex: 1;
  gap: 8px;
  grid-template-columns: auto auto auto;
  padding: 16px 16px 20px;
`,L=p.default.img.withConfig({displayName:"CarouselCard__MarketplaceIcon",componentId:"sc-a2f657bb-14"})`
  width: 20px;
  height: 20px;
`,M=p.default.div.withConfig({displayName:"CarouselCard__CarouselCardContainer",componentId:"sc-a2f657bb-15"})`
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 20px;
  overflow: hidden;
  height: 100%;

  ${X}:nth-child(3n-1), ${D}:nth-child(3n-1) {
    justify-self: center;
  }

  ${X}:nth-child(3n), ${D}:nth-child(3n) {
    justify-self: right;
  }

  @media (max-width: ${({theme:e})=>e.breakpoint.xs}px) or ((min-width: ${({theme:e})=>e.breakpoint.sm}px) and (max-width: 880px)) {
    ${O} {
      display: none;
    }
    ${X} {
      justify-self: left !important;
    }
    ${S} {
      padding: 0 20px;
    }
  }
`,R=({marketplace:e,floorInEth:i,listings:n})=>{const{formatNumberOrString:t}=(0,k.Gb)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(X,{children:[(0,a.jsx)(L,{src:`/nft/svgs/marketplaces/${e.toLowerCase()}-grey.svg`,alt:`${e} icon`}),(0,a.jsx)(O,{children:(0,a.jsx)(T.T.BodySmall,{color:"neutral2",children:e})})]}),(0,a.jsx)(X,{children:(0,a.jsx)(T.T.BodySmall,{color:"neutral2",children:Number(i)>0?`${t({input:i,type:k.sw.NFTTokenFloorPriceTrailingZeros})} ETH`:"-"})}),(0,a.jsx)(X,{children:(0,a.jsx)(T.T.BodySmall,{color:"neutral2",children:Number(n)>0?n:"None"})})]})},G=[_.Fz.Opensea,_.Fz.X2Y2,_.Fz.LooksRare],A={[_.Fz.Opensea]:"OpenSea",[_.Fz.X2Y2]:"X2Y2",[_.Fz.LooksRare]:"LooksRare"},W=({collection:e,onClick:i})=>{const{data:n,loading:t}=(0,j.K)(e.address??""),{formatNumber:o}=(0,k.Gb)();return t?(0,a.jsx)(Z,{}):(0,a.jsx)(N,{children:(0,a.jsxs)(M,{onClick:i,children:[(0,a.jsx)(K,{collection:e}),(0,a.jsx)(V,{children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(X,{children:[(0,a.jsx)(m.pD,{width:"20",height:"20"}),(0,a.jsx)(O,{children:(0,a.jsx)(T.T.SubHeaderSmall,{color:"userThemeColor",children:"Uniswap"})})]}),(0,a.jsx)(X,{children:e.floor&&(0,a.jsxs)(T.T.SubHeaderSmall,{color:"userThemeColor",children:[o({input:e.floor,type:k.sw.NFTToken})," ETH Floor"]})}),(0,a.jsx)(X,{children:(0,a.jsxs)(T.T.SubHeaderSmall,{color:"userThemeColor",children:[n.marketplaceCount?.reduce(((e,i)=>e+i.count),0)," Listings"]})}),G.map((i=>{const t=n.marketplaceCount?.find((e=>e.marketplace===i));return t?(0,a.jsx)(R,{marketplace:A[i],listings:t.count,floorInEth:t.floorPrice},`CarouselCard-key-${e.address}-${t.marketplace}`):null}))]})})]})})},Y=()=>(0,a.jsx)(a.Fragment,{children:[...Array(12)].map((e=>(0,a.jsx)(D,{},e)))}),U=(0,p.default)(T.T.MediumHeader).withConfig({displayName:"CarouselCard__CollectionName",componentId:"sc-a2f657bb-16"})`
  display: inline;
  vertical-align: text-bottom;
  line-height: 28px;
`,K=({collection:e})=>(0,a.jsxs)($,{src:e.bannerImageUrl??"",children:[(0,a.jsxs)(S,{children:[(0,a.jsx)(P,{src:e.imageUrl}),(0,a.jsxs)(z,{children:[(0,a.jsx)(U,{color:"deprecated_accentTextLightPrimary",fontWeight:"500",children:e.name}),e.isVerified&&(0,a.jsx)(H,{children:(0,a.jsx)(m.SA,{width:"24px",height:"24px"})})]})]}),(0,a.jsx)(E,{})]}),Z=({collection:e})=>(0,a.jsx)(N,{children:(0,a.jsxs)(M,{children:[e?(0,a.jsx)(K,{collection:e}):(0,a.jsxs)(I,{children:[(0,a.jsxs)(S,{children:[(0,a.jsx)(B,{}),(0,a.jsx)(F,{})]}),(0,a.jsx)(E,{})]}),(0,a.jsx)(V,{children:(0,a.jsx)(Y,{})})]})}),q=p.default.div.withConfig({displayName:"Banner__BannerContainer",componentId:"sc-37b670da-0"})`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 22px;
  position: relative;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding: 32px 16px;
  }
`,J=p.default.div.withConfig({displayName:"Banner__BannerMainArea",componentId:"sc-37b670da-1"})`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  gap: 36px;
  max-width: ${({theme:e})=>e.maxWidth};
  justify-content: space-between;
  z-index: 2;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex-direction: column;
    height: 100%;
    gap: 14px;
    margin-top: 4px;
    margin-bottom: 6px;
  }
`,Q=p.default.div.withConfig({displayName:"Banner__HeaderContainer",componentId:"sc-37b670da-2"})`
  display: flex;
  max-width: 500px;
  font-weight: 535;
  font-size: 72px;
  line-height: 88px;
  align-self: center;
  flex-shrink: 0;
  padding-bottom: 32px;

  color: ${({theme:e})=>e.neutral1};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.lg}px`}) {
    font-size: 48px;
    line-height: 67px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    font-size: 36px;
    line-height: 50px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    line-height: 43px;
    text-align: center;
    padding-bottom: 16px;

    br {
      display: none;
    }
  }

  /* Custom breakpoint to split into two lines on smaller screens */
  @media only screen and (max-width: 550px) {
    font-size: 28px;
    line-height: 34px;
    padding-bottom: 0;

    br {
      display: unset;
    }
  }
`,ee=["0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb"],ie=()=>{const e=(0,c.s0)(),{data:i}=(0,l.S)(5+ee.length,r._u.Day),n=(0,s.useMemo)((()=>i?.filter((e=>e.address&&!ee.includes(e.address))).slice(0,5)),[i]),[t,o]=(0,s.useState)(0),p=(0,s.useCallback)((e=>{n&&o((i=>(0,d.ef)(i+e,n.length)))}),[n]);return(0,a.jsx)(q,{children:(0,a.jsxs)(J,{children:[(0,a.jsxs)(Q,{children:["Better prices. ",(0,a.jsx)("br",{}),"More listings."]}),n?(0,a.jsx)(C,{activeIndex:t,toggleNextSlide:p,children:n.map((i=>(0,a.jsx)(W,{collection:i,onClick:()=>e(`/nfts/collection/${i.address}`)},i.address)))}):(0,a.jsx)(w,{children:(0,a.jsx)(Z,{})})]})})};var ne=n(83798),ae=n(49680),te=n(10548),oe=n(5007),re=n(98878);n(55377),n(22631);const le=p.default.div.withConfig({displayName:"Cells__TruncatedText",componentId:"sc-6ddadcc7-0"})`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,de=(0,p.default)(le).withConfig({displayName:"Cells__CollectionNameContainer",componentId:"sc-6ddadcc7-1"})`
  display: flex;
  padding: 14px 0px 14px 8px;
  align-items: center;
`,se=(0,p.default)(le).withConfig({displayName:"Cells__CollectionName",componentId:"sc-6ddadcc7-2"})`
  margin-left: 8px;
`,ce=(0,p.default)(te.Tv.SubHeader).withConfig({displayName:"Cells__TruncatedSubHeader",componentId:"sc-6ddadcc7-3"})`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,pe=(0,p.default)(te.Tv.SubHeaderSmall).withConfig({displayName:"Cells__TruncatedSubHeaderSmall",componentId:"sc-6ddadcc7-4"})`
  color: ${({theme:e})=>`${e.neutral1}`};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,me=p.default.div.withConfig({displayName:"Cells__RoundedImage",componentId:"sc-6ddadcc7-5"})`
  height: 36px;
  width: 36px;
  border-radius: 36px;
  background: ${({src:e,theme:i})=>e?`url(${e})`:i.surface2};
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
`,he=p.default.div.withConfig({displayName:"Cells__ChangeCellContainer",componentId:"sc-6ddadcc7-6"})`
  display: flex;
  color: ${({theme:e,change:i})=>i>=0?e.success:e.critical};
  justify-content: flex-end;
  align-items: center;
  gap: 2px;
`,ue=p.default.div.withConfig({displayName:"Cells__EthContainer",componentId:"sc-6ddadcc7-7"})`
  display: flex;
  justify-content: flex-end;
`,xe=({value:e})=>{const i=(0,ae.dD)();return(0,a.jsxs)(de,{children:[(0,a.jsx)(me,{src:e.logo}),(0,a.jsx)(se,{children:i?(0,a.jsx)(pe,{children:e.name}):(0,a.jsx)(ce,{children:e.name})}),e.isVerified&&(0,a.jsx)("span",{className:"rgw6ezl3 rgw6ez453 rgw6ez2o3 rgw6ez19r rgw6ez12r rgw6ez45x",children:(0,a.jsx)(m.SA,{})})]})},ge=({value:e})=>{const{formatNumberOrString:i}=(0,k.Gb)();return(0,a.jsx)("span",{children:e.value?i({input:e.value,type:k.sw.NFTCollectionStats}):"-"})},fe=(e,i,n,a)=>e===_.VG.ETH?n:a&&n?a*(i?parseFloat((0,oe.formatEther)(n)):n):void 0,be=({value:e,denomination:i,usdPrice:n})=>{const{formatNumberOrString:t}=(0,k.Gb)(),o=fe(i,!1,e,n),r=i===_.VG.ETH,l=t({input:o,type:r?k.sw.NFTToken:k.sw.FiatTokenStats})+(r?" ETH":""),d=(0,ae.dD)()?te.Tv.BodySmall:te.Tv.BodyPrimary;return(0,a.jsx)(ue,{children:(0,a.jsx)(d,{children:e?l:"-"})})},Ce=({value:e})=>(0,a.jsx)(te.Tv.BodyPrimary,{children:e}),we=({value:e,denomination:i,usdPrice:n})=>{const{formatNumberOrString:t}=(0,k.Gb)(),o=fe(i,!1,e,n),r=i===_.VG.ETH,l=t({input:o,type:r?k.sw.WholeNumber:k.sw.FiatTokenStats})+(r?" ETH":"");return(0,a.jsx)(ue,{children:(0,a.jsx)(te.Tv.BodyPrimary,{children:l})})},ye=({change:e,children:i})=>{const n=(0,ae.dD)()?te.Tv.BodySmall:te.Tv.BodyPrimary;return(0,a.jsxs)(he,{change:e??0,children:[(0,a.jsx)(re.Kx,{delta:e}),(0,a.jsx)(n,{color:"currentColor",children:i||`${e?Math.abs(Math.round(e)):0}%`})]})};var ve=n(75422),je=n(6411),_e=n(55659),Te=n(22637),ke=n(2998),Ne=n(67903),$e="_1mor7veh rgw6ezd3 rgw6ezbf rgw6eze9 rgw6ez2of rgw6ez27x rgw6ez1jl rgw6ez463 rgw6ez48x",Ie="_1mor7vea rgw6ez4qf rgw6ez16r rgw6ez80x rgw6ez7zl",Se="_1mor7ved rgw6ezd3 rgw6ezb9 rgw6eze3 rgw6ez4bf rgw6ez2or rgw6ez289",He="rgw6ezr9 rgw6ez55f rgw6ez895 rgw6ez805";const ze=p.default.div.withConfig({displayName:"Table__RankCellContainer",componentId:"sc-31220bfb-0"})`
  display: flex;
  align-items: center;
  padding-left: 24px;
  gap: 12px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding-left: 8px;
  }
`,Fe=p.default.tr.withConfig({displayName:"Table__StyledRow",componentId:"sc-31220bfb-1"})`
  cursor: pointer;
  :hover {
    background: ${({theme:e})=>e.surface3};
  }
  :active {
    background: ${({theme:e})=>e.deprecated_stateOverlayPressed};
  }
`,Ee=p.default.tr.withConfig({displayName:"Table__StyledLoadingRow",componentId:"sc-31220bfb-2"})`
  height: 80px;
`,Pe=p.default.th.withConfig({displayName:"Table__StyledHeader",componentId:"sc-31220bfb-3"})`
  ${({disabled:e})=>!e&&"cursor: pointer;"}

  :hover {
    ${({theme:e,disabled:i})=>!i&&`opacity: ${e.opacity.hover};`}
  }

  :active {
    ${({theme:e,disabled:i})=>!i&&`opacity: ${e.opacity.click};`}
  }
`,Be=p.default.div.withConfig({displayName:"Table__StyledLoadingHolder",componentId:"sc-31220bfb-4"})`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`,De=p.default.div.withConfig({displayName:"Table__StyledCollectionNameHolder",componentId:"sc-31220bfb-5"})`
  display: flex;
  margin-left: 24px;
  gap: 8px;
  align-items: center;
`,Xe=(0,p.default)(v.X).withConfig({displayName:"Table__StyledImageHolder",componentId:"sc-31220bfb-6"})`
  width: 36px;
  height: 36px;
  border-radius: 36px;
`,Oe=(0,p.default)(v.X).withConfig({displayName:"Table__StyledRankHolder",componentId:"sc-31220bfb-7"})`
  width: 8px;
  height: 16px;
  margin-right: 12px;
`,Ve=10;function Le({columns:e,data:i,smallHiddenColumns:n,mediumHiddenColumns:r,largeHiddenColumns:l,...d}){const m=(0,p.useTheme)(),{chainId:h}=(0,ve.useWeb3React)(),{width:u}=(0,Te.i)(),x=(0,ae.dD)(),{getTableProps:g,getTableBodyProps:f,headerGroups:b,rows:C,prepareRow:w,setHiddenColumns:y,visibleColumns:v}=(0,ke.useTable)({columns:e,data:i,initialState:{sortBy:[{desc:!0,id:Re.Volume}]},...d},ke.useSortBy),j=(0,c.s0)();return(0,s.useEffect)((()=>{u&&(u<=m.breakpoint.sm?y(n):u<=m.breakpoint.md?y(r):u<=m.breakpoint.lg?y(l):y([]))}),[u,y,e,n,r,l,m.breakpoint]),0===i.length?(0,a.jsx)(Me,{headerGroups:b,visibleColumns:v,...g()}):(0,a.jsxs)("table",{...g(),className:Ie,children:[(0,a.jsx)("thead",{className:He,children:b.map((e=>(0,s.createElement)("tr",{...e.getHeaderGroupProps(),key:e.id},e.headers.map(((e,i)=>(0,s.createElement)(Pe,{className:Se,...e.getHeaderProps(e.getSortByToggleProps()),style:{textAlign:0===i?"left":"right",paddingLeft:0===i?x?"16px":"52px":0},disabled:e.disableSortBy,key:i,children:[(0,a.jsx)(Ne.n,{as:"span",color:"neutral2",position:"relative",children:e.isSorted?e.isSortedDesc?(0,a.jsx)(_e.V,{width:"16px",height:"16px",style:{position:"absolute",top:3}}):(0,a.jsx)(je.c,{width:"16px",height:"16px",style:{position:"absolute",top:3}}):""}),(0,a.jsx)(Ne.n,{as:"span",paddingLeft:e.isSorted?"18":"0",children:e.render("Header")})]}))))))}),(0,a.jsx)("tbody",{...f(),children:C.map(((e,i)=>(w(e),(0,a.jsx)(o.M8,{events:[t.TM.onClick],name:t.Yz.NFT_TRENDING_ROW_SELECTED,properties:{collection_address:e.original.collection.address,chain_id:h},element:t.xo.NFT_TRENDING_ROW,children:(0,s.createElement)(Fe,{...e.getRowProps(),key:e.id,onClick:()=>j(`/nfts/collection/${e.original.collection.address}`),"data-testid":"nft-trending-collection"},e.cells.map(((e,n)=>(0,s.createElement)("td",{className:"_1mor7vef rgw6ezd3 rgw6ezbf rgw6eze9 rgw6ez2o3 rgw6ez27l rgw6ez1jl rgw6ez463 rgw6ez48x",...e.getCellProps(),key:n,style:{maxWidth:0===n?x?"240px":"360px":"160px"}},0===n?(0,a.jsxs)(ze,{children:[!x&&(0,a.jsx)(te.Tv.BodySecondary,{fontSize:"14px",lineHeight:"20px",children:i+1}),e.render("Cell")]}):e.render("Cell")))))},i))))})]})}function Me({headerGroups:e,visibleColumns:i,...n}){return(0,a.jsxs)("table",{...n,className:Ie,children:[(0,a.jsx)("thead",{className:He,children:e.map((e=>(0,s.createElement)("tr",{...e.getHeaderGroupProps(),key:e.id},e.headers.map(((e,i)=>(0,s.createElement)(Pe,{className:Se,...e.getHeaderProps(e.getSortByToggleProps()),style:{textAlign:0===i?"left":"right",paddingLeft:0===i?"52px":0},disabled:0===i,key:i,children:[(0,a.jsx)(Ne.n,{as:"span",color:"accent1",position:"relative",children:e.isSorted?e.isSortedDesc?(0,a.jsx)(_e.V,{width:"16px",height:"16px",style:{position:"absolute",marginTop:"2px"}}):(0,a.jsx)(je.c,{width:"16px",height:"16px",style:{position:"absolute",marginTop:"2px"}}):""}),(0,a.jsx)(Ne.n,{as:"span",paddingLeft:e.isSorted?"18":"0",children:e.render("Header")})]}))))))}),(0,a.jsx)("tbody",{...n,children:[...Array(Ve)].map(((e,n)=>(0,a.jsx)(Ee,{children:[...Array(i.length)].map(((e,i)=>(0,a.jsx)("td",{className:$e,children:0===i?(0,a.jsxs)(De,{children:[(0,a.jsx)(Oe,{}),(0,a.jsx)(Xe,{}),(0,a.jsx)(v.X,{})]}):(0,a.jsx)(Be,{children:(0,a.jsx)(v.X,{})})},i)))},n)))})]})}var Re;!function(e){e.Volume="Volume",e.VolumeChange="Volume change",e.Floor="Floor",e.FloorChange="Floor change",e.Sales="Sales",e.Items="Items",e.Owners="Owners"}(Re||(Re={}));const Ge=(e,i)=>e?i?Math.round(1e5*e)>=Math.round(1e5*i)?1:-1:1:-1,Ae=({data:e,timePeriod:i})=>{const n=(0,s.useMemo)((()=>(e,i)=>Ge(e.original.floor.value,i.original.floor.value)),[]),t=(0,s.useMemo)((()=>(e,i)=>Ge(e.original.floor.change,i.original.floor.change)),[]),o=(0,s.useMemo)((()=>(e,i)=>Ge(e.original.volume.value,i.original.volume.value)),[]),r=(0,s.useMemo)((()=>(e,i)=>Ge(e.original.volume.change,i.original.volume.change)),[]),l=(0,s.useMemo)((()=>[{Header:"Collection name",accessor:"collection",Cell:xe,disableSortBy:!0},{id:Re.Floor,Header:Re.Floor,accessor:({floor:e})=>e.value,sortType:n,Cell:function(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(be,{value:e.row.original.floor.value,denomination:e.row.original.denomination,usdPrice:e.row.original.usdPrice}),i!==_.XH.AllTime&&(0,a.jsx)(te.SF,{children:(0,a.jsx)(ye,{change:e.row.original.floor.change})})]})}},{id:Re.FloorChange,Header:Re.FloorChange,accessor:({floor:e})=>e.value,sortDescFirst:!0,disableSortBy:i===_.XH.AllTime,sortType:t,Cell:function(e){return i===_.XH.AllTime?(0,a.jsx)(Ce,{value:"-"}):(0,a.jsx)(ye,{change:e.row.original.floor.change})}},{id:Re.Volume,Header:Re.Volume,accessor:({volume:e})=>e.value,sortDescFirst:!0,sortType:o,Cell:function(e){return(0,a.jsx)(we,{value:e.row.original.volume.value,denomination:e.row.original.denomination,usdPrice:e.row.original.usdPrice})}},{id:Re.VolumeChange,Header:Re.VolumeChange,accessor:({volume:e})=>e.value,sortDescFirst:!0,disableSortBy:i===_.XH.AllTime,sortType:r,Cell:function(e){const{change:n}=e.row.original.volume;return i===_.XH.AllTime?(0,a.jsx)(Ce,{value:"-"}):n&&n>=9999?(0,a.jsxs)(ye,{change:n,children:[">9999","%"]}):(0,a.jsx)(ye,{change:n})}},{id:Re.Items,Header:Re.Items,accessor:"totalSupply",sortDescFirst:!0,Cell:function(e){return(0,a.jsx)(ge,{value:{value:e.row.original.totalSupply}})}},{Header:Re.Owners,accessor:({owners:e})=>e.value,sortDescFirst:!0,Cell:function(e){return(0,a.jsx)(ge,{value:e.row.original.owners})}}]),[t,n,r,o,i]);return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(Le,{smallHiddenColumns:[Re.Items,Re.FloorChange,Re.Volume,Re.VolumeChange,Re.Owners],mediumHiddenColumns:[Re.Items,Re.FloorChange,Re.VolumeChange,Re.Owners],largeHiddenColumns:[Re.Items,Re.Owners],data:e,columns:l})})},We=[{label:"1D",value:_.XH.OneDay},{label:"1W",value:_.XH.SevenDays},{label:"1M",value:_.XH.ThirtyDays},{label:"All",value:_.XH.AllTime}],Ye=p.default.div.withConfig({displayName:"TrendingCollections__ExploreContainer",componentId:"sc-6500bef7-0"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({theme:e})=>e.maxWidth};
  padding: 0 16px;
`,Ue=p.default.h1.withConfig({displayName:"TrendingCollections__StyledHeader",componentId:"sc-6500bef7-1"})`
  color: ${({theme:e})=>e.neutral1};
  font-size: 36px;
  line-height: 44px;
  font-weight: 535;
  margin: 0;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    font-size: 20px;
    line-height: 28px;
  }
`,Ke=p.default.div.withConfig({displayName:"TrendingCollections__FiltersRow",componentId:"sc-6500bef7-2"})`
  display: flex;
  justify-content: space-between;
  margin-top: 36px;
  margin-bottom: 20px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    margin-bottom: 16px;
    margin-top: 16px;
  }
`,Ze=p.default.div.withConfig({displayName:"TrendingCollections__Filter",componentId:"sc-6500bef7-3"})`
  display: flex;
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 16px;
  padding: 4px;
`,qe=p.default.div.withConfig({displayName:"TrendingCollections__Selector",componentId:"sc-6500bef7-4"})`
  padding: 8px 12px;
  border-radius: 12px;
  background: ${({active:e,theme:i})=>e?i.surface3:"none"};
  cursor: pointer;

  ${ne.cR}
`,Je=(0,p.default)(te.Tv.SubHeader).withConfig({displayName:"TrendingCollections__StyledSelectorText",componentId:"sc-6500bef7-5"})`
  color: ${({theme:e,active:i})=>i?e.neutral1:e.neutral2};
`;const Qe=()=>{const{formatterLocalCurrency:e}=(0,k.h2)(),[i,n]=(0,s.useState)(_.XH.OneDay),[t,o]=(0,s.useState)(!0),{data:d,loading:c}=(0,l.S)(100,function(e){switch(e){case _.XH.OneDay:return r._u.Day;case _.XH.SevenDays:return r._u.Week;case _.XH.ThirtyDays:return r._u.Month;case _.XH.AllTime:return r._u.Max;default:return r._u.Day}}(i)),p=(0,ae.$N)(),m=(0,s.useMemo)((()=>!c&&d?d.map((e=>({...e,collection:{name:e.name,logo:e.imageUrl,address:e.address,isVerified:e.isVerified},volume:{value:e.volume,change:e.volumeChange,type:"eth"},floor:{value:e.floor,change:e.floorChange},owners:{value:e.owners},sales:e.sales,totalSupply:e.totalSupply,denomination:t?_.VG.ETH:_.VG.USD,usdPrice:p}))):[]),[d,c,t,p]);return(0,a.jsxs)(Ye,{children:[(0,a.jsx)(Ue,{children:"Trending NFT collections"}),(0,a.jsxs)(Ke,{children:[(0,a.jsx)(Ze,{children:We.map((e=>(0,a.jsx)(qe,{active:e.value===i,onClick:()=>n(e.value),children:(0,a.jsx)(Je,{lineHeight:"20px",active:e.value===i,children:e.label})},e.value)))}),(0,a.jsxs)(Ze,{onClick:()=>o(!t),children:[(0,a.jsx)(qe,{active:t,children:(0,a.jsx)(Je,{lineHeight:"20px",active:t,children:"ETH"})}),(0,a.jsx)(qe,{active:!t,children:(0,a.jsx)(Je,{lineHeight:"20px",active:!t,children:e})})]})]}),(0,a.jsx)(Ae,{data:m,timePeriod:i})]})},ei=p.default.div.withConfig({displayName:"explore__ExploreContainer",componentId:"sc-f5d86c41-0"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    gap: 16px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    gap: 0px;
  }
`,ii=()=>{const e=(0,ae.cP)((e=>e.setBagExpanded));return(0,s.useEffect)((()=>{e({bagExpanded:!1,manualClose:!1})}),[]),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(o.fM,{page:t.yJ.NFT_EXPLORE_PAGE,shouldLogImpression:!0,children:(0,a.jsxs)(ei,{children:[(0,a.jsx)(ie,{}),(0,a.jsx)(Qe,{})]})})})}}}]);
//# sourceMappingURL=8543.d72a9406.chunk.js.map