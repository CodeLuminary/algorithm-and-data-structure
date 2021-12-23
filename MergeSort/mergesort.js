const test_values = [29, 100, 1, 2, 57, 28, 88, 3, 50, 67, 37, 1, 32, 20];

function merge_sort(values) {
  if (values.length <= 1) {
    return values;
  }

  const middle_index = Math.floor(values.length / 2);

  const left_values = merge_sort(values.slice(0,middle_index));
  const right_values = merge_sort(values.slice(middle_index));

  let sorted_values = [];

  let left_index = 0;

  let right_index = 0;

  while (left_index < left_values.length && right_index < right_values.length) {
    if (left_values[left_index] < right_values[right_index]) {
      sorted_values.push(left_values[left_index]);
      left_index += 1;

    } else {
      sorted_values.push(right_values[right_index]);
      right_index += 1;
    }
  }

  sorted_values = sorted_values.concat(left_values.slice(left_index));
  sorted_values = sorted_values.concat(right_values.slice(right_index));
  return sorted_values;
}

const sorted = merge_sort(test_values);
console.log(sorted);