export default function taskBlock(condition) {
  let task = false;
  let task2 = true;

  if (condition) {
    task = true;
    task2 = false;
  }

  return [task, task2];
}
