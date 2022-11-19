import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { useContext } from 'react'

import { ServerFormInput } from 'types/form'
import { pwRegister, pwUpdater, UserIdContext } from 'utils'
import { serverRegister, serverUpdater } from 'utils/mutation'

import type { SubmitHandler } from 'react-hook-form'
import type { FormInput, Message } from 'types'

export const useSubmit = () => {
  const router = useRouter()
  const [addPw, { data: addPwMessage }] = useMutation<Message>(pwRegister)
  const [updatePw, { data: updatePwMessage }] = useMutation<Message>(pwUpdater)
  const [addServer, { data: addServerMessage }] =
    useMutation<Message>(serverRegister)
  const [updateServer, { data: updateServerMessage }] =
    useMutation<Message>(serverUpdater)
  const userId = useContext(UserIdContext)

  const onSubmitHome: SubmitHandler<FormInput> = async (data) => {
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

  const onSubmitServer: SubmitHandler<ServerFormInput> = async ({
    userId,
    hostname,
    ip,
    password,
    username,
    id,
    usage,
    device,
    port,
    url
  }) => {
    if (router.pathname === '/new') {
      await addServer({
        variables: {
          server: {
            userId,
            usage,
            hostname,
            ip,
            username,
            password,
            device,
            port,
            url
          }
        }
      })
      await router.push('/server')
    }
    if (router.pathname === '/edit') {
      await updateServer({
        variables: {
          server: {
            id,
            usage,
            hostname,
            ip,
            username,
            password,
            device,
            port,
            url
          }
        }
      })
      await router.push('/server')
    }
  }

  return {
    onSubmitHome,
    addPwMessage,
    updatePwMessage,
    onSubmitServer,
    addServerMessage,
    updateServerMessage
  }
}
