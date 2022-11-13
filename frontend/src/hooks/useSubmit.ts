import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { useContext } from 'react'

import { UserIdContext } from 'utils/context/user'
import { pwRegister, pwUpdater } from 'utils/mutation'

import type { SubmitHandler } from 'react-hook-form'
import type { FormInput, Message } from 'types/form'

export const useSubmit = () => {
  const router = useRouter()
  const [addPw, { data: addMessage }] = useMutation<Message>(pwRegister)
  const [updatePw, { data: updateMessage }] = useMutation<Message>(pwUpdater)
  const userId = useContext(UserIdContext)

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    if (router.pathname === '/new') {
      await addPw({
        variables: {
          pw: {
            userId,
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
    if (router.pathname === '/edit') {
      await updatePw({
        variables: {
          pw: {
            id: data.id,
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
  }

  return { onSubmit, addMessage, updateMessage }
}
