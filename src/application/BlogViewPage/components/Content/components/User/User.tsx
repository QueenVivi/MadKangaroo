import useBlog from '@/hooks/useBlog'
import Blog from '@/types/Blog'
import { useRouter } from 'next/router'
import { FC } from 'react'
import useSWR from 'swr'
import Info from './components/Info'
import LatestBlogHighlight from './components/LatestBlogHighlight'

const User: FC = () => {
  const router = useRouter()
  const { id: blogId } = router.query
  const { blog } = useBlog()

  const user = blog?.user

  const { data: blogs } = useSWR(user && `/api/blogs?userId=${user.id}&exclude=${blogId}&perPage=2`)

  if (!blogs) {
    return null
  }

  return (
    <div className="border-t md:border-l md:pl-9 pt-6 md:pt-3 pb-14 md:pb-20 grow">
      <div className="text-on-background text-sm mb-3">Posted by</div>
      {user && <Info name={user.name} image={user.image} occupation={user.occupation} />}

      {blogs.length > 0 && (
        <>
          <div className="text-xs text-on-background mb-3">Latest blogs</div>
          {blogs.map(({ id, title, updatedAt }: Blog) => (
            <LatestBlogHighlight key={id} title={title} updatedAt={updatedAt} id={id} />
          ))}
        </>
      )}
    </div>
  )
}

export default User
