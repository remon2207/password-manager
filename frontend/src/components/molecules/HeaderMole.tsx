import { CreateBtn } from 'components/atoms/Headers/CreateBtn'
import { SignOutBtn } from 'components/atoms/Headers/SignOutBtn'
import { Title } from 'components/atoms/Headers/Title'

export const HeaderMole: React.FC = () => {
  return (
    <>
      <SignOutBtn className="page-transition-btn ml-auto" />
      <Title className="text-2xl font-bold mx-auto" />
      <CreateBtn className="page-transition-btn mr-auto" />
    </>
  )
}
