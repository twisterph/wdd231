
export async function getCourts() {
  try {
    const response = await fetch("data/courts.json");
    if (!response.ok) {
      throw new Error("Court data could not be loaded.");
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
}
