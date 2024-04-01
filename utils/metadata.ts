interface Params {
  title: string;
  description: string;
  link: string;
  image?: string;
}

const generateCustomMetadata = ({ title, description, link, image }: Params) => ({
  metadataBase: new URL('https://imkdw.dev'),
  title: `IMKDW DEV | ${title}`,
  description: `${description}`,
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  generator: 'Next.js',
  creator: 'IMKDW',
  publisher: 'AWS',
  alternates: {
    canonical: `${link}`,
  },
  icons: 'https://static.imkdw.dev/images/favicon.ico',
  authors: [
    {
      name: 'IMKDW',
      url: 'https://imkdw.dev',
    },
    {
      name: 'IMKDW',
      url: 'https://github.com/imkdw',
    },
  ],
  category: 'blog',
  openGraph: {
    title: `IMKDW DEV | ${title}`,
    description: `${description}`,
    url: `${link}`,
    siteName: 'IMKDW_DEV',
    images: [
      {
        url: image ?? 'https://static.imkdw.dev/images/open-graph.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
});

export default generateCustomMetadata;
