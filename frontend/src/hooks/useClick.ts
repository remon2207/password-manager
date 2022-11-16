import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'

import { pwDeleter } from 'utils'

import type { Message } from 'types'

export const useClick = () => {
  const [pwDelete] = useMutation<Message>(pwDeleter)
  const router = useRouter()

  const onClickDelete = async (id: number) => {
    await pwDelete({
      variables: {
        id
      }
    })

    await router.push('/')
  }

  return { onClickDelete }
}
