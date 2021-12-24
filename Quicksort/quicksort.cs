using System;
using System.Collections.Generic;

namespace SortMethods
{
    class MainClass
    {
        public static void Main(string[] args)
        {
            var list = new List<int>() { 32, 100, 1, 2, 29, 28, 88, 3, 50, 67, 37, 1, 57, 20 };
            var sortedList = SortExamples.Quicksort(list);
            Console.WriteLine(String.Join(", ", sortedList));
        }
    }

    public static class SortExamples
    {
        public static List<int> Quicksort(List<int> list)
        {
            if (list.Count <= 1)
            {
                return list;
            }

            var lessThanPivot = new List<int>();
            var greaterThanPivot = new List<int>();
            int pivot = list[0];
            int length = list.Count;
            for (int i = 1; i < length; i++)
            {
                int currentValue = list[i];
                if (currentValue <= pivot)
                {
                    lessThanPivot.Add(currentValue);
                }
                else
                {
                    greaterThanPivot.Add(currentValue);
                }
            }
            var sortedList = new List<int>();
            sortedList.AddRange(Quicksort(lessThanPivot));
            sortedList.Add(pivot);
            sortedList.AddRange(Quicksort(greaterThanPivot));

            return sortedList;
        }
    }
}