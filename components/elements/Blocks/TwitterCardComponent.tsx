import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import tw, { styled } from 'twin.macro'
import { SocialCard } from '../Cards'
import { SocialLinks } from '../Links'

type StyleProps = {
  gradient?: boolean
}

const StyledSocialTwitterContainer = styled.div(() => [tw`mb-6`])
const StylesSocialCard = styled.div(() => [tw`xl:first:col-span-2`])

const TwitterCardComponent = ({ gradient }: StyleProps) => {
  const { t } = useTranslation()

  React.useEffect(() => {
    const scirpts = document.createElement('script')
    scirpts.setAttribute('src', 'https://platform.twitter.com/widgets.js')
    scirpts.setAttribute('async', 'true')
    document.head.appendChild(scirpts)
  }, [])

  return (
    <StylesSocialCard>
      <SocialCard title="Twitter" gradient={gradient}>
        <StyledSocialTwitterContainer>
          <div className="twitter-embed">
            <a
              className="twitter-timeline"
              data-tweet-limit={1}
              data-chrome="noheader nofooter noborders"
              href={t('links:socialLinks.twitter')}
            />
          </div>
        </StyledSocialTwitterContainer>
        <SocialLinks
          label={t('common:followOn', { text: 'Twitter' })}
          url={t('links:socialLinks.twitter')}
        />
      </SocialCard>
    </StylesSocialCard>
  )
}

export default TwitterCardComponent
