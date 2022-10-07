import {
  faLongArrowAltDown,
  faLongArrowAltUp
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC, ReactElement, useState } from 'react'
import {
  components,
  default as ReactSelect,
  DropdownIndicatorProps,
  InputProps,
  OptionProps,
  Props,
  StylesConfig,
  ValueContainerProps
} from 'react-select'
import tw, { css, styled } from 'twin.macro'

type OptionsProps = {
  label: string
  value: string
}

interface SelectProps extends Props {
  onInput?: (value: string) => void
  onMultiInput?: (value: string[]) => void
  clear?: boolean
}

const customSelectStyles: StylesConfig = {
  control: (base) => ({
    ...base,
    minHeight: '48px',
    backgroundImage: 'linear-gradient(to right, #dfdfdf, #fff)',
    borderColor: '#cecece',
    boxShadow: 'none',
    '&:hover': {
      borderColor: '#cecece'
    },
    cursor: 'text',
    '@media (min-width: 1200px)': {
      minHeight: '56px'
    }
  }),
  indicatorSeparator: () => ({
    display: 'none'
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: '#df0023',
    cursor: 'pointer',
    '&:hover': {
      color: '#f70027'
    }
  }),
  valueContainer: (base) => ({
    ...base,
    paddingLeft: '1.25rem'
  }),
  menu: (base) => ({
    ...base,
    marginTop: '-1px',
    border: '1px solid #cecece',
    boxShadow: 'none',
    borderTop: 'none',
    backgroundImage: 'linear-gradient(to right, #dfdfdf, #fff)',
    zIndex: 999,
    pointerEvents: 'auto'
  }),
  menuList: (base) => ({
    ...base,
    paddingTop: 0,
    paddingBottom: 0
  }),
  option: (base, { isSelected, isFocused }) => ({
    ...base,
    cursor: 'pointer',
    color: isSelected ? '#df0023' : isFocused ? '#fff' : '#2e2e2e',
    '&:hover': {
      color: isSelected ? '#df0023' : '#fff'
    },
    '&:active': {
      background: isSelected ? 'transparent' : '#df0023',
      color: isSelected ? '#df0023' : '#fff'
    }
  })
}

const StyledCheckBox = styled.div(() => [
  tw`flex items-center`,
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
    }
    label:before {
      content: '';
      -webkit-appearance: none;
      background-color: white;
      border: 1px solid #969699;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
        inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
      padding: 10px;
      display: inline-block;
      position: relative;
      vertical-align: middle;
      cursor: pointer;
      margin-right: 5px;
    }
    input:checked + label:after {
      content: '';
      display: block;
      position: absolute;
      top: 5px;
      left: 8px;
      width: 7px;
      height: 14px;
      border: solid #df0023;
      border-width: 0 3px 3px 0;
      transform: rotate(45deg);
    }
  `
])

const StyledYearLabel = styled.span(() => [tw`text-sm`])

const DropdownIndicator: FC<DropdownIndicatorProps> = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <FontAwesomeIcon
        icon={props.isFocused ? faLongArrowAltUp : faLongArrowAltDown}
      />
    </components.DropdownIndicator>
  )
}

const Option: FC<OptionProps> = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <StyledCheckBox>
          <input
            type="checkbox"
            checked={props.isSelected}
            onChange={() => null}
          />{' '}
          <label>{props.label}</label>
        </StyledCheckBox>
      </components.Option>
    </div>
  )
}

const ValueContainer: FC<ValueContainerProps> = (props) => {
  const valueLength = props.getValue().length
  const optionsLength = props.selectProps.options.length
  const counts = optionsLength === valueLength ? 'All' : valueLength

  return (
    <components.ValueContainer {...props}>
      {!props.selectProps.inputValue && counts ? (
        <StyledYearLabel>{counts} selected</StyledYearLabel>
      ) : null}
      {props.children &&
        React.Children.map(props.children, (child: React.ReactNode) => {
          const t = child as ReactElement<InputProps>
          if (t?.type)
            return t.type === components.Input
              ? child
              : t.type === components.Placeholder
              ? child
              : null
        })}
    </components.ValueContainer>
  )
}

const Select: FC<SelectProps> = (props) => {
  const [value, setValue] = useState()

  const onChangeOptions = (e: unknown) => {
    const option = e as OptionsProps
    setValue(value)
    if (props.onInput) props.onInput(option.value)
  }

  const onChangeMultiOptions = (e: unknown) => {
    const option = e as OptionsProps[]
    setValue(value)
    const mutilValue: string[] = []
    option.forEach((item) => {
      mutilValue.push(item.value)
    })
    if (props.onMultiInput) props?.onMultiInput(mutilValue)
  }

  if (props.isMulti) {
    return (
      <ReactSelect
        {...props}
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        onChange={(e) => onChangeMultiOptions(e)}
        styles={customSelectStyles}
        components={{
          Option,
          ValueContainer,
          DropdownIndicator
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary: 'transparent',
            primary25: '#df0023'
          }
        })}
        value={props.clear ? null : value}
      />
    )
  } else {
    return (
      <ReactSelect
        {...props}
        onChange={(e) => onChangeOptions(e)}
        styles={customSelectStyles}
        components={{ DropdownIndicator }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary: 'transparent',
            primary25: '#df0023'
          }
        })}
        value={props.clear ? null : value}
      />
    )
  }
}

export default Select
