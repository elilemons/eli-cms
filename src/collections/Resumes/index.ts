import { CollectionConfig } from 'payload'

const Resumes: CollectionConfig = {
  slug: 'resumes',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'contactInformation',
      type: 'relationship',
      relationTo: 'contactInformations',
    },
    {
      name: 'summary',
      type: 'textarea',
    },
    {
      name: 'skills',
      type: 'relationship',
      relationTo: 'skills',
      hasMany: true,
    },
    {
      name: 'jobs',
      type: 'relationship',
      relationTo: 'jobs',
      hasMany: true,
    },
    {
      name: 'communityInvolvements',
      type: 'relationship',
      relationTo: 'communityInvolvements',
      hasMany: true,
    },
    {
      name: 'references',
      type: 'relationship',
      relationTo: 'references',
      hasMany: true,
    },
  ],
}

export default Resumes
