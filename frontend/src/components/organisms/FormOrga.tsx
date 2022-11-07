import { ComponentPropsWithoutRef } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

import { InputForm } from 'components/molecules/InputForm'

type Props = ComponentPropsWithoutRef<'input'> & {
  htmlFor: string
  labelName: string
  register: UseFormRegisterReturn
  error?: string
}

export const FormOrga: React.FC<Props> = ({
  htmlFor,
  register,
  labelName,
  type,
  error,
  defaultValue,
  checked,
  className,
  defaultChecked
}) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <InputForm
          checked={checked}
          className={className}
          defaultChecked={defaultChecked}
          defaultValue={defaultValue}
          error={error}
          htmlFor={htmlFor}
          labelName={labelName}
          register={register}
          type={type}
        />
      </div>
    </>
  )
}
