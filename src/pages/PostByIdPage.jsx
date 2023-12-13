import { useGetPostsById } from "../post-by-id/data-access-post-by-id/useGetPostsById";
import { CardByIdList } from "../post-by-id/ui-card-by-id-list/CardByIdList";
import { CardById } from "../post-by-id/ui-card-by-id/CardById";
import { CardButton } from "../post-by-id/ui-card-button/CardButton";

const SAMPLE = 849;

export const PostByIdPage = ({ selectedId = SAMPLE }) => {
  const { data } = useGetPostsById(selectedId);

  const sortedPostIdData = data?.results.sort(
    (a, b) => b.createdAt - a.createdAt
  );
  console.log(data?.results);

  return (
    <>
      <CardByIdList>
        <CardButton />
        {sortedPostIdData?.map((post) => (
          <CardById key={post.id} {...post} />
        ))}
      </CardByIdList>
    </>
  );
};
