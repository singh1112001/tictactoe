import React, { useState } from "react";
import "./tictactoe.css";

const Tictactoe = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [move, setMove] = useState("X");

  const checkWin = (board) => {
    const conditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    let flag = false;
    conditions.forEach((element) => {
      if (
        board[element[0]] !== "" &&
        board[element[1]] !== "" &&
        board[element[2]] !== ""
      ) {
        if (
          board[element[0]] === board[element[1]] &&
          board[element[1]] === board[element[2]]
        ) {
          flag = true;
        }
      }
    });
    return flag;
  };

  const click = (n) => {
    let square = [...board];
    if (board[n] !== "") {
      alert("already clicked");
      return;
    }

    square[n] = move;
    setBoard(square);

    if (checkWin(square)) {
      alert("winner");
      square.fill("");
      setBoard(square);
    } else {
      setMove(move === "X" ? "O" : "X");
    }
  };

  return (
    <>
      <h1 className="text-center">Tic Tac Toe</h1>
      <table>
        <tbody>
          {[0, 3, 6].map((row) => (
            <tr key={row}>
              {[0, 1, 2].map((col) => (
                <td
                  key={row + col}
                  onClick={() => click(row + col)}
                  className={board[row + col] === "X" ? "X" : board[row + col] === "O" ? "O" : ""}
                >
                  {board[row + col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Tictactoe;
