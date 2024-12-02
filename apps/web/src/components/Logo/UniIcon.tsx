import styled from 'styled-components'

import HolidayUniIcon from './HolidayUniIcon'

// ESLint reports `fill` is missing, whereas it exists on an SVGProps type
export type SVGProps = React.SVGProps<SVGSVGElement> & {
  fill?: string
  height?: string | number
  width?: string | number
  gradientId?: string
}

export const UniIcon = (props: SVGProps) => (
  <Container>
    {/* {HolidayUniIcon(props) !== null ? (
      <HolidayUniIcon {...props} />
    ) : ( */}
      <img
        style={{ height: '48px' }}
        src="https://www.gitbook.com/cdn-cgi/image/width=36,dpr=2,height=36,fit=contain,format=auto/https%3A%2F%2F392968050-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FU9KQwlaukn1dfbnioFrY%252Ficon%252FlNjC29WrDNTbI9tcI5Wz%252FGOB.png%3Falt%3Dmedia%26token%3D437ec1e4-7bde-4307-b9a7-a08fdbd80f10"
      />
    {/* )} */}
  </Container>
)

const Container = styled.div`
  position: relative;
`
