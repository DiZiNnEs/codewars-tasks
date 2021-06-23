def series_sum2(n):
    if n == 0:
        return '{:.2f}'.format(0)
    else:
        n -= 1
        list_ = [1]
        while n > 0:
            list_.append(1 / float(n * 3 + 1))
            n -= 1
        return '{:.2f}'.format(sum(list_))


assert series_sum2(2) == '1.25'
assert series_sum2(0) == '0.00'
