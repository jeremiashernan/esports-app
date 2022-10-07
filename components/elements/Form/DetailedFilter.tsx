import { faCog, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import countries from 'i18n-iso-countries'
import english from 'i18n-iso-countries/langs/en.json'
import spanish from 'i18n-iso-countries/langs/es.json'
import portuguese from 'i18n-iso-countries/langs/pt.json'
import useTranslation from 'next-translate/useTranslation'
import { useEffect, useRef, useState } from 'react'
import tw, { css, styled } from 'twin.macro'
import { EventFilterParams } from '../../../services/interfaces/EventProps'
import { SwitchButton } from '../Switch'
import Select from './Inputs/Select'

type StatsProps = {
  id: string
  label: string
  state: boolean
}
type FilterProps = {
  stats?: StatsProps[]
  handleStats?: (stats: StatsProps[]) => void
}

countries.registerLocale(english)
countries.registerLocale(spanish)
countries.registerLocale(portuguese)

const StyledWrapper = styled.div(() => [
  tw`flex flex-col-reverse mt-12 relative z-10`,
  tw`xl:flex-row`
])

const StyledFilters = styled.div(() => [
  tw`grid grid-cols-2 gap-3`,
  tw`lg:grid-cols-3`,
  tw`xl:grid-cols-5 xl:w-3/4`,
  tw`2xl:width[70%]`
])

const StyledClearButton = styled.button(() => [
  tw` flex items-center pl-5 w-full h-12 bg-pugb-red-300 transition-colors
    hover:bg-pugb-red-200`,
  tw`xl:h-14`
])
const StyledClearButtonText = styled.span(() => [
  tw`ml-2 font-markpro text-white`
])
const StyledMenu = styled.div(() => [
  tw`absolute right-0 bottom-0 bg-pugb-red-300 w-11 h-12`
])
const StyledMenuContent = styled.div(() => [tw`inline-block relative`])
const StyledMenuButton = styled.button(() => [tw`w-11 h-12`])
const StyledDropdownContent = styled.div(() => [
  tw`absolute p-6 bg-pugb-gray-800 right-2 margin-top[0.5rem]`,
  css`
    &:before {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      top: -0.5rem;
      right: 0.5rem;
      border-bottom: 8px solid #171719;
      border-right: 6px solid transparent;
      border-left: 6px solid transparent;
    }
  `
])
const StyledUlContent = styled.ul(() => [
  tw`min-w-[18.5rem] max-h-[21.75rem] overflow-auto`
])
const StyledCheckBox = styled.div(() => [
  tw`flex items-center mb-3 last:mb-0`,
  css`
    input {
      padding: 0;
      height: initial;
      width: initial;
      margin-bottom: 0;
      display: none;
      cursor: pointer;
    }
    label {
      position: relative;
      cursor: pointer;
      font-size: 1rem;
      line-height: 1.5rem;
      color: white;
    }
    label:before {
      content: '';
      -webkit-appearance: none;
      background-color: #333334;
      border: 1px solid #535354;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
        inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
      padding: 10px;
      display: inline-block;
      position: relative;
      vertical-align: middle;
      cursor: pointer;
      margin-right: 0.75rem;
    }
    input:checked + label:after {
      content: '';
      display: block;
      position: absolute;
      top: 5px;
      left: 8px;
      width: 7px;
      height: 14px;
      border: solid white;
      border-width: 0 3px 3px 0;
      transform: rotate(45deg);
    }
    input:checked + label:before {
      background-color: #df0023;
      border: 1px solid #df0023;
    }
  `
])
const StyledIcon = styled.span(() => [
  tw`relative flex items-center justify-center w-full`
])

const DetailedFilter = ({ stats, handleStats }: FilterProps) => {
  const { t } = useTranslation()
  const [params, setParams] = useState<EventFilterParams>({})
  const [toggle, setToggle] = useState(false)
  const [show, setShow] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setShow(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [wrapperRef])

  const handleCheckBox = (id: string) => {
    if (stats) {
      const tempStats = stats.map((item) => {
        if (item.id === id) {
          return { ...item, state: !item.state }
        } else {
          return item
        }
      })
      if (handleStats) handleStats(tempStats)
    }
  }

  return (
    <StyledWrapper>
      <StyledFilters>
        <Select
          options={[]}
          placeholder={t('forms:participantsFilters.allRounds')}
          onMultiInput={(value) =>
            setParams({
              ...params,
              filters: { ...params.filters, year: value }
            })
          }
          clear={params.filters?.year ? false : true}
        />
        <Select
          options={[]}
          placeholder={t('forms:participantsFilters.allLobbies')}
          onInput={(value) =>
            setParams({
              ...params,
              filters: { ...params.filters, platform: value }
            })
          }
          clear={params.filters?.platform ? false : true}
        />
        {params.filters && (
          <StyledClearButton
            onClick={() => setParams({ ...params, filters: undefined })}
          >
            <FontAwesomeIcon icon={faTimes} color="white" />
            <StyledClearButtonText>
              {t('forms:eventsFilters.clearFilters')}
            </StyledClearButtonText>
          </StyledClearButton>
        )}
        <SwitchButton toggle={toggle} setToggle={setToggle} />
        {toggle && (
          <StyledMenu>
            <StyledMenuContent>
              <StyledMenuButton onClick={() => setShow(!show)}>
                <StyledIcon>
                  <FontAwesomeIcon icon={faCog} color="white" />
                </StyledIcon>
              </StyledMenuButton>
              {show && (
                <StyledDropdownContent ref={wrapperRef}>
                  <StyledUlContent>
                    {stats &&
                      stats.map((item, index) => (
                        <StyledCheckBox
                          key={index}
                          onClick={() => handleCheckBox(item.id)}
                        >
                          <input
                            type="checkbox"
                            checked={item.state}
                            onChange={() => null}
                          />{' '}
                          <label>{item.label}</label>
                        </StyledCheckBox>
                      ))}
                  </StyledUlContent>
                </StyledDropdownContent>
              )}
            </StyledMenuContent>
          </StyledMenu>
        )}
      </StyledFilters>
    </StyledWrapper>
  )
}

export default DetailedFilter
