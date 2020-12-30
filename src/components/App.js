import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadPhotos } from '../redux/actions';
import Photos from './Photos/Photos';
import { Route } from 'react-router-dom';
import Modal from './Modal/Modal';

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.photos.loading);

  useEffect(() => {
    dispatch(loadPhotos());
  }, [dispatch]);

  return (
    <Route path="/:id?">
      <div className="container">
        <div className="header">
          <h1>Beautiful Images</h1>
        </div>
        {loading ? <div>Идет загрузка...</div> : <Photos />}
        <Modal />
      </div>
    </Route>
  );
}

export default App;
