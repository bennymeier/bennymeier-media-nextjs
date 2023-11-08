import Page from '../../components/DetailedPage/Page';
import pic from '/public/img/references/loewen-voerstetten_full.png';

const Reference = () => {
  return (
    <Page
      stack={['Wordpress']}
      type="Commercial"
      images={[pic]}
      description=""
      title="Gasthaus Zum Löwen"
      url="https://loewen-voerstetten.de"
    />
  );
};

export default Reference;
