import { FC, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import NakedInput from '@/components/NakedInput'
import SearchModal from '@/application/SearchModal'

const Description: FC = () => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false)

  return (
    <div className="text-center">
      <h1 className="text-6xl md:text-8xl font-bold mt-20 md:mt-48 mb-14">Make Your Voice Heard</h1>
      <h2 className="text-2xl md:text-4xl font-medium mb-6 md:mb-14">
        In-text comments for more connection
      </h2>
      <div className="max-w-5xl mx-auto mb-14">
        <p className="text-lg md:text-2xl text-on-background leading-loose">
          Chuckroo is a tech blog platform that provide a seamless and engaging experience for tech
          enthusiasts to share their knowledge and connect with others in the community.
        </p>
      </div>
      <div className="max-w-xl mx-auto px-3 md:px-16 mb-20 md:mb-40 border border-[#666666] text-on-background rounded-full">
        <NakedInput
          className="rounded-full pb-1 md:py-7 placeholder:text-xs md:placeholder:text-lg placeholder:text-on-background mix-blend-multiply text-center"
          prefix={<FiSearch />}
          type="text"
          placeholder="Search our blogs for a world of inspiration..."
          onClick={() => setIsSearchModalOpen(true)}
        />
        {isSearchModalOpen && <SearchModal onClose={() => setIsSearchModalOpen(false)} />}
      </div>
    </div>
  )
}

export default Description
