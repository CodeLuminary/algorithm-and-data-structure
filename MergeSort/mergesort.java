import java.util.*;

public class Sort {
    static List<Integer> mergeSort(List<Integer> list) {
        if (list.size() <= 1) {
            return list;
        }
        int middleIndex = list.size() / 2;
        List<Integer> leftList =
            mergeSort(list.subList(0, middleIndex));
        List<Integer> rightList =
            mergeSort(list.subList(middleIndex, list.size()));
        List<Integer> sortedList = new ArrayList<Integer>();
        int leftIndex = 0;
        int rightIndex = 0;
        int leftLength = leftList.size();
        int rightLength = rightList.size();
        while (leftIndex < leftLength && rightIndex < rightLength) {
            if (leftList.get(leftIndex) < rightList.get(rightIndex)) {
                sortedList.add(leftList.get(leftIndex));
                leftIndex++;
            } else {
                sortedList.add(rightList.get(rightIndex));
                rightIndex++;
            }
        }
        sortedList.addAll(leftList.subList(leftIndex, leftLength));
        sortedList.addAll(rightList.subList(rightIndex, rightLength));
        return sortedList;
    }

    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<Integer>(Arrays.asList(32, 100, 1, 2, 29, 28, 88, 3, 50, 67, 37, 1, 57, 20));
        System.out.println(mergeSort(list));
    }
}