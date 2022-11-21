import { MouseEventHandler } from 'react'

import { HeaderOrga } from 'components/organisms'
import { ServerForm } from 'components/organisms/ServerForm'

type Props = {
  onClick: MouseEventHandler<HTMLInputElement>
}

export const ServerEdit: React.FC<Props> = ({ onClick }) => {
  return (
    <>
      <HeaderOrga location="server" />
      <main>
        <ServerForm>
          <input
            className="page-transition-btn mx-auto mt-14 block"
            onClick={onClick}
            type="button"
            value="Delete"
          />
        </ServerForm>
      </main>
    </>
  )
}
