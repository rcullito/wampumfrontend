## Group
To group multiple shapes together with KineticJS, we can instantiate a Kinetic.Group() object and then add shapes to it with the add() method.

http://www.html5canvastutorials.com/kineticjs/html5-canvas-complex-shapes-using-groups-with-kineticjs/


## Animation
To create custom animations with KineticJS, we can use the Kinetic.Animation constructor

Two arguments, the required update function and a layer, that will be updated with each animation frame.  

The animation function is passed a frame object which contains
    - a time property which is the number of milliseconds that the animation has been running
    - a timeDiff property which is the number of milliseconds that have passed since the last frame
    - frameRate property which is the current frame rate in frames per second.