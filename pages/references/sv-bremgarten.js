import Page from '../../components/DetailedPage/Page';
import pic from '/public/img/references/sv-bremgarten_full.png';

const Reference = () => {
  return (
    <Page
      stack={['Wordpress']}
      type="Voluntary"
      images={[pic]}
      description=""
      title="SV Bremgarten e.V."
      url="https://sv-bremgarten.de"
    />
  );
};

export default Reference;
