import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'

import { Message } from 'types/form'
import { pwDeleter } from 'utils/mutation'

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
