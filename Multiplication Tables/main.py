def multiplication_table(row: int, col: int):
    result = []
    for foo in range(1, row + 1):
        list_ = []
        for baz in range(1, col + 1):
            list_.append(foo * baz)
        result.append(list_)

    return result


assert multiplication_table(2, 2) == [[1, 2], [2, 4]]
