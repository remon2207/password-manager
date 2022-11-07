import { useContext } from 'react'

import { FormOrga } from 'components/organisms/FormOrga'
import { HeaderOrga } from 'components/organisms/HeaderOrga'
import { PwInfoContext } from 'utils/context/fetchData'

export const EditTemp: React.FC = () => {
  const pwInfo = useContext(PwInfoContext)
  return (
    <>
      <HeaderOrga />
      <main>
        <FormOrga
          defaultChecked={pwInfo.twoFactor}
          emailDefault={pwInfo.email}
          nameDefault={pwInfo.name}
          passwordDefault={pwInfo.password}
          pwId={pwInfo.id}
          secretDefault={pwInfo.secret}
          serviceDefault={pwInfo.service}
          userId={pwInfo.userId}
        />
      </main>
    </>
  )
}
