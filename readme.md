Ques ans:
1. getElementById returns one element, getElementByClass returns all element of that class. quetySelectir returns 1st element, querySelectorAll returns all element
2. Create the element with document.createElement(), Insert it using methods like appendChild()
3. Event Bubbling means when an event happens on a child element, it (propagates) to its parent, then grandparent, and so on
4. Event Delegation: Instead of attaching event listeners to multiple child elements, you attach a single listener to a parent and use event bubbling to handle events from children.Improves performance (fewer listeners in memory).Handles dynamically added elements (works even if child elements are added later).
5. preventDefault() Stops the default action of an event. stopPropagation() Stops the event from bubbling up to parent elements.
