## CSS背景  
- 设置背景颜色  
  background-color : #eeeeee; 

- 设置背景图片  
  background-image : url( 'back.gif' ); 

- 水平或者垂直平铺  
  background-image : url( 'back.png' );
  backgroud-repeat : repeat-x/ repeat-y;

- 设置定位或者不平铺  
  background-image : url('back.png');
  background-repeat: no-repeat;  

  background-image : url('back.png');
  background-repeat: no-repeat;
  background-postion: right-top;

- 简写属性  
  background:#ffffff url('img_tree.png') no-repeat right top;  

## CSS文本  

- 文本颜色  
  color : #eeeeee;  

- 文本对齐方式  
  text-align : center/ right/ justify  
  justify ( 每一行被展开为宽度相等，左，右外边距是对齐 )

- 文本修饰  
  text-decoration : underline/ overline/ line-through/ none
  添加下划线或者删除线或者删除超链接的下划线  

- 文本转换  
  text-thransform : uppercase/ lowercase/ capitalize  
  capitalize 首字母大写  

- 文本缩进  
  text-indent : 50px;

- 指定行与行之间的空间  
  line-height : 70%;

## 字体  
- 字体系列  
  font-family : "Times New Roman", Times, serif;  
font-family 属性应该设置几个字体名称作为一种"后备"机制，如果浏览器不支持第一种字体，他将尝试下一种字体。  
如果字体系列的名称超过一个字，它必须用引号，如Font Family："宋体"。  

- 字体样式  
  font-style : normal/ italic/ oblique  正常/斜体

- 字体大小  
  font-size : 100%;
  font-size : 2.5em;


## 链接  
a:link - 正常，未访问过的链接  
a:visited - 用户已访问过的链接  
a:hover - 当用户鼠标放在链接上时  
a:active - 链接被点击的那一刻  
( a:hover 必须跟在 a:link 和 a:visited后面; a:active 必须跟在 a:hover后面 )

a:link {text-decoration:none;}
a:visited {text-decoration:none;}
a:hover {text-decoration:underline;}
a:active {text-decoration:underline;}

## 列表  
- list-style-type  
   list-style-type : circle/ square/ upper-roman/ lower-alpha  
- list-style-image  
  list-style-image : url('back.gif')  


## 表格  
- 表格边框  
  border: 1px solid black;  
  在上面的例子中的表格有双边框。这是因为表和th/ td元素有独立的边界。为了显示一个表的单个边框，使用 border-collapse属性
- 折叠边框  
  border: 1px solid black;  
  border-collapse:collapse;  

- 高度与宽度  
  width:100%;  
  height:50px; 

- 表格文字对齐  
  表格中的文本对齐和垂直对齐属性
  text-align:right;  
  vertical-align:bottom;  

- 表格颜色  
  background-color:green;  
  color:white;  

## 盒子模型  
margin/ border/ padding/ content  
当指定一个CSS元素的宽度和高度属性时，只是设置内容区域的宽度和高度。完全大小的元素，还必须添加填充，边框和边距.   

最终元素的总宽度计算公式是这样的：  
总元素的宽度=宽度+左填充+右填充+左边框+右边框+左边距+右边距  

元素的总高度最终计算公式是这样的：  
总元素的高度=高度+顶部填充+底部填充+上边框+下边框+上边距+下边距   

一旦为页面设置了恰当的 DTD，大多数浏览器都会按照上面的图示来呈现内容。然而 IE 5 和 6 的呈现却是不正确的。根据 W3C 的规范，元素内容占据的空间是由 width 属性设置的，而内容周围的 padding 和 border 值是另外计算的。不幸的是，IE5.X 和 6 在怪异模式中使用自己的非标准模型。这些浏览器的 width 属性不是内容的宽度，而是内容、内边距和边框的宽度的总和。  
虽然有方法解决这个问题。但是目前最好的解决方案是回避这个问题。也就是，不要给元素添加具有指定宽度的内边距，而是尝试将内边距或外边距添加到元素的父元素和子元素。  
IE8 及更早IE版本不支持设置填充的宽度和边框的宽度属性。  
解决IE8及更早版本不兼容问题可以在HTML页面声明 <!DOCTYPE html>即可。  

## 外边距 margin  
margin 清除周围的（外边框）元素区域。margin 没有背景颜色，是完全透明的。  

margin 可以单独改变元素的上，下，左，右边距，也可以一次改变所有的属性。  

auto => 设置浏览器边距. 这样做的结果会依赖于浏览器  
length => 定义一个固定的margin ( 使用px, pt, em等 )  
% => 定义一个使用百分比的边距  
( margin 可以使用负值, 重叠的内容 )  

## 嵌套  
p{ }: 为所有 p 元素指定一个样式。  
.marked{ }: 为所有 class="marked" 的元素指定一个样式。  
.marked p{ }: 为所有 class="marked" 元素内的 p 元素指定一个样式。  
p.marked{ }: 为所有 class="marked" 的 p 元素指定一个样式。  

## display( 显示 )与visibility( 可见性 )  
- 隐藏元素  
display : none 可以隐藏某个元素，但隐藏的元素仍需占用与未隐藏之前一样的空间。也就是说，该元素虽然被隐藏了，但仍然会影响布局。 
visibility : hidden 可以隐藏某个元素，且隐藏的元素不会占用任何空间。也就是说，该元素不但被隐藏了，而且该元素原本占用的空间也会从页面布局中消失。  

- 块和内联元素  
  块元素是一个元素，占用了全部宽度，在前后都是换行符。如<h1>, <p>, <div>  
  内联元素只需要必要的宽度，不强制换行。如<span>, <a>等  
  display: block/ inline  

## position ( 定位 )  
position 属性的五个值: static, relative, fixed, absolute, sticky  




  