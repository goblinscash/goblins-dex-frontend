(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[5403],{99546:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>Ca});var n=i(21339),a=i(88693),s=i(54314),o=i(56542),r=i(75422),d=i(4570),l=i(91997),c=i(70357),p=i(36181),h=i(7012),m=i(65023),x=i(17358),g=i(59815),u=i(5061),f=i(83014),w=i(59790),j=i(20031),y=i(39491),C=i(6681),_=i(79799),b=i(33552),P=i(39681),I=i(10548),S=i(48664),N=i(19369);const k=(0,b.default)(m.ZP).withConfig({displayName:"BelowFloorWarningModal__ModalWrapper",componentId:"sc-2aa83e4c-0"})`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
  z-index: ${S.k.modal};
  background: ${({theme:e})=>e.surface1};
  border-radius: 20px;
  border: 1px solid ${({theme:e})=>e.surface3};
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  padding: 20px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (max-width: ${P.j$.sm}px) {
    width: 100%;
  }
`,v=b.default.div.withConfig({displayName:"BelowFloorWarningModal__CloseIconWrapper",componentId:"sc-2aa83e4c-1"})`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`,T=(0,b.default)(C.Z).withConfig({displayName:"BelowFloorWarningModal__CloseIcon",componentId:"sc-2aa83e4c-2"})`
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`,$=b.default.div.withConfig({displayName:"BelowFloorWarningModal__HazardIconWrap",componentId:"sc-2aa83e4c-3"})`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 32px 120px;
`,R=(0,b.default)(c.DF).withConfig({displayName:"BelowFloorWarningModal__ContinueButton",componentId:"sc-2aa83e4c-4"})`
  font-weight: 535;
  font-size: 20px;
  line-height: 24px;
  margin-top: 12px;
`,E=b.default.span.withConfig({displayName:"BelowFloorWarningModal__EditListings",componentId:"sc-2aa83e4c-5"})`
  font-weight: 535;
  font-size: 16px;
  line-height: 20px;
  color: ${({theme:e})=>e.accent1};
  text-align: center;
  cursor: pointer;
  padding: 12px 16px;

  &:hover {
    opacity: 0.6;
  }
`,L=({listingsBelowFloor:e,closeModal:t,startListing:i})=>{const o=(0,b.useTheme)(),{formatDelta:r}=(0,N.Gb)();return(0,n.jsxs)(w.h,{children:[(0,n.jsxs)(k,{children:[(0,n.jsxs)(v,{children:[(0,n.jsx)(T,{width:24,height:24,onClick:t})," "]}),(0,n.jsx)($,{children:(0,n.jsx)(_.Z,{height:90,width:90,color:o.critical})}),(0,n.jsx)(I.Tv.HeadlineSmall,{lineHeight:"28px",textAlign:"center",children:(0,n.jsx)(a.cC,{id:"nJdoNI"})}),(0,n.jsxs)(I.Tv.BodyPrimary,{textAlign:"center",children:[(0,n.jsx)(a.cC,{id:"+VPrZ3",values:{0:1!==e.length?2:1,1:s.ag._({id:"DK8H0x",values:{0:r(100*(1-(e[0][1].price??0)/(e[0][0].floorPrice??0)))}}),2:s.ag._({id:"7fIIB5",values:{0:e.length}})}}),"\xa0",(0,n.jsx)(a.cC,{id:"LngMh5"})]}),(0,n.jsx)(R,{onClick:e=>{e.preventDefault(),e.stopPropagation(),i(),t()},children:(0,n.jsx)(a.cC,{id:"xGVfLh"})}),(0,n.jsx)(E,{onClick:t,children:(0,n.jsx)(a.cC,{id:"jUcBoP"})})]}),(0,n.jsx)(j.a,{onClick:t})]})};var A=i(49680),M=i(78185),F=i(25093),O=i(19530),D=i.n(O);const Z=b.default.div.withConfig({displayName:"shared__RemoveIconWrap",componentId:"sc-e1e0e3a1-0"})`
  position: absolute;
  left: 50%;
  top: 30px;
  transform: translateX(-50%);
  width: 32px;
  visibility: ${({hovered:e})=>e?"visible":"hidden"};
`,W=(0,b.default)(x.ZP).withConfig({displayName:"shared__TitleRow",componentId:"sc-e1e0e3a1-1"})`
  justify-content: space-between;
  margin-bottom: 8px;
`;var B,G;!function(e){e[e.SAME_PRICE=0]="SAME_PRICE",e[e.FLOOR_PRICE=1]="FLOOR_PRICE",e[e.LAST_PRICE=2]="LAST_PRICE",e[e.CUSTOM=3]="CUSTOM"}(B||(B={})),function(e){e[e.BELOW_FLOOR=0]="BELOW_FLOOR",e[e.ALREADY_LISTED=1]="ALREADY_LISTED",e[e.NONE=2]="NONE"}(G||(G={}));const H="0x59728544B08AB483533076417FbBB2fD0B17CE3a",z="0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000",V="0x1e0049783f008a0085193e00003d00cd54003c71",X="0x00000000000000ADc04C56Bf30aC9d3c0aAF14dC",Y={[z]:V},q=1e4,J=async e=>{const t=JSON.stringify(e),i=new AbortController,n=new Request("https://temp.api.uniswap.org/v1/nft/postX2Y2SellOrderWithApiKey",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:t,signal:i.signal}),a=setTimeout((()=>i.abort()),6e4);try{const e=await fetch(n);return 200===(await e.json()).code}catch(s){return!1}finally{clearTimeout(a)}},K=async(e,t)=>{const i=`https://temp.api.uniswap.org/v1/nft/getX2Y2OrderId?collectionAddress=${e}&tokenId=${t}`,n=await fetch(i,{method:"GET",headers:{"Content-Type":"application/json; charset=utf-8"}}),a=await n.json();return a?.data?.data?.[0]?.id};var U=i(17184),Q=i(54100),ee=i(14324),te=i(5007),ie=i(79371),ne=i(69312),ae=i(59926);const se=async e=>{const t=await fetch("https://temp.api.uniswap.org/v1/nft/createLooksRareOrder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});try{return(await t.json()).success}catch(i){return!1}};var oe=i(53759),re=i(48165),de=i(96984),le=i(4487),ce=i(29136),pe=i(38195),he=i(89396);const me="tuple(uint256 price, bytes data)",xe=["uint256","address","uint256","uint256","uint256","uint256","address","bytes","uint256",`${me}[]`],ge=`tuple(uint256 salt, address user, uint256 network, uint256 intent, uint256 delegateType, uint256 deadline, address currency, bytes dataMask, ${me}[] items, bytes32 r, bytes32 s, uint8 v, uint8 signVersion)`,ue=async(e,t)=>{const i=de.$.encode(xe,[t.salt,t.user,t.network,t.intent,t.delegateType,t.deadline,t.currency,t.dataMask,t.items.length,t.items]),n=(0,pe.keccak256)(i),a=await e.send("personal_sign",[n,t.user]);t.r=`0x${a.slice(2,66)}`,t.s=`0x${a.slice(66,130)}`,t.v=parseInt(a.slice(130,132),16),fe(t)},fe=e=>{e.v<27&&(e.v=e.v+27)},we=e=>de.$.encode([ge],[e]),je=(e,t,i,n=F.hg.Erc721)=>({salt:(()=>{const e=Q.O$.from((0,he.O)(16)).toHexString();return(0,le.hexZeroPad)(e,64)})(),user:e,network:1,intent:1,delegateType:n===F.hg.Erc721?1:2,deadline:t,currency:ce.d,dataMask:"0x",items:i.map((e=>{return{price:e.price,data:(t=e.tokens,de.$.encode(["tuple(address token, uint256 tokenId, uint256 amount)[]"],[t]))};var t})),r:"",s:"",v:0,signVersion:1}),ye=[{name:"X2Y2",fee:.5},{name:"OpenSea",fee:2.5}],Ce=(e,t)=>({amount:e,recipient:t}),_e=(e,t,i)=>{const n=e?.basisPoints??0,a=100*(ye.find((e=>"OpenSea"===e.name))?.fee??0),s=q-n-a,o=t.mul(Q.O$.from(n)).div(Q.O$.from(q)).toString(),r=t.mul(Q.O$.from(s)).div(Q.O$.from(q)).toString(),d=t.mul(Q.O$.from(a)).div(Q.O$.from(q)).toString();return{sellerFee:Ce(r,i),creatorFee:n>0?Ce(o,e?.asset_contract?.payout_address??""):void 0,openSeaFee:a?Ce(d,"0x0000a26b00c1F0DF003000390027140000fAa719"):void 0}};async function be(e,t,i,n,a=0,s){const o=new ie.A(n,{conduitKeyToConduit:Y,overrides:{defaultConduitKey:z},seaportVersion:"1.5"}),r=await i.getAddress(),d=t.newListings?.find((t=>t.marketplace.name===e.name))?.price;if(!d||!t.expirationTime||!t.asset_contract.address||!t.tokenId)return!1;switch(e.name){case"OpenSea":try{const e=(0,te.parseEther)(`${d}`),{sellerFee:i,creatorFee:n,openSeaFee:a}=_e(t,e,r),l=[i,n,a].filter((e=>void 0!==e)),{executeAllActions:c}=await o.createOrder({offer:[{itemType:t.asset_contract.tokenType===F.hg.Erc721?ne.ItemType.ERC721:ne.ItemType.ERC1155,token:t.asset_contract.address,identifier:t.tokenId,amount:"1"}],consideration:l,endTime:t.expirationTime.toString(),zone:ae.r_,allowPartialFills:!0},r),p={...await c(),protocol_address:X};s(U.Sb.PENDING);const h=await async function(e){const t=e?JSON.stringify(e):void 0,i=new AbortController,n=new Request("https://temp.api.uniswap.org/v1/nft/postOpenSeaSellOrderWithApiKey",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:t,signal:i.signal}),a=setTimeout((()=>i.abort()),D()("60s"));try{const e=await fetch(n);return 200===(await e.json()).code}catch(s){return!1}finally{clearTimeout(a)}}(p);return s(h?U.Sb.APPROVED:U.Sb.FAILED),h}catch(l){return 4001===l.code?s(U.Sb.REJECTED):s(U.Sb.FAILED),!1}case"LooksRare":{const e=M.Xg[M.HL.MAINNET],n=Math.round(Date.now()/1e3),o={isOrderAsk:!0,signer:r,collection:t.asset_contract.address,price:(0,te.parseEther)(d.toString()),tokenId:Q.O$.from(t.tokenId),amount:Q.O$.from(1),strategy:e.STRATEGY_STANDARD_SALE,currency:e.WETH,nonce:Q.O$.from(a),startTime:Q.O$.from(n),endTime:Q.O$.from(t.expirationTime),minPercentageToAsk:Q.O$.from(1e4).sub(Q.O$.from(150+(t.basisPoints?50:0))).toNumber(),params:[]};try{const l=await(0,M.tI)(i,M.HL.MAINNET,o,H);s(U.Sb.PENDING);const c={signature:l,tokenId:t.tokenId,collection:t.asset_contract.address,strategy:e.STRATEGY_STANDARD_SALE,currency:e.WETH,signer:r,isOrderAsk:!0,nonce:a,amount:1,price:(0,te.parseEther)(d.toString()).toString(),startTime:n,endTime:t.expirationTime,minPercentageToAsk:1e4-(150+(t.basisPoints?50:0)),params:[]},p=await se(c);return s(p?U.Sb.APPROVED:U.Sb.FAILED),p}catch(l){return 4001===l.code?s(U.Sb.REJECTED):s(U.Sb.FAILED),!1}}case"X2Y2":{const e={price:(0,te.parseEther)(d.toString()),tokens:[{token:t.asset_contract.address,tokenId:Q.O$.from(t.tokenId),amount:1}]},i=je(r,t.expirationTime,[e],t.asset_contract.tokenType);try{const e=await K(t.asset_contract.address,t.tokenId);await ue(n,i);const a={order:we(i),isBundle:!1,bundleName:"",bundleDesc:"",orderIds:e?[e]:[],changePrice:Boolean(e),isCollection:!1};s(U.Sb.PENDING);const o=await J(a);return s(o?U.Sb.APPROVED:U.Sb.FAILED),o}catch(l){return 4001===l.code?s(U.Sb.REJECTED):s(U.Sb.FAILED),!1}}default:return!1}}async function Pe(e,t,i){const n=()=>Pe(e,t,i);i(e,U.Sb.SIGNING,n);const{marketplace:a,collectionAddress:s,nftStandard:o}=e,r=M.Xg[M.HL.MAINNET],d="OpenSea"===a.name?V:"LooksRare"===a.name?e.nftStandard===F.hg.Erc721?H:"0xfed24ec7e22f573c2e08aef55aa6797ca2b3a051":"X2Y2"===a.name?e.nftStandard===F.hg.Erc721?"0xf849de01b080adc3a814fabe1e2087475cf2e354":"0x024ac22acdb367a3ae52a3d94ac6649fdc1f0779":r.TRANSFER_MANAGER_ERC721;s&&await async function(e,t,i,n,a=F.hg.Erc721){const s=new ee.Contract(t,a===F.hg.Erc721?oe:re,i),o=await i.getAddress();try{if(await s.isApprovedForAll(o,e))return void n(U.Sb.APPROVED);n(U.Sb.SIGNING);const t=await s.setApprovalForAll(e,!0);n(U.Sb.PENDING),1===(await t.wait()).status?n(U.Sb.APPROVED):n(U.Sb.FAILED)}catch(r){4001===r.code?n(U.Sb.REJECTED):n(U.Sb.FAILED)}}(d,s,t,(t=>i(e,t,n)),o)}async function Ie(e,t,i,n,a,s){const o=n(),r=()=>Ie(e,t,i,n,a,s);s(e,U.Sb.SIGNING,r);const{asset:d,marketplace:l}=e;await be(l,d,t,i,o,(t=>s(e,t,r)))&&"LooksRare"===e.marketplace.name&&a(o+1)}const Se=e=>{const t=e.reduce(((e,t)=>{if(t.newListings?.length){const i=t.newListings.reduce(((e,t)=>(e.price??0)>(t.price??0)?e:t)),n=i.marketplace.fee+("LooksRare"===i.marketplace.name?50:t?.basisPoints??0)/100;return e+(i.price??0)-(i.price??0)*(n/100)}return e}),0);return t?Math.round(1e4*t+Number.EPSILON)/1e4:0};function Ne(){const e=(0,A.Pc)((e=>e.sellAssets)),{setListings:t,setCollectionsRequiringApproval:i}=(0,A.zM)((({setListings:e,setCollectionsRequiringApproval:t})=>({setListings:e,setCollectionsRequiringApproval:t})));(0,y.useEffect)((()=>{const[n,a]=(e=>{const t=[],i=[];return e.forEach((e=>{e.marketplaces?.forEach((n=>{const a={image:e.smallImageUrl,name:e.name||`#${e.tokenId}`,status:U.Sb.DEFINED,asset:e,marketplace:n,price:e.newListings?.find((e=>e.marketplace.name===n.name))?.price};if(i.push(a),!t.some((t=>t.collectionAddress===e.asset_contract.address&&t.marketplace.name===n.name))){const i={image:e.asset_contract.image_url,name:e.asset_contract.name,status:U.Sb.DEFINED,collectionAddress:e.asset_contract.address,isVerified:e.collectionIsVerified,marketplace:n,nftStandard:e.asset_contract.tokenType};t.push(i)}}))})),[t,i]})(e);t(a),i(n)}),[e,i,t])}const ke=(e,t)=>.01*("LooksRare"===e.name?t.basisPoints?50:0:t.basisPoints??0),ve=(0,b.default)(c.Yd).withConfig({displayName:"ListingButton__StyledListingButton",componentId:"sc-720b119c-0"})`
  background: ${({showResolveIssues:e,theme:t})=>e?t.critical:t.accent1};
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  font-weight: 535;
  font-size: 20px;
  line-height: 24px;
  padding: 16px;
  border-radius: 12px;
  width: min-content;
  border: none;
  cursor: ${({missingPrices:e})=>e?"auto":"pointer"};
  opacity: ${({showResolveIssues:e,missingPrices:t})=>!e&&t&&"0.3"};

  @media screen and (max-width: ${P.j$.sm}px) {
    font-size: 16px;
    line-height: 20px;
    padding: 10px 12px;
  }
`,Te=({onClick:e})=>{const{sellAssets:t,showResolveIssues:i,toggleShowResolveIssues:o,issues:r,setIssues:d}=(0,A.Pc)((({sellAssets:e,showResolveIssues:t,toggleShowResolveIssues:i,issues:n,setIssues:a})=>({sellAssets:e,showResolveIssues:t,toggleShowResolveIssues:i,issues:n,setIssues:a}))),[l,c]=(0,y.useState)(!1),p=(0,A.dD)(),[h,m]=(0,y.useMemo)((()=>{const{missingExpiration:e,overMaxExpiration:n,listingsMissingPrice:a,listingsBelowFloor:s,listingsAboveSellOrderFloor:r}=(e=>{const t=e.some((e=>null!=e.expirationTime&&(isNaN(e.expirationTime)||1e3*e.expirationTime-Date.now()<D()("60s")))),i=e.some((e=>null!=e.expirationTime&&1e3*e.expirationTime-Date.now()>D()("180d"))),n=[],a=[],s=[];for(const o of e)if(o.newListings)for(const e of o.newListings)e.price?e.price<.8*(o?.floorPrice??0)&&!e.overrideFloorPrice?a.push([o,e]):o.floor_sell_order_price&&e.price>=o.floor_sell_order_price&&o.asset_contract.tokenType!==F.hg.Erc1155&&s.push([o,e]):n.push([o,e]);return{missingExpiration:t,overMaxExpiration:i,listingsMissingPrice:n,listingsBelowFloor:a,listingsAboveSellOrderFloor:s}})(t),l=Number(e)+Number(n)+a.length+r.length;return d(l),!l&&i&&o(),(e||n||r.length)&&!i&&o(),[a,s]}),[t,d,i,o]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ve,{onClick:()=>{r?!i&&o():m.length?c(!0):e()},missingPrices:!!h.length,showResolveIssues:i,children:i?(0,n.jsx)(a.cC,{id:"KbR9EP",values:{0:1!==r?2:1,1:s.ag._({id:"mTYnTI",values:{issues:r}})}}):h.length&&!p?(0,n.jsx)(a.cC,{id:"FULt6J"}):(0,n.jsx)(a.cC,{id:"HmkXCG"})}),l&&(0,n.jsx)(L,{listingsBelowFloor:m,closeModal:()=>c(!1),startListing:e})]})};var $e=i(18910),Re=i(83798),Ee=i(57777),Le=i(41362),Ae=i(41119),Me=i(49908),Fe=i(96193),Oe=i(3689),De=i(27382),Ze=i(81223),We=i(88455),Be=i(17513);const Ge=(0,b.default)(m.ZP).withConfig({displayName:"ContentRow__ContentColumn",componentId:"sc-ac4ccdd6-0"})`
  background-color: ${({theme:e,failed:t})=>t&&(0,Be.j)(12,e.critical)};
  border-radius: 12px;
  padding-bottom: ${({failed:e})=>e&&"16px"};
`,He=(0,b.default)(x.ZP).withConfig({displayName:"ContentRow__ContentRowWrapper",componentId:"sc-ac4ccdd6-1"})`
  padding: 16px;
  border: ${({failed:e,theme:t})=>!e&&`1px solid ${t.surface3}`};
  border-radius: 12px;
  opacity: ${({active:e,failed:t})=>e||t?"1":"0.6"};
`,ze=b.default.img.withConfig({displayName:"ContentRow__CollectionIcon",componentId:"sc-ac4ccdd6-2"})`
  border-radius: 100px;
  height: 24px;
  width: 24px;
  z-index: 1;
`,Ve=b.default.img.withConfig({displayName:"ContentRow__AssetIcon",componentId:"sc-ac4ccdd6-3"})`
  border-radius: 4px;
  height: 24px;
  width: 24px;
  z-index: 1;
`,Xe=b.default.div.withConfig({displayName:"ContentRow__MarketplaceIcon",componentId:"sc-ac4ccdd6-4"})`
  border-radius: 4px;
  height: 24px;
  width: 24px;
  margin-left: -4px;
  margin-right: 12px;
`,Ye=(0,b.default)(I.Tv.SubHeaderSmall).withConfig({displayName:"ContentRow__ContentName",componentId:"sc-ac4ccdd6-5"})`
  color: ${({theme:e})=>e.neutral1};
  line-height: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 40%;
`,qe=b.default.span.withConfig({displayName:"ContentRow__ProceedText",componentId:"sc-ac4ccdd6-6"})`
  font-weight: 535;
  font-size: 12px;
  line-height: 16px;
  color: ${({theme:e})=>e.neutral2};
`,Je=b.default.span.withConfig({displayName:"ContentRow__FailedText",componentId:"sc-ac4ccdd6-7"})`
  font-weight: 535;
  font-size: 10px;
  line-height: 12px;
  color: ${({theme:e})=>e.critical};
  margin-left: 4px;
`,Ke=(0,b.default)(Le.SA).withConfig({displayName:"ContentRow__StyledVerifiedIcon",componentId:"sc-ac4ccdd6-8"})`
  height: 16px;
  width: 16px;
  margin-left: 4px;
`,Ue=b.default.div.withConfig({displayName:"ContentRow__IconWrapper",componentId:"sc-ac4ccdd6-9"})`
  margin-left: auto;
  margin-right: 0px;
`,Qe=(0,b.default)(x.ZP).withConfig({displayName:"ContentRow__ButtonRow",componentId:"sc-ac4ccdd6-10"})`
  padding: 0px 16px;
  justify-content: space-between;
`,et=b.css`
  width: 152px;
  cursor: pointer;
  padding: 8px 0px;
  text-align: center;
  font-weight: 535;
  font-size: 14px;
  line-height: 16px;
  border-radius: 12px;
  border: none;

  &:hover {
    opacity: 0.6;
  }
`,tt=b.default.button.withConfig({displayName:"ContentRow__RemoveButton",componentId:"sc-ac4ccdd6-11"})`
  background-color: ${({theme:e})=>e.critical};
  color: ${({theme:e})=>e.neutral1};
  ${et}
`,it=b.default.button.withConfig({displayName:"ContentRow__RetryButton",componentId:"sc-ac4ccdd6-12"})`
  background-color: ${({theme:e})=>e.surface3};
  color: ${({theme:e})=>e.neutral1};
  ${et}
`,nt=({row:e,isCollectionApprovalSection:t,removeRow:i})=>{const s=(0,b.useTheme)(),o=(0,y.useRef)(),r=e.status===U.Sb.FAILED||e.status===U.Sb.REJECTED;return(0,y.useEffect)((()=>{e.status===U.Sb.SIGNING&&o.current}),[e.status]),(0,n.jsxs)(Ge,{failed:r,children:[(0,n.jsxs)(He,{active:e.status===U.Sb.SIGNING||e.status===U.Sb.APPROVED,failed:r,ref:o,children:[t?(0,n.jsx)(ze,{src:e.image}):(0,n.jsx)(Ve,{src:e.image}),(0,n.jsx)(Xe,{children:(0,De.Dp)(e.marketplace.name,"24")}),(0,n.jsx)(Ye,{children:e.name}),t&&e.isVerified&&(0,n.jsx)(Ke,{}),(0,n.jsx)(Ue,{children:e.status===U.Sb.DEFINED||e.status===U.Sb.PENDING?(0,n.jsx)(Oe.ZP,{height:"14px",width:"14px",stroke:e.status===U.Sb.PENDING?s.accent1:s.neutral3}):e.status===U.Sb.SIGNING?(0,n.jsx)(qe,{children:(0,n.jsx)(a.cC,{id:"CpEYLQ"})}):e.status===U.Sb.APPROVED?(0,n.jsx)(Ze.Z,{height:"20",width:"20",stroke:s.success}):r&&(0,n.jsxs)(x.ZP,{children:[(0,n.jsx)(We.Z,{height:"20",width:"20",color:s.critical}),(0,n.jsx)(Je,{children:e.status===U.Sb.FAILED?(0,n.jsx)(a.cC,{id:"7Bj3x9"}):(0,n.jsx)(a.cC,{id:"ekCRTP"})})]})})]}),r&&(0,n.jsxs)(Qe,{justify:"space-between",children:[(0,n.jsx)(tt,{onClick:()=>i(e),children:(0,n.jsx)(a.cC,{id:"t/YqKh"})}),(0,n.jsx)(it,{onClick:e.callback,children:(0,n.jsx)(a.cC,{id:"6gRgw8"})})]})]})},at=(0,b.default)(x.ZP).withConfig({displayName:"ListModalSection__SectionHeader",componentId:"sc-fe36f725-0"})`
  justify-content: space-between;
`,st=(0,b.default)(I.Tv.SubHeader).withConfig({displayName:"ListModalSection__SectionTitle",componentId:"sc-fe36f725-1"})`
  line-height: 24px;
  color: ${({theme:e,active:t,approved:i})=>i?e.success:t?e.neutral1:e.neutral2};
`,ot=(0,b.default)(Le.g8).withConfig({displayName:"ListModalSection__SectionArrow",componentId:"sc-fe36f725-2"})`
  height: 24px;
  width: 24px;
  cursor: pointer;
  transition: ${Fe.Kd.medium}ms;
  transform: rotate(${({active:e})=>e?0:180}deg);
`,rt=(0,b.default)(m.ZP).withConfig({displayName:"ListModalSection__SectionBody",componentId:"sc-fe36f725-3"})`
  border-left: 1.5px solid ${Me.O9.gray650};
  margin-top: 4px;
  margin-left: 7px;
  padding-top: 4px;
  padding-left: 20px;
  max-height: 394px;
  overflow-y: auto;
  ${Re.Zl}
`,dt=(0,b.default)(Ae.Z).withConfig({displayName:"ListModalSection__StyledInfoIcon",componentId:"sc-fe36f725-4"})`
  height: 16px;
  width: 16px;
  margin-left: 4px;
  color: ${({theme:e})=>e.neutral2};
`,lt=(0,b.default)(m.ZP).withConfig({displayName:"ListModalSection__ContentRowContainer",componentId:"sc-fe36f725-5"})`
  gap: 8px;
  scroll-behavior: smooth;
`;var ct;!function(e){e[e.APPROVE=0]="APPROVE",e[e.SIGN=1]="SIGN"}(ct||(ct={}));const pt=({sectionType:e,active:t,content:i,toggleSection:s})=>{const o=(0,b.useTheme)(),r=(0,A.Pc)((e=>e.sellAssets)),d=(0,A.Pc)((e=>e.removeAssetMarketplace)),l=(0,y.useMemo)((()=>!i.some((e=>e.status!==U.Sb.APPROVED))),[i]),c=0===e,p=(0,y.useMemo)((()=>{if(c){const e=i.map((e=>e.collectionAddress));return[...new Set(e)].length}}),[i,c]),h=e=>{if(c){const t=e;for(const e of r)e.asset_contract.address===t.collectionAddress&&d(e,t.marketplace)}else{const t=e;d(t.asset,t.marketplace)}};return(0,n.jsxs)(m.ZP,{children:[(0,n.jsxs)(at,{children:[(0,n.jsxs)(x.ZP,{children:[t||l?(0,n.jsx)(Le.bT,{fill:l?o.success:o.accent1}):(0,n.jsx)(Le.rD,{}),(0,n.jsx)(st,{active:t,marginLeft:"12px",approved:l,children:c?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.cC,{id:"Z7ZXbT"}),"\xa0",(0,n.jsx)(a.cC,{id:"8KNiOP",values:{0:p??1}})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.cC,{id:"c+Fnce"})," \xa0",i.length,"\xa0"," ",(0,n.jsx)(a.cC,{id:"OOoi9e",values:{0:i.length}})]})})]}),(0,n.jsx)(ot,{active:t,secondaryColor:t?o.neutral1:o.neutral2,onClick:s})]}),t&&(0,n.jsxs)(rt,{children:[c&&(0,n.jsxs)(x.ZP,{height:"16px",marginBottom:"16px",children:[(0,n.jsx)(I.Tv.BodySmall,{lineHeight:"16px",color:"neutral2",children:(0,n.jsx)(a.cC,{id:"CSw5a/"})}),(0,n.jsx)(Ee.ud,{text:(0,n.jsx)(a.cC,{id:"VsETB7"}),children:(0,n.jsx)(dt,{})})]}),(0,n.jsx)(lt,{children:i.map((e=>(0,n.jsx)(nt,{row:e,removeRow:h,isCollectionApprovalSection:c},e?.name??e.marketplace.name)))})]})]})};var ht=i(20344);const mt=b.default.img.withConfig({displayName:"SuccessScreen__SuccessImage",componentId:"sc-abeb9f05-0"})`
  width: calc(${({numImages:e})=>e>1?e>2?"33%":"50%":"100%"} - 12px);
  border-radius: 12px;
`,xt=(0,b.default)(x.ZP).withConfig({displayName:"SuccessScreen__SuccessImageWrapper",componentId:"sc-abeb9f05-1"})`
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  overflow-y: scroll;
  margin-bottom: 16px;
  ${Re.Zl}
`,gt=(0,b.default)(m.ZP).withConfig({displayName:"SuccessScreen__ProceedsColumn",componentId:"sc-abeb9f05-2"})`
  text-align: right;
`,ut=b.css`
  width: 182px;
  cursor: pointer;
  padding: 12px 0px;
  text-align: center;
  font-weight: 535;
  font-size: 16px;
  line-height: 20px;
  border-radius: 12px;
  border: none;

  &:hover {
    opacity: 0.6;
  }

  @media screen and (max-width: ${P.j$.sm}px) {
    width: 100%;
    margin-bottom: 8px;
  }
`,ft=b.default.button.withConfig({displayName:"SuccessScreen__ReturnButton",componentId:"sc-abeb9f05-3"})`
  background-color: ${({theme:e})=>e.surface3};
  color: ${({theme:e})=>e.neutral1};
  ${ut}
`,wt=b.default.a.withConfig({displayName:"SuccessScreen__TweetButton",componentId:"sc-abeb9f05-4"})`
  background-color: ${({theme:e})=>e.accent1};
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  text-decoration: none;
  ${ut}
`,jt=(0,b.default)(x.ZP).withConfig({displayName:"SuccessScreen__TweetRow",componentId:"sc-abeb9f05-5"})`
  justify-content: center;
  gap: 4px;
`,yt=({overlayClick:e})=>{const t=(0,b.useTheme)(),{formatNumberOrString:i}=(0,N.Gb)(),s=(0,A.Pc)((e=>e.sellAssets)),{chainId:o}=(0,r.useWeb3React)(),d=(0,u.Z)(o),{formatCurrencyAmount:l}=(0,N.Gb)(),c=(0,y.useMemo)((()=>Se(s)),[s]),p=(0,f.Z)(c.toString(),d),h=(0,g.sq)(p);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(W,{children:[(0,n.jsxs)(I.Tv.HeadlineSmall,{lineHeight:"28px",children:[(0,n.jsx)(a.cC,{id:"n3Wa1f"}),"\xa0",s.length>1?` ${s.length} `:"","NFT",(0,De._6)(s.length),"!"]}),(0,n.jsx)(C.Z,{size:24,cursor:"pointer",onClick:e})]}),(0,n.jsx)(xt,{children:s.map((e=>(0,n.jsx)(mt,{src:e.imageUrl,numImages:s.length},e?.asset_contract?.address??""+e?.tokenId)))}),(0,n.jsxs)(x.ZP,{justify:"space-between",align:"flex-start",marginBottom:"16px",children:[(0,n.jsx)(I.Tv.SubHeader,{children:(0,n.jsx)(a.cC,{id:"ORzP3x"})}),(0,n.jsxs)(gt,{children:[(0,n.jsxs)(I.Tv.SubHeader,{children:[i({input:c,type:N.sw.NFTToken})," ETH"]}),h&&(0,n.jsx)(I.Tv.BodySmall,{lineHeight:"20px",color:"neutral2",children:l({amount:h,type:N.sw.FiatTokenPrice})})]})]}),(0,n.jsxs)(x.ZP,{justify:"space-between",style:{flexWrap:"wrap"},children:[(0,n.jsx)(ft,{onClick:()=>window.location.reload(),children:(0,n.jsx)(a.cC,{id:"eIO6eZ"})}),(0,n.jsx)(wt,{href:(0,De.FX)(s),target:"_blank",rel:"noreferrer",children:(0,n.jsxs)(jt,{children:[(0,n.jsx)(ht.Z,{height:20,width:20,color:t.deprecated_accentTextLightPrimary,fill:t.deprecated_accentTextLightPrimary}),(0,n.jsx)(a.cC,{id:"BMdkoo"})]})})]})]})},Ct=b.default.div.withConfig({displayName:"ListModal__ListModalWrapper",componentId:"sc-c48ef7a-0"})`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
  z-index: ${S.k.modal};
  background: ${({theme:e})=>e.surface1};
  border-radius: 20px;
  border: 1px solid ${({theme:e})=>e.surface3};
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  padding: 20px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (max-width: ${P.j$.sm}px) {
    width: 100%;
    height: 100%;
  }
`,_t=({overlayClick:e})=>{const{provider:t,chainId:i}=(0,r.useWeb3React)(),s=t?.getSigner(),l=(0,d.oO)({modal:o.KO.NFT_LISTING}),{formatCurrencyAmount:c}=(0,N.Gb)(),p=(0,A.Pc)((e=>e.sellAssets)),{setListingStatusAndCallback:h,setLooksRareNonce:m,getLooksRareNonce:x,collectionsRequiringApproval:_,listings:b}=(0,A.zM)((({setListingStatusAndCallback:e,setLooksRareNonce:t,getLooksRareNonce:i,collectionsRequiringApproval:n,listings:a})=>({setListingStatusAndCallback:e,setLooksRareNonce:t,getLooksRareNonce:i,collectionsRequiringApproval:n,listings:a}))),P=(0,y.useMemo)((()=>Se(p)),[p]),[S,k]=(0,y.useReducer)((e=>e===ct.APPROVE?ct.SIGN:ct.APPROVE),ct.APPROVE),v=(0,u.Z)(i),T=(0,f.Z)(P.toString(),v),$=c({amount:(0,g.sq)(T),type:N.sw.FiatTokenPrice}),R=(0,y.useMemo)((()=>_.every((e=>e.status===U.Sb.APPROVED))),[_]),E=(0,y.useMemo)((()=>b.every((e=>e.status===U.Sb.APPROVED))),[b]);(0,y.useEffect)((()=>{R&&((async()=>{if(s&&t){for(const e of b)await Ie(e,s,t,x,m,h);(0,d._P)(o.Yz.NFT_LISTING_COMPLETED,{signatures_approved:b.filter((e=>e.status===U.Sb.APPROVED)),list_quantity:b.length,usd_value:$,...l})}})(),S===ct.APPROVE&&k())}),[R]);const L=(0,y.useCallback)((()=>{E?window.location.reload():e()}),[E,e]);return(0,y.useEffect)((()=>{!b.length&&L()}),[b,L]),(0,n.jsxs)(w.h,{children:[(0,n.jsx)(d.fM,{modal:o.KO.NFT_LISTING,children:(0,n.jsx)(Ct,{children:E?(0,n.jsx)(yt,{overlayClick:L}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(W,{children:[(0,n.jsx)(I.Tv.HeadlineSmall,{lineHeight:"28px",children:(0,n.jsx)(a.cC,{id:"k6Nkrt"})}),(0,n.jsx)(C.Z,{size:24,cursor:"pointer",onClick:L})]}),(0,n.jsx)(pt,{sectionType:ct.APPROVE,active:S===ct.APPROVE,content:_,toggleSection:k}),(0,n.jsx)(pt,{sectionType:ct.SIGN,active:S===ct.SIGN,content:b,toggleSection:k})]})})}),(0,n.jsx)(j.a,{onClick:L})]})};var bt=i(33151),Pt=i(58594);const It=(0,b.default)(m.ZP).withConfig({displayName:"Dropdown__DropdownWrapper",componentId:"sc-2f0c6b6d-0"})`
  gap: 4px;
  background: ${({theme:e})=>e.surface1};
  padding: 8px;
  width: ${({$width:e})=>e}px;
  border-radius: 12px;
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  border: 1px solid ${({theme:e})=>e.surface3};
`,St=(0,b.default)(x.ZP).withConfig({displayName:"Dropdown__DropdownRow",componentId:"sc-2f0c6b6d-1"})`
  justify-content: space-between;
  padding: 8px;
  cursor: pointer;
  border-radius: 12px;

  &:hover {
    background: ${({theme:e})=>e.surface3};
  }
`,Nt=({dropDownOptions:e,width:t})=>{const i=(0,b.useTheme)();return(0,n.jsx)(It,{$width:t,children:e.map((e=>(0,n.jsxs)(St,{onClick:e.onClick,children:[(0,n.jsx)(I.Tv.BodyPrimary,{lineHeight:"24px",children:e.displayText}),e.isSelected&&(0,n.jsx)(Ze.Z,{height:20,width:20,color:i.accent1})]},e.displayText)))})};var kt=i(97340),vt=i(77141),Tt=i(45211),$t=i(61516),Rt=i(15177);const Et=(0,b.default)(m.ZP).withConfig({displayName:"PriceTextInput__PriceTextInputWrapper",componentId:"sc-99cc0811-0"})`
  gap: 12px;
  position: relative;
`,Lt=(0,b.default)(x.ZP).withConfig({displayName:"PriceTextInput__InputWrapper",componentId:"sc-99cc0811-1"})`
  height: 48px;
  color: ${({theme:e})=>e.neutral3};
  padding: 12px;
  border: 2px solid;
  border-radius: 8px;
  border-color: ${({borderColor:e})=>e};
  margin-right: auto;
  box-sizing: border-box;
`,At=b.default.div.withConfig({displayName:"PriceTextInput__CurrencyWrapper",componentId:"sc-99cc0811-2"})`
  color: ${({listPrice:e,theme:t})=>e?t.neutral1:t.neutral2};
`,Mt=b.default.div.withConfig({displayName:"PriceTextInput__GlobalPriceIcon",componentId:"sc-99cc0811-3"})`
  display: flex;
  cursor: pointer;
  position: absolute;
  bottom: 32px;
  right: -10px;
  background-color: ${({theme:e})=>e.surface1};
  border-radius: 50%;
  height: 28px;
  width: 28px;
  align-items: center;
  justify-content: center;
`,Ft=(0,b.default)(x.ZP).withConfig({displayName:"PriceTextInput__WarningRow",componentId:"sc-99cc0811-4"})`
  gap: 4px;
`,Ot=(0,b.default)(x.ZP).withConfig({displayName:"PriceTextInput__WarningMessage",componentId:"sc-99cc0811-5"})`
  top: 52px;
  width: max-content;
  position: absolute;
  right: 0;
  font-weight: 535;
  font-size: 10px;
  line-height: 12px;
  color: ${({$color:e})=>e};

  @media screen and (min-width: ${P.j$.md}px) {
    right: unset;
  }
`,Dt=b.default.div.withConfig({displayName:"PriceTextInput__WarningAction",componentId:"sc-99cc0811-6"})`
  cursor: pointer;
  color: ${({theme:e})=>e.accent1};
`,Zt=e=>{let t=(0,n.jsx)(n.Fragment,{});switch(e){case G.BELOW_FLOOR:t=(0,n.jsx)(a.cC,{id:"rKgBmD"});break;case G.ALREADY_LISTED:t=(0,n.jsx)(a.cC,{id:"VnmT/F"})}return t},Wt=({listPrice:e,setListPrice:t,isGlobalPrice:i,setGlobalOverride:s,globalOverride:o,asset:r})=>{const{formatNumberOrString:d,formatDelta:l}=(0,N.Gb)(),[c,p]=(0,y.useState)(G.NONE),h=(0,A.Pc)((e=>e.removeSellAsset)),m=(0,A.Pc)((e=>e.showResolveIssues)),x=(0,y.useRef)(),g=(0,b.useTheme)(),u=100*(1-(e??0)/(r.floorPrice??0)),f=m&&!e||c===G.ALREADY_LISTED||c===G.BELOW_FLOOR&&u>=20?Me.O9.red400:c===G.BELOW_FLOOR?g.deprecated_accentWarning:i||e?g.accent1:g.neutral2;return function(e,t,i,n){(0,y.useEffect)((()=>{e(G.NONE);const a=n??0;t.current.value=`${a}`,a<(i?.floorPrice??0)&&a>0?e(G.BELOW_FLOOR):i.floor_sell_order_price&&a>=i.floor_sell_order_price&&i.asset_contract.tokenType!==F.hg.Erc1155&&e(G.ALREADY_LISTED)}),[i.asset_contract.tokenType,i?.floorPrice,i.floor_sell_order_price,t,n,e])}(p,x,r,e),(0,n.jsxs)(Et,{children:[(0,n.jsxs)(Lt,{borderColor:f,children:[(0,n.jsx)(Tt.A,{as:"input",pattern:"[0-9]",borderStyle:"none",className:$t.d1,color:{placeholder:"neutral2",default:"neutral1"},placeholder:"0",backgroundColor:"none",width:{sm:"54",md:"68"},ref:x,onChange:i=>{if(!e&&i.target.value.includes(".")&&0===parseFloat(i.target.value))return;const n=parseFloat(i.target.value);t(isNaN(n)?void 0:n)}}),(0,n.jsx)(At,{listPrice:e,children:"\xa0ETH"}),(i||o)&&(0,n.jsx)(Mt,{onClick:()=>s(!o),children:o?(0,n.jsx)(Le.We,{}):(0,n.jsx)(Rt.Z,{size:20,color:f})})]}),(0,n.jsx)(Ot,{$color:f,children:c!==G.NONE&&(0,n.jsxs)(Ft,{children:[(0,n.jsx)(_.Z,{height:16,width:16,color:f}),(0,n.jsxs)("span",{children:[c===G.BELOW_FLOOR&&`${l(u)} `,Zt(c),"\xa0",c===G.ALREADY_LISTED&&`${d({input:r?.floor_sell_order_price??0,type:N.sw.NFTToken})} ETH`]}),(0,n.jsx)(Dt,{onClick:()=>{c===G.ALREADY_LISTED&&h(r),p(G.NONE)},children:c===G.BELOW_FLOOR?(0,n.jsx)(a.cC,{id:"1QfxQT"}):(0,n.jsx)(a.cC,{id:"vop1s3"})})]})})]})},Bt=(0,b.default)(x.ZP).withConfig({displayName:"RoyaltyTooltip__FeeWrap",componentId:"sc-d16e3c92-0"})`
  margin-bottom: 4px;
  justify-content: space-between;
`,Gt=(0,b.default)(m.ZP).withConfig({displayName:"RoyaltyTooltip__RoyaltyContainer",componentId:"sc-d16e3c92-1"})`
  gap: 12px;
  padding: 4px 0px;
`,Ht=b.css`
  width: 16px;
  height: 16px;
  outline: 1px solid ${({theme:e})=>e.surface3};
  margin-right: 8px;
`,zt=b.default.div.withConfig({displayName:"RoyaltyTooltip__MarketIcon",componentId:"sc-d16e3c92-2"})`
  border-radius: 4px;
  ${Ht}
`,Vt=b.default.img.withConfig({displayName:"RoyaltyTooltip__CollectionIcon",componentId:"sc-d16e3c92-3"})`
  object-fit: cover;
  border-radius: 50%;
  ${Ht}
`,Xt=(0,b.default)(I.Tv.BodySmall).withConfig({displayName:"RoyaltyTooltip__FeePercent",componentId:"sc-d16e3c92-4"})`
  line-height: 16px;
  color: ${({theme:e})=>e.neutral2};
  white-space: nowrap;
`,Yt=(0,b.default)(x.ZP).withConfig({displayName:"RoyaltyTooltip__MaxFeeContainer",componentId:"sc-d16e3c92-5"})`
  justify-content: space-between;
  padding-top: 12px;
  border-top: 1px solid ${({theme:e})=>e.surface3};
`,qt=({selectedMarkets:e,asset:t,fees:i})=>{const{formatNumberOrString:s,formatDelta:o}=(0,N.Gb)(),r=Math.max(...e.map((e=>ke(e,t)??0)));return(0,n.jsxs)(Gt,{children:[e.map((e=>(0,n.jsxs)(Bt,{children:[(0,n.jsxs)(x.ZP,{children:[(0,n.jsx)(zt,{children:(0,De.Dp)(e.name,"16")}),(0,n.jsxs)(I.Tv.BodySmall,{lineHeight:"16px",marginRight:"12px",children:[e.name,"\xa0",(0,n.jsx)(a.cC,{id:"9JsPP+"})]})]}),(0,n.jsx)(Xt,{children:o(e.fee)})]},t.collection?.address??""+t.tokenId+e.name+"fee"))),(0,n.jsxs)(Bt,{children:[(0,n.jsxs)(x.ZP,{children:[(0,n.jsx)(Vt,{src:t.collection?.imageUrl}),(0,n.jsx)(I.Tv.BodySmall,{lineHeight:"16px",marginRight:"12px",children:(0,n.jsx)(a.cC,{id:"5KArrt"})})]}),(0,n.jsxs)(Xt,{children:[r,"%"]})]}),(0,n.jsxs)(Yt,{children:[(0,n.jsx)(I.Tv.BodySmall,{lineHeight:"16px",children:(0,n.jsx)(a.cC,{id:"b/e652"})}),(0,n.jsxs)(I.Tv.BodySmall,{lineHeight:"16px",color:i?"neutral1":"neutral2",children:[i?s({input:i,type:N.sw.NFTToken}):"-"," ETH"]})]})]})},Jt=(0,b.default)(m.ZP).withConfig({displayName:"MarketplaceRow__LastPriceInfo",componentId:"sc-dd36ece7-0"})`
  text-align: left;
  display: none;
  flex: 1;

  @media screen and (min-width: ${P.j$.lg}px) {
    display: flex;
  }
`,Kt=(0,b.default)(m.ZP).withConfig({displayName:"MarketplaceRow__FloorPriceInfo",componentId:"sc-dd36ece7-1"})`
  text-align: left;
  display: none;
  flex: 1;

  @media screen and (min-width: ${P.j$.md}px) {
    display: flex;
  }
`,Ut=(0,b.default)(Z).withConfig({displayName:"MarketplaceRow__RemoveMarketplaceWrap",componentId:"sc-dd36ece7-2"})`
  top: 8px;
  left: 16px;
  z-index: 3;
`,Qt=(0,b.default)(x.ZP).withConfig({displayName:"MarketplaceRow__MarketIconsWrapper",componentId:"sc-dd36ece7-3"})`
  position: relative;
  margin-right: 12px;
  width: 44px;
  justify-content: flex-end;

  @media screen and (max-width: ${P.j$.sm}px) {
    display: none;
  }
`,ei=(0,b.default)(m.ZP).withConfig({displayName:"MarketplaceRow__MarketIconWrapper",componentId:"sc-dd36ece7-4"})`
  position: relative;
  cursor: pointer;
`,ti=b.default.div.withConfig({displayName:"MarketplaceRow__MarketIcon",componentId:"sc-dd36ece7-5"})`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  z-index: ${({index:e})=>2-e};
  margin-left: ${({index:e})=>(0===e?0:-8)+"px"};
  outline: 1px solid ${({theme:e})=>e.surface3};
`,ii=b.default.div.withConfig({displayName:"MarketplaceRow__ExpandMarketIconWrapper",componentId:"sc-dd36ece7-6"})`
  cursor: pointer;
  margin-left: 4px;
  height: 28px;

  @media screen and (max-width: ${P.j$.sm}px) {
    display: none;
  }
`,ni=(0,b.default)(m.ZP).withConfig({displayName:"MarketplaceRow__FeeColumnWrapper",componentId:"sc-dd36ece7-7"})`
  flex: 1;
  align-items: flex-end;
  display: none;

  @media screen and (min-width: ${P.j$.md}px) {
    display: flex;
  }
`,ai=b.default.div.withConfig({displayName:"MarketplaceRow__FeeWrapper",componentId:"sc-dd36ece7-8"})`
  width: min-content;
  white-space: nowrap;
`,si=(0,b.default)(m.ZP).withConfig({displayName:"MarketplaceRow__ReturnColumn",componentId:"sc-dd36ece7-9"})`
  flex: 1.5;
  display: none;

  @media screen and (min-width: ${P.j$.md}px) {
    display: flex;
  }
`,oi=({globalPriceMethod:e,globalPrice:t,setGlobalPrice:i,selectedMarkets:a,removeMarket:o,asset:r,expandMarketplaceRows:d,toggleExpandMarketplaceRows:l,rowHovered:c})=>{const{formatNumberOrString:p,formatDelta:h}=(0,N.Gb)(),m=(0,A.Pc)((e=>e.setAssetListPrice)),g=(0,A.Pc)((e=>e.removeAssetMarketplace)),[u,f]=(0,y.useReducer)((e=>!e),!1),[w,j]=(0,y.useReducer)((e=>!e),!1),[C,_]=(0,y.useState)((()=>r.newListings?.find((e=>d?e.marketplace.name===a?.[0].name:!!e.price))?.price)),[b,P]=(0,y.useState)(!1),S=e===B.SAME_PRICE&&!b,k=S?t:C,v=(0,y.useCallback)((e=>{S?i(e):_(e);for(const t of a)m(r,e,t)}),[r,a,m,i,S]),T=(0,y.useMemo)((()=>{let e=0;for(const t of a){const i=ke(t,r)+t.fee;e=Math.max(i,e)}return e}),[r,a]),$=k&&k*T/100,R=k&&$&&k-$;return function(e,t,i,n,a){(0,y.useEffect)((()=>{let s;e?(n||t(a),s=a):s=n,i(s)}),[e])}(b,_,v,C,t),function(e,t,i,n,a,s,o){(0,y.useEffect)((()=>{o===B.FLOOR_PRICE?(t(e?.floorPrice),i(e.floorPrice)):o===B.LAST_PRICE?(t(e.lastPrice),i(e.lastPrice)):o===B.SAME_PRICE&&(a&&!s?i(a):t(s)),n(!1)}),[o])}(r,_,i,P,C,t,e),(0,y.useEffect)((()=>{S&&v(t)}),[t]),(0,n.jsxs)(x.ZP,{onMouseEnter:j,onMouseLeave:j,children:[(0,n.jsx)(Kt,{children:(0,n.jsx)(I.Tv.BodyPrimary,{color:"neutral2",lineHeight:"24px",children:p({input:r.floorPrice,type:N.sw.NFTToken})+r.floorPrice?" ETH":""})}),(0,n.jsx)(Jt,{children:(0,n.jsx)(I.Tv.BodyPrimary,{color:"neutral2",lineHeight:"24px",children:r.lastPrice?`${p({input:r.lastPrice,type:N.sw.NFTToken})} ETH`:"-"})}),(0,n.jsxs)(x.ZP,{flex:"2",children:[(d||a.length>1)&&(0,n.jsx)(Qt,{onMouseEnter:f,onMouseLeave:f,children:a.map(((e,t)=>(0,n.jsxs)(ei,{onClick:t=>{t.stopPropagation(),g(r,e),o&&o()},children:[(0,n.jsx)(ti,{index:t,children:(0,De.Dp)(e.name,"20")}),(0,n.jsx)(Ut,{hovered:u&&(d??!1),children:(0,n.jsx)("img",{width:"20px",src:"/nft/svgs/minusCircle.svg",alt:"Remove item"})})]},e.name+r.collection?.address+r.tokenId)))}),(0,n.jsx)(Wt,{listPrice:k,setListPrice:v,isGlobalPrice:S,setGlobalOverride:P,globalOverride:b,asset:r}),c&&(d&&w||a.length>1)&&(0,n.jsx)(ii,{onClick:l,children:d?(0,n.jsx)(Le.fJ,{}):(0,n.jsx)(Le.nG,{})})]}),(0,n.jsx)(ni,{children:(0,n.jsx)(Ee.ud,{text:(0,n.jsx)(qt,{selectedMarkets:a,asset:r,fees:$}),placement:"left",children:(0,n.jsx)(ai,{children:(0,n.jsx)(I.Tv.BodyPrimary,{color:"neutral2",children:T>0?`${h(T)}${a.length>1?s.ag._({id:"ydV21Q"}):""}`:"--%"})})})}),(0,n.jsx)(si,{children:(0,n.jsx)(ri,{ethPrice:R})})]})},ri=({ethPrice:e=0})=>{const{formatNumberOrString:t}=(0,N.Gb)(),i=(0,vt.$)();return(0,n.jsx)(x.ZP,{width:"100%",justify:"flex-end",children:(0,n.jsx)(I.Tv.BodyPrimary,{lineHeight:"24px",color:e?"neutral1":"neutral2",textAlign:"right",children:0!==e?(0,n.jsxs)(m.ZP,{children:[(0,n.jsxs)("span",{children:[t({input:e,type:N.sw.NFTToken})," ETH"]}),(0,n.jsx)(I.Tv.BodyPrimary,{color:"neutral2",children:t({input:e*i,type:N.sw.FiatNFTToken})})]}):"- ETH"})})},di=(0,b.default)(x.ZP).withConfig({displayName:"NFTListRow__NFTListRowWrapper",componentId:"sc-18902c6d-0"})`
  padding: 24px 0px;
  align-items: center;
  border-radius: 8px;

  &:hover {
    background: ${({theme:e})=>e.surface3};
  }
`,li=b.default.div.withConfig({displayName:"NFTListRow__RemoveIconContainer",componentId:"sc-18902c6d-1"})`
  width: ${60}px;
  height: ${60}px;
  padding-left: 12px;
  align-self: flex-start;
  align-items: center;
  display: flex;

  @media screen and (max-width: ${P.j$.sm}px) {
    display: none;
  }

  &:hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,ci=(0,b.default)(x.ZP).withConfig({displayName:"NFTListRow__NFTInfoWrapper",componentId:"sc-18902c6d-2"})`
  align-items: center;
  min-width: 0px;
  flex: 2;
  margin-bottom: auto;

  @media screen and (min-width: ${P.j$.md}px) {
    flex: 1.5;
  }
`,pi=b.default.img.withConfig({displayName:"NFTListRow__NFTImage",componentId:"sc-18902c6d-3"})`
  width: ${60}px;
  height: ${60}px;
  border-radius: 8px;
  margin-right: 8px;
`,hi=b.css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,mi=(0,b.default)(m.ZP).withConfig({displayName:"NFTListRow__TokenInfoWrapper",componentId:"sc-18902c6d-4"})`
  margin-right: 8px;
  min-width: 0px;
`,xi=b.default.div.withConfig({displayName:"NFTListRow__TokenName",componentId:"sc-18902c6d-5"})`
  font-weight: 535;
  font-size: 16px;
  line-height: 24px;
  ${hi}
`,gi=(0,b.default)(I.Tv.BodySmall).withConfig({displayName:"NFTListRow__CollectionName",componentId:"sc-18902c6d-6"})`
  color: ${({theme:e})=>e.neutral2};
  line-height: 20px;
  ${hi};
`,ui=(0,b.default)(m.ZP).withConfig({displayName:"NFTListRow__MarketPlaceRowWrapper",componentId:"sc-18902c6d-7"})`
  gap: 24px;
  flex: 1.5;
  margin-right: 12px;
  padding: 6px 0px;

  @media screen and (min-width: ${P.j$.md}px) {
    flex: 2;
  }

  @media screen and (min-width: ${P.j$.md}px) {
    flex: 3;
  }
`,fi=({asset:e,globalPriceMethod:t,globalPrice:i,setGlobalPrice:a,selectedMarkets:s})=>{const[o,r]=(0,y.useReducer)((e=>!e),!1),d=(0,A.Pc)((e=>e.removeSellAsset)),[l,c]=(0,y.useState)([]),[p,h]=(0,y.useReducer)((e=>!e),!1),m=(0,b.useTheme)();return(0,y.useEffect)((()=>{c(JSON.parse(JSON.stringify(s)))}),[s]),(0,n.jsxs)(di,{onMouseEnter:()=>{!p&&h()},onMouseLeave:()=>{p&&h()},children:[(0,n.jsx)(li,{children:p&&(0,n.jsx)(kt.Z,{size:20,color:m.neutral2,cursor:"pointer",onClick:()=>{d(e)}})}),(0,n.jsxs)(ci,{children:[(0,n.jsx)(pi,{alt:e.name,src:e.imageUrl||"/nft/svgs/image-placeholder.svg"}),(0,n.jsxs)(mi,{children:[(0,n.jsx)(xi,{children:e.name?e.name:`#${e.tokenId}`}),(0,n.jsxs)(gi,{children:[e.collection?.name,e.collectionIsVerified&&(0,n.jsx)(Le.SA,{style:{marginBottom:"-5px"}})]})]})]}),(0,n.jsx)(ui,{children:o&&l.length>1?l.map((s=>(0,n.jsx)(oi,{globalPriceMethod:t,globalPrice:i,setGlobalPrice:a,selectedMarkets:[s],removeMarket:()=>c(l.filter((e=>e.name!==s.name))),asset:e,expandMarketplaceRows:o,rowHovered:p,toggleExpandMarketplaceRows:r},e.name+s.name))):(0,n.jsx)(oi,{globalPriceMethod:t,globalPrice:i,setGlobalPrice:a,selectedMarkets:l,asset:e,rowHovered:p,toggleExpandMarketplaceRows:r})})]})},wi=b.default.div.withConfig({displayName:"NFTListingsGrid__TableHeader",componentId:"sc-a77714fd-0"})`
  display: flex;
  position: sticky;
  align-items: center;
  top: 72px;
  padding-top: 24px;
  padding-bottom: 24px;
  z-index: 3;
  background-color: ${({theme:e})=>e.surface2};
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  border-radius: 12px;

  @media screen and (min-width: ${P.j$.sm}px) {
    padding-left: 48px;
  }
`,ji=b.default.div.withConfig({displayName:"NFTListingsGrid__NFTHeader",componentId:"sc-a77714fd-1"})`
  flex: 2;

  @media screen and (min-width: ${P.j$.md}px) {
    flex: 1.5;
  }
`,yi=(0,b.default)(x.ZP).withConfig({displayName:"NFTListingsGrid__PriceHeaders",componentId:"sc-a77714fd-2"})`
  flex: 1.5;
  margin-right: 12px;

  @media screen and (min-width: ${P.j$.md}px) {
    flex: 3;
  }
`,Ci=b.default.div.withConfig({displayName:"NFTListingsGrid__LastPriceHeader",componentId:"sc-a77714fd-3"})`
  display: none;
  flex: 1;

  @media screen and (min-width: ${P.j$.lg}px) {
    display: flex;
  }
`,_i=b.default.div.withConfig({displayName:"NFTListingsGrid__FloorPriceHeader",componentId:"sc-a77714fd-4"})`
  display: none;
  flex: 1;

  @media screen and (min-width: ${P.j$.md}px) {
    display: flex;
  }
`,bi=(0,b.default)(x.ZP).withConfig({displayName:"NFTListingsGrid__DropdownAndHeaderWrapper",componentId:"sc-a77714fd-5"})`
  flex: 2;
  gap: 4px;
`,Pi=(0,b.default)(m.ZP).withConfig({displayName:"NFTListingsGrid__DropdownPromptContainer",componentId:"sc-a77714fd-6"})`
  position: relative;
  @media screen and (max-width: ${P.j$.sm}px) {
    display: none;
  }
`,Ii=(0,b.default)(x.ZP).withConfig({displayName:"NFTListingsGrid__DropdownPrompt",componentId:"sc-a77714fd-7"})`
  gap: 4px;
  background-color: ${({theme:e})=>e.surface3};
  cursor: pointer;
  font-weight: 535;
  font-size: 12px;
  line-height: 16px;
  border-radius: 4px;
  padding: 2px 6px;
  width: min-content;
  white-space: nowrap;
  color: ${({theme:e})=>e.neutral1};

  &:hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,Si=(0,b.default)(Pt.Z).withConfig({displayName:"NFTListingsGrid__DropdownChevron",componentId:"sc-a77714fd-8"})`
  height: 16px;
  width: 16px;
  color: ${({theme:e})=>e.neutral2};
  transform: ${({isOpen:e})=>e&&"rotate(180deg)"};
  transition: ${({theme:{transition:{duration:e,timing:t}}})=>`transform ${e.fast} ${t.ease}`};
`,Ni=b.default.div.withConfig({displayName:"NFTListingsGrid__DropdownContainer",componentId:"sc-a77714fd-9"})`
  position: absolute;
  top: 36px;
  right: 0px;
`,ki=b.css`
  display: none;
  justify-content: flex-end;
  @media screen and (min-width: ${P.j$.md}px) {
    display: flex;
  }
`,vi=b.default.div.withConfig({displayName:"NFTListingsGrid__FeeHeader",componentId:"sc-a77714fd-10"})`
  flex: 1;
  ${ki}
`,Ti=b.default.div.withConfig({displayName:"NFTListingsGrid__UserReceivesHeader",componentId:"sc-a77714fd-11"})`
  flex: 1.5;
  ${ki}
`,$i=b.default.hr.withConfig({displayName:"NFTListingsGrid__RowDivider",componentId:"sc-a77714fd-12"})`
  height: 0px;
  width: 100%;
  border-radius: 20px;
  border-width: 0.5px;
  border-style: solid;
  margin: 0;
  border-color: ${({theme:e})=>e.surface3};
`,Ri=({selectedMarkets:e})=>{const t=(0,A.Pc)((e=>e.sellAssets)),[i,s]=(0,y.useState)(B.CUSTOM),[o,r]=(0,y.useState)(),[d,l]=(0,y.useReducer)((e=>!e),!1),c=(0,y.useRef)(null);(0,bt.t)(c,d?l:void 0);const p=(0,y.useMemo)((()=>[{displayText:"Custom",isSelected:i===B.CUSTOM,onClick:()=>{s(B.CUSTOM),l()}},{displayText:"Floor price",isSelected:i===B.FLOOR_PRICE,onClick:()=>{s(B.FLOOR_PRICE),l()}},{displayText:"Last price",isSelected:i===B.LAST_PRICE,onClick:()=>{s(B.LAST_PRICE),l()}},{displayText:"Same price",isSelected:i===B.SAME_PRICE,onClick:()=>{s(B.SAME_PRICE),l()}}]),[i]);let h;switch(i){case B.CUSTOM:h=(0,n.jsx)(a.cC,{id:"8Tg/JR"});break;case B.FLOOR_PRICE:h=(0,n.jsx)(a.cC,{id:"IX1M/E"});break;case B.LAST_PRICE:h=(0,n.jsx)(a.cC,{id:"HoGOsT"});break;case B.SAME_PRICE:h=(0,n.jsx)(a.cC,{id:"uK2Qlr"})}return(0,n.jsxs)(m.ZP,{children:[(0,n.jsxs)(wi,{children:[(0,n.jsx)(ji,{children:(0,n.jsx)(a.cC,{id:"zJlXbX"})}),(0,n.jsxs)(yi,{children:[(0,n.jsx)(_i,{children:(0,n.jsx)(a.cC,{id:"WEXsZg"})}),(0,n.jsx)(Ci,{children:(0,n.jsx)(a.cC,{id:"RtKKbA"})}),(0,n.jsxs)(bi,{ref:c,children:[(0,n.jsx)(a.cC,{id:"a7u1N9"}),(0,n.jsxs)(Pi,{children:[(0,n.jsxs)(Ii,{onClick:l,children:[h," ",(0,n.jsx)(Si,{isOpen:d})]}),d&&(0,n.jsx)(Ni,{children:(0,n.jsx)(Nt,{dropDownOptions:p,width:200})})]})]}),(0,n.jsx)(vi,{children:(0,n.jsx)(a.cC,{id:"/mfICu"})}),(0,n.jsx)(Ti,{children:(0,n.jsx)(a.cC,{id:"88cUW+"})})]})]}),t.map((a=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(fi,{asset:a,globalPriceMethod:i,globalPrice:o,setGlobalPrice:r,selectedMarkets:e}),t.indexOf(a)<t.length-1&&(0,n.jsx)($i,{})]})))]})};var Ei=i(56184),Li=i(22053),Ai=i(31232),Mi=i(81086);const Fi=(0,b.default)(Li.X2).withConfig({displayName:"SelectMarketplacesDropdown__MarketplaceRowWrapper",componentId:"sc-45ca7e4-0"})`
  gap: 6px;
  height: 44px;
  width: 100%;
  cursor: pointer;
  justify-content: space-between;
  padding: 0px 16px;
  &:hover {
    background-color: ${({theme:e})=>e.surface3};
  }
  border-radius: 12px;
`,Oi=b.default.div.withConfig({displayName:"SelectMarketplacesDropdown__FeeText",componentId:"sc-45ca7e4-1"})`
  color: ${({theme:e})=>e.neutral2};
`,Di=(0,b.default)(Li.X2).withConfig({displayName:"SelectMarketplacesDropdown__HeaderButtonWrap",componentId:"sc-45ca7e4-2"})`
  padding: 12px;
  border-radius: 12px;
  width: 180px;
  justify-content: space-between;
  background: ${({theme:e})=>e.surface3};
  cursor: pointer;
  &:hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
  @media screen and (min-width: ${Ei.T1}) {
    width: 220px;
  }
`,Zi=b.default.div.withConfig({displayName:"SelectMarketplacesDropdown__HeaderButtonContentWrapper",componentId:"sc-45ca7e4-3"})`
  display: flex;
`,Wi=b.default.div.withConfig({displayName:"SelectMarketplacesDropdown__MarketIcon",componentId:"sc-45ca7e4-4"})`
  height: 20px;
  width: 20px;
  margin-right: 8px;
  outline: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 4px;
  z-index: ${({index:e,totalSelected:t})=>t-e};
  margin-left: ${({index:e})=>(0===e?0:-18)+"px"};
`,Bi=(0,b.default)(Le.g8).withConfig({displayName:"SelectMarketplacesDropdown__Chevron",componentId:"sc-45ca7e4-5"})`
  height: 20px;
  width: 20px;
  fill: ${({theme:e})=>e.neutral1};
  transition: ${({theme:{transition:{duration:e}}})=>`${e.fast} transform`};
  transform: ${({isOpen:e})=>`rotate(${e?0:180}deg)`};
`,Gi=b.default.div.withConfig({displayName:"SelectMarketplacesDropdown__ModalWrapper",componentId:"sc-45ca7e4-6"})`
  display: flex;
  flex-direction: column;
  position: relative;
`,Hi=(0,b.default)(Li.sg).withConfig({displayName:"SelectMarketplacesDropdown__DropdownWrapper",componentId:"sc-45ca7e4-7"})`
  padding: 16px 0px;
  background-color: ${({theme:e})=>e.surface1};
  display: ${({isOpen:e})=>e?"flex":"none"};
  position: absolute;
  top: 52px;
  width: 100%;
  border-radius: 12px;
  gap: 12px;
  z-index: ${S.k.modalBackdrop};
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  border: 0.5px solid ${({theme:e})=>e.surface3};
`,zi=({setSelectedMarkets:e,selectedMarkets:t})=>{const[i,a]=(0,y.useReducer)((e=>!e),!1),s=(0,y.useMemo)((()=>1===t.length?t[0].name:"Multiple"),[t]),o=(0,y.useRef)(null);return(0,bt.t)(o,(()=>i&&a())),(0,n.jsxs)(Gi,{ref:o,children:[(0,n.jsxs)(Di,{className:$t.km,onClick:a,children:[(0,n.jsxs)(Zi,{children:[t.map(((e,i)=>(0,n.jsx)(Wi,{totalSelected:t.length,index:i,children:(0,De.Dp)(e.name,"20")},i))),s]}),(0,n.jsx)(Bi,{isOpen:i,secondaryColor:Mi.Z4.colors.neutral1})]}),(0,n.jsx)(Hi,{isOpen:i,children:ye.map((i=>(({market:e,setSelectedMarkets:t,selectedMarkets:i})=>{const a=i.includes(e),[s,o]=(0,y.useReducer)((e=>!e),!1),r=()=>{1===i.length&&a||t(a?i.filter((t=>t!==e)):[...i,e])};return(0,n.jsxs)(Fi,{onMouseEnter:o,onMouseLeave:o,onClick:r,children:[(0,n.jsxs)(Li.X2,{gap:"12",onClick:r,children:[(0,De.Dp)(e.name,"24"),(0,n.jsxs)(Li.sg,{children:[(0,n.jsx)(I.Tv.BodyPrimary,{children:e.name}),(0,n.jsxs)(Oi,{className:$t.VJ,children:[e.fee,"% fee"]})]})]}),(0,n.jsx)(Ai.X,{hovered:s,checked:a,onClick:e=>{e.preventDefault(),e.stopPropagation()},children:(0,n.jsx)("span",{})})]})})({market:i,setSelectedMarkets:e,selectedMarkets:t})))})]})},Vi=(0,b.default)(Li.sg).withConfig({displayName:"SetDurationModal__ModalWrapper",componentId:"sc-b747ba68-0"})`
  gap: 4px;
  position: relative;
`,Xi=(0,b.default)(Li.X2).withConfig({displayName:"SetDurationModal__InputWrapper",componentId:"sc-b747ba68-1"})`
  padding: 6px 6px 6px 12px;
  border: 1px solid;
  position: relative;
  height: 44px;
  border-radius: 8px;
  border-color: ${({isInvalid:e,theme:t})=>e?t.critical:t.surface3};
  width: 160px;
  justify-content: space-between;
`,Yi=(0,b.default)(Li.X2).withConfig({displayName:"SetDurationModal__DropdownPrompt",componentId:"sc-b747ba68-2"})`
  gap: 4px;
  background-color: ${({theme:e})=>e.surface3};
  cursor: pointer;
  font-weight: 535;
  font-size: 14px;
  line-height: 16px;
  border-radius: 8px;
  padding: 6px 4px 6px 8px;
  white-space: nowrap;
  color: ${({theme:e})=>e.neutral1};

  &:hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,qi=(0,b.default)(Pt.Z).withConfig({displayName:"SetDurationModal__DropdownChevron",componentId:"sc-b747ba68-3"})`
  height: 20px;
  width: 20px;
  color: ${({theme:e})=>e.neutral2};
  transform: ${({isOpen:e})=>e&&"rotate(180deg)"};
  transition: ${({theme:{transition:{duration:e,timing:t}}})=>`transform ${e.fast} ${t.ease}`};
`,Ji=b.default.div.withConfig({displayName:"SetDurationModal__DropdownContainer",componentId:"sc-b747ba68-4"})`
  position: absolute;
  top: 48px;
  right: 0px;
  z-index: ${S.k.dropdown};
`,Ki=(0,b.default)(Li.X2).withConfig({displayName:"SetDurationModal__ErrorMessage",componentId:"sc-b747ba68-5"})`
  color: ${({theme:e})=>e.critical};
  gap: 4px;
  position: absolute;
  top: 44px;
  white-space: nowrap;
`,Ui=(0,b.default)(_.Z).withConfig({displayName:"SetDurationModal__WarningIcon",componentId:"sc-b747ba68-6"})`
  width: 16px;
  color: ${({theme:e})=>e.critical};
`;var Qi,en;!function(e){e.hour="hour",e.day="day",e.week="week",e.month="month"}(Qi||(Qi={})),function(e){e[e.valid=0]="valid",e[e.empty=1]="empty",e[e.overMax=2]="overMax"}(en||(en={}));const tn=()=>{const[e,t]=(0,y.useState)(Qi.day),[i,s]=(0,y.useState)("7"),[o,r]=(0,y.useState)(en.valid),d=(0,A.Pc)((e=>e.setGlobalExpiration)),[l,c]=(0,y.useReducer)((e=>!e),!1),p=(0,y.useRef)(null);(0,bt.t)(p,l?c:void 0);const h=(0,y.useMemo)((()=>[{displayText:"hours",isSelected:e===Qi.hour,onClick:()=>{t(Qi.hour),c()}},{displayText:"days",isSelected:e===Qi.day,onClick:()=>{t(Qi.day),c()}},{displayText:"weeks",isSelected:e===Qi.week,onClick:()=>{t(Qi.week),c()}},{displayText:"months",isSelected:e===Qi.month,onClick:()=>{t(Qi.month),c()}}]),[e]);let m;switch(e){case Qi.hour:m=(0,n.jsx)(a.cC,{id:"JC1A6G",values:{amount:i}});break;case Qi.day:m=(0,n.jsx)(a.cC,{id:"/TUNHz",values:{amount:i}});break;case Qi.week:m=(0,n.jsx)(a.cC,{id:"v3mlu/",values:{amount:i}});break;case Qi.month:m=(0,n.jsx)(a.cC,{id:"zo+8I3",values:{amount:i}})}return(0,y.useEffect)((()=>{const t=nn(parseFloat(i),e);1e3*t-Date.now()<D()("60s")||isNaN(t)?r(en.empty):1e3*t-Date.now()>D()("180d")?r(en.overMax):r(en.valid),d(t)}),[i,e,d]),(0,n.jsxs)(Vi,{ref:p,children:[(0,n.jsxs)(Xi,{isInvalid:o!==en.valid,children:[(0,n.jsx)(Tt.A,{as:"input",type:"number",pattern:"[0-9]",borderStyle:"none",className:$t.d1,color:{placeholder:"neutral2",default:"neutral1"},value:i,width:"40",marginRight:"4",backgroundColor:"none",onChange:e=>{s(e.target.value.length?e.target.value:"")},flexShrink:"0"}),(0,n.jsxs)(Yi,{onClick:c,children:[m," ",(0,n.jsx)(qi,{isOpen:l})]}),l&&(0,n.jsx)(Ji,{children:(0,n.jsx)(Nt,{dropDownOptions:h,width:125})})]}),o!==en.valid&&(0,n.jsxs)(Ki,{className:$t.VJ,children:[" ",(0,n.jsx)(Ui,{})," ",o===en.overMax?"Maximum 6 months":"Set duration"]})]})},nn=(e,t)=>Math.round((Date.now()+D()("1h")*(()=>{switch(t){case Qi.hour:return 1;case Qi.day:return 24;case Qi.week:return 168;default:return 720}})()*e)/1e3),an=(0,b.default)(m.ZP).withConfig({displayName:"ListPage__ListingHeader",componentId:"sc-f0009ca0-0"})`
  gap: 16px;
  margin-top: 36px;

  @media screen and (min-width: ${P.j$.xs}px) {
    gap: 4px;
  }
`,sn=b.default.div.withConfig({displayName:"ListPage__ArrowContainer",componentId:"sc-f0009ca0-1"})`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;

  @media screen and (min-width: ${P.j$.sm}px) {
    height: 40px;
    width: 40px;
  }
`,on=(0,b.default)($e.Z).withConfig({displayName:"ListPage__BackArrow",componentId:"sc-f0009ca0-2"})`
  height: 16px;
  width: 16px;
  cursor: pointer;
  color: ${({theme:e})=>e.neutral2};

  @media screen and (min-width: ${P.j$.sm}px) {
    height: 20px;
    width: 20px;
  }
`,rn=(0,b.default)(x.ZP).withConfig({displayName:"ListPage__TitleWrapper",componentId:"sc-f0009ca0-3"})`
  gap: 4px;
  margin-bottom: 12px;
  white-space: nowrap;
  width: min-content;
  font-weight: 535;
  font-size: 20px;
  line-height: 28px;

  @media screen and (min-width: ${P.j$.xs}px) {
    margin-bottom: 0px;
    font-weight: 535;
    font-size: 28px;
    line-height: 36px;
  }
`,dn=(0,b.default)(x.ZP).withConfig({displayName:"ListPage__ButtonsWrapper",componentId:"sc-f0009ca0-4"})`
  gap: 12px;
  width: min-content;
`,ln=b.default.section.withConfig({displayName:"ListPage__MarketWrap",componentId:"sc-f0009ca0-5"})`
  gap: 48px;
  margin: 0px auto;
  width: 100%;
  max-width: 1200px;
`,cn=(0,b.default)(x.ZP).withConfig({displayName:"ListPage__ListingHeaderRow",componentId:"sc-f0009ca0-6"})`
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (min-width: ${P.j$.sm}px) {
    padding-left: 40px;
  }
`,pn=b.default.div.withConfig({displayName:"ListPage__GridWrapper",componentId:"sc-f0009ca0-7"})`
  margin-top: 24px;
  margin-bottom: 48px;
`,hn=(0,b.default)(x.ZP).withConfig({displayName:"ListPage__FloatingConfirmationBar",componentId:"sc-f0009ca0-8"})`
  padding: 12px 12px 12px 32px;
  border: 1px solid;
  border-color: ${({theme:e,issues:t})=>t?e.surface3:e.accent1};
  border-radius: 20px;
  white-space: nowrap;
  justify-content: space-between;
  background: ${({theme:e})=>e.surface1};
  position: fixed;
  bottom: 32px;
  width: calc(100vw - ${80}px);
  left: 50%;
  transform: translateX(-50%);
  max-width: ${({theme:e})=>e.maxWidth};
  z-index: ${S.k.under_dropdown};
  box-shadow: ${({theme:e})=>e.deprecated_shallowShadow};

  @media screen and (max-width: ${P.j$.lg}px) {
    bottom: 68px;
  }

  @media screen and (max-width: ${P.j$.sm}px) {
    width: calc(100% - ${32}px);
    padding: 8px 8px 8px 16px;
  }
`,mn=b.default.div.withConfig({displayName:"ListPage__Overlay",componentId:"sc-f0009ca0-9"})`
  position: fixed;
  bottom: 0px;
  left: 0px;
  height: 158px;
  width: 100vw;
  background: ${({theme:e})=>`linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, ${e.surface2} 100%)`};
`,xn=(0,b.default)(I.Tv.SubHeader).withConfig({displayName:"ListPage__UsdValue",componentId:"sc-f0009ca0-10"})`
  line-height: 24px;
  color: ${({theme:e})=>e.neutral2};
  display: none;

  @media screen and (min-width: ${P.j$.lg}px) {
    display: flex;
  }
`,gn=(0,b.default)(x.ZP).withConfig({displayName:"ListPage__ProceedsAndButtonWrapper",componentId:"sc-f0009ca0-11"})`
  width: min-content;
  gap: 40px;

  @media screen and (max-width: ${P.j$.sm}px) {
    gap: 20px;
  }
`,un=(0,b.default)(x.ZP).withConfig({displayName:"ListPage__ProceedsWrapper",componentId:"sc-f0009ca0-12"})`
  width: min-content;
  gap: 16px;
`,fn=b.default.span.withConfig({displayName:"ListPage__EthValueWrapper",componentId:"sc-f0009ca0-13"})`
  font-weight: 535;
  font-size: 20px;
  line-height: 28px;
  color: ${({theme:e,totalEthListingValue:t})=>t?e.neutral1:e.neutral2};

  @media screen and (max-width: ${P.j$.sm}px) {
    font-size: 16px;
    line-height: 24px;
  }
`,wn=()=>{const{formatNumberOrString:e}=(0,N.Gb)(),{setProfilePageState:t}=(0,A.aO)(),{provider:i,chainId:s}=(0,r.useWeb3React)(),l=(0,A.dD)(),c=(0,d.oO)({modal:o.KO.NFT_LISTING}),{formatCurrencyAmount:p}=(0,N.Gb)(),{setGlobalMarketplaces:h,sellAssets:w,issues:j}=(0,A.Pc)((({setGlobalMarketplaces:e,sellAssets:t,issues:i})=>({setGlobalMarketplaces:e,sellAssets:t,issues:i}))),{listings:C,collectionsRequiringApproval:_,setCollectionStatusAndCallback:b}=(0,A.zM)((({listings:e,collectionsRequiringApproval:t,setCollectionStatusAndCallback:i})=>({listings:e,collectionsRequiringApproval:t,setCollectionStatusAndCallback:i}))),P=(0,y.useMemo)((()=>Se(w)),[w]),S=(0,u.Z)(s),k=(0,f.Z)(P.toString(),S),v=(0,g.sq)(k),T=p({amount:v,type:N.sw.FiatTokenPrice}),[$,R]=(0,y.useReducer)((e=>!e),!1),[E,L]=(0,y.useState)([ye[0]]),M=i?.getSigner();Ne(),(0,y.useEffect)((()=>{h(E)}),[E,h]);const F={collection_addresses:w.map((e=>e.asset_contract.address)),token_ids:w.map((e=>e.tokenId)),marketplaces:Array.from(new Set(C.map((e=>e.marketplace.name)))),list_quantity:C.length,usd_value:T,...c},O=l?(0,n.jsx)(I.Tv.SubHeader,{children:(0,n.jsx)(a.cC,{id:"lDgVWA"})}):(0,n.jsx)(I.Tv.HeadlineSmall,{lineHeight:"28px",children:(0,n.jsx)(a.cC,{id:"88cUW+"})});return(0,n.jsxs)(m.ZP,{children:[(0,n.jsxs)(ln,{children:[(0,n.jsxs)(an,{children:[(0,n.jsxs)(x.ZP,{children:[(0,n.jsx)(sn,{children:(0,n.jsx)(on,{onClick:()=>t(U.HA.VIEWING)})}),(0,n.jsx)(I.Tv.BodySmall,{lineHeight:"20px",color:"neutral2",children:(0,n.jsx)(a.cC,{id:"/7Thkl"})})]}),(0,n.jsxs)(cn,{children:[(0,n.jsx)(rn,{children:(0,n.jsx)(a.cC,{id:"EjWd3p"})}),(0,n.jsxs)(dn,{children:[(0,n.jsx)(zi,{setSelectedMarkets:L,selectedMarkets:E}),(0,n.jsx)(tn,{})]})]})]}),(0,n.jsx)(pn,{children:(0,n.jsx)(Ri,{selectedMarkets:E})})]}),(0,n.jsxs)(hn,{issues:!!j,children:[O,(0,n.jsxs)(gn,{children:[(0,n.jsxs)(un,{children:[(0,n.jsxs)(fn,{totalEthListingValue:!!P,children:[P>0?e({input:P,type:N.sw.NFTToken}):"-"," ","ETH"]}),!!v&&(0,n.jsx)(xn,{children:T})]}),(0,n.jsx)(Te,{onClick:()=>{R(),(async()=>{if(M){(0,d._P)(o.Yz.NFT_SELL_START_LISTING,{...F});for(const t of _)(e=t.status)!==U.Sb.PAUSED&&e!==U.Sb.APPROVED&&(l?await Pe(t,M,b):Pe(t,M,b));var e}})()}})]})]}),(0,n.jsx)(mn,{}),$&&(0,n.jsx)(_t,{overlayClick:R})]})};var jn=i(43205),yn=i(67903),Cn=i(4843),_n=i(70518),bn=i(63826),Pn=i(40014),In=i(96334),Sn=(i(55377),i(44091)),Nn=i(25198),kn=i(74287),vn=i(64244),Tn=i(17344);i(22631);const $n=(0,b.default)(Li.sg).withConfig({displayName:"FilterSidebar__ItemsContainer",componentId:"sc-c7c26696-0"})`
  ${Re.Zl}
  height: 100vh;
`,Rn=(0,b.default)(In.X).withConfig({displayName:"FilterSidebar__LongLoadingBubble",componentId:"sc-c7c26696-1"})`
  min-height: 15px;
  width: 75%;
`,En=(0,b.default)(In.X).withConfig({displayName:"FilterSidebar__SmallLoadingBubble",componentId:"sc-c7c26696-2"})`
  height: 20px;
  width: 20px;
  margin-right: 8px;
`,Ln=(0,b.default)(Li.X2).withConfig({displayName:"FilterSidebar__MobileMenuHeader",componentId:"sc-c7c26696-3"})`
  justify-content: space-between;
  padding-bottom: 8px;
`,An=({style:e})=>(0,n.jsxs)(Li.X2,{display:"flex",justifyContent:"space-between",style:e,paddingLeft:"12",paddingRight:"16",children:[(0,n.jsxs)(Li.X2,{display:"flex",flex:"1",children:[(0,n.jsx)(En,{}),(0,n.jsx)(Rn,{})]}),(0,n.jsx)(yn.n,{as:"span",borderColor:"surface3",className:"rgw6ez453 rgw6ezq9 rgw6ez80l rgw6ez19f rgw6ez12f rgw6ez7zp rgw6ez89d","aria-hidden":"true"})]}),Mn=({fetchNextPage:e,hasNextPage:t,isFetchingNextPage:i,walletCollections:a})=>{const s=(0,A.Pr)((e=>e.collectionFilters)),o=(0,A.Pr)((e=>e.setCollectionFilters)),[r,d]=(0,A.wx)(),l=(0,A.dD)(),{sidebarX:c}=(0,Sn.q_)({sidebarX:r?0:-360,config:{duration:Fe.Kd.medium,easing:Sn.Z5.easeOutSine}}),p=(0,y.useMemo)((()=>a&&a?.length>=la||i),[a,i]);return(0,n.jsx)(yn.x,{position:{sm:"fixed",md:"sticky"},top:{sm:"0",md:"72"},left:{sm:"0",md:"unset"},width:{sm:"full",md:"332",lg:"332"},height:{sm:"full",md:"auto"},zIndex:{sm:"modal",md:"auto"},display:r?"flex":"none",style:{transform:l?void 0:c.to((e=>`translateX(${e}px)`))},background:"surface2",children:(0,n.jsxs)(yn.n,{paddingTop:{sm:"24",md:"0"},paddingLeft:{sm:"16",md:"0"},paddingRight:"16",width:{sm:"full",md:"332",lg:"332"},children:[l&&(0,n.jsxs)(Ln,{children:[(0,n.jsx)(I.Tv.HeadlineSmall,{children:"Filter"}),(0,n.jsx)(Le.DX,{height:28,width:28,fill:Mi.Z4.colors.neutral1,onClick:()=>d(!1)})]}),(0,n.jsx)(Fn,{collections:a,collectionFilters:s,setCollectionFilters:o,fetchNextPage:e,hasNextPage:t,isFetchingNextPage:i,hideSearch:p})]})})},Fn=({collections:e,collectionFilters:t,setCollectionFilters:i,fetchNextPage:a,hasNextPage:s,isFetchingNextPage:o,hideSearch:r})=>{const[d,l]=(0,y.useState)(""),[c,p]=(0,y.useState)(e);(0,y.useEffect)((()=>{if(d){const t=e.filter((e=>e.name?.toLowerCase().includes(d.toLowerCase())));p(t)}else p(e)}),[d,e]);const h=(0,y.useCallback)(((e,t)=>{if(!t)return e;return`${t[e].address}_${e}`}),[]),m=s?c.length+1:c.length,x=o?Tn.Z:a,g=(0,y.useCallback)((e=>!s||e<c.length),[c.length,s]),u=(0,y.useCallback)((({index:e,style:a})=>!(!!c&&c[e])||o?(0,n.jsx)(An,{style:a},e):(0,n.jsx)(Dn,{style:a,collection:c[e],collectionFilters:t,setCollectionFilters:i},h(e,c))),[c,o,h,t,i]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(yn.n,{className:$t.v4,marginTop:"12",marginBottom:"16",width:"276",children:"Collections"}),(0,n.jsx)(yn.n,{paddingBottom:"12",borderRadius:"8",children:(0,n.jsxs)(Li.sg,{as:"ul",paddingLeft:"0",gap:"10",style:{maxHeight:"80vh"},children:[!r&&(0,n.jsx)(On,{collectionSearchText:d,setCollectionSearchText:l}),(0,n.jsx)($n,{children:(0,n.jsx)(Nn.ZP,{disableWidth:!0,children:({height:e})=>(0,n.jsx)(vn.Z,{isItemLoaded:g,itemCount:m,loadMoreItems:x,children:({onItemsRendered:t,ref:i})=>(0,n.jsx)(kn.t7,{height:e,width:"100%",itemCount:m,itemSize:44,onItemsRendered:t,itemKey:h,ref:i,children:u})})})})]})})]})},On=({collectionSearchText:e,setCollectionSearchText:t})=>(0,n.jsx)(Tt.I,{placeholder:"Search",marginTop:"8",marginBottom:"8",autoComplete:"off",position:"static",width:"full",value:e,onChange:e=>t(e.currentTarget.value)}),Dn=({collection:e,collectionFilters:t,setCollectionFilters:i,style:a})=>{const[s,o]=(0,y.useState)(!1),[r,d]=(0,y.useReducer)((e=>!e),!1),l=(0,y.useCallback)((e=>t.some((t=>t===e))),[t]),c=()=>{o(!s),i(e.address)};return(0,n.jsxs)(Li.X2,{maxWidth:"full",overflowX:"hidden",overflowY:"hidden",fontWeight:"book",className:"_1bw5dlr3 rgw6ezd3 rgw6ezb9 rgw6ezdr",justifyContent:"space-between",cursor:"pointer",paddingLeft:"12",paddingRight:"16",borderRadius:"12",style:{paddingBottom:"22px",paddingTop:"22px",...a},maxHeight:"44",as:"li",onMouseEnter:d,onMouseLeave:d,onClick:c,children:[(0,n.jsxs)(Li.X2,{children:[(0,n.jsx)(yn.n,{as:"img",borderRadius:"round",width:"20",height:"20",src:e.image}),(0,n.jsxs)(yn.n,{as:"span",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",paddingLeft:"12",paddingRight:"14",style:{minHeight:15,maxWidth:"180px"},children:[e.name," "]})]}),(0,n.jsx)(Ai.X,{checked:l(e.address),hovered:r,onChange:c,children:(0,n.jsx)(yn.n,{as:"span",color:"neutral3",marginRight:"12",marginLeft:"auto",children:e.count})})]})};var Zn=i(7778),Wn=i(59560),Bn=i(94129),Gn=i(69208),Hn=i(38514);const zn=b.default.div.withConfig({displayName:"ProfilePageLoadingSkeleton__SkeletonBodyWrapper",componentId:"sc-a6ba35bc-0"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 18px;
`,Vn=b.default.div.withConfig({displayName:"ProfilePageLoadingSkeleton__SkeletonRowWrapper",componentId:"sc-a6ba35bc-1"})`
  display: flex;
  flex-direct: row;
  width: 100%;
`,Xn=(0,b.default)(Vn).withConfig({displayName:"ProfilePageLoadingSkeleton__AccountDetailsSkeletonWrapper",componentId:"sc-a6ba35bc-2"})`
  gap: 12px;
  margin-bottom: 30px;
`,Yn=b.default.div.withConfig({displayName:"ProfilePageLoadingSkeleton__ProfileDetailsSkeleton",componentId:"sc-a6ba35bc-3"})`
  width: 180px;
  height: 36px;
  border-radius: 12px;
`,qn=(0,b.default)(Vn).withConfig({displayName:"ProfilePageLoadingSkeleton__FilterBarSkeletonWrapper",componentId:"sc-a6ba35bc-4"})`
  justify-content: space-between;
`,Jn=b.default.div.withConfig({displayName:"ProfilePageLoadingSkeleton__FilterButtonSkeleton",componentId:"sc-a6ba35bc-5"})`
  width: 92px;
  height: 44px;
  border-radius: 12px;
`,Kn=b.default.div.withConfig({displayName:"ProfilePageLoadingSkeleton__SellButtonSkeleton",componentId:"sc-a6ba35bc-6"})`
  width: 80px;
  height: 44px;
  border-radius: 12px;
`,Un=b.default.div.withConfig({displayName:"ProfilePageLoadingSkeleton__ProfileAssetCardSkeleton",componentId:"sc-a6ba35bc-7"})`
  width: 100%;
  height: 330px;
  border-radius: 20px;
`,Qn=()=>(0,n.jsx)(yn.n,{width:"full",className:_n.P,children:Array.from(Array(da),((e,t)=>(0,n.jsx)(Un,{className:Hn.S},t)))}),ea=()=>(0,n.jsxs)(zn,{children:[(0,n.jsx)(Xn,{children:(0,n.jsx)(Yn,{className:Hn.S})}),(0,n.jsxs)(qn,{children:[(0,n.jsx)(Jn,{className:Hn.S}),(0,n.jsx)(Kn,{className:Hn.S})]}),(0,n.jsx)(Qn,{})]});var ta=i(15239),ia=i(42806),na=i(92686);const aa=({asset:e,mediaShouldBePlaying:t,setCurrentTokenPlayingMedia:i,hideDetails:s})=>{const r=(0,A.Pc)((e=>e.sellAssets)),l=(0,A.Pc)((e=>e.selectSellAsset)),c=(0,A.Pc)((e=>e.removeSellAsset)),p=(0,A.cP)((e=>e.bagExpanded)),h=(0,A.cP)((e=>e.toggleBag)),m=(0,A.dD)(),x=(0,na.s0)(),g=(0,y.useMemo)((()=>r.some((t=>t.tokenId===e.tokenId&&t.asset_contract.address===e.asset_contract.address))),[e,r]),u=(0,d.oO)(),f=t=>{t?c(e):(l(e),(0,d._P)(o.Yz.NFT_SELL_ITEM_ADDED,{collection_address:e.asset_contract.address,token_id:e.tokenId,...u})),p||r.find((t=>t.tokenId===e.tokenId&&t.asset_contract.address===e.asset_contract.address))||m||h()},w=e.susFlag,j=(0,y.useMemo)((()=>({primaryInfo:!!e.asset_contract.name&&e.asset_contract.name,primaryInfoIcon:e.collectionIsVerified&&(0,n.jsx)(Le.SA,{height:"16px",width:"16px"}),secondaryInfo:e.name||e.tokenId?e.name??`#${e.tokenId}`:null,selectedInfo:(0,n.jsx)(a.cC,{id:"77UrnP"}),notSelectedInfo:(0,n.jsx)(a.cC,{id:"9AgVn/"}),disabledInfo:(0,n.jsx)(a.cC,{id:"KWvmby"})})),[e.asset_contract.name,e.collectionIsVerified,e.name,e.tokenId]);return(0,n.jsx)(ta.y,{asset:e,display:j,isSelected:g,isDisabled:Boolean(w),selectAsset:()=>f(!1),unselectAsset:()=>f(!0),onButtonClick:()=>f(g),onCardClick:()=>{s||x((0,ia.VL)(e))},mediaShouldBePlaying:t,setCurrentTokenPlayingMedia:i,testId:"nft-profile-asset"})},sa=(0,b.default)(Li.sg).withConfig({displayName:"ProfilePage__ProfilePageColumn",componentId:"sc-c40541c2-0"})`
  ${Zn.bc}
`,oa=b.default.div.withConfig({displayName:"ProfilePage__ProfileHeader",componentId:"sc-c40541c2-1"})`
  font-size: 28px;
  font-weight: 535;
  line-height: 38px;
  padding-bottom: 16px;
  margin-bottom: 8px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 0px;
  }
`,ra=b.default.div.withConfig({displayName:"ProfilePage__EmptyStateContainer",componentId:"sc-c40541c2-2"})`
  margin-top: 164px;
`,da=25,la=300,ca=()=>{const{address:e}=(0,A.tM)(),t=(0,A.Pr)((e=>e.walletCollections)),i=(0,A.Pr)((e=>e.setWalletCollections)),{resetSellAssets:a}=(0,A.Pc)((({reset:e})=>({resetSellAssets:e}))),s=(0,A.Pc)((e=>e.sellAssets)),o=(0,A.cP)((e=>e.toggleBag)),[r,d]=(0,A.wx)(),l=(0,A.dD)(),{data:c,fetchNextPage:p,hasNextPage:h,isFetchingNextPage:m,isSuccess:x}=(0,Bn.useInfiniteQuery)(["ownerCollections",{address:e}],(async({pageParam:t=0})=>{const i=await(async({params:e})=>{let t=!1;for(const a of Object.values(e))void 0===a&&(t=!0);if(t)return[];const i=await fetch(`https://api.opensea.io/api/v1/collections?${new URLSearchParams(e).toString()}`),n=await i.json();return n?n.filter((e=>e.primary_asset_contracts.length)).map((e=>({address:e.primary_asset_contracts[0].address,name:e.name,image:e.image_url,count:e.owned_asset_count}))):[]})({params:{asset_owner:e,offset:""+t*la,limit:`${la}`}});return{data:i,nextPage:t+1}}),{getNextPageParam:e=>0===e.data.length?void 0:e.nextPage,refetchInterval:15e3,refetchIntervalInBackground:!1,refetchOnWindowFocus:!1,refetchOnMount:!1}),g=(0,y.useMemo)((()=>x?c?.pages.map((e=>e.data)).flat():null),[x,c]);return(0,y.useEffect)((()=>{g&&i(g)}),[g,i]),(0,n.jsxs)(sa,{width:"full",paddingTop:{sm:"16",md:"40"},children:[(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(oa,{children:"My NFTs"}),(0,n.jsxs)(Li.X2,{alignItems:"flex-start",position:"relative",children:[(0,n.jsx)(Mn,{fetchNextPage:p,hasNextPage:h,isFetchingNextPage:m,walletCollections:t}),(!l||!r)&&(0,n.jsx)(y.Suspense,{fallback:(0,n.jsx)(ea,{}),children:(0,n.jsx)(pa,{walletCollections:t,isFiltersExpanded:r,setFiltersExpanded:d})})]})]}),s.length>0&&(0,n.jsxs)(Li.X2,{display:{sm:"flex",md:"none"},position:"fixed",left:"16",height:"56",borderRadius:"12",paddingX:"16",paddingY:"12",background:"surface1",borderStyle:"solid",borderColor:"surface3",borderWidth:"1px",style:{bottom:"68px",width:"calc(100% - 32px)",lineHeight:"24px"},className:$t.v4,children:[s.length," NFT",1===s.length?"":"s",(0,n.jsx)(yn.n,{fontWeight:"medium",fontSize:"14",cursor:"pointer",color:"neutral2",marginRight:"20",marginLeft:"auto",onClick:a,lineHeight:"16",children:"Clear"}),(0,n.jsx)(yn.n,{color:"white",marginRight:"0",fontWeight:"medium",fontSize:"14",cursor:"pointer",backgroundColor:"accent1",onClick:o,lineHeight:"16",borderRadius:"12",paddingY:"8",paddingX:"28",children:"List for sale"})]})]})},pa=({walletCollections:e,isFiltersExpanded:t,setFiltersExpanded:i})=>{const{address:a}=(0,A.tM)(),s=(0,A.Pr)((e=>e.setCollectionFilters)),o=(0,A.Pr)((e=>e.collectionFilters)),r=(0,A.Pr)((e=>e.clearCollectionFilters)),d=(0,A.cP)((e=>e.bagExpanded)),[l,c]=(0,y.useState)(),p=(0,A.dD)(),h=(0,A.Pc)((e=>e.sellAssets)),{walletAssets:m,loading:x,hasNext:g,loadMore:u}=(0,jn.b)(a,o,[],da),{gridX:f}=(0,Sn.q_)({gridX:t?300:-16,config:{duration:250,easing:Sn.Z5.easeOutSine}});return x?(0,n.jsx)(ea,{}):(0,n.jsx)(Li.sg,{width:"full",children:0===m?.length?(0,n.jsx)(ra,{children:(0,n.jsx)(Gn.f,{})}):(0,n.jsxs)(yn.x,{flexShrink:"0",position:p&&d?"fixed":"static",style:{transform:f.to((e=>`translate(${Number(e)-(!p&&t?300:-16)}px)`))},paddingY:"20",children:[(0,n.jsx)(Li.X2,{gap:"8",flexWrap:"nowrap",justifyContent:"space-between",children:(0,n.jsx)(bn.L,{isMobile:p,isFiltersExpanded:t,onClick:()=>i(!t)})}),(0,n.jsx)(Li.X2,{children:(0,n.jsx)(ha,{collections:e,collectionFilters:o,setCollectionFilters:s,clearCollectionFilters:r})}),(0,n.jsx)(Wn.Z,{next:u,hasMore:g??!1,loader:Boolean(g&&m?.length)&&(0,n.jsx)(Cn.p,{count:da}),dataLength:m?.length??0,className:m?.length?_n.P:void 0,style:{overflow:"unset"},children:m?.length?m.map(((e,t)=>(0,n.jsx)("div",{children:(0,n.jsx)(aa,{asset:e,mediaShouldBePlaying:e.tokenId===l,setCurrentTokenPlayingMedia:c,hideDetails:h.length>0})},t))):null})]})})},ha=({collections:e,collectionFilters:t,setCollectionFilters:i,clearCollectionFilters:a})=>{const s=t=>e?.find((e=>e.address===t)),o=(0,y.useCallback)((()=>a()),[a]);return(0,n.jsxs)(Li.X2,{paddingY:"18",gap:"8",flexWrap:"wrap",children:[Boolean(t?.length)&&t.map(((e,t)=>(0,n.jsx)(ma,{collection:s(e),setCollectionFilters:i},`CollectionFilterItem-${e}-${t}`))),Boolean(t?.length)&&(0,n.jsx)(Pn.v,{onClick:o,children:"Clear all"})]})},ma=({collection:e,setCollectionFilters:t})=>e?(0,n.jsxs)(Li.X2,{justifyContent:"center",paddingTop:"6",paddingRight:"6",paddingBottom:"6",paddingLeft:"12",borderRadius:"8",background:"surface3",fontSize:"14",children:[(0,n.jsx)(yn.n,{as:"img",borderRadius:"round",width:"20",height:"20",src:e.image}),(0,n.jsx)(yn.n,{marginLeft:"6",className:"_1bw5dlr8",children:e?.name}),(0,n.jsx)(yn.n,{color:"neutral2",background:"none",height:"28",width:"28",padding:"0",as:"button",border:"none",cursor:"pointer",onClick:()=>t(e.address),children:(0,n.jsx)(Le.aM,{})})]}):null;var xa=i(41523),ga=i(6970);const ua=b.default.div.withConfig({displayName:"profile__ProfilePageWrapper",componentId:"sc-fb773c21-0"})`
  height: 100%;
  width: 100%;
  scrollbar-width: none;

  @media screen and (min-width: ${P.j$.lg}px) {
    height: auto;
  }
`,fa=b.default.div.withConfig({displayName:"profile__LoadedAccountPage",componentId:"sc-fb773c21-1"})`
  width: calc(
    100% -
      ${({cartExpanded:e,isListingNfts:t})=>t?80:e?h.zD:0}px
  );
  margin: 0px ${({isListingNfts:e})=>e?40:0}px;

  @media screen and (max-width: ${P.j$.sm}px) {
    width: calc(100% - ${({isListingNfts:e})=>e?32:0}px);
    margin: 0px ${({isListingNfts:e})=>e?16:0}px;
  }
`,wa=b.default.div.withConfig({displayName:"profile__Center",componentId:"sc-fb773c21-2"})`
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  white-space: nowrap;
`,ja=(0,b.default)(c.DF).withConfig({displayName:"profile__ConnectWalletButton",componentId:"sc-fb773c21-3"})`
  width: min-content;
  white-space: nowrap;
  border-radius: 12px;
  padding: 14px 18px;
  border: none;
`;function ya(e,t){return e?t?s.ag._({id:"tpvsk7",values:{ENSName:t}}):s.ag._({id:"B4cCY2",values:{0:(0,ga.Xn)(e)}}):s.ag._({id:"jqHc56"})}function Ca(){const e=(0,A.aO)((e=>e.state)),t=(0,A.aO)((e=>e.setProfilePageState)),i=(0,A.Pc)((e=>e.reset)),s=(0,A.Pr)((e=>e.clearCollectionFilters)),{account:c}=(0,r.useWeb3React)(),{ENSName:h}=(0,p.Z)(c),m=(0,y.useRef)(c),x=(0,l.LK)();(0,y.useEffect)((()=>{m.current!==c&&(m.current=c,i(),t(U.HA.VIEWING),s())}),[c,i,t,s]);const g=(0,A.cP)((e=>e.bagExpanded)),u=e===U.HA.LISTING;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(xa.q,{children:(0,n.jsx)("title",{children:ya(c,h)})}),(0,n.jsx)(d.fM,{page:o.yJ.NFT_PROFILE_PAGE,shouldLogImpression:!0,children:(0,n.jsx)(ua,{children:c?(0,n.jsx)(fa,{cartExpanded:g,isListingNfts:u,children:u?(0,n.jsx)(wn,{}):(0,n.jsx)(ca,{})}):(0,n.jsxs)(wa,{children:[(0,n.jsx)(I.Tv.HeadlineMedium,{lineHeight:"36px",color:"neutral2",fontWeight:"535",marginBottom:"24px",children:(0,n.jsx)(a.cC,{id:"xZBwjV"})}),(0,n.jsx)(ja,{onClick:x,children:(0,n.jsx)(I.Tv.SubHeader,{color:"white",lineHeight:"20px",children:(0,n.jsx)(a.cC,{id:"VHOVEJ"})})})]})})})]})}},50633:()=>{}}]);
//# sourceMappingURL=5403.b6a06f35.chunk.js.map