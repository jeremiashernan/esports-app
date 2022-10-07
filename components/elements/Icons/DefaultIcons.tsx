type WidthHeightProps = {
  width?: number
  height?: number
}

export const ArrowLeft = () => (
  <svg width={40} height={23} viewBox="0 0 40 23">
    <path d="M11.55 23L13.8765 20.6836L6.3195 13.1429H40V9.85714H6.3195L13.893 2.31643L11.55 0L0 11.5L11.55 23Z" />
  </svg>
)

export const ArrowRight = ({ width = 40, height = 23 }: WidthHeightProps) => (
  <svg width={width} height={height} viewBox="0 0 40 23">
    <path d="M28.45 23L26.1235 20.6836L33.6805 13.1429H0V9.85714H33.6805L26.107 2.31643L28.45 0L40 11.5L28.45 23Z" />
  </svg>
)

export const ArrowLongRight = () => (
  <svg width={22} height={12} viewBox="0 0 22 12">
    <path d="M0.652344 5.44506V7.47106H16.0799V11.9916L21.2053 6.45806L16.0799 0.924561V5.44506H0.652344Z" />
  </svg>
)

export const ArrowSubscribeIcon = () => (
  <svg viewBox="0 0 103 78">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M47.0595 0L103.864 0V78H21.8242L47.0595 0Z"
    />
    <path
      d="M65.1419 52L62.6131 49.4821L70.8273 41.2857H0.218025V37.7143H70.8273L62.5952 29.5179L65.1419 27L77.6963 39.5L65.1419 52Z"
      fill="#fff"
    />
  </svg>
)

export const ExternalIcon = () => (
  <svg width={10} height={10} viewBox="0 0 10 10" fill="none">
    <path
      d="M10 6.667H8.667V2.273L.94 10 0 9.06l7.727-7.727H3.333V0H10v6.667z"
      fill="#969699"
    />
  </svg>
)

export const HamburgerIcon = () => (
  <svg width="29" height="22" viewBox="0 0 29 22">
    <rect width="29" height="2" />
    <rect y="10" width="29" height="2" />
    <rect y="20" width="29" height="2" />
  </svg>
)

export const HamburgerCloseIcon = () => (
  <svg
    width="43"
    height="42"
    viewBox="0 0 43 42"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="11.9541"
      y="10.0399"
      width="29"
      height="2"
      transform="rotate(45 11.9541 10.0399)"
    />
    <rect
      x="32.46"
      y="11.454"
      width="29"
      height="2"
      transform="rotate(135 32.46 11.454)"
    />
  </svg>
)

export const LiveIcon = () => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none">
    <circle
      opacity={0.363}
      cx={8}
      cy={8}
      r={7}
      fill="url(#prefix__paint0_radial)"
      fillOpacity={0.4}
      stroke="#01F46B"
      strokeWidth={0.5}
    />
    <circle cx={8} cy={8} r={3} fill="#01F46B" />
    <defs>
      <radialGradient
        id="prefix__paint0_radial"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0 11.6626 -12.0683 0 8 8)"
      >
        <stop stopColor="#01F46B" stopOpacity={0.01} />
        <stop offset={1} stopColor="#01F46B" />
      </radialGradient>
    </defs>
  </svg>
)

export const LogoIcon = ({ fill = '#fff' }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 181 37" fill={fill}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M58.887 6.346c.242.242.378.57.378.912v6.174a.322.322 0 01-.323.323h-3.844a.323.323 0 01-.323-.323V9.288a.323.323 0 00-.322-.323h-1.815a.323.323 0 00-.323.323v18.33c0 .178.144.322.323.322h1.815a.322.322 0 00.322-.322v-6.924h-.907a.323.323 0 01-.323-.322v-3.838c0-.178.145-.322.323-.322h5.075c.178 0 .322.144.322.322v13.113c0 .342-.136.67-.378.912l-1.489 1.486a1.29 1.29 0 01-.912.378h-5.882c-.342 0-.67-.136-.913-.378l-1.488-1.486a1.289 1.289 0 01-.378-.911V7.258c0-.342.136-.67.378-.912L49.69 4.86c.242-.242.571-.377.914-.377h5.88c.343 0 .672.135.914.377l1.488 1.486zm-13.901 0c.242.242.378.57.378.912v8.42c0 .341-.136.67-.378.91l-1.867 1.865 1.867 1.864c.242.242.378.57.378.911v8.42c0 .341-.136.67-.378.911l-1.489 1.486c-.242.242-.57.378-.913.378h-8.338a.323.323 0 01-.323-.323V20.694h-.292a.323.323 0 01-.322-.322v-3.838c0-.178.144-.322.322-.322h.292V4.805c0-.178.145-.322.323-.322h8.338c.343 0 .671.135.913.377l1.489 1.486zM31.14 4.483c.178 0 .323.144.323.322v24.842c0 .343-.136.67-.379.912l-1.488 1.486c-.242.242-.57.378-.913.378h-5.88c-.343 0-.672-.136-.914-.378L20.4 30.56a1.288 1.288 0 01-.379-.912V4.805c0-.178.145-.322.323-.322h3.844c.179 0 .323.144.323.322v22.813c0 .178.145.322.323.322h1.815a.323.323 0 00.323-.322V4.805c0-.178.145-.322.323-.322h3.844zM17.183 6.347c.242.241.379.569.379.911v10.66c0 .343-.137.67-.379.913l-1.488 1.486c-.242.242-.57.377-.913.377H10.61V32.1a.322.322 0 01-.323.323H6.444a.322.322 0 01-.323-.323V20.694h-.292a.323.323 0 01-.323-.322v-3.838c0-.178.145-.322.323-.322h.292V4.805c0-.178.144-.322.323-.322h8.338c.342 0 .67.136.913.377l1.488 1.486zm48.212 8.093V7.703a.323.323 0 00-.323-.322h-1.317V.322A.323.323 0 0063.432 0H1.962a.323.323 0 00-.322.322v7.059H.323A.323.323 0 000 7.703v6.804c0 .178.145.323.323.323H1.64v7.313H.323a.323.323 0 00-.323.323v6.736c0 .178.145.323.323.323H1.64v7.058c0 .178.145.323.323.323h61.47a.323.323 0 00.322-.323v-7.058h1.317a.323.323 0 00.323-.323v-6.736a.323.323 0 00-.323-.323h-1.317v-7.38h1.317a.323.323 0 00.323-.323zM10.611 8.965h2.138c.178 0 .323.145.323.323v6.601a.323.323 0 01-.323.323H10.61V8.965zm27.802 0h2.139c.178 0 .322.145.322.323v6.601a.323.323 0 01-.322.323h-2.139V8.965zm2.461 18.653v-6.601a.323.323 0 00-.322-.323h-2.139v7.246h2.139a.322.322 0 00.322-.322zm82.663-17.28h4.05c.067 0 .138.032.138.135v15.953c0 .07-.071.142-.138.142h-4.05c-.102 0-.138-.072-.138-.142V10.473c0-.103.036-.135.138-.135zm-.83 20.27h5.675c2.179 0 3.667-1.484 3.667-3.662V9.921c0-2.14-1.488-3.624-3.667-3.624h-5.675c-2.145 0-3.634 1.484-3.634 3.624v17.025c0 2.178 1.489 3.663 3.634 3.663zM88.214 16.102l6.992 6.907.035.052c.055.078.103.146.103.263v3.103c0 .07-.07.141-.138.141h-4.05c-.102 0-.138-.07-.138-.141V23.18h-4.326v3.765c0 2.178 1.455 3.662 3.634 3.662H96c2.179 0 3.667-1.484 3.667-3.662v-3.244c0-1.484-.553-2.66-1.522-3.63l-6.99-6.907c-.102-.103-.138-.167-.138-.308v-2.384c0-.103.036-.135.138-.135h4.05c.067 0 .138.033.138.135v3.213h4.325V9.92c0-2.14-1.49-3.624-3.668-3.624h-5.675c-2.179 0-3.634 1.484-3.634 3.624v2.557c0 1.484.52 2.66 1.522 3.623zM72.481 6.368v24.17h11.246v-3.97h-6.92v-6.702h5.19V16.07h-5.19v-5.73h6.92V6.367H72.481zm39.027 3.97h-4.186v6.798h4.186c.071 0 .139-.032.139-.135v-6.528c0-.103-.068-.135-.139-.135zm.797 10.775h-4.983v9.425h-4.324V6.368h9.307c2.181 0 3.668 1.484 3.668 3.623v7.492c0 2.145-1.454 3.63-3.668 3.63zm27.408-3.977h4.186c.071 0 .138-.032.138-.135v-6.528c0-.103-.067-.135-.138-.135h-4.186v6.798zm4.463 13.402l-2.456-9.425h-2.007v9.425h-4.324V6.368h9.307c2.181 0 3.667 1.484 3.667 3.623v7.492c0 1.76-.968 3.077-2.56 3.488l2.907 9.567h-4.534zm15.691 0v-20.2h4.326v-3.97h-12.976v3.97h4.324v20.2h4.326zm15.692-7.53l-6.988-6.907c-1.004-.963-1.522-2.14-1.522-3.623V9.92c0-2.14 1.451-3.624 3.632-3.624h5.675c2.181 0 3.668 1.484 3.668 3.624v3.765h-4.327v-3.213c0-.103-.067-.135-.138-.135h-4.048c-.104 0-.138.033-.138.135v2.384c0 .141.034.205.138.308l6.99 6.907c.969.97 1.523 2.146 1.523 3.63v3.244c0 2.178-1.487 3.662-3.668 3.662h-5.675c-2.181 0-3.632-1.484-3.632-3.662v-3.765h4.324v3.245c0 .07.034.141.138.141h4.048c.071 0 .138-.07.138-.141v-3.103c0-.121-.049-.19-.108-.273l-.016-.023-.014-.02z"
      />
    </svg>
  )
}

export const WarningIcon = () => (
  <svg width="43" height="38" viewBox="0 0 43 38" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M41.0405 36.8544C40.4042 37.4173 39.6456 37.6987 38.7646 37.6987H3.52401C2.643 37.6987 1.88435 37.4173 1.24806 36.8544C0.611771 36.2916 0.22021 35.6063 0.0733747 34.7987C-0.0734609 33.9912 0.0489025 33.1958 0.440464 32.4127L18.0607 1.87087C18.5012 1.08774 19.1253 0.561583 19.9329 0.292384C20.7405 0.0231849 21.5481 0.0231849 22.3557 0.292384C23.1633 0.561583 23.7873 1.08774 24.2278 1.87087L41.8481 32.4127C42.2397 33.1958 42.362 33.9912 42.2152 34.7987C42.0684 35.6063 41.6768 36.2916 41.0405 36.8544ZM4.25819 34.1747H38.0304C38.1772 34.1747 38.2996 34.1013 38.3975 33.9544C38.4954 33.8076 38.4954 33.6608 38.3975 33.5139L21.5114 4.29365C21.4135 4.14682 21.2911 4.0734 21.1443 4.0734C20.9974 4.0734 20.8751 4.14682 20.7772 4.29365L3.8911 33.5139C3.79321 33.6608 3.79321 33.8076 3.8911 33.9544C3.98899 34.1013 4.11135 34.1747 4.25819 34.1747ZM22.6861 24.1899C22.8818 24.1899 23.0654 24.1042 23.2367 23.9329C23.408 23.7616 23.5181 23.5781 23.5671 23.3823L24.0076 15.1595C24.0565 14.9148 23.9831 14.6945 23.7873 14.4987C23.5915 14.3029 23.3713 14.2051 23.1266 14.2051H19.162C18.9173 14.2051 18.697 14.3029 18.5012 14.4987C18.3055 14.6945 18.232 14.9148 18.281 15.1595L18.7215 23.3823C18.7704 23.5781 18.8806 23.7616 19.0519 23.9329C19.2232 24.1042 19.4067 24.1899 19.6025 24.1899H22.6861ZM23.3101 30.4671C22.6983 31.0789 21.9763 31.3848 21.1443 31.3848C20.3122 31.3848 19.5903 31.0789 18.9785 30.4671C18.3666 29.8553 18.0607 29.1333 18.0607 28.3013C18.0607 27.4692 18.3666 26.7473 18.9785 26.1354C19.5903 25.5236 20.3122 25.2177 21.1443 25.2177C21.9763 25.2177 22.6983 25.5236 23.3101 26.1354C23.9219 26.7473 24.2278 27.4692 24.2278 28.3013C24.2278 29.1333 23.9219 29.8553 23.3101 30.4671Z"
      fill="white"
    />
  </svg>
)

export const esrbRatingIconDataUrl =
  "data:image/svg+xml,%3Csvg id='EsrbRatingIcon' xmlns='http://www.w3.org/2000/svg' width='215' height='300'%3E%3Cpolygon fill='%23fff' points='210.416,2.128 2.261,2.128 2.261,297.895 211.94,297.895 211.94,2.128' /%3E%3Crect x='7.74' y='7.701' width='198.754' height='284.753' /%3E%3Crect x='18.236' y='54.591' fill='%23fff' width='177.625' height='176.642' /%3E%3Cpath d='M212.7,0H0v300h214.2V0H212.7z M211.1,297.1H3.1V2.9h208.1V297.1z' /%3E%3Cpath fill='%23fff' d='M27.3,248.8c-0,0.3-0.1,0.6-0.1,0.9c-0.2,2.9-1.2,5.1-4.6,5.1c-5.1,0-5.4-3.1-5.4-7.3v-2.3c0.1-4,0.5-7,5.4-7c2.7,0,4.3,1.4,4.5,4.1c0,0.4,0.1,0.8,0.1,1.2h-3c-0.1-1-0-2.9-1.5-2.9c-2.4,0-2.2,2.8-2.2,4v4.4c0,1.3,0.1,3.4,2.2,3.4c1.7,0,1.5-2.6,1.5-3.6H27.3z' /%3E%3Cpath fill='%23fff' d='M29.6,245.2c0.1-4,0.5-7,5.4-7s5.2,3,5.4,7v2.3c0,4.2-0.3,7.3-5.4,7.3c-5,0-5.4-3.1-5.4-7.3V245.2z M32.7,249c0,1.3,0.1,3.4,2.2,3.4c2.2,0,2.2-2.2,2.2-3.7v-4c0-1.3,0.1-4.1-2.2-4.1c-2.4,0-2.2,2.8-2.2,4V249z' /%3E%3Cpath fill='%23fff' d='M50.5,238.6h3.1v15.8h-3.2l-2.4-5.6c-0.8-1.9-1.5-3.8-2.2-6.3h-0c0.1,1.3,0.2,2.9,0.3,4.5c0.1,1.6,0.1,3.1,0.1,4.4v3h-3.1v-15.8h3.2l2.4,5.8c0.8,1.8,1.5,3.7,2.2,6.3h0c-0.1-1.4-0.2-3-0.3-4.5c-0.1-1.5-0.2-3-0.2-4.4V238.6z' /%3E%3Cpolygon fill='%23fff' points='55.431,238.605 65.666,238.605 65.666,240.929 62.099,240.929 62.099,254.404 59.016,254.404 59.016,240.929 55.431,240.929' /%3E%3Cpolygon fill='%23fff' points='67.414,254.404 67.414,238.605 76.067,238.605 76.067,240.929 70.495,240.929 70.495,244.912 75.638,244.912 75.638,247.229 70.495,247.229 70.495,252.088 76.067,252.088 76.067,254.404' /%3E%3Cpath fill='%23fff' d='M85.8,238.6h3.1v15.8h-3.2l-2.4-5.6c-0.8-1.9-1.5-3.8-2.2-6.3h-0c0.1,1.3,0.2,2.9,0.3,4.5c0.1,1.6,0.2,3.1,0.2,4.4v3H78.5v-15.8h3.2l2.4,5.8c0.8,1.8,1.4,3.7,2.2,6.3h0c-0.1-1.4-0.2-3-0.3-4.5c-0.1-1.5-0.2-3-0.2-4.4V238.6z' /%3E%3Cpolygon fill='%23fff' points='90.768,238.605 101.006,238.605 101.006,240.929 97.421,240.929 97.421,254.404 94.353,254.404 94.353,240.929 90.768,240.929' /%3E%3Cpath fill='%23fff' d='M111.4,247.6v6.8h-3.1v-15.8h5.8c2.7,0,4.7,0.9,4.7,3.8c0,1.7-0.4,3.5-2.5,3.8v0.1c1.8,0.2,2.4,1.3,2.4,2.9c0,0.6-0.1,4.5,0.7,5v0.3h-3.4c-0.4-1-0.3-3-0.3-4c-0-1,0-2.3-1.1-2.6c-0.8-0.2-1.7-0.2-2.6-0.2H111.4z M111.4,245.3h2.4c1-0.1,1.8-0.7,1.8-2.3c0-1.8-0.8-2.1-1.9-2.1h-2.3V245.3z' /%3E%3Cpath fill='%23fff' d='M120.4,254.4l3.9-15.8h4.1l3.7,15.8h-3.3l-0.8-4h-3.6l-0.8,4H120.4z M125,248.1h2.6l-0.8-4.5c-0.2-0.7-0.2-1.4-0.3-2.2c-0-0.4-0.1-0.7-0.1-1.1h-0c-0.1,0.3-0.1,0.7-0.1,1.1c-0.1,0.7-0.2,1.4-0.3,2.2L125,248.1z' /%3E%3Cpolygon fill='%23fff' points='132.816,238.605 143.054,238.605 143.054,240.929 139.482,240.929 139.482,254.404 136.401,254.404 136.401,240.929 132.816,240.929' /%3E%3Cpolygon fill='%23fff' points='144.818,254.404 144.818,238.605 153.458,238.605 153.458,240.929 147.899,240.929 147.899,244.912 153.011,244.912 153.011,247.229 147.899,247.229 147.899,252.088 153.458,252.088 153.458,254.404' /%3E%3Cpath fill='%23fff' d='M156,254.4v-15.8h6.4c0.7,0,2.2,0.3,3.2,1.8c0.7,1.1,0.9,2.9,0.9,5.5c0,3.1,0,6.7-2.5,8.2c-0.7,0.4-1.5,0.4-2.3,0.4H156z M160.4,252.1c2.7,0,2.9-1.4,2.9-6c0-3.7-0.4-5.2-2.2-5.2h-2v11.2H160.4z' /%3E%3Cpath fill='%23fff' d='M174.7,254.4v-15.8h4.9c1.3,0,2.6,0.1,3.5,1.2c0.7,0.9,0.8,1.8,0.8,2.8c0,1.4-0.3,2.7-2,3.3v0c1.7,0.2,2.4,1.6,2.4,3.7c0,0.7-0,1.3-0.2,1.9c-0.7,2-1.8,2.8-4,2.8H174.7z M178.4,252.1c0.6,0,1.3,0.1,1.9-0.2c0.8-0.4,0.9-1.4,0.9-2.2c0-1.7-0.3-2.4-2.2-2.4h-1.2v4.8H178.4z M178.3,245c0.7,0,1.7,0,2.2-0.6c0.3-0.4,0.3-0.9,0.3-1.7c0-1.2-0.3-1.8-1.7-1.8h-1.4v4.1H178.3z' /%3E%3Cpath fill='%23fff' d='M190.8,242.7c0.3,0.8,0.6,1.6,0.7,2.4h0.1c0.2-1.2,0.6-2.1,1-3l1.4-3.6h3.4l-4.3,9.1v6.7H190v-6.7l-4.3-9.1h3.3L190.8,242.7z' /%3E%3Cpolygon fill='%23fff' points='17.82,282.422 17.82,259.067 50.974,259.067 50.974,264.534 31.14,264.534 31.14,267.867 47.926,267.867 47.926,273.314 31.14,273.314 31.14,276.976 51.749,276.976 51.749,282.422' /%3E%3Cpath fill='%23fff' d='M85.1,265.9c-0.2-0.8-1-1.3-1.9-1.6c-0.9-0.3-2.1-0.4-3.4-0.4c-2.9,0-4.2,0.5-4.2,1.4c0,3.5,23.4,1.3,23.4,9.8c0,5.4-7.9,8-19,8c-10.7,0-17.7-3.6-18-7.8h12.8c0.3,0.8,1.1,1.5,2.2,1.8c1.1,0.4,2.5,0.6,3.8,0.6c3.3,0,5.5-0.6,5.5-1.7c0-3.5-23.4-1.1-23.4-10c0-5,7.5-7.5,17.6-7.5c11.3,0,16.4,3.3,17.4,7.4H85.1z' /%3E%3Cpath fill='%23fff' d='M123.2,274.3v8.1h-13.3v-23.4h19.2c13.5,0,18,2.1,18,6.7c0,2.7-2.1,4.9-6.8,5.7c4.3,0.9,6.9,1.5,6.9,6.2c0,3-0.2,4.1,1.4,4.1v0.7H135c-0.3-0.5-0.7-2-0.7-4.1c0-3.1-0.9-4-7.1-4H123.2z M123.2,269.2h5.2c4.1,0,6.3-0.6,6.3-2.2c0-1.6-2.2-2.4-5.4-2.4h-6.2V269.2z' /%3E%3Cpath fill='%23fff' d='M160.1,282.4v-23.4h19.4c9.2,0,16.4,1.3,16.4,5.9c0,2.4-2.7,4.2-5.3,5.1c4.4,0.7,6.8,2.8,6.8,5.4c0,5.2-6.9,7-17.5,7H160.1z M173.4,272.7v4.3h5.8c3.3,0,5.8-0.4,5.8-2.1c0-2-3.1-2.2-7.3-2.2H173.4z M173.4,264.5v3.9h5.5c2.6,0,4.6-0.7,4.6-2c0-1.8-2.6-1.8-5.4-1.8H173.4z' /%3E%3Cpath d='M23.5,70.4c0-5.2,4.6-9.3,10.3-9.3c5.7,0,10.2,4.2,10.2,9.3c0,5.2-4.5,9.4-10.2,9.4C28,79.8,23.5,75.6,23.5,70.4M42.1,70.4c0-4.2-3.7-7.7-8.4-7.7c-4.7,0-8.5,3.5-8.5,7.7c0,4.3,3.8,7.7,8.5,7.7C38.4,78.1,42.1,74.7,42.1,70.4M31.6,71v4.7h-1.9v-11h3.9c2.2,0,4.5,0.6,4.5,3.1c0,1.3-0.8,2.3-2.4,2.6v0c1.6,0.3,1.8,1,2,2.2c0.2,1,0.3,2.2,0.7,3.2h-2.4c-0.1-0.6-0.3-1.3-0.4-2c-0.1-0.9-0.1-1.8-0.7-2.3c-0.5-0.4-1.1-0.4-1.8-0.4H31.6M33.5,69.3c1.8-0,2.2-0.8,2.2-1.6c0-0.8-0.4-1.3-1.9-1.3h-2.3v2.8H33.5z' /%3E%3Cpolygon points='26.964,94.613 165.106,60.261 175.72,96.973 131.347,108.006 161.11,211.162 111.717,223.462 81.931,120.293 37.564,131.34' /%3E%3Cpolygon fill='%23fff' points='155.852,16.326 168.41,16.326 182.999,31.882 182.482,25.385 182.482,16.326 195.322,16.326 195.322,44.817 182.776,44.817 168.172,29.305 168.689,35.788 168.689,44.817 155.852,44.817' /%3E%3Cpolygon fill='%23fff' points='110.596,16.326 143.901,16.326 143.901,22.963 123.978,22.963 123.978,27.058 140.843,27.058 140.843,33.708 123.978,33.708 123.978,38.168 144.706,38.168 144.706,44.817 110.596,44.817' /%3E%3Cpolygon fill='%23fff' points='63.775,16.326 97.079,16.326 97.079,22.963 77.171,22.963 77.171,27.058 94.018,27.058 94.018,33.708 77.171,33.708 77.171,38.168 97.897,38.168 97.897,44.817 63.775,44.817' /%3E%3Cpolygon fill='%23fff' points='14.935,16.326 52.392,16.326 52.392,23.81 40.367,23.81 40.367,44.817 26.964,44.817 26.964,23.81 14.935,23.81' /%3E%3C/svg%3E"