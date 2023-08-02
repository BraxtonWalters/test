import React, { useState, useEffect } from 'react';

function YourComponent() {
  const [state, setState] = useState({
    greeting: "Knock knock, "
  });

  useEffect(() => {
    setState({ greeting: state.greeting + "Neo" });
  }, []); // Empty dependency array ensures it runs only once on mount
  console.log(state.greeting);

  return <div>Your component content</div>;
}

export default YourComponent