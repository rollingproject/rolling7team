// Nav.jsx

import NavigationBar from "./components/ui-navigation-bar/NavigationBar";
import ServiceNavigationBar from "./components/ui-navigation-bar/ServiceNavigationBar";
import { useGetReactionsList } from "./post/data-access-post/reactionApi";
import { useGetRecipient } from "./post/data-access-post/recipientsApi";

function Nav() {
  const selectedId = 1088;
  const { data } = useGetRecipient(selectedId);
  const { name, messageCount } = data || {};
  const plusNumber = messageCount - 3;

  const { data: datas } = useGetReactionsList(selectedId);
  const { results } = datas || {};
  console.log(results);

  return (
    <>
      <NavigationBar />
      <ServiceNavigationBar
        name={name}
        plusNumber={plusNumber}
        messageCount={messageCount}
      />
    </>
  );
}

export default Nav;
