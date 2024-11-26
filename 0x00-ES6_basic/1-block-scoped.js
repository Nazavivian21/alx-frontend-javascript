export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    let task = true; // This is block-scoped
    let task2 = false; // This is block-scoped
  }

  return [task, task2];
}

 