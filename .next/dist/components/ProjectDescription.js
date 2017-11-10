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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ProjectIdea = require('./ProjectIdea');

var _ProjectIdea2 = _interopRequireDefault(_ProjectIdea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/hugofnesteves/Desktop/React/Fogos1/components/ProjectDescription.js';


//var ScrollArea = require('react-scrollbar/no-css');

var ProjectDescription = function (_React$Component) {
  (0, _inherits3.default)(ProjectDescription, _React$Component);

  function ProjectDescription() {
    (0, _classCallCheck3.default)(this, ProjectDescription);

    return (0, _possibleConstructorReturn3.default)(this, (ProjectDescription.__proto__ || (0, _getPrototypeOf2.default)(ProjectDescription)).call(this));
  }

  (0, _createClass3.default)(ProjectDescription, [{
    key: 'mouseHover',
    value: function mouseHover() {}

    //https://www.gofundme.com/plataforma-antifogos-100-civil

    //https://www.qualcomm.com/news/onq/2017/05/03/qualcomm-technologies-releases-lte-drone-trial-results


  }, {
    key: 'render',
    value: function render() {

      var descript_full1 = "O primeiro passo é construir um drone solar de testes, que consiga voar durante horas, controlado remotamente por LTE, demonstrando assim a credibilidade do projecto.";
      var descript_full2 = "Com drone já construído, podemos já demonstrar a sua utilidade extrema ao transmitir conteúdo em directo para uma base. Segundo passo passa por usar cloud image processing (Amazon, IBM) para detectar anomalias automaticamente. (e.g. Fogos)";
      var descript_full3 = "Uma das capacidades imediatas do HW previamente instalado no Drone, é a possibilidade de vigia e controlo de descargas ou outras situações sensíveis a negligências/crimes contra o ambiente.";
      var descript_full4 = "O último passo será criar condições de software e de logística para que uma frota significativa possa circular e recolher dados valiosos de forma autónoma, controlada e segura.";

      return _react2.default.createElement('div', { style: { display: "flex", flex: 1, flexWrap: "wrap", width: "100%", padding: 5 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, ' ', _react2.default.createElement('p', { style: bigProjectTitle, __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, ' PLATAFORMA ANTI-FOGOS '), ' '), _react2.default.createElement('div', { style: projectsContainer, __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement(_ProjectIdea2.default, { title: 'Avi\xE3o Solar', descript2: '1', descript_full: descript_full1, imageURL: '../static/solar_rcPlane.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }), _react2.default.createElement(_ProjectIdea2.default, { title: 'Vigil\xE2ncia das Florestas', descript2: '2', descript_full: descript_full2, imageURL: '../static/floresta_small.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), _react2.default.createElement(_ProjectIdea2.default, { title: 'Crimes ambientais', descript2: '3', descript_full: descript_full3, imageURL: '../static/water_pollution.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }), _react2.default.createElement(_ProjectIdea2.default, { title: 'Plataforma final', descript2: 'OMG2', descript_full: descript_full4, imageURL: '../static/mission_planner.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      })));
    }
  }]);

  return ProjectDescription;
}(_react2.default.Component);

exports.default = ProjectDescription;


var bigProjectTitle = {
  position: 'absolute',
  top: -40,
  left: "30%",
  'z-index': 10,
  color: 'white',
  fontFamily: 'Anton',
  fontSize: 50,
  padding: 0,
  webkitTextStrokeWidth: "2px",
  webkitTextStrokeColor: "black"
};

var projectsContainer = {
  display: "flex",
  flex: 1,
  flexWrap: "wrap",
  paddingTop: 80,
  marginLeft: "50px"
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUHJvamVjdERlc2NyaXB0aW9uLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJQcm9qZWN0SWRlYSIsIlByb2plY3REZXNjcmlwdGlvbiIsImRlc2NyaXB0X2Z1bGwxIiwiZGVzY3JpcHRfZnVsbDIiLCJkZXNjcmlwdF9mdWxsMyIsImRlc2NyaXB0X2Z1bGw0IiwiZGlzcGxheSIsImZsZXgiLCJmbGV4V3JhcCIsIndpZHRoIiwicGFkZGluZyIsImJpZ1Byb2plY3RUaXRsZSIsInByb2plY3RzQ29udGFpbmVyIiwiQ29tcG9uZW50IiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiY29sb3IiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJ3ZWJraXRUZXh0U3Ryb2tlV2lkdGgiLCJ3ZWJraXRUZXh0U3Ryb2tlQ29sb3IiLCJwYWRkaW5nVG9wIiwibWFyZ2luTGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFBaUI7Ozs7Ozs7OztBQUd4Qjs7SSxBQUVxQjs4Q0FFbkI7O2dDQUFlO3dDQUFBOzttSkFJVDs7Ozs7aUNBR0ksQUFHWCxDQUVBOztBQUVDOzs7Ozs7OzZCQUdTLEFBRVA7O1VBQUksaUJBQUosQUFBcUIsQUFDckI7VUFBSSxpQkFBSixBQUFxQixBQUNyQjtVQUFJLGlCQUFKLEFBQXFCLEFBQ3JCO1VBQUksaUJBQUosQUFBcUIsQUFFckI7OzZCQUNFLGNBQUEsU0FBSyxPQUFPLEVBQUMsU0FBRCxBQUFVLFFBQVEsTUFBbEIsQUFBdUIsR0FBSSxVQUEzQixBQUFvQyxRQUFRLE9BQTVDLEFBQWtELFFBQVEsU0FBdEUsQUFBWSxBQUFrRTtvQkFBOUU7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQU0scUJBQUEsY0FBQSxPQUFHLE9BQUgsQUFBVTtvQkFBVjtzQkFBQTtBQUFBO1NBQU4sQUFBTSw0QkFEUixBQUNFLEFBQ0Esc0JBQUEsY0FBQSxTQUFLLE9BQUwsQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyx1Q0FBWSxPQUFiLEFBQW1CLGtCQUFlLFdBQWxDLEFBQTRDLEtBQUksZUFBaEQsQUFBK0QsZ0JBQWlCLFVBQWhGLEFBQXlGO29CQUF6RjtzQkFERixBQUNFLEFBQ0E7QUFEQTswQkFDQSxBQUFDLHVDQUFZLE9BQWIsQUFBbUIsK0JBQTRCLFdBQS9DLEFBQXlELEtBQUksZUFBN0QsQUFBNEUsZ0JBQWdCLFVBQTVGLEFBQXFHO29CQUFyRztzQkFGRixBQUVFLEFBQ0E7QUFEQTswQkFDQSxBQUFDLHVDQUFZLE9BQWIsQUFBbUIscUJBQXFCLFdBQXhDLEFBQWtELEtBQUksZUFBdEQsQUFBcUUsZ0JBQWdCLFVBQXJGLEFBQThGO29CQUE5RjtzQkFIRixBQUdFLEFBQ0Y7QUFERTswQkFDRixBQUFDLHVDQUFZLE9BQWIsQUFBbUIsb0JBQW9CLFdBQXZDLEFBQWlELFFBQU8sZUFBeEQsQUFBdUUsZ0JBQWlCLFVBQXhGLEFBQWlHO29CQUFqRztzQkFQSixBQUNFLEFBRUUsQUFJQSxBQUlMO0FBSks7Ozs7OztFQWpDd0MsZ0JBQU0sQTs7a0IsQUFBakM7OztBQXdDckIsSUFBTTtZQUFrQixBQUNiLEFBQ1Q7T0FBSSxDQUZrQixBQUVqQixBQUNMO1FBSHNCLEFBR2pCLEFBQ0w7YUFKc0IsQUFJWCxBQUNaO1NBTHVCLEFBS2pCLEFBQ047Y0FOdUIsQUFNWCxBQUNaO1lBUHVCLEFBT2IsQUFDVjtXQVJ1QixBQVFkLEFBQ1Q7eUJBVHVCLEFBU0EsQUFDdEI7eUJBVkYsQUFBd0IsQUFVQztBQVZELEFBQ3RCOztBQVlGLElBQU07V0FBb0IsQUFDakIsQUFDVDtRQUYwQixBQUVyQixBQUNMO1lBSDBCLEFBR2pCLEFBQ1Q7Y0FKMEIsQUFJZixBQUNYO2NBTEEsQUFBMEIsQUFLZjtBQUxlLEFBQzFCIiwiZmlsZSI6IlByb2plY3REZXNjcmlwdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvaHVnb2ZuZXN0ZXZlcy9EZXNrdG9wL1JlYWN0L0ZvZ29zMSJ9