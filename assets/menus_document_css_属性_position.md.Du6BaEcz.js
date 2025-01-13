import{_ as o,c as e,b as t,a3 as c}from"./chunks/framework.D82swi_l.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"menus/document/css/属性/position.md","filePath":"menus/document/css/属性/position.md","lastUpdated":1707281529000}'),i={name:"menus/document/css/属性/position.md"},a=c('<h2 id="position的属性值及其作用" tabindex="-1">position的属性值及其作用 <a class="header-anchor" href="#position的属性值及其作用" aria-label="Permalink to &quot;position的属性值及其作用&quot;">​</a></h2><p>CSS <code>position</code> 属性用于指定一个元素在文档中的定位方式。<code>top</code>，<code>right</code>，<code>bottom</code> 和 <code>left</code> 属性则决定了该元素的最终位置。</p><ul><li><code>position: static</code>: 默认值，正常文档流布局</li><li><code>position: relative</code>: 相对布局，占据在正常的文档流中，位置相对于正常布局进行定位</li><li><code>position: absolute</code>: 绝对布局，脱离文档流，位置相对于最近父元素的<code>position</code>不为<code>static</code>的元素进行定位, 绝对布局在父元素的padding box和content box内。</li><li><code>position: fixed</code>: 固定布局，脱离文档流，固定定位与绝对定位相似，但元素的包含块为 viewport 视口</li><li><code>position: sticky</code>: 粘性定位，元素在跨越特定阈值前为定位属性无效，跨越后为绝对定位，相对于最近有滚动条的父元素。</li></ul><h2 id="为什么有时候用translate来改变位置而不是定位" tabindex="-1">为什么有时候⽤translate来改变位置⽽不是定位？ <a class="header-anchor" href="#为什么有时候用translate来改变位置而不是定位" aria-label="Permalink to &quot;为什么有时候⽤translate来改变位置⽽不是定位？&quot;">​</a></h2><p><code>translate</code> 是 <code>transform</code> 属性的⼀个值。改变<code>transform</code>或<code>opacity</code>不会触发浏览器重排(reflow)或重绘(repaint)，只会触发复合(compositions)。⽽改变绝对定位会触发重新布局，进⽽触发重绘和复合。<code>transform</code>使浏览器为元素创建⼀个 GPU 图层，但改变绝对定位会使⽤到 CPU。 因此<code>translate()</code>更⾼效，可以缩短平滑动画的绘制时间。 ⽽<code>translate</code>改变位置时，元素依然会占据其原始空间，绝对定位就不会发⽣这种情况。</p>',5),s=[a];function d(n,r,l,p,_,m){return t(),e("div",null,s)}const f=o(i,[["render",d]]);export{h as __pageData,f as default};
