import { authenticated } from '@/access/authenticated'
import { CollectionConfig } from 'payload'

const References: CollectionConfig = {
  slug: 'references',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: authenticated,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
    },
    {
      name: 'contactInformation',
      type: 'text',
    },
    {
      name: 'relationship',
      type: 'text',
    },
  ],
}

export default References
