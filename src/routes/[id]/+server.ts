import type { RequestHandler } from './$types';
import prisma from '../../utils/prisma';
import { error, redirect } from '@sveltejs/kit';

export const GET = (async ({ request, params, getClientAddress }) => {
  const id = params.id;

  const link = await prisma.link.findUnique({
    where: {
      id,
    },
  });

  if (!link) throw error(404, 'Link not found');

  await prisma.clicker.create({
    data: {
      linkId: link.id,
      ip: getClientAddress(),
      userAgent: request.headers.get('user-agent'),
    },
  });

  throw redirect(302, link.redirect);
}) satisfies RequestHandler;
