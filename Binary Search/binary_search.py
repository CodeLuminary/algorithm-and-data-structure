#Basic binary search
"""
    For Binary search to be possible, list must first be sorted using
    efficient sorting algorithm
"""
def binary_search(list, target):
    first = 0
    last = len(list) - 1

    while first <= last:
        midpoint = (first + last)//2
        if list[midpoint] == target:
            return midpoint
        elif list[midpoint] < target:
            first = midpoint+1
        else:
            last = midpoint-1
    return -1

#Recursive binary search
def recursive_binary_search(list, target, start=0, end=None):
    if end is None:
        end = len(list) - 1
    if start > end:
        return -1

    mid = (start + end) // 2

    if target == list[mid]:
        return mid
    else:
        if target < list[mid]:
            return recursive_binary_search(list, target, start, mid-1)
        else:
            return recursive_binary_search(list, target, mid+1, end)

