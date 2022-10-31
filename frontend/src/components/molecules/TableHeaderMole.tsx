import { HeaderCell } from "components/atoms/tables/HeaderCell"

export const TableHeaderMole: React.FC = () => {
  return (
    <>
      <tr>
        <HeaderCell text="サービス" />
        <HeaderCell text="メールアドレス" />
        <HeaderCell text="名前" />
        <HeaderCell text="パスワード" />
        <HeaderCell text="2段階認証" />
        <HeaderCell text="シークレット" />
      </tr>
    </>
  )
}
