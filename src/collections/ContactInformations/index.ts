import { authenticated } from '@/access/authenticated'
import { CollectionConfig } from 'payload'

const ContactInformations: CollectionConfig = {
  slug: 'contactInformations',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: authenticated,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'website',
      type: 'text',
    },
    {
      name: 'email',
      type: 'text',
    },
    {
      name: 'number',
      type: 'text',
    },
    {
      name: 'linkedIn',
      type: 'text',
    },
    {
      name: 'github',
      type: 'text',
    },
    {
      name: 'codepen',
      type: 'text',
    },
  ],
}

export default ContactInformations
