import { yupResolver } from '@hookform/resolvers/yup'
import { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { FormOrga } from 'components/organisms/FormOrga'
import { HeaderOrga } from 'components/organisms/HeaderOrga'
import { useSubmit } from 'hooks/useSubmit'
import { FormInput } from 'types/form'
import { PwInfoContext } from 'utils/context/fetchData'
import { SetStatusContext } from 'utils/context/status'
import { formSchema } from 'utils/schema'

export const EditTemp: React.FC = () => {
  const pwInfo = useContext(PwInfoContext)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful }
  } = useForm<FormInput>({
    defaultValues: {
      id: pwInfo.id,
      userId: pwInfo.userId
    },
    resolver: yupResolver(formSchema)
  })
  const { onSubmitUpdate } = useSubmit()
  const setStatus = useContext(SetStatusContext)

  useEffect(() => {
    setStatus(!isSubmitSuccessful)
  }, [isSubmitSuccessful, setStatus])

  return (
    <>
      <HeaderOrga />
      <main>
        <form onSubmit={handleSubmit(onSubmitUpdate)}>
          <FormOrga
            defaultValue={pwInfo.service}
            error={errors.service?.message}
            htmlFor="service"
            labelName="Service"
            register={register('service')}
            type="text"
          />
          <FormOrga
            defaultValue={pwInfo.email}
            error={errors.service?.message}
            htmlFor="email"
            labelName="Email"
            register={register('email')}
            type="email"
          />
          <FormOrga
            defaultValue={pwInfo.name}
            error={errors.service?.message}
            htmlFor="name"
            labelName="Name"
            register={register('name')}
            type="text"
          />
          <FormOrga
            defaultValue={pwInfo.password}
            error={errors.service?.message}
            htmlFor="password"
            labelName="Password"
            register={register('password')}
            type="text"
          />
          <FormOrga
            checked={pwInfo.twoFactor}
            error={errors.service?.message}
            htmlFor="two-factor"
            labelName="Two factor"
            register={register('twoFactor')}
            type="checkbox"
          />
          <FormOrga
            defaultValue={pwInfo.secret}
            error={errors.service?.message}
            htmlFor="secret"
            labelName="Secret"
            register={register('secret')}
            type="text"
          />
          <div className="mt-14 flex flex-row items-center justify-center gap-24">
            <input className="page-transition-btn" type="submit" value="Back" />
            <input className="page-transition-btn" type="submit" value="Send" />
          </div>
        </form>
      </main>
    </>
  )
}
