import { Component } from "react";
import Form from './components/Form';
import ResultCard from './components/ResultCard';
import BusinessContext from './context/BusinessContext';
import './App.css';

class App extends Component {
  state = {
    result: null,
    query: {},
    loading: false,
    error: ''
  };

  handleFormSubmit = async (data) => {
    this.setState({ loading: true, error: '' });
    try {
      const url = "https://mini-business-seo-dashboard.onrender.com/business-data";
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const jsonData = await res.json();
      this.setState({ result: jsonData, query: data, loading: false });
    } catch (err) {
      this.setState({ error: "Failed to fetch data", loading: false });
    }
  };

  handleRegenerate = async () => {
    this.setState({ loading: true, error: '' });
    const { query } = this.state;
    try {
      const res = await fetch(
        `https://mini-business-seo-dashboard.onrender.com/regenerate-headline?businessName=${query.businessName}&location=${query.location}`
      );
      const json = await res.json();
      this.setState((prevState) => ({
        loading: false,
        result: { ...prevState.result, headline: json.headline },
      }));
    } catch (err) {
      this.setState({ error: "Failed to regenerate headline", loading: false });
    }
  };

  render() {
    const { result, query, loading, error } = this.state;
    const contextValue = {
      result,
      query,
      loading,
      error,
      handleFormSubmit: this.handleFormSubmit,
      handleRegenerate: this.handleRegenerate
    };

    return (
      <BusinessContext.Provider value={contextValue}>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
          <div className="max-w-md w-full">
            <h1 className="text-2xl font-bold mb-6 text-center">
              Local Business SEO Dashboard
            </h1>
            <Form />
            {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
            {loading && (
              <div className="flex justify-center my-4">
                <div className="w-8 h-8 border-4 border-blue-400 border-dashed rounded-full animate-spin"></div>
              </div>
            )}
            {result && !loading && (
              <ResultCard />
            )}
          </div>
        </div>
      </BusinessContext.Provider>
    );
  }
}

export default App;
