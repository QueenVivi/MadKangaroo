import { FC, ReactNode } from 'react'
import { useSession } from 'next-auth/react'
import Layout from '@/application/Layout'
import classNames from 'classnames'
import Navigation from './components/Navigation'

interface Props {
  children: ReactNode
  className?: string
}

const UserLayout: FC<Props> = ({ children, className = undefined }) => {
  const { data: session } = useSession()

  return (
    <Layout>
      {session ? (
        <>
          <Navigation />
          <div
            className={classNames(
              'max-w-[1140px]',
              'mt-8',
              'md:mt-12',
              'mb-[100px]',
              'xl:mb-[120px]',
              'mx-6',
              'xl:mx-auto',
              className
            )}
          >
            {children}
          </div>
        </>
      ) : (
        'Log In to Operate'
      )}
    </Layout>
  )
}

export default UserLayout
