public class BinarySearch{
    public static int binarySearch(int[] data, int target){
        int first = 0;int last = data.Length -1;

        while(first <= last){
            int midpoint = (first + last) / 2;
            if(data[midpoint]==target){
                return midpoint;
            }
            else if(data[midpoint] < target){
                first = midpoint + 1;
            }
            else{
                last = midpoint -1;
            }
        }
        return -1;
    }

    public static int recursiveSearch(int[] data, int target,int start = 0,int end=null){
        if(end==null){
            end = data.Length;
        }
        if(start > end){
            return -1;
        }

        int midpoint = (first + last) / 2;
        if(target == midpoint){
            return midpoint;
        }
        else if(target < data[midpoint]){
            return recursiveSearch(data, target, start, midpoint - 1);
        }
        else{
            return recursiveSearch(data, target,midpoint + 1, end);
        }
    }
    
}