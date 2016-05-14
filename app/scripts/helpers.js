(function(document) {
  'use strict';

  // Fix for IE11
  Number.parseInt = Number.parseInt || window.parseInt;
  Number.parseFloat = Number.parseFloat || window.parseFloat;

  // create a function for escaping regular expressions if there isn't already one
  window.escapeRegExp = window.escapeRegExp ||
    /**
     * Escape a regular expression string.
     *
     * @param {!String} str - the string to escape
     * @returns {!String} the escaped string
     */
    function(str) {
      return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
    };

  // create a replaceAll function for Strings if there isn't already one
  String.prototype.replaceAll = String.prototype.replaceAll ||
    /**
     * Replace all instances of a given string in this string.
     *
     * @param {!String} find - the string to replaceAll
     * @param {!String} replace - what to replace the string with
     * @returns {!String} the new string
     */
    function(find, replace) {
      return this.replace(new RegExp(window.escapeRegExp(find), 'g'), replace);
    };

  // create a addClass function for Dom Nodes if there isn't already one
  Node.prototype.addClass = Node.prototype.addClass ||
    /**
     * Add the given class to this element.
     *
     * @param {!String} className - the class to add
     */
    function(className) {
      if (this.classList) {
        this.classList.add(className);
      } else {
        this.setAttribute('class', this.getAttribute('class') + ' ' + className);
      }
    };

  // create a removeClass function for Dom Nodes if there isn't already one
  Node.prototype.removeClass = Node.prototype.removeClass ||
    /**
     * Remove the given class from this element.
     *
     * @param {!String} className - the class to remove
     */
    function(className) {
      if (this.classList) {
        this.classList.remove(className);
      } else {
        this.setAttribute('class', this.getAttribute('class').split(className).join());
      }
    };
})(document);
