import { Description } from 'components/atoms/forms/Description'
import { Input } from 'components/atoms/forms/Input'

type Props = {
  htmlFor: string
  labelText: string
  type: string
}

export const FormMole: React.FC<Props> = ({ htmlFor, labelText, type }) => {
  return (
    <>
      <Description htmlFor={htmlFor}>
        {labelText}
      </Description>
      <Input type={type} />
    </>
  )
}
