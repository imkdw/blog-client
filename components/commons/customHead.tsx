import Head from 'next/head';

interface Props {
  title: string;
  description: string;
  link: string;
}
export default function CustomHead({ title, description, link }: Props) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={link} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow, no-cache" />
      <meta name="generator" content="Next.js" />
      <meta name="creator" content="IMKDW" />
      <meta name="publisher" content="AWS" />
      <link rel="icon" href="https://static.imkdw.dev/images/favicon.ico" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={link} />
      <meta property="og:site_name" content="IMKDW_DEV" />
      <meta property="og:image" content="https://static.imkdw.dev/images/open-graph.png" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:type" content="website" />
      <meta name="author" content="IMKDW" />
      <meta name="author" content="https://imkdw.dev" />
      <meta name="author" content="IMKDW" />
      <meta name="author" content="https://github.com/imkdw" />
    </Head>
  );
}
