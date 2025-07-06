import { Component } from "react";
import BusinessContext from '../context/BusinessContext';

class ResultCard extends Component {
  static contextType = BusinessContext;

  render() {
    const { result, handleRegenerate } = this.context;
    return (
      <div className="bg-white shadow-md hover:shadow-xl p-6 rounded-lg transition-all duration-300 mt-4">
        <p className="text-xl font-semibold">Rating: ⭐ {result.rating}</p>
        <p className="text-gray-600">Reviews: {result.reviews}</p>
        <p className="mt-2 italic">{result.headline}</p>
        <button
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
          onClick={handleRegenerate}
        >
          Regenerate SEO Headline
        </button>
      </div>
    );
  }
}

export default ResultCard;