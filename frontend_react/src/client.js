import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'u7jdpokj',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skM7Fp43jOPXuQcxUC8cG3zdNBdoqyjSmdDnZeBwTfCq96bVE1OFvi2ibd7MshFzzH40LfELfeaaU96gNj3dhWntLMVyCQKPjRqRF559BpWxqSPOXJlwV43YUbPGbzGMixOC6bvigaJ4K7F9jNDIcysxgcCE0R79WRvHjeFKu3S7eDnB0DWb',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
