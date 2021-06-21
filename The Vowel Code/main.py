# def encode(st: str):
#     string = ''
#     for char in st:
#         if char == 'a':
#             string += str(1)
#         elif char == 'e':
#             string += str(2)
#         elif char == 'i':
#             string += str(3)
#         elif char == 'o':
#             string += str(4)
#         elif char == 'u':
#             string += str(5)
#         else:
#             string += str(char)
#
#     return string
#
#
# def decode(st: str):
#     string = ''
#     for char in st:
#         if char == str(1):
#             string += 'a'
#         elif char == str(2):
#             string += 'e'
#         elif char == str(3):
#             string += 'i'
#         elif char == str(4):
#             string += 'o'
#         elif char == str(5):
#             string += 'u'
#         else:
#             string += str(char)
#
#     return string

CIPHER = ('aeiou', '12345')


def encode(st):
    return st.translate(str.maketrans(CIPHER[0], CIPHER[1]))


def decode(st):
    return st.translate(str.maketrans(CIPHER[1], CIPHER[0]))


assert encode('hello') == 'h2ll4'
assert encode('How are you today?') == 'H4w 1r2 y45 t4d1y?'
assert encode('This is an encoding test.') == 'Th3s 3s 1n 2nc4d3ng t2st.'
assert decode('h2ll4') == 'hello'
