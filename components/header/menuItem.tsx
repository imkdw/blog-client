interface Props {
  readonly children: React.ReactNode;
}

export default function MenuItem({ children }: Props) {
  return <li className="flex h-[40px] min-w-[200px] justify-center">{children}</li>;
}
