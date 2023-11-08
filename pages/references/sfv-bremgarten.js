import Page from '../../components/DetailedPage/Page';
import pic from '/public/img/references/sfv-bremgarten_full.png';

const Reference = () => {
  return (
    <Page
      stack={['Wordpress']}
      type="Voluntary"
      images={[pic]}
      description=""
      title="SFV Bremgarten e.V."
      url="https://sfv-bremgarten.de"
    />
  );
};

export default Reference;
