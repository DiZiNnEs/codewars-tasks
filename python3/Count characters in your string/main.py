def count(string):
    result = {}
    if not string:
        return {}
    else:
        for str_ in string:
            if str_ not in result:
                result[str_] = 1
            else:
                value = result.get(str_)
                result[str_] = value + 1
        return result


assert count('qwertrr') == {'q': 1, 'w': 1, 'e': 1, 'r': 3, 't': 1}
assert count('JFDAKeiwwwlf') == {'J': 1, 'F': 1, 'D': 1, 'A': 1, 'K': 1, 'e': 1, 'i': 1, 'w': 3, 'l': 1, 'f': 1}
