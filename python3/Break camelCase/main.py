def solution(s: str):
    result = ''
    for x in s:
        if x.isalpha():
            if x.isupper():
                result += f' {x}'
            else:
                result += x

    return result if result else ''


assert solution('helloWorld') == "hello World"
assert solution('camelCase') == "camel Case"
assert solution('breakCamelCase') == "break Camel Case"
