import { FormOrga } from 'components/organisms/FormOrga'
import { HeaderOrga } from 'components/organisms/HeaderOrga'

type Props = {
  defaultChecked: boolean
  serviceDefault: string
  emailDefault: string
  nameDefault: string
  passwordDefault: string
  secretDefault: string
  pwId?: number
  userId?: number
}

export const EditTemp: React.FC<Props> = ({
  defaultChecked,
  serviceDefault,
  emailDefault,
  nameDefault,
  passwordDefault,
  secretDefault,
  pwId,
  userId
}) => {
  return (
    <>
      <HeaderOrga />
      <main>
        <FormOrga
          defaultChecked={defaultChecked}
          emailDefault={emailDefault}
          nameDefault={nameDefault}
          passwordDefault={passwordDefault}
          pwId={pwId}
          secretDefault={secretDefault}
          serviceDefault={serviceDefault}
          userId={userId}
        />
      </main>
    </>
  )
}
