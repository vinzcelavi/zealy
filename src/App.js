import React, { useState, useContext } from 'react';
import './styles.css';
import ZealyCursor from './components/ZealyCursor';
import { MouseContext } from './context/mouse-context';
import CommentBox from './components/CommentBox';

export default function App() {
  const { cursorChangeHandler } = useContext(MouseContext);
  const [commentPos, setCommentPos] = useState({ open: false, x: 0, y: 0 });

  const handleCommentPosition = event => {
    const { clientX, clientY } = event;

    setCommentPos({ open: true, x: clientX, y: clientY });
  };

  return (
    <div className="App" onClick={handleCommentPosition}>
      <ZealyCursor />
      <div onMouseEnter={() => cursorChangeHandler('hovered')} onMouseLeave={() => cursorChangeHandler('')}>
        <h1>Hello Zealy</h1>
      </div>

      <CommentBox options={commentPos} />
    </div>
  );
}
