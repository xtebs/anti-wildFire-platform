'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var FontFaceObserver = require('fontfaceobserver');

var Fonts = function Fonts() {
  var link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css?family=Roboto:700';
  link.rel = 'stylesheet';

  document.head.appendChild(link);

  var roboto = new FontFaceObserver('Roboto');

  roboto.load().then(function () {
    document.documentElement.classList.add('roboto');
  });
};

exports.default = Fonts;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL0ZvbnRzLmpzIl0sIm5hbWVzIjpbIkZvbnRGYWNlT2JzZXJ2ZXIiLCJyZXF1aXJlIiwiRm9udHMiLCJsaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsInJlbCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsInJvYm90byIsImxvYWQiLCJ0aGVuIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQU0sbUJBQW1CLEFBQW5CLEFBQU47O0FBRUEsSUFBTSxRQUFRLFNBQVIsQUFBUSxRQUFNLEFBQ2xCO01BQU0sT0FBTyxTQUFTLEFBQVQsY0FBdUIsQUFBdkIsQUFBYixBQUNBO09BQUssQUFBTCxPQUFZLEFBQVosQUFDQTtPQUFLLEFBQUwsTUFBVyxBQUFYLEFBRUE7O1dBQVMsQUFBVCxLQUFjLEFBQWQsWUFBMEIsQUFBMUIsQUFFQTs7TUFBTSxTQUFTLElBQUksQUFBSixpQkFBcUIsQUFBckIsQUFBZixBQUVBOztTQUFPLEFBQVAsT0FBYyxBQUFkLEtBQW1CLFlBQU0sQUFDdkI7YUFBUyxBQUFULGdCQUF5QixBQUF6QixVQUFtQyxBQUFuQyxJQUF1QyxBQUF2QyxBQUNEO0FBRkQsQUFHRDtBQVpELEFBY0E7O2tCQUFlLEFBQWYiLCJmaWxlIjoiRm9udHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2h1Z29mbmVzdGV2ZXMvRGVza3RvcC9SZWFjdC9Gb2dvczEifQ==