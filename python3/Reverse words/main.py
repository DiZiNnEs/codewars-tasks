def reverse_words(text):
    text_list = text.split(' ')
    result = [x[::-1] for x in text_list]
    return ' '.join([str(j) for j in result])

reverse_words('The quick')

assert reverse_words('The quick brown fox jumps over the lazy dog.') == 'ehT kciuq nworb xof spmuj revo eht yzal .god'
