export function subgraph(subgraphUrl) {
  return async function (query, variables) {
    const res = await fetch(subgraphUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
    });

    const { data } = await res.json();

    return data;
  };
}

export function getUSDPrice(subgraphUrl) {
  return async function (query, variables) {

 
    const res = await fetch(subgraphUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
    });

    if (res.ok) {
      const { data } = await res.json();
      return data;
    } else {
      // Handle the error response properly
      const errorData = await response.json(); // This is where you might get the error
      console.log(errorData, "<====errorData");
      return null;
      // throw new Error(`GraphQL error: ${errorData.errors ? errorData.errors.map(err => err.message).join(', ') : 'Unknown error'}`);
    }
  };
}
