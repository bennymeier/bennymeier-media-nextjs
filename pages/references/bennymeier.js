import Page from '../../components/DetailedPage/Page';
import pic from '/public/img/references/bennymeier_full.png';

const Reference = () => {
  return (
    <Page
      stack={['Koken CMS']}
      type="Personal"
      images={[pic]}
      description=""
      title="Benny Meier Photography"
      url="https://www.bennymeier.de"
    />
  );
};

export default Reference;
