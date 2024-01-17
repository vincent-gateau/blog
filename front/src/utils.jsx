export async function getLatestArticle() {
    try {
      const response = await fetch('https://your-api-url/latest-article');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching latest article:', error);
      return null;
    }
  }
  