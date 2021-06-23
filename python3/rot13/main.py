def rot13(message):
    chiper = str.maketrans('ABCDEFGHIJKLMabcdefghijklmNOPQRSTUVWXYZnopqrstuvwxyz',
                           'NOPQRSTUVWXYZnopqrstuvwxyzABCDEFGHIJKLMabcdefghijklm')
    return message.translate(chiper)


assert rot13('Test') == 'Grfg'
assert rot13('test') == 'grfg'
