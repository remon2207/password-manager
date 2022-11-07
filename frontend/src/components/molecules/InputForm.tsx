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
  error,
  defaultValue,
  checked
}) => {
  return (
    <>
      <Description
        className="my-2"
        error={error}
        errorClassName="absolute right-[610px] rounded-md bg-red-300 py-0.5 px-2 text-white"
        htmlFor={htmlFor}
        labelName={labelName}
      />
      <input
        type={type}
        {...register}
        checked={checked}
        defaultValue={defaultValue}
      />
    </>
  )
}