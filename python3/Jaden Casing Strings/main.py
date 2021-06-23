def to_jaden_case(string):
    list_ = string.split(' ')
    result = [x.capitalize() for x in list_]
    return ' '.join([str(item) for item in result])


quote = "How can mirrors be real if our eyes aren't real"
assert to_jaden_case(quote) == "How Can Mirrors Be Real If Our Eyes Aren't Real"
