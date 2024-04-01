import { Metadata } from 'next';
import generateCustomMetadata from '../../utils/metadata';

export const metadata: Metadata = {
  ...generateCustomMetadata({
    title: 'About IMKDW',
    description: '안녕하세요 백엔드 개발자 김동우/IMKDW 입니다.',
    link: 'https://imkdw.dev/about',
  }),
};

export default function AboutPage() {
  return (
    <div>
      <h1>안녕하세요! 백엔드 개발자 김동우 입니다.</h1>
      <p>삽질을 통해 얻은 지식과 공부한 다양한 내용을 공유하는 블로그 입니다.</p>
    </div>
  );
}
