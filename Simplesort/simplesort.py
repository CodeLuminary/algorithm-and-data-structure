def simple_sort(values):

    for i in range(0, len(values)):
        for j in range(i + 1, len(values)):
            if values[j] < values[i]:
                temp = values[j]
                values[j] = values[i]
                values[i] = temp

    return values