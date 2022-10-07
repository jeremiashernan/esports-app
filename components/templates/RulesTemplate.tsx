import tw, { styled } from 'twin.macro'
import { nodeRulesList } from '../../constants/nodeRulesList'
import {
  NumberedTitleTextBlockCustomColor,
  StyledBackgroundTitle,
  TableOfContent
} from '../elements/Blocks'
import { BigContentContainer } from '../elements/Containers'
import { Heading2 } from '../elements/Headings'
import {
  StyledContentPaddingsWrapper,
  StyledDivWrapper,
  StyledFlex
} from '../foundations'

const StyledHeading3 = styled.h3(() => [
  tw`font-markpro text-center font-extrabold text-pugb-gray-300 font-size[1.5rem] line-height[1.8125rem]`,
  tw`xl:font-size[2.375rem] xl:line-height[2.9375rem] pt-1`
])

const StyledPaddingLeft = styled.div(() => [tw`pl-8`])

const RulesTemplate = () => (
  <>
    <StyledBackgroundTitle>
      <BigContentContainer>
        <Heading2 title="Rules" />
        <StyledHeading3>LVUP SHOWDOWN: 2021 Season Final</StyledHeading3>
      </BigContentContainer>
    </StyledBackgroundTitle>
    <BigContentContainer>
      <StyledContentPaddingsWrapper>
        <StyledFlex>
          <TableOfContent roleList={nodeRulesList} />
          <StyledDivWrapper>
            {nodeRulesList.map((n) =>
              n.level == 1 ? (
                <NumberedTitleTextBlockCustomColor
                  id={n.id}
                  key={n.id}
                  num={n.id}
                  title={n.title}
                  text={n.text}
                />
              ) : n.level == 2 ? (
                <StyledPaddingLeft key={n.id}>
                  <NumberedTitleTextBlockCustomColor
                    id={n.id}
                    num={n.id}
                    title={n.title}
                    numColor="#171719"
                    text={n.text}
                  />
                </StyledPaddingLeft>
              ) : null
            )}
          </StyledDivWrapper>
        </StyledFlex>
      </StyledContentPaddingsWrapper>
    </BigContentContainer>
  </>
)

export default RulesTemplate
