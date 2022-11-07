import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { FormOrga } from 'components/organisms/FormOrga'
import { HeaderOrga } from 'components/organisms/HeaderOrga'
import { useSubmit } from 'hooks/useSubmit'
import { FormInput } from 'types/form'
import { formSchema } from 'utils/schema'

export const NewTemp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInput>({
    resolver: yupResolver(formSchema)
  })

  const [onSubmit] = useSubmit()
  return (
    <>
      <HeaderOrga />
      <main>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormOrga
            error={errors.service?.message}
            htmlFor="service"
            labelName="Service"
            register={register('service')}
            type="text"
          />
          <FormOrga
            error={errors.email?.message}
            htmlFor="email"
            labelName="Email"
            register={register('email')}
            type="text"
          />
          <FormOrga
            error={errors.name?.message}
            htmlFor="name"
            labelName="Name"
            register={register('name')}
            type="text"
          />
          <FormOrga
            error={errors.password?.message}
            htmlFor="password"
            labelName="Password"
            register={register('password')}
            type="text"
          />
          <FormOrga
            error={errors.twoFactor?.message}
            htmlFor="two-factor"
            labelName="Two factor"
            register={register('twoFactor')}
            type="checkbox"
          />
          <FormOrga
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
        </form>
      </main>
    </>
  )
}
