- Modified site: https://asherkim815.github.io/drum-kit-modified/
- Original site: https://asherkim815.github.io/drum-kit-original/
- Original repo: https://github.com/asherkim815/drum-kit-original

This project came from a Udemy course by Angela Yu, The Complete 2024 Web Development Bootcamp.\
You can check out the original version via the links above.

I modified it the following way:

1. Shortened the codes (e.g. using forEach loop instead of the regular for loop)
2. Added comments and changed parameter names to make it easier to understand
3. Removed error messages that popped in console when an unregistered button was pressed (e.g. Q, E, R, etc.), by using array of registered buttons and includes() method
4. Replaced deprecated keypress events with keydown ones
5. Added "document.activeElement.blur();" to prevent the space bar from "clicking" on a clicked image
