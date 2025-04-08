---
layout: post
title: "[A]RTS   当我们在谈论算法的时候我们在谈论什么"
date: 2025-02-23
categories: []
tags: [ARTS]
---

## 计算机算法 VS 数学算法

首先我们需要分清楚什么是**计算机算法**什么是**数学算法**。简单来说[数学算法](https://en.wikipedia.org/wiki/Numerical_analysis)是把数论的证明或者推论使用程序的方式展现，比如说RAS加密算法。而计算机算法更像是一种“枚举”，比如说算出第k个素数是什么？

这两者有微妙的不同再于，数学算法偏向于找到一个通用的解，计算机算法偏向于解决一个问题，是否通用或者形式上合理不太重要。

如果你和我一样数学不好，只是希望使用算法找个工作。我们就一起看看计算机算法是如何“枚举”的。

## 枚举

枚举也可以叫穷举，就是一个一个数的意思。这件事看上去很简单，但其实要做到完美需要**恰好**数完所有情况
不能多不能少。“恰好”并不容易，我们可以从怎么枚举开始，到如何优化枚举。

大多数算法会围绕着这两件事情进行，有些问题容易写出枚举但是会超出时间或者空间，有些问题很难写出枚举手段找到枚举手段就是关键。

## 找到枚举
先说一下“递归问题”代表什么？

递归问题是一种存在重复且可以分解的子问题的一种问题，简单来说假设这个问题的解是一个函数那么这个函数
可以应用在这个问题的各个子问题上。

递归类问题可以来演示什么是“找到枚举”。

## 动态规划（Dynamic Programming）
一种典型的递归类问题。大部分使用动态规划的问题是求极值或者是计数。<br/>
如果一个问题的最优解可以由它的子问题的最优解构成。那么这个问题就具有“最优子结构”，这种性质是动态规划可以
通过递归来拆分问题的关键。

简单来看，动态规划通过一个可以递归的函数，把问题划分为多个子问题。我们就得到了子问题的集合，我们只需要遍历这些
子问题，就可以找到对应情况的值，从而发现“极值”或者给各个值计数。

总的来说可以使用动态规划的问题有4个要点：
1. 最优递归子结构 （最优子结构是可以使用DP的关键）
2. 重叠子问题     （重叠子问题会重复遍历同一个问题，这会拖慢效率，所以要避免）
3. 状态定义与转移方程 
4. 边界条件

## 斐波那契数列
我们来使用斐波那契数列来感受动态规划。<br/>
首先，斐波那契数列的递推公式是：$ F(n) = F(n-1) + F(n-2), F(0) = 0, F(1) = 1.$

来分析一下斐波那契数列
1. 存在最优子结构。每一项都是前两项的和
2. 重叠子问题。    求第N项的时候可能重复计算前两项。

<pre class="mermaid" style="text-align: center;">
graph TD
    A["f(10)"] --> B["f(9)"]
    A --> C["f(8)"]
    B --> D["f(8)"]
    B --> E["f(7)"]
    C --> F["f(7)"]
    C --> G["f(6)"]

    class C,D blueNode;
    class E,F greenNode
    classDef blueNode fill:#aaaaff,stroke:#0000ff,stroke-width:2px;
    classDef greenNode fill:#aaccff,stroke:#00ffff,stroke-width:2px;
</pre>
算一下时间复杂度，也就是$\mathcal{O}()$,时间复杂度是单个子问题的处理时间乘以子问题个数。

* 算第3项子问题有两个需要计算$f(1)$和$f(2)$.
* 算第4项子问题有四个需要计算$f(3)-f(2)$和$f(2)-f(1)$
* 算第5项子问题有六个需要计算$f(4)-f(3)$和$f(3)-f(2)$和$f(2)-f(1)$
* 算第6项子问题有八个需要计算$f(5)-f(4)$和$f(4)-f(3)$和$f(3)-f(2)$和$f(2)-f(1)$
* 算第n项子问题有$\mathcal{O}(2^n)$ 

因为每个子问题都是两项的加法所以单个子问题处理时间是$\mathcal{O}(1)$.

$\mathcal{O}(2^n) \times \mathcal{O}(1) = \mathcal{O}(2^n)$ 

计算某一个项的时间复杂度是**指数级别**，效率很差。原因是重复计算，类似图中其中**第7**和**第8**项都重复计算了
我也标记了相同的颜色。

如下是2的指数级别的算法
```
int fib(int n) {
  if (n == 0 || n == 1) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}
```

时间消耗曲线如下

<pre class="mermaid" style="text-align: center;">
xychart-beta
    title "Fib(n) in O(2^n)"
    x-axis "number" [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    y-axis "time cost (in ms)" 0.001 --> 0.081
    line [0.001,0.000,0.000,0.001,0.001,0.000,0.001,0.001,0.001,0.001,0.002,0.002,0.003,0.005,0.008,0.012,0.020,0.032,0.050,0.081]
</pre>


## 自顶向下 - 备忘录

随之而来的就是引入**备忘录（Memoization）**来解决DP的特征之一**重叠子问题**。这也是**以时间换空间**的体现。

备忘录的引入逻辑很简单类似考试的小抄一样，它可以让你不必再计算一遍同样的答案只需要查找对应的题号就会得到对应的答案。
使用这种逻辑加速运算在历史上也比比皆是，1614年John Napier发明[对数表](https://blog.csdn.net/ComputerInBook/article/details/129696172)；intel在CPU中使用[TLB](https://en.wikipedia.org/wiki/Translation_lookaside_buffer)加速虚拟地址转换等等。
```c
int fib_memo(int n, long *memo)
{
        if (n == 2 || n == 1) {
                return n;
        }
        if (memo[n - 1] && memo[n - 2]) {
                long res = memo[n - 1] + memo[n - 2];
                memo[n] = res;
                return res;
        } else {
                return fib_memo(n - 2, memo) + fib_memo(n - 1, memo);
        }
}
```

<pre class="mermaid" style="text-align: center;">
xychart-beta
    title "Fib(n) in O(n)"
    x-axis "number" [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    y-axis "time cost (in ms)" 0.001 --> 0.049
    line [0.049,0.003,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.000,0.001,0.001,0.001,0.001,0.001,0.001]
</pre>
你可能好奇为什么第一个数花这么久时间，这可能需要谈到计算机内存的知识，之后如果我有写文章会连接起来的。


这样一来使用了Memo的计算变少了
算一下时间复杂度

* 算第5项需要f4-f3和f3-f2和f2-f1,因为使用了memo所以只需要计算一次f1、f2、f3、f4、f5就可以了
* 算第N项也就是$\mathcal{O}(n)$

子问题的处理时间因为没有递归和循环所以也是$\mathcal{O}(1)$

$\mathcal{O}(n) \times \mathcal{O}(1) = \mathcal{O}(n)$ 

目前为值这就是DP的**自顶向下**的思路，也就是把大问题分解成小问题从大问题出发来分解规模的方式。

## 自底向上 - DP table

接下来我们来处理**自底向上**的思路，bottom-up的思路就是从基本情况向复杂情况推论的思路，使用
FP举例就是当F1=1,F2=1,那么按照公式F3=2。一步一步的填出一张表这个表一般叫他**DP
table**。
```

long *memo = malloc(MAX_NUM * sizeof(long));

long fib_bottomup(int n, long *memo)
{
        for (int i = 1; i <= n; i++) {
                if (i == 0 || i == 1) {
                        memo[i] = i;
                } else {
                        memo[i] = memo[i - 2] + memo[i - 1];
                }
        }
        return memo[n];
}
```
<pre class="mermaid" style="text-align: center;">
xychart-beta
    title "Fib(n) in bottom-up"
    x-axis "number" [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    y-axis "time cost (in ms)" 0.001 --> 0.049
    line [0.040,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.000,0.001,0.001,0.001,0.000,0.001,0.001,0.001,0.001,0.001,0.001]
</pre>

这里会引入一个概念**状态转移方程**。这个词语相信有些人在**FSM有限状态机**里也听过，这两者虽然都描述着
从一个状态到另一个状态的转移，但DP是通过递归关系从子问题和之前状态推算出现在子问题的解。而FSM是通过
外部输入或者上一个状态，转移到另一个状态以用来做过程控制。

FP的状态转移方程我在上面给过了。
**状态转移**
把每一个项当作一个状态，这个状态是通过别的状态和输入参数组合来得出新状态。

仔细来看从base case出发一个一个填入数据这个过程和之前自上而下使用memo一样。只需要计算N个状态就好了。
所以bottom-up的思路的时间复杂度也是 $\mathcal{O}(n)$。

进一步你可以通过优化dptable的大小来优化这个算法
```
long *small_memo = malloc(2 * sizeof(long));
long fib_bottomup_opt(int n, long *memo)
{
        long res = 0;

        for (int i = 1; i <= n; i++) {
                if (i == 1) {
                        memo[i] = i;
                        res = 1;
                } else {
                        res = memo[1] + memo[0];
                        memo[0] = memo[1];
                        memo[1] = res;
                }
        }
        return res;
}
```
<pre class="mermaid" style="text-align: center;">
xychart-beta
    title "Fib(n) in bottom-up with space optimization"
    x-axis "number" [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    y-axis "time cost (in ms)" 0.000 --> 0.049
    line [0.034,0.001,0.000,0.000,0.001,0.001,0.001,0.000,0.001,0.000,0.001,0.000,0.001,0.000,0.001,0.001,0.001,0.001,0.000]
</pre>



我们首先想到的是一个长度为N的数组来充当dp table，其实计算第k项只需要知道前两项的值就可以了 于是空间复杂度就可以从

--- 

由于FP没有极值的需求，所以没有最优子结构的问题。下面用[leetcode 322](https://leetcode.com/problems/coin-change/description/)来作为例子谈论
最优子结构。

## 零钱兑换

You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
You may assume that you have an infinite number of each kind of coin.

***最优子结构***，我们可以想像一下，最优子结构这个概念是什么？
* 首先是最优的，也就是这个概念在寻找一个极值。
* 其次是子结构，也就是这个结构是蕴含在每一次状态转换中的。

上文说到FP是没有最优子结构的，但是FP的确存在子结构，也就是 

$ Fn=Fn-1 + Fn-2；n > 2 $

这个也是上文里提到的状态转移方程。大概可以如此断言，**所有的DP问题是可以用状态转移方程来描述其子结构**。

我这里有一个没有证实的猜想:

> 所有DP问题都有唯一的子问题结构，最优子结构的意思并不是有众多子结构，选择了最优的子结构
而是这个子结构是解决极值问题.

我们来谈论一下**零钱兑换**这个问题。
给定一个总数x和有可能组成其部分的集合s。

我们想要的**极限值**是**最小的硬币类型使用量**。
我们试着看看能不能把这个问题的**规模缩小**试着看看能不能找到基本情况。

假设总数是18元，可用的零钱集合是｛2，3，5｝<br/> 
使用分解18元的策略（自顶向下）{这是贪心逻辑}
1. 18元 ｛｝
2. 13元 ｛5｝
3. 08元  ｛5，5｝
4. 03元  ｛5，5，5｝
5. 00元  ｛5，5，5，3｝

---

每一次从硬币堆中挑选一枚硬币，就会获得新的状态。{这是动态规划逻辑}

例如：
* 18元的最优数量就相当于
* 18-2=16
* 18-3=15
* 18-5=13
* 这三种情况中最优数量+1

这样就会构成一个n叉树,n是零钱种类的数量。

<pre class="mermaid" style="text-align: center;">
graph TD
    A["18"] --> B["16"]
    A --> C["15"]
    A --> D["13"]
    B --> E["14"]
    B --> F["13"]
    B --> G["11"]
    C --> H["..."]
    D --> I["11"]
    D --> J["10"]
    D --> K["8"]

    class F,D blueNode;
    class G,I greenNode
    classDef blueNode fill:#aaaaff,stroke:#0000ff,stroke-width:2px;
    classDef greenNode fill:#aaccff,stroke:#00ffff,stroke-width:2px;
</pre>


<div style="background-color:#d0e7f9; color:#4d4d4d; padding:10px; border-radius:5px;">
这里使用贪心算法的逻辑来看，子问题不独立 
<br/>
F(n) = F(n-1) $\cap$｛当前最优的一枚硬币类型｝；n >= 1
</div>
<div style="padding:10px;"></div>

<div style="background-color:#d0e7f9; color:#4d4d4d; padding:10px; border-radius:5px;">
但是使用动态规划的逻辑来看，子问题互相独立
<br/>
F(n) = min(F(n-k\[...\]) ) + 1;
k就是零钱的种类数量
</div>

需要感受一下这里的区别。

有了例子的感受，我们再来讨论最优子问题。怎么发现子问题是解决DP问题的关键，DP子问题有一个很关键
的性质，是DP**子问题之间是相互独立的**。

## 子问题独立性
我们以FB的计算为例子，你可能会想FB的每一项都是前两项的和（除了第一第二项），这样说明他们每一项
都**依赖**别的项的值，这样也算子问题之间独立吗？

当我们在谈论独立性时，我们在谈论求解一个子问题时不依赖于其他子问题的求解过程。而不是不依赖其他子问题
的求解结果，以FB为例，每一次你计算一个项的时候他的前2项都是固定的值（这个值可能是在memo中，可以在之后递归解答）

我们在通过加法把子问题组合在一起的时候子问题是对于这个组合独立的。

## 子问题不独立
比如N皇后问题。虽然我依然可以把问题划分为“每行放一个皇后”这个子问题，但是由于皇后的规则导致之前的皇后位置是
会影响现在子问题的选择的，这就是子问题之间互相影响的例子。

## Code
以下是使用memo的DP和没有使用memo的DP

```c
// has memo
#include <stdlib.h>
#define MIN(a, b)                                                              \
  ({                                                                           \
    __typeof__(a) _a = (a);                                                    \
    __typeof__(b) _b = (b);                                                    \
    _a < _b ? _a : _b;                                                         \
  })
int coin_change_memo(int *coins,int coinsSize, int amount, int *memo)
{
        if (amount == 0)
                return 0;
        if (amount < 0)
                return -1;
        int res = INT_MAX;
        int sub_problem = 0;
        for (int i = 0; i < coinsSize; i++) {
                int pos = amount - coins[i];
                if (pos < 0) {
                        continue;
                } else {
                        if (memo[amount - coins[i]]) {
                                sub_problem = memo[amount - coins[i]];
                        } else {
                                sub_problem = coin_change_memo(
                                    coins,coinsSize, amount - coins[i], memo);
                                memo[amount - coins[i]] = sub_problem;
                        }
                        if (sub_problem == -1)
                                continue;
                }
                res = MIN(res, 1 + sub_problem);
        }
        return res == INT_MAX ? -1 : res;
}
int coinChange(int* coins, int coinsSize, int amount) {
        int *memo = calloc(amount, sizeof(int));
        int res = coin_change_memo(coins, coinsSize, amount, memo);
        return res;
}
```

```c
//coin的C代码无memo
int coin_change(struct coins coins, int amount)
{
        if (amount == 0)
                return 0;
        if (amount < 0)
                return -1;
        int res = INT_MAX;

        for (int i = 0; i < coins.size; i++) {
                int sub_problem = coin_change(coins, amount - coins.sets[i]);
                if (sub_problem == -1)
                        continue;
                res = MIN(res, 1 + sub_problem);
        }
        return res == INT_MAX ? -1 : res;
}
```


```c
int coin_change_memo_bottomup(int *coins,int coinsSize, int amount, int *memo)
{
        if (amount == 0)
                return 0;
        if (amount < 0)
                return -1;

        int res = INT_MAX;
        int out;
        for (int sub_amount = 1; sub_amount <= amount; sub_amount++) {
                for (int j = 0; j < coinsSize; j++) {
                        int index = sub_amount - coins[j];
                        if (index < 0)
                                continue;
                        int sub_problem = memo[index];
                        if(sub_problem==-1) continue;
                        res = MIN(res, 1 + sub_problem);
                }
                res = (res == INT_MAX ? -1 : res);
                memo[sub_amount] = res;
                res = INT_MAX;
        }
        out = memo[amount];
        return out;
}


int coinChange(int* coins, int coinsSize, int amount) {
        int *memo = calloc(amount+1, sizeof(int));
        //int res = coin_change_memo(coins, coinsSize, amount, memo);
        int res = coin_change_memo_bottomup(coins, coinsSize, amount, memo);

        return res;
}

```
## 后
DP的大部分概念已经在本文给出了，这个算是比较容易接受的递归逻辑。本文有一些衍生型问题，之后会专门写文详细说明。

