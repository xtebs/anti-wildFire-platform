'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _reactParallax = require('react-parallax');

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ProjectDescription = require('../components/ProjectDescription');

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