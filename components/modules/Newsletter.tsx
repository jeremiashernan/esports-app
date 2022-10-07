import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import countries from 'i18n-iso-countries'
import english from 'i18n-iso-countries/langs/en.json'
import spanish from 'i18n-iso-countries/langs/es.json'
import portuguese from 'i18n-iso-countries/langs/pt.json'
import useTranslation from 'next-translate/useTranslation'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import Select, { StylesConfig } from 'react-select'
import tw, { styled } from 'twin.macro'

countries.registerLocale(english)
countries.registerLocale(spanish)
countries.registerLocale(portuguese)

type FormData = {
  email: string
  name: string
  country: CountryOption | null
}

type CountryOption = {
  value: string
  label: string
}

type AlertProps = {
  error: boolean
}

const StyledNewsletter = styled.div(() => [
  tw`w-full xl:width[750px] 2xl:width[845px]`
])

const StyledTitle = styled.h3(() => [
  tw`text-center text-2xl text-white font-markpro font-extrabold`,
  tw`xl:text-3xl`
])

const StyledForm = styled.form(() => [
  tw`flex flex-col items-center mt-4`,
  tw`xl:flex-row xl:mt-8`
])
const StyledFormFieldset = styled.fieldset(() => [tw`w-3/4 flex-1`])
const StyledFormFields = styled.div(() => [
  tw`grid gap-3 w-full`,
  tw`xl:grid xl:grid-cols-3`
])
const StyledFormField = styled.div(() => [tw`flex flex-col`])
const StyledFormInput = styled.input(() => [
  tw`w-full py-3.5 px-5 border border-pugb-gray-100 text-pugb-gray-650 text-lg
  placeholder-pugb-gray-300 focus:outline-none`
])
const StyledFormInputError = styled.div(() => [
  tw`px-2 py-1 mt-1 text-xs background-color[#ffe3e3] color[#832828]`
])

const StyledFormButton = styled.button(() => [
  tw`w-32 height[58px] mt-3 text-lg text-white font-markpro font-extrabold
  bg-pugb-red-300 transition-colors hover:bg-pugb-red-200 focus:outline-none`,
  tw`xl:self-start xl:w-40 xl:mt-0 xl:ml-3`
])
const StyledFormSubmitted = styled.div(({ error }: AlertProps) => [
  tw`flex items-center mt-4 px-5 py-1.5 background-color[#ecffe3]
  color[#3e602c] rounded`,
  tw`xl:mt-7`,
  error && tw`background-color[#ffe3e3] color[#832828]`
])

const customSelectStyles: StylesConfig = {
  control: (base) => ({
    ...base,
    height: '58px',
    borderColor: '#cecece',
    boxShadow: 'none',
    '&:hover': {
      borderColor: '#cecece'
    },
    cursor: 'text'
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
  })
}

const Newsletter = () => {
  const { t, lang } = useTranslation()
  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors }
  } = useForm<FormData>()
  const [alert, setAlert] = useState(0)

  const countryNames = countries.getNames(lang)
  const countryOptions: CountryOption[] = Object.keys(countryNames).map(
    (key) => ({
      value: key,
      label: countryNames[key]
    })
  )

  useEffect(() => {
    if (alert > 0) {
      window.setTimeout(() => {
        setAlert(0)
      }, 5000)
    }
  }, [alert])

  const onSubmit = async ({ name, email, country }: FormData) => {
    const response = await fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({
        email,
        name,
        country: country?.label,
        lang
      })
    })

    const json = await response.json()

    setAlert(json.created ? 1 : 2)
    reset({ email: '', name: '', country: null })
  }

  return (
    <StyledNewsletter>
      <StyledTitle>{t('common:newsletter.signUp')}</StyledTitle>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledFormFieldset>
          <StyledFormFields>
            <StyledFormField>
              <StyledFormInput
                placeholder={t('forms:newsletter.email')}
                {...register('email', {
                  required: {
                    value: true,
                    message: t('forms:validation.required')
                  },
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: t('forms:validation.email')
                  }
                })}
              />
              {errors.email && (
                <StyledFormInputError>
                  {errors.email.message}
                </StyledFormInputError>
              )}
            </StyledFormField>
            <StyledFormField>
              <StyledFormInput
                placeholder={t('forms:newsletter.name')}
                {...register('name', { required: true })}
              />
              {errors.name && (
                <StyledFormInputError>
                  {t('forms:validation.required')}
                </StyledFormInputError>
              )}
            </StyledFormField>
            <StyledFormField>
              <Controller
                name="country"
                control={control}
                rules={{ required: true }}
                render={({ field }) => {
                  return (
                    <Select
                      {...field}
                      options={countryOptions}
                      placeholder={t('forms:newsletter.country')}
                      styles={customSelectStyles}
                      theme={(theme) => ({
                        ...theme,
                        borderRadius: 0,
                        colors: {
                          ...theme.colors,
                          primary: '#df0023',
                          primary25: '#e9e9ea'
                        }
                      })}
                    />
                  )
                }}
              />
              {errors.country && (
                <StyledFormInputError>
                  {t('forms:validation.required')}
                </StyledFormInputError>
              )}
            </StyledFormField>
          </StyledFormFields>
          {alert > 0 && (
            <StyledFormSubmitted error={alert === 2}>
              <FontAwesomeIcon
                icon={alert === 2 ? faTimes : faCheck}
                tw="mr-2"
              />
              {alert === 2
                ? t('common:newsletter.error')
                : t('common:newsletter.success')}
            </StyledFormSubmitted>
          )}
        </StyledFormFieldset>
        <StyledFormButton>{t('common:subscribe')}</StyledFormButton>
      </StyledForm>
    </StyledNewsletter>
  )
}

export default Newsletter
