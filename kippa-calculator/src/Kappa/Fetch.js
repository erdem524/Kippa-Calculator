import React, { useEffect, useState } from "react";

function Fetcher() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/users/")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.users);
          console.log(`results`, result.users);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="ui horizontal segments">
        {items.map((item, index) => (
          <div className="ui center aligned segment">
            <p key={index}>{item}</p>
          </div>
        ))}
      </div>
    );
  }
}
export default Fetcher;
