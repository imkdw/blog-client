'use client';

import { FormEvent } from 'react';

interface Props {
  children: React.ReactNode;
}
export default function SignUpForm({ children }: Props) {
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler} className="flex w-full flex-col items-center justify-center gap-[30px]">
      {children}
    </form>
  );
}
