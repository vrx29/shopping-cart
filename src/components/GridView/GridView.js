import "./GridView.css";
import data from "../../data/data";
import GridItem from "../GridItem/GridItem";

function GridView() {
  return (
    <section className="grid-view">
      {data.map((item) => (
        <GridItem item={item} key={item.id} />
      ))}
    </section>
  );
}

export default GridView;
