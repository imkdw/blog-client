import Link from 'next/link';
import { Instagram, GitHub, MailOutline } from '@mui/icons-material';

export default function FooterContact() {
  const CONTACT_DATA = [
    {
      id: 1,
      href: 'https://github.com/imkdw',
      icon: <GitHub sx={{ width: '35px', height: '35px' }} />,
      target: '_blank',
    },
    {
      id: 2,
      href: 'https://www.instagram.com/woo_dong_99',
      icon: <Instagram sx={{ width: '35px', height: '35px' }} />,
      target: '_blank',
    },
    {
      id: 3,
      href: 'mailto:imkdw@kakao.com',
      icon: <MailOutline sx={{ width: '35px', height: '35px' }} />,
    },
  ];

  return (
    <ul className="flex h-[40%] w-full list-none items-center justify-center gap-5">
      {CONTACT_DATA.map((contact) => (
        <li key={contact.id}>
          <Link href={contact.href} target={contact.target}>
            {contact.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
}
