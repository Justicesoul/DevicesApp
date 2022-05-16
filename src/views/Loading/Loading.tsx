import loading from '../../assets/images/loading.gif';
import './Loading.scss';

const Loading = () => {
  return (
    <div className="loading">
      <img className="loading__image" src={loading} alt="loading" />
    </div>
  );
};

export default Loading;
