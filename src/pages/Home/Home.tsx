import { useTranslation } from "react-i18next";
import './Home.scss';

const Home = () => {
  const {t} = useTranslation();

  return (
    <section>
      <div className="container">
        <h1 className="home__title">
          {t('welcome')}
        </h1>
      </div>
    </section>
  );
};

export default Home;