import { HeaderOrga } from 'components/organisms'
import { HomeForm } from 'components/organisms/HomeForm'

export const HomeEdit: React.FC = () => {
  return (
    <>
      <HeaderOrga location="index" />
      <main>
        <HomeForm />
      </main>
    </>
  )
}
