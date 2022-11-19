import { HeaderOrga } from 'components/organisms'
import { ServerForm } from 'components/organisms/ServerForm'

export const ServerEdit: React.FC = () => {
  return (
    <>
      <HeaderOrga location="server" />
      <main>
        <ServerForm />
      </main>
    </>
  )
}
