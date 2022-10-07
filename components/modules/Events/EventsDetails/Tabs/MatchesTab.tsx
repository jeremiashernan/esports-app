import tw, { styled } from 'twin.macro'
import { ParticipantsFilter } from '../../../../elements/Form'

const StyledContent = styled.div(() => [tw``])

const MatchesTab = () => {
  // const { t } = useTranslation()

  return (
    <StyledContent>
      <ParticipantsFilter />
      <h1>Matches tab</h1>
    </StyledContent>
  )
}

export default MatchesTab
