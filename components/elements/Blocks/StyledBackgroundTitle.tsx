import tw, { styled } from 'twin.macro'

const StyledBackgroundTitle = styled.div(() => [
  tw`w-full padding-top[2.125rem] padding-bottom[1.6875rem] bg-cover background-image[url('/images/bg-hero-wrapper.jpg')]`,
  tw`xl:padding-top[4.5rem] xl:padding-bottom[3.1875rem]`
])

export default StyledBackgroundTitle
