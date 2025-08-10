const GetApiData = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_KEY}`
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
