const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];

  const apiResponse = await fetch(
    `https://pets-v2.dev-apis.com/breeds?pets=${id}`
  );

  if (!apiResponse.ok) {
    throw new Error(`details/${id} fetch not ok`);
  }

  // async functions always return a promise
  return apiResponse.json();
};

export default fetchPet;
