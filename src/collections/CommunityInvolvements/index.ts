import { CollectionConfig } from 'payload'

const CommunityInvolvements: CollectionConfig = {
  slug: 'communityInvolvements',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'organization',
      type: 'text',
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
  ],
}

export default CommunityInvolvements
