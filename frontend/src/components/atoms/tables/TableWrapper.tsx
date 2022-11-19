type Props = {
  children?: React.ReactNode
}
export const TableWrapper: React.FC<Props> = ({ children }) => {
  return (
    <>
      <table className="mx-auto w-full table-auto animate-slide-in-bottom lg:w-full xl:w-1/2">
        {children}
      </table>
    </>
  )
}
