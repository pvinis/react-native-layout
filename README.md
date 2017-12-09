My react native Layout library
===

I made this to help me with some repeating problems and annoyances I had/have while writing react native apps.

Details
===

`Flex` is nice to use because I don't need to type `style={{ flex: 1 }}` all the time. Also it's very easy to try with and without flex, by changing from `<Flex>` to `<Flex noflex>` and back.

`Spaced` is my second most used layout. It allows me to have a bunch of views with specific space `between` them and `around` them. Sometimes with flex it's hard to have a specific size, or you need to add empty views on the edges in order to have one size of space around and between, so I put all than in there. It has `inner`, which is the space between items, `outer`, for the space around the edge items, and `size`, which is the `inner` and `outer` together.

`Split` started as an easy way to had a view with two subviews, that automatically get 50% of the available space each. I want to add functionality like `space={ [30, 70] }` and that would make the first view 30% and the second one 70% etc.

`Empty` is not often useful, but sometimes it's needed, and now it's here.

`Screen` is what I use for every new screen in my apps. It is basically a `Flex` with optional shadow, and some base style.

`Separator` is pretty self-explanatory, it's just an easy way to add a separator between views.

`Shadow` is also simple, it adds a small shadow on the top of the view, usually used for adding shadow below the navbar.


To do
===

add a `package.json`
make it into an npm package
add examples of code and screenshots
