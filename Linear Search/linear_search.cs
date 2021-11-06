public class SearchExamples
{
    public static int LinearSearch(int[] data, int key)
    {
        for (int index = 0; index < data.Length; index++)
        {
            if (data[index] == key)
            {
                return index;
            }
        }

        return -1;
    }

    public static int GenericLinearSearch<T>(T[] data, T key)
    {
        for (int index = 0; index < data.Length; index++)
        {
            if (EqualityComparer<T>.Default.Equals(data[index], key))
            {
                return index;
            }
        }

        return -1;
    }
}