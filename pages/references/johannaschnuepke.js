import Page from '../../components/DetailedPage/Page';
import pic from '/public/img/references/johannaschnuepke_full.png';

const Reference = () => {
  return (
    <Page
      stack={['Bootstrap', 'jQuery']}
      type="Commercial"
      images={[pic]}
      description=""
      title="Johanna Schnüpke - Journalistin, Reporterin & Moderatorin"
      url="https://johannaschnuepke.de"
    />
  );
};

export default Reference;
