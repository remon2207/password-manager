import { FormOrga } from 'components/organisms/FormOrga'
import { HeaderOrga } from 'components/organisms/HeaderOrga'

export const NewTemp: React.FC = () => {
  return (
    <>
      <HeaderOrga />
      <main>
        <FormOrga
          defaultChecked={false}
          emailDefault=""
          nameDefault=""
          passwordDefault=""
          secretDefault=""
          serviceDefault=""
        />
      </main>
    </>
  )
}
