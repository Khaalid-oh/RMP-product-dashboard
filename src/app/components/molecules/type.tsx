interface MyStuff {
  stuff: (data1: Array<Record<string, number[]>>) => void;
}

const numEnd = [
  {int:0, java: 'Goland'},
  {int:1, java: 'Bix'},
  {int:2, java: 'Goland'}
]


const javas =[] 

for (const pjava of numEnd) {
  javas.push(pjava.java)
}
console.table(numEnd)