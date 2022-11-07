import { useContext, useEffect } from 'react'

import { HeaderOrga } from 'components/organisms/HeaderOrga'
import { TableOrga } from 'components/organisms/TableOrga'
import { StatusContext } from 'utils/context/status'

export const HomeTemp: React.FC = () => {
  const status = useContext(StatusContext)
  return (
    <>
      <HeaderOrga />
      <main>
        <div className="flex flex-col items-center justify-center">
          {status && <p className="p-2 bg-green-200 w-full text-center">Created password info successfully</p>}
          <TableOrga />
        </div>
      </main>
    </>
  )
}
