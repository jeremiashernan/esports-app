import { Global } from '@emotion/react'
import '@fortawesome/fontawesome-svg-core/styles.css'
import tw, { css, GlobalStyles as BaseStyles } from 'twin.macro'

const customStyles = css`
  body {
    ${tw`bg-pugb-gray-0 font-lato text-pugb-gray-800 antialiased`}
  }
  .swiper-slide-height {
    ${tw`h-auto`}
  }
  .ot-floating-button {
    ${tw`hidden`}
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles
