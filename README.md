#Upgrade your JavaScript to ES6

This repository contains files for the [Upgrade your JavaScript to ES6 course on Udemy](https://www.udemy.com/fst-ecmascript-6/learn/?couponCode=FST-ES6). (Note: the course is a paid course)

Please have a look at course.pdf for a full course information.

##How to run ES6?
Some ES6 features already exist in current browswers but some of course do not, however there are tools out there that can help you with running your ES6 code in an ES5 environment. Such tools are called JavaScript compilers and there are quite a few of them. The process of compiling in this case means that we take the source code of an ES6 application and we generate ES5 code from it.

Check out these compilers:

* [Babel](http://babeljs.io/) (previously known as '6to5')
* [Traceur](https://github.com/google/traceur-compiler)
* [ES6-Shim](https://github.com/paulmillr/es6-shim/)

Throughout the course we will be using Babel - mostly the Babel CLI running in Node.js.

> To get a similar setup to ours, please install Babel globally using npm: `npm install -g babel`

> To verify a successful setup execute `babel --version`

You can of course use Babel through [browser, make it part of build systems and test frameworks](http://babeljs.io/docs/setup/).

Once you have installed Babel you'll get two command line commands: `babel` and `babel-node`. We will be using both (for example `babel-node` can run generators (it automatically includes the babel/polyfil library, wherease `babel` from the cli does not)

Babel has lots of options for the cli - whether you want to compile entire folders, pipe files or even compile with source maps.

For the purposes of this training we'll be using Babel to compile single files with the following syntax: `babel script.es6 --out-file script.es6.js`

> The naming convention throughout the training is consistent. ES6 files all have an .es6 extension and the compiled file will have either an .es5.js or a .es6.js extension)

> Another important note for compilation is that you need to pass in valid JavaScript to Babel. Sometimes missing semicolons can cause unexpected behaviour or the total lack of compilation.

###Compatibility table
If you'd like to see which Browser / Compiler supports what ES6 features this page can help you out: [https://kangax.github.io/compat-table/es6/](https://kangax.github.io/compat-table/es6/)

###Text Editors
Most text editors would already support JavaScript/ES6 syntax highlighting. If yours does not, try to install a package or apply JavaScript syntax highglighting to your ES6 code.