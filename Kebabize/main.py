def kebabize(string):
    result = ''
    for x in string:
        if x.isalpha():
            if x.isupper():
                result += f'-{x.lower()}'
            else:
                result += x

    if len(result) > 0:
        if result[0] == '-':
            return result[1:]
        else:
            return result
    else:
        return ''


# def kebabize(string):
#     if string.isdigit():
#         return ''
#     string = ''.join(x for x in string if not x.isdigit())
#     new_string = ''
#     for s in string:
#         if s.isupper():
#             upper_char = s
#             if string[0] == s:
#                 new_string += f'{upper_char.lower()}'
#             else:
#                 new_string += f'-{upper_char.lower()}'
#         else:
#             new_string += s
#
#     return new_string


print(kebabize('CamelsHaveThreeHumps'))  # camels-have-three-humps
print(kebabize('CodeWars'))  # code-wars
