SHAKE LIBRARY
===

Made By Thijs
---

---

Introduction
---

With this library you are able to give a repeatable shake to an object. 

What is customisable?
* Duration of shake


Demo
---
<a href="http://www.thijsdeveth.nl">View demo</a>

---

Installation
---

Include the .js file in the <head> of your .html file.

```<script src="triller.js" type="application/javascript"></script>```

*If you put the .js file in a 'js' folder the src will be "js/triller.js"*


Include the .css file in the <head> of your .html file.

```<link rel="stylesheet" href="triller.css">```

You can also check the example in the 'demo' folder.



How To Implement?
---

In the body of your .html file you will put the following code:
```
    <div class="example">                           //edit class
      <img src="image.png">                         //edit object
    </div>
  

    <script>
      var kadoTriller = Triller();                  
      kadoTriller.start('.example', '1.0s');        //(edit object to shake, edit seconds of shaking)
    </script>
```    

The first ```'.example'``` value between the parenthesis shows wich element will shake.
This could be a classname like in the example but also an element name like 'p'. Just make sure the value is the same as the element you would like to shake.



How To Customise Duration Of Shake?
---

As seen in the example above it is also possible to edit the duration of the shake.
Just change the ```1.0s``` to another value to make the shake shorter or longer.

---
