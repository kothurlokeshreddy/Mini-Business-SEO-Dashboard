import { Component } from 'react';
import BusinessContext from '../context/BusinessContext';

class Form extends Component {
  static contextType = BusinessContext;

  state = {
    businessName: '',
    location: '',
    error: ''
  };

  onHandleSubmit = (event) => {
    event.preventDefault();
    const { businessName, location } = this.state;
    const { handleFormSubmit } = this.context;

    if (!businessName.trim() || !location.trim()) {
      this.setState({ error: 'Both fields are required!' });
      return;
    }

    this.setState({ error: '' });
    handleFormSubmit({ businessName, location });
  };

  onChangeName = (event) => {
    this.setState({ businessName: event.target.value });
  };

  onChangeLocation = (event) => {
    this.setState({ location: event.target.value });
  };

  render() {
    const { businessName, location, error } = this.state;
    return (
      <form onSubmit={this.onHandleSubmit} className="space-y-4">
        <input
          className="border px-4 py-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          placeholder="Business Name"
          value={businessName}
          onChange={this.onChangeName}
        />
        <input
          className="border px-4 py-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          placeholder="Location"
          value={location}
          onChange={this.onChangeLocation}
        />
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    );
  }
}

export default Form;