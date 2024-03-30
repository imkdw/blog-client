interface Props {
  text: string;
}

export default function HeadingIcon({ text }: Props) {
  return <p className="font-bold text-[18px]">{text}</p>;
}
