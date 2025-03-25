import { useState } from 'react';

const HelpRequest = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    helpRequest: '',
    date: '',
    flatName: '',
    houseNumber: ''
  });

  const [requests, setRequests] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/requests', formData);
      setRequests([...requests, formData]);
      setFormData({
        firstName: '',
        lastName: '',
        contactNumber: '',
        helpRequest: '',
        date: '',
        flatName: '',
        houseNumber: ''
      });
    } catch (error) {
      console.error('Error submitting the form', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/requests/${id}`);
      setRequests(requests.filter(request => request.id !== id));
    } catch (error) {
      console.error('Error deleting the request', error);
    }
  };

  const handleUpdate = async (id) => {
    const requestToUpdate = requests.find(request => request.id === id);
    setFormData(requestToUpdate);
    handleDelete(id);
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Help Request Form</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {['firstName', 'lastName', 'contactNumber', 'helpRequest', 'date', 'flatName', 'houseNumber'].map((field) => (
          <div key={field}>
            <label className="block mb-1 capitalize" htmlFor={field}>{field.replace(/([A-Z])/g, ' $1')}</label>
            <input
              type={field === 'date' ? 'date' : 'text'}
              id={field}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
        ))}

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Submit</button>
      </form>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Requests</h2>
        {requests.length === 0 ? <p>No requests available</p> : (
          <ul className="space-y-4">
            {requests.map((request) => (
              <li key={request.id} className="p-4 border rounded-lg">
                {Object.entries(request).map(([key, value]) => (
                  key !== 'id' && <p key={key}><strong>{key.replace(/([A-Z])/g, ' $1')}:</strong> {value}</p>
                ))}
                <div className="mt-4 flex space-x-4">
                  <button onClick={() => handleUpdate(request.id)} className="bg-yellow-500 text-white px-4 py-2 rounded-lg">Edit</button>
                  <button onClick={() => handleDelete(request.id)} className="bg-red-500 text-white px-4 py-2 rounded-lg">Delete</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default HelpRequest;
