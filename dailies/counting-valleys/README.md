## Problem: Counting Valleys

You are given a string representing a hiker's path. The string contains only two characters, 'U' and 'D', where 'U' represents a step uphill, and 'D' represents a step downhill. The hiker starts and ends at sea level (altitude 0). A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.

Write a function called count_valleys that takes the hiker's path as input and returns the number of valleys the hiker walked through.

Example:

```
Input: "UDDDUDUU"
Output: 1
Explanation: The hiker's path can be represented as [1, 0, -1, -2, -1, -2, -1, 0], where U=1 and D=-1. The hiker walked through one valley (from altitude -1 to altitude 0).

Input: "DDUUDDUDUUUD"
Output: 2
Explanation: The hiker's path can be represented as [0, -1, -2, -1, 0, -1, -2, -1, 0, 1, 0, -1, 0], where U=1 and D=-1. The hiker walked through two valleys (from altitude -2 to altitude 0 and from altitude -1 to altitude 0).
```

**Note:**
Second example above is (AFAIU) incorrect. `Output` should be 3, as the last sequence of `[..., 0, -1, 0]` should count towards valley. Sadly, ChatGPT had an issue to clarify it despite lengthy conversation.

Date: 25.07.2023
