import tw, { styled } from 'twin.macro'
import { Event, EventFilter } from '../../services/interfaces/EventProps'
import { ActiveEvents, CompletedEvents } from '../modules/Events'

type EventProps = {
  active: Event[]
  featured: Event
  filters: EventFilter[]
}

const StyledEvents = styled.div(() => [tw`relative bg-pugb-gray-200`])

// const StyledBackgroundHeader = styled.div(() => [
//   tw`absolute top-0 w-full height[500px] bg-cover bg-center
//     background-image[url('/images/bg-header-events.jpg')]`
// ])

const StyledMain = styled.div(() => [
  tw`relative pt-2.5 bg-no-repeat bg-center
    background-position-y[500px] from-pugb-gray-250 to-pugb-gray-0
    background-image[
        url('/images/bg-hero-wrapper.jpg'), 
        linear-gradient(to bottom, var(--tw-gradient-stops))
      ]`,
  tw`xl:pt-2.5`
])

const EventsTemplate = ({ active, filters }: EventProps) => {
  return (
    <StyledEvents>
      {/* <StyledBackgroundHeader /> */}
      <StyledMain>
        {/* <FeaturedEvent event={featured} /> */}
        <ActiveEvents events={active} />
        <CompletedEvents filters={filters} />
      </StyledMain>
    </StyledEvents>
  )
}

export default EventsTemplate
