import { Description } from 'components/atoms/forms/Description'

import type { ComponentPropsWithoutRef } from 'react'
import type { UseFormRegisterReturn } from 'react-hook-form'

type Props = ComponentPropsWithoutRef<'input'> & {
  htmlFor: string
  labelName: string
  register: UseFormRegisterReturn
  error?: string
}

export const InputForm: React.FC<Props> = ({
  htmlFor,
  labelName,
  type,
  register,
  error
}) => {
  return (
    <>
      <Description error={error} htmlFor={htmlFor} labelName={labelName} />
      <input type={type} {...register} />
    </>
  )
}
