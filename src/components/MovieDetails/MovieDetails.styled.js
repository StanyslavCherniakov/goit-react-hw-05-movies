import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Poster = styled.img`
  width: 200px;
  margin-right: 20px;
`;

export const WrapperDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 300px;
`;

export const Title = styled.p`
  font-size: 30px;
  font-weight: bold;

`;

export const Overview = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

export const Genres = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

export const GenreElement = styled.span`
  margin-right: 10px;
`;

export const NavigationLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 60px;
  height: 30px;
  margin-bottom: 10px;
  margin-right: 10px;
  margin-top: 10px;
  padding: 4px;

  background-color: coral;
  border-radius: 5px;
`;

