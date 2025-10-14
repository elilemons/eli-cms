import configPromise from '@payload-config'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import ResumePageClient from './page.client'

type Args = {
  params: Promise<{
    id?: string
  }>
}
export default async function ResumePage({ params: paramsPromise }: Args) {
  const payload = await getPayload({ config: configPromise })
  const { id } = await paramsPromise

  if (!id) return notFound()

  const resume = await payload.findByID({
    collection: 'resumes',
    id,
  })

  return <ResumePageClient resume={resume} />
}
