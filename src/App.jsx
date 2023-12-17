import NavigationBar from "./components/ui-navigation-bar/NavigationBar";
import { useGetRecipientsList } from "./post/data-access-post/recipientsApi";

function App() {
  const { loading, error, data } = useGetRecipientsList();
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading data</p>;
  }

  const { count, next, previous, results } = data || {};

  const Test = () => {
    return (
      <div>
        <p>count : {count}</p>
        <p>next : {next}</p>
        <p>previous : {previous}</p>
        <div>
          results :{" "}
          {Array.isArray(results)
            ? results.map((r, index) => <p key={index}>{r.name}</p>)
            : "N/A"}
        </div>
      </div>
    );
  };

  return (
    <>
      <NavigationBar />
      <Test />
    </>
  );
}

export default App;
