import { FC } from 'react'
import Logo from '@/application/Logo'
import Signature from '@/application/Signature'

const Title: FC = () => (
  <div>
    <Logo />
    <div className="text-on-background my-3">
      <Signature />
    </div>
  </div>
)

export default Title
