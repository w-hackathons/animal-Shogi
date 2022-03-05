moveEvent = (pieceName, pieceCoord, ele) => {
  const columns = document.querySelectorAll(".column");
  switch (pieceName) {
    case "chick":
      columns[pieceCoord[0] - 1].children[pieceCoord[1]].addEventListener(
        "click",
        () => {
          upMove(pieceName, pieceCoord, ele, columns);
        }
      );
    case "elephant":
      return;
    case "lion":
      columns[pieceCoord[0] - 1].children[pieceCoord[1]].addEventListener(
        "click",
        () => {
          upMove(pieceName, pieceCoord, ele, columns);
        }
      );
    case "giraffe":
      columns[pieceCoord[0] - 1].children[pieceCoord[1]].addEventListener(
        "click",
        () => {
          upMove(pieceName, pieceCoord, ele, columns);
        }
      );
  }
};

upMove = (pieceName, pieceCoord, ele, columns) => {
  const moveSpace = columns[pieceCoord[0] - 1].children[pieceCoord[1]];
  ele.setAttribute(
    "onclick",
    `moveEvent("${pieceName}", [${pieceCoord[0] - 1}, ${pieceCoord[1]}], this)`
  );
  console.log();
  moveSpace.appendChild(ele);
};
