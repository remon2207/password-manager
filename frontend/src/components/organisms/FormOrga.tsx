/* eslint-disable react/jsx-props-no-spreading */
import { useMutation } from '@apollo/client'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

import { InputForm } from 'components/molecules/InputForm'
import { pwRegister } from 'utils/mutation'
import { formSchema } from 'utils/schema'

export const FormOrga: React.FC = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInput>({
    resolver: yupResolver(formSchema)
  })

  const [addPw] = useMutation<Message>(pwRegister)

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    await addPw({
      variables: {
        pw: {
          userId: 1,
          service: data.service,
          email: data.email,
          name: data.name,
          password: data.password,
          twoFactor: data.twoFactor,
          secret: data.secret
        }
      }
    })
    await router.push('/')
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center justify-center">
          <InputForm
            error={errors.service?.message}
            htmlFor="service"
            labelName="Service*"
            register={register('service')}
            required
            type="text"
          />
          <InputForm
            error={errors.email?.message}
            htmlFor="email"
            labelName="Email"
            register={register('email')}
            type="email"
          />
          <InputForm
            htmlFor="name"
            labelName="Name"
            register={register('name')}
            type="text"
          />
          <InputForm
            htmlFor="password"
            labelName="Password"
            register={register('password')}
            type="text"
          />
          <InputForm
            htmlFor="two-factor"
            labelName="Two factor"
            register={register('twoFactor')}
            type="checkbox"
          />
          <InputForm
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
