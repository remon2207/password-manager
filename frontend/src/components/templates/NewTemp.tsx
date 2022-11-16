import { FormOrga, HeaderOrga } from 'components/organisms'

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
