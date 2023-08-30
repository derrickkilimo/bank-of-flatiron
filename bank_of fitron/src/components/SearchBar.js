import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function SearchBar({ filterSearch, sortData }) {
  const [search, setSearch] = useState("");
  const [sortValue, setSortValue] = useState("default");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSort = (e) => {
    const selectedSortValue = e.target.value;
    setSortValue(selectedSortValue);
    sortData(selectedSortValue);
  };

  return (
    <Form style={{ marginTop: "10px", marginLeft: "10px" }}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridsearch">
          <Form.Control
            type="text"
            placeholder="search"
            onChange={(e) => {
              handleSearch(e);
              filterSearch(search);
            }}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridsearch">
          <Form.Select aria-label="Default select example" name='category' onChange={handleSort}>
            <option disabled>Sort by</option>
            <option value="description">Category</option>
            <option value="category">Description</option>
          </Form.Select>
        </Form.Group>
      </Row>
    </Form>
  );
}

export default SearchBar;
