import sys
from load import load_numbers

numbers = load_numbers(sys.argv[1])

# Let's define a recursive merge sort function. As usual, it takes
# the list or sub-list that we want it to sort.
def merge_sort(values):
  # Our base case is the same as with Quicksort. If the list has zero
  # or one values, there's nothing to sort, so we return it as-is.
  if len(values) <= 1:
    return values
  # If we didn't return, it means we're in the recursive case. So
  # first we need to split the list in half. We need to know the
  # index we should split on, so we get the length of the list and
  # divide it by 2. So for example if there are 8 items in the list,
  # we'll want an index of 4. But what if there were an odd number of
  # items in the list, like 7? We can't have an index of 3.5, so
  # we'll need to round down in that case. Since we're working in
  # Python currently, we can take advantage of a special Python
  # operator that divides and rounds the result down: the floor
  # division operator. It consists of a double slash.
  middle_index = len(values) // 2
  # Now we'll use the Python slice syntax to get the left half of the
  # list.  We'll pass that list to a recursive call to the merge_sort
  # function.
  left_values = merge_sort(values[:middle_index])
  # We'll also use slice syntax to get the right half of the list,
  # and pass that to merge_sort as well.
  right_values = merge_sort(values[middle_index:])
  # Now we need to merge the two halves together, and sort them as we
  # do it.  We'll create a list to hold the sorted values.
  sorted_values = []
  # Now we get to the complicated part - merging the two halves
  # together and sorting them as we do it.  We'll be moving from left
  # to right through the left half of the list, copying values over
  # to the sorted_values list as we go. This left_index variable will
  # help us keep track of our position.
  left_index = 0
  # At the same time, we'll also be moving from left to right through
  # the right half of the list and copying values over, so we need a
  # separate right_index variable to track that position as well.
  right_index = 0
  # We'll keep looping until we've processed all of the values in
  # both halves of the list.
  while left_index < len(left_values) and right_index < len(right_values):
    # We're looking to copy over the lowest values first. So first we
    # test whether the current value on the left side is less than
    # the value on the right side.
    if left_values[left_index] < right_values[right_index]:
      # If the left side value is less, that's what we'll copy to the
      # sorted list.
      sorted_values.append(left_values[left_index])
      # And then we'll move to the next value in the left half of the
      # list.
      left_index += 1
    # Otherwise, the current value from the right half must have been
    # lower.
    else:
      # So we'll copy that value to the sorted list instead.
      sorted_values.append(right_values[right_index])
      # And then we'll move to the next value in the right half of
      # the list.
      right_index += 1
  # At this point one of the two unsorted halves still has a value
  # remaining, and the other is empty. We won't waste time checking
  # which is which.  We'll just copy the remainder of both lists over
  # to the sorted list.  The one with a value left will add that
  # value, and the empty one will add nothing.
  sorted_values += left_values[left_index:]
  sorted_values += right_values[right_index:]
  # All the numbers from both halves should now be copied to the
  # sorted list, so we can return it.
  return sorted_values

# Finally, we need to kick the whole process off. We'll call the
# merge_sort function with the list of numbers we loaded, and print
# the result.
print(merge_sort(numbers))