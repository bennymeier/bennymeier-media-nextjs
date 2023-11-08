import Page from '../../components/DetailedPage/Page';
import pic from '/public/img/references/bennymeier-media_full.png';

const Reference = () => {
  return (
    <Page
      githubUrl={false}
      stack={['Bootstrap']}
      type="Personal"
      images={[pic]}
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ergo id est convenienter naturae vivere, a natura discedere. Ut alios omittam, hunc appello, quem ille unum secutus est. Cur post Tarentum ad Archytam? Habes, inquam, Cato, formam eorum, de quibus loquor, philosophorum. "
      title="Benny Meier Media Old Version"
      url={false}
    />
  );
};

export default Reference;
