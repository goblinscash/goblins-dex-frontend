"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[8174],{88174:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Z});var i=n(21339),d=n(88693),r=n(56542),o=n(75422),a=n(4570),s=n(96305),l=n(68858),c=n(44595),p=n.n(c),u=n(39491),h=n(2996),m=n(99123),x=n(9726),g=n(33552),f=n(10548),j=n(70357),w=n(32345),v=n(65023),y=n(34896),A=n(70359),k=n(17358),C=n(73474),T=n(12159),_=n(59926),b=n(65850),R=n(61265),I=n(94653),B=n(51278),N=n(82032),S=n(27628),E=n(15977),F=n(14844),D=n(46778);const M=new I.vU(B.Mt),W={1:[{tokens:[D.Fl[N.ChainId.MAINNET],D.h1],stakingRewardAddress:"0xa1484C3aa22a66C62b77E0AE78E15258bd0cB711"},{tokens:[D.Fl[N.ChainId.MAINNET],D.Hz],stakingRewardAddress:"0x7FBa4B8Dc5E7616e59622806932DBea72537A56b"},{tokens:[D.Fl[N.ChainId.MAINNET],D.AA],stakingRewardAddress:"0x6C3e4cb2E96B01F4b866965A91ed4437839A121a"},{tokens:[D.Fl[N.ChainId.MAINNET],D.ML],stakingRewardAddress:"0xCA35e32e7926b96A9988f61d510E038108d8068e"}]};var q=n(59251);const P=(0,g.default)(v.Tz).withConfig({displayName:"v2__PageWrapper",componentId:"sc-b65d1834-0"})`
  max-width: 640px;
  width: 100%;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    padding: 0px 8px;
  `};
`,z=(0,g.default)(y.I8).withConfig({displayName:"v2__LPFeeExplainer",componentId:"sc-b65d1834-1"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #27ae60 0%, #000000 100%);
  margin: 0 0 16px 0;
  overflow: hidden;
`,L=(0,g.default)(k.m0).withConfig({displayName:"v2__TitleRow",componentId:"sc-b65d1834-2"})`
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    flex-wrap: wrap;
    gap: 12px;
    width: 100%;
    flex-direction: column-reverse;
  `};
`,U=(0,g.default)(k.DA).withConfig({displayName:"v2__ButtonRow",componentId:"sc-b65d1834-3"})`
  gap: 8px;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    width: 100%;
    flex-direction: row-reverse;
    justify-content: space-between;
  `};
`,H=(0,g.default)(j.DF).withConfig({displayName:"v2__ResponsiveButtonPrimary",componentId:"sc-b65d1834-4"})`
  height: 40px;
  width: fit-content;
  border-radius: 12px;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    width: 48%;
  `};
`,Y=(0,g.default)(j.PL).withConfig({displayName:"v2__ResponsiveButtonSecondary",componentId:"sc-b65d1834-5"})`
  height: 40px;
  width: fit-content;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    width: 48%;
  `};
`,O=g.default.div.withConfig({displayName:"v2__EmptyProposals",componentId:"sc-b65d1834-6"})`
  border: 1px solid ${({theme:e})=>e.neutral2};
  padding: 16px 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,$=(0,g.default)(f.Tv.H1Small).withConfig({displayName:"v2__Header",componentId:"sc-b65d1834-7"})`
  margin-top: 8px;
  justify-self: flex-start;
  font-weight: 535;
`;function Z(){const e=(0,g.useTheme)(),{account:t}=(0,o.useWeb3React)(),n=(0,l.G)();let c=(0,q.B3)();n||(c=[]);const I=(0,u.useMemo)((()=>c.map((e=>({liquidityToken:(0,q.Ce)(e),tokens:e})))),[c]),B=(0,u.useMemo)((()=>I.map((e=>e.liquidityToken))),[I]),[Z,G]=(0,R.v2)(t??void 0,B),J=(0,u.useMemo)((()=>I.filter((({liquidityToken:e})=>Z[e.address]?.greaterThan("0")))),[I,Z]),V=(0,b.OY)(J.map((({tokens:e})=>e))),Q=G||V?.length<J.length||V?.some((e=>!e)),K=V.map((([,e])=>e)).filter((e=>Boolean(e))),X=function(e){const{chainId:t,account:n}=(0,o.useWeb3React)(),i=(0,E.Z)(),d=(0,u.useMemo)((()=>t?W[t]?.filter((t=>void 0===e||null!==e&&e.involvesToken(t.tokens[0])&&e.involvesToken(t.tokens[1])))??[]:[]),[t,e]),r=t?D.yg[t]:void 0,a=(0,u.useMemo)((()=>d.map((({stakingRewardAddress:e})=>e))),[d]),s=(0,u.useMemo)((()=>[n??void 0]),[n]),l=(0,F._Y)(a,M,"balanceOf",s),c=(0,F._Y)(a,M,"earned",s),h=(0,F._Y)(a,M,"totalSupply"),m=(0,F._Y)(a,M,"rewardRate",void 0,F.DB),x=(0,F._Y)(a,M,"periodFinish",void 0,F.DB);return(0,u.useMemo)((()=>t&&r?a.reduce(((e,t,n)=>{const o=l[n],a=c[n],s=h[n],u=m[n],g=x[n];if(!o?.loading&&!a?.loading&&s&&!s.loading&&u&&!u.loading&&g&&!g.loading){if(o?.error||a?.error||s.error||u.error||g.error)return console.error("Failed to load staking rewards info"),e;const l=d[n].tokens,c=new S.Pair(N.CurrencyAmount.fromRawAmount(l[0],"0"),N.CurrencyAmount.fromRawAmount(l[1],"0")),h=N.CurrencyAmount.fromRawAmount(c.liquidityToken,p().BigInt(o?.result?.[0]??0)),m=N.CurrencyAmount.fromRawAmount(c.liquidityToken,p().BigInt(s.result?.[0])),x=N.CurrencyAmount.fromRawAmount(r,p().BigInt(u.result?.[0])),f=(e,t,n)=>N.CurrencyAmount.fromRawAmount(r,p().greaterThan(t.quotient,p().BigInt(0))?p().divide(p().multiply(n.quotient,e.quotient),t.quotient):p().BigInt(0)),j=f(h,m,x),w=g.result?.[0]?.toNumber(),v=1e3*w,y=!w||!i||w>i.toNumber();e.push({stakingRewardAddress:t,tokens:d[n].tokens,periodFinish:v>0?new Date(v):void 0,earnedAmount:N.CurrencyAmount.fromRawAmount(r,p().BigInt(a?.result?.[0]??0)),rewardRate:j,totalRewardRate:x,stakedAmount:h,totalStakedAmount:m,getHypotheticalRewardRate:f,active:y})}return e}),[]):[]),[l,t,i,c,d,x,m,a,h,r])}(),ee=X?.filter((e=>p().greaterThan(e.stakedAmount.quotient,_.iV))),te=(0,b.OY)(ee?.map((e=>e.tokens))),ne=K.filter((e=>0===te?.map((e=>e[1])).filter((t=>t?.liquidityToken.address===e.liquidityToken.address)).length));return(0,i.jsx)(a.fM,{page:r.yJ.POOL_PAGE,shouldLogImpression:!0,children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(P,{children:[(0,i.jsxs)(z,{children:[(0,i.jsx)(y.sq,{}),(0,i.jsx)(y.RF,{}),(0,i.jsx)(y.uO,{children:(0,i.jsxs)(v.Tz,{gap:"md",children:[(0,i.jsx)(k.m0,{children:(0,i.jsx)(f.Tv.DeprecatedWhite,{fontWeight:535,children:(0,i.jsx)(d.cC,{id:"Vsr1yC"})})}),(0,i.jsx)(k.m0,{children:(0,i.jsx)(f.Tv.DeprecatedWhite,{fontSize:14,children:(0,i.jsx)(d.cC,{id:"vRS32S"})})}),(0,i.jsx)(f.dL,{style:{color:e.white,textDecoration:"underline"},target:"_blank",href:"https://docs.uniswap.org/contracts/v2/concepts/core-concepts/pools",children:(0,i.jsx)(f.Tv.DeprecatedWhite,{fontSize:14,children:(0,i.jsx)(d.cC,{id:"7bNFf2"})})})]})}),(0,i.jsx)(y.sq,{}),(0,i.jsx)(y.RF,{})]}),n?(0,i.jsx)(v.Tz,{gap:"lg",justify:"center",children:(0,i.jsxs)(v.Tz,{gap:"md",style:{width:"100%"},children:[(0,i.jsxs)(L,{style:{marginTop:"1rem"},padding:"0",children:[(0,i.jsx)(f.Pw,{children:(0,i.jsx)($,{children:(0,i.jsx)(d.cC,{id:"MbHgIE"})})}),(0,i.jsxs)(U,{children:[(0,i.jsx)(Y,{as:m.rU,padding:"6px 8px",to:"/add/v2/ETH",children:(0,i.jsx)(d.cC,{id:"ma87bD"})}),(0,i.jsx)(H,{id:"find-pool-button",as:m.rU,to:"/pools/v2/find",padding:"6px 8px",children:(0,i.jsx)(x.xv,{fontWeight:535,fontSize:16,children:(0,i.jsx)(d.cC,{id:"SkceS7"})})}),(0,i.jsx)(H,{id:"join-pool-button",as:m.rU,to:"/add/v2/ETH",padding:"6px 8px",children:(0,i.jsx)(x.xv,{fontWeight:535,fontSize:16,children:(0,i.jsx)(d.cC,{id:"knGjuL"})})})]})]}),t?Q?(0,i.jsx)(O,{children:(0,i.jsx)(f.Tv.DeprecatedBody,{color:e.neutral3,textAlign:"center",children:(0,i.jsx)(C.bb,{children:(0,i.jsx)(d.cC,{id:"yQE2r9"})})})}):K?.length>0||te?.length>0?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(j.PL,{children:(0,i.jsx)(k.m0,{children:(0,i.jsx)(d.cC,{id:"vAuUUB",components:{0:(0,i.jsx)(f.dL,{href:"https://v2.info.uniswap.org/account/"+t}),1:(0,i.jsx)("span",{})}})})}),ne.map((e=>(0,i.jsx)(A.ZP,{pair:e},e.liquidityToken.address))),te.map(((e,t)=>e[1]&&(0,i.jsx)(A.ZP,{pair:e[1],stakedBalance:ee[t].stakedAmount},ee[t].stakingRewardAddress))),(0,i.jsx)(k.DA,{justify:"center",style:{width:"100%"},children:(0,i.jsxs)(j.JU,{as:m.rU,to:"/migrate/v2",id:"import-pool-link",style:{padding:"8px 16px",margin:"0 4px",borderRadius:"12px",width:"fit-content",fontSize:"14px"},children:[(0,i.jsx)(h.Z,{size:16,style:{marginRight:"8px"}}),(0,i.jsx)(d.cC,{id:"kBAezW"})]})})]}):(0,i.jsx)(O,{children:(0,i.jsx)(f.Tv.DeprecatedBody,{color:e.neutral3,textAlign:"center",children:(0,i.jsx)(d.cC,{id:"erwMRf"})})}):(0,i.jsx)(w.ZP,{padding:"40px",children:(0,i.jsx)(f.Tv.DeprecatedBody,{color:e.neutral3,textAlign:"center",children:(0,i.jsx)(d.cC,{id:"jWRT4F"})})})]})}):(0,i.jsx)(s.A,{})]}),(0,i.jsx)(T.c,{})]})})}}}]);
//# sourceMappingURL=8174.9ddbdfb4.chunk.js.map