import {
  faLongArrowAltDown,
  faLongArrowAltUp,
  faSearch
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Downshift from 'downshift'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import { ParsedUrlQueryInput } from 'querystring'
import { useEffect, useState } from 'react'
import tw, { styled } from 'twin.macro'

type Category = {
  label: string
  value: number
}

type SelectProps = {
  categories: {
    items: Category[]
    selected: number
  }
  search?: string
}

type StyleProps = {
  highlighted?: boolean
  selected?: boolean
}

const StyledFilters = styled.div(() => [tw`flex w-full`, tw`xl:w-max`])

const StyledCategories = styled.div(() => [
  tw`w-1/2 relative z-10 select-none`,
  tw`xl:w-max`
])
const StyledCombobox = styled.div(() => [
  tw`flex h-full items-center justify-between w-full
  bg-gradient-to-r from-pugb-gray-250 to-white
  border border-pugb-gray-100 text-pugb-gray-650 text-lg`,
  tw`xl:w-60`
])
const StyledComboboxInput = styled.input(() => [
  tw`w-full h-full py-3 px-5 placeholder-pugb-gray-650 bg-transparent cursor-pointer
  focus:outline-none`,
  tw`xl:py-4`
])
const StyledComboboxIcon = styled.button(() => [
  tw`w-1/12 h-full text-pugb-red-300 pr-3`,
  tw`xl:pr-5`
])

const StyledOptionsList = styled.ul(() => [
  tw`absolute w-full h-36 overflow-auto`,
  tw`xl:h-64`
])
const StyledOptionsItem = styled.li(({ highlighted, selected }: StyleProps) => [
  tw`px-5 py-2 bg-white cursor-pointer`,
  selected && tw`text-pugb-red-300`,
  highlighted && tw`bg-pugb-red-300 text-white`
])

const StyledSearch = styled.div(() => [
  tw`flex w-1/2 ml-2 border border-pugb-gray-350 
  bg-black bg-opacity-60`,
  tw`xl:w-80 xl:ml-5`
])
const StyledSearchInput = styled.input(() => [
  tw`w-full h-full pl-5 text-white bg-transparent focus:outline-none`
])
const StyledSearchButton = styled.button(() => [
  tw`text-pugb-red-300 text-lg px-3`,
  tw`xl:px-5`
])

const NewsFilter = ({
  categories: { items, selected },
  search
}: SelectProps) => {
  const { t } = useTranslation()
  const [categorySelected, setCategorySelected] = useState<Category | null>()
  const [query, setQuery] = useState<ParsedUrlQueryInput>()
  const router = useRouter()

  const handleFilter = () => {
    router.push({ query: query })
  }

  useEffect(() => {
    const newCategorySelected = items[selected]

    if (!categorySelected) {
      setCategorySelected(newCategorySelected)
    } else if (categorySelected !== newCategorySelected) {
      setCategorySelected(null)
    }
  }, [categorySelected, items, selected])

  useEffect(() => {
    const newQuery = {}

    if (search) {
      Object.assign(newQuery, { search })
    }

    if (categorySelected && categorySelected.value !== 0) {
      Object.assign(newQuery, { cat: categorySelected.value })
    }

    setQuery(newQuery)
  }, [search, categorySelected])

  return (
    <StyledFilters>
      {items.length > 0 && categorySelected && (
        <Downshift
          initialSelectedItem={categorySelected}
          itemToString={(item) => {
            if (item) {
              if (item.value) {
                setQuery({ ...query, cat: item.value })
              } else {
                if (query && query['cat']) {
                  delete query['cat']
                  setQuery(query)
                }
              }
            }

            return item ? item.label : ''
          }}
          onSelect={(selection) => selection && handleFilter()}
        >
          {({
            getInputProps,
            getItemProps,
            getMenuProps,
            getRootProps,
            getToggleButtonProps,
            isOpen,
            highlightedIndex,
            openMenu,
            closeMenu,
            selectedItem
          }) => (
            <StyledCategories>
              <StyledCombobox {...getRootProps()}>
                <StyledComboboxInput
                  onClick={() => {
                    isOpen ? closeMenu() : openMenu()
                  }}
                  readOnly={true}
                  {...getInputProps()}
                />
                <StyledComboboxIcon {...getToggleButtonProps()}>
                  <FontAwesomeIcon
                    icon={isOpen ? faLongArrowAltUp : faLongArrowAltDown}
                  />
                </StyledComboboxIcon>
              </StyledCombobox>
              <StyledOptionsList {...getMenuProps()}>
                {isOpen &&
                  items.map((item, index) => (
                    <StyledOptionsItem
                      key={item.value}
                      {...getItemProps({
                        index,
                        item
                      })}
                      highlighted={highlightedIndex === index}
                      selected={selectedItem === item}
                    >
                      {item.label}
                    </StyledOptionsItem>
                  ))}
              </StyledOptionsList>
            </StyledCategories>
          )}
        </Downshift>
      )}
      <StyledSearch>
        <StyledSearchInput
          placeholder={t('common:searchArticles')}
          onChange={(e) => {
            if (e.target.value) {
              setQuery({ ...query, search: e.target.value })
            } else {
              if (query && query['search']) {
                delete query['search']
                setQuery(query)
              }
            }
          }}
          onKeyPress={(e) => (e.key === 'Enter' ? handleFilter() : null)}
          defaultValue={search || ''}
        />
        <StyledSearchButton onClick={() => handleFilter()}>
          <FontAwesomeIcon icon={faSearch} />
        </StyledSearchButton>
      </StyledSearch>
    </StyledFilters>
  )
}

export default NewsFilter
