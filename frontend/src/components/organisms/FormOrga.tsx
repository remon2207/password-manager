import { yupResolver } from '@hookform/resolvers/yup'
import { ComponentPropsWithoutRef, useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { InputForm } from 'components/molecules/InputForm'
import { useSubmit } from 'hooks/useSubmit'
import { FormInput } from 'types/form'
import { SetStatusContext } from 'utils/context/status'
import { formSchema } from 'utils/schema'

type Props = ComponentPropsWithoutRef<'input'> & {
  serviceDefault: string
  emailDefault: string
  nameDefault: string
  passwordDefault: string
  secretDefault: string
  pwId?: number
  userId?: number
}

export const FormOrga: React.FC<Props> = ({
  defaultValue,
  defaultChecked,
  serviceDefault,
  emailDefault,
  nameDefault,
  passwordDefault,
  secretDefault,
  pwId,
  userId
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInput>({
    defaultValues: {
      id: pwId,
      userId
    },
    resolver: yupResolver(formSchema)
  })
  const { onSubmit, addMessage, updateMessage } = useSubmit()
  const setStatus = useContext(SetStatusContext)

  useEffect(() => {
    if (addMessage && !updateMessage) {
      setStatus(addMessage.pwRegister.message)
    }
  }, [addMessage, updateMessage, setStatus])

  useEffect(() => {
    if (updateMessage && !addMessage) {
      setStatus(updateMessage.pwUpdater.message)
    }
  }, [addMessage, updateMessage, setStatus])

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center justify-center">
          <InputForm
            defaultValue={serviceDefault}
            error={errors.service?.message}
            htmlFor="service"
            labelName="Service"
            register={register('service')}
            type="text"
          />
          <InputForm
            defaultValue={emailDefault}
            error={errors.email?.message}
            htmlFor="email"
            labelName="Email"
            register={register('email')}
            type="email"
          />
          <InputForm
            defaultValue={nameDefault}
            error={errors.name?.message}
            htmlFor="name"
            labelName="Name"
            register={register('name')}
            type="text"
          />
          <InputForm
            defaultValue={passwordDefault}
            error={errors.password?.message}
            htmlFor="password"
            labelName="Password"
            register={register('password')}
            type="text"
          />
          <InputForm
            defaultChecked={defaultChecked}
            defaultValue={defaultValue}
            error={errors.twoFactor?.message}
            htmlFor="two-factor"
            labelName="Two factor"
            register={register('twoFactor')}
            type="checkbox"
          />
          <InputForm
            defaultValue={secretDefault}
            error={errors.secret?.message}
            htmlFor="secret"
            labelName="Secret"
            register={register('secret')}
            type="text"
          />
          <div className="mt-14 flex flex-row items-center justify-center gap-24">
            <input className="page-transition-btn" type="submit" value="Back" />
            <input className="page-transition-btn" type="submit" value="Send" />
          </div>
        </div>
      </form>
    </>
  )
}
