import { useContext } from 'react'

import { TableWrapper } from 'components/atoms'
import { TableBodyMole, TableHeaderMole } from 'components/molecules'
import { ServerCellDataContext } from 'utils'

import { CommonTable } from './CommonTable'
import { PwCell } from './PwCell'

export const ServerTable: React.FC = () => {
  const cells = useContext(ServerCellDataContext)
  const headerCellText = [
    '使い方',
    'ホスト名',
    'IP',
    'ユーザー名',
    'パスワード',
    'デバイス',
    'ポート',
    'URL'
  ]

  return (
    <>
      <TableWrapper>
        <thead>
          <TableHeaderMole headerCellText={headerCellText} />
        </thead>
        <tbody>
          {cells.map((cell) => (
            <CommonTable
              key={cell.id}
              editText={cell.usage}
              id={cell.id}
              location="server"
            >
              <TableBodyMole>{cell.hostname}</TableBodyMole>
              <TableBodyMole>{cell.ip}</TableBodyMole>
              <TableBodyMole>{cell.username}</TableBodyMole>
              <PwCell pw={cell.password} />
              <TableBodyMole>{cell.device}</TableBodyMole>
              <TableBodyMole>{cell.port}</TableBodyMole>
              <TableBodyMole>{cell.url}</TableBodyMole>
            </CommonTable>
          ))}
        </tbody>
      </TableWrapper>
    </>
  )
}
