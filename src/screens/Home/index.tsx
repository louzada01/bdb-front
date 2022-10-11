import {  AiTwotoneCamera } from "react-icons/ai";
import * as S from "./styles";

const LINK_WPP_BRABO =
  "https://api.whatsapp.com/send?phone=5533999877992&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20sobre%20o%20Baile%20do%20Brabo!";

const LINK_FOTOS_BAILE = 'https://drive.google.com/drive/folders/1B9w7uytqLsjkQbhuJ_M76IVEjqUug-G3?usp=sharing'

const Home: React.FC = () => {
  return (
    <S.Container>
      <S.Img src="./bailedobrabo.png" alt="Logo do baile do brabo" />
      <S.Link href={LINK_FOTOS_BAILE}>
        <AiTwotoneCamera />
        Baile do Brabro - 08/10/22
      </S.Link>
    </S.Container>
  );
};

export default Home;
