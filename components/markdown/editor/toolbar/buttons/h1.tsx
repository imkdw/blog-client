import { useState } from 'react';

interface Props {
  content: string;
  changeContent: (value: string) => void;
}

export default function Heading1({ changeContent, content }: Props) {
  /**
   * Manage text dragged into Textarea State
   */
  const [selectedText, setSelectedText] = useState('');

  const clickHandler = () => {
    /**
     * If there is a selected text, add a # to the beginning of the selected text
     * and add a newline character if the content is not empty
     */
    if (selectedText) {
      const newText = `# ${selectedText}\n`;
      const startIndex = content.indexOf(selectedText);
      const endIndex = startIndex + selectedText.length;
      const [beforeText, afterText] = [content.slice(0, startIndex), content.slice(endIndex)];
      changeContent(`${beforeText}${newText}${afterText}`);
      setSelectedText('');
    } else if (content.length) {
      /**
       * If there is no selected text, add a # to the beginning of the content
       */
      changeContent(`${content}\n# `);
    } else {
      /**
       * If there is no content, add a # to the content
       */
      changeContent('# ');
    }
  };

  /**
   * Save the currently dragged text to the state when the mouse is raised
   */
  const mouseUpHandler = () => {
    const selection = document.getSelection();
    if (selection && selection.rangeCount > 0) {
      const text = selection.toString();
      setSelectedText(text);
    }
  };

  return (
    <button
      className="flex h-full w-full items-center justify-center pl-4  pr-4"
      type="button"
      onClick={clickHandler}
      onMouseUp={mouseUpHandler}
    >
      <span className="font-bold">H1</span>
    </button>
  );
}
