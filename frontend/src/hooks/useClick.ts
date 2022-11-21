import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'

import { pwDeleter, serverDeleter } from 'utils'

import type { Message } from 'types'

export const useClick = () => {
  const [pwDelete] = useMutation<Message>(pwDeleter)
  const [serverDelete] = useMutation<Message>(serverDeleter)
  const router = useRouter()
  const { location } = router.query

  const onClickDelete = async (id: number) => {
    if (location === 'index') {
      await pwDelete({
        variables: {
          id
        }
      })

      await router.push('/')
    }
    if (location === 'server') {
      await serverDelete({
        variables: {
          id
        }
      })
      await router.push('/server')
    }
  }

  return { onClickDelete }
}
