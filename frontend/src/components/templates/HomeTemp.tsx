import { useContext } from 'react'

import { Status } from 'components/atoms'
import { HeaderOrga, HomeTable, SideBar } from 'components/organisms'
import { StatusContext } from 'utils'

export const HomeTemp: React.FC = () => {
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
          <HomeTable />
        </div>
      </main>
    </>
  )
}
