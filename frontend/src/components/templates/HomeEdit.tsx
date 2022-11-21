import { MouseEventHandler } from 'react'

import { HeaderOrga } from 'components/organisms'
import { HomeForm } from 'components/organisms/HomeForm'

type Props = {
  onClick: MouseEventHandler<HTMLInputElement>
}

export const HomeEdit: React.FC<Props> = ({ onClick }) => {
  return (
    <>
      <HeaderOrga location="index" />
      <main>
        <HomeForm>
          <input
            className="page-transition-btn mx-auto mt-14 block"
            onClick={onClick}
            type="button"
            value="Delete"
          />
        </HomeForm>
      </main>
    </>
  )
}
