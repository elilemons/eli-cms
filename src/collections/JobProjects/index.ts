import { CollectionConfig } from 'payload'

const JobProjects: CollectionConfig = {
  slug: 'jobProjects',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      required: true,
    },
    {
      name: 'skills',
      type: 'relationship',
      relationTo: 'skills',
      hasMany: true,
    },
  ],
}

export default JobProjects
