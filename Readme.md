# 100days of UI challenge.

# diplay
block takea a new line
inline share the horizonatal space
they dont respect the width and height set 
inline-block share horizontal space and take up much space as they can
they respect the height abd the width set 
# Positioning offset values  top bottom left right z-index
How and where an element is position relative to other elements 
static- its the default almost like relative but it  wont respond to offset properties
relative-  elements are not removed from the document flow ,offsets are relative to default position 
absolute the element is removed from the document flow, offset are relative to the parent provided the parent is not statically postions
fixed This behaves similar to absolute positioning but  ALWAYS positioned relative to the active viewport.
scrolling the page content would not affect this element's position 
z-index 3d axis that we can stack elements on top of each other
# flexbox 
 layout mode providing for the arrangement of elements on a page such that the elements behave predictably when thjuste page layout must accommodate different screen sizes and different display devices. 
## flex-direction
row aligns ites ia row
columns aligns items in a column
column/row reverse
## justify content
left flex-start
right flexe-end
center center
space-around/between
## align-items
 top -> flex-start
- center -> center
- bottom -> flex-end

Note that when the flex-direction is column or column-reverse, align-items refers to the horizontal axis, not the vertical.
rder - this property allows you to order items based on their position in the DOM.

align-self - this property allows you to overwrite the value of align-items
flex-basis - This lets you manually set the size of a flexbox element's content box
flex-grow - This lets you set proportional sizes of flex items within the same container
flex-shrink - Similar to flex-grow, but for shrinking elements when there's not enough space.
flex-wrap - When items in a flex container get too wide, what should happen?