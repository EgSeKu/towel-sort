module.exports = function towelSort(matrix) {
    let res = [];
    if (typeof matrix =='undefined' || matrix.length == 0)
        return [];
    for (i = 0; i < matrix.length; i++) {
        if (i % 2 == 0) {
            for (j = 0; j < matrix[i].length; j++)
                res.push(matrix[i][j]);
        }
        else {
            for (j = matrix[i].length - 1; j >= 0; j--)
                res.push(matrix[i][j]);
        }
    }
    return res;
}