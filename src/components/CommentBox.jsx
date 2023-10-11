import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as ZealyLogo } from './zealy-icon.svg';
// import useLocalStorage from '../hooks/useLocalStorage';

const Root = styled.div`
  position: relative;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.87, 0, 0.13, 1);

  input {
    all: unset;
    font-family: 'Syne', sans-serif;
    font-weight: 400;
    background: none;
    color: rgba(255, 255, 255, 0.9);
  }

  form {
    display: flex;
    align-items: center;
    width: 280px;
    padding: 16px 18px;
    background-color: rgba(0, 0, 0, 0.92);
    border-radius: 8px;
    text-align: left;
    box-shadow:
      #002cbd1f 0 0 2.2px,
      #002cbd0f 0 0 5.3px,
      #002cbd14 0 0 10px,
      #002cbd21 0 0 17.9px,
      #002cbd17 0 0 33.4px,
      #002cbdc9 0 0 120px;

    input[type='text'] {
      flex: 1;
    }

    input[type='button'] {
      color: #cd1d8d;
    }
  }

  ${props =>
    props.posY &&
    `
    top: ${props.posY}px;
  `};

  ${props =>
    props.posX &&
    `
    left: ${props.posX}px;
  `};

  ${props =>
    props.isOpen &&
    `
    transform: translateX(40px);
    visibility: visible;
    opacity: 1;
  `};
`;

const Comment = styled.div`
  width: 280px;
  padding: 16px 18px;
  text-align: left;
  background-color: rgba(0, 0, 0, 0.92);
  border-radius: 8px;
`;

const CommentIcon = styled.div`
  position: absolute;
  top: 0;
  left: -40px;
`;

const CommentBox = ({ options }) => {
  const inputElement = useRef(null);
  const [comment, setComment] = useState({ comment: '', x: 0, y: 0 });

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, [options.x]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('inputElement', inputElement.current.value);
    setComment({ comment: inputElement.current.value, posX: options.x, posY: options.y });
    // useLocalStorage('comment', { open: false, x: 0, y: 0 })
  };

  return (
    <Root posX={options.x} posY={options.y} isOpen={options.open}>
      <CommentIcon>
        <ZealyLogo />
      </CommentIcon>

      <form onSubmit={handleSubmit}>
        <input placeholder="Write something" type="text" ref={inputElement} />
        <input type="button" value="send" />
      </form>

      {comment.comment !== '' ? (
        <Comment posX={options.x} posY={options.y}>
          {comment.comment}
        </Comment>
      ) : null}
    </Root>
  );
};

export default CommentBox;
