webpackHotUpdate(5,{

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _reactParallax = __webpack_require__(437);

var _head = __webpack_require__(189);

var _head2 = _interopRequireDefault(_head);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(351);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ProjectDescription = __webpack_require__(438);

var _ProjectDescription2 = _interopRequireDefault(_ProjectDescription);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/hugofnesteves/Desktop/React/Fogos1/pages/TheContainer.js';


var image2 = "../static/forest1.jpg";
var image1 = "../static/forest2.jpg";
var image6 = "../static/plataforma.svg";
var videoWildFire = "../static/videoFire.mp4";

var TheContainer = function (_Component) {
	(0, _inherits3.default)(TheContainer, _Component);

	function TheContainer() {
		(0, _classCallCheck3.default)(this, TheContainer);

		var _this = (0, _possibleConstructorReturn3.default)(this, (TheContainer.__proto__ || (0, _getPrototypeOf2.default)(TheContainer)).call(this));

		_this.state = { //later to change language by state (simpler and faster)
			language: ["english", "portuguese"],
			selectedLanguage: "english"
		};
		return _this;
	}

	(0, _createClass3.default)(TheContainer, [{
		key: 'render',

		//console.log ( (this.state.selectedLanguage=="english")? (this.state.language.english.protectTheForest):(this.state.language.portuguese.protectTheForest) )

		value: function render() {

			return _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 36
				}
			}, _react2.default.createElement(_head2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 38
				}
			}, _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Karla', rel: 'stylesheet', __source: {
					fileName: _jsxFileName,
					lineNumber: 39
				}
			}), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Anton', rel: 'stylesheet', __source: {
					fileName: _jsxFileName,
					lineNumber: 40
				}
			}), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Roboto', rel: 'stylesheet', __source: {
					fileName: _jsxFileName,
					lineNumber: 41
				}
			})), _react2.default.createElement(_reactParallax.Parallax, { bgImage: image1, blur: { min: -5, max: 5 },
				strength: 500, __source: {
					fileName: _jsxFileName,
					lineNumber: 46
				}
			}, _react2.default.createElement('div', { style: { height: 500 }, __source: {
					fileName: _jsxFileName,
					lineNumber: 48
				}
			}, _react2.default.createElement('div', { style: title1Style, __source: {
					fileName: _jsxFileName,
					lineNumber: 49
				}
			}, _react2.default.createElement('p', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 50
				}
			}, 'PROTEGER A FLORESTA PORTUGUESA')), _react2.default.createElement('div', { style: title2Style, __source: {
					fileName: _jsxFileName,
					lineNumber: 52
				}
			}, _react2.default.createElement('p', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 53
				}
			}, 'Com tecnologia limpa e inovadora.')), _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 55
				}
			}, _react2.default.createElement('a', { style: crowdsourced_text, href: 'https://www.gofundme.com/plataforma-antifogos-100-civil', __source: {
					fileName: _jsxFileName,
					lineNumber: 56
				}
			}, 'Projecto Crowdsourced. Contribua aqui.')))), _react2.default.createElement('div', { style: blackBar, __source: {
					fileName: _jsxFileName,
					lineNumber: 61
				}
			}, ' '), _react2.default.createElement('div', { style: styles.containerVideo, __source: {
					fileName: _jsxFileName,
					lineNumber: 64
				}
			}, _react2.default.createElement('video', { style: styles.video, src: videoWildFire, autoPlay: true, loop: true, muted: true, type: 'video/mp4', __source: {
					fileName: _jsxFileName,
					lineNumber: 66
				}
			}), _react2.default.createElement('div', { style: textOverVideo, __source: {
					fileName: _jsxFileName,
					lineNumber: 68
				}
			}, _react2.default.createElement('p', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 69
				}
			}, 'CHEGA.'))), _react2.default.createElement('div', { style: blackBar, __source: {
					fileName: _jsxFileName,
					lineNumber: 72
				}
			}, ' '), _react2.default.createElement(_reactParallax.Parallax, { bgImage: image2, strength: 500, blur: { min: 1, max: 4 }, __source: {
					fileName: _jsxFileName,
					lineNumber: 73
				}
			}, _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 74
				}
			}, _react2.default.createElement(_ProjectDescription2.default, { language: this.state.selectedLanguage, __source: {
					fileName: _jsxFileName,
					lineNumber: 75
				}
			}))), _react2.default.createElement('div', { style: plan, __source: {
					fileName: _jsxFileName,
					lineNumber: 79
				}
			}));
		}
	}]);

	return TheContainer;
}(_react.Component);

exports.default = TheContainer;


var styles = {
	containerVideo: {
		width: '100%',
		height: 300,
		overflow: 'hidden',
		'z-index': 0
	},
	video: {
		objectFit: 'cover',
		width: '100%',
		height: "100%",
		'z-index': 0
	}

};

var title1Style = {
	position: 'absolute',
	top: "30%",
	left: "50%",
	marginLeft: "-300px",
	'z-index': 0,
	color: 'white',
	fontFamily: 'Anton',
	fontSize: 50,
	padding: 20
};

var title2Style = {
	position: 'absolute',
	top: "50%",
	left: "50%",
	marginLeft: "-170px",
	'z-index': -10,
	color: 'white',
	fontFamily: 'Roboto',
	fontSize: 20,
	padding: 20
};

var crowdsourced_text = {
	position: 'absolute',
	top: 400,
	left: "50%",
	marginLeft: "-190px",
	'z-index': -10,
	color: 'white',
	fontFamily: 'Roboto',
	fontSize: 20,
	padding: 20
};

var textOverVideo = {
	position: 'absolute',
	top: 480,
	left: "50%",
	marginLeft: "-140px",
	'z-index': 10,
	color: 'black',
	fontFamily: 'Anton',
	fontSize: 100,
	padding: 20
};

var title3Style = {
	color: 'white',
	fontFamily: 'Impact',
	fontSize: 50,
	padding: 20
};

var blackBar = {
	backgroundColor: 'black',
	height: 20 };

var plan = {
	backgroundImage: "url(../static/plataforma.svg)",
	backgroundSize: "contain",
	backgroundRepeat: "no-repeat",
	height: 900 };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL1RoZUNvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJQYXJhbGxheCIsIkJhY2tncm91bmQiLCJIZWFkIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsIlByb2plY3REZXNjcmlwdGlvbiIsImltYWdlMiIsImltYWdlMSIsImltYWdlNiIsInZpZGVvV2lsZEZpcmUiLCJUaGVDb250YWluZXIiLCJzdGF0ZSIsImxhbmd1YWdlIiwic2VsZWN0ZWRMYW5ndWFnZSIsIm1pbiIsIm1heCIsImhlaWdodCIsInRpdGxlMVN0eWxlIiwidGl0bGUyU3R5bGUiLCJjcm93ZHNvdXJjZWRfdGV4dCIsImJsYWNrQmFyIiwic3R5bGVzIiwiY29udGFpbmVyVmlkZW8iLCJ2aWRlbyIsInRleHRPdmVyVmlkZW8iLCJwbGFuIiwid2lkdGgiLCJvdmVyZmxvdyIsIm9iamVjdEZpdCIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsIm1hcmdpbkxlZnQiLCJjb2xvciIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsInBhZGRpbmciLCJ0aXRsZTNTdHlsZSIsImJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFJlcGVhdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTLEFBQVU7O0FBQ25CLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7OztBQUNQLEFBQU8sQUFBd0I7Ozs7Ozs7OztBQUUvQixJQUFNLFNBQU4sQUFBZTtBQUNmLElBQU0sU0FBTixBQUFlO0FBQ2YsSUFBTSxTQUFOLEFBQWU7QUFDZixJQUFNLGdCQUFOLEFBQXNCOztJQUVELEE7dUNBRW5COzt5QkFBZTtzQ0FBQTs7MElBRWhCOztRQUFBLEFBQUssVUFBVSxBQUNiO2FBQVUsQ0FBQSxBQUNULFdBRlUsQUFDRCxBQUlULEFBS0Q7cUJBWmMsQUFFaEIsQUFBYSxBQVVRO0FBVlI7U0FZ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LEFBQ047YUFQbUIsQUFPUCxBQUNaO1dBUm1CLEFBUVQsQUFDVjtVQVRELEFBQW9CLEFBU1Y7QUFUVSxBQUNuQjs7QUFXRCxJQUFNO1dBQWMsQUFDVCxBQUNWO01BRm1CLEFBRWYsQUFDSjtPQUhtQixBQUdkLEFBQ0w7YUFKbUIsQUFJUixBQUNYO1lBQVcsQ0FMUSxBQUtQLEFBQ1o7UUFObUIsQUFNYixBQUNOO2FBUG1CLEFBT1AsQUFDWjtXQVJtQixBQVFULEFBQ1Y7VUFURCxBQUFvQixBQVNWO0FBVFUsQUFDbkI7O0FBV0QsSUFBTTtXQUFvQixBQUNmLEFBQ1Y7TUFGeUIsQUFFckIsQUFDSjtPQUh5QixBQUdwQixBQUNMO2FBSnlCLEFBSWQsQUFDWDtZQUFXLENBTGMsQUFLYixBQUNaO1FBTnlCLEFBTW5CLEFBQ047YUFQeUIsQUFPYixBQUNaO1dBUnlCLEFBUWYsQUFDVjtVQVRELEFBQTBCLEFBU2hCO0FBVGdCLEFBQ3pCOztBQVdELElBQU07V0FBZ0IsQUFDWCxBQUNWO01BRnFCLEFBRWpCLEFBQ0o7T0FIcUIsQUFHaEIsQUFDTDthQUpxQixBQUlWLEFBQ1g7WUFMcUIsQUFLVixBQUNYO1FBTnFCLEFBTWYsQUFDTjthQVBxQixBQU9ULEFBQ1o7V0FScUIsQUFRWCxBQUNWO1VBVEQsQUFBc0IsQUFTWjtBQVRZLEFBQ3JCOztBQVdELElBQU07UUFBYyxBQUNiLEFBQ047YUFGbUIsQUFFUCxBQUNaO1dBSG1CLEFBR1QsQUFDVjtVQUpELEFBQW9CLEFBSVY7QUFKVSxBQUNuQjs7QUFNRCxJQUFNO2tCQUFXLEFBQ0EsQUFDaEI7U0FGRCxBQUFpQixBQUVULEVBRlMsQUFDaEI7O0FBR0QsSUFBTSxPQUFPLEFBQ1o7a0JBRFksQUFDSSxBQUNoQjtpQkFGWSxBQUVJLEFBQ2hCO21CQUhZLEFBR00sQUFDbEI7U0FKRCxBQUFhLEFBSUwiLCJmaWxlIjoiVGhlQ29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9odWdvZm5lc3RldmVzL0Rlc2t0b3AvUmVhY3QvRm9nb3MxIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/hugofnesteves/Desktop/React/Fogos1/pages/TheContainer.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/hugofnesteves/Desktop/React/Fogos1/pages/TheContainer.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/TheContainer")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5jYmQzNzRmNmFkMDdiMzI1N2RlMi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvVGhlQ29udGFpbmVyLmpzP2UxZjU4NDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFyYWxsYXgsIEJhY2tncm91bmQgfSBmcm9tICdyZWFjdC1wYXJhbGxheCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgUHJvamVjdERlc2NyaXB0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvamVjdERlc2NyaXB0aW9uJztcclxuXHJcbmNvbnN0IGltYWdlMiA9IFwiLi4vc3RhdGljL2ZvcmVzdDEuanBnXCI7XHJcbmNvbnN0IGltYWdlMSA9IFwiLi4vc3RhdGljL2ZvcmVzdDIuanBnXCI7XHJcbmNvbnN0IGltYWdlNiA9IFwiLi4vc3RhdGljL3BsYXRhZm9ybWEuc3ZnXCI7XHJcbmNvbnN0IHZpZGVvV2lsZEZpcmUgPSBcIi4uL3N0YXRpYy92aWRlb0ZpcmUubXA0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaGVDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cdHRoaXMuc3RhdGUgPSB7IC8vbGF0ZXIgdG8gY2hhbmdlIGxhbmd1YWdlIGJ5IHN0YXRlIChzaW1wbGVyIGFuZCBmYXN0ZXIpXHJcblx0XHRcdGxhbmd1YWdlOiBbXHJcblx0XHRcdFx0XCJlbmdsaXNoXCI6e1xyXG5cdFx0XHRcdFx0cHJvdGVjdFRoZUZvcmVzdDogXCJQUk9URUNUSU5HIE9VUiBGT1JFU1RcIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFwicG9ydHVndWVzZVwiOntcclxuXHRcdFx0XHRcdHByb3RlY3RUaGVGb3Jlc3Q6IFwiUFJPVEVHRVIgQSBGTE9SRVNUQSBQT1JUVUdVRVNBXCIsXHJcblx0XHRcdFx0fSxcclxuXHJcblx0XHRcdF0sXHJcblx0XHRcdHNlbGVjdGVkTGFuZ3VhZ2UgOiBcImVuZ2xpc2hcIixcclxuXHQgIH1cclxuICAgIH07XHJcblx0XHJcblx0Ly9jb25zb2xlLmxvZyAoICh0aGlzLnN0YXRlLnNlbGVjdGVkTGFuZ3VhZ2U9PVwiZW5nbGlzaFwiKT8gKHRoaXMuc3RhdGUubGFuZ3VhZ2UuZW5nbGlzaC5wcm90ZWN0VGhlRm9yZXN0KToodGhpcy5zdGF0ZS5sYW5ndWFnZS5wb3J0dWd1ZXNlLnByb3RlY3RUaGVGb3Jlc3QpIClcclxuXHRcclxucmVuZGVyICgpIHtcclxuXHJcbnJldHVybiAoXHJcblxyXG48ZGl2PlxyXG5cclxuXHQ8SGVhZD5cclxuXHRcdDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9S2FybGFcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cclxuXHRcdDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QW50b25cIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxyXG5cdFx0PGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG9cIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cclxuXHQ8L0hlYWQ+XHJcblxyXG5cclxuXHJcblx0PFBhcmFsbGF4IGJnSW1hZ2U9e2ltYWdlMX0gYmx1cj17e21pbjogLTUsbWF4OjV9fVxyXG4gICAgICBzdHJlbmd0aD17NTAwfT5cclxuICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogNTAwfX0gPlxyXG5cdFx0PGRpdiAgc3R5bGU9e3RpdGxlMVN0eWxlfSA+XHJcblx0XHQ8cD5QUk9URUdFUiBBIEZMT1JFU1RBIFBPUlRVR1VFU0E8L3A+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgc3R5bGU9e3RpdGxlMlN0eWxlfT5cclxuXHRcdDxwPkNvbSB0ZWNub2xvZ2lhIGxpbXBhIGUgaW5vdmFkb3JhLjwvcD5cclxuXHRcdDwvZGl2PiAgXHJcblx0XHQ8ZGl2ID5cclxuXHRcdDxhIHN0eWxlPXtjcm93ZHNvdXJjZWRfdGV4dH0gaHJlZj0naHR0cHM6Ly93d3cuZ29mdW5kbWUuY29tL3BsYXRhZm9ybWEtYW50aWZvZ29zLTEwMC1jaXZpbCc+UHJvamVjdG8gQ3Jvd2Rzb3VyY2VkLiBDb250cmlidWEgYXF1aS48L2E+XHJcblx0XHQ8L2Rpdj4gIFxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvUGFyYWxsYXg+XHJcblx0XHJcblx0PGRpdiBzdHlsZT17YmxhY2tCYXJ9PiA8L2Rpdj4gIFxyXG5cdFxyXG5cclxuXHRcdDxkaXYgc3R5bGU9e3N0eWxlcy5jb250YWluZXJWaWRlb30+IFxyXG5cclxuXHRcdDx2aWRlbyBzdHlsZT17c3R5bGVzLnZpZGVvfSAgIHNyYz17dmlkZW9XaWxkRmlyZX0gYXV0b1BsYXkgbG9vcCBtdXRlZD17dHJ1ZX0gdHlwZT1cInZpZGVvL21wNFwiPlxyXG5cdFx0PC92aWRlbz5cclxuXHRcdFx0PGRpdiAgc3R5bGU9e3RleHRPdmVyVmlkZW99ID5cclxuXHRcdFx0XHQ8cD5DSEVHQS48L3A+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+IFxyXG48ZGl2IHN0eWxlPXtibGFja0Jhcn0+IDwvZGl2PiAgXHJcblx0XHQ8UGFyYWxsYXggYmdJbWFnZT17aW1hZ2UyfSBzdHJlbmd0aD17NTAwfSAgYmx1cj17e21pbjogMSxtYXg6IDR9fT5cclxuXHRcdFx0PGRpdiA+IFxyXG5cdFx0XHRcdDxQcm9qZWN0RGVzY3JpcHRpb24gbGFuZ3VhZ2U9e3RoaXMuc3RhdGUuc2VsZWN0ZWRMYW5ndWFnZX0vPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvUGFyYWxsYXg+XHJcbiAgICBcclxuICAgICAgPGRpdiBzdHlsZT17cGxhbn0+XHJcblx0XHRcdCAgXHJcblx0ICA8L2Rpdj5cclxuICAgIFxyXG5cclxuPC9kaXY+XHJcblxyXG4pfVxyXG59XHJcblxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG5cdGNvbnRhaW5lclZpZGVvOiB7XHJcbiAgICAgIHdpZHRoOicxMDAlJyxcclxuICAgICAgaGVpZ2h0OjMwMCxcclxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgICAnei1pbmRleCc6IDAsXHJcbiAgfSxcclxuXHR2aWRlbzoge1xyXG4gICAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXHJcbiAgICAgIHdpZHRoOicxMDAlJyxcclxuICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAnei1pbmRleCc6IDAsXHJcbiAgfVxyXG4gIFxyXG5cclxufVxyXG5cclxuY29uc3QgdGl0bGUxU3R5bGUgPSB7XHJcblx0cG9zaXRpb246ICdhYnNvbHV0ZScsXHJcblx0dG9wOlwiMzAlXCIsXHJcblx0bGVmdDpcIjUwJVwiLFxyXG5cdG1hcmdpbkxlZnQ6XCItMzAwcHhcIixcclxuXHQnei1pbmRleCc6IDAsXHJcblx0Y29sb3I6J3doaXRlJyxcclxuXHRmb250RmFtaWx5OiAnQW50b24nICwgXHJcblx0Zm9udFNpemU6IDUwLCAgICBcclxuXHRwYWRkaW5nOiAyMCBcclxufTtcclxuXHJcbmNvbnN0IHRpdGxlMlN0eWxlID0ge1xyXG5cdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG5cdHRvcDpcIjUwJVwiLFxyXG5cdGxlZnQ6XCI1MCVcIixcclxuXHRtYXJnaW5MZWZ0OlwiLTE3MHB4XCIsXHJcblx0J3otaW5kZXgnOiAtMTAsXHJcblx0Y29sb3I6J3doaXRlJyxcclxuXHRmb250RmFtaWx5OiAnUm9ib3RvJywgXHJcblx0Zm9udFNpemU6IDIwLCAgICBcclxuXHRwYWRkaW5nOiAyMCBcclxufTtcclxuXHJcbmNvbnN0IGNyb3dkc291cmNlZF90ZXh0ID0ge1xyXG5cdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG5cdHRvcDo0MDAsXHJcblx0bGVmdDpcIjUwJVwiLFxyXG5cdG1hcmdpbkxlZnQ6XCItMTkwcHhcIixcclxuXHQnei1pbmRleCc6IC0xMCxcclxuXHRjb2xvcjond2hpdGUnLFxyXG5cdGZvbnRGYW1pbHk6ICdSb2JvdG8nLCBcclxuXHRmb250U2l6ZTogMjAsICAgIFxyXG5cdHBhZGRpbmc6IDIwIFxyXG59O1xyXG5cclxuY29uc3QgdGV4dE92ZXJWaWRlbyA9IHtcclxuXHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuXHR0b3A6NDgwLFxyXG5cdGxlZnQ6XCI1MCVcIixcclxuXHRtYXJnaW5MZWZ0OlwiLTE0MHB4XCIsXHJcblx0J3otaW5kZXgnOiAxMCxcclxuXHRjb2xvcjonYmxhY2snLFxyXG5cdGZvbnRGYW1pbHk6ICdBbnRvbicgLCBcclxuXHRmb250U2l6ZTogMTAwLCAgICBcclxuXHRwYWRkaW5nOiAyMCBcclxufTtcclxuXHJcbmNvbnN0IHRpdGxlM1N0eWxlID0ge1xyXG5cdGNvbG9yOid3aGl0ZScgLFxyXG5cdGZvbnRGYW1pbHk6ICdJbXBhY3QnICwgXHJcblx0Zm9udFNpemU6IDUwLCBcclxuXHRwYWRkaW5nOiAyMCwgXHJcbn07XHJcblxyXG5jb25zdCBibGFja0JhciA9IHtcclxuXHRiYWNrZ3JvdW5kQ29sb3I6J2JsYWNrJyxcclxuXHRoZWlnaHQ6MjAgfTtcclxuXHRcclxuY29uc3QgcGxhbiA9IHtcclxuXHRiYWNrZ3JvdW5kSW1hZ2U6XCJ1cmwoLi4vc3RhdGljL3BsYXRhZm9ybWEuc3ZnKVwiLFxyXG5cdGJhY2tncm91bmRTaXplOiBcImNvbnRhaW5cIixcclxuXHRiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG5cdGhlaWdodDo5MDAgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvVGhlQ29udGFpbmVyLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBU0E7QUFWQTtBQVlBOzs7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUFBO0FBRUE7QUFGQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBS0E7QUFMQTtBQUtBO0FBQ0E7QUFEQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFJQTtBQUpBO0FBSUE7QUFBQTtBQU9BO0FBUEE7Ozs7Ozs7Ozs7O0FBV0E7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFMQTs7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBQ0E7QUFSQTtBQUNBO0FBZUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFSQTtBQUNBO0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFSQTtBQUNBO0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFSQTtBQUNBO0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFSQTtBQUNBO0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBQ0E7QUFLQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==