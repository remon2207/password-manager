import { useContext } from 'react'

import { Status } from 'components/atoms'
import { HeaderOrga } from 'components/organisms'
import { ServerTable } from 'components/organisms/ServerTable'
import { SideBar } from 'components/organisms/SideBar'
import { StatusContext } from 'utils'

export const ServerTemp: React.FC = () => {
  const status = useContext(StatusContext)

  return (
    <>
      <HeaderOrga />
      <SideBar
        className="hidden hover:underline xl:block"
        wrapperClassName="absolute left-52 top-36 flex flex-col"
      />
      <main>
        <div className="flex flex-col items-center justify-center">
          {status && (
            <Status
              className="w-full bg-green-200 p-2 text-center"
              statusMessage={status}
            />
          )}
          <ServerTable />
        </div>
      </main>
    </>
  )
}
