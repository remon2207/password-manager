import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { useContext } from 'react'

import { ServerFormInput } from 'types/form'
import { pwRegister, pwUpdater, UserIdContext } from 'utils'
import { SetToHashedContext, ToHashedContext } from 'utils/context/toggle'
import {
  notHashedPwRegister,
  serverRegister,
  serverUpdater
} from 'utils/mutation'

import type { SubmitHandler } from 'react-hook-form'
import type { FormInput, Message } from 'types'

export const useSubmit = () => {
  const router = useRouter()
  const [addPw, { data: addPwMessage }] = useMutation<Message>(pwRegister)
  const [addNotHashedPw, { data: addNotHashedMessage }] =
    useMutation<Message>(notHashedPwRegister)
  const [updatePw, { data: updatePwMessage }] = useMutation<Message>(pwUpdater)
  const [addServer, { data: addServerMessage }] =
    useMutation<Message>(serverRegister)
  const [updateServer, { data: updateServerMessage }] =
    useMutation<Message>(serverUpdater)
  const userId = useContext(UserIdContext)
  const toHashed = useContext(ToHashedContext)
  const setHashed = useContext(SetToHashedContext)
  console.log(toHashed)

  const onSubmitHome: SubmitHandler<FormInput> = async ({
    id,
    service,
    email,
    name,
    password,
    twoFactor,
    secret
  }) => {
    if (router.pathname === '/new' && toHashed) {
      await addPw({
        variables: {
          pw: {
            userId,
            service,
            email,
            name,
            password,
            twoFactor,
            secret
          }
        }
      })
      await router.push('/')
    }
    if (router.pathname === '/new' && !toHashed) {
      await addNotHashedPw({
        variables: {
          pw: {
            userId,
            service,
            email,
            name,
            password,
            twoFactor,
            secret
          }
        }
      })
      setHashed(true)
      await router.push('/')
    }
    if (router.pathname === '/edit') {
      await updatePw({
        variables: {
          pw: {
            id,
            service,
            email,
            name,
            password,
            twoFactor,
            secret
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
    addNotHashedMessage,
    updatePwMessage,
    onSubmitServer,
    addServerMessage,
    updateServerMessage
  }
}
