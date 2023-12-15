import { useState } from "react";
import { useGetPostsById } from "../post-by-id/data-access-post-by-id/useGetPostsById";
import { CardByIdList } from "../components/ui-card-by-id-list/CardByIdList";
import { CardById } from "../components/ui-card-by-id/CardById";
import { CardButton } from "../post-by-id/ui-card-button/CardButton";
import { PostModal } from "../post-by-id/ui-post-modal/PostModal";
import styles from "./PostByIdPage.module.scss";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SAMPLE = 1088; // 임시 id로 나중에 list 페이지에서 prop을 받아야 함.

export const PostByIdPage = ({ selectedId = SAMPLE }) => {
  const { recipientId } = useParams();

  const [clickedId, setClickedId] = useState(null);
  const [modalVisible, setModalVisivle] = useState(false);

  const { data } = useGetPostsById(selectedId);

  const sortedPostIdData = data?.results.sort(
    (a, b) => b.createdAt - a.createdAt
  );

  const handleCardClick = (post) => {
    setClickedId(post.id);
    setModalVisivle(true);
  };

  const handleCloseModal = () => {
    setModalVisivle(false);
  };

  return (
    <div className={styles.background}>
      {modalVisible && (
        <PostModal
          post={sortedPostIdData.find((post) => post.id === clickedId)}
          onClose={handleCloseModal}
        />
      )}
      <CardByIdList>
        <Link to="/post">
          <CardButton />
        </Link>
        {sortedPostIdData?.map((post) => (
          <CardById
            key={post.id}
            {...post}
            onCardClick={() => handleCardClick(post)}
            showDeleteButton={false}
          />
        ))}
      </CardByIdList>
    </div>
  );
};
