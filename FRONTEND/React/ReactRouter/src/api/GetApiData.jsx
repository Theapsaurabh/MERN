const GetApiData = async () => {
  try {
    const response = await fetch(
      "http://www.omdbapi.com/?i=tt3896198&apikey=5c749a37"
    );

    if (!response.ok) {
      
      throw new Response("Failed to fetch movie data", { status: response.status });
    }

    const data = await response.json();
    return data;

  } catch (error) {
   
    console.error("Loader error:", error);
    throw error;
  }
};

export default GetApiData;
