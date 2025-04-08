---
layout: post
title: "[A]RTS 数据结构的基石2"
date: 2025-03-07
categories: []
tags: [ARTS]
---
## 数组

我们在[上一篇](/a-rts_w2_data_structions)文章里探讨了一些以链表为主的线性表的算法，这周我们会探讨数组。

数组和链表都是一种线性表，但是他们的静态表现不同。数组是**紧密排列**的内存区域，而链表
是**随机排布**的内存。【*链表的发明*是有原因的，[磁鼓存储](https://en.wikipedia.org/wiki/Drum_memory)】

关于数组的使用，关键在与其指针的运用。这里引入一个滑动窗口问题来介绍。

## 发现滑动窗口

在讨论滑动窗口之前，我们先看看，使用滑动窗口的场景有什么特点？
用一个leetcode的题目来看看。

## [leetcode 76 Minimum window Substring](https://leetcode.com/problems/minimum-window-substring/description/)
这题是从一个字符串里找到最短的包含指定字符的字符串。

比如目标字串 **s="ADOBECODEBANC"**, 指定的字符是 **t="ABC"**
那么答案就是 **BANC**

讨论这个问题的时候，很容易就想到使用两个指针来创造一个窗口来判断这个窗口的字符串是否符合要求。
我们先根据这个朴素的逻辑写一个代码。

```c
void set_key(int *map, char c)
{
        map[c - 'A'] += 1;
}

int get_key(int *map, char c)
{
        return map[c - 'A'];
}

bool has_target_char(int from, int to, char *s, char *t)
{
        int map[24] = {0};
        for (int n = from; n <= to; n++) {
                for (int i = 0; i < strlen(t); i++) {
                        if (s[n] == t[i]) {
                                set_key(map, s[n]);
                        }
                }
        }
        bool res = true;
        for (int i = 0; i < strlen(t); i++) {
                res = res && (map[t[i] - 'A'] ? true : false);
        }
        return res;
}

void print_range_str(int from, int to, char *s)
{
        for (int i = from; i <= to; i++) {
                printf("%c ", s[i]);
        }
}

char *minWindow(char *s, char *t)
{
        int s_len = strlen(s);
        int t_len = strlen(t);

        for (int i = 0; i < s_len; i++) {
                for (int j = i + 1; j < s_len; j++) {
                        bool find_string = has_target_char(i, j, s, t);
                        if (find_string) {
                                print_range_str(i, j, s);
                                printf("\n");
                        }
                }
        }
}
```

这样如上代码所演示的逻辑。我们挑一个来解释。

当s=ADOBECODEBANC

i=0, j=0

t=ABC

大概当j=5的时候ABC的target就都被满足了，这时候就找到了指定字符。这样就只要把所有字符串
挑短的留下来，这样就能找到最短的情况

来算一下这个函数的时间复杂度看看

`has_target_char(from,to,s,t)`
$ \mathcal{O}(w \times |t|) $

`minWindow(s,t)`
$\mathcal{O}(|s| \times |t|)\times \mathcal{O}(|s|^2)$
```
01. A D O B E C 
02. A D O B E C O 
03. A D O B E C O D 
04. A D O B E C O D E 
05. A D O B E C O D E B 
06. A D O B E C O D E B A 
07. A D O B E C O D E B A N 
08. A D O B E C O D E B A N C 
09.   D O B E C O D E B A 
10.   D O B E C O D E B A N 
11.   D O B E C O D E B A N C 
12.     O B E C O D E B A 
13.     O B E C O D E B A N 
14.     O B E C O D E B A N C 
15.       B E C O D E B A 
16.       B E C O D E B A N 
17.       B E C O D E B A N C 
18.         E C O D E B A 
19.         E C O D E B A N 
20.         E C O D E B A N C 
21.           C O D E B A 
22.           C O D E B A N 
23.           C O D E B A N C 
24.             O D E B A N C 
25.               D E B A N C 
26.                 E B A N C 
27.                   B A N C 
```
想想看这个思路**重复计算**了什么？

如果我们需要的是最小的串那在我们发现**ADBEC**后的所有串都是不需要的,但是这个方法是必须把这些串都算完才能找下一组。
也就是说在发现一个串之后，应该立刻break当前循环，continue外层循环。
```c
char *minWindow(char *s, char *t)
{
        int s_len = strlen(s);
        int t_len = strlen(t);

        for (int i = 0; i < s_len; i++) {
                for (int j = i + 1; j < s_len; j++) {
                        bool find_string = has_target_char(i, j, s, t);
                        if (find_string) {
                                print_range_str(i, j, s);
                                printf("\n");
                                break;
                        }
                }
        }
}
```
修改之后得出的数据明显少了很多。这样相当于只调控**右边**的指针让右边指针及时退出，明显
还可以通过调整**左边**的指针来让数据变更少。
```
1. A D O B E C
2.   D O B E C O D E B A
3.     O B E C O D E B A
4.       B E C O D E B A
5.         E C O D E B A
6.           C O D E B A
7.             O D E B A N C
8.               D E B A N C
9.                 E B A N C
10.                  B A N C
```
经过观察你可以发现第二次的数据的最右边都是target数组里的字符 。上图的**2-6**和**7-10**都是同一个字串的简化。所以其实同样的，在确定右边指针后就可以调整左边指针来寻找最好*情况*。

滑动窗口，几乎要被发明出来了。

## 滑动窗口

很自然的我们发现如果有一个既可以控制左边指针又能控制右边指针的算法，就能再一次简化搜索范围。

## 滑动窗口的算法

1. 首先需要left-right指针这两个指针构成我们需要的窗口。

2. 通过循环增加right指针从而扩大窗口，直到在窗口中看到所有目标元素。

3. 窗口包含所有目标元素后，right指针停止扩大，增加left指针，从而缩小窗口直到窗口中的字符串不符合要求

4. 重复2.3.步骤，直到right到达字符串的末尾

如下是我给出的一个C的方案。

```c
void set_key(int *map, char c)
{
        map[c - 'A'] += 1;
}

static inline bool has_target_char_map(int from, int to, char *s, char *t, int *map)
{
        /* int map[24] = {0}; */
        // test [from, to] range
        if (to < from)
                return false;
        if (((to - from) + 1) < strlen(t))
                return false;

        int t_len = strlen(t);

        int target_map[MAP_SIZE] = {0};
        for (int i = 0; i < t_len; i++) {
                set_key(target_map, t[i]);
        }

        memset(map, 0, sizeof(typeof(map[0])) * MAP_SIZE);

        for (int n = from; n <= to; n++) {
                for (int i = 0; i < strlen(t); i++) {
                        if (s[n] == t[i]) {
                                set_key(map, s[n]);
                                break;
                        }
                }
        }

        bool res = true;
        for (int i = 0; i < MAP_SIZE; i++) {
                if (target_map[i] <= map[i]) {
                        res = res && true;
                } else {
                        res = res && false;
                        break;
                }
        }
        return res;
}

char *range_str(int from, int to, char *s)
{
        int len = strlen(s);
        if (to == (len - 1)) {
                return s + from;
        }
        if (to+ 1 <= len - 1) {
                s[to + 1] = '\0';
                return s+from;
        }
        return "";
}

char *minWindow_opt(char *s, char *t)
{
        int s_len = strlen(s);
        int t_len = strlen(t);
        if (t_len > s_len)
                return "";
        // 这里的left和right构成了一个窗口
        int left = 0;
        int right = left;

        // map负责记录当前的窗口的字符串有没有满足字符串t要求
        int map[MAP_SIZE] = {0};
        // lastmap是为了记录上一个满足要求的字符串
        int last_map[MAP_SIZE] = {0};

        // 为了记录最短的窗口
        int shortest_left = 0;
        int shortest_right = s_len - 1;
        
        // 右边的指针从0的位置开始到目标s字符串结束为止
        // 大多数情况right会遍历完字符串
        for (; right < s_len;) {
                // hastargetcharmap函数判断当前的窗口是否满足字符串t的要求
                bool find = has_target_char_map(left, right, s, t, map);
                if (find) {
                // 如果满足要求，就需要缩小left的窗口，即left++
                        do {
                            // 保存这个满足要求的map到lastmap
                                memcpy(last_map, map, sizeof(int) * MAP_SIZE);
                            // 这里判断一下当前这个满足要求的窗口是不是最小的窗口
                            // 如果比最小的窗口还要小那么就记录下来
                                if (right - left <
                                    shortest_right - shortest_left) {
                                        shortest_left = left;
                                        shortest_right = right;
                                }
                            // 如果left==right且他们也是满足要求的字符串说明就是他们
                                if (left == right)
                                        return range_str(left, right, s);
                            // 缩小left窗口
                                left++;
                            // 判断缩小后的窗口是不是满足要求，如果满足就继续缩小
                        } while (has_target_char_map(left, right, s, t, map));
                }
                // left缩小窗口后没有满足要求，就需要扩大窗口，直到字符串末尾
                right++;
        }

        bool res = true;
        for (int i = 0; i < strlen(t); i++) {
                res = res && (last_map[t[i] - 'A'] ? true : false);
        }

        return res ? range_str(shortest_left, shortest_right, s) : "";

}
```
下面修改过的方案，可以发现这个方案还是没法通过leetcode最后几个test case, 这时候我们可以通过算函数的时间复杂度来判断如何修改策略。

`has_target_char_map(from,to,s,t,t_len,target_map)` $ \mathcal{O}( (to-from) \times tlen + mapsize)$
`minWindow_opt(s,t)` $\mathcal{O}(slen) \times \mathcal{O}( (to-from) \times tlen + mapsize) $

整体应该是  $\mathcal{O}(N \times K \times M)$
```c
#define MAP_SIZE 128

#define set_key(map, c) map[c - 'A'] += 1;

int get_key(int *map, char c)
{
        return map[c - 'A'];
}

static inline bool has_target_char_map(int from,
                                       int to,
                                       char *s,
                                       char *t,
                                       int t_len,
                                       int *target_map)
{
        /* int map[24] = {0}; */
        // test [from, to] range
        int map[MAP_SIZE] = {0};
        if (to < from)
                return false;
        if (((to - from) + 1) < t_len)
                return false;

        for (int n = from; n <= to; n++) {
                for (int i = 0; i < t_len; i++) {
                        if (s[n] == t[i]) {
                                set_key(map, s[n]);
                                break;
                        }
                }
        }

        bool res = true;
        for (int i = 0; i < MAP_SIZE; i++) {
                if (target_map[i] <= map[i]) {
                        res = res && true;
                } else {
                        res = res && false;
                        break;
                }
        }
        return res;
}

char *range_str(int from, int to, char *s, int len)
{
        if (to == (len - 1)) {
                return s + from;
        }
        if (to + 1 <= len - 1) {
                s[to + 1] = '\0';
                return s + from;
        }
        return "";
}

char *minWindow_opt(char *s, char *t)
{
        int s_len = strlen(s);
        int t_len = strlen(t);
        if (t_len > s_len)
                return "";
        int left = 0;
        int right = left;


        int shortest_left = 0;
        int shortest_right = INT_MAX;

        int target_map[MAP_SIZE] = {0};
        for (int i = 0; i < t_len; i++) {
                set_key(target_map, t[i]);
        }

        for (; right < s_len;) {
                while (
                    has_target_char_map(left, right, s, t, t_len, target_map)) {
                        if (left == right)
                                return range_str(left, right, s, s_len);
                        if (right - left < shortest_right - shortest_left) {
                                shortest_left = left;
                                shortest_right = right;
                        }
                        left++;
                }
                right++;
        }

        if (shortest_right == INT_MAX) {
                return "";
        }
        printf("%d %d\n", shortest_left, shortest_right);
        return range_str(shortest_left, shortest_right, s, s_len);
}
```

下面会给出一个更简单效率更高的方案，我通过分析他们的不同来写出滑动窗口需要关注的点。
```go
char *minWindow_opt_2(char *s, char *t)
{
        int need[128] = {0};
        int window[128] = {0};
        int m = strlen(s);
        int n = strlen(t);


        for (int i = 0; i < n; i++) {
                need[t[i]]++;
        }

        int k = -1;
        int mi = m + 1;
        // 这里有个关键就是怎么判断当前窗口的字符串已经是合适的字符串了
        // 这里使用了cnt变量来控制。
        // 假设 t=ABC 如果一个字符串str完全包含这三个字符，我只需要在str有相关
        // 字符出现的时候增加cnt的值就行了，即使存在t = AA两个字符相同，也可以通过
        // 判断need和window中实际字符对应的个数来判断。
        // 
        // cnt更像是一个检查记录，维护这个记录就不需要像上面那个代码一样遍历整个map
        // 
        int cnt = 0;

        int left = 0;
        int right = 0;

        for (; right < m; right++) {
                char c = s[right];

                window[c]++;
                if (window[c] <= need[c]) {
                        cnt++;
                }
                while (cnt == n) {
                        if ((right - left + 1) < mi) {
                                mi = right - left + 1;
                                k = left;
                        }

                        c = s[left];
                        if (window[c] <= need[c]) {
                                cnt--;
                        }
                        window[c]--;
                        left++;
                }
        }
        if (k < 0) {
                return "";
        }
        return range_str(k, k + mi-1, s, m);
}
```
整体应该是  $\mathcal{O}(N \times M)$ 因为只有两个嵌套循环。
滑动窗口是一种双指针在矩阵中的应用。

上文我们看的滑动窗口的例子，应该着重看滑动窗口的思路如何一步步展开优化的，可以对比倒数第一个和第二个代码，
他们的代码思路差不多，但是整体的时间复杂度完全不同。抓住问题的本质才是减少时间复杂度的关键。

我们看一下另一个双指针应用的问题

## 二分搜索 {#binary_search}

二分搜索是一个很容易出错也很容易理解的算法。简单来说就是通过不断寻找剩下的数据的中间值
来搜索目标数字。

[Knuth](https://en.wikipedia.org/wiki/Donald_Knuth)在他的[《计算机程序设计与艺术》](https://en.wikipedia.org/wiki/The_Art_of_Computer_Programming)卷三6.2.1中提到“尽管二分查找的基本思想相当简单，但细节可能需要更强的技巧，许多优秀的程序员在最初尝试的时候，
都有可能多次犯错。”

既然是这样不如我们自己试试看先。既然是这样不如我们自己试试看先

## [leetcode 704 Binary Search](https://leetcode.com/problems/binary-search/)
问题很简单我会提供一个我初次尝试这个问题的一个答案（这是一个错误答案）通过这个错误答案我想分析一下思考上的问题。
```c
int my_first_seen_search(int *nums, int numsSize, int target)
{
        int l = 0;
        int r = numsSize - 1;

        while (r - l >= 0) {
                int mid = (r + l) % 2 ? (r + l) / 2 + 1 : (r + l) / 2;
                if (nums[mid] <= target) {
                        if (nums[mid] == target) {
                                return mid;
                        }
                        l = mid;
                } else {
                        r = mid;
                }
        }
        return -1;
}
```
二分搜索的逻辑很简单，我来详细的描述一下

1. 【初始化】定义两个指针left，right，left初始为0,right初始为目标集合的最后一个元素。
2. 【找中项】中项$mid =\lfloor (left + right) \div 2 \rfloor$,我们处理的集合是一个有序集合如果寻找的元素K 在集合中必然存在$K_l \leq K \leq K_r$, 如果不存在K， 则等到 $right < left$ 代表没有找到目标
3. 【比较值】如果$K< K_i$,去4, 如果$K>K_i$ 去5 如果$K = K_i$ 找到。
4. 【调整右】right = mid + 1， 并跳转到2.
5. 【调整左】left = mid - 1， 并跳转到2.

<pre class="mermaid" style="text-align: left;">
graph TD
    A["1.【初始化】"] ==> B["2.【找中项】"]
    B --> C["3.【比较值】"]
    D["4.【调整右】"] ----> B
    E["5.【调整左】"] ----> B
    C --> D
    C --> E
    C -.-> F["SUCCESS"]
    B -.-> G["FAILURE"]

    class C,D blueNode;
    class E,F greenNode
    classDef blueNode fill:#aaaaff,stroke:#0000ff,stroke-width:2px;
    classDef greenNode fill:#aaccff,stroke:#00ffff,stroke-width:2px;
</pre>

结合`my_first_seen_search()` 的代码和二分搜索逻辑来反思错误的思考逻辑。

拿到二分搜索的问题，首先就知道需要通过不断的取中值来获得目标，这样自然需要2个指针来维护一个搜索空间。然后你需要一个中间项的获取逻辑，和判断是否命中target，
单纯只是给左右边界赋值mid会导致在某些情况没有办法缩小空间。

<div markdown="1" style="background-color:#d0e7f9; color:#4d4d4d; padding:10px; border-radius:5px;">
**例子**

* int nums[] = {-1, 0, 3, 5, 9, 12};
* int target = 2;

1. left=0 right=5 mid=2 nums\[2\]=3
2. left=0 right=2 mid=1 nums\[1\]=0
3. left=1 right=2 mid=1 nums\[1\]=0
4. left=1 right=2 mid=1 nums\[1\]=0

</div>

上面的例子就显示了left right指针被被“固定”在一个地方了。首先,我们使用$\lfloor
(left + right) \div 2 \rfloor$ 来计算mid值，二分搜索就是把当前数聚集分成偏大和偏小两种集合，
无论选择哪个集合当前这个mid点都被判断过了所以不应该加入下一次的迭代。

我们期待的表现应该是这样。
<div markdown="1" style="background-color:#d0e7f9; color:#4d4d4d; padding:10px; border-radius:5px;">
* int nums[] = {-1, 0, 3, 5, 9, 12};
* int target = 2;

1. left=0 right=1 mid=2 nums\[2\]=3
2. left=1 right=1 mid=0 nums\[0\]=-1
3. left=2 right=1 mid=1 nums\[1\]=0
</div>


下面给出二分搜索的正确逻辑
```c
int search(int* nums, int numsSize, int target) {
    int l = 0;
    int r = numsSize - 1;

    while (r >= l) {

        int mid = l + (r - l) / 2; // 这里使用 l+（r-l）是为了处理加的溢出
        if (nums[mid] == target) {
            return mid;
        }
        if (nums[mid] < target) {

            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return -1;
}
```

当我们完全了解如何写一个二分搜索之后，我们可以再细分的了解这个算法。为了了解二分搜索我们应该
把这个算法执行当作一个二叉决策树。

这是一个N=16的二叉树
<pre class="mermaid" style="text-align: left;">
graph TD;
    8 --> 4;
    8 --> 12;
    
    4 --> 2;
    4 --> 6;
    12 --> 10;
    12 --> 14;
    
    2 --> 1;
    2 --> 3;
    6 --> 5;
    6 --> 7;
    10 --> 9;
    10 --> 11;
    14 --> 13;
    14 --> 15;
    
    1 --> a["0"];
    1 --> b["1"];
    3 --> c["2"];
    3 --> d["3"];
    5 --> e["4"];
    5 --> f["5"];
    7 --> g["6"];
    7 --> h["7"];
    9 --> i["8"];
    9 --> z["9"];
    11 --> k["11"];
    11 --> l["12"];
    13 --> m["13"];
    13 --> n["14"];
    15 --> o["15"];
    15 --> q["16"];
</pre>

如图你可以很直观发现，这个算法每一次选择都会减少当前集合K的一半，也就是N次选择，就会有
$ K / 2^N $数据被排除。当成功选择到target number时候$K / 2^N = 1$ 所以 $N=log_2 K$ 所以这时候
时间复杂度是 $\mathcal{O}(log K)$

二分查找有他的局限性，但二分查找的分而治之的逻辑值得借鉴，类似的还有[斐波那契](https://en.wikipedia.org/wiki/Fibonacci_sequence)查找和[插值查找](https://en.wikipedia.org/wiki/Interpolation_search)。之后可能会
补充说明。


## 二分搜索的两种变种 搜索左边界和搜索右边界
上述的二分算法是没法处理类似{1,2,2,2,2,2,5,6}寻找“2”，这种类型的数据。
```c
int search_l_most(int *nums, int numsSize, int target)
{
        int l = 0;
        int r = numsSize - 1;
        int count = 0;
        while (r - l >= 0) {
                int mid = (r + l) / 2;
                if (nums[mid] < target) { // 这里就是右边的部分
                        l = mid + 1;
                } else if (nums[mid] == target) { // 这里是处理hit target的部分
                        if (mid == 0) {
                                return mid;
                        }
                        int pre_mid = nums[mid - 1];
                        if (pre_mid == target) {
                                r = mid - 1;
                        } else if (pre_mid < target) {
                                return mid;
                        }
                } else if (nums[mid] > target) { // 这里处理左边的部分
                        r = mid - 1;
                }
        }
        return -1;
}
```
同样的逻辑你可以写出最右边的那个位置的函数。
```c
int search_r_most(int *nums, int numsSize, int target)
{
        int l = 0;
        int r = numsSize - 1;
        int count = 0;
        while (r - l >= 0) {
                int mid = (r + l) / 2;
                if (nums[mid] < target) {
                        l = mid + 1;
                } else if (nums[mid] == target) {
                        int pre_mid = nums[mid + 1];
                        if (pre_mid == target) {
                                l = mid + 1;
                        } else if (pre_mid > target) {
                                return mid;
                        }
                } else if (nums[mid] > target) {
                        r = mid - 1;
                }
        }
        return -1;
}
```
看完二叉查找之后我们继续对于数组的另一个处理技巧前缀和数组

## 前缀和数组
## [leetcode 303 Range Sum Query-Immutable](https://leetcode.com/problems/range-sum-query-immutable/)

**前缀和**没有什么理解上的难度，就是一组数据，计算他们前N个元素的和并记录下来。
```lisp
(define sum_lst
  (lambda (lat)
    (cond
      ((null? lat) 0)
      (else
         (+ (car lat) (sum_lst (cdr lat)))))))
```


下面给出303的答案
```c
typedef struct {
        int *sumarray;
        int size;
} NumArray;


NumArray *numArrayCreate(int *nums, int numsSize)
{
        int size = sizeof(int) * (numsSize + 1);
        NumArray *a = malloc(size);
        if (!a)
                return NULL;
        a->sumarray = calloc(sizeof(int), numsSize + 1);

        for (int i = 1; i < numsSize+1; i++) {
                a->sumarray[i] = nums[i-1] + a->sumarray[i - 1];
        }
        return a;
}

int numArraySumRange(NumArray *obj, int left, int right)
{
        int res = obj->sumarray[right+1] - obj->sumarray[left];
        return res;
}

void numArrayFree(NumArray *obj)
{
        if (obj && obj->sumarray) {
                free(obj->sumarray);
        }
        if (obj) {
                free(obj);
        }
}
```
可以构造前缀和的原因是因为加法具有累加性，这种累加性可以构造一种递归结构，从而通过记录上次的值来减少重复的遍历数组。

$prefix[i] = arr[0] + arr[1]+ ... + arr[i]$

$prefix[i] = prefix[i-1] + arr[i]$

这样的构造方式我们只需要从左往右遍历一次数组，就可以算出每一个元素的前缀和了，这时候时间复杂度是$\mathcal{O}(N)$
而区间的和$sum(L,R) = prefix[R] - prefix[L-1]$
推导很简单带入上面的算式就可。这样求解区间的总和的时间复杂度是$\mathcal{O}(1)$。

## 前缀和的二维拓展
## [leetcode 304 Range Sum Query 2D-Immutable](https://leetcode.com/problems/range-sum-query-2d-immutable/description/)
二维拓展的逻辑和一维类似，这里唯一需要关心的是当预处理矩阵的时候直接遍历的复杂度是$\mathcal{O}(N)$
而前缀和的预处理$\mathcal{O}(N)$和查询$\mathcal{O}(1)$，如果把预处理耗时也算上单次查询前缀和不一定是一个更好的选择，但是可以肯定的是，大量查询的情况下前缀和依然非常值的使用。


这里可以学习的就是通过预先构造数据结构（preprocessed data）来避免后期重复计算类似的预处理数据结构还有差分数组，树状数组（fenwick tree），线段树（segment tree）

## 差分数组
## [leetcode 1109 corporate flight bookings](https://leetcode.com/problems/corporate-flight-bookings/)

这个题目很容易就能想到一个时间复杂度为 $\mathcal{O}(N \times (end-start))$ 的算法，如下。
```c
int *corpFlightBookings(int **bookings,
                        int bookingsSize,
                        int *bookingsColSize,
                        int n,
                        int *returnSize)
{
        int *res = calloc(sizeof(int), (*returnSize));
        if (!res) {
                return NULL;
        }
        for (int i = 0; i < bookingsSize; i += 1) {
                int pos = i;
                int *entry = *(bookings + pos);
                int start = entry[0];
                int end = entry[1];
                int value = entry[2];

                for (int j = start; j <= end; j++) {
                        if (res[j - 1] == 0) {
                                res[j - 1] = value;
                        } else {
                                res[j - 1] += value;
                        }
                }
        }
        return res;
}


int main()
{
        int entry1[3] = {1, 2, 10};
        int entry2[3] = {2, 3, 20};
        int entry3[3] = {2, 5, 25};

        int (*bookings[])[3] = { &entry1, &entry2, &entry3 };
        int n = 5;
        int m = 3;
        int *csize = &m;
        int *rsize = &n;
        int *res = corpFlightBookings((int **) bookings, ARRAY_SIZE(bookings),
                                      csize, n, rsize);
        for (int i = 0; i < n; i++) {
                printf("%d ", res[i]);
        }
        printf("\n");
}
```
如果构造一个差分数组就可以在$\mathcal{O}(1)$时间内处理了。

差分数组是前缀和的逆运算, 差分数组记录了相邻元素的变化，通过对D进行前缀和累加，就可以恢复原始数组A

$diff[i] = arr[i] - arr[i-1]$ 

$arr[i] = arr[i-1] + diff[i]$

考虑到差分数组需要前缀和才能恢复原来数据，所以差分数组分为两个时间复杂度，更新$\mathcal{O}(1)$
还原 $\mathcal{O}(N)$ 但是直接修改是 $\mathcal{O}(N \times M)$, 所以差分数组在计算区域位置的增量更新有效率的。

为什么只需要改两头而不需要处理中间的情况，其实关键在于还原的操作，还原操作是前一项和差分数组的和，所以只要
改第一个就会一直影响到后面，这也说明了为什么需要在right+1处还原增量。

我随便给一个演示
```c
# 原始数组
A = [2, 3, 5, 7, 11]
# 差分数组
D = [2, 1, 2, 2, 4, 0]  # 额外加一个 0 以便处理边界

# 假设我们要对区间 [2, 4] (即 A[2] 到 A[4]) 进行 +3 操作
L, R, x = 2, 4, 3
D[L] += x  # D[2] += 3
D[R+1] -= x  # D[5] -= 3

# 通过前缀和恢复修改后的 A
for i in range(1, len(A)):
    A[i] = A[i-1] + D[i]

```
## 后

这周处理了滑动窗口，二分搜索和一些数据预处理的技巧。下周是树的相关

Fri Mar  7 05:51:30 PM CST 2025
