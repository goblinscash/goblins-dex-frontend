"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[9826],{5971:(e,t,i)=>{i.r(t),i.d(t,{BannerWrapper:()=>yi,CollectionBannerLoading:()=>mi,default:()=>Ti});var n=i(21339),r=i(54314),a=i(56542),s=i(75422),o=i(4570),l=i(65023),d=i(83798),c=i(17358),p=i(96334),h=i(89458),g=i(7108),m=i(91951),x=i(66364),u=i(22053),f=i(61516),w=i(49680),y=i(80183),j=i(27382),b=i(19369);i(59074),i(92743);const C=()=>{const e=(0,w.cP)((e=>e.itemsInBag)),t=(0,w.cP)((e=>e.toggleBag)),i=(0,y.P)(),r=(0,y.B)(),{formatEther:a,formatNumberOrString:s}=(0,b.Gb)(),o=e.length>0;return(0,n.jsxs)(u.X2,{display:{sm:o?"flex":"none",md:"none"},className:"rgw6ez48r rgw6ez32f rgw6ez35l rgw6ez3b3 rgw6ez4ql rgw6ez2tx rgw6ez3qr rgw6ez80p rgw6ez7zp rgw6ez55f rgw6ez895 rgw6ez48f",children:[(0,n.jsxs)(u.X2,{gap:"8",children:[(0,n.jsx)(x.n,{position:"relative",style:{width:"34px",height:"34px"},children:e.slice(0,3).map(((e,t)=>(0,n.jsx)(x.n,{as:"img",position:"absolute",src:e.asset.smallImageUrl,top:"1/2",left:"1/2",width:"26",height:"26",borderRadius:"4",style:{transform:0===t?"translate(-50%, -50%) rotate(-4.42deg)":1===t?"translate(-50%, -50%) rotate(-14.01deg)":"translate(-50%, -50%) rotate(10.24deg)",zIndex:t}},t)))}),(0,n.jsxs)(u.sg,{children:[(0,n.jsx)(x.n,{className:f.d1,fontWeight:"medium",children:(0,j.t)(e.length,"NFT")}),(0,n.jsxs)(u.X2,{gap:"8",children:[(0,n.jsxs)(x.n,{className:f.d1,children:[`${a({input:i.toString(),type:b.sw.NFTToken})}`," ETH"]}),(0,n.jsx)(x.n,{color:"neutral2",className:f.Km,children:s({input:r,type:b.sw.FiatNFTToken})})]})]})]}),(0,n.jsx)(x.n,{className:"rgw6ezd9 rgw6ezb9 rgw6ezdx rgw6ez2e9 rgw6ez2jr rgw6ez2of rgw6ez27x rgw6ez4df rgw6ez6sl rgw6ez80x rgw6ez7zd",onClick:t,children:"View bag"})]})};var v=i(99688),_=i(33552),k=(i(45690),"_1wiwg131 rgw6ezd9 rgw6ezbf rgw6eze3 rgw6ez48x rgw6ez4ux rgw6ez88d rgw6ez7zd rgw6ezfx rgw6ez4bf"),T="_1wiwg135 _1wiwg131 rgw6ezd9 rgw6ezbf rgw6eze3 rgw6ez48x rgw6ez4ux rgw6ez88d rgw6ez7zd rgw6ezfx rgw6ez4b9";const I=(0,_.default)(u.X2).withConfig({displayName:"ActivitySwitcher__BaseActivityContainer",componentId:"sc-12fe17f6-0"})`
  border-bottom: 1px solid;
  border-color: ${({theme:e})=>e.surface3};
  margin-right: 12px;
`,N=new Array(2).fill(null).map(((e,t)=>(0,n.jsx)("div",{className:"_1wiwg136 _2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3"},`ActivitySwitcherLoading-key-${t}`))),S=({showActivity:e,toggleActivity:t})=>{const i=(0,w.Iv)((e=>e.isCollectionStatsLoading));return(0,n.jsx)(I,{gap:"24",marginBottom:"16",children:i?N:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(x.n,{as:"button",className:e?k:T,onClick:()=>e&&t(),children:"Items"}),(0,n.jsx)(o.M8,{events:[a.TM.onClick],element:a.xo.NFT_ACTIVITY_TAB,name:a.Yz.NFT_ACTIVITY_SELECTED,children:(0,n.jsx)(x.n,{as:"button",className:e?T:k,onClick:()=>!e&&t(),"data-testid":"nft-activity",children:"Activity"})})]})})};var z=i(54100),P=i(5007),$=i(75876),E=i(25093),R=i(45015),M=i(65823),F=i(88693),B=i(15239),A=i(56049),L=i(39491);const H=({asset:e,isMobile:t,mediaShouldBePlaying:i,setCurrentTokenPlayingMedia:r,uniformAspectRatio:s,setUniformAspectRatio:l,renderedHeight:d,setRenderedHeight:c})=>{const{formatEther:p}=(0,b.Gb)(),h=(0,w.cP)((e=>e.bagManuallyClosed)),g=(0,w.cP)((e=>e.addAssetsToBag)),m=(0,w.cP)((e=>e.removeAssetsFromBag)),x=(0,w.cP)((e=>e.itemsInBag)),u=(0,w.cP)((e=>e.bagExpanded)),f=(0,w.cP)((e=>e.setBagExpanded)),y=(0,o.oO)({page:a.yJ.NFT_COLLECTION_PAGE}),{isSelected:j}=(0,L.useMemo)((()=>({isSelected:x.filter((t=>e.tokenId===t.asset.tokenId&&e.address===t.asset.address)).length>0})),[e,x]),C=e.notForSale||z.O$.from(e.priceInfo?e.priceInfo.ETHPrice:0).lt(0),v=e?.rarity?.providers?e.rarity.providers[0]:void 0,_=(0,L.useCallback)((()=>{z.O$.from(e.priceInfo?.ETHPrice??0).gt(0)&&(g([e]),u||t||h||f({bagExpanded:!0}),(0,o._P)(a.Yz.NFT_BUY_ADDED,{collection_address:e.address,token_id:e.tokenId,token_type:e.tokenType,...y}))}),[g,e,u,h,t,f,y]),k=(0,L.useCallback)((()=>{m([e])}),[e,m]),T=(0,L.useMemo)((()=>({primaryInfo:e.name?e.name:`#${e.tokenId}`,primaryInfoIcon:e.susFlag?(0,n.jsx)(A.yT,{}):null,primaryInfoRight:e.rarity&&v?(0,n.jsx)(A.SD,{provider:v}):null,secondaryInfo:C?"":`${p({input:e.priceInfo.ETHPrice,type:b.sw.NFTToken})} ETH`,selectedInfo:(0,n.jsx)(F.cC,{id:"77UrnP"}),notSelectedInfo:(0,n.jsx)(F.cC,{id:"2RtVHm"}),disabledInfo:(0,n.jsx)(F.cC,{id:"i/2ImT"})})),[e.name,e.priceInfo.ETHPrice,e.rarity,e.susFlag,e.tokenId,p,C,v]);return(0,n.jsx)(B.y,{asset:e,display:T,isSelected:j,isDisabled:Boolean(e.notForSale),selectAsset:_,unselectAsset:k,mediaShouldBePlaying:i,uniformAspectRatio:s,setUniformAspectRatio:l,renderedHeight:d,setRenderedHeight:c,setCurrentTokenPlayingMedia:r,testId:"nft-collection-asset"})};var O,D=i(84846),Y=i(33151),W=i(41362),X=i(81086),Z="_10b1b4ve rgw6ez4bf rgw6ez453 rgw6ez19r rgw6ez12r rgw6ez8e1",U="_10b1b4vc",V="rgw6ez80d rgw6ez6df rgw6ez8ap rgw6ez8bh rgw6ezvx rgw6ezff",G="_10b1b4vb rgw6ez805 rgw6ez5yr rgw6ez89x rgw6ez2cl rgw6ez27x",K="rgw6ez44r rgw6ez2jl rgw6ez7zd rgw6ezbf rgw6eze3 rgw6ez48f rgw6ez3x rgw6ez2dr rgw6ez2ol rgw6ez283",q="_10b1b4v2",J=i(79070),Q=i(12666),ee=i(37245);!function(e){e[e.MARKPLACE_INDEX=0]="MARKPLACE_INDEX",e[e.PRICE_RANGE_INDEX=1]="PRICE_RANGE_INDEX",e[e.TRAIT_START_INDEX=2]="TRAIT_START_INDEX"}(O||(O={}));const te=(0,Q.Ue)()((0,ee.mW)((e=>({traitsOpen:{},setTraitsOpen:(t,i)=>{e((({traitsOpen:e})=>({traitsOpen:{...e,[t]:i}})))}})),{name:"useTraitsOpen"}));var ie=i(10548),ne=i(31232);const re=(0,_.default)(u.X2).withConfig({displayName:"MarketplaceSelect__FilterItemWrapper",componentId:"sc-94e770fe-0"})`
  justify-content: space-between;
  padding: 10px 16px 10px 12px;
  cursor: pointer;
  border-radius: 12px;
  &:hover {
    background: ${({theme:e})=>e.surface2};
  }
`,ae=(0,_.default)(u.X2).withConfig({displayName:"MarketplaceSelect__MarketNameWrapper",componentId:"sc-94e770fe-1"})`
  gap: 10px;
`,se={x2y2:"X2Y2",opensea:"OpenSea",looksrare:"LooksRare",sudoswap:"SudoSwap",nftx:"NFTX",nft20:"NFT20",cryptopunks:"LarvaLabs"},oe=({title:e,element:t,onClick:i})=>(0,n.jsxs)(re,{onClick:i,children:[(0,n.jsx)(ie.Tv.BodyPrimary,{children:e}),(0,n.jsx)(ie.Tv.SubHeaderSmall,{children:t})]}),le=({title:e,value:t,addMarket:i,removeMarket:r,isMarketSelected:s,count:l})=>{const[d,c]=(0,L.useState)(!1),[p,h]=(0,L.useReducer)((e=>!e),!1);(0,L.useEffect)((()=>{c(s)}),[s]);const g=e=>{e.preventDefault(),d?(r(t),c(!1)):(i(t),c(!0)),(0,o._P)(a.Yz.NFT_FILTER_SELECTED,{filter_type:a.fm.MARKETPLACE})},m=(0,n.jsx)(ne.X,{checked:d,hovered:p,onChange:g,children:(0,n.jsx)(x.n,{as:"span",color:"neutral2",marginLeft:"4",paddingRight:"12",children:l})}),u=(0,n.jsxs)(ae,{children:[(0,j.Dp)(e,"16"),e]});return(0,n.jsx)("div",{onMouseEnter:h,onMouseLeave:h,children:(0,n.jsx)(oe,{title:u,element:m,onClick:g})},t)},de=({title:e,items:t,onClick:i,isOpen:r})=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(x.n,{className:V,opacity:r?"1":"0"}),(0,n.jsxs)(x.n,{as:"details",className:(0,$.default)(f.Nf,!r&&q),open:r,borderRadius:r?"0":"12",children:[(0,n.jsxs)(x.n,{as:"summary",className:`${K} ${q}`,display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"16",paddingTop:"12",paddingLeft:"12",paddingBottom:"12",lineHeight:"20",borderRadius:"12",maxHeight:"48",onClick:i,children:[e,(0,n.jsx)(x.n,{display:"flex",alignItems:"center",children:(0,n.jsx)(x.n,{className:Z,style:{transform:`rotate(${r?0:180}deg)`},children:(0,n.jsx)(W.g8,{className:U})})})]}),(0,n.jsx)(u.sg,{className:G,paddingBottom:"8",paddingLeft:"0",children:t})]})]}),ce=()=>{const{addMarket:e,removeMarket:t,markets:i,marketCount:r}=(0,J.PY)((({markets:e,marketCount:t,removeMarket:i,addMarket:n})=>({markets:e,marketCount:t,removeMarket:i,addMarket:n}))),[a,s]=(0,L.useState)(!!i.length),o=te((e=>e.setTraitsOpen)),l=(0,L.useMemo)((()=>Object.entries(se).map((([a,s])=>(0,n.jsx)(le,{title:s,value:a,count:r?.[a]||0,addMarket:e,removeMarket:t,isMarketSelected:i.includes(a)},a)))),[e,r,t,i]);return(0,n.jsx)(de,{title:"Marketplaces",items:l,onClick:e=>{e.preventDefault(),s(!a),o(O.MARKPLACE_INDEX,!a)},isOpen:a})};var pe=i(81223);const he=(0,_.default)(pe.Z).withConfig({displayName:"FilterSortDropdown__CheckIcon",componentId:"sc-c4c806a4-0"})`
  height: 20px;
  width: 20px;
  color: ${({theme:e})=>e.accent1};
`,ge=({sortDropDownOptions:e})=>{const[t,i]=(0,L.useState)(!1),r=e=>{e.preventDefault(),i(!t)},a=e.map((e=>(0,n.jsx)(me,{dropDownOption:e,parentOnClick:r},e.displayText)));return(0,n.jsx)(de,{title:"Sort by",items:a,onClick:r,isOpen:t})},me=({dropDownOption:e,parentOnClick:t})=>{const i=(0,w.PY)((e=>e.sortBy)),r=void 0!==e.sortBy&&i===e.sortBy?(0,n.jsx)(he,{}):(0,n.jsx)(n.Fragment,{});return(0,n.jsx)(oe,{title:e.displayText,element:r,onClick:i=>{i.preventDefault(),t(i),e.onClick()}})},xe=({dropDownOptions:e,inFilters:t,mini:i,miniPrompt:r,top:a,left:s})=>{const o=(0,w.PY)((e=>e.sortBy)),[l,d]=(0,L.useReducer)((e=>!e),!1),[c,p]=(0,L.useReducer)((e=>!e),!1),[h,g]=(0,L.useState)(o),m=(0,w.Iv)((e=>e.isCollectionStatsLoading)),[y,j]=(0,L.useState)(0);(0,L.useEffect)((()=>{g(o)}),[o]);const b=(0,L.useRef)(null);(0,Y.t)(b,(()=>l&&d())),(0,L.useEffect)((()=>j(0)),[e]);const C=(0,L.useMemo)((()=>e[h].reverseOnClick||e[h].reverseIndex),[h,e]),v=m?220:t?"full":i?"min":y||"300px";return(0,n.jsxs)(x.n,{ref:b,borderRadius:"12",borderBottomLeftRadius:l?"0":void 0,borderBottomRightRadius:l?"0":void 0,style:{width:v},children:[(0,n.jsx)(x.n,{as:"button",borderRadius:"12",borderStyle:"solid",background:i?"none":"surface1",borderColor:"surface3",borderWidth:"1px",borderBottomLeftRadius:l?"0":void 0,borderBottomRightRadius:l?"0":void 0,padding:t?"12":i?"0":"8",color:"neutral1",whiteSpace:"nowrap",display:"flex",justifyContent:"space-between",height:"44",alignItems:"center",width:t?"full":"inherit",onClick:d,cursor:"pointer",className:m?"_12q7kth3 _2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez1al":(0,$.default)(l&&!i&&"_12q7kth0"),children:!m&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(x.n,{display:"flex",alignItems:"center",color:"neutral1",children:[!l&&C&&(0,n.jsxs)(u.X2,{marginRight:"4",onClick:t=>{if(t.stopPropagation(),e[h].reverseOnClick)e[h].reverseOnClick?.(),p();else{const t=e[h].reverseIndex??1;e[t-1].onClick(),g(t-1)}},children:[e[h].reverseOnClick&&(c?(0,n.jsx)(W.iB,{}):(0,n.jsx)(W.L7,{})),e[h].reverseIndex&&(h>(e[h].reverseIndex??1)-1?(0,n.jsx)(W.iB,{}):(0,n.jsx)(W.L7,{}))]}),(0,n.jsx)(x.n,{marginLeft:C?"4":"0",marginRight:i?"2":"0",color:"neutral1",className:f.km,children:i?r:l?"Sort by":e[h].displayText})]}),(0,n.jsx)(W.g8,{secondaryColor:i?X.Z4.colors.neutral1:void 0,secondaryWidth:i?"20":void 0,secondaryHeight:i?"20":void 0,style:{transform:l?"":"rotate(180deg)"}})]})}),(0,n.jsx)(x.n,{position:"absolute",zIndex:"3",width:t?"auto":"inherit",right:t?"16":"auto",paddingBottom:"8",fontSize:"14",background:"surface1",borderStyle:"solid",borderColor:"surface3",borderWidth:"1px",borderRadius:"8",borderTopLeftRadius:i?void 0:"0",borderTopRightRadius:i?void 0:"0",overflowY:"hidden",transition:"250",display:l||!y?"block":"none",visibility:y?"visible":"hidden",marginTop:i?"12":"0",className:(0,$.default)(!i&&"_12q7kth1"),style:{top:a?`${a}px`:"inherit",left:t?"16px":s?`${s}px`:"inherit"},children:y?l&&e.map(((t,r)=>(0,n.jsx)(ue,{option:t,index:r,mini:i,onClick:()=>{e[r].onClick(),g(r),d(),c&&p()}},r))):[e.reduce(((e,t)=>t.displayText.length>=e.displayText.length?t:e),e[0])].map(((e,t)=>(0,n.jsx)(fe,{option:e,index:t,setMaxWidth:j},t)))})]})},ue=({option:e,index:t,onClick:i,mini:r})=>(0,n.jsx)(x.n,{as:"button",border:"none",display:"flex",alignItems:"center",paddingTop:"10",paddingBottom:"10",paddingLeft:"12",paddingRight:r?"20":"0",width:"full",background:{default:"surface1",hover:"surface3"},color:"neutral1",onClick:i,cursor:"pointer",children:(0,n.jsx)(x.n,{marginLeft:"8",className:f.km,children:e.displayText})},t),fe=({option:e,index:t,setMaxWidth:i})=>{const r=(0,L.useRef)(null);return(0,L.useLayoutEffect)((()=>{r&&r.current&&i(Math.ceil(r.current.getBoundingClientRect().width)+52)})),(0,n.jsx)(x.n,{position:"absolute",ref:r,children:(0,n.jsx)(ue,{option:e,index:t})},t)};var we=i(38514),ye=i(46613);const je=(0,Q.Ue)()((0,ee.mW)((e=>({priceRangeLow:"",setPriceRangeLow:t=>{e((()=>({priceRangeLow:t})))},priceRangeHigh:"",setPriceRangeHigh:t=>{e((()=>({priceRangeHigh:t})))},prevMinMax:[0,100],setPrevMinMax:t=>{e((()=>({prevMinMax:t})))}})),{name:"usePriceRange"}));var be=i(17184);const Ce="undefined"!==typeof window;const ve=()=>{const e=!!Ce&&window.innerWidth<X.AV.sm?"nft-anchor-mobile":"nft-anchor";window.document.getElementById(e)?.scrollIntoView({behavior:"smooth"})};var _e=i(20808);const ke=e=>{const t={...e};for(const n in t){const e=t[n],i=w.initialCollectionFilterState[n];JSON.stringify(e)===JSON.stringify(i)&&delete t[n]}t.all!==w.initialCollectionFilterState.buyNow&&delete t.all;const i=w.i9[w.initialCollectionFilterState.sortBy];return t.sort===i&&delete t.sort,t},Te=(e,t)=>{const i={...e};["traits","markets"].forEach((e=>{i[e]||(i[e]=[]),i[e]&&"string"===typeof i[e]&&(i[e]=[i[e]])}));try{const{buyNow:e,search:n}=w.initialCollectionFilterState;if(Object.entries(w.i9).forEach((([e,t])=>{t===i.sort&&(i.sortBy=Number(e))})),i.buyNow=!(void 0===i.all?!e:i.all),i.search=void 0===i.search?n:String(i.search),2===i.traits.length){const[e,t]=i.traits;`${e}${t}`.includes(",")||e.startsWith("(")&&!e.endsWith(")")&&t.endsWith(")")&&!t.startsWith("(")&&(i.traits=[`${e},${t}`])}i.traits=i.traits.map((e=>{const i=(e=>e.substring(1,e.length-1))(e.replace(/(")/g,"")),[n,r]=i.split(","),a=t.traits&&t.traits[n].find((e=>e.trait_value===r));return a??{trait_type:n,trait_value:r,trait_count:0}}))}catch(n){i.traits=[]}return i};var Ie=i(59560),Ne=i(92686),Se=i(4843),ze=i(40014),Pe=(i(96859),i(45202));const $e=_.default.div.withConfig({displayName:"Sweep__SweepContainer",componentId:"sc-3f327a09-0"})`
  display: flex;
  gap: 60px;
  margin-top: 12px;
  padding: 16px;
  border-radius: 12px;
  background-color: ${({theme:e})=>e.surface1};
  justify-content: space-between;
  background: linear-gradient(${({theme:e})=>e.surface1}, ${({theme:e})=>e.surface1}) padding-box,
    linear-gradient(to right, #4673fa, #9646fa) border-box;
  border: 2px solid transparent;
`,Ee=(0,_.default)(Pe.Z).withConfig({displayName:"Sweep__StyledSlider",componentId:"sc-3f327a09-1"})`
  cursor: pointer;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,Re=_.default.div.withConfig({displayName:"Sweep__SweepLeftmostContainer",componentId:"sc-3f327a09-2"})`
  display: flex;
  width: 100%;
  gap: 24px;
`,Me=_.default.div.withConfig({displayName:"Sweep__SweepRightmostContainer",componentId:"sc-3f327a09-3"})`
  display: flex;
  flex-shrink: 0;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  min-width: 160px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,Fe=_.default.div.withConfig({displayName:"Sweep__SweepHeaderContainer",componentId:"sc-3f327a09-4"})`
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,Be=_.default.div.withConfig({displayName:"Sweep__SweepSubContainer",componentId:"sc-3f327a09-5"})`
  display: flex;
  width: 100%;
  gap: 12px;
  align-items: center;
`,Ae=_.default.input.withConfig({displayName:"Sweep__InputContainer",componentId:"sc-3f327a09-6"})`
  width: 96px;
  color: ${({theme:e})=>e.neutral1};
  border: 1px solid ${({theme:e})=>e.surface3};
  background: none;
  border-radius: 8px;
  padding: 6px 8px;
  font-size: 16px;
  font-weight: 485;
  line-height: 20px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    width: 100%;
  }

  :hover,
  :focus {
    outline: none;
    border: 1px solid ${({theme:e})=>e.accent1};
  }
`,Le=_.default.div.withConfig({displayName:"Sweep__ToggleContainer",componentId:"sc-3f327a09-7"})`
  display: flex;
  border: 1px solid ${({theme:e})=>e.surface3};
  background: none;
  border-radius: 12px;
  padding: 4px;
  cursor: pointer;
`,He=_.default.div.withConfig({displayName:"Sweep__ToggleSwitch",componentId:"sc-3f327a09-8"})`
  color: ${({theme:e,active:t})=>t?e.neutral1:e.neutral2};
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${({theme:e,active:t})=>t?e.surface3:"none"};
  font-size: 14px;
  font-weight: 535;
  line-height: 16px;
`,Oe=_.default.div.withConfig({displayName:"Sweep__NftDisplayContainer",componentId:"sc-3f327a09-9"})`
  position: relative;
  width: 34px;
  height: 34px;
`,De=_.default.div.withConfig({displayName:"Sweep__NftHolder",componentId:"sc-3f327a09-10"})`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 26px;
  height: 26px;
  border-radius: 4px;
  background: ${({theme:e,src:t})=>t?`url(${t})`:e.neutral3};
  background-size: 26px;
  opacity: ${({src:e,index:t})=>e?1:0===t?.9:1===t?.6:.3};
  transform: ${({index:e})=>0===e?"translate(-50%, -50%) rotate(-4.42deg)":1===e?"translate(-50%, -50%) rotate(-14.01deg)":"translate(-50%, -50%) rotate(10.24deg)"};
  z-index: ${({index:e})=>3-e};
`,Ye=RegExp("^(0|[1-9][0-9]*)$"),We=RegExp("^\\d*\\.?\\d{0,2}$"),Xe=({nfts:e})=>(0,n.jsx)(Oe,{children:[...Array(3)].map(((t,i)=>(0,n.jsx)(De,{index:i,src:e.length-1>=i?e[e.length-1-i].smallImageUrl:void 0},i)))}),Ze=({contractAddress:e,minPrice:t,maxPrice:i})=>{const r=(0,_.useTheme)(),{formatEther:a}=(0,b.Gb)(),[s,o]=(0,L.useReducer)((e=>!e),!0),[l,d]=(0,L.useState)(""),c=(0,w.cP)((e=>e.addAssetsToBag)),p=(0,w.cP)((e=>e.removeAssetsFromBag)),h=(0,w.cP)((e=>e.itemsInBag)),g=(0,w.cP)((e=>e.lockSweepItems)),m=(0,w.cP)((e=>e.setBagExpanded)),x=(0,w.PY)((e=>e.traits)),u=(0,w.PY)((e=>e.markets)),f=Ve(e,"others",t,i),y=Ve(e,be.Fz.Sudoswap,t,i),C=Ve(e,be.Fz.NFTX,t,i),v=Ve(e,be.Fz.NFT20,t,i),{data:k}=(0,R.he)(f),{data:T}=(0,R.he)(y),{data:I}=(0,R.he)(C),{data:N}=(0,R.he)(v),{sortedAssets:S,sortedAssetsTotalEth:$}=(0,L.useMemo)((()=>{if(!k&&!T&&!I&&!N)return{sortedAssets:void 0,sortedAssetsTotalEth:z.O$.from(0)};let e=0,t=0,i=[];T&&(i=[...i,...T]),I&&(i=[...i,...I]),N&&(i=[...i,...N]);const n=i.filter((e=>e.marketplace===be.Fz.Sudoswap&&!e.susFlag));i.forEach((i=>{if(!i.susFlag)if(i.marketplace===be.Fz.Sudoswap){const e=(0,j.Pu)(i,n.filter((e=>(0,j.zA)(i,e))).findIndex((e=>e.tokenId===i.tokenId)));i.priceInfo.ETHPrice=e??"0"}else{const n=i.marketplace===be.Fz.NFTX,r=(0,j.Pu)(i,n?e:t);z.O$.from(r).gt(0)&&(n?e++:t++),i.priceInfo.ETHPrice=r}})),i=k?k.concat(i):i,i.sort(((e,t)=>z.O$.from(e.priceInfo.ETHPrice).gt(z.O$.from(t.priceInfo.ETHPrice))?1:-1));let r=i.filter((e=>z.O$.from(e.priceInfo.ETHPrice).gt(0)&&!e.susFlag));return r=r.slice(0,Math.max(k?.length??0,T?.length??0,I?.length??0,N?.length??0)),{sortedAssets:r,sortedAssetsTotalEth:r.reduce(((e,t)=>e.add(z.O$.from(t.priceInfo.ETHPrice))),z.O$.from(0))}}),[k,T,I,N]),{sweepItemsInBag:E,sweepEthPrice:M}=(0,L.useMemo)((()=>{const t=h.filter((t=>t.inSweep&&t.asset.address===e)).map((e=>e.asset)),i=t.reduce(((e,t)=>e.add(z.O$.from(t.priceInfo.ETHPrice))),z.O$.from(0));return{sweepItemsInBag:t,sweepEthPrice:i}}),[h,e]);(0,L.useEffect)((()=>{0===E.length&&d("")}),[E]),(0,L.useEffect)((()=>{g(e)}),[e,x,u,t,i,g]);const B=e=>{if(S)if(s)0===E.length&&e>0&&m({bagExpanded:!0}),E.length<e?c(S.slice(E.length,e),!0):p(E.slice(e,E.length),!0),d(e<1?"":e.toString());else{const t=(0,P.parseEther)(e.toString());if(M.lte(t)){let e=E.length,i=M;const n=[];for(;e<S.length&&i.add(z.O$.from(S[e].priceInfo.ETHPrice)).lte(t);)n.push(S[e]),i=i.add(z.O$.from(S[e].priceInfo.ETHPrice)),e++;n.length>0&&(0===E.length&&m({bagExpanded:!0}),c(n,!0))}else{let e=E.length-1,i=M;const n=[];for(;e>=0&&i.gt(t);)n.push(E[e]),i=i.sub(z.O$.from(E[e].priceInfo.ETHPrice)),e--;n.length>0&&p(n,!0)}d(0===e?"":e.toFixed(2))}};return(0,n.jsxs)($e,{"data-testid":"nft-sweep-slider",children:[(0,n.jsxs)(Re,{children:[(0,n.jsx)(Fe,{children:(0,n.jsx)(ie.Tv.SubHeader,{lineHeight:"20px",paddingTop:"6px",paddingBottom:"6px",children:(0,n.jsx)(F.cC,{id:"ZC4hNh"})})}),(0,n.jsxs)(Be,{children:[(0,n.jsx)(Ee,{defaultValue:0,min:0,max:s?S?.length??0:parseFloat((0,P.formatEther)($).toString()),value:s?E.length:parseFloat((0,P.formatEther)(M.toString())),step:s?1:.01,trackStyle:{top:"3px",height:"8px",background:"radial-gradient(101.8% 4091.31% at 0% 0%, #4673FA 0%, #9646FA 100%)"},handleStyle:{top:"3px",width:"12px",height:"20px",backgroundColor:"#4673FA",borderRadius:"4px",border:"none",opacity:"1",boxShadow:`${r.deprecated_shallowShadow.slice(0,-1)}`},railStyle:{top:"3px",height:"8px",backgroundColor:`${r.surface3}`},onChange:e=>{"number"===typeof e&&S&&(s?(Math.floor(e)!==Math.floor(""!==l?parseFloat(l):0)&&B(Math.floor(e)),d(e<1?"":e.toString())):(B(e),d(0===e?"":e.toFixed(2))))}}),(0,n.jsx)(Ae,{inputMode:"decimal",autoComplete:"off",autoCorrect:"off",type:"text",pattern:"^[0-9]*[.,]?[0-9]*$",placeholder:"0",minLength:1,maxLength:79,spellCheck:"false",value:s&&""!==l?Math.floor(parseFloat(l)):l,onChange:e=>{var t;""===(t=e.target.value.replace(/,/g,"."))?(B(0),d("")):(s&&Ye.test(t)||!s&&We.test(t))&&(B(parseFloat(t)),d(t))}}),(0,n.jsxs)(Le,{onClick:()=>{d(""),p(E),o()},children:[(0,n.jsx)(He,{active:s,children:"Items"}),(0,n.jsx)(He,{active:!s,children:"ETH"})]})]})]}),(0,n.jsxs)(Me,{children:[(0,n.jsx)(ie.Tv.SubHeader,{"font-size":"14px",children:`${a({input:M.toString(),type:b.sw.NFTToken})} ETH`}),(0,n.jsx)(Xe,{nfts:E})]})]})},Ue=[be.Fz.Opensea,be.Fz.X2Y2,be.Fz.LooksRare];function Ve(e,t,i,n){const r=(0,w.PY)((e=>e.traits)),a=(0,w.PY)((e=>e.markets)),s=!!a.length;return(0,L.useMemo)((()=>{if(s){if("others"===t){const t=a.filter((e=>!(0,be.g7)(e)));return t.length>0?{contractAddress:e,traits:r,markets:t}:{contractAddress:"",traits:[],markets:[]}}if(!a.includes(t))return{contractAddress:"",traits:[],markets:[]}}switch(t){case be.Fz.Sudoswap:case be.Fz.NFTX:case be.Fz.NFT20:return{contractAddress:e,traits:r,markets:[t],price:{low:i,high:n,symbol:"ETH"}};case"others":return{contractAddress:e,traits:r,markets:Ue,price:{low:i,high:n,symbol:"ETH"}}}}),[e,s,t,a,n,i,r])}const Ge=_.default.div.withConfig({displayName:"TraitChip__TraitChipWrap",componentId:"sc-29602959-0"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 6px 6px 12px;
  font-weight: 535;
  border-radius: 8px;
  background-color: ${({theme:e})=>e.surface3};
  font-size: 14px;
`,Ke=_.default.div.withConfig({displayName:"TraitChip__CrossIconWrap",componentId:"sc-29602959-1"})`
  color: ${({theme:e})=>e.neutral2};
  height: 28px;
  width: 28px;
  border: none;
  padding-top: 1px;
`,qe=({onClick:e,value:t})=>(0,n.jsxs)(Ge,{children:[(0,n.jsx)("span",{children:t}),(0,n.jsx)(Ke,{onClick:e,children:(0,n.jsx)(W.aM,{cursor:"pointer"})})]}),Je=new Map,Qe=_.css`
  margin: 0 16px;
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    margin: 0 20px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    margin: 0 26px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.lg}px) {
    margin: 0 48px;
  }
`,et=_.default.div.withConfig({displayName:"CollectionNfts__ActionsContainer",componentId:"sc-c6569a9f-0"})`
  display: flex;
  flex: 1 1 auto;
  gap: 10px;
  justify-content: space-between;

  ${Qe}
`,tt=_.default.div.withConfig({displayName:"CollectionNfts__ActionsSubContainer",componentId:"sc-c6569a9f-1"})`
  display: flex;
  gap: 12px;
  flex: 1;
  min-width: 0px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    gap: 10px;
  }
`,it=_.default.div.withConfig({displayName:"CollectionNfts__SortDropdownContainer",componentId:"sc-c6569a9f-2"})`
  width: max-content;
  height: 44px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.lg}px`}) {
    ${({isFiltersExpanded:e})=>e&&"display: none;"}
  }
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,nt=_.default.div.withConfig({displayName:"CollectionNfts__EmptyCollectionWrapper",componentId:"sc-c6569a9f-3"})`
  display: block;
  text-align: center;
`,rt=_.default.span.withConfig({displayName:"CollectionNfts__ViewFullCollection",componentId:"sc-c6569a9f-4"})`
  ${d.cR}
`,at=_.default.div.withConfig({displayName:"CollectionNfts__InfiniteScrollWrapper",componentId:"sc-c6569a9f-5"})`
  ${Qe}
`,st=_.default.div.withConfig({displayName:"CollectionNfts__SweepButton",componentId:"sc-c6569a9f-6"})`
  display: flex;
  gap: 8px;
  border: none;
  border-radius: 12px;
  padding: 12px 18px 12px 12px;
  cursor: ${({disabled:e})=>e?"auto":"pointer"};
  color: ${({toggled:e,disabled:t,theme:i})=>e&&!t?i.deprecated_accentTextLightPrimary:i.neutral1};
  background: ${({theme:e,toggled:t,disabled:i})=>!i&&t?"radial-gradient(101.8% 4091.31% at 0% 0%, #4673FA 0%, #9646FA 100%)":e.surface3};
  opacity: ${({disabled:e})=>e?.4:1};
  :hover {
    background-color: ${({theme:e})=>e.surface3};
    transition: ${({theme:{transition:{duration:e,timing:t}}})=>`${e.fast} background-color ${t.in}`};
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    padding: 12px 12px 12px 12px;
  }
`,ot=(0,_.default)(ie.Tv.BodyPrimary).withConfig({displayName:"CollectionNfts__SweepText",componentId:"sc-c6569a9f-7"})`
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,lt=(0,_.default)(u.X2).withConfig({displayName:"CollectionNfts__MarketNameWrapper",componentId:"sc-c6569a9f-8"})`
  gap: 8px;
`,dt=({height:e})=>(0,n.jsx)(x.n,{width:"full",className:D.P,children:(0,n.jsx)(Se.p,{height:e})}),ct=()=>(0,n.jsx)(at,{children:(0,n.jsxs)(u.sg,{alignItems:"flex-start",position:"relative",width:"full",children:[(0,n.jsxs)(u.X2,{marginY:"12",gap:"12",marginBottom:"40",children:[(0,n.jsx)(x.n,{className:we.S,borderRadius:"12",width:{sm:"44",md:"100"},height:"44"}),(0,n.jsx)(x.n,{className:we.S,borderRadius:"12",height:"44",display:{sm:"none",md:"flex"},style:{width:"220px"}}),(0,n.jsx)(x.n,{className:we.S,borderRadius:"12",height:"44",width:{sm:"276",md:"332"}})]}),(0,n.jsx)(dt,{})]})}),pt=(e,t)=>{const i=[{displayText:"Price: Low to High",onClick:()=>e(w.hn.LowToHigh),reverseIndex:2,sortBy:w.hn.LowToHigh},{displayText:"Price: High to Low",onClick:()=>e(w.hn.HighToLow),reverseIndex:1,sortBy:w.hn.HighToLow}];return t?i.concat([{displayText:"Rarity: Rare to Common",onClick:()=>e(w.hn.RareToCommon),reverseIndex:4,sortBy:w.hn.RareToCommon},{displayText:"Rarity: Common to Rare",onClick:()=>e(w.hn.CommonToRare),reverseIndex:3,sortBy:w.hn.CommonToRare}]):i},ht=({contractAddress:e,collectionStats:t,rarityVerified:i})=>{const{chainId:r}=(0,s.useWeb3React)(),l=(0,w.PY)((e=>e.traits)),d=(0,w.PY)((e=>e.minPrice)),c=(0,w.PY)((e=>e.maxPrice)),p=(0,w.PY)((e=>e.markets)),h=(0,w.PY)((e=>e.sortBy)),m=(0,w.PY)((e=>e.search)),y=(0,w.PY)((e=>e.setMarketCount)),b=(0,w.PY)((e=>e.setSortBy)),C=(0,w.PY)((e=>e.buyNow)),v=je((e=>e.setPriceRangeLow)),_=je((e=>e.priceRangeLow)),k=je((e=>e.priceRangeHigh)),T=je((e=>e.setPriceRangeHigh)),I=je((e=>e.setPrevMinMax)),N=(0,ye.I)((e=>e.setIsCollectionNftsLoading)),S=(0,w.PY)((e=>e.removeTrait)),F=(0,w.PY)((e=>e.removeMarket)),B=(0,w.PY)((e=>e.reset)),A=(0,w.PY)((e=>e.setMinPrice)),O=(0,w.PY)((e=>e.setMaxPrice)),Y=(0,w.PY)((e=>e.setHasRarity)),X=(0,w.cP)((e=>e.toggleBag)),Z=(0,w.cP)((e=>e.bagExpanded)),U=(0,w.cP)((e=>e.itemsInBag)),V=(0,M.Z)(d,500),G=(0,M.Z)(c,500),K=(0,M.Z)(m,500),[q,J]=(0,L.useState)(be.Yp.unset),[Q,ee]=(0,L.useState)(),[te,ie]=(0,L.useState)(!1),ne={address:e,orderBy:w.AZ[h].field,asc:w.AZ[h].asc,filter:{listed:C,marketplaces:p.length>0?p.map((e=>e.toUpperCase())):void 0,maxPrice:G?(0,P.parseEther)(G.toString()).toString():void 0,minPrice:V?(0,P.parseEther)(V.toString()).toString():void 0,tokenSearchQuery:K,traits:l.length>0?l.map((e=>({name:e.trait_type,values:[e.trait_value]}))):void 0},first:R.iQ},{data:re,loading:ae,hasNext:oe,loadMore:le}=(0,R.gP)(ne),de=(0,L.useCallback)((e=>{const t=U.some((t=>e.tokenId===t.asset.tokenId&&e.address===t.asset.address));if(e.marketplace===be.Fz.Sudoswap){const i=U.filter((t=>(0,j.zA)(e,t.asset)));return t?i.findIndex((t=>t.asset.tokenId===e.tokenId)):i.length}return t?U.filter((t=>(0,j.H8)(e,t.asset))).findIndex((t=>t.asset.tokenId===e.tokenId)):U.filter((t=>(0,j.H8)(e,t.asset))).length}),[U]),ce=(0,L.useCallback)((e=>(0,j.Pu)(e,de(e))),[de]),pe=(0,L.useMemo)((()=>{if(!re||!re.some((e=>e.marketplace&&(0,be.g7)(e.marketplace))))return re;const e=[...re];return e.forEach((e=>e.marketplace&&(0,be.g7)(e.marketplace)&&(e.priceInfo.ETHPrice=ce(e)??"0"))),h!==w.hn.HighToLow&&h!==w.hn.LowToHigh||e.sort(((e,t)=>{const i=z.O$.from(e.priceInfo?.ETHPrice??0),n=z.O$.from(t.priceInfo?.ETHPrice??0);if(i.gt(0)&&n.lte(0))return-1;if(n.gt(0)&&i.lte(0))return 1;const r=i.sub(n);return r.gt(0)?h===w.hn.LowToHigh?1:-1:r.lt(0)?h===w.hn.LowToHigh?-1:1:0})),e}),[re,h,ce]),[he,ge]=(0,L.useState)(),[me,ue]=(0,w.wx)(),fe=(0,L.useRef)(null),we=(0,w.dD)(),Ce=(0,g.e)();(0,L.useEffect)((()=>{N(ae)}),[ae,N]);const Pe=(0,L.useMemo)((()=>{const e=(0,j.oY)(Je,t?.address,pe)??!1;return Y(e),e}),[t.address,pe,Y]),$e=(0,L.useMemo)((()=>pt(b,Pe)),[Pe,b]);(0,L.useEffect)((()=>(ie(!1),()=>{w.PY.setState(w.initialCollectionFilterState)})),[e]);const Ee=(0,L.useMemo)((()=>pe?pe.map((e=>(0,n.jsx)(H,{asset:e,isMobile:we,mediaShouldBePlaying:e.tokenId===he,setCurrentTokenPlayingMedia:ge,rarityVerified:i,uniformAspectRatio:q,setUniformAspectRatio:J,renderedHeight:Q,setRenderedHeight:ee},e.address+e.tokenId))):null),[pe,we,he,i,q,Q]),Re=pe&&pe.length>0,Me=Re&&pe[0]&&pe[0]?.tokenType===E.hg.Erc1155,Fe=(0,L.useMemo)((()=>V&&G?`Price: ${V} - ${G} ETH`:V?`Min. Price: ${V} ETH`:G?`Max Price: ${G} ETH`:void 0),[V,G]);(0,L.useEffect)((()=>{const e={};t?.marketplaceCount?.forEach((({marketplace:t,count:i})=>{e[t]=i})),y(e),fe.current=w.PY.getState()}),[t?.marketplaceCount,y]);const Be=(0,Ne.TH)();(0,L.useEffect)((()=>{if(t?.traits){const e=((e,t)=>{if(!e.search)return;const i=_e.parse(e.search,{arrayFormat:"comma",parseNumbers:!0,parseBooleans:!0});return Te(i,t)})(Be,t);requestAnimationFrame((()=>{e&&w.PY.setState(e)})),w.PY.subscribe((e=>{JSON.stringify(fe.current)!==JSON.stringify(e)&&((e=>{const t={};["markets","maxPrice","maxRarity","minPrice","minRarity","traits","all","search","sort"].forEach((i=>{switch(i){case"traits":{const i=e.traits.map((({trait_type:e,trait_value:t})=>`("${e}","${t}")`));t.traits=i;break}case"all":t.all=!e.buyNow;break;case"sort":t.sort=w.i9[e.sortBy];break;default:t[i]=e[i]}}));const i=ke(t),n=window.location.href.split("?")[0],r=_e.stringify(i,{arrayFormat:"comma"});window.history.replaceState({},"",`${n}${r&&`?${r}`}`)})(e),fe.current=e)}))}}),[Be]),(0,L.useEffect)((()=>{J(be.Yp.unset),ee(void 0)}),[e]),(0,L.useEffect)((()=>{if(t&&t.stats?.floor_price){const e=t.stats?.floor_price,i=10*t.stats?.floor_price;""===_&&v(e?.toFixed(2)),""===k&&T(i.toFixed(2))}}),[t,_,k,T,v]);const Ae=(0,L.useCallback)((()=>{Me||(te||(ve(),Z||we||X()),ie(!te))}),[Z,Me,we,te,X]),Le=(0,L.useCallback)((()=>{B(),I([0,100]),ve()}),[B,I]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(x.x,{backgroundColor:"surface1",position:"sticky",top:"72",width:"full",zIndex:"3",marginBottom:{sm:"8",md:"20"},paddingTop:"16",paddingBottom:"16",children:[(0,n.jsxs)(et,{children:[(0,n.jsxs)(tt,{children:[(0,n.jsx)(o.M8,{events:[a.TM.onClick],element:a.xo.NFT_FILTER_BUTTON,name:a.Yz.NFT_FILTER_OPENED,shouldLogImpression:!me,properties:{collection_address:e,chain_id:r},children:(0,n.jsx)(At.L,{isMobile:we,isFiltersExpanded:me,collectionCount:pe?.[0]?.totalCount??0,onClick:()=>{Z&&!Ce.xl&&X(),ue(!me)}})}),(0,n.jsx)(it,{isFiltersExpanded:me,children:(0,n.jsx)(xe,{dropDownOptions:$e})}),(0,n.jsx)(gt,{})]}),!Me&&(0,n.jsxs)(st,{toggled:te,disabled:Me,className:f.km,onClick:Ae,"data-testid":"nft-sweep-button",children:[(0,n.jsx)(W.UV,{viewBox:"0 0 24 24",width:"20px",height:"20px"}),(0,n.jsx)(ot,{fontWeight:535,color:"currentColor",lineHeight:"20px",children:"Sweep"})]})]}),(0,n.jsxs)(at,{children:[te&&(0,n.jsx)(Ze,{contractAddress:e,minPrice:V,maxPrice:G}),(0,n.jsxs)(u.X2,{paddingTop:p.length||l.length||Fe?"12":"0",gap:"8",flexWrap:"wrap",children:[p.map((e=>(0,n.jsx)(qe,{value:(0,n.jsxs)(lt,{children:[(0,j.Dp)(e,"16"),se[e]]}),onClick:()=>{ve(),F(e)}},e))),l.map((e=>(0,n.jsx)(qe,{value:"Number of traits"===e.trait_type?`${e.trait_value} trait${(0,j._6)(Number(e.trait_value))}`:`${e.trait_type}: ${e.trait_value}`,onClick:()=>{ve(),S(e)}},e.trait_value))),Fe&&(0,n.jsx)(qe,{value:Fe,onClick:()=>{ve(),A(""),O(""),I([0,100])}}),Boolean(l.length||p.length||Fe)&&(0,n.jsx)(ze.v,{onClick:Le,children:"Clear All"})]})]})]}),(0,n.jsx)(at,{children:ae?(0,n.jsx)(dt,{height:Q}):(0,n.jsx)(Ie.Z,{next:le,hasMore:oe??!1,loader:Boolean(oe&&Re)&&(0,n.jsx)(Se.p,{}),dataLength:pe?.length??0,style:{overflow:"unset"},className:Re?D.P:void 0,children:Re?Ee:(0,n.jsx)(u.M5,{width:"full",color:"neutral2",textAlign:"center",style:{height:"60vh"},children:(0,n.jsxs)(nt,{children:[(0,n.jsx)("p",{className:f.Es,children:"No NFTS found"}),(0,n.jsx)(x.n,{onClick:B,type:"button",className:(0,$.default)(f.Km,f.km),color:"accent1",cursor:"pointer",children:(0,n.jsx)(rt,{children:"View full collection"})})]})})})})]})};const gt=()=>{const e=(0,J.PY)((e=>e.setSearch)),t=(0,J.PY)((e=>e.search)),i=(0,w.Iv)((e=>e.isCollectionStatsLoading));return(0,n.jsx)(x.n,{as:"input",flex:"1",borderColor:{default:"surface3",focus:"accent1"},borderWidth:"1.5px",borderStyle:"solid",borderRadius:"12",padding:"12",backgroundColor:"surface1",maxWidth:"332",minWidth:"0",fontSize:"16",fontWeight:"book",height:"44",color:{placeholder:"neutral3",default:"neutral1"},value:t,placeholder:i?"":"Search by name",className:(0,$.default)(i&&"_2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez88d"),onChange:t=>{e(t.currentTarget.value)}})};var mt=i(98878);const xt=e=>0===e?"0":e?e<1?"<1":Math.round(e).toString():"";var ut=i(60415),ft=i.n(ut),wt="_2kdvfw1 jinxmn3 rgw6ez343 rgw6ez7zp rgw6ez89l rgw6ez553 rgw6ez81x rgw6ez48l jinxmnf",yt="jinxmn3 rgw6ez343 rgw6ez7zp rgw6ez89l rgw6ez553 rgw6ez81x rgw6ez48l rgw6ez6rr",jt="jinxmn1 rgw6ezwf rgw6ezya rgw6ezf3 rgw6ezha";const bt=_.default.div.withConfig({displayName:"CollectionStats__PercentChange",componentId:"sc-5fc752f1-0"})`
  color: ${({theme:e,isNegative:t})=>t?e.critical:e.success};
  display: flex;
  align-items: center;
  justify-content: center;
`,Ct=_.default.h1.withConfig({displayName:"CollectionStats__CollectionNameText",componentId:"sc-5fc752f1-1"})`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  margin-right: ${({isVerified:e})=>e?"6px":"0px"};
`,vt=_.default.div.withConfig({displayName:"CollectionStats__CollectionNameTextLoading",componentId:"sc-5fc752f1-2"})`
  ${we.S}
  height: 32px;
  width: 236px;
`,_t=_.default.div.withConfig({displayName:"CollectionStats__MobileSocialsOverflowIcon",componentId:"sc-5fc752f1-3"})`
  display: flex;
  margin-left: 4px;
  flex-direction: column;
  justify-content: center;
  height: 28px;
`,kt=({children:e,href:t})=>(0,n.jsx)(x.n,{display:"flex",as:"a",target:"_blank",rel:"noreferrer",href:t,height:"40",width:"40",borderRadius:"round",backgroundColor:"surface1",children:e}),Tt=({collectionStats:e,collectionSocialsIsOpen:t,toggleCollectionSocials:i})=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(_t,{onClick:i,children:t?(0,n.jsx)(W.DX,{width:"28",height:"28",fill:X.Z4.colors.neutral2}):(0,n.jsx)(W.ws,{width:"28",height:"20",fill:X.Z4.colors.neutral2})}),t&&(0,n.jsxs)(u.X2,{position:"absolute",gap:"4",alignItems:"center",justifyContent:"center",style:{top:"-48px",right:"-6px"},children:[e.discordUrl?(0,n.jsx)(kt,{href:e.discordUrl,children:(0,n.jsx)(x.n,{margin:"auto",paddingTop:"4",children:(0,n.jsx)(W.D7,{width:28,height:28,color:X.Z4.colors.neutral2})})}):null,e.twitterUrl?(0,n.jsx)(kt,{href:"https://twitter.com/"+e.twitterUrl,children:(0,n.jsx)(x.n,{margin:"auto",paddingTop:"6",children:(0,n.jsx)(W.Zm,{fill:X.Z4.colors.neutral2,color:X.Z4.colors.neutral2,width:"28px",height:"28px"})})}):null,e.instagram?(0,n.jsx)(kt,{href:"https://instagram.com/"+e.instagram,children:(0,n.jsx)(x.n,{margin:"auto",paddingLeft:"2",paddingTop:"4",children:(0,n.jsx)(W.yu,{fill:X.Z4.colors.neutral2,width:"28px",height:"28px"})})}):null,e.externalUrl?(0,n.jsx)(kt,{href:e.externalUrl,children:(0,n.jsx)(x.n,{margin:"auto",paddingTop:"4",children:(0,n.jsx)(W.O1,{fill:X.Z4.colors.neutral2,width:"28px",height:"28px"})})}):null]})]}),It=({children:e,href:t})=>(0,n.jsx)(u.sg,{as:"a",target:"_blank",rel:"noreferrer",href:t,height:"full",justifyContent:"center",children:e}),Nt=({collectionStats:e,name:t,isVerified:i,isMobile:r,collectionSocialsIsOpen:a,toggleCollectionSocials:s})=>{const o=(0,ye.I)((e=>e.isCollectionStatsLoading));return(0,n.jsxs)(u.X2,{justifyContent:"space-between",children:[(0,n.jsxs)(u.X2,{minWidth:"0",children:[o?(0,n.jsx)(vt,{}):(0,n.jsx)(Ct,{isVerified:i,className:r?f.td:f.Es,children:t}),i&&(0,n.jsx)(W.SA,{style:{width:"32px",height:"32px"}}),(0,n.jsxs)(u.X2,{display:{sm:"none",md:"flex"},alignItems:"center",justifyContent:"center",marginLeft:"32",gap:"8",height:"32",children:[e.discordUrl?(0,n.jsx)(It,{href:e.discordUrl??"",children:(0,n.jsx)(W.D7,{fill:X.Z4.colors.neutral2,color:X.Z4.colors.neutral2,width:"26px",height:"26px"})}):null,e.twitterUrl?(0,n.jsx)(It,{href:"https://twitter.com/"+e.twitterUrl,children:(0,n.jsx)(W.Zm,{fill:X.Z4.colors.neutral2,color:X.Z4.colors.neutral2,width:"26px",height:"26px"})}):null,e.instagram?(0,n.jsx)(It,{href:"https://instagram.com/"+e.instagram,children:(0,n.jsx)(W.yu,{fill:X.Z4.colors.neutral2,width:"26px",height:"26px"})}):null,e.externalUrl?(0,n.jsx)(It,{href:e.externalUrl??"",children:(0,n.jsx)(W.O1,{fill:X.Z4.colors.neutral2,width:"26px",height:"26px"})}):null]})]}),r&&(e.discordUrl||e.twitterUrl||e.instagram||e.externalUrl)&&(0,n.jsx)(Tt,{collectionStats:e,collectionSocialsIsOpen:a,toggleCollectionSocials:s})]})},St=_.default.p.withConfig({displayName:"CollectionStats__CollectionDescriptionText",componentId:"sc-5fc752f1-4"})`
  vertical-align: top;
  text-overflow: ellipsis;
  margin: 0;

  ${({readMore:e})=>e?_.css`
          white-space: normal;
          overflow: visible;
          display: inline;
          max-width: 100%;
        `:_.css`
          white-space: nowrap;
          overflow: hidden;
          display: inline-block;
          max-width: min(calc(100% - 112px), 600px);
        `}

  a[href] {
    color: ${({theme:e})=>e.neutral2};
    text-decoration: none;

    :hover {
      opacity: ${({theme:e})=>e.opacity.hover};
    }

    :focus {
      opacity: ${({theme:e})=>e.opacity.click};
    }
  }
`,zt=_.default.span.withConfig({displayName:"CollectionStats__ReadMore",componentId:"sc-5fc752f1-5"})`
  vertical-align: top;
  color: ${({theme:e})=>e.neutral2};
  cursor: pointer;
  margin-left: 4px;
`,Pt=()=>(0,n.jsx)(x.n,{marginTop:{sm:"12",md:"16"},className:"jinxmnc _2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez199"}),$t=({description:e})=>{const[t,i]=(0,L.useState)(!1),[r,a]=(0,L.useReducer)((e=>!e),!1),s=(0,L.useRef)(null),o=(0,L.useRef)(null),l=(0,ye.I)((e=>e.isCollectionStatsLoading)),d=(0,w.dD)();return(0,L.useEffect)((()=>{s&&o&&s.current&&o.current&&(o.current.getBoundingClientRect().width>=s.current?.getBoundingClientRect().width-112||o.current.getBoundingClientRect().width>=590)?i(!0):i(!1)}),[o,s,l,e]),l?(0,n.jsx)(Pt,{}):(0,n.jsxs)(x.n,{ref:s,marginTop:{sm:"12",md:"16"},style:{maxWidth:"680px"},children:[(0,n.jsx)(St,{readMore:r,ref:o,className:d?f.Km:f.d1,children:(0,n.jsx)(ft(),{source:e,allowedTypes:["link","paragraph","strong","code","emphasis","text"],renderers:{paragraph:"span"}})}),t&&(0,n.jsxs)(zt,{className:d?f.Km:f.d1,onClick:a,children:["show ",r?"less":"more"]})]})},Et=({children:e,label:t,shouldHide:i})=>(0,n.jsxs)(x.n,{display:i?"none":"flex",flexDirection:"column",alignItems:"baseline",gap:"2",height:"min",children:[(0,n.jsx)(ie.Tv.SubHeader,{className:"jinxmn6 rgw6ezd9 rgw6ezbl rgw6ezef",children:e}),(0,n.jsx)(x.n,{as:"span",className:"jinxmn5 rgw6ezd3 rgw6ezb9 rgw6ezdr rgw6ez4bf rgw6ez45l",children:t})]}),Rt=e=>new Array(e?3:5).fill(null).map(((t,i)=>(0,n.jsxs)(x.n,{display:"flex",flexDirection:"column",alignItems:"baseline",gap:"2",height:"min",marginBottom:e?"12":"0",children:[(0,n.jsx)("div",{className:"_2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez14f rgw6ez18x"}),(0,n.jsx)("span",{className:"_2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez14f rgw6ez199 rgw6ezwf"})]},`statsLoadingSkeleton-key-${i}`))),Mt=({stats:e,isMobile:t,...i})=>{const{formatNumberOrString:r,formatDelta:a}=(0,b.Gb)(),s=e?.stats?.total_supply?xt((e.stats.num_owners??0)/e.stats.total_supply*100):0,o=e.stats?r({input:e.stats.total_supply??0,type:b.sw.NFTCollectionStats}):0,l=e?.stats?.total_supply?xt((e.stats.total_listings??0)/e.stats.total_supply*100):0,d=(0,ye.I)((e=>e.isCollectionStatsLoading)),c=r({input:Number(e.stats?.total_volume)??0,type:b.sw.NFTCollectionStats}),p=r({input:e.stats?.floor_price??0,type:b.sw.NFTTokenFloorPrice}),h=a(Math.round(Math.abs(e?.stats?.one_day_floor_change??0))),m=(0,w.cP)((e=>e.bagExpanded)),x=(0,g.e)(),f=t||!x.lg&&m;return(0,n.jsx)(u.X2,{gap:{sm:"24",md:"36",lg:"48",xl:"60"},...i,children:d?Rt(t??!1):(0,n.jsxs)(n.Fragment,{children:[e.stats?.floor_price?(0,n.jsxs)(Et,{label:"Global floor",shouldHide:!1,children:[p," ETH"]}):null,void 0!==e.stats?.one_day_floor_change?(0,n.jsx)(Et,{label:"Floor 24H",shouldHide:!1,children:(0,n.jsxs)(bt,{isNegative:e.stats.one_day_floor_change<0,children:[(0,n.jsx)(mt.Kx,{delta:e?.stats?.one_day_floor_change}),h]})}):null,e.stats?.total_volume?(0,n.jsxs)(Et,{label:"Total volume",shouldHide:!1,children:[c," ETH"]}):null,o?(0,n.jsx)(Et,{label:"Items",shouldHide:t??!1,children:o}):null,s&&e.standard!==be.iv.ERC1155?(0,n.jsxs)(Et,{label:"Unique owners",shouldHide:f??!1,children:[s,"%"]}):null,e.stats?.total_listings&&e.standard!==be.iv.ERC1155?(0,n.jsxs)(Et,{label:"Listed",shouldHide:f??!1,children:[l,"%"]}):null]})})},Ft=({isMobile:e})=>(0,n.jsxs)(u.sg,{position:"relative",width:"full",children:[(0,n.jsx)(x.n,{className:yt}),(0,n.jsx)(x.n,{className:wt}),(0,n.jsxs)(x.n,{className:jt,children:[(0,n.jsx)(x.n,{className:"jinxmni _2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez19x"}),!e&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Pt,{}),(0,n.jsx)(u.X2,{gap:"60",marginTop:"20",children:Rt(!1)})]})]}),e&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Pt,{}),(0,n.jsx)(u.X2,{gap:"20",marginTop:"20",children:Rt(!0)})]})]}),Bt=({stats:e,isMobile:t})=>{const[i,r]=(0,L.useReducer)((e=>!e),!1),a=(0,ye.I)((e=>e.isCollectionStatsLoading));return(0,n.jsxs)(x.n,{display:"flex",marginTop:t&&!e.bannerImageUrl?i?"52":"20":"0",justifyContent:"center",position:"relative",flexDirection:"column",width:"full",children:[a&&(0,n.jsx)(x.n,{as:"div",borderRadius:"round",position:"absolute",className:yt}),(0,n.jsx)(x.n,{as:a?"div":"img",background:"white",borderRadius:"round",position:"absolute",className:a?wt:"jinxmn3 rgw6ez343 rgw6ez7zp rgw6ez89l rgw6ez553 rgw6ez81x rgw6ez48l",src:e.imageUrl}),(0,n.jsxs)(x.n,{className:jt,children:[(0,n.jsx)(Nt,{collectionStats:e,name:e.name??"",isVerified:e.isVerified??!1,isMobile:t,collectionSocialsIsOpen:i,toggleCollectionSocials:r}),(e.description||a)&&!t&&(0,n.jsx)($t,{description:e.description??""}),(0,n.jsx)(Mt,{display:{sm:"none",md:"flex"},overflow:"hidden",stats:e,marginTop:"20"})]}),(e.description||a)&&t&&(0,n.jsx)($t,{description:e.description??""}),(0,n.jsx)("div",{id:"nft-anchor-mobile"}),(0,n.jsx)(Mt,{isMobile:!0,display:{sm:"flex",md:"none"},stats:e,marginTop:"20",marginBottom:"12"})]})};var At=i(33063),Lt=i(45211),Ht=i(10418),Ot="rgw6ezd3 rgw6ezbf rgw6eze9 rgw6ez6w3 rgw6ez2u9 rgw6ez80x rgw6ez7zp rgw6ez899";const Dt=_.default.div.withConfig({displayName:"TraitsHeader__ChildreMobileWrapper",componentId:"sc-ead2a0ec-0"})`
  padding: ${({isMobile:e})=>e?"0px 16px 0px 12px":"0px"};
`,Yt=e=>{const{children:t,index:i,title:r}=e,[a,s]=(0,L.useState)(!1),o=te((e=>e.traitsOpen)),l=te((e=>e.setTraitsOpen)),d=(0,w.dD)(),c=void 0!==i&&o[i-1],p=i!==O.TRAIT_START_INDEX;return(0,L.useEffect)((()=>{void 0!==i&&l(i,a)}),[a,i,l]),(0,n.jsxs)(n.Fragment,{children:[p&&(0,n.jsx)(x.n,{className:(0,$.default)(f.Nf,!a&&q,V),opacity:!c&&a&&0!==i?"1":"0",marginTop:c?"0":"8"}),(0,n.jsxs)(x.n,{as:"details",className:(0,$.default)(f.Nf,!a&&q),open:a,children:[(0,n.jsxs)(x.n,{as:"summary",className:`${K} ${q}`,onClick:e=>{e.preventDefault(),s(!a)},children:[r,(0,n.jsxs)(x.n,{display:"flex",alignItems:"center",children:[(0,n.jsx)(x.n,{color:"neutral2",display:"inline-block",marginRight:"12",children:e.numTraits}),(0,n.jsx)(x.n,{className:Z,style:{transform:`rotate(${a?0:180}deg)`},children:(0,n.jsx)(W.g8,{className:U})})]})]}),(0,n.jsx)(Dt,{isMobile:d,children:t})]})]})},Wt=(0,_.default)(Pe.Z).withConfig({displayName:"PriceRange__StyledSlider",componentId:"sc-7655689-0"})`
  cursor: pointer;
`,Xt=()=>{const[e,t]=(0,L.useState)(""),i=(0,J.PY)((e=>e.setMinPrice)),r=(0,J.PY)((e=>e.setMaxPrice)),s=(0,J.PY)((e=>e.minPrice)),l=(0,J.PY)((e=>e.maxPrice)),d=je((e=>e.priceRangeLow)),c=je((e=>e.priceRangeHigh)),p=je((e=>e.setPriceRangeLow)),h=je((e=>e.setPriceRangeHigh)),g=je((e=>e.prevMinMax)),m=je((e=>e.setPrevMinMax)),w=(0,_.useTheme)(),y=(0,Ne.TH)();(0,L.useEffect)((()=>{i(""),r(""),p(""),h("")}),[y.pathname,i,r,p,h]);const j=e=>{t(e.currentTarget.placeholder),e.currentTarget.placeholder=""},b=i=>{i.currentTarget.placeholder=e,t(""),(s||l)&&(0,o._P)(a.Yz.NFT_FILTER_SELECTED,{filter_type:a.fm.PRICE_RANGE})};return(0,n.jsxs)(Yt,{title:"Price range",index:O.PRICE_RANGE_INDEX,children:[(0,n.jsxs)(u.X2,{marginTop:"12",color:"neutral1",justifyContent:"space-between",children:[(0,n.jsx)(u.X2,{position:"relative",children:(0,n.jsx)(Lt.A,{style:{width:"126px"},className:Ot,placeholder:d,onChange:e=>{const[,t]=g;if(e.currentTarget.value){const i=parseInt(e.currentTarget.value)-parseInt(d),n=Math.floor(i/(parseInt(c)-parseInt(d))*100);parseInt(e.currentTarget.value)>=parseInt(l)?m([t,t]):m([n,t])}else m([0,t]);i(e.currentTarget.value.toString()),ve()},onFocus:j,value:s,onBlur:b})}),(0,n.jsx)(x.n,{className:f.d1,children:"to"}),(0,n.jsx)(u.X2,{position:"relative",children:(0,n.jsx)(Lt.A,{style:{width:"126px"},className:Ot,placeholder:c,value:l,onChange:e=>{const[t]=g;if(e.currentTarget.value){const i=parseInt(c)-parseInt(e.currentTarget.value),n=Math.floor(100-i/(parseInt(c)-parseInt(d))*100);parseInt(e.currentTarget.value)<=parseInt(s)?m([t,t]):m([t,n])}else m([t,100]);r(e.currentTarget.value),ve()},onFocus:j,onBlur:b})})]}),(0,n.jsx)(u.X2,{marginTop:"24",marginBottom:"12",paddingLeft:"8",paddingRight:"8",children:(0,n.jsx)(Wt,{defaultValue:[0,100],min:0,max:100,range:!0,step:1e-4,value:g,trackStyle:{top:"3px",height:"8px",background:`${w.accent1}`},handleStyle:{top:"3px",width:"12px",height:"20px",opacity:"1",backgroundColor:"white",borderRadius:"4px",border:"none",boxShadow:Ht.I.deprecated_shallowShadow.slice(0,-1)},railStyle:{top:"3px",height:"8px",backgroundColor:`${w.accent2}`},onChange:e=>{if("number"===typeof e)return;const[t,n]=e,a=parseFloat(c.replace(/,/g,"")),s=parseFloat(d.replace(/,/g,"")),o=a-s,l=a-(100-n)/100*o;i((t/100*o+s).toFixed(2).toString()),r(l.toFixed(2).toString()),0===t&&i(""),100===n&&r(""),m(e)}})})]})};var Zt=i(11650),Ut=i(50030),Vt=i(25198),Gt=i(74287);const Kt=({trait:e,addTrait:t,removeTrait:i,isTraitSelected:r,style:s})=>{const[l,d]=(0,L.useState)(!1),[c,p]=(0,L.useState)(!1),h=()=>p(!c),g=(0,J.PY)((e=>e.toggleShowFullTraitName)),{shouldShow:m,trait_value:w,trait_type:y}=(0,J.PY)((e=>e.showFullTraitName));(0,L.useEffect)((()=>{d(r)}),[r]);const j=n=>{n.preventDefault(),ve(),l?(i(e),d(!1)):(t(e),d(!0)),(0,o._P)(a.Yz.NFT_FILTER_SELECTED,{filter_type:a.fm.TRAIT})},b=m&&y===e.trait_type&&w===e.trait_value;return(0,n.jsxs)(u.X2,{maxWidth:"full",overflowX:"hidden",overflowY:"hidden",fontWeight:"book",className:`${f.Nf} _10b1b4v5`,justifyContent:"space-between",cursor:"pointer",paddingLeft:"12",paddingRight:"16",borderRadius:"12",style:{paddingBottom:"22px",paddingTop:"22px",...s},maxHeight:"44",onMouseEnter:h,onMouseLeave:h,onClick:j,children:[(0,n.jsx)(x.n,{as:"span",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",style:{minHeight:15},maxWidth:b?"full":"160",onMouseOver:t=>(t=>{t.currentTarget.offsetWidth<t.currentTarget.scrollWidth&&g({shouldShow:!0,trait_value:e.trait_value,trait_type:e.trait_type})})(t),onMouseLeave:()=>g({shouldShow:!1,trait_type:"",trait_value:""}),children:"Number of traits"===e.trait_type?`${e.trait_value} trait${(0,Ut._)(Number(e.trait_value))}`:e.trait_value}),(0,n.jsx)(ne.X,{checked:l,hovered:c,onChange:j,children:(0,n.jsx)(x.n,{as:"span",color:"neutral2",minWidth:"8",paddingTop:"2",paddingRight:"12",position:"relative",children:!b&&e.trait_count})})]},e.trait_value)},qt=({traits:e,type:t,index:i})=>{const r=(0,J.PY)((e=>e.addTrait)),a=(0,J.PY)((e=>e.removeTrait)),s=(0,J.PY)((e=>e.traits)),[o,l]=(0,L.useState)(""),d=(0,M.Z)(o,300),c=(0,L.useMemo)((()=>e.filter((e=>e.trait_value?.toString().toLowerCase().includes(d.toLowerCase())))),[d,e]),p=(0,L.useCallback)((function({data:e,index:t,style:i}){const o=e[t],l=s.find((({trait_type:e,trait_value:t})=>e===o.trait_type&&String(t)===String(o.trait_value)));return(0,n.jsx)(Kt,{style:i,isTraitSelected:!!l,trait:o,addTrait:r,removeTrait:a})}),[s,r,a]),h=(0,L.useCallback)(((e,t)=>{const i=t[e];return`${i.trait_type}_${i.trait_value}_${e}`}),[]);return e.length?(0,n.jsxs)(Yt,{index:i,numTraits:e.length,title:t,children:[(0,n.jsx)(Lt.I,{value:o,onChange:e=>l(e.currentTarget.value),placeholder:"Search",marginTop:"8",marginBottom:"8",autoComplete:"off",position:"static",width:"full"}),(0,n.jsx)(u.sg,{className:G,style:{height:`${Math.min(44*c.length,302)}px`},children:(0,n.jsx)(Vt.ZP,{disableWidth:!0,children:({height:e})=>(0,n.jsx)(Gt.t7,{height:e,width:"100%",itemData:c,itemCount:c.length,itemSize:44,itemKey:h,children:({index:e,style:t,data:i})=>(0,n.jsx)(p,{style:t,data:i,index:e},h(e,i))})})})]}):null},Jt=({traitsByGroup:e})=>{const{buyNow:t,setBuyNow:i}=(0,w.PY)((e=>({buyNow:e.buyNow,setBuyNow:e.setBuyNow}))),r=(0,w.PY)((e=>e.setSortBy)),a=(0,w.PY)((e=>e.hasRarity)),[s,o]=(0,L.useReducer)((e=>!e),!1),l=()=>{i(!t)},d=(0,L.useMemo)((()=>pt(r,a??!1)),[a,r]);return(0,n.jsxs)(x.n,{className:"_10b1b4v1 rgw6ez8bx rgw6ez1ef rgw6ez2o3 rgw6ezlf rgw6ezng",children:[(0,n.jsx)(u.X2,{width:"full",justifyContent:"space-between"}),(0,n.jsxs)(u.sg,{marginTop:"8",children:[(0,n.jsxs)(u.X2,{justifyContent:"space-between",className:`${K} ${q}`,gap:"2",borderRadius:"12",paddingTop:"12",paddingBottom:"12",paddingLeft:"12",onClick:e=>{e.preventDefault(),l()},onMouseEnter:o,onMouseLeave:o,children:[(0,n.jsx)(x.n,{"data-testid":"nft-collection-filter-buy-now",className:f.v4,children:"Buy now"}),(0,n.jsx)(ne.X,{hovered:s,checked:t,onClick:l,children:(0,n.jsx)("span",{})})]}),Zt.tq&&(0,n.jsx)(ge,{sortDropDownOptions:d}),(0,n.jsx)(ce,{}),(0,n.jsx)(Xt,{}),Object.entries(e).length>0&&(0,n.jsx)(x.n,{as:"span",color:"neutral2",paddingLeft:"8",marginTop:"12",marginBottom:"12",className:"rgw6ez80d rgw6ez6df rgw6ez8ap"}),(0,n.jsx)(u.sg,{children:Object.entries(e).map((([e,t],i)=>(0,n.jsx)(qt,{type:e,traits:t,index:i+O.TRAIT_START_INDEX},e)))})]})]})};var Qt=i(94346);const ei=(0,_.default)(l.ZP).withConfig({displayName:"CollectionPageSkeleton__CollectionDescriptionSection",componentId:"sc-15bf9a08-0"})`
  ${Qt.bc}
`,ti=(0,_.default)(l.ZP).withConfig({displayName:"CollectionPageSkeleton__StyledColumn",componentId:"sc-15bf9a08-1"})`
  width: ${({isBagExpanded:e})=>e?`calc(100% - ${m.ZI+16}px)`:"100%"};
  align-self: start;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.xxxl}px`}) {
    width: ${({isBagExpanded:e})=>e?`calc(100% - ${m.zD+16}px)`:"100%"};
  }
`,ii=(0,_.default)(c.ZP).withConfig({displayName:"CollectionPageSkeleton__StyledRow",componentId:"sc-15bf9a08-2"})`
  gap: 24px;
  margin-bottom: 28px;
`,ni=()=>{const e=(0,w.cP)((e=>e.bagExpanded)),t=(0,w.dD)();return(0,n.jsxs)(ti,{isBagExpanded:e,children:[(0,n.jsx)(yi,{children:(0,n.jsx)(mi,{})}),(0,n.jsxs)(ei,{children:[(0,n.jsx)(Ft,{isMobile:t}),(0,n.jsx)(ii,{children:N})]}),(0,n.jsx)(ct,{})]})};var ri=i(48632),ai=i(79799);const si=(0,_.default)(l.ZP).withConfig({displayName:"UnavailableCollectionPage__Container",componentId:"sc-339e086d-0"})`
  height: 75vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 48px;
  gap: 8px;
`,oi=(0,_.default)(ie.dL).withConfig({displayName:"UnavailableCollectionPage__StyledExternalLink",componentId:"sc-339e086d-1"})`
  color: ${({theme:e})=>e.neutral2};
`;function li({isBlocked:e}){const t=(0,_.useTheme)();return e?(0,n.jsxs)(si,{children:[(0,n.jsx)(ai.Z,{width:"48px",height:"48px",stroke:t.background,strokeWidth:"1px",fill:t.critical,"data-testid":"alert-icon"}),(0,n.jsx)(ie.Tv.HeadlineMedium,{children:(0,n.jsx)(F.cC,{id:"nSkGHi"})}),(0,n.jsx)(ie.m_,{to:"/nfts",children:(0,n.jsx)(F.cC,{id:"WFlfJ1"})}),(0,n.jsx)(oi,{href:ri.c.UNSUPPORTED_TOKEN_AND_NFT_POLICY,children:(0,n.jsx)(F.cC,{id:"f6ybgN"})})]}):(0,n.jsxs)(si,{children:[(0,n.jsx)(ie.Tv.HeadlineMedium,{children:(0,n.jsx)(F.cC,{id:"Ctk3ja"})}),(0,n.jsx)(ie.m_,{to:"/nfts",children:(0,n.jsx)(F.cC,{id:"WFlfJ1"})})]})}var di=i(41523),ci=i(44091),pi=i(96193),hi=i(48664);const gi={},mi=(0,_.default)(p.X).withConfig({displayName:"collection__CollectionBannerLoading",componentId:"sc-50724ec1-0"})`
  width: 100%;
  height: 100%;
  border-radius: 0px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    border-radius: 16px;
  }
`,xi=(0,_.default)(l.ZP).withConfig({displayName:"collection__CollectionContainer",componentId:"sc-50724ec1-1"})`
  width: 100%;
  align-self: start;
  will-change: width;
`,ui=(0,ci.q)(xi),fi=_.default.div.withConfig({displayName:"collection__CollectionAssetsContainer",componentId:"sc-50724ec1-2"})`
  position: ${({hideUnderneath:e})=>e?"fixed":"static"};
`,wi=(0,ci.q)(fi),yi=_.default.div.withConfig({displayName:"collection__BannerWrapper",componentId:"sc-50724ec1-3"})`
  height: 100px;
  max-width: 100%;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    margin-top: 16px;
    margin-left: 20px;
    margin-right: 20px;
    height: 288px;
  }
`,ji=_.default.div.withConfig({displayName:"collection__Banner",componentId:"sc-50724ec1-4"})`
  height: 100%;
  width: 100%;
  background-image: url(${({src:e})=>e});
  background-position-y: center;
  background-size: cover;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    border-radius: 16px;
  }
`,bi=(0,_.default)(l.ZP).withConfig({displayName:"collection__CollectionDescriptionSection",componentId:"sc-50724ec1-5"})`
  ${Qt.bc}
`,Ci=_.default.div.withConfig({displayName:"collection__FiltersContainer",componentId:"sc-50724ec1-6"})`
  position: ${({isMobile:e})=>e?"fixed":"sticky"};
  top: 0px;
  left: 0px;
  width: ${({isMobile:e})=>e?"100%":"0px"};
  height: ${({isMobile:e,isFiltersExpanded:t})=>e&&t?"100%":void 0};
  background: ${({theme:e,isMobile:t})=>t?e.surface2:void 0};
  z-index: ${hi.k.modalBackdrop-3};
  overflow-y: ${({isMobile:e})=>e?"scroll":void 0};

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    top: 72px;
  }
`,vi=(0,_.default)(c.ZP).withConfig({displayName:"collection__MobileFilterHeader",componentId:"sc-50724ec1-7"})`
  padding: 20px 16px;
  justify-content: space-between;
`,_i=(0,_.default)(c.ZP).withConfig({displayName:"collection__CollectionDisplaySection",componentId:"sc-50724ec1-8"})`
  align-items: flex-start;
  position: relative;
`,ki=_.default.button.withConfig({displayName:"collection__IconWrapper",componentId:"sc-50724ec1-9"})`
  background-color: transparent;
  border-radius: 8px;
  border: none;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;
  display: flex;
  padding: 2px 0px;
  opacity: 1;

  ${d.cR}
`,Ti=()=>{const{contractAddress:e}=(0,Ne.UO)(),t=(0,w.dD)(),[i,l]=(0,w.wx)(),{pathname:d}=(0,Ne.TH)(),c=(0,Ne.s0)(),p=d.includes("/activity"),x=(0,w.PY)((e=>e.setMarketCount)),u=(0,w.cP)((e=>e.bagExpanded)),f=(0,w.cP)((e=>e.setBagExpanded)),{chainId:y}=(0,s.useWeb3React)(),b=(0,g.e)(),{data:_,loading:k}=(0,h.K)(e),{CollectionContainerWidthChange:T}=(0,ci.q_)({CollectionContainerWidthChange:u&&!t?(b.xxxl?m.zD:m.ZI)+16:0,config:{duration:pi.Kd.medium,easing:ci.Z5.easeOutSine}}),{gridWidthOffset:I}=(0,ci.q_)({gridWidthOffset:i&&!t?332:0,config:{duration:pi.Kd.medium,easing:ci.Z5.easeOutSine}});if((0,L.useEffect)((()=>{const e={};_?.marketplaceCount?.forEach((({marketplace:t,count:i})=>{e[t]=i})),x(e)}),[_?.marketplaceCount,x]),(0,L.useEffect)((()=>{u&&i&&!b.xl&&l(!1)}),[u,i,b,l]),(0,L.useEffect)((()=>{f({bagExpanded:!1,manualClose:!1})}),[]),k)return(0,n.jsx)(ni,{});if(!_.name)return(0,n.jsx)(li,{});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(di.q,{children:(0,n.jsx)("title",{children:r.ag._({id:"iOOSs8",values:{0:_.name}})})}),(0,n.jsx)(o.fM,{page:a.yJ.NFT_COLLECTION_PAGE,properties:{collection_address:e,chain_id:y,is_activity_view:p},shouldLogImpression:!0,children:(0,n.jsx)(ui,{style:{width:T.to((e=>`calc(100% - ${e}px)`))},children:e&&!j._P.includes(e)?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(yi,{children:(0,n.jsx)(ji,{src:_?.bannerImageUrl?`${_.bannerImageUrl}?w=${window.innerWidth}`:""})}),(0,n.jsxs)(bi,{children:[_&&(0,n.jsx)(Bt,{stats:_,isMobile:t}),(0,n.jsx)("div",{id:"nft-anchor"}),(0,n.jsx)(S,{showActivity:p,toggleActivity:()=>{i&&l(!1),c(p?`/nfts/collection/${e}`:`/nfts/collection/${e}/activity`)}})]}),(0,n.jsxs)(_i,{children:[(0,n.jsx)(Ci,{isMobile:t,isFiltersExpanded:i,children:i&&(0,n.jsxs)(n.Fragment,{children:[t&&(0,n.jsxs)(vi,{children:[(0,n.jsx)(ie.Tv.HeadlineSmall,{children:"Filter"}),(0,n.jsx)(ki,{onClick:()=>l(!1),children:(0,n.jsx)(W.BW,{})})]}),(0,n.jsx)(Jt,{traitsByGroup:_?.traits??gi})]})}),(0,n.jsx)(wi,{hideUnderneath:t&&(i||u),style:{transform:I.to((e=>`translate(${e}px)`)),width:I.to((e=>`calc(100% - ${e}px)`))},children:p?e&&(0,n.jsx)(v.cS,{contractAddress:e,rarityVerified:_?.rarityVerified??!1,collectionName:_?.name??"",chainId:y}):e&&_&&(0,n.jsx)(L.Suspense,{fallback:(0,n.jsx)(ct,{}),children:(0,n.jsx)(ht,{collectionStats:_,contractAddress:e,rarityVerified:_?.rarityVerified})})})]})]}):(0,n.jsx)(li,{isBlocked:!0})})}),(0,n.jsx)(C,{})]})}}}]);
//# sourceMappingURL=9826.2a2f6fe6.chunk.js.map