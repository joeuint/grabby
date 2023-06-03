import { error } from '@sveltejs/kit';
import prisma from '../utils/prisma';
import type { Actions } from './$types';
import { generateRandomUrlSafeBase64String } from '../utils/base64utils';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const url = data.get('plainURL');

    if (url === null) throw error(400, 'URL redirect cannot be null');

    if (url instanceof File) throw error(400);

    // Generate the ids
    const id = generateRandomUrlSafeBase64String(6);
    const trackingId = generateRandomUrlSafeBase64String(8);

    await prisma.link.create({
      data: {
        id,
        trackingId,
        redirect: url,
      },
    });
  },
} satisfies Actions;
