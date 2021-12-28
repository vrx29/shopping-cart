import { BsViewList } from "react-icons/bs";
import { BsGrid } from "react-icons/bs";
import "../App.css";
import GridView from "../components/GridView";

function Products() {
  return (
    <>
      <div className="header-cont">
        <div>
          <h3>Ecommerce Accessories & Fashion items</h3>
          <p>About 9,207 results</p>
        </div>
        <div className="header-actions">
          <div>
            <label className="label" htmlFor="cars">
              Sort by:
            </label>
            <select id="sort-selector" name="sorting">
              <option value="Popularity">Popularity</option>
              <option value="Low to High">Price: Low to High</option>
              <option value="High to Low">Price: High to Low</option>
              <option value="Newest First">Newest First</option>
            </select>
          </div>
          <div>
            <span className="label">View:</span>
            <BsViewList />
            <BsGrid />
          </div>
        </div>
      </div>
      <GridView />
    </>
  );
}
export default Products;
