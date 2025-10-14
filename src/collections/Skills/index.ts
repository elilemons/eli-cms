import { CollectionConfig } from 'payload'

const Skills: CollectionConfig = {
  slug: 'skills',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'type',
      type: 'relationship',
      relationTo: 'skillTypes',
      required: true,
    },
  ],
}

export default Skills
