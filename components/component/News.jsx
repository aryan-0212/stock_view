import React, { useState, useEffect } from 'react';
import Header from './Header';

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/everything?q=stock%20market&apiKey=39b7357427ac48c6b47905bdd6b990d7');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Calculate the current posts to display
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(articles.length / articlesPerPage);

  return (
    <>
      <Header />
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Latest News</h1>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentArticles.map((article, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              {article.urlToImage && (
                <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover" />
              )}
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">{article.title}</h2>
                <p className="text-gray-600 mb-4">{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className="flex justify-center mt-6">
  <button
    onClick={() => paginate(currentPage - 1)}
    disabled={currentPage === 1}
    className="px-4 py-2 mx-1 bg-blue-500 text-white rounded disabled:bg-blue-300"
  >
    Previous
  </button>
  {[...Array(totalPages)].map((_, i) => (
    <button
      key={i}
      onClick={() => paginate(i + 1)}
      className={`px-4 py-2 mx-1 ${i + 1 === currentPage ? 'bg-blue-700 text-white rounded-full' : 'bg-blue-500 text-white rounded'}`}
    >
      {i + 1}
    </button>
  ))}
  <button
    onClick={() => paginate(currentPage + 1)}
    disabled={currentPage === totalPages}
    className="px-4 py-2 mx-1 bg-blue-500 text-white rounded disabled:bg-blue-300"
  >
    Next
  </button>
</div>

      </div>
    </>
  );
};

export default News;
