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
    <div class="example">                           //edit class
      <img src="image.png">                         //edit object
    </div>
  

    <script>
      var kadoTriller = Triller();                  
      kadoTriller.start('.example', '1.0s');        //(edit class, edit seconds of shaking)
    </script>
```    

You have to make sure the object you would like to shake and the first name between the parenthesis have the same value.
You can adjust the type of object you would like to shake and control the speed by changing the number of seconds.

