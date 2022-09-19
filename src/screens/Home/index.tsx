import { AiOutlineWhatsApp } from "react-icons/ai";
import * as S from "./styles";

const LINK_WPP_BRABO =
  "https://api.whatsapp.com/send?phone=5533999877992&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20sobre%20o%20Baile%20do%20Brabo!";

const Home: React.FC = () => {
  return (
    <S.Container>
      <S.Img src="./bailedobrabo.png" alt="Logo do baile do brabo" />
      <S.Link href={LINK_WPP_BRABO}>
        <AiOutlineWhatsApp />
        Entre em contato
      </S.Link>
    </S.Container>
  );
};

export default Home;
