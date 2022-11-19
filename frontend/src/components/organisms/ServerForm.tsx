import { yupResolver } from '@hookform/resolvers/yup'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'

import { Nav } from 'components/atoms'
import { useSubmit } from 'hooks'
import { ServerFormInput } from 'types/form'
import { ServerInfoContext } from 'utils/context/fetchData'
import { serverFormSchema } from 'utils/schema'

import { CommonForm } from './index'

export const ServerForm: React.FC = () => {
  const { id, usage, hostname, ip, username, password, device, port, url } =
    useContext(ServerInfoContext)
  const { onSubmitServer } = useSubmit()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ServerFormInput>({
    defaultValues: {
      id,
      usage,
      hostname,
      ip,
      username,
      password,
      device,
      port,
      url
    },
    resolver: yupResolver(serverFormSchema)
  })

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitServer)}>
        <CommonForm
          className="w-80"
          error={errors.usage?.message}
          htmlFor="usage"
          labelName="Usage"
          register={register('usage')}
          type="text"
        />
        <CommonForm
          className="w-80"
          error={errors.hostname?.message}
          htmlFor="hostname"
          labelName="Hostname"
          register={register('hostname')}
          type="text"
        />
        <CommonForm
          className="w-80"
          error={errors.ip?.message}
          htmlFor="ip"
          labelName="IP"
          register={register('ip')}
          type="text"
        />
        <CommonForm
          className="w-80"
          error={errors.username?.message}
          htmlFor="username"
          labelName="Username"
          register={register('username')}
          type="text"
        />
        <CommonForm
          className="w-80"
          error={errors.password?.message}
          htmlFor="password"
          labelName="Password"
          register={register('password')}
          type="text"
        />
        <CommonForm
          className="w-80"
          error={errors.device?.message}
          htmlFor="device"
          labelName="device"
          register={register('device')}
          type="text"
        />
        <CommonForm
          className="w-80"
          error={errors.port?.message}
          htmlFor="port"
          labelName="Port"
          register={register('port')}
          type="number"
        />
        <CommonForm
          className="w-80"
          error={errors.device?.message}
          htmlFor="device"
          labelName="URL"
          register={register('device')}
          type="text"
        />
        <div className="mt-14 flex flex-row items-center justify-center gap-24">
          <Nav className="page-transition-btn" href="/server" navText="Back" />
          <input className="page-transition-btn" type="submit" value="Send" />
        </div>
      </form>
    </>
  )
}
