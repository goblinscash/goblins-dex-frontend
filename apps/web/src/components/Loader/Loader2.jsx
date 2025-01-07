import React from 'react'
import styled, { keyframes } from 'styled-components'

const Loader2 = () => {
  return (
    <>
     <Loader className="">
      <div className="">
      <img src="https://www.gitbook.com/cdn-cgi/image/width=36,dpr=2,height=36,fit=contain,format=auto/https%3A%2F%2F392968050-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FU9KQwlaukn1dfbnioFrY%252Ficon%252FlNjC29WrDNTbI9tcI5Wz%252FGOB.png%3Falt%3Dmedia%26token%3D437ec1e4-7bde-4307-b9a7-a08fdbd80f10" alt="" className="img-fluid" />
      <p className="">Please do not refresh while loading...</p>
      </div>
     </Loader>
    </>
  )
}
const scaleAnimation = keyframes`
  0% {
    transform: scale(1); /* Original size */
  }
  50% {
    transform: scale(1.2); /* Scaled up */
  }
  100% {
    transform: scale(1); /* Back to original size */
  }
`;

const Loader = styled.div`
  position: fixed;
  z-index: 99999;
  height: 100%;
  width: 100%;
  top: 0;
  left :0;
  background: #000000a1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px;
  img {
  animation: ${scaleAnimation} 2s infinite; 
  }
  p{
  display: block;
   margin: 0;
  }
`

export default Loader2