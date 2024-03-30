import { ForwardedRef, forwardRef, useState } from 'react';
import { StrikethroughS } from '@mui/icons-material';

interface Props {
  content: string;
  changeContent: (value: string) => void;
}

const Stroke = forwardRef<HTMLTextAreaElement, Props>(
  ({ content, changeContent }, ref: ForwardedRef<HTMLTextAreaElement>) => {
    /**
     * Manage text dragged into Textarea State
     */
    const [selectedText, setSelectedText] = useState('');

    /**
     * Add a bold format to the selected text or add a new line if there is no selected text
     */
    const setCursor = () => {
      if (ref && 'current' in ref && ref.current) {
        /**
         * The position of the cursor is set to the middle of the underline tag
         * <U></U> - 3 characters in the middle of the underline tag
         */
        const MIDDLE_POINTER = 1;
        const position = content.length ? content.length + 2 : MIDDLE_POINTER;

        /**
         * Due to the timing of the setSelectionRange call
         * the DOM updates may not be reflected immediately.
         * Therefore, using setTimeout with a delay of 0 milliseconds introduces a slight delay of about 4 milliseconds.
         */
        setTimeout(() => {
          ref.current?.focus();
          ref.current?.setSelectionRange(position, position);
        }, 0);
      }
    };

    const clickHandler = () => {
      /**
       * If there is a selected text, add a "** **" to the beginning of the selected text
       * and add a newline character if the content is not empty
       */
      if (selectedText) {
        const newText = `~${selectedText}~\n`;
        const startIndex = content.indexOf(selectedText);
        const endIndex = startIndex + selectedText.length;
        const [beforeText, afterText] = [content.slice(0, startIndex), content.slice(endIndex)];
        changeContent(`${beforeText}${newText}${afterText}`);
        setSelectedText('');
      } else if (content.length) {
        /**
         * If there is no selected text, add a # to the beginning of the content
         * TODO: Need to set cursor on middle
         */
        changeContent(`${content}\n~~`);
        setCursor();
      } else {
        /**
         * If there is no content, add a # to the content
         * TODO: Need to set cursor on middle
         */
        changeContent('~~');
        setCursor();
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
        aria-label="format bold button "
      >
        <StrikethroughS />
      </button>
    );
  },
);

Stroke.displayName = 'Stroke';

export default Stroke;
