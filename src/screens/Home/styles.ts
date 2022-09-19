import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
`;

export const Img = styled.img`
  max-width: 40rem;
  margin: 1rem;
`;

export const BoxesRow = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
  }
`;
export const Title = styled.h1`
  margin-bottom: 2.5rem;
`;

export const Main = styled.h1`
  font-size: 1.5rem;
  line-height: 2.2rem;
  margin: 8px 0px;
  max-width: 400px;
  text-align: center;
  color: #41d1ff;
`;

export const Text = styled.p`
  max-width: 640px;
  font-weight: bold;
  font-size: 1.5em;
  text-align: center;
  margin-bottom: 16px;
  b {
    color: #41d1ff;
  }
`;

export const Small = styled.p`
  max-width: 500px;
  font-weight: bold;
  font-size: 1em;
  text-align: center;
  margin-bottom: 16px;
  b {
    color: #41d1ff;
  }
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  background: none;
  border: 4px solid ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.secondary};
  font-weight: bold;
  font-size: 16pt;
  padding: 0 1.25rem;
  border-radius: 6px;
  margin: 0 1rem;
  margin-bottom: 24px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  :hover {
    color: #fff;
    background: ${({ theme }) => theme.secondary};
  }

  svg {
    margin: 0 5px 0 0;
  }
  max-width: 350px;
  padding: 24px;
`;

export const Div = styled.hr`
  margin: 24px 0px;
  background-color: white;
  width: 100%;
  max-width: 600px;
  height: 1px;
`;
