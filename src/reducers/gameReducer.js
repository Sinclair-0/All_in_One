import { getNeighbors } from "../util/createBoard";

export function gameReducer(state, action) {
    const {type, row, col} = action;

    switch (type) {
        case 'HANDLE_CELL': {
            if(state.board[row][col].isMimic) {
                return {
                    ...state,
                    board: flipAll(state.board),
                    isGameOver: true,

                };
            } else if (state.board[row][col].surrounding === 0) {
                //Expand
                return {
                    ...state,
                    board: flipCell(row, col, state.board),
                    board: expand(row, col, state.board),
                };
            } else {
                return {
                    ...state,
                    board: flipCell(row, col, state.board),
                };
            }

        }
        default: {
            console.log("Err");
        }
    }
}
function flipAll(board) {
    const newBoard = board.slice();
    for (let i = 0; i < newBoard.length; i++) {
        for (let j = 0; j < newBoard.length; j++) {
            const cell = newBoard[i][j];
            const newCell = {
                ...cell,
                isChecked: true
            }
            newBoard[i][j] = newCell;
        }
    }

    return newBoard;
}
function flipCell(row, col, board) {
    const newBoard = board.slice();
    const cell = newBoard[row][col];
    const newCell = {
        ...cell,
        isChecked: true,
    }
    newBoard[row][col] = newCell;
    return newBoard;
}

function expand(row, col, board) {
    const newBoard = board.slice();
    const stack = [[row, col]];

    while (stack.length > 0) {
        const [row, col] = stack.pop();
        const neighbors = getNeighbors(row, col, newBoard);
        
        for (const neighbor of neighbors) {
            const [row, col] = neighbor;
            if (newBoard[row][col].isChecked) continue;

            if (!newBoard[row][col].isMimic) {
                newBoard[row][col].isChecked = true;
                if (newBoard[row][col].surrounding > 0) {
                    continue;
                }
                stack.push(neighbor);
            }
        }

    }
    return newBoard;
}