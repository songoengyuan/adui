"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _popTrigger = _interopRequireDefault(require("../pop-trigger"));

var _configProvider = require("../config-provider");

var _placements = _interopRequireDefault(require("./placements"));

var _Popup = _interopRequireDefault(require("./Popup"));

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = "adui-tooltip";
var Tooltip = (0, _react.forwardRef)(function (_ref, ref) {
  var alignEdge = _ref.alignEdge,
      autoAdjustPlacement = _ref.autoAdjustPlacement,
      children = _ref.children,
      defaultVisible = _ref.defaultVisible,
      getPopupContainer = _ref.getPopupContainer,
      onVisibleChange = _ref.onVisibleChange,
      placementProp = _ref.placement,
      popup = _ref.popup,
      popupClassName = _ref.popupClassName,
      popupStyle = _ref.popupStyle,
      trigger = _ref.trigger,
      visibleProp = _ref.visible,
      otherProps = _objectWithoutProperties(_ref, ["alignEdge", "autoAdjustPlacement", "children", "defaultVisible", "getPopupContainer", "onVisibleChange", "placement", "popup", "popupClassName", "popupStyle", "trigger", "visible"]);

  var triggerRef = (0, _react.useRef)();

  var _useState = (0, _react.useState)(placementProp || "bottom"),
      _useState2 = _slicedToArray(_useState, 2),
      placement = _useState2[0],
      setPlacement = _useState2[1];

  var _useState3 = (0, _react.useState)(visibleProp),
      _useState4 = _slicedToArray(_useState3, 2),
      visible = _useState4[0],
      setVisible = _useState4[1];

  (0, _react.useImperativeHandle)(ref, function () {
    return {
      current: triggerRef.current
    };
  });

  if (visibleProp !== null && visible !== visibleProp) {
    setVisible(!!visibleProp);
  }

  var _useContext = (0, _react.useContext)(_configProvider.ConfigContext),
      getPopupContainerContext = _useContext.getPopupContainer;

  var getPopupStyle = function getPopupStyle() {
    var transformOrigin = {
      x: "50%",
      y: "50%"
    };
    var extraStyle = {};

    if (popupStyle) {
      if (placement.indexOf("top") === 0) {
        transformOrigin.y = "100%";

        if (typeof popupStyle.paddingBottom === "undefined" && typeof popupStyle.padding === "undefined") {
          extraStyle.paddingBottom = "8px";
        }
      } else if (placement.indexOf("bottom") === 0) {
        transformOrigin.y = "-4px";

        if (typeof popupStyle.paddingTop === "undefined" && typeof popupStyle.padding === "undefined") {
          extraStyle.paddingTop = "8px";
        }
      } else if (placement.indexOf("right") === 0) {
        transformOrigin.x = "0%";

        if (typeof popupStyle.paddingLeft === "undefined" && typeof popupStyle.padding === "undefined") {
          extraStyle.paddingLeft = "8px";
        }
      } else if (placement.indexOf("left") === 0) {
        transformOrigin.x = "100%";

        if (typeof popupStyle.paddingRight === "undefined" && typeof popupStyle.padding === "undefined") {
          extraStyle.paddingRight = "8px";
        }
      }

      if (placement.includes("Left")) {
        transformOrigin.x = "18px";
      } else if (placement.includes("Right")) {
        transformOrigin.x = "calc(100% - 18px)";
      } else if (placement.includes("Top")) {
        transformOrigin.y = "10px";
      } else if (placement.includes("Bottom")) {
        transformOrigin.y = "calc(100% - 10px)";
      }

      extraStyle.transformOrigin = "".concat(transformOrigin.x, " ").concat(transformOrigin.y);
    }

    return _objectSpread(_objectSpread({}, extraStyle), popupStyle);
  };

  var handlePopupAlign = function handlePopupAlign(node) {
    var rect = node.getBoundingClientRect();
    var width = rect.width,
        height = rect.height,
        Y = rect.top,
        X = rect.left;
    var newPlacement = placement;
    setTimeout(function () {
      if (triggerRef.current && triggerRef.current.getRootDomNode && placementProp) {
        var wrapperRect = triggerRef.current.getRootDomNode().getBoundingClientRect();

        if (placementProp.indexOf("top") === 0) {
          if (Y < 0 && placement.indexOf("top") === 0) {
            newPlacement = "bottom".concat(placement.slice(3));
          }

          if (Y > rect.height + wrapperRect.height + 8 && placement.indexOf("bottom") === 0) {
            newPlacement = "top".concat(placement.slice(6));
          }
        }

        if (placementProp.indexOf("bottom") === 0) {
          if (Y + height > window.innerHeight && placement.indexOf("bottom") === 0) {
            newPlacement = "top".concat(placement.slice(6));
          }

          if (wrapperRect.top + wrapperRect.height + height + 8 < window.innerHeight && placement.indexOf("top") === 0) {
            newPlacement = "bottom".concat(placement.slice(3));
          }
        }

        if (width + X > window.innerWidth) {
          if (["topLeft", "top", "bottomLeft", "bottom"].includes(newPlacement)) {
            newPlacement = "".concat(newPlacement.replace("Left", ""), "Right");
          }
        } else if (X < 0) {
          if (["topRight", "top", "bottomRight", "bottom"].includes(newPlacement)) {
            newPlacement = "".concat(newPlacement.replace("Right", ""), "Left");
          }
        }

        if (node.className.includes("-top")) {
          var nodeTop = node.style.top || "0";
          node.style.top = "unset";
          node.style.bottom = "-".concat(parseInt(nodeTop, 10) + height, "px");
        }

        if (placementProp.indexOf("left") === 0) {
          if (X < 0 && placement.indexOf("left") === 0) {
            newPlacement = "right".concat(placement.slice(4));
          }

          if (X > rect.width + wrapperRect.width + 8 && placement.indexOf("right") === 0) {
            newPlacement = "left".concat(placement.slice(5));
          }
        }

        if (placementProp.indexOf("right") === 0) {
          if (X + width > window.innerWidth && placement.indexOf("right") === 0) {
            newPlacement = "left".concat(placement.slice(5));
          }

          if (wrapperRect.left + wrapperRect.width + width + 8 < window.innerWidth && placement.indexOf("left") === 0) {
            newPlacement = "right".concat(placement.slice(4));
          }
        }

        if (newPlacement !== placement) {
          setPlacement(newPlacement);

          if (triggerRef.current.forcePopupAlign) {
            triggerRef.current.forcePopupAlign();
          }
        }
      }
    }, 0);
  };

  var handleVisibleChange = function handleVisibleChange(bool) {
    if (visibleProp === null) {
      setVisible(bool);
    }

    if (onVisibleChange) {
      onVisibleChange(bool);
    }
  };

  return _react["default"].createElement(_popTrigger["default"], _extends({
    popupClassName: (0, _classnames["default"])(popupClassName, "".concat(prefix, "-base"), "".concat(prefix, "-base-").concat(placement)),
    ref: triggerRef,
    action: trigger ? [trigger] : ["hover"],
    builtinPlacements: (0, _placements["default"])({
      alignEdge: alignEdge,
      autoAdjustPlacement: autoAdjustPlacement
    }),
    defaultPopupVisible: defaultVisible,
    getPopupContainer: getPopupContainer || getPopupContainerContext,
    onPopupVisibleChange: handleVisibleChange,
    onPopupAlign: handlePopupAlign,
    popup: _react["default"].createElement(_Popup["default"], {
      content: popup,
      trigger: triggerRef.current
    }),
    popupPlacement: placement,
    popupStyle: getPopupStyle(),
    popupVisible: visible
  }, otherProps), children);
});
Tooltip.displayName = "Tooltip";
Tooltip.propTypes = {
  alignEdge: _propTypes["default"].bool,
  autoAdjustPlacement: _propTypes["default"].bool,
  children: _propTypes["default"].node,
  defaultVisible: _propTypes["default"].oneOf([null, true, false]),
  getPopupContainer: _propTypes["default"].func,
  mouseEnterDelay: _propTypes["default"].number,
  mouseLeaveDelay: _propTypes["default"].number,
  onVisibleChange: _propTypes["default"].func,
  placement: _propTypes["default"].oneOf(["top", "left", "right", "bottom", "topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]),
  popup: _propTypes["default"].node,
  popupClassName: _propTypes["default"].string,
  popupStyle: _propTypes["default"].object,
  popupTransitionName: _propTypes["default"].string,
  trigger: _propTypes["default"].oneOf(["hover", "focus", "click"]),
  visible: _propTypes["default"].oneOf([null, true, false])
};
Tooltip.defaultProps = {
  alignEdge: false,
  autoAdjustPlacement: true,
  children: "",
  defaultVisible: null,
  getPopupContainer: null,
  mouseEnterDelay: 0,
  mouseLeaveDelay: 0.1,
  onVisibleChange: function onVisibleChange() {},
  placement: "bottom",
  popup: "复制",
  popupClassName: "",
  popupStyle: {},
  popupTransitionName: "zoom-big-fast",
  trigger: "hover",
  visible: null
};
var _default = Tooltip;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdG9vbHRpcC9Ub29sdGlwLnRzeCJdLCJuYW1lcyI6WyJwcmVmaXgiLCJUb29sdGlwIiwicmVmIiwiYWxpZ25FZGdlIiwiYXV0b0FkanVzdFBsYWNlbWVudCIsImNoaWxkcmVuIiwiZGVmYXVsdFZpc2libGUiLCJnZXRQb3B1cENvbnRhaW5lciIsIm9uVmlzaWJsZUNoYW5nZSIsInBsYWNlbWVudFByb3AiLCJwbGFjZW1lbnQiLCJwb3B1cCIsInBvcHVwQ2xhc3NOYW1lIiwicG9wdXBTdHlsZSIsInRyaWdnZXIiLCJ2aXNpYmxlUHJvcCIsInZpc2libGUiLCJvdGhlclByb3BzIiwidHJpZ2dlclJlZiIsInNldFBsYWNlbWVudCIsInNldFZpc2libGUiLCJjdXJyZW50IiwiQ29uZmlnQ29udGV4dCIsImdldFBvcHVwQ29udGFpbmVyQ29udGV4dCIsImdldFBvcHVwU3R5bGUiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJ4IiwieSIsImV4dHJhU3R5bGUiLCJpbmRleE9mIiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmciLCJwYWRkaW5nVG9wIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJpbmNsdWRlcyIsImhhbmRsZVBvcHVwQWxpZ24iLCJub2RlIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwiWSIsInRvcCIsIlgiLCJsZWZ0IiwibmV3UGxhY2VtZW50Iiwic2V0VGltZW91dCIsImdldFJvb3REb21Ob2RlIiwid3JhcHBlclJlY3QiLCJjb25jYXQiLCJzbGljZSIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiaW5uZXJXaWR0aCIsInJlcGxhY2UiLCJjbGFzc05hbWUiLCJub2RlVG9wIiwic3R5bGUiLCJib3R0b20iLCJwYXJzZUludCIsImZvcmNlUG9wdXBBbGlnbiIsImhhbmRsZVZpc2libGVDaGFuZ2UiLCJib29sIiwiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZiIsImZ1bmMiLCJtb3VzZUVudGVyRGVsYXkiLCJudW1iZXIiLCJtb3VzZUxlYXZlRGVsYXkiLCJzdHJpbmciLCJvYmplY3QiLCJwb3B1cFRyYW5zaXRpb25OYW1lIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFPQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsY0FBZjtBQXdFQSxJQUFNQyxPQUVMLEdBQUcsdUJBQ0YsZ0JBZ0JFQyxHQWhCRixFQWlCSztBQUFBLE1BZkRDLFNBZUMsUUFmREEsU0FlQztBQUFBLE1BZERDLG1CQWNDLFFBZERBLG1CQWNDO0FBQUEsTUFiREMsUUFhQyxRQWJEQSxRQWFDO0FBQUEsTUFaREMsY0FZQyxRQVpEQSxjQVlDO0FBQUEsTUFYREMsaUJBV0MsUUFYREEsaUJBV0M7QUFBQSxNQVZEQyxlQVVDLFFBVkRBLGVBVUM7QUFBQSxNQVRVQyxhQVNWLFFBVERDLFNBU0M7QUFBQSxNQVJEQyxLQVFDLFFBUkRBLEtBUUM7QUFBQSxNQVBEQyxjQU9DLFFBUERBLGNBT0M7QUFBQSxNQU5EQyxVQU1DLFFBTkRBLFVBTUM7QUFBQSxNQUxEQyxPQUtDLFFBTERBLE9BS0M7QUFBQSxNQUpRQyxXQUlSLFFBSkRDLE9BSUM7QUFBQSxNQUhFQyxVQUdGOztBQUNILE1BQU1DLFVBQVUsR0FBRyxvQkFBbkI7O0FBREcsa0JBRStCLHFCQUFTVCxhQUFhLElBQUksUUFBMUIsQ0FGL0I7QUFBQTtBQUFBLE1BRUlDLFNBRko7QUFBQSxNQUVlUyxZQUZmOztBQUFBLG1CQUcyQixxQkFBU0osV0FBVCxDQUgzQjtBQUFBO0FBQUEsTUFHSUMsT0FISjtBQUFBLE1BR2FJLFVBSGI7O0FBS0gsa0NBQW9CbEIsR0FBcEIsRUFBeUI7QUFBQSxXQUFPO0FBQzlCbUIsTUFBQUEsT0FBTyxFQUFFSCxVQUFVLENBQUNHO0FBRFUsS0FBUDtBQUFBLEdB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RCxFQUFBQSxlQUFlLEVBQUUsQ0FOSTtBQU9yQkUsRUFBQUEsZUFBZSxFQUFFLEdBUEk7QUFRckIvRCxFQUFBQSxlQUFlLEVBQUUsMkJBQU0sQ0FBRSxDQVJKO0FBU3JCRSxFQUFBQSxTQUFTLEVBQUUsUUFUVTtBQVVyQkMsRUFBQUEsS0FBSyxFQUFFLElBVmM7QUFXckJDLEVBQUFBLGNBQWMsRUFBRSxFQVhLO0FBWXJCQyxFQUFBQSxVQUFVLEVBQUUsRUFaUztBQWFyQjZELEVBQUFBLG1CQUFtQixFQUFFLGVBYkE7QUFjckI1RCxFQUFBQSxPQUFPLEVBQUUsT0FkWTtBQWVyQkUsRUFBQUEsT0FBTyxFQUFFO0FBZlksQ0FBdkI7ZUFrQmVmLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcbiAgZm9yd2FyZFJlZixcbiAgdXNlQ29udGV4dCxcbiAgdXNlSW1wZXJhdGl2ZUhhbmRsZSxcbiAgdXNlUmVmLFxuICB1c2VTdGF0ZSxcbn0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IFBvcFRyaWdnZXIsIHsgSVRyaWdnZXIsIFBsYWNlbWVudCB9IGZyb20gXCIuLi9wb3AtdHJpZ2dlclwiXG5pbXBvcnQgeyBDb25maWdDb250ZXh0IH0gZnJvbSBcIi4uL2NvbmZpZy1wcm92aWRlclwiXG5pbXBvcnQgZ2V0UGxhY2VtZW50cyBmcm9tIFwiLi9wbGFjZW1lbnRzXCJcbmltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cFwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLXRvb2x0aXBcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElUb29sdGlwUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOaYr+WQpui+uee8mOWvuem9kFxuICAgKi9cbiAgYWxpZ25FZGdlPzogYm9vbGVhblxuICAvKipcbiAgICog6Ieq5Yqo6LCD5pW05L2N572uXG4gICAqL1xuICBhdXRvQWRqdXN0UGxhY2VtZW50PzogYm9vbGVhblxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog5rCU5rOh5o+Q56S65piv5ZCm6buY6K6k5pi+56S6XG4gICAqL1xuICBkZWZhdWx0VmlzaWJsZT86IG51bGwgfCBib29sZWFuXG4gIC8qKlxuICAgKiDmjIflrprmsJTms6Hmj5DnpLrnmoTniLbnuqfvvIzpu5jorqTkuLogZG9jdW1lbnQuYm9keVxuICAgKi9cbiAgZ2V0UG9wdXBDb250YWluZXI/OiBudWxsIHwgKChub2RlOiBIVE1MRWxlbWVudCkgPT4gSFRNTEVsZW1lbnQpXG4gIC8qKlxuICAgKiBtb3VzZUVudGVyIOaYvuekuueahOW7tuaXtu+8jOWNleS9je+8mnPvvIzlj6rlnKggdHJpZ2dlcj1cImhvdmVyXCIg5pe25pyJ5pWIXG4gICAqL1xuICBtb3VzZUVudGVyRGVsYXk/OiBudW1iZXJcbiAgLyoqXG4gICAqIG1vdXNlTGVhdmUg5raI5aSx55qE5bu25pe277yM5Y2V5L2N77yac++8jOWPquWcqCB0cmlnZ2VyPVwiaG92ZXJcIiDml7bmnInmlYhcbiAgICovXG4gIG1vdXNlTGVhdmVEZWxheT86IG51bWJlclxuICAvKipcbiAgICog5pi+56S65Y+R55Sf5Y+Y5YyW5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uVmlzaWJsZUNoYW5nZT86ICh2aXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG4gIC8qKlxuICAgKiDlvLnlh7rlsYLkvY3nva5cbiAgICovXG4gIHBvcHVwPzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDlvLnlh7rlhoXlrrlcbiAgICovXG4gIHBvcHVwQ2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDmsJTms6Hmj5DnpLrnmoTpmYTliqDnsbvlkI1cbiAgICovXG4gIHBvcHVwVHJhbnNpdGlvbk5hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOawlOazoeaPkOekuueahOmZhOWKoOagt+W8j1xuICAgKi9cbiAgcGxhY2VtZW50PzogUGxhY2VtZW50XG4gIC8qKlxuICAgKiDlvLnlh7rmoYbnmoTliqjnlLvnsbvlkI3vvIzliqjnlLvmoLzlvI/pgbXlvqogcmMtYW5pbWF0ZVxuICAgKi9cbiAgcG9wdXBTdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXMgfCBudWxsXG4gIC8qKlxuICAgKiDop6blj5HmlrnlvI9cbiAgICovXG4gIHRyaWdnZXI/OiBcImhvdmVyXCIgfCBcImZvY3VzXCIgfCBcImNsaWNrXCJcbiAgLyoqXG4gICAqIOaJi+WKqOaOp+WItuawlOazoeaPkOekuuaYr+WQpuaYvuekulxuICAgKi9cbiAgdmlzaWJsZT86IG51bGwgfCBib29sZWFuXG59XG5cbi8qKlxuICog5bel5YW35o+Q56S655So5LqO6ZKI5a+55p+Q5Liq5YWD57Sg55qE44CB6L276YeP55qE5pON5L2c6K+05piO44CCXG4gKiDkuI7msJTms6Hmj5DnpLogUG9wb3ZlciDkuI3lkIzvvIzlt6Xlhbfmj5DnpLogVG9vbHRpcCDkuI3mib/ovb3lpI3mnYLlhoXlrrnkv6Hmga/vvIzogIzkuLvopoHnlKjkuo7op6Pph4rlt6XlhbfnmoTmk43kvZzlkKvkuYnvvIzlpoLigJzlpI3liLbigJ3jgIHigJznvJbovpHigJ3jgIHigJzliKDpmaTigJ3nrYnjgIJcbiAqIFRvb2x0aXAg5piv5Z+65LqOIFBvcFRyaWdnZXIg6L+b6KGM5bCB6KOF55qE44CCXG4gKiBUb29sdGlwIOi0n+i0o+WumuS5ieeureWktOS4juWGheWuueeahOebuOWFs+agt+W8j+OAglxuICovXG5jb25zdCBUb29sdGlwOiBSZWFjdC5Gb3J3YXJkUmVmRXhvdGljQ29tcG9uZW50PFxuICBJVG9vbHRpcFByb3BzICYgUmVhY3QuUmVmQXR0cmlidXRlczxhbnk+XG4+ID0gZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIGFsaWduRWRnZSxcbiAgICAgIGF1dG9BZGp1c3RQbGFjZW1lbnQsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGRlZmF1bHRWaXNpYmxlLFxuICAgICAgZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICBvblZpc2libGVDaGFuZ2UsXG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFByb3AsXG4gICAgICBwb3B1cCxcbiAgICAgIHBvcHVwQ2xhc3NOYW1lLFxuICAgICAgcG9wdXBTdHlsZSxcbiAgICAgIHRyaWdnZXIsXG4gICAgICB2aXNpYmxlOiB2aXNpYmxlUHJvcCxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9OiBJVG9vbHRpcFByb3BzLFxuICAgIHJlZlxuICApID0+IHtcbiAgICBjb25zdCB0cmlnZ2VyUmVmID0gdXNlUmVmPElUcmlnZ2VyPigpXG4gICAgY29uc3QgW3BsYWNlbWVudCwgc2V0UGxhY2VtZW50XSA9IHVzZVN0YXRlKHBsYWNlbWVudFByb3AgfHwgXCJib3R0b21cIilcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZSh2aXNpYmxlUHJvcClcblxuICAgIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKSA9PiAoe1xuICAgICAgY3VycmVudDogdHJpZ2dlclJlZi5jdXJyZW50LFxuICAgIH0pKVxuXG4gICAgLy8g55u45b2T5LqO55Sf5ZG95ZGo5pyfIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1xuICAgIGlmICh2aXNpYmxlUHJvcCAhPT0gbnVsbCAmJiB2aXNpYmxlICE9PSB2aXNpYmxlUHJvcCkge1xuICAgICAgc2V0VmlzaWJsZSghIXZpc2libGVQcm9wKVxuICAgIH1cblxuICAgIGNvbnN0IHsgZ2V0UG9wdXBDb250YWluZXI6IGdldFBvcHVwQ29udGFpbmVyQ29udGV4dCB9ID0gdXNlQ29udGV4dChcbiAgICAgIENvbmZpZ0NvbnRleHRcbiAgICApXG5cbiAgICAvKipcbiAgICAgKiDmoLnmja4gcGxhY2VtZW50IOiuvue9ruebuOWFs+agt+W8j1xuICAgICAqL1xuICAgIGNvbnN0IGdldFBvcHVwU3R5bGUgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0cmFuc2Zvcm1PcmlnaW4gPSB7XG4gICAgICAgIHg6IFwiNTAlXCIsXG4gICAgICAgIHk6IFwiNTAlXCIsXG4gICAgICB9XG4gICAgICBjb25zdCBleHRyYVN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge31cbiAgICAgIGlmIChwb3B1cFN0eWxlKSB7XG4gICAgICAgIGlmIChwbGFjZW1lbnQuaW5kZXhPZihcInRvcFwiKSA9PT0gMCkge1xuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbi55ID0gXCIxMDAlXCJcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0eXBlb2YgcG9wdXBTdHlsZS5wYWRkaW5nQm90dG9tID09PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgICAgICB0eXBlb2YgcG9wdXBTdHlsZS5wYWRkaW5nID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBleHRyYVN0eWxlLnBhZGRpbmdCb3R0b20gPSBcIjhweFwiXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHBsYWNlbWVudC5pbmRleE9mKFwiYm90dG9tXCIpID09PSAwKSB7XG4gICAgICAgICAgdHJhbnNmb3JtT3JpZ2luLnkgPSBcIi00cHhcIlxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHR5cGVvZiBwb3B1cFN0eWxlLnBhZGRpbmdUb3AgPT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgICAgIHR5cGVvZiBwb3B1cFN0eWxlLnBhZGRpbmcgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGV4dHJhU3R5bGUucGFkZGluZ1RvcCA9IFwiOHB4XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocGxhY2VtZW50LmluZGV4T2YoXCJyaWdodFwiKSA9PT0gMCkge1xuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbi54ID0gXCIwJVwiXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdHlwZW9mIHBvcHVwU3R5bGUucGFkZGluZ0xlZnQgPT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgICAgIHR5cGVvZiBwb3B1cFN0eWxlLnBhZGRpbmcgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGV4dHJhU3R5bGUucGFkZGluZ0xlZnQgPSBcIjhweFwiXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHBsYWNlbWVudC5pbmRleE9mKFwibGVmdFwiKSA9PT0gMCkge1xuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbi54ID0gXCIxMDAlXCJcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0eXBlb2YgcG9wdXBTdHlsZS5wYWRkaW5nUmlnaHQgPT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgICAgIHR5cGVvZiBwb3B1cFN0eWxlLnBhZGRpbmcgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGV4dHJhU3R5bGUucGFkZGluZ1JpZ2h0ID0gXCI4cHhcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwbGFjZW1lbnQuaW5jbHVkZXMoXCJMZWZ0XCIpKSB7XG4gICAgICAgICAgdHJhbnNmb3JtT3JpZ2luLnggPSBcIjE4cHhcIlxuICAgICAgICB9IGVsc2UgaWYgKHBsYWNlbWVudC5pbmNsdWRlcyhcIlJpZ2h0XCIpKSB7XG4gICAgICAgICAgdHJhbnNmb3JtT3JpZ2luLnggPSBcImNhbGMoMTAwJSAtIDE4cHgpXCJcbiAgICAgICAgfSBlbHNlIGlmIChwbGFjZW1lbnQuaW5jbHVkZXMoXCJUb3BcIikpIHtcbiAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW4ueSA9IFwiMTBweFwiXG4gICAgICAgIH0gZWxzZSBpZiAocGxhY2VtZW50LmluY2x1ZGVzKFwiQm90dG9tXCIpKSB7XG4gICAgICAgICAgdHJhbnNmb3JtT3JpZ2luLnkgPSBcImNhbGMoMTAwJSAtIDEwcHgpXCJcbiAgICAgICAgfVxuICAgICAgICBleHRyYVN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9IGAke3RyYW5zZm9ybU9yaWdpbi54fSAke3RyYW5zZm9ybU9yaWdpbi55fWBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZXh0cmFTdHlsZSxcbiAgICAgICAgLi4ucG9wdXBTdHlsZSxcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmraTmlrnms5XnmoTnm67nmoTmmK/lnKggd2luZG93IOaXoOazleaYvuekuuWujOaVtCBwb3B1cCDml7bvvIzosIPmlbQgcGxhY2VtZW5077ybXG4gICAgICog5Y+v6IO95a2Y5ZyoIHgsIHkg6L206YO96ZyA6KaB6LCD5pW055qE5oOF5Ya177yMXG4gICAgICog5q+U5aaC5Zyo5bGP5bmV5Y+z5LiL6KeS55qEIFwiYm90dG9tTGVmdFwiIHx8IFwiYm90dG9tXCLvvIzpgqPkuYjnm67moIfmmK/lsIblhbbosIPmlbTkuLogXCJ0b3BSaWdodFwi44CCXG4gICAgICpcbiAgICAgKiAyMDE5MDgyODogXGLlsJ3or5XlsIYg4oCcdG9wKuKAnSDnmoQgQ1NTIOWumuS9jeS7jiB0b3A6IHh4eDsg5pS55Li6IGJvdHRvbTogeHh4O1xuICAgICAqIOWboOS4uui/meaXtuWAmeWmguaenOW8ueWHuuahhumrmOW6puWPmOWMlueahOivne+8jOS7juS4i+WumuS9jeWwseS4jeS8muacieagt+W8j+mXrumimOOAglxuICAgICAqL1xuICAgIGNvbnN0IGhhbmRsZVBvcHVwQWxpZ24gPSAobm9kZTogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHJlY3QgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIHRvcDogWSwgbGVmdDogWCB9ID0gcmVjdFxuXG4gICAgICBsZXQgbmV3UGxhY2VtZW50OiBhbnkgPSBwbGFjZW1lbnRcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0cmlnZ2VyUmVmLmN1cnJlbnQgJiZcbiAgICAgICAgICB0cmlnZ2VyUmVmLmN1cnJlbnQuZ2V0Um9vdERvbU5vZGUgJiZcbiAgICAgICAgICBwbGFjZW1lbnRQcm9wXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IHdyYXBwZXJSZWN0ID0gdHJpZ2dlclJlZi5jdXJyZW50XG4gICAgICAgICAgICAuZ2V0Um9vdERvbU5vZGUoKVxuICAgICAgICAgICAgLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogdG9wICsgYm90dG9tIOeahOWumuS9jeS8mOWMllxuICAgICAgICAgICAqIOWvuSBZIOi9tOi/m+ihjOWIpOaWrVxuICAgICAgICAgICAqL1xuICAgICAgICAgIGlmIChwbGFjZW1lbnRQcm9wLmluZGV4T2YoXCJ0b3BcIikgPT09IDApIHtcbiAgICAgICAgICAgIGlmIChZIDwgMCAmJiBwbGFjZW1lbnQuaW5kZXhPZihcInRvcFwiKSA9PT0gMCkge1xuICAgICAgICAgICAgICBuZXdQbGFjZW1lbnQgPSBcImJvdHRvbVwiLmNvbmNhdChwbGFjZW1lbnQuc2xpY2UoMykpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIFkgPiByZWN0LmhlaWdodCArIHdyYXBwZXJSZWN0LmhlaWdodCArIDggJiZcbiAgICAgICAgICAgICAgcGxhY2VtZW50LmluZGV4T2YoXCJib3R0b21cIikgPT09IDBcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBuZXdQbGFjZW1lbnQgPSBcInRvcFwiLmNvbmNhdChwbGFjZW1lbnQuc2xpY2UoNikpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChwbGFjZW1lbnRQcm9wLmluZGV4T2YoXCJib3R0b21cIikgPT09IDApIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgWSArIGhlaWdodCA+IHdpbmRvdy5pbm5lckhlaWdodCAmJlxuICAgICAgICAgICAgICBwbGFjZW1lbnQuaW5kZXhPZihcImJvdHRvbVwiKSA9PT0gMFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIG5ld1BsYWNlbWVudCA9IFwidG9wXCIuY29uY2F0KHBsYWNlbWVudC5zbGljZSg2KSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgd3JhcHBlclJlY3QudG9wICsgd3JhcHBlclJlY3QuaGVpZ2h0ICsgaGVpZ2h0ICsgOCA8XG4gICAgICAgICAgICAgICAgd2luZG93LmlubmVySGVpZ2h0ICYmXG4gICAgICAgICAgICAgIHBsYWNlbWVudC5pbmRleE9mKFwidG9wXCIpID09PSAwXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgbmV3UGxhY2VtZW50ID0gXCJib3R0b21cIi5jb25jYXQocGxhY2VtZW50LnNsaWNlKDMpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiDlr7kgWCDovbTov5vooYzliKTmlq1cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBpZiAod2lkdGggKyBYID4gd2luZG93LmlubmVyV2lkdGgpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgW1widG9wTGVmdFwiLCBcInRvcFwiLCBcImJvdHRvbUxlZnRcIiwgXCJib3R0b21cIl0uaW5jbHVkZXMobmV3UGxhY2VtZW50KVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIG5ld1BsYWNlbWVudCA9IGAke25ld1BsYWNlbWVudC5yZXBsYWNlKFwiTGVmdFwiLCBcIlwiKX1SaWdodGBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKFggPCAwKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIFtcInRvcFJpZ2h0XCIsIFwidG9wXCIsIFwiYm90dG9tUmlnaHRcIiwgXCJib3R0b21cIl0uaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgbmV3UGxhY2VtZW50XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBuZXdQbGFjZW1lbnQgPSBgJHtuZXdQbGFjZW1lbnQucmVwbGFjZShcIlJpZ2h0XCIsIFwiXCIpfUxlZnRgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8g5Yik5pat5piv5ZCm5pivIFwidG9wKlwiIOWumuS9jVxuICAgICAgICAgIGlmIChub2RlLmNsYXNzTmFtZS5pbmNsdWRlcyhcIi10b3BcIikpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGVUb3AgPSBub2RlLnN0eWxlLnRvcCB8fCBcIjBcIlxuICAgICAgICAgICAgbm9kZS5zdHlsZS50b3AgPSBcInVuc2V0XCJcbiAgICAgICAgICAgIG5vZGUuc3R5bGUuYm90dG9tID0gYC0ke3BhcnNlSW50KG5vZGVUb3AsIDEwKSArIGhlaWdodH1weGBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBsZWZ0ICsgcmlnaHQg55qE5a6a5L2N5LyY5YyWXG4gICAgICAgICAgICovXG4gICAgICAgICAgaWYgKHBsYWNlbWVudFByb3AuaW5kZXhPZihcImxlZnRcIikgPT09IDApIHtcbiAgICAgICAgICAgIGlmIChYIDwgMCAmJiBwbGFjZW1lbnQuaW5kZXhPZihcImxlZnRcIikgPT09IDApIHtcbiAgICAgICAgICAgICAgbmV3UGxhY2VtZW50ID0gXCJyaWdodFwiLmNvbmNhdChwbGFjZW1lbnQuc2xpY2UoNCkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIFggPiByZWN0LndpZHRoICsgd3JhcHBlclJlY3Qud2lkdGggKyA4ICYmXG4gICAgICAgICAgICAgIHBsYWNlbWVudC5pbmRleE9mKFwicmlnaHRcIikgPT09IDBcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBuZXdQbGFjZW1lbnQgPSBcImxlZnRcIi5jb25jYXQocGxhY2VtZW50LnNsaWNlKDUpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocGxhY2VtZW50UHJvcC5pbmRleE9mKFwicmlnaHRcIikgPT09IDApIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgWCArIHdpZHRoID4gd2luZG93LmlubmVyV2lkdGggJiZcbiAgICAgICAgICAgICAgcGxhY2VtZW50LmluZGV4T2YoXCJyaWdodFwiKSA9PT0gMFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIG5ld1BsYWNlbWVudCA9IFwibGVmdFwiLmNvbmNhdChwbGFjZW1lbnQuc2xpY2UoNSkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHdyYXBwZXJSZWN0LmxlZnQgKyB3cmFwcGVyUmVjdC53aWR0aCArIHdpZHRoICsgOCA8XG4gICAgICAgICAgICAgICAgd2luZG93LmlubmVyV2lkdGggJiZcbiAgICAgICAgICAgICAgcGxhY2VtZW50LmluZGV4T2YoXCJsZWZ0XCIpID09PSAwXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgbmV3UGxhY2VtZW50ID0gXCJyaWdodFwiLmNvbmNhdChwbGFjZW1lbnQuc2xpY2UoNCkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG5ld1BsYWNlbWVudCAhPT0gcGxhY2VtZW50KSB7XG4gICAgICAgICAgICBzZXRQbGFjZW1lbnQobmV3UGxhY2VtZW50KVxuICAgICAgICAgICAgaWYgKHRyaWdnZXJSZWYuY3VycmVudC5mb3JjZVBvcHVwQWxpZ24pIHtcbiAgICAgICAgICAgICAgdHJpZ2dlclJlZi5jdXJyZW50LmZvcmNlUG9wdXBBbGlnbigpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCAwKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVZpc2libGVDaGFuZ2UgPSAoYm9vbDogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKHZpc2libGVQcm9wID09PSBudWxsKSB7XG4gICAgICAgIHNldFZpc2libGUoYm9vbClcbiAgICAgIH1cbiAgICAgIGlmIChvblZpc2libGVDaGFuZ2UpIHtcbiAgICAgICAgb25WaXNpYmxlQ2hhbmdlKGJvb2wpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3BUcmlnZ2VyXG4gICAgICAgIHBvcHVwQ2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgIHBvcHVwQ2xhc3NOYW1lLFxuICAgICAgICAgIGAke3ByZWZpeH0tYmFzZWAsXG4gICAgICAgICAgYCR7cHJlZml4fS1iYXNlLSR7cGxhY2VtZW50fWBcbiAgICAgICAgKX1cbiAgICAgICAgcmVmPXt0cmlnZ2VyUmVmfVxuICAgICAgICBhY3Rpb249e3RyaWdnZXIgPyBbdHJpZ2dlcl0gOiBbXCJob3ZlclwiXX1cbiAgICAgICAgYnVpbHRpblBsYWNlbWVudHM9e2dldFBsYWNlbWVudHMoeyBhbGlnbkVkZ2UsIGF1dG9BZGp1c3RQbGFjZW1lbnQgfSl9XG4gICAgICAgIGRlZmF1bHRQb3B1cFZpc2libGU9e2RlZmF1bHRWaXNpYmxlfVxuICAgICAgICBnZXRQb3B1cENvbnRhaW5lcj17Z2V0UG9wdXBDb250YWluZXIgfHwgZ2V0UG9wdXBDb250YWluZXJDb250ZXh0fVxuICAgICAgICBvblBvcHVwVmlzaWJsZUNoYW5nZT17aGFuZGxlVmlzaWJsZUNoYW5nZX1cbiAgICAgICAgb25Qb3B1cEFsaWduPXtoYW5kbGVQb3B1cEFsaWdufVxuICAgICAgICBwb3B1cD17PFBvcHVwIGNvbnRlbnQ9e3BvcHVwfSB0cmlnZ2VyPXt0cmlnZ2VyUmVmLmN1cnJlbnR9IC8+fVxuICAgICAgICBwb3B1cFBsYWNlbWVudD17cGxhY2VtZW50fVxuICAgICAgICBwb3B1cFN0eWxlPXtnZXRQb3B1cFN0eWxlKCl9XG4gICAgICAgIHBvcHVwVmlzaWJsZT17dmlzaWJsZX1cbiAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvUG9wVHJpZ2dlcj5cbiAgICApXG4gIH1cbilcblxuVG9vbHRpcC5kaXNwbGF5TmFtZSA9IFwiVG9vbHRpcFwiXG5cblRvb2x0aXAucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5piv5ZCm6L6557yY5a+56b2QXG4gICAqL1xuICBhbGlnbkVkZ2U6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog6Ieq5Yqo6LCD5pW05L2N572uXG4gICAqL1xuICBhdXRvQWRqdXN0UGxhY2VtZW50OiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICog5rCU5rOh5o+Q56S65piv5ZCm6buY6K6k5pi+56S6XG4gICAqL1xuICBkZWZhdWx0VmlzaWJsZTogUHJvcFR5cGVzLm9uZU9mKFtudWxsLCB0cnVlLCBmYWxzZV0pLFxuICAvKipcbiAgICog5oyH5a6a5rCU5rOh5o+Q56S655qE54i257qn77yM6buY6K6k5Li6IGRvY3VtZW50LmJvZHlcbiAgICovXG4gIGdldFBvcHVwQ29udGFpbmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIG1vdXNlRW50ZXIg5pi+56S655qE5bu25pe277yM5Y2V5L2N77yac++8jOWPquWcqCB0cmlnZ2VyPVwiaG92ZXJcIiDml7bmnInmlYhcbiAgICovXG4gIG1vdXNlRW50ZXJEZWxheTogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIG1vdXNlTGVhdmUg5raI5aSx55qE5bu25pe277yM5Y2V5L2N77yac++8jOWPquWcqCB0cmlnZ2VyPVwiaG92ZXJcIiDml7bmnInmlYhcbiAgICovXG4gIG1vdXNlTGVhdmVEZWxheTogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIOaYvuekuuWPkeeUn+WPmOWMluaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvblZpc2libGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog5by55Ye65bGC5L2N572uXG4gICAqL1xuICBwbGFjZW1lbnQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgXCJ0b3BcIixcbiAgICBcImxlZnRcIixcbiAgICBcInJpZ2h0XCIsXG4gICAgXCJib3R0b21cIixcbiAgICBcInRvcExlZnRcIixcbiAgICBcInRvcFJpZ2h0XCIsXG4gICAgXCJib3R0b21MZWZ0XCIsXG4gICAgXCJib3R0b21SaWdodFwiLFxuICAgIFwibGVmdFRvcFwiLFxuICAgIFwibGVmdEJvdHRvbVwiLFxuICAgIFwicmlnaHRUb3BcIixcbiAgICBcInJpZ2h0Qm90dG9tXCIsXG4gIF0pLFxuICAvKipcbiAgICog5by55Ye65YaF5a65XG4gICAqL1xuICBwb3B1cDogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDmsJTms6Hmj5DnpLrnmoTpmYTliqDnsbvlkI1cbiAgICovXG4gIHBvcHVwQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5rCU5rOh5o+Q56S655qE6ZmE5Yqg5qC35byPXG4gICAqL1xuICBwb3B1cFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICog5by55Ye65qGG55qE5Yqo55S757G75ZCN77yM5Yqo55S75qC85byP6YG15b6qIHJjLWFuaW1hdGVcbiAgICovXG4gIHBvcHVwVHJhbnNpdGlvbk5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDop6blj5HmlrnlvI9cbiAgICovXG4gIHRyaWdnZXI6IFByb3BUeXBlcy5vbmVPZihbXCJob3ZlclwiLCBcImZvY3VzXCIsIFwiY2xpY2tcIl0pLFxuICAvKipcbiAgICog5omL5Yqo5o6n5Yi25rCU5rOh5o+Q56S65piv5ZCm5pi+56S6XG4gICAqL1xuICB2aXNpYmxlOiBQcm9wVHlwZXMub25lT2YoW251bGwsIHRydWUsIGZhbHNlXSksXG59XG5cblRvb2x0aXAuZGVmYXVsdFByb3BzID0ge1xuICBhbGlnbkVkZ2U6IGZhbHNlLFxuICBhdXRvQWRqdXN0UGxhY2VtZW50OiB0cnVlLFxuICBjaGlsZHJlbjogXCJcIixcbiAgZGVmYXVsdFZpc2libGU6IG51bGwsXG4gIGdldFBvcHVwQ29udGFpbmVyOiBudWxsLFxuICBtb3VzZUVudGVyRGVsYXk6IDAsXG4gIG1vdXNlTGVhdmVEZWxheTogMC4xLFxuICBvblZpc2libGVDaGFuZ2U6ICgpID0+IHt9LFxuICBwbGFjZW1lbnQ6IFwiYm90dG9tXCIsXG4gIHBvcHVwOiBcIuWkjeWItlwiLFxuICBwb3B1cENsYXNzTmFtZTogXCJcIixcbiAgcG9wdXBTdHlsZToge30sXG4gIHBvcHVwVHJhbnNpdGlvbk5hbWU6IFwiem9vbS1iaWctZmFzdFwiLFxuICB0cmlnZ2VyOiBcImhvdmVyXCIsXG4gIHZpc2libGU6IG51bGwsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXBcbiJdfQ==