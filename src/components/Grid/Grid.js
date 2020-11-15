import { range } from "lodash";
import "./Grid.scss";
import Colorbox from "./../Colorbox/Colorbox";

function createGrid() {
  let rows = range(17);
  let columns = range(31);
  let grid = rows.map((rowNumber) => {
    return (
      <div className="color__row" key={String.fromCharCode(rowNumber + 1 + 96)}>
        {columns.map((columnNumber) => {
          return (
            <Colorbox
              Row={rowNumber}
              Column={columnNumber}
              key={String.fromCharCode(rowNumber + 1 + 96).concat(
                columnNumber.toString()
              )}
            />
          );
        })}
      </div>
    );
  });

  return grid;
}

function Grid() {
  return (
    <div className="grid_container">
      <div>
        <h3 className="title">Hues and Colors</h3>
      </div>
      <div>{createGrid()}</div>
    </div>
  );
}
export default Grid;
