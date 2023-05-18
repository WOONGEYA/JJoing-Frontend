import React, { useState } from 'react'
import * as S from './style'

const PostForm = () => {
  const [writer, setWriter] = useState('');
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // 제출 로직을 처리하세요
    // 예: 서버로 데이터 보내기 등
  };

  return (
    <S.PageContainer>
      <form onSubmit={handleSubmit}>
        <S.FormContainer>
          <S.Label>작성자</S.Label>
          <S.FormInput
            type="text"
            value={writer}
            onChange={(e) => setWriter(e.target.value)}
          />
          <S.Label>날짜</S.Label>
          <S.FormInput
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <S.Label>제목</S.Label>
          <S.FormInput
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <S.Label>내용</S.Label>
          <S.FormTextArea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <S.SubmitButton type="submit">게시</S.SubmitButton>
        </S.FormContainer>
      </form>
    </S.PageContainer>
  );
};

export default PostForm;
