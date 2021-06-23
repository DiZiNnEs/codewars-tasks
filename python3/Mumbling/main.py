def accum(s):
    count = 0
    ret = ''
    for i in s:
        count += 1
        ret += i.upper()
        for index in range(count - 1):
            ret += i.lower()
        if count < len(s):
            ret += '-'
    return ret


assert accum('qwer') == 'Q-Ww-Eee-Rrrr'
