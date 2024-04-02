import { ReadonlyHeaders } from 'next/dist/server/web/spec-extension/adapters/headers';

// eslint-disable-next-line import/prefer-default-export
export const isMobile = (header: ReadonlyHeaders): boolean => {
  const userAgent = header.get('user-agent');
  return !!userAgent!.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);
};
