SHAKE LIBRARY
===

Made By Thijs
---

---

Introduction
---

With this library you're able to give a repeatable shake to an object. 

What is customisable?
* Duration of shake

---

Demo
---

http://www.thijsdeveth.nl

---

How To Implement?
---

### ADD LIBRARY

Include the .js file in the <head> of your .html file.

```<script src="triller.js" type="application/javascript"></script>```

*If you put the .js file in a 'js' folder the src will be "js/triller.js"*


Include the .css file in the <head> of your .html file.

```<link rel="stylesheet" href="triller.css">```

You can also check the example in the 'demo' folder.


### ADD ELEMENT

In the body of your .html file you will put the following code:
```
 <div class="triller1 kado">
      <img src="kado.png">
    </div>
    <div class="triller2 kado">
      <img src="kado.png">
    </div>

    <script>
      var kadoTriller = Triller();
      kadoTriller.start('.triller1', '1.0s');
      kadoTriller.start('.triller2', '2.0s');
    </script>
```    


