def up_array(arr):
    if len(arr) < 1:
        return None

    for x in arr:
        if len(str(x)) > 1 or x < 0:
            return None

    number = int(''.join([str(x) for x in arr])) + 1
    return [int(x) for x in str(number)]


assert up_array([1, -9]) == None
assert up_array([4, 3, 2, 5]) == [4, 3, 2, 6]
