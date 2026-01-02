module.exports = [
    // --- ARRAYS & HASHING ---
    {
        title: "Contains Duplicate",
        slug: "contains-duplicate",
        difficulty: "Easy",
        category: "Arrays",
        description: `
          <p>Given an integer array <code>nums</code>, return <code>true</code> if any value appears <strong>at least twice</strong> in the array, and return <code>false</code> if every element is distinct.</p>
          
          <h3>Example 1:</h3>
          <pre><strong>Input:</strong> nums = [1,2,3,1]
<strong>Output:</strong> true
<strong>Explanation:</strong> The element 1 appears twice.</pre>
          
          <h3>Example 2:</h3>
          <pre><strong>Input:</strong> nums = [1,2,3,4]
<strong>Output:</strong> false
<strong>Explanation:</strong> All elements are distinct.</pre>

          <h3>Constraints:</h3>
          <ul>
            <li><code>1 <= nums.length <= 10^5</code></li>
            <li><code>-10^9 <= nums[i] <= 10^9</code></li>
          </ul>

          <h3>Complexity:</h3>
          <ul>
            <li><strong>Time Complexity:</strong> O(n) - We iterate through the array once.</li>
            <li><strong>Space Complexity:</strong> O(n) - We use a hash set to store elements.</li>
          </ul>
        `,
        testCases: [
            { input: "[1,2,3,1]", output: "true" },
            { input: "[1,2,3,4]", output: "false" }
        ],
        starterCode: {
            javascript: "class Solution {\n  containsDuplicate(nums) {\n    // Write your code here\n  }\n}"
        }
    },
    {
        title: "Valid Anagram",
        slug: "valid-anagram",
        difficulty: "Easy",
        category: "Strings",
        description: `
          <p>Given two strings <code>s</code> and <code>t</code>, return <code>true</code> if <code>t</code> is an anagram of <code>s</code>, and <code>false</code> otherwise.</p>
          <p>An <strong>Anagram</strong> is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.</p>

          <h3>Example 1:</h3>
          <pre><strong>Input:</strong> s = "anagram", t = "nagaram"
<strong>Output:</strong> true</pre>

          <h3>Example 2:</h3>
          <pre><strong>Input:</strong> s = "rat", t = "car"
<strong>Output:</strong> false</pre>

          <h3>Constraints:</h3>
          <ul>
            <li><code>1 <= s.length, t.length <= 5 * 10^4</code></li>
            <li><code>s</code> and <code>t</code> consist of lowercase English letters.</li>
          </ul>
          
          <h3>Complexity:</h3>
          <ul>
             <li><strong>Time Complexity:</strong> O(n)</li>
             <li><strong>Space Complexity:</strong> O(1) (since the character set is fixed at 26 lowercase letters)</li>
          </ul>
        `,
        testCases: [
            { input: "'anagram', 'nagaram'", output: "true" },
            { input: "'rat', 'car'", output: "false" }
        ],
        starterCode: {
            javascript: "class Solution {\n  isAnagram(s, t) {\n    // Write your code here\n  }\n}"
        }
    },
    {
        title: "Group Anagrams",
        slug: "group-anagrams",
        difficulty: "Medium",
        category: "Arrays",
        description: `
          <p>Given an array of strings <code>strs</code>, group <strong>the anagrams</strong> together. You can return the answer in <strong>any order</strong>.</p>
          
          <h3>Example 1:</h3>
          <pre><strong>Input:</strong> strs = ["eat","tea","tan","ate","nat","bat"]
<strong>Output:</strong> [["bat"],["nat","tan"],["ate","eat","tea"]]</pre>
          
          <h3>Example 2:</h3>
          <pre><strong>Input:</strong> strs = [""]
<strong>Output:</strong> [[""]]</pre>

          <h3>Constraints:</h3>
          <ul>
            <li><code>1 <= strs.length <= 10^4</code></li>
            <li><code>0 <= strs[i].length <= 100</code></li>
          </ul>
        `,
        testCases: [
            { input: "[\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]", output: "[[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]" },
            { input: "[\"\"]", output: "[[\"\"]]" }
        ],
        starterCode: {
            javascript: "class Solution {\n  groupAnagrams(strs) {\n    // Write your code here\n  }\n}"
        }
    },
    {
        title: "Top K Frequent Elements",
        slug: "top-k-frequent-elements",
        difficulty: "Medium",
        category: "Arrays",
        description: `
        <p>Given an integer array <code>nums</code> and an integer <code>k</code>, return the <code>k</code> most frequent elements. You may return the answer in <strong>any order</strong>.</p>
        
        <h3>Example 1:</h3>
          <pre><strong>Input:</strong> nums = [1,1,1,2,2,3], k = 2
<strong>Output:</strong> [1,2]</pre>
          
        <h3>Example 2:</h3>
          <pre><strong>Input:</strong> nums = [1], k = 1
<strong>Output:</strong> [1]</pre>

          <h3>Constraints:</h3>
          <ul>
            <li><code>1 <= nums.length <= 10^5</code></li>
            <li><code>-10^4 <= nums[i] <= 10^4</code></li>
            <li><code>k</code> is in the range <code>[1, the number of unique elements in the array]</code>.</li>
          </ul>
        `,
        testCases: [
            { input: "[1,1,1,2,2,3], 2", output: "[1,2]" },
            { input: "[1], 1", output: "[1]" }
        ],
        starterCode: {
            javascript: "class Solution {\n  topKFrequent(nums, k) {\n    // Write your code here\n  }\n}"
        }
    },

    // --- TWO POINTERS ---
    {
        title: "Valid Palindrome",
        slug: "valid-palindrome",
        difficulty: "Easy",
        category: "Two Pointers",
        description: `
          <p>A phrase is a <strong>palindrome</strong> if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.</p>
          <p>Alphanumeric characters include letters and numbers.</p>

          <h3>Example 1:</h3>
          <pre><strong>Input:</strong> s = "A man, a plan, a canal: Panama"
<strong>Output:</strong> true
<strong>Explanation:</strong> "amanaplanacanalpanama" is a palindrome.</pre>

          <h3>Example 2:</h3>
          <pre><strong>Input:</strong> s = "race a car"
<strong>Output:</strong> false
<strong>Explanation:</strong> "raceacar" is not a palindrome.</pre>
          
          <h3>Constraints:</h3>
          <ul>
            <li><code>1 <= s.length <= 2 * 10^5</code></li>
            <li><code>s</code> consists only of printable ASCII characters.</li>
          </ul>
        `,
        testCases: [
            { input: "\"A man, a plan, a canal: Panama\"", output: "true" },
            { input: "\"race a car\"", output: "false" }
        ],
        starterCode: {
            javascript: "class Solution {\n  isPalindrome(s) {\n    // Write your code here\n  }\n}"
        }
    },
    {
        title: "3Sum",
        slug: "3sum",
        difficulty: "Medium",
        category: "Two Pointers",
        description: `
          <p>Given an integer array nums, return all the triplets <code>[nums[i], nums[j], nums[k]]</code> such that <code>i != j</code>, <code>i != k</code>, and <code>j != k</code>, and <code>nums[i] + nums[j] + nums[k] == 0</code>.</p>
          <p>Notice that the solution set must not contain duplicate triplets.</p>
          
          <h3>Example 1:</h3>
          <pre><strong>Input:</strong> nums = [-1,0,1,2,-1,-4]
<strong>Output:</strong> [[-1,-1,2],[-1,0,1]]
<strong>Explanation:</strong> 
The distinct triplets are [-1,0,1] and [-1,-1,2].</pre>

          <h3>Example 2:</h3>
          <pre><strong>Input:</strong> nums = [0,1,1]
<strong>Output:</strong> []</pre>

          <h3>Constraints:</h3>
          <ul>
             <li><code>3 <= nums.length <= 3000</code></li>
             <li><code>-10^5 <= nums[i] <= 10^5</code></li>
          </ul>
        `,
        testCases: [
            { input: "[-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]" },
            { input: "[0,1,1]", output: "[]" }
        ],
        starterCode: {
            javascript: "class Solution {\n  threeSum(nums) {\n    // Write your code here\n  }\n}"
        }
    },
    {
        title: "Container With Most Water",
        slug: "container-with-most-water",
        difficulty: "Medium",
        category: "Two Pointers",
        description: `
          <p>You are given an integer array <code>height</code> of length <code>n</code>. There are <code>n</code> vertical lines drawn such that the two endpoints of the <code>i<sup>th</sup></code> line are <code>(i, 0)</code> and <code>(i, height[i])</code>.</p>
          <p>Find two lines that together with the x-axis form a container, such that the container contains the most water.</p>
          <p>Return <em>the maximum amount of water a container can store</em>.</p>
          
          <h3>Example 1:</h3>
          <pre><strong>Input:</strong> height = [1,8,6,2,5,4,8,3,7]
<strong>Output:</strong> 49
<strong>Explanation:</strong> The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.</pre>

          <h3>Example 2:</h3>
          <pre><strong>Input:</strong> height = [1,1]
<strong>Output:</strong> 1</pre>
        `,
        testCases: [
            { input: "[1,8,6,2,5,4,8,3,7]", output: "49" },
            { input: "[1,1]", output: "1" }
        ],
        starterCode: {
            javascript: "class Solution {\n  maxArea(height) {\n    // Write your code here\n  }\n}"
        }
    },

    // --- SLIDING WINDOW ---
    {
        title: "Best Time to Buy and Sell Stock",
        slug: "best-time-to-buy-and-sell-stock",
        difficulty: "Easy",
        category: "Sliding Window",
        description: `
          <p>You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i<sup>th</sup></code> day.</p>
          <p>You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.</p>
          <p>Return <em>the maximum profit you can achieve from this transaction</em>. If you cannot achieve any profit, return <code>0</code>.</p>
          
          <h3>Example 1:</h3>
          <pre><strong>Input:</strong> prices = [7,1,5,3,6,4]
<strong>Output:</strong> 5
<strong>Explanation:</strong> Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.</pre>
          
          <h3>Example 2:</h3>
          <pre><strong>Input:</strong> prices = [7,6,4,3,1]
<strong>Output:</strong> 0
<strong>Explanation:</strong> In this case, no transactions are done and the max profit = 0.</pre>
        `,
        testCases: [
            { input: "[7,1,5,3,6,4]", output: "5" },
            { input: "[7,6,4,3,1]", output: "0" }
        ],
        starterCode: {
            javascript: "class Solution {\n  maxProfit(prices) {\n    // Write your code here\n  }\n}"
        }
    },
    {
        title: "Longest Substring Without Repeating Characters",
        slug: "longest-substring-without-repeating-characters",
        difficulty: "Medium",
        category: "Sliding Window",
        description: `
          <p>Given a string <code>s</code>, find the length of the <strong>longest substring</strong> without repeating characters.</p>

          <h3>Example 1:</h3>
          <pre><strong>Input:</strong> s = "abcabcbb"
<strong>Output:</strong> 3
<strong>Explanation:</strong> The answer is "abc", with the length of 3.</pre>

          <h3>Example 2:</h3>
          <pre><strong>Input:</strong> s = "bbbbb"
<strong>Output:</strong> 1
<strong>Explanation:</strong> The answer is "b", with the length of 1.</pre>
          
          <h3>Constraints:</h3>
          <ul>
            <li><code>0 <= s.length <= 5 * 10^4</code></li>
            <li><code>s</code> consists of English letters, digits, symbols and spaces.</li>
          </ul>
        `,
        testCases: [
            { input: "\"abcabcbb\"", output: "3" },
            { input: "\"bbbbb\"", output: "1" }
        ],
        starterCode: {
            javascript: "class Solution {\n  lengthOfLongestSubstring(s) {\n    // Write your code here\n  }\n}"
        }
    },

    // --- STACK ---
    {
        title: "Valid Parentheses",
        slug: "valid-parentheses",
        difficulty: "Easy",
        category: "Stack",
        description: `
          <p>Given a string <code>s</code> containing just the characters <code>'('</code>, <code>')'</code>, <code>'{'</code>, <code>'}'</code>, <code>'['</code> and <code>']'</code>, determine if the input string is valid.</p>
          <p>An input string is valid if:</p>
          <ol>
            <li>Open brackets must be closed by the same type of brackets.</li>
            <li>Open brackets must be closed in the correct order.</li>
            <li>Every close bracket has a corresponding open bracket of the same type.</li>
          </ol>
          
          <h3>Example 1:</h3>
          <pre><strong>Input:</strong> s = "()"
<strong>Output:</strong> true</pre>

          <h3>Example 2:</h3>
          <pre><strong>Input:</strong> s = "()[]{}"
<strong>Output:</strong> true</pre>

          <h3>Example 3:</h3>
          <pre><strong>Input:</strong> s = "(]"
<strong>Output:</strong> false</pre>
        `,
        testCases: [
            { input: "\"()\"", output: "true" },
            { input: "\"()[]{}\"", output: "true" },
            { input: "\"(]\"", output: "false" }
        ],
        starterCode: {
            javascript: "class Solution {\n  isValid(s) {\n    // Write your code here\n  }\n}"
        }
    },
    {
        title: "Min Stack",
        slug: "min-stack",
        difficulty: "Medium",
        category: "Stack",
        description: `
          <p>Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.</p>
          <p>Implement the <code>MinStack</code> class:</p>
          <ul>
            <li><code>MinStack()</code> initializes the stack object.</li>
            <li><code>void push(int val)</code> pushes the element <code>val</code> onto the stack.</li>
            <li><code>void pop()</code> removes the element on the top of the stack.</li>
            <li><code>int top()</code> gets the top element of the stack.</li>
            <li><code>int getMin()</code> retrieves the minimum element in the stack.</li>
          </ul>
          <p>You must implement a solution with <code>O(1)</code> time complexity for each function.</p>

          <h3>Example 1:</h3>
          <pre><strong>Input:</strong>
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

<strong>Output:</strong>
[null,null,null,null,-3,null,0,-2]

<strong>Explanation:</strong>
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2</pre>
        `,
        testCases: [
            { input: "[\"MinStack\",\"push\",\"push\",\"push\",\"getMin\",\"pop\",\"top\",\"getMin\"]\n[[],[-2],[0],[-3],[],[],[],[]]", output: "[null,null,null,null,-3,null,0,-2]" }
        ],
        starterCode: {
            javascript: "class MinStack {\n  constructor() {\n  }\n  push(val) {\n  }\n  pop() {\n  }\n  top() {\n  }\n  getMin() {\n  }\n}"
        }
    },

    // --- LINKED LIST ---
    {
        title: "Reverse Linked List",
        slug: "reverse-linked-list",
        difficulty: "Easy",
        category: "Linked List",
        description: `
          <p>Given the <code>head</code> of a singly linked list, reverse the list, and return <em>the reversed list</em>.</p>
          
          <h3>Example 1:</h3>
          <pre><strong>Input:</strong> head = [1,2,3,4,5]
<strong>Output:</strong> [5,4,3,2,1]</pre>

          <h3>Example 2:</h3>
          <pre><strong>Input:</strong> head = [1,2]
<strong>Output:</strong> [2,1]</pre>
          
          <h3>Complexity:</h3>
          <ul>
            <li><strong>Time Complexity:</strong> O(n)</li>
            <li><strong>Space Complexity:</strong> O(1) (Iterative) or O(n) (Recursive)</li>
          </ul>
        `,
        testCases: [
            { input: "[1,2,3,4,5]", output: "[5,4,3,2,1]" }
        ],
        starterCode: {
            javascript: "/**\n * Definition for singly-linked list.\n * function ListNode(val, next) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.next = (next===undefined ? null : next)\n * }\n */\nclass Solution {\n  reverseList(head) {\n    // Write your code here\n  }\n}"
        }
    },
    {
        title: "Merge Two Sorted Lists",
        slug: "merge-two-sorted-lists",
        difficulty: "Easy",
        category: "Linked List",
        description: `
          <p>You are given the heads of two sorted linked lists <code>list1</code> and <code>list2</code>.</p>
          <p>Merge the two lists in a one <strong>sorted</strong> list. The list should be made by splicing together the nodes of the first two lists.</p>
          <p>Return <em>the head of the merged linked list</em>.</p>
          
          <h3>Example 1:</h3>
          <pre><strong>Input:</strong> list1 = [1,2,4], list2 = [1,3,4]
<strong>Output:</strong> [1,1,2,3,4,4]</pre>

          <h3>Example 2:</h3>
          <pre><strong>Input:</strong> list1 = [], list2 = []
<strong>Output:</strong> []</pre>
        `,
        testCases: [
            { input: "[1,2,4], [1,3,4]", output: "[1,1,2,3,4,4]" }
        ],
        starterCode: {
            javascript: "class Solution {\n  mergeTwoLists(list1, list2) {\n    // Write your code here\n  }\n}"
        }
    },
    {
        title: "Linked List Cycle",
        slug: "linked-list-cycle",
        difficulty: "Easy",
        category: "Linked List",
        description: `
          <p>Given <code>head</code>, the head of a linked list, determine if the linked list has a cycle in it.</p>
          <p>There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the <code>next</code> pointer. Internally, <code>pos</code> is used to denote the index of the node that tail's <code>next</code> pointer is connected to. <strong>Note that <code>pos</code> is not passed as a parameter</strong>.</p>
          <p>Return <code>true</code><em> if there is a cycle in the linked list</em>. Otherwise, return <code>false</code>.</p>
        
          <h3>Example 1:</h3>
          <pre><strong>Input:</strong> head = [3,2,0,-4], pos = 1
<strong>Output:</strong> true
<strong>Explanation:</strong> There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).</pre>
          
          <h3>Constraints:</h3>
          <ul>
            <li>The number of the nodes in the list is in the range <code>[0, 10^4]</code>.</li>
            <li><code>-10^5 <= Node.val <= 10^5</code></li>
          </ul>
        `,
        testCases: [
            { input: "[3,2,0,-4], 1", output: "true" }
        ],
        starterCode: {
            javascript: "class Solution {\n  hasCycle(head) {\n    // Write your code here\n  }\n}"
        }
    },

    // --- TREES ---
    {
        title: "Invert Binary Tree",
        slug: "invert-binary-tree",
        difficulty: "Easy",
        category: "Trees",
        description: `
          <p>Given the <code>root</code> of a binary tree, invert the tree, and return <em>its root</em>.</p>
          
          <h3>Example 1:</h3>
          <pre><strong>Input:</strong> root = [4,2,7,1,3,6,9]
<strong>Output:</strong> [4,7,2,9,6,3,1]</pre>

          <h3>Example 2:</h3>
          <pre><strong>Input:</strong> root = [2,1,3]
<strong>Output:</strong> [2,3,1]</pre>
          
          <h3>Complexity:</h3>
          <ul>
            <li><strong>Time Complexity:</strong> O(n)</li>
            <li><strong>Space Complexity:</strong> O(n) (recursive stack)</li>
          </ul>
        `,
        testCases: [
            { input: "[4,2,7,1,3,6,9]", output: "[4,7,2,9,6,3,1]" }
        ],
        starterCode: {
            javascript: "class Solution {\n  invertTree(root) {\n    // Write your code here\n  }\n}"
        }
    },
    {
        title: "Maximum Depth of Binary Tree",
        slug: "maximum-depth-of-binary-tree",
        difficulty: "Easy",
        category: "Trees",
        description: `
          <p>Given the <code>root</code> of a binary tree, return <em>its maximum depth</em>.</p>
          <p>A binary tree's <strong>maximum depth</strong> is the number of nodes along the longest path from the root node down to the farthest leaf node.</p>

          <h3>Example 1:</h3>
          <pre><strong>Input:</strong> root = [3,9,20,null,null,15,7]
<strong>Output:</strong> 3</pre>

          <h3>Example 2:</h3>
          <pre><strong>Input:</strong> root = [1,null,2]
<strong>Output:</strong> 2</pre>
        `,
        testCases: [
            { input: "[3,9,20,null,null,15,7]", output: "3" }
        ],
        starterCode: {
            javascript: "class Solution {\n  maxDepth(root) {\n    // Write your code here\n  }\n}"
        }
    },

    // --- DYNAMIC PROGRAMMING ---
    {
        title: "Climbing Stairs",
        slug: "climbing-stairs",
        difficulty: "Easy",
        category: "Dynamic Programming",
        description: `
          <p>You are climbing a staircase. It takes <code>n</code> steps to reach the top.</p>
          <p>Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?</p>
          
          <h3>Example 1:</h3>
          <pre><strong>Input:</strong> n = 2
<strong>Output:</strong> 2
<strong>Explanation:</strong> There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps</pre>

          <h3>Example 2:</h3>
          <pre><strong>Input:</strong> n = 3
<strong>Output:</strong> 3
<strong>Explanation:</strong> There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step</pre>
          
          <h3>Constraints:</h3>
          <ul>
            <li><code>1 <= n <= 45</code></li>
          </ul>

          <h3>Complexity:</h3>
          <ul>
            <li><strong>Time Complexity:</strong> O(n)</li>
            <li><strong>Space Complexity:</strong> O(1) (space optimized) or O(n)</li>
          </ul>
        `,
        testCases: [
            { input: "2", output: "2" },
            { input: "3", output: "3" }
        ],
        starterCode: {
            javascript: "class Solution {\n  climbStairs(n) {\n    // Write your code here\n  }\n}"
        }
    }
];
