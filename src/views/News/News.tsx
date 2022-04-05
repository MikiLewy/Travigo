import React, { useState, useEffect } from 'react';
import Headline from 'components/atoms/Headline/Headline';
import axios from 'axios';
import {
  Category,
  ContentWrapper,
  Date,
  Description,
  ImageWrapper,
  NewsWrapper,
  StyledButton,
  StyledViewWrapper,
  Title,
  Wrapper,
} from './News.styles';
import Loader from 'components/atoms/Loader/Loader';
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';

interface NewsProps {}
const query = `{
  allNews {
    id
    title
  	category
    date
    image{
      url
    }
    content
  }
}`;

const News: React.FC<NewsProps> = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.post(
          'https://graphql.datocms.com/',
          {
            query: query,
          },
          {
            headers: {
              authorization: `Bearer ${process.env.REACT_APP_DATO_CMS}`,
            },
          }
        );
        setNews(data.data.allNews);
      } catch (e) {
        setError('Cannot fetch the news. Try again later');
      }
    })();
  }, []);
  return (
    <Wrapper>
      <Headline title="News" content="Check what is going on in travel world" />
      <NewsWrapper>
        {news.length > 0 ? (
          news.map(({ id, title, content, category, date, image: { url } }) => (
            <StyledViewWrapper key={id}>
              <ContentWrapper>
                <div>
                  <Title>{title}</Title>
                  <Category>{category}</Category>
                </div>
                <Date>{date}</Date>
                <ImageWrapper>
                  <img src={url} alt={title} />
                </ImageWrapper>
                <Description>{content}</Description>
                <StyledButton>Read more</StyledButton>
              </ContentWrapper>
            </StyledViewWrapper>
          ))
        ) : error ? (
          ''
        ) : (
          <Loader />
        )}
      </NewsWrapper>
      {error ? <ErrorMessage message={error} /> : ''}
    </Wrapper>
  );
};

export default News;
