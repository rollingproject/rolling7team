import { useEffect, useState } from "react";
import NavigationBar from "./components/ui-navigation-bar/NavigationBar";
import ServiceNavigationBar from "./components/ui-navigation-bar/ServiceNavigationBar";
import { useGetReactionsList } from "./post/data-access-post/reactionApi";
import { useGetRecipient } from "./post/data-access-post/recipientsApi";

function Nav() {
  const selectedId = 1088;

  // useGetRecipient 호출
  const { data: recipientData } = useGetRecipient(selectedId);
  const { name, messageCount, recentMessages } = recipientData || {};
  const plusNumber = messageCount ? messageCount - 3 : 0;

  // useGetReactionsList 호출
  const { data: reactionsData } = useGetReactionsList(selectedId);

  // 렌더링 최적화를 위한 state 추가
  const [reactions, setReactions] = useState([]);
  const [recentProfileImages, setRecentProfileImages] = useState([]);

  // useEffect를 사용하여 렌더링 최적화
  useEffect(() => {
    // results 변수 직접 설정
    const results = reactionsData?.results || [];

    // results가 변경될 때만 reactions 업데이트
    setReactions(results.map(({ id, emoji, count }) => ({ id, emoji, count })));

    // recentProfileImages 업데이트
    const recentImages = recentMessages
      ? recentMessages.slice(0, 3).map(({ profileImageURL }) => profileImageURL)
      : [];

    setRecentProfileImages(recentImages);
  }, [reactionsData, recentMessages]);

  // 상태를 이용하여 ServiceNavigationBar에 전달
  return (
    <>
      <NavigationBar />
      <ServiceNavigationBar
        name={name}
        plusNumber={plusNumber}
        messageCount={messageCount}
        reactions={reactions}
        recentProfileImages={recentProfileImages}
      />
    </>
  );
}

export default Nav;
