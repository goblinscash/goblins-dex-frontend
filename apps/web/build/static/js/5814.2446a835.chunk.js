"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[5814],{63111:(e,r,t)=>{t.d(r,{R_:()=>s,gS:()=>a,xr:()=>n,oj:()=>i,Co:()=>o,Yb:()=>l,fb:()=>d,hX:()=>c,rG:()=>g,FC:()=>m,rZ:()=>p});t(55377),t(22631);var s="e2d0r6e rgw6ezd9 rgw6ezbf rgw6eze3 rgw6ez4b9 rgw6ez1dr rgw6ez47l rgw6ez2cx",a="e2d0r6h e2d0r6g rgw6ezd9 rgw6ezbf rgw6eze3 rgw6ez2e3 rgw6ez2jl rgw6ez2or rgw6ez289 rgw6ez173 rgw6ez4ux rgw6ez88d rgw6ez80x rgw6ez8e1",n="rgw6ez14f rgw6ez1bf rgw6ez80p",i="rgw6ezd3 rgw6ezbf rgw6eze9 rgw6ezfr rgw6ez8bh rgw6ez45l rgw6ez45r",o="e2d0r6a rgw6ezd3 rgw6ezbf rgw6eze9 rgw6ez3t3",l="e2d0r63 e2d0r61 rgw6ez459 rgw6ez2d3 rgw6ez2e4 rgw6ez2il rgw6ez2jm rgw6ez2or rgw6ez289 rgw6ez4b9 rgw6ez7zd rgw6ez895 rgw6ez7zp rgw6ez59f rgw6ez5yr",d="e2d0r6c rgw6ezd3 rgw6ezb9 rgw6eze3 rgw6ez4bf",c="e2d0r6l rgw6ezd3 rgw6ezb9 rgw6ezdr rgw6ez2e3 rgw6ez2jl rgw6ez2or rgw6ez289 rgw6ez4qr rgw6ez4b9 rgw6ez80x rgw6ez7zd",g="e2d0r65 e2d0r61 rgw6ez459 rgw6ez2e3 rgw6ez2jl rgw6ez27x rgw6ez4bf rgw6ezb3 rgw6ezd9",m="e2d0r6n rgw6ez2d3 rgw6ez2il rgw6ez44r rgw6ez80l rgw6ez18x rgw6ez16x rgw6ez4b9 rgw6ez4qr rgw6ezax rgw6ezd9 rgw6ez7zd",p="e2d0r6j e2d0r6g rgw6ezd9 rgw6ezbf rgw6eze3 rgw6ez2e3 rgw6ez2jl rgw6ez2or rgw6ez289 rgw6ez173 rgw6ez4ux rgw6ez88d rgw6ez80x rgw6ez8e1 rgw6ez4d3 rgw6ez7zd"},66041:(e,r,t)=>{t.d(r,{m:()=>o});var s=t(86147),a=t(27382),n=t(39491),i=t(25093);function o(e,r,t){const{data:s,loading:o,fetchMore:l,error:d}=(0,i.YV)({variables:{filter:e,first:r},fetchPolicy:t}),c=s?.nftActivity?.pageInfo?.hasNextPage,g=(0,n.useCallback)((()=>l({variables:{after:s?.nftActivity?.pageInfo?.endCursor}})),[s,l]),m=(0,n.useMemo)((()=>s?.nftActivity?.edges?.map((e=>{const r=e?.node,t=r?.asset;return{collectionAddress:r.address,tokenId:r.tokenId,tokenMetadata:{name:t?.name,imageUrl:t?.image?.url,smallImageUrl:t?.smallImage?.url,metadataUrl:t?.metadataUrl,rarity:{primaryProvider:"Rarity Sniper",providers:t?.rarities?.map((e=>({...e,provider:"Rarity Sniper"})))},suspiciousFlag:t?.suspiciousFlag,standard:t?.nftContract?.standard},eventType:r.type,marketplace:r.marketplace,fromAddress:r.fromAddress,toAddress:r.toAddress,transactionHash:r.transactionHash,orderStatus:r.orderStatus,price:(0,a.K3)(r.price?.value??0),symbol:t?.collection?.image?.url,quantity:r.quantity,url:r.url,eventTimestamp:1e3*r.timestamp}}))),[s]);return(0,n.useMemo)((()=>({nftActivity:m,hasNext:c,loadMore:g,loading:o,error:d})),[c,g,o,m,d])}s.ZP`
  query NftActivity($filter: NftActivityFilterInput, $after: String, $first: Int) {
    nftActivity(filter: $filter, after: $after, first: $first) {
      edges {
        node {
          id
          address
          tokenId
          asset {
            id
            metadataUrl
            image {
              id
              url
            }
            smallImage {
              id
              url
            }
            name
            rarities {
              id
              provider
              rank
              score
            }
            suspiciousFlag
            nftContract {
              id
              standard
            }
            collection {
              id
              image {
                id
                url
              }
            }
          }
          type
          marketplace
          fromAddress
          toAddress
          transactionHash
          price {
            id
            value
          }
          orderStatus
          quantity
          url
          timestamp
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`},75814:(e,r,t)=>{t.d(r,{cS:()=>C,VJ:()=>b,YQ:()=>T});var s=t(21339),a=t(83798),n=t(66041),i=t(67903),o=t(22053),l=t(49680),d=t(17184),c=t(39491),g=t(59560),m=t(99123),p=t(33552),x=t(63111),h=t(32100);t(55377),t(56778);const u=()=>(0,s.jsx)(i.n,{className:"_2kdvfw1 rgw6ez14f rgw6ez1bf rgw6ez80p"}),w=()=>(0,s.jsx)(i.n,{className:"fbjar43 _2kdvfw1 rgw6ez18x rgw6ez81x"}),f=()=>(0,s.jsxs)(i.n,{as:"a",className:x.Yb,children:[(0,s.jsxs)(o.X2,{gap:"16",children:[(0,s.jsx)(u,{}),(0,s.jsx)(w,{})]}),(0,s.jsx)(o.X2,{children:(0,s.jsx)(w,{})}),(0,s.jsx)(o.X2,{display:{sm:"none",md:"flex"},children:(0,s.jsx)(w,{})}),(0,s.jsx)(o.X2,{display:{sm:"none",lg:"flex"},children:(0,s.jsx)(w,{})}),(0,s.jsx)(o.X2,{display:{sm:"none",xl:"flex"},children:(0,s.jsx)(w,{})})]}),z=({rowCount:e})=>(0,s.jsx)(s.Fragment,{children:[...Array(e)].map(((e,r)=>(0,s.jsx)(f,{},r)))}),j=()=>(0,s.jsxs)(o.sg,{marginTop:"36",children:[(0,s.jsx)(b,{}),(0,s.jsx)(z,{rowCount:10})]});var y;!function(e){e.Item="Item",e.Event="Event",e.Price="Price",e.By="By",e.To="To"}(y||(y={}));const v=p.default.div.withConfig({displayName:"Activity__FilterBox",componentId:"sc-1d0f5cfb-0"})`
  display: flex;
  color: ${({isActive:e,theme:r})=>r.neutral1};
  background: ${({isActive:e,theme:r})=>e?r.surface3:r.surface1};
  border: ${({isActive:e,theme:r})=>`1px solid ${r.surface3}`};
  ${a.cR};
`,b=()=>(0,s.jsxs)(i.n,{className:x.rG,children:[(0,s.jsx)(i.n,{children:y.Item}),(0,s.jsx)(i.n,{children:y.Event}),(0,s.jsx)(i.n,{display:{sm:"none",md:"block"},children:y.Price}),(0,s.jsx)(i.n,{display:{sm:"none",xl:"block"},children:y.By}),(0,s.jsx)(i.n,{display:{sm:"none",xxl:"block"},children:y.To})]}),k={[d.n$.Listing]:!0,[d.n$.Sale]:!0,[d.n$.Transfer]:!1,[d.n$.CancelListing]:!1},T=(e,r)=>({...e,[r.eventType]:!e[r.eventType]}),C=({contractAddress:e,rarityVerified:r,collectionName:t,chainId:a})=>{const[p,u]=(0,c.useReducer)(T,k),{nftActivity:w,hasNext:f,loadMore:y,loading:C}=(0,n.m)({activityTypes:Object.keys(p).map((e=>e)).filter((e=>p[e])),address:e},25),I=f&&w?.length,A=(0,l.cP)((e=>e.itemsInBag)),N=(0,l.cP)((e=>e.addAssetsToBag)),M=(0,l.cP)((e=>e.removeAssetsFromBag)),$=(0,l.cP)((e=>e.bagExpanded)),S=(0,l.cP)((e=>e.toggleBag)),F=(0,l.dD)(),E=(0,l.$N)(),P=(0,c.useCallback)((function({eventType:e}){const r=p[e];return(0,s.jsx)(v,{className:x.hX,isActive:r,onClick:()=>u({eventType:e}),children:e.charAt(0)+e.slice(1).toLowerCase()+"s"})}),[p]);return(0,s.jsxs)(i.n,{marginLeft:{sm:"16",md:"48"},children:[(0,s.jsxs)(o.X2,{gap:"8",paddingTop:{sm:"0",md:"16"},children:[(0,s.jsx)(P,{eventType:d.n$.Listing}),(0,s.jsx)(P,{eventType:d.n$.Sale}),(0,s.jsx)(P,{eventType:d.n$.Transfer})]}),C?(0,s.jsx)(j,{}):w&&(0,s.jsxs)(o.sg,{marginTop:"36",children:[(0,s.jsx)(b,{}),(0,s.jsx)(g.Z,{next:y,hasMore:!!f,loader:I?(0,s.jsx)(z,{rowCount:2}):null,dataLength:w?.length??0,style:{overflow:"unset"},children:w.map(((e,n)=>e.eventType&&(0,s.jsxs)(i.n,{as:m.rU,"data-testid":"nft-activity-row",to:`/nfts/asset/${e.collectionAddress}/${e.tokenId}?origin=activity`,className:x.Yb,children:[(0,s.jsx)(h.Et,{event:e,rarityVerified:r,collectionName:t,eventTimestamp:e.eventTimestamp,isMobile:F}),(0,s.jsx)(h.VM,{eventType:e.eventType,eventTimestamp:e.eventTimestamp,eventTransactionHash:e.transactionHash,price:e.price,isMobile:F}),(0,s.jsx)(h.Ic,{marketplace:e.marketplace,price:e.price}),(0,s.jsx)(h.UM,{address:e.fromAddress,chainId:a}),(0,s.jsx)(h.UM,{address:e.toAddress,chainId:a,desktopLBreakpoint:!0}),(0,s.jsx)(h.Dg,{event:e,collectionName:t,selectAsset:N,removeAsset:M,itemsInBag:A,cartExpanded:$,toggleCart:S,isMobile:F,ethPriceInUSD:E})]},n)))})]})]})}},32100:(e,r,t)=>{t.d(r,{UM:()=>I,Dg:()=>C,VM:()=>F,Et:()=>L,Ic:()=>N});var s=t(21339),a=t(88693),n=t(56542),i=t(82032),o=t(4570),l=t(57777),d=t(25093),c=t(67903),g=t(22053),m=t(41362),p=t(17184),x=t(27382),h=t(58556);var u=t(43365),w=t(39491),f=t(33552),z=t(10548),j=t(6970),y=t(19369),v=t(54359),b=t(63111);const k=(0,f.default)(z.dL).withConfig({displayName:"ActivityCells__AddressLink",componentId:"sc-e903fab3-0"})`
  color: ${({theme:e})=>e.neutral1};
  text-decoration: none;
  font-weight: 485;
  line-height: 20px;
  a {
    color: ${({theme:e})=>e.neutral1};
    text-decoration: none;
  }
  a:hover {
    color: ${({theme:e})=>e.neutral1};
    text-decoration: none;
    opacity: ${({theme:e})=>e.opacity.hover};
  }
  a:focus {
    color: ${({theme:e})=>e.neutral1};
    text-decoration: none;
    opacity: ${({theme:e})=>e.opacity.click};
  }
`,T=(e,r,t)=>{if(r)return t?(0,s.jsx)(a.cC,{id:"t/YqKh"}):(0,s.jsx)(a.cC,{id:"2RtVHm"});switch(e){case d.iF.Executed:return(0,s.jsx)(a.cC,{id:"s9KGXU"});case d.iF.Cancelled:return(0,s.jsx)(a.cC,{id:"vv7kpg"});case d.iF.Expired:return(0,s.jsx)(a.cC,{id:"M1RnFv"});case d.iF.Valid:return(0,s.jsx)(a.cC,{id:"jqzUyM"});default:return null}},C=({event:e,collectionName:r,selectAsset:t,removeAsset:a,itemsInBag:i,cartExpanded:l,toggleCart:m,isMobile:p,ethPriceInUSD:x})=>{const u=(0,w.useMemo)((()=>((e,r,t)=>{const s=e.price?parseFloat(e.price)*t:"0",a=e.price?(0,h.parseEther)(e.price):"";return{address:e.collectionAddress,collectionName:r,imageUrl:e.tokenMetadata?.imageUrl,marketplace:e.marketplace,name:e.tokenMetadata?.name,tokenId:e.tokenId,susFlag:e.tokenMetadata?.suspiciousFlag,smallImageUrl:e.tokenMetadata?.smallImageUrl,collectionSymbol:e.symbol,priceInfo:{USDPrice:s,ETHPrice:a,basePrice:a,baseAsset:"ETH"},tokenType:e.tokenMetadata?.standard}})(e,r,x)),[e,r,x]),f=(0,w.useMemo)((()=>i.some((e=>u.tokenId===e.asset.tokenId&&u.address===e.asset.address))),[u,i]),z=((e,r)=>{if(!r||!e)return!1;const t=Object.keys(d.Wf).map((e=>e.toLowerCase())),s=e===d.iF.Valid,a=t.includes(r.toLowerCase());return s&&a})(e.orderStatus,e.marketplace),j=(0,o.oO)({page:n.yJ.NFT_COLLECTION_PAGE}),y={collection_address:u.address,token_id:u.tokenId,token_type:u.tokenType,...j};return(0,s.jsx)(g.sg,{display:{sm:"none",lg:"flex"},height:"full",justifyContent:"center",marginX:"auto",children:e.eventType===d.y3.Listing&&e.orderStatus?(0,s.jsx)(c.n,{as:"button",className:z&&f?b.rZ:b.gS,onClick:e=>{e.preventDefault(),f?a([u]):t([u]),!f&&!l&&!p&&m(),!f&&(0,o._P)(n.Yz.NFT_BUY_ADDED,{eventProperties:y})},disabled:!z,children:T(e.orderStatus,z,f)}):"-"})},I=({address:e,desktopLBreakpoint:r,chainId:t})=>(0,s.jsx)(g.sg,{display:{sm:"none",xl:r?"none":"flex",xxl:"flex"},className:b.R_,children:(0,s.jsx)(k,{href:(0,v.E)(t??i.ChainId.MAINNET,e??"",v.r.ADDRESS),style:{textDecoration:"none"},children:(0,s.jsx)(c.n,{onClick:e=>e.stopPropagation(),children:e?(0,j.Xn)(e,2):"-"})})}),A=({price:e})=>(0,s.jsx)(l.ud,{text:(0,s.jsx)(c.n,{textAlign:"left",fontSize:"14",fontWeight:"book",color:"neutral2",children:`${e} ETH`}),placement:"top",children:(0,s.jsx)(c.n,{children:`${e.substring(0,5)}... ETH`})}),N=({marketplace:e,price:r})=>{const{formatNumberOrString:t}=(0,y.Gb)(),a=(0,w.useMemo)((()=>r?t({input:parseFloat(r?.toString()),type:y.sw.NFTToken}):null),[t,r]);return(0,s.jsxs)(g.X2,{display:{sm:"none",md:"flex"},gap:"8",children:[e&&(0,x.Dp)(e,"16"),a?a.length>6?(0,s.jsx)(A,{price:a}):(0,s.jsx)(s.Fragment,{children:`${a} ETH`}):(0,s.jsx)(s.Fragment,{children:"-"})]})},M=e=>{switch(e){case d.y3.Listing:return(0,s.jsx)(m.TV,{width:16,height:16});case d.y3.Sale:return(0,s.jsx)(m.QF,{width:16,height:16});case d.y3.Transfer:return(0,s.jsx)(m.dj,{width:16,height:16});case d.y3.CancelListing:return(0,s.jsx)(m.Io,{width:16,height:16});default:return null}},$=({transactionHash:e})=>(0,s.jsx)(g.X2,{onClick:r=>((e,r)=>{e.preventDefault(),window.open(`https://etherscan.io/tx/${r}`,"_blank","noopener,noreferrer")})(r,e),marginLeft:"4",children:(0,s.jsx)(m.Bu,{})}),S=e=>({[d.y3.Listing]:"deprecated_gold",[d.y3.Sale]:"success",[d.y3.Transfer]:"deprecated_violet",[d.y3.CancelListing]:"critical"}[e]),F=({eventType:e,eventTimestamp:r,eventTransactionHash:t,eventOnly:a,price:n,isMobile:i})=>{const{formatNumberOrString:o}=(0,y.Gb)(),l=(0,w.useMemo)((()=>n?o({input:parseFloat(n?.toString()),type:y.sw.NFTToken}):null),[o,n]);return(0,s.jsxs)(g.sg,{height:"full",justifyContent:"center",gap:"4",children:[(0,s.jsxs)(g.X2,{className:b.Co,color:S(e),children:[M(e),p.ze[e]]}),r&&!i&&!a&&(0,s.jsxs)(g.X2,{className:b.fb,children:[(0,u.F)(r.toString()),t&&(0,s.jsx)($,{transactionHash:t})]}),i&&n&&(0,s.jsx)(g.X2,{fontSize:"16",fontWeight:"book",color:"neutral1",children:`${l} ETH`})]})},E=()=>(0,s.jsx)(c.n,{position:"relative",style:{background:"#24272e"},className:b.xr,children:(0,s.jsxs)(c.n,{position:"absolute",textAlign:"center",left:"1/2",top:"1/2",style:{transform:"translate3d(-50%, -50%, 0)"},color:"gray500",fontSize:"12",fontWeight:"book",children:["Image",(0,s.jsx)("br",{}),"not",(0,s.jsx)("br",{}),"available"]})}),P=({rarity:e,collectionName:r,rarityVerified:t})=>{const{formatNumber:a}=(0,y.Gb)(),n=e.rank||e.providers?.[0].rank;return n?(0,s.jsx)(c.n,{children:(0,s.jsx)(l.ud,{text:(0,s.jsxs)(g.X2,{children:[(0,s.jsx)(c.n,{display:"flex",marginRight:"4",children:(0,s.jsx)("img",{src:"/nft/svgs/gem.svg",alt:"cardLogo",width:16})}),(0,s.jsx)(c.n,{width:"full",fontSize:"14",children:t?`Verified by ${r}`:"Ranking by Rarity Sniper"})]}),placement:"top",children:(0,s.jsxs)(c.n,{className:b.FC,children:[(0,s.jsx)(c.n,{paddingTop:"2",paddingBottom:"2",display:"flex",children:a({input:n,type:y.sw.WholeNumber})}),(0,s.jsx)(c.n,{display:"flex",height:"16",children:t?(0,s.jsx)(m.w,{}):null})]})})}):null},_=e=>e?.smallImageUrl||e?.imageUrl,L=({event:e,rarityVerified:r,collectionName:t,eventTimestamp:a,isMobile:n})=>{const[i,o]=(0,w.useState)(!1),[l,d]=(0,w.useState)(!_(e.tokenMetadata));return(0,s.jsxs)(g.X2,{gap:"16",overflow:"hidden",whiteSpace:"nowrap",children:[l?(0,s.jsx)(E,{}):(0,s.jsx)(c.n,{as:"img",alt:e.tokenMetadata?.name||e.tokenId,src:_(e.tokenMetadata),draggable:!1,className:b.xr,style:{background:i?"none":"#24272e"},onLoad:()=>o(!0),onError:()=>d(!0)}),(0,s.jsxs)(g.sg,{height:"full",justifyContent:"center",overflow:"hidden",whiteSpace:"nowrap",marginRight:"24",children:[(0,s.jsx)(c.n,{className:b.oj,children:e.tokenMetadata?.name||e.tokenId}),e.tokenMetadata?.rarity&&!n&&(0,s.jsx)(P,{rarity:e.tokenMetadata?.rarity,rarityVerified:r,collectionName:t}),n&&a&&(0,u.F)(a.toString())]})]})}},43365:(e,r,t)=>{t.d(r,{F:()=>s});const s=e=>{const r=parseFloat(e),t=(new Date).getTime()-r,s=Math.floor(t/864e5),a=Math.floor(t%864e5/36e5),n=Math.floor(t%36e5/6e4);return s>0?`${s} day${s>1?"s":""} ago`:a>0?`${a} hour${a>1?"s":""} ago`:n>1?`${n} minutes ago`:"Just now"}}}]);
//# sourceMappingURL=5814.2446a835.chunk.js.map