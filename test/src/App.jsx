import React, { useEffect, useState } from 'react'
import './App.css';
function App() {

  const [data,setData] = useState([]);

  const [search,setSearch] = useState("");

  const [filteredData,setFilteredData] = useState([]);

  const fetchData = useEffect(() => {
    fetch("https://dummyjson.com/products")
    .then(res =>res.json())
    .then(data => setData(data.products));
  }, []);

  console.log(data);

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSearch = (e) => {
    e.preventDefault();
    if (search) {
      const filtered = data.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
      console.log(filtered)
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  };

  const renderTable = (products) => {
    return (
      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <>
    <form onSubmit={handleSearch}>
    <input type='text' onChange={handleChange} placeholder='Enter the product to search'/>
    <button type='submit'>Search</button>
    </form>
      <h1>Product List</h1>
      {filteredData.length > 0 ? renderTable(filteredData) : renderTable(data)}
    </>
  )
}

export default App