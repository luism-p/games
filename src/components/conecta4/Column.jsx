

export function Column ({updateBoard, board}) {

    return(
    <section className="column">
            {board.map((square, index) => {
              return (
                <Square key={index} index={index} updateBoard={updateBoard}>
                  {square}
                </Square>
              );
            })}
          </section>
          );
}

