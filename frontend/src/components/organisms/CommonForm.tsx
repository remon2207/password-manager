import { ComponentPropsWithoutRef } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

import { InputForm } from 'components/molecules'

type Props = ComponentPropsWithoutRef<'input'> & {
  register?: UseFormRegisterReturn
  error?: string
  htmlFor: string
  labelName: string
}

export const CommonForm: React.FC<Props> = ({
  error,
  htmlFor,
  labelName,
  register,
  type,
  className,
  id
}) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <InputForm
          className={className}
          error={error}
          htmlFor={htmlFor}
          id={id}
          labelName={labelName}
          register={register}
          type={type}
        />
      </div>
    </>
  )
}
