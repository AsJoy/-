##markdown 语法熟悉

##### 段落
常用命令常用命令常用命令常用命令常用命令常用命令常用命令常用命令常用命令常用命令常用命令常用命令常用命令常用命令常用命令常用命令常用命令常用命令常用命令常用命令常用命令常用命令常用命令常用命令常用命令常用命令常用命令常用命令常用命令常用命   
常用命令常用命令常用命令常用命令常用命令常用命令常用命令常用命令常用命令常用命令常用命令常用命令常用命令常用命令常用命令常用命令常用命令常用命令常用命令常用命令常用命令常用命令常用命令常用命令常用命令常用命令常用命令常用命令常用命令常用命令

##### 引用

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
>
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
id sem consectetuer libero luctus adipiscing.
>

##### 引用整合

> ###整合标题
>
 
> 1. 整合列表  
> 2. 整合列表   
> 3. 整合列表   
>  

##### 引用整合code


>     return shell_exec("echo $input | $markdown_script");


######无序列表

+   Red
+   Green
+   Blue

- 红色
- 白色
- 绿色

> hello


*   Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
viverra nec, fringilla in, laoreet vitae, risus.
*   Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
Suspendisse id sem consectetuer libero luctus adipiscing.

#####无需列表下必须一个4个空格 过制表符
* hehehaha   
    hahaha   
* haha

* haha
* 


#####代码区块

    <html>
     <body>
       <div>hello world</div>
     </body>
     
    </html>
    
##### 分割线
> hello world  


------------------------------
* * *
*************************

> 上面都是分割线
>



Test Markdown document
======================

Text
----

Here is a paragraph with bold text. **This is some bold text.** Here is a
paragraph with bold text. __This is also some bold text.__

Here is another one with italic text. *This is some italic text.* Here is
another one with italic text. _This is some italic text._

Here is another one with struckout text. ~~This is some struckout text.~~


Links
-----

Autolink: <http://example.com>

Link: [Example](http://example.com)

Reference style [link][1].

[1]: http://example.com  "Example"


Images
------

Image: ![My image](http://www.foo.bar/image.png)

Headers
-------

# First level title
## Second level title
### Third level title
#### Fourth level title
##### Fifth level title
###### Sixth level title

### Title with [link](http://localhost)
### Title with ![image](http://localhost)

Code
----

```
This
  is
    code
      fence
```

Inline `code span in a` paragraph.

This is a code block:

    /**
     * Sorts the specified array into ascending numerical order.
     *
     * <p>Implementation note: The sorting algorithm is a Dual-Pivot Quicksort
     * by Vladimir Yaroslavskiy, Jon Bentley, and Joshua Bloch. This algorithm
     * offers O(n log(n)) performance on many data sets that cause other
     * quicksorts to degrade to quadratic performance, and is typically
     * faster than traditional (one-pivot) Quicksort implementations.
     *
     * @param a the array to be sorted
     */
    public static void sort(byte[] a) {
        DualPivotQuicksort.sort(a);
    }

Quotes
------

> This is the first level of quoting.
>
> > This is nested blockquote.
>
> Back to the first level.


> A list within a blockquote:
>
> *	asterisk 1
> *	asterisk 2
> *	asterisk 3


> Formatting within a blockquote:
>
> ### header
> Link: [Example](http://example.com)



Html
-------

This is inline <span>html</html>.
And this is an html block.

<table>
  <tr>
    <th>Column 1</th>
    <th>Column 2</th>
  </tr>
  <tr>
    <td>Row 1 Cell 1</td>
    <td>Row 1 Cell 2</td>
  </tr>
  <tr>
    <td>Row 2 Cell 1</td>
    <td>Row 2 Cell 2</td>
  </tr>
</table>

Horizontal rules
----------------

---

___


***


Lists
-----

Unordered list:

*	asterisk 1
*	asterisk 2
*	asterisk 3


Ordered list:

1.	First
2.	Second
3.	Third


Mixed:

1. First
2. Second:
	* Fee
	* Fie
	* Foe
3. Third


Tables:

| Header 1 | Header 2 |
| -------- | -------- |
| Data 1   | Data 2   |
