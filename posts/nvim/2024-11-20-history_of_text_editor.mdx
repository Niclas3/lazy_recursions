---
title: 新造的轮子
updated: Wed Nov 20 17:25:11 CST 2024
categories : [program, nvim]
---

# 新造的轮子? neovim!
这是一系列谈论neovim的文章的第一章，我们在谈论它之前我想先梳理一下文本编辑器的历史。
从1960年代到现在，整个编辑器大概可以划分为四个时代。

## 起源时代 (1960s-1970s)
文本编辑器的历史和计算机历史重合，当早期的计算机女工们不在依赖打孔卡输入和计
算机交互时，随之而来就是与终端交互的的文本编译器的元年---1965年，一种 行编辑器
ED 出现了。1960s-70s的计算机使用者大多数是学者或者军事人员和大型企业的财务计算人
员等。当时人和计算机的交互从打孔卡(punched paper tape)慢慢过渡到交互式终端(teletype，tty)
在没有CRT显示器的时期所有的交互都是打印在纸上的。当时计算机设备比如PDP-11的早期型
号只有几KB的内存，由于内存限制没法把所有文本都载入内存，所以当时的文本编辑器是
**行编辑**(line-oriented) 或者是**面向字符编辑**(character-oriented)。  

![PDP-1](https://upload.wikimedia.org/wikipedia/commons/f/f0/DEC_PDP-1_Demo_Lab_at_Mountain_View%27s_Computer_History_Museum.jpg)
> 上图就是PDP-1的样子，桌面上类似打字机的设备就是teletype  

<div style="background-color:#d0e7f9; color:#4d4d4d; padding:10px; border-radius:5px;">
这里我想到一个题外话60年代也是UNIX的出现的年代，
UNIX比较有特点的是它以字符串作为程序间交互的介质而不是数据结构
也许也受限于当时的内存大小。
</div>

### [TECO](https://en.wikipedia.org/wiki/TECO_(text_editor))
1962年，TECO(Text Editor & Corrector)是在PDP-1机器上**面向字符(character-oriented)**
的*编辑器*也是一种*编程语言*。TECO提供了**Macro**以提供对文本的搜索和修改，这个功能也被
Emacs吸收并发扬光大。同时TECO也提出了一种哲学[YAFIYGI](http://catb.org/jargon/html/Y/YAFIYGI.html)(You Asked For It, You Got It),
这个理念和编辑器之后[WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG)(What You See Is What You Get)有明显不同，
我也许会在之后有关UX的文章中讨论WYSIWYG。
YAFIYGI 反应了早期编辑器的设计哲学
* 用户输入的每一个命令都严格执行，不会提供保护和帮助
* 编辑器不会纠正用户的错误
这种设计哲学强调了用户对操作负责。强调功能的同时也兼具了效率。

<div style="background-color:#d0e7f9; color:#4d4d4d; padding:10px; border-radius:5px;">
一定程度上TECO这个哲学和,C语言相信程序员的C代码哲学相似，这种哲学是有意为之还是
条件所迫呢？
</div>

### [QED](https://en.wikipedia.org/wiki/QED_(text_editor))
1965-1966年，在加州伯克利大学开发的Berkeley Timesharing System上由Butler Lampson 、
L. Peter Deutsch和Dana Angluin三人一起开发的**行编辑器**QED（quick editor）即使QED
当时只是为了电传打字机开发并没有考虑CRT显示的场景也大幅提升了当时的人机交互体验。
QED也对后来的文本编辑器例如 *sed* 、*ex* 、*awk* 、*perl*有着影响。

## 前现代编辑器时代 (1970s-1980s)
随着70年代,PDP和IBM360的普及以及视频终端对电传打字机的替代，更多机构可以负担的起
交互式计算设备，分时系统和UNIX也给多个用户共享计算机资源提供了支持，也促进了交互
式工具的发展，慢慢的面向行编辑的编辑器就不能满足对完整文件操作的需求了

![IBM S360](https://upload.wikimedia.org/wikipedia/commons/a/af/DM_IBM_S360.jpg)
> 上图就是大型机时代开山之作**IBM System/360 Model 20**，IBM当时项目负责人Frederick P. Brooks,
> Jr.根据此项目的开发经验写出了[《人月神话：软件项目管理之道》](https://en.wikipedia.org/wiki/The_Mythical_Man-Month)

### [Vi](https://en.wikipedia.org/wiki/Vi_(text_editor))和[Ex](https://en.wikipedia.org/wiki/Ex_(text_editor))
1976年UC Berkeley的学生**Bill Joy**，在修改当时UNIX系统上的Pascal编译器发现ed编辑器实
在不好用。没多久他就和同学Chuck Haley写了第一个编辑器*en*，后来他们扩展了这个编辑器
开发出了**ex**。77年的10月份，Bill joy给ex添加了全屏模式(full-screen visual mode)这就
是我们熟悉的 **vi** 由此可知ex和vi这两个编辑器是共享一部分代码的，vi就是一个拥有全屏显
示功能的 ex，而**vi(VIsual mode)**的名字就是ex的一个全屏幕显示模式的前两个字母。1979
年因为大多是人只使用ex的Vi模式,Bill Joy就给ex的Vi模式创建一个快捷方式，这就是后世
知道的Vi的起源了。

![ADM-3A](https://upload.wikimedia.org/wikipedia/commons/7/77/Adm3aimage.jpg)
> 上图就是Bill 当时开发Vi的时候使用的设备 还是可以辨认出hjkl上是有方向键的

由于Bill Joy使用[ADM-3A](https://en.wikipedia.org/wiki/ADM-3A)开发Vi，所以Vi的按键映射和ADM-3A的键盘一致
这个时期的Vi只有基本的移动命令(hjkl)操作命令和行范围操作

### [sed](https://en.wikipedia.org/wiki/Sed)
作为一个最早支持正则表达式的文字处理软件,sed继承了ed和qed的交互模式
<div style="background-color:#d0e7f9; color:#4d4d4d; padding:10px; border-radius:5px;">
我这里想写一些注脚，sed、awk和perl作为常用的字处理程序直到现在都被运维们长时间使用
</div>

## 黄金时代 (1980s-1990s)
1980s-1990s这个时期是计算机技术的黄金时代，所有现在使用的基础技术都是在这个时代奠基
然后发展的。

![IBM Personal Computer](https://upload.wikimedia.org/wikipedia/commons/a/a6/IBM_PC-IMG_7271_%28transparent%29.png)

> 上图就是IBM PC搭载了Intel的畅销CPU intel8088 @ 4.77MHz 最高可扩展出640KB的内存
> 空间,也搭载了一个CGA用于显示图像，当时售价US$1,565

硬件上,81年IBM推出了标志着个人计算机时代的**IBM PC**，著名的动画《[命运石之门](https://en.wikipedia.org/wiki/Steins;Gate)》
中的未来人寻找的就是这个台机器。intel的x86系列也不断的在提升CPU的性能，硬盘容量
也从MB增长到了GB。随着性能的升高硬件成本并没有随之升高而是降低。

软件上，1983年由于**Richard stallman** [GNU](https://www.gnu.org/)项目的发起，开源软件和自由软件运动被推动,
UNIX也在各个企业和科研单位占据主流平台地位。因为个人电脑的普及1981年专门针对个人
电脑的操作系统MS-Dos推出, 1991年linux内核也首次发布。

由于硬件和软件上的井喷式的发展，人们对于文本编辑器在编程辅助需求进一步增加。针对当时
的需求，可扩展变成当时编辑器的主要需求。随之而来的就是两个编辑器或者两个宗教

> [Editor_war](https://en.wikipedia.org/wiki/Editor_war)

### [GNU Emacs](https://en.wikipedia.org/wiki/GNU_Emacs)
Emacs 是1976年由**David A.Moon** 和**Guy L.Steele jr**编写的以文本宏为主的编辑器，文本宏
的灵感来源于上文在元初时代提到的TECO编辑器，Emacs也是(Editing MACros)的缩写。
Emacs支持一种Lisp的方言Emacs lisp用于其插件的编写。

### [Vim](https://en.wikipedia.org/wiki/Vim_(text_editor))
Vim是1991年由**Bram Moolenaar**发布的一款高度可配置的文本编辑器。由于当时自由软件风潮
，Vim同时也是一个Charityware，从发布之初Bram Moolenaar就鼓励用户捐款给ICCF基金会
以资助乌干达儿童,而Vim也开创了charityware这个软件分发模式。

#### Vim：爸爸我是怎么出生的？
Bram moolenaar是一个荷兰人，90年代的时候在一家印刷公司上班，当时他买了一台[Amiga](https://en.wikipedia.org/wiki/Amiga) 
电脑以 {这里加一个amiga的图片}便学习UNIX,当时在Amiga上是没有好用的Vi，Bram
moolenaar 就在已经有的软件Stevie的基础上准备复刻Vi, 所以最开始Vim是Vi IMitation
的简称，直到1992年Vim 1.22版本之后Vim正式移植到UNIX后改名为我们熟知的Vi IMproved。
就这样Bram moolenaar参与了Vim从1991年发布第一版本到2023年的Vim8.0的开发维护工作直
到他因病去世。

![amiga](https://upload.wikimedia.org/wikipedia/commons/c/c3/Amiga500_system.jpg)
> 当时bram 使用的个人电脑

<div style="background-color:#d0e7f9; color:#4d4d4d; padding:10px; border-radius:5px;">
就像Vim的名字一样(Vi IMproved)Vim是我们刚刚提到的bill joy开发的Vi的增强版。主要
增加了10个features <br/>

1. 多级撤销   2. 文本对象 <br/>
3. 多窗口     4. 多缓冲区 <br/>
5. 语法高亮   6. Visual mode <br/>
7. 持久性撤销 8. 插件系统 <br/>
9. 扩展了命令 10. 支持鼠标 <br/>

关于Vim的功能都会单独文章介绍
</div>

## 现代编辑器时代 (2000s-至今)
千禧年后的时代由于GUI和Web的普及，基于现代图形界面的文本编辑器占据了主流地位。对于
文本编辑器的基本需求已经在90年代这10年完成了奠基。之后的软件都是选择某些feature特化
某些能力。你在这个时代看到的新编辑器一定有Vim或者Emacs的影子。
*sublime Text 2008* , *atom 2015*, *VS Code 2015*

## 参考资料
[A History of UNIX before Berkeley: UNIX Evolution: 1975-1984](doc.cat-v.org/unix/unix-before-berkeley)  
[Understanding the Origins and the Evolution of Vi & Vim](https://pikuma.com/blog/origins-of-vim-text-editor)  

---

## 后

一部编辑器的历史就是计算机的历史也是开发者的历史，希望之后也可以继续这个系列

Thu Feb 13 05:49:58 PM CST 2025


