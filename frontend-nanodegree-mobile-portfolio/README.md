## Website Performance Optimization portfolio project

To try the pizza app, please visit http://maxsoe.github.io/frontend-nanodegree-mobile-portfolio/views/pizza.html

####Part 1: Optimize PageSpeed Insights score for index.html

Optimizations made:

- reduce pizzeria image size and compress file.
- compress profile pic.
- async analytics.js
- minify style.css
- minify print.css
- move CSS to bottom of page


####Part 2: Optimize Frames per Second in pizza.html

Optimizations made:

- requestAnimationFrame for updatePositions()
- remove forced frame in updatePositions(). Pull DOM accessor out of loop and place into the variable "distanceFromTop"
- add "will-chage" to .mover
- remove forced frame in changePizzaSizes(). Pull DOM accessor out of loop and place into the variable "randomPizzas"
- remove determineDX as it's redundant
- changePizzaSizes uses percentage values rather than pixel values.
- only render 50 pizzas rather than 200
- use getElementsByClassName rather than querySelectorAll
