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
          labelName="サービス"
          register={register('service')}
          type="text"
        />
        <CommonForm
          className="w-80"
          error={errors.email?.message}
          htmlFor="email"
          labelName="メールアドレス"
          register={register('email')}
          type="email"
        />
        <CommonForm
          className="w-80"
          error={errors.name?.message}
          htmlFor="name"
          labelName="名前"
          register={register('name')}
          type="text"
        />
        <CommonForm
          className="w-80"
          error={errors.password?.message}
          htmlFor="password"
          labelName="パスワード"
          register={register('password')}
          type="text"
        />
        <label
          className="absolute top-[21.5rem] right-7 mt-2 flex cursor-pointer flex-row items-center justify-center sm:right-32 md:right-52 lg:right-80 xl:right-[28rem] 2xl:right-[42rem]"
          htmlFor="to-hashed"
        >
          <input
            checked={hashed}
            className="mr-1 cursor-pointer focus:ring-0"
            id="to-hashed"
            onChange={toHashed}
            type="checkbox"
          />
          ハッシュ化する
        </label>
        <CommonForm
          className="mr-1 cursor-pointer focus:ring-0"
          error={errors.twoFactor?.message}
          htmlFor="two-factor"
          id="two-factor"
          labelName="2段階認証の有無"
          register={register('twoFactor')}
          type="checkbox"
        />
        <CommonForm
          className="w-80"
          error={errors.secret?.message}
          htmlFor="secret"
          labelName="シークレット"
          register={register('secret')}
          type="text"
        />
        <div className="mt-14 flex flex-row items-center justify-center gap-24">
          <Nav className="page-transition-btn" href="/" navText="戻る" />
          <input className="page-transition-btn" type="submit" value="送信" />
        </div>
        {children}
      </form>
    </>
  )
}
