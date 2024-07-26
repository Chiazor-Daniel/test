// generateStaticParams.js
export async function generateStaticParams() {
    // Replace this with your actual logic to get all category slugs
    const categories = ['news', 'sports', 'entertainment', 'technology'];
    
    return categories.map((category) => ({
      slug: category,
    }));
  }