'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SimpleMediaCard;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('material-ui/styles');

var _Card = require('material-ui/Card');

var _Card2 = _interopRequireDefault(_Card);

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Typography = require('material-ui/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/hugofnesteves/Desktop/React/Fogos1/components/ProjectIdea.js';
function SimpleMediaCard(props) {

  return _react2.default.createElement('div', { style: { padding: 10, minHeight: 600 }, __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement(_Card2.default, { style: { heigh: "25%", width: 300 }, __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement(_Card.CardMedia, { style: { padding: 120 },
    image: props.imageURL,
    title: 'Contemplative Reptile',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement(_Card.CardContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement(_Typography2.default, { type: 'headline', component: 'h2', style: { fontSize: "2em", color: "gray" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, props.title), _react2.default.createElement(_Typography2.default, { component: 'p', __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, props.descript_full))));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUHJvamVjdElkZWEuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJ3aXRoU3R5bGVzIiwiQ2FyZCIsIkNhcmRBY3Rpb25zIiwiQ2FyZENvbnRlbnQiLCJDYXJkTWVkaWEiLCJCdXR0b24iLCJUeXBvZ3JhcGh5IiwiU2ltcGxlTWVkaWFDYXJkIiwicHJvcHMiLCJwYWRkaW5nIiwibWluSGVpZ2h0IiwiaGVpZ2giLCJ3aWR0aCIsImltYWdlVVJMIiwiZm9udFNpemUiLCJjb2xvciIsInRpdGxlIiwiZGVzY3JpcHRfZnVsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFPLEFBQVEsQUFBYSxBQUFhOzs7O0FBQ3pDLEFBQU87Ozs7QUFDUCxBQUFPLEFBR1A7Ozs7Ozs7QUFBZSxTQUFBLEFBQVMsZ0JBQVQsQUFBeUIsT0FBTyxBQUU3Qzs7eUJBQ0UsY0FBQSxTQUFLLE9BQU8sRUFBQyxTQUFELEFBQVMsSUFBSyxXQUExQixBQUFZLEFBQXdCO2dCQUFwQztrQkFBQSxBQUNFO0FBREY7R0FBQSxrQkFDRSxBQUFDLGdDQUFLLE9BQU8sRUFBQyxPQUFELEFBQU8sT0FBTyxPQUEzQixBQUFhLEFBQW9CO2dCQUFqQztrQkFBQSxBQUNFO0FBREY7cUJBQ0UsQUFBQyxpQ0FBVSxPQUFPLEVBQUUsU0FBcEIsQUFBa0IsQUFBVSxBQUMxQjtXQUFPLE1BRFQsQUFDZSxBQUNiO1dBRkYsQUFFUTs7Z0JBRlI7a0JBREYsQUFDRSxBQUlBO0FBSkE7c0JBSUEsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsQUFBQyxzQ0FBVyxNQUFaLEFBQWlCLFlBQVcsV0FBNUIsQUFBc0MsTUFBSyxPQUFPLEVBQUMsVUFBRCxBQUFVLE9BQU0sT0FBbEUsQUFBa0QsQUFBc0I7Z0JBQXhFO2tCQUFBLEFBQ0c7QUFESDtXQURGLEFBQ0UsQUFDUyxBQUVULHdCQUFBLEFBQUMsc0NBQVcsV0FBWixBQUFzQjtnQkFBdEI7a0JBQUEsQUFDRztBQURIO1dBWFIsQUFDRSxBQUNFLEFBS0UsQUFJRSxBQUNTLEFBY2xCIiwiZmlsZSI6IlByb2plY3RJZGVhLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9odWdvZm5lc3RldmVzL0Rlc2t0b3AvUmVhY3QvRm9nb3MxIn0=