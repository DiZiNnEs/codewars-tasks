def multiplication_table(size):
    result = []
    for x in range(1, size + 1):
        second_list = []
        for j in range(1, size + 1):
            second_list.append(x * j)

        result.append(second_list)

    return result


assert multiplication_table(3) == [[1, 2, 3], [2, 4, 6], [3, 6, 9]]
