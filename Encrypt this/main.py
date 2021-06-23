def encrypt_this(text: str):
    words = text.split(' ')
    result = []
    for word in words:
        new = ''
        temp = ''
        for j in range(len(word)):
            if j == 0:
                new += str(ord(word[j]))
            elif j == 1:
                temp = word[j]
                new += word[-1]
            elif j == len(word) - 1:
                new += temp
            else:
                new += word[j]
        result.append(new)
    return ' '.join([str(x) for x in result])


print(encrypt_this('The more he saw the less he spoke'))

assert encrypt_this('The more he saw the less he spoke') == '84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp'
