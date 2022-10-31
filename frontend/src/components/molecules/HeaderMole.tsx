import { Nav } from 'components/atoms/headers/Nav'

export const HeaderMole: React.FC = () => {
  return (
    <>
      <Nav
        className="page-transition-btn"
        href="/signin"
        navText="サインアウト"
      />
      <Nav href="/" navText="パスワード管理" />
      <Nav className="page-transition-btn" href="/new" navText="新規作成" />
    </>
  )
}
