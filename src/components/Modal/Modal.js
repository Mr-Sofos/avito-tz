import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, loadModal } from '../../redux/actions';
import Image from './additional/fullImages/Image';
import Comments from './additional/Comments/Comments';
import AddComment from './additional/addComments/AddComment';

function Modal() {
  const id = parseInt(useParams().id);
  const dispatch = useDispatch();

  const images = useSelector((state) => state.bigPhotos.bigPhotos);
  const opened = useSelector((state) => state.bigPhotos.opened);
  const loadingComments = useSelector(
    (state) => state.bigPhotos.loadingComments,
  );
  const comments = useSelector((state) => state.bigPhotos.comments);

  useEffect(() => {
    dispatch(loadModal(id));
  }, [dispatch, id]);

  const handleClick = () => {
    dispatch(closeModal());
  };

  if (opened === null) {
    return null;
  }

  return (
    <div className="top-modal">
      {loadingComments ? (
        <div>Идет загрузка...</div>
      ) : (
        <div className="modal-window">
          <div className="modal-image">
            <Image images={images} key={images.id} />
            <AddComment />
          </div>
          {comments.map((comment) => {
            return <Comments comment={comment} key={comment.id} />;
          })}
          <div className="close-modal" onClick={handleClick}>
            ⮾
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
