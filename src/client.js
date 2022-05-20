import sanityclient from '@sanity/client';
import imageUrlbuilder from '@sanity/image-url';

export const client = sanityclient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-05-18',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlbuilder(client);

export const urlFor = (source) => builder.image(source);