import { AiTwotoneCamera } from "react-icons/ai";
import * as S from "./styles";

import Footer from "../../components/templates/Footer";

const LINK_FOTOS_BAILE =
  "https://drive.google.com/drive/folders/1B9w7uytqLsjkQbhuJ_M76IVEjqUug-G3?usp=sharing";

const Home: React.FC = () => {
  return (
    <S.Container>
      <S.Img src="./bailedobrabo.png" alt="Logo do baile do brabo" />
      <S.Link href={LINK_FOTOS_BAILE}>
        <AiTwotoneCamera />
        Baile do Brabro - 08/10/22
      </S.Link>
      <Footer />
    </S.Container>
  );
};

export default Home;
