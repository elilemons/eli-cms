import { CollectionConfig } from 'payload'

const SkillTypes: CollectionConfig = {
  slug: 'skillTypes',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
  ],
}

export default SkillTypes
