export function createCell(row, col) {
    return {
        row,
        col,
        isMimic : false,
        isChecked: false,
        surrounding: 0,
    }

}