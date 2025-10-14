'use client'

import { Resume } from '@/payload-types'
import { FC } from 'react'

type Props = {
  resume: Resume
}
const ResumePageClient: FC<Props> = ({ resume }) => {
  return (
    <div>
      <h1>{resume.title}</h1>
    </div>
  )
}

export default ResumePageClient
