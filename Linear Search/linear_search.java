public class LinearSearchExample {
    public static int linearSearch(int[] data, int key) {
        for(int index = 0; index < data.length; index++) {
            if (data[index] == key) {
                return index;
            }
        }

        return -1;
    }
}