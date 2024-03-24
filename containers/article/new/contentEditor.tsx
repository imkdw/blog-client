import MDEditor from '@uiw/react-md-editor';

interface Props {
  content: string;
  changeHandler: (content: string) => void;
}

export default function ArticleContentEditor({ content, changeHandler }: Props) {
  const changeContentHandler = (value: string | undefined) => {
    if (value) {
      changeHandler(value);
    }
  };

  return (
    <MDEditor
      value={content}
      height={500}
      onChange={(changedContent) => changeContentHandler(changedContent)}
      highlightEnable={false}
    />
  );
}
