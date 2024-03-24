import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface Props {
  content: string;
  changeHandler: (content: string) => void;
}

export default function ArticleContentEditor({ content, changeHandler }: Props) {
  const changeContentHandler = (value: string) => {
    changeHandler(value);
  };

  const modules = {
    toolbar: [
      [{ header: [2, 3, 4, 5, false] }],
      [{ color: [] }, { background: [] }],
      ['bold', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const formats = [
    'font',
    'size',
    'header',
    'color',
    'background',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
  ];

  return (
    <ReactQuill
      theme="snow"
      value={content}
      onChange={changeContentHandler}
      style={{ height: '600px' }}
      modules={modules}
      formats={formats}
    />
  );
}
