import { FormMole } from 'components/molecules/FormMole'

export const FormOrga: React.FC = () => {
  return (
    <>
      <form>
        <div className="flex flex-col items-center justify-center">
          <FormMole htmlFor="service" labelText="Service" type="text" />
          <FormMole htmlFor="email" labelText="Email" type="email" />
          <FormMole htmlFor="name" labelText="Name" type="text" />
          <FormMole htmlFor="password" labelText="Password" type="text" />
          <FormMole htmlFor="two-factor" labelText="Two factor" type="checkbox" />
          <FormMole htmlFor="secret" labelText="Secret" type="text" />
        </div>
      </form>
    </>
  )
}
