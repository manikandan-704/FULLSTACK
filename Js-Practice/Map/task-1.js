function mapTask(marks) {
  creatingMap = new Map();
  for (let i = 0; i < marks.length; i++) {
    if (marks[i] > 95) {
      creatingMap.set("A", marks[i]);
    } else if (marks[i] < 80 && marks[i] > 70) {
      creatingMap.set("B", marks[i]);
    } else {
      creatingMap.set("C", marks[i]);
    }
  }
  return creatingMap;
}

console.log(mapTask([99, 79, 50]));
