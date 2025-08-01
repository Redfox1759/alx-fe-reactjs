import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [formData, setFormData] = useState({ username: "", location: "", minRepos: "" });
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);
    setPage(1);

    try {
      const data = await fetchUserData({ ...formData, page: 1 });
      setUsers(data.items);
      setTotalCount(data.total_count);
    } catch (err) {
      setError(err,"Error fetching users. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    setPage(nextPage);
    setLoading(true);

    try {
      const data = await fetchUserData({ ...formData, page: nextPage });
      setUsers([...users, ...data.items]);
    } catch (err) {
      setError(err,"Error loading more users.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Search GitHub Users</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="username"
          placeholder="GitHub Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location (optional)"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="minRepos"
          placeholder="Min Repositories (optional)"
          value={formData.minRepos}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
          Search
        </button>
      </form>

      {loading && <p >Loading...</p>}
      {error && <p >{error}</p>}

      {users.length > 0 && (
        <div>
          <h3>Results ({totalCount} found):</h3>
          <ul className="space-y-4">
            {users.map((user) => (
              <li key={user.id}>
                <img src={user.avatar_url} alt={user.login} />
                <div>
                  <h4 >{user.login}</h4>
                  <p>
                    <a href={user.html_url} target="_blank" rel="noopener noreferrer" >
                      View Profile
                    </a>
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {users.length < totalCount && (
            <button onClick={loadMore} >
              Load More
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
