import crypto from 'crypto';

export const generateRandomUrlSafeBase64String = (length_in_bytes: number) => {
  const random = crypto.randomBytes(length_in_bytes).toString('base64url');

  return random;
};
