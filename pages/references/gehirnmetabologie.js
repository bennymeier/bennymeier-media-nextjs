import Page from '../../components/DetailedPage/Page';
import pic from '/public/img/references/gehirnmetabologie_full.png';

const Reference = () => {
  return (
    <Page
      stack={['Bootstrap']}
      type="Commercial"
      images={[pic]}
      description=""
      title="Gehirnmetabologie"
      url="https://gehirnmetabologie.de"
    />
  );
};

export default Reference;
