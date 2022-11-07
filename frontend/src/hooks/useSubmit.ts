import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'

import { pwRegister } from 'utils/mutation'

import type { SubmitHandler } from 'react-hook-form'
import type { FormInput, Message } from 'types/form'

export const useSubmit = () => {
  const router = useRouter()
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

  return [onSubmit]
}
