// Q2: Write a function to decode a string:
//
// 'a(bcd){3}e' -> 'abcdbcdbcde'
// 'a(bc(d){4}e){3}f' -> “abcddddebcddddebcddddef'
//
// Note: Parentheses can be nested.
function decode(s: string): string {
  const stack: string[] = [];
  let repeat = 0;
  let mode = 'non-number';
  for (let i = 0; i < s.length; i++) {
    if (/[^0-9(){}]/.test(s[i])) {    // anything other than a parenthesis or digit
      stack.push(s[i]);
    } else if (s[i] === '(') {
      stack.push('(');
    } else if (s[i] === ')') {
      // Pop characters off the stack until we meet '('
      let substring = '';
      let c = stack.pop();
      while (c !== '(') {
        substring += c;
        c = stack.pop();
      }

      // string.split('') doesn’t work with emojis (because one emoji character is represented as
      // two unicode code points).  Use the spread operator (...) or Array.from() instead.
      //
      // > '😀 -> 😍'.split('')
      // [
      //   '�', '�',
      //   ' ', '-', '>', ' ',
      //   '�', '�'
      // ]
      //
      // > [...'😀 -> 😍']
      // ['😀', ' ', '-', '>', ' ', '😍']
      stack.push([...substring].reverse().join(''));
    } else if (s[i] === '{') {
      mode = 'number';
    } else if (/[0-9]/.test(s[i])) {
      if (mode === 'number') {
        repeat = repeat * 10 + Number(s[i]);
      } else {
        stack.push(s[i]);
      }
    } else if (s[i] === '}') {
      stack.push(stack.pop()!.repeat(repeat));
      repeat = 0;
      mode = 'non-number';
    }
  }
  // console.log(stack);
  return stack.join('');
}

// docode('a(bcd){3}e') -> 'abcdbcdbcde'
console.log(decode("a(bcd){3}e"));

// decode('a(bc(d){4}e){3}f') -> 'abcddddebcddddebcddddef'
// abcddddebcddddebcddddef
console.log(decode("a(bc(d){4}e){3}f"));
