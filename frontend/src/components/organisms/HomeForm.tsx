import { yupResolver } from '@hookform/resolvers/yup'
import { ChangeEvent, useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { Nav } from 'components/atoms'
import { useSubmit } from 'hooks'
import { FormInput } from 'types'
import {
  formSchema,
  PwInfoContext,
  SetStatusContext,
  UserIdContext,
  SetToHashedContext,
  ToHashedContext
} from 'utils'

import { CommonForm } from './index'

type Props = {
  children?: React.ReactNode
}

export const HomeForm: React.FC<Props> = ({ children }) => {
  const { id, service, email, name, password, twoFactor, secret } =
    useContext(PwInfoContext)
  const userId = useContext(UserIdContext)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInput>({
    defaultValues: {
      id,
      userId,
      service,
      email,
      name,
      password,
      twoFactor,
      secret
    },
    resolver: yupResolver(formSchema)
  })
  const { onSubmitHome, addPwMessage, addNotHashedMessage, updatePwMessage } =
    useSubmit()
  const setStatus = useContext(SetStatusContext)
  const setHashed = useContext(SetToHashedContext)
  const hashed = useContext(ToHashedContext)

  const toHashed = (e: ChangeEvent<HTMLInputElement>) =>
    setHashed(e.target.checked)

  useEffect(() => {
    if (addPwMessage && !addNotHashedMessage && !updatePwMessage) {
      setStatus(addPwMessage.pwRegister.message)
    }
    if (addNotHashedMessage && !addPwMessage && !updatePwMessage) {
      setStatus(addNotHashedMessage.notHashedPwRegister.message)
    }
    if (updatePwMessage && !addPwMessage) {
      setStatus(updatePwMessage.pwUpdater.message)
    }
  }, [setStatus, updatePwMessage, addPwMessage, addNotHashedMessage])

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitHome)}>
        <CommonForm
          className="w-80"
          error={errors.service?.message}
          htmlFor="service"
          labelName="Service"
          register={register('service')}
          type="text"
        />
        <CommonForm
          className="w-80"
          error={errors.email?.message}
          htmlFor="email"
          labelName="Email"
          register={register('email')}
          type="email"
        />
        <CommonForm
          className="w-80"
          error={errors.name?.message}
          htmlFor="name"
          labelName="Name"
          register={register('name')}
          type="text"
        />
        <CommonForm
          className="w-80"
          error={errors.password?.message}
          htmlFor="password"
          labelName="Password"
          register={register('password')}
          type="text"
        />
        <label
          className="mt-2 flex flex-row items-center justify-center"
          htmlFor="to-hashed"
        >
          <input checked={hashed} onChange={toHashed} type="checkbox" /> : To
          Hashed
        </label>
        <CommonForm
          error={errors.twoFactor?.message}
          htmlFor="twoFactor"
          labelName="TwoFactor"
          register={register('twoFactor')}
          type="checkbox"
        />
        <CommonForm
          className="w-80"
          error={errors.secret?.message}
          htmlFor="secret"
          labelName="Secret"
          register={register('secret')}
          type="text"
        />
        <div className="mt-14 flex flex-row items-center justify-center gap-24">
          <Nav className="page-transition-btn" href="/" navText="Back" />
          <input className="page-transition-btn" type="submit" value="Send" />
        </div>
        {children}
      </form>
    </>
  )
}
