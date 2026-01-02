const { db } = require('../config/db');

// Helper to create starter code for multiple languages
const createStarterCode = (functionName, params) => {
    const jsParams = params.map(p => p.name).join(', ');
    const javaParams = params.map(p => `${p.type} ${p.name}`).join(', ');
    const cppParams = params.map(p => `${p.cppType} ${p.name}`).join(', ');
    const pyParams = params.map(p => `${p.name}: ${p.pyType}`).join(', ');

    return JSON.stringify({
        javascript: `class Solution {\n    ${functionName}(${jsParams}) {\n        // Write your code here\n    }\n}`,
        python: `class Solution:\n    def ${functionName}(self, ${pyParams}) -> Any:\n        pass`,
        java: `class Solution {\n    public void ${functionName}(${javaParams}) {\n        // Write your code here\n    }\n}`,
        cpp: `class Solution {\npublic:\n    void ${functionName}(${cppParams}) {\n        // Write your code here\n    }\n};`
    });
};

const problemList = [
    // --- ARRAYS & HASHING ---
    {
        title: "Two Sum",
        slug: "two-sum",
        difficulty: "Easy",
        category: "Arrays",
        company_tags: ["Google", "Facebook", "Amazon"],
        description: `
            <p>Given an array of integers <code>nums</code> and an integer <code>target</code>, return <strong>indices</strong> of the two numbers such that they add up to <code>target</code>.</p>
            <p>You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the same element twice.</p>
            <p>You can return the answer in any order.</p>

            <p><strong>Example 1:</strong></p>
            <pre>Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].</pre>

            <p><strong>Example 2:</strong></p>
            <pre>Input: nums = [3,2,4], target = 6
Output: [1,2]</pre>
        `,
        sample_input: "nums = [2,7,11,15], target = 9",
        sample_output: "[0,1]",
        constraints: ["2 <= nums.length <= 10^4", "-10^9 <= nums[i] <= 10^9", "-10^9 <= target <= 10^9"],
        starter_code: createStarterCode("twoSum", [{ name: "nums", type: "int[]", cppType: "vector<int>&", pyType: "List[int]" }, { name: "target", type: "int", cppType: "int", pyType: "int" }]),
        test_cases: JSON.stringify([{ input: "[2,7,11,15], 9", output: "[0,1]" }]),
        solution: `
            <h3>Approach 1: Brute Force</h3>
            <p>The brute force approach is simple. Loop through each element <code>x</code> and find if there is another value that equals to <code>target - x</code>.</p>
            <div class="code-block" style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
                <pre><code>class Solution {
    public int[] twoSum(int[] nums, int target) {
        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[j] == target - nums[i]) {
                    return new int[] { i, j };
                }
            }
        }
        return null;
    }
}</code></pre>
            </div>
            <p><strong>Complexity Analysis</strong></p>
            <ul>
                <li>Time complexity: O(n^2)</li>
                <li>Space complexity: O(1)</li>
            </ul>

            <h3>Approach 2: One-pass Hash Table</h3>
            <p>We can optimize the runtime by using a Hash Map to store indices of elements we have seen so far.</p>
            <div class="code-block" style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
                <pre><code>class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>(); // val -> index
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }
            map.put(nums[i], i);
        }
        return null;
    }
}</code></pre>
            </div>
             <p><strong>Complexity Analysis</strong></p>
            <ul>
                <li>Time complexity: O(n)</li>
                <li>Space complexity: O(n)</li>
            </ul>
        `
    },
    {
        title: "Contains Duplicate",
        slug: "contains-duplicate",
        difficulty: "Easy",
        category: "Arrays",
        company_tags: ["Apple", "Microsoft", "Amazon"],
        description: `
            <p>Given an integer array <code>nums</code>, return <code>true</code> if any value appears <strong>at least twice</strong> in the array, and return <code>false</code> if every element is distinct.</p>
            
            <p><strong>Example 1:</strong></p>
            <pre>Input: nums = [1,2,3,1]
Output: true</pre>

            <p><strong>Example 2:</strong></p>
            <pre>Input: nums = [1,2,3,4]
Output: false</pre>
        `,
        sample_input: "nums = [1,2,3,1]",
        sample_output: "true",
        constraints: ["1 <= nums.length <= 10^5", "-10^9 <= nums[i] <= 10^9"],
        starter_code: createStarterCode("containsDuplicate", [{ name: "nums", type: "int[]", cppType: "vector<int>&", pyType: "List[int]" }]),
        test_cases: JSON.stringify([{ input: "[1,2,3,1]", output: "true" }]),
        solution: `
            <h3>Approach: HashSet</h3>
            <p>Use a HashSet to keep track of elements we've seen. If we see an element again, we found a duplicate.</p>
             <div class="code-block" style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
<pre><code>class Solution {
    public boolean containsDuplicate(int[] nums) {
        Set<Integer> set = new HashSet<>();
        for (int num : nums) {
            if (set.contains(num)) return true;
            set.add(num);
        }
        return false;
    }
}</code></pre></div>
            <p>Time Complexity: O(n)</p>
            <p>Space Complexity: O(n)</p>
        `
    },
    {
        title: "Valid Anagram",
        slug: "valid-anagram",
        difficulty: "Easy",
        category: "Strings",
        company_tags: ["Uber", "Google"],
        description: `
            <p>Given two strings <code>s</code> and <code>t</code>, return <code>true</code> if <code>t</code> is an anagram of <code>s</code>, and <code>false</code> otherwise.</p>
            <p>An <strong>Anagram</strong> is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.</p>

            <p><strong>Example 1:</strong></p>
            <pre>Input: s = "anagram", t = "nagaram"
Output: true</pre>
        `,
        sample_input: "s = \"anagram\", t = \"nagaram\"",
        sample_output: "true",
        constraints: ["1 <= s.length, t.length <= 5 * 10^4"],
        starter_code: createStarterCode("isAnagram", [{ name: "s", type: "String", cppType: "string", pyType: "str" }, { name: "t", type: "String", cppType: "string", pyType: "str" }]),
        test_cases: JSON.stringify([{ input: "\"anagram\", \"nagaram\"", output: "true" }]),
        solution: `
            <h3>Approach: Frequency Array</h3>
            <p>Since the input only consists of lowercase English letters, we can use an array of size 26 to count frequencies.</p>
             <div class="code-block" style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
<pre><code>class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) return false;
        int[] count = new int[26];
        for (char c : s.toCharArray()) count[c - 'a']++;
        for (char c : t.toCharArray()) count[c - 'a']--;
        for (int i : count) if (i != 0) return false;
        return true;
    }
}</code></pre></div>
        `
    },
    {
        title: "Group Anagrams",
        slug: "group-anagrams",
        difficulty: "Medium",
        category: "Arrays",
        company_tags: ["Amazon", "Google", "Apple"],
        description: `
            <p>Given an array of strings <code>strs</code>, group <strong>the anagrams</strong> together. You can return the answer in <strong>any order</strong>.</p>
            <p><strong>Example 1:</strong></p>
            <pre>Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]</pre>
        `,
        sample_input: "strs = [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]",
        sample_output: "[[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]",
        constraints: ["1 <= strs.length <= 10^4"],
        starter_code: createStarterCode("groupAnagrams", [{ name: "strs", type: "String[]", cppType: "vector<string>&", pyType: "List[str]" }]),
        test_cases: JSON.stringify([{ input: "[\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]", output: "[[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]" }]),
        solution: `
            <h3>Approach: Categorize by Sorted String</h3>
            <p>Two strings are anagrams if and only if their sorted strings are equal. We can maintain a map key -> list.</p>
             <div class="code-block" style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
<pre><code>class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> map = new HashMap<>();
        for (String s : strs) {
            char[] ca = s.toCharArray();
            Arrays.sort(ca);
            String key = String.valueOf(ca);
            if (!map.containsKey(key)) map.put(key, new ArrayList<>());
            map.get(key).add(s);
        }
        return new ArrayList<>(map.values());
    }
}</code></pre></div>
        `
    },
    {
        title: "Top K Frequent Elements",
        slug: "top-k-frequent-elements",
        difficulty: "Medium",
        category: "Arrays",
        company_tags: ["Facebook", "Netflix"],
        description: `
            <p>Given an integer array <code>nums</code> and an integer <code>k</code>, return the <code>k</code> most frequent elements.</p>
            <p><strong>Example 1:</strong></p>
            <pre>Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]</pre>
        `,
        sample_input: "nums = [1,1,1,2,2,3], k = 2",
        sample_output: "[1,2]",
        constraints: ["1 <= nums.length <= 10^5"],
        starter_code: createStarterCode("topKFrequent", [{ name: "nums", type: "int[]", cppType: "vector<int>&", pyType: "List[int]" }, { name: "k", type: "int", cppType: "int", pyType: "int" }]),
        test_cases: JSON.stringify([{ input: "[1,1,1,2,2,3], 2", output: "[1,2]" }]),
        solution: `
            <h3>Approach: Bucket Sort</h3>
            <p>Since frequencies are bounded by N, we can use bucket sort (array of lists) where index is frequency.</p>
             <div class="code-block" style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
<pre><code>class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> count = new HashMap<>();
        for (int n : nums) count.put(n, count.getOrDefault(n, 0) + 1);
        
        List<Integer>[] bucket = new List[nums.length + 1];
        for (int key : count.keySet()) {
            int freq = count.get(key);
            if (bucket[freq] == null) bucket[freq] = new ArrayList<>();
            bucket[freq].add(key);
        }
        
        int[] res = new int[k];
        int index = 0;
        for (int i = bucket.length - 1; i >= 0 && index < k; i--) {
            if (bucket[i] != null) {
                for (int val : bucket[i]) {
                    res[index++] = val;
                    if (index == k) return res;
                }
            }
        }
        return res;
    }
}</code></pre></div>
        `
    },
    {
        title: "3Sum",
        slug: "3-sum",
        difficulty: "Medium",
        category: "Two Pointers",
        company_tags: ["Facebook", "Amazon"],
        description: `
             <p>Given an integer array nums, return all the triplets <code>[nums[i], nums[j], nums[k]]</code> such that <code>i != j</code>, <code>i != k</code>, and <code>j != k</code>, and <code>nums[i] + nums[j] + nums[k] == 0</code>.</p>
        `,
        sample_input: "nums = [-1,0,1,2,-1,-4]",
        sample_output: "[[-1,-1,2],[-1,0,1]]",
        constraints: ["3 <= nums.length <= 3000"],
        starter_code: createStarterCode("threeSum", [{ name: "nums", type: "int[]", cppType: "vector<int>&", pyType: "List[int]" }]),
        test_cases: JSON.stringify([{ input: "[-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]" }]),
        solution: `
            <h3>Approach: Sort + Two Pointers</h3>
            <p>Sort the array. Fix one number <code>nums[i]</code>, and use two pointers to find pairs summing to <code>-nums[i]</code>.</p>
             <div class="code-block" style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
<pre><code>class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> res = new ArrayList<>();
        for (int i = 0; i < nums.length - 2; i++) {
            if (i == 0 || (i > 0 && nums[i] != nums[i - 1])) {
                int lo = i + 1, hi = nums.length - 1, sum = 0 - nums[i];
                while (lo < hi) {
                    if (nums[lo] + nums[hi] == sum) {
                        res.add(Arrays.asList(nums[i], nums[lo], nums[hi]));
                        while (lo < hi && nums[lo] == nums[lo + 1]) lo++;
                        while (lo < hi && nums[hi] == nums[hi - 1]) hi--;
                        lo++; hi--;
                    } else if (nums[lo] + nums[hi] < sum) lo++;
                    else hi--;
                }
            }
        }
        return res;
    }
}</code></pre></div>
        `
    },
    {
        title: "Valid Parentheses",
        slug: "valid-parentheses",
        difficulty: "Easy",
        category: "Stack",
        company_tags: ["Facebook", "Amazon"],
        description: `
            <p>Given a string <code>s</code> containing just the characters <code>'('</code>, <code>')'</code>, <code>'{'</code>, <code>'}'</code>, <code>'['</code> and <code>']'</code>, determine if the input string is valid.</p>
        `,
        sample_input: "s = \"()[]{}\"",
        sample_output: "true",
        constraints: ["1 <= s.length <= 10^4"],
        starter_code: createStarterCode("isValid", [{ name: "s", type: "String", cppType: "string", pyType: "str" }]),
        test_cases: JSON.stringify([{ input: "\"()[]{}\"", output: "true" }]),
        solution: `
            <h3>Approach: Stack</h3>
            <p>Use a stack to track open brackets.</p>
             <div class="code-block" style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
<pre><code>class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        for (char c : s.toCharArray()) {
            if (c == '(') stack.push(')');
            else if (c == '{') stack.push('}');
            else if (c == '[') stack.push(']');
            else if (stack.isEmpty() || stack.pop() != c) return false;
        }
        return stack.isEmpty();
    }
}</code></pre></div>
        `
    }
];

// --- GENERATE VARIATIONS TO REACH 100+ PROBLEMS ---
const themes = ["Planets", "Cities", "Books", "Heroes", "Stones", "Coins", "Potions", "Spells"];
const categories = ["Arrays", "Strings", "Dynamic Programming", "Math", "Greedy"];
const difficulties = ["Easy", "Medium", "Hard"];

for (let i = 8; i <= 100; i++) {
    const theme = themes[i % themes.length];
    const category = categories[i % categories.length];
    const diff = difficulties[i % difficulties.length];

    problemList.push({
        title: `Problem ${i}: The ${theme} Challenge`,
        slug: `problem-${i}-the-${theme.toLowerCase()}-challenge`,
        difficulty: diff,
        category: category,
        company_tags: JSON.stringify(["RandomCorp", "TechGiant"]),
        description: `
            <p>This is a generated practice problem involving <strong>${theme}</strong>.</p>
            <p>You need to find the optimal arrangement to solve the ${theme} puzzle.</p>
            
            <p><strong>Example 1:</strong></p>
            <pre>Input: n = 5
Output: 10
Explanation: With 5 ${theme.toLowerCase()}, the maximum value is 10.</pre>

            <p><strong>Example 2:</strong></p>
            <pre>Input: n = 3
Output: 6</pre>
        `,
        sample_input: "n = 5",
        sample_output: "10",
        constraints: JSON.stringify(["1 <= n <= 1000", `This problem is about ${theme}`]),
        starter_code: createStarterCode("solveChallenge", [{ name: "n", type: "int", cppType: "int", pyType: "int" }]),
        test_cases: JSON.stringify([{ input: "5", output: "10" }]),
        solution: `
            <h3>Approach: Optimal Strategy (Greedy/DP)</h3>
            <p>To solve the <strong>${theme} Challenge</strong>, we identify the sub-problems and solve them efficiently.</p>
            <p>For most "${theme}" problems of this type, a linear scan or a simple mathematical formula <code>n * (n + 1) / 2</code> (example) suffices.</p>
            
            <div class="code-block" style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
                <pre><code>class Solution {
    public int solveChallenge(int n) {
        // Optimal Logic for ${theme}
        return n * 2; // Placeholder logic
    }
}</code></pre>
            </div>
            <p><strong>Complexity Analysis</strong></p>
            <ul>
                <li>Time complexity: O(1) or O(n) depending on implementation.</li>
                <li>Space complexity: O(1)</li>
            </ul>
        `
    });
}


const seedLarge = () => {
    console.log(`🌱 Seeding ${problemList.length} problems with SOLUTIONS...`);

    db.serialize(() => {
        // Clear existing data and reset auto-increment ID
        db.run("DELETE FROM problems");
        db.run("DELETE FROM sqlite_sequence WHERE name='problems'");

        // Prepare statement including the new 'solution' column
        const stmt = db.prepare(`
            INSERT INTO problems (
                title, slug, description, difficulty, category, 
                company_tags, sample_input, sample_output, constraints, 
                starter_code, test_cases, solution
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `);

        problemList.forEach((p) => {
            const tags = typeof p.company_tags === 'string' ? p.company_tags : JSON.stringify(p.company_tags || []);
            const constr = typeof p.constraints === 'string' ? p.constraints : JSON.stringify(p.constraints || []);

            stmt.run(
                p.title, p.slug, p.description, p.difficulty, p.category,
                tags, p.sample_input, p.sample_output, constr,
                p.starter_code, p.test_cases, p.solution,
                (err) => {
                    if (err) console.error(`❌ Error inserting ${p.title}:`, err.message);
                }
            );
        });

        stmt.finalize(() => {
            console.log("✅ Bulk seed complete!");
        });
    });
};

seedLarge();
