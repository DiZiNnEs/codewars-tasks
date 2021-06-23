def is_int_array(a):
    return isinstance(a, list) and all(isinstance(x, (int, float)) and x == int(x) for x in a)


def is_int_array(arr):
    if arr == []:
        return True
    if arr in [None, ""]:
        return False
    for i in arr:
        if type(i) in [int, float]:
            if int(i) != i:
                return False
        else:
            return False
    return True


def is_int_array(arr):
    try:
        return list(map(int, arr)) == arr
    except:
        return False


def is_int_array(arr):
    if arr is None or type(arr) is str or None in arr:
        return False
    else:
        for i in arr:
            if type(i) is str or i % 1 != 0:
                return False
    return True


import math


def is_int_array(arr):
    if arr is None:
        return False
    if arr is '':
        return False
    if None in arr:
        return False
    if len(arr) == 1:
        return False
    if float in arr:
        return False
    for i in arr:
        if (math.floor(int(i)) != i):
            return False
    return True

# https://www.codewars.com/kata/52a112d9488f506ae7000b95/train/python

# Solution not my
