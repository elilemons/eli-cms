import { CollectionConfig } from 'payload'

const Jobs: CollectionConfig = {
  slug: 'jobs',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'dateStarted',
      type: 'date',
      required: true,
    },
    {
      name: 'dateEnded',
      type: 'date',
    },
    {
      name: 'location',
      type: 'text',
    },
    {
      name: 'bulletPoints',
      type: 'array',
      fields: [
        {
          name: 'bulletPoint',
          type: 'text',
        },
      ],
    },
    {
      name: 'jobProjects',
      type: 'relationship',
      relationTo: 'jobProjects',
      hasMany: true,
    },
  ],
}

export default Jobs
