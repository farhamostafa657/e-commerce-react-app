import "./search.css";

function Search({ searchProduct }) {
  return (
    <div className="d-flex justify-content-center ">
      <input
        className="inputC form-control form-control-lg shadow-lg p-3 mb-5 bg-body-tertiary rounded w-75 mt-5 "
        type="text"
        placeholder="search"
        aria-label=".form-control-lg example"
        onChange={(e) => searchProduct(e.target.value)}
      />
    </div>
  );
}

export default Search;
