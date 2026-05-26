const algorithmDetails = {
  bubble: {
    name: "Bubble Sort",
    definition:
      "Bubble Sort repeatedly compares adjacent elements and swaps them until the array is sorted.",
    time: {
      best: "O(n)",
      average: "O(n²)",
      worst: "O(n²)"
    },
    space: "O(1)",
    stable: true
  },

  selection: {
    name: "Selection Sort",
    definition:
      "Selection Sort repeatedly selects the minimum element and places it at the correct position.",
    time: {
      best: "O(n²)",
      average: "O(n²)",
      worst: "O(n²)"
    },
    space: "O(1)",
    stable: false
  },

  insertion: {
    name: "Insertion Sort",
    definition:
      "Insertion Sort builds the sorted array by inserting each element into its correct position.",
    time: {
      best: "O(n)",
      average: "O(n²)",
      worst: "O(n²)"
    },
    space: "O(1)",
    stable: true
  },

  merge: {
    name: "Merge Sort",
    definition:
      "Merge Sort uses divide and conquer by splitting the array and merging sorted halves.",
    time: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n log n)"
    },
    space: "O(n)",
    stable: true
  },

  quick: {
    name: "Quick Sort",
    definition:
      "Quick Sort selects a pivot and partitions the array recursively.",
    time: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n²)"
    },
    space: "O(log n)",
    stable: false
  }
};