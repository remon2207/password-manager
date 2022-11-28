import { yupResolver } from '@hookform/resolvers/yup'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'

import { Nav } from 'components/atoms'
import { useSubmit } from 'hooks'
import { ServerFormInput } from 'types/form'
import { UserIdContext } from 'utils'
import { ServerInfoContext } from 'utils/context/fetchData'
import { serverFormSchema } from 'utils/schema'

import { CommonForm } from './index'

type Props = {
  children?: React.ReactNode
}

export const ServerForm: React.FC<Props> = ({ children }) => {
  const { id, usage, hostname, ip, username, password, device, port, url } =
    useContext(ServerInfoContext)
  const userId = useContext(UserIdContext)
  const { onSubmitServer } = useSubmit()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ServerFormInput>({
    defaultValues: {
      id,
      userId,
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
          labelName="使い方"
          register={register('usage')}
          type="text"
        />
        <CommonForm
          className="w-80"
          error={errors.hostname?.message}
          htmlFor="hostname"
          labelName="ホスト名"
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
          labelName="ユーザー名"
          register={register('username')}
          type="text"
        />
        <CommonForm
          className="w-80"
          error={errors.password?.message}
          htmlFor="password"
          labelName="パスワード"
          register={register('password')}
          type="text"
        />
        <CommonForm
          className="w-80"
          error={errors.device?.message}
          htmlFor="device"
          labelName="デバイス"
          register={register('device')}
          type="text"
        />
        <CommonForm
          className="w-80"
          error={errors.port?.message}
          htmlFor="port"
          labelName="ポート"
          register={register('port')}
          type="number"
        />
        <CommonForm
          className="w-80"
          error={errors.device?.message}
          htmlFor="device"
          labelName="URL"
          register={register('url')}
          type="text"
        />
        <div className="mt-14 flex flex-row items-center justify-center gap-24">
          <Nav className="page-transition-btn" href="/server" navText="戻る" />
          <input className="page-transition-btn" type="submit" value="送信" />
        </div>
        {children}
      </form>
    </>
  )
}
