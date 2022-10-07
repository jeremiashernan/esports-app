import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import tw, { styled } from 'twin.macro'
import { useFetch } from '../../../hooks/useFetch'
import { SocialCard } from '../Cards'
import { SocialLinks } from '../Links'

type InstagramProps = {
  media_type: string
  permalink: string
  media_url: string
  id: string
}

const StyledFeeds = styled.div(() => [
  tw`grid grid-cols-2 gap-2.5 mb-4 xl:mb-6`
])
const StyledFeedsItem = styled.a(() => [tw`aspect-w-1 aspect-h-1`])

const StyledFeedsItemVideoWrapper = styled.div(() => [
  tw`block absolute inset-0 m-0 overflow-hidden`
])
const StyledFeedsItemVideo = styled.video(() => [
  tw`block absolute inset-0 w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover`
])

const InstagramCardComponent = () => {
  const { t } = useTranslation()
  const { data } = useFetch('/api/social/instagram')

  return (
    <SocialCard title="Instagram">
      <StyledFeeds>
        {data &&
          data.data &&
          data.data.slice(0, 6).map((feed: InstagramProps) => (
            <StyledFeedsItem
              key={feed.id}
              href={feed.permalink}
              target="_blank"
            >
              {feed.media_type === 'IMAGE' ||
              feed.media_type === 'CAROUSEL_ALBUM' ? (
                <Image
                  unoptimized
                  src={feed.media_url}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              ) : (
                <StyledFeedsItemVideoWrapper>
                  <StyledFeedsItemVideo
                    src={feed.media_url}
                    typeof="video/mp4"
                  />
                </StyledFeedsItemVideoWrapper>
              )}
            </StyledFeedsItem>
          ))}
      </StyledFeeds>
      <SocialLinks
        label={t('common:followOn', { text: 'Instagram' })}
        url={t('links:socialLinks.instagram')}
      />
    </SocialCard>
  )
}

export default InstagramCardComponent
