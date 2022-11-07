import { yupResolver } from '@hookform/resolvers/yup'
import { ComponentPropsWithoutRef, useContext } from 'react'
import { useForm } from 'react-hook-form'

import { FormOrga } from 'components/organisms/FormOrga'
import { HeaderOrga } from 'components/organisms/HeaderOrga'
import { useSubmit } from 'hooks/useSubmit'
import { FormInput } from 'types/form'
import { GetPw } from 'types/pw'
import { PwInfoContext } from 'utils/context/fetchData'
import { formSchema } from 'utils/schema'

type Props = {
  defaultValue: string
}

export const EditTemp: React.FC<Props> = ({ defaultValue }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInput>({
    resolver: yupResolver(formSchema)
  })
  const [onSubmit] = useSubmit()
  const pwInfo = useContext(PwInfoContext)
  console.log(pwInfo)

  return (
    <>
      <HeaderOrga />
      <main>
        <form onSubmit={handleSubmit(onSubmit)}>
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
        </form>
      </main>
    </>
  )
}
