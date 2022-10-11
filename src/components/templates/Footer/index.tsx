import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";

const Container = styled.footer`
  display: flex;
  justify-items: center;
  align-items: center;
`;
const Link = styled.a`
  display: flex;
  align-items: center;
  background: none;
  border: 4px solid ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.secondary};

  font-size: 24pt;
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
  padding: 0.75rem;
`;

const Footer = () => {
  return (
    <Container>
      <Link href="https://www.instagram.com/bailedobrabogv/">
        <AiOutlineInstagram />
      </Link>
    </Container>
  );
};

export default Footer;
