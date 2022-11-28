import { useContext } from 'react'

import { TableWrapper } from 'components/atoms'
import { TableBodyMole, TableHeaderMole } from 'components/molecules'
import { CellDataContext } from 'utils'

import { CommonTable } from './CommonTable'
import { PwCell } from './PwCell'

export const HomeTable: React.FC = () => {
  const cells = useContext(CellDataContext)
  const headerCellText = [
    'サービス',
    'メールアドレス',
    '名前',
    'パスワード',
    '2段階認証の有無',
    'シークレット'
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
              editText={cell.service}
              id={cell.id}
              location="index"
            >
              <TableBodyMole>{cell.email}</TableBodyMole>
              <TableBodyMole>{cell.name}</TableBodyMole>
              <PwCell pw={cell.password} />
              <TableBodyMole>{cell.twoFactor ? '有' : '無'}</TableBodyMole>
              <TableBodyMole>{cell.secret}</TableBodyMole>
            </CommonTable>
          ))}
        </tbody>
      </TableWrapper>
    </>
  )
}
