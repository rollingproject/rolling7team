import { useGetPostsById } from "../post-by-id/data-access-post-by-id/useGetPostsById";
import { CardByIdList } from "../components/ui-card-by-id-list/CardByIdList";
import { CardById } from "../components/ui-card-by-id/CardById";
import styles from "./PostByIdEditPage.module.scss";
import { useParams, useNavigate } from "react-router-dom";
// import { useDeleteRecipient } from "../post/data-access-post/messageApi_edit";

const SAMPLE = 1088; // 임시 id로 나중에 list 페이지에서 prop을 받아야 함.

export const PostByIdEditPage = ({ selectedId = SAMPLE }) => {
  const navigate = useNavigate();
  const { recipientId } = useParams();

  const { data } = useGetPostsById(selectedId);

  const sortedPostIdData = data?.results.sort(
    (a, b) => b.createdAt - a.createdAt
  );

  // const DeleteAll = async (selectedId) => {
  //   const result = await useDeleteRecipient(selectedId);

  //   if (!result) return;
  //   navigate("/list");
  // };

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <button className={styles.button}>삭제하기</button>
      </div>
      <CardByIdList>
        {sortedPostIdData?.map((post) => (
          <CardById key={post.id} {...post} showDeleteButton={true} />
        ))}
      </CardByIdList>
    </div>
  );
};
