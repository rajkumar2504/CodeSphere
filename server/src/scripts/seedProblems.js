const { db } = require('../config/db');

const problems = [
    {
        title: "Two Sum",
        slug: "two-sum",
        description: "<p>Given an array of integers <code>nums</code> and an integer <code>target</code>, return <strong>indices</strong> of the two numbers such that they add up to <code>target</code>.</p><p>You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the same element twice.</p>",
        difficulty: "Easy",
        category: "Arrays",
        company_tags: JSON.stringify(["Google", "Facebook", "Amazon"]),
        sample_input: "nums = [2,7,11,15], target = 9",
        sample_output: "[0,1]",
        constraints: JSON.stringify(["2 <= nums.length <= 10^4", "-10^9 <= nums[i] <= 10^9", "-10^9 <= target <= 10^9"]),
        starter_code: JSON.stringify({
            javascript: "class Solution {\n    twoSum(nums, target) {\n        // Write your code here\n    }\n}",
            python: "class Solution:\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\n        pass",
            java: "class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        \n    }\n}",
            cpp: "class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        \n    }\n};"
        }),
        test_cases: JSON.stringify([
            { input: "[2,7,11,15], 9", output: "[0,1]" },
            { input: "[3,2,4], 6", output: "[1,2]" },
            { input: "[3,3], 6", output: "[0,1]" }
        ])
    },
    {
        title: "Reverse String",
        slug: "reverse-string",
        description: "<p>Write a function that reverses a string. The input string is given as an array of characters <code>s</code>.</p><p>You must do this by modifying the input array <strong>in-place</strong> with O(1) extra memory.</p>",
        difficulty: "Easy",
        category: "Strings",
        company_tags: JSON.stringify(["Apple", "Adobe", "Microsoft"]),
        sample_input: "s = [\"h\",\"e\",\"l\",\"l\",\"o\"]",
        sample_output: "[\"o\",\"l\",\"l\",\"e\",\"h\"]",
        constraints: JSON.stringify(["1 <= s.length <= 10^5", "s[i] is a printable ascii character."]),
        starter_code: JSON.stringify({
            javascript: "class Solution {\n    reverseString(s) {\n        \n    }\n}",
            python: "class Solution:\n    def reverseString(self, s: List[str]) -> None:\n        \"\"\"\n        Do not return anything, modify s in-place instead.\n        \"\"\"\n        pass",
            java: "class Solution {\n    public void reverseString(char[] s) {\n        \n    }\n}",
            cpp: "class Solution {\npublic:\n    void reverseString(vector<char>& s) {\n        \n    }\n};"
        }),
        test_cases: JSON.stringify([
            { input: "[\"h\",\"e\",\"l\",\"l\",\"o\"]", output: "[\"o\",\"l\",\"l\",\"e\",\"h\"]" },
            { input: "[\"H\",\"a\",\"n\",\"n\",\"a\",\"h\"]", output: "[\"h\",\"a\",\"n\",\"n\",\"a\",\"H\"]" }
        ])
    },
    {
        title: "Valid Parentheses",
        slug: "valid-parentheses",
        description: "<p>Given a string <code>s</code> containing just the characters <code>'('</code>, <code>')'</code>, <code>'{'</code>, <code>'}'</code>, <code>'['</code> and <code>']'</code>, determine if the input string is valid.</p>",
        difficulty: "Medium",
        category: "Stack",
        company_tags: JSON.stringify(["Facebook", "Amazon", "Bloomber"]),
        sample_input: "s = \"()[]{}\"",
        sample_output: "true",
        constraints: JSON.stringify(["1 <= s.length <= 10^4", "s consists of parentheses only '()[]{}'."]),
        starter_code: JSON.stringify({
            javascript: "class Solution {\n    isValid(s) {\n        \n    }\n}",
            python: "class Solution:\n    def isValid(self, s: str) -> bool:\n        pass"
        }),
        test_cases: JSON.stringify([])
    }
];

const seedProblems = () => {
    console.log('🌱 Seeding problems...');

    db.serialize(() => {
        problems.forEach((p) => {
            const stmt = db.prepare(`
                INSERT OR REPLACE INTO problems (
                    title, slug, description, difficulty, category, 
                    company_tags, sample_input, sample_output, constraints, 
                    starter_code, test_cases
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `);

            stmt.run(
                p.title, p.slug, p.description, p.difficulty, p.category,
                p.company_tags, p.sample_input, p.sample_output, p.constraints,
                p.starter_code, p.test_cases,
                (err) => {
                    if (err) console.error(`❌ Error inserting ${p.title}:`, err.message);
                    else console.log(`✅ Inserted: ${p.title}`);
                }
            );
            stmt.finalize();
        });
    });
};

seedProblems();
