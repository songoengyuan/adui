"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _rcAnimate = _interopRequireDefault(require("rc-animate"));

var _shallowequal = _interopRequireDefault(require("shallowequal"));

var _addEventListener = _interopRequireDefault(require("rc-util/lib/Dom/addEventListener"));

var _rcVirtualList = _interopRequireDefault(require("rc-virtual-list"));

var _debounce = require("debounce");

var _classnames = _interopRequireDefault(require("classnames"));

var _omit = _interopRequireDefault(require("../_util/omit"));

var _Column = _interopRequireDefault(require("./Column"));

var _affix = _interopRequireDefault(require("../affix"));

var _checkbox = _interopRequireDefault(require("../checkbox"));

var _icon = _interopRequireDefault(require("../icon"));

var _popover = _interopRequireDefault(require("../popover"));

var _radio = _interopRequireDefault(require("../radio"));

var _resizeObserver = _interopRequireDefault(require("../resize-observer"));

var _TableSort = _interopRequireDefault(require("./TableSort"));

var _TableFilter = _interopRequireDefault(require("./TableFilter"));

var _ColumnManager = _interopRequireDefault(require("./ColumnManager"));

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var noop = function noop() {};

var prefix = "adui-table";
var TD_MIN_WIDTH = 100;
var SELECT_TD_WIDTH = 50;
var TD_HEIGHT = {
  large: 60,
  medium: 50,
  mini: 40,
  small: 40
};
var HORIZONTAL_ALIGN = {
  center: "center",
  left: "flex-start",
  right: "flex-end"
};
var VERTICAL_ALIGN = {
  bottom: "flex-end",
  center: "center",
  top: "flex-start"
};

var isFixedLeft = function isFixedLeft(col) {
  return col.fixed === "left" || col.fixed === true;
};

var isFixedRight = function isFixedRight(col) {
  return col.fixed === "right";
};

var Table = function (_React$Component) {
  _inherits(Table, _React$Component);

  var _super = _createSuper(Table);

  function Table(_props) {
    var _this;

    _classCallCheck(this, Table);

    _this = _super.call(this, _props);
    _this.combinedCellsInfo = [];
    _this.affixHeader = void 0;
    _this.affixScrollbar = void 0;
    _this.mainTable = void 0;
    _this.mainTableBody = void 0;
    _this.mainThead = void 0;
    _this.wrapper = void 0;
    _this.debouncedWindowResize = void 0;
    _this.resizeEvent = void 0;
    _this.columnManager = void 0;

    _this.shouldComponentUpdate = function (nextProps, nextState) {
      return !(0, _shallowequal["default"])(_this.props, nextProps) || !(0, _shallowequal["default"])(_this.state, nextState);
    };

    _this.componentDidMount = function () {
      var _assertThisInitialize = _assertThisInitialized(_this),
          columnManager = _assertThisInitialize.columnManager,
          combinedCellsInfo = _assertThisInitialize.combinedCellsInfo,
          debouncedWindowResize = _assertThisInitialize.debouncedWindowResize,
          props = _assertThisInitialize.props;

      var isAnyColumnsFixed = columnManager.isAnyColumnsFixed;
      var headerAffixed = props.headerAffixed,
          height = props.height;

      if (headerAffixed || height || isAnyColumnsFixed) {
        _this.handleWindowResize();

        _this.resizeEvent = (0, _addEventListener["default"])(window, "resize", debouncedWindowResize);
      }

      if (combinedCellsInfo.length) {
        _this.setState({
          combinedCellsInfo: combinedCellsInfo
        });
      }
    };

    _this.componentDidUpdate = function (_ref) {
      var dataSourceOld = _ref.dataSource,
          getCellPropsOld = _ref.getCellProps;
      var _this$props = _this.props,
          dataSource = _this$props.dataSource,
          getCellProps = _this$props.getCellProps;

      if (!(0, _shallowequal["default"])(dataSourceOld, dataSource)) {
        setTimeout(_this.handleWindowResize, 0);
      }

      if (!(0, _shallowequal["default"])(getCellPropsOld, getCellProps) && getCellProps) {
        _this.forceUpdate();
      }
    };

    _this.componentWillUnmount = function () {
      if (_this.resizeEvent) {
        _this.resizeEvent.remove();
      }

      if (_this.debouncedWindowResize) {
        _this.debouncedWindowResize.clear();
      }
    };

    _this.resizeColumnStart = function (e, col) {
      e.stopPropagation();
      document.body.style.cursor = "col-resize";

      _this.setState({
        currentlyResizing: {
          col: col,
          dataIndex: col.dataIndex,
          parentWidth: e.currentTarget.parentElement && e.currentTarget.parentElement.parentElement && e.currentTarget.parentElement.parentElement.getBoundingClientRect().width,
          startX: e.pageX
        }
      });

      setTimeout(function () {
        window.addEventListener("mousemove", _this.resizeColumnMoving);
        window.addEventListener("mouseup", _this.resizeColumnEnd);
        window.addEventListener("mouseleave", _this.resizeColumnEnd);
      }, 0);
    };

    _this.resizeColumnMoving = function (e) {
      e.stopPropagation();
      var _this$state = _this.state,
          resized = _this$state.resized,
          currentlyResizing = _this$state.currentlyResizing;
      var col = currentlyResizing.col,
          dataIndex = currentlyResizing.dataIndex,
          parentWidth = currentlyResizing.parentWidth,
          startX = currentlyResizing.startX;
      var baseWidth = Math.ceil(col.title.length > 4 ? col.title.length / 2 : col.title.length) * 13 + 2;
      var newResized = resized.filter(function (o) {
        return o.dataIndex !== dataIndex;
      });
      var newWidth = Math.max(Math.ceil(parentWidth + e.pageX - startX), !!col.onSort || !!col.onFilter ? baseWidth + 36 : baseWidth + 16);
      newResized.push({
        dataIndex: dataIndex,
        value: newWidth
      });

      _this.setState({
        resized: newResized
      });

      _this.debouncedWindowResize();
    };

    _this.resizeColumnEnd = function (e) {
      var _assertThisInitialize2 = _assertThisInitialized(_this),
          mainTable = _assertThisInitialize2.mainTable;

      document.body.style.cursor = "";
      e.stopPropagation();
      window.removeEventListener("mousemove", _this.resizeColumnMoving);
      window.removeEventListener("mouseup", _this.resizeColumnEnd);
      window.removeEventListener("mouseleave", _this.resizeColumnEnd);

      _this.setState({
        currentlyResizing: {},
        isMainTableOverflowX: mainTable && mainTable.scrollWidth > mainTable.offsetWidth,
        isMainTableOverflowY: mainTable && mainTable.scrollHeight > mainTable.offsetHeight,
        isResizerShow: false
      });
    };

    _this.handleWindowResize = function () {
      var _assertThisInitialize3 = _assertThisInitialized(_this),
          columnManager = _assertThisInitialize3.columnManager,
          mainTable = _assertThisInitialize3.mainTable,
          props = _assertThisInitialize3.props;

      var isAnyColumnsFixed = columnManager.isAnyColumnsFixed;
      var headerAffixed = props.headerAffixed,
          height = props.height;

      if ((headerAffixed || height || isAnyColumnsFixed) && mainTable) {
        var oldStyle = _this.state.mainTableStyle;
        var rect = mainTable.getBoundingClientRect();
        var mainTableStyle = {};
        mainTableStyle.left = rect.left;
        mainTableStyle.width = rect.width;

        if (!(0, _shallowequal["default"])(mainTableStyle, oldStyle)) {
          _this.setState({
            mainTableStyle: mainTableStyle
          });
        }

        _this.setState({
          isMainTableOverflowX: mainTable && mainTable.scrollWidth > mainTable.offsetWidth,
          isMainTableOverflowY: mainTable && mainTable.scrollHeight > mainTable.offsetHeight
        });
      }
    };

    _this.handleMainTableScroll = function (e) {
      var _assertThisInitialize4 = _assertThisInitialized(_this),
          affixHeader = _assertThisInitialize4.affixHeader,
          mainTable = _assertThisInitialize4.mainTable;

      var onScroll = _this.props.onScroll;
      var affixedTop = _this.state.affixedTop;

      if (onScroll && e) {
        var target = e.target;

        if (target.getAttribute("role") === "table") {
          onScroll(e);
        }
      }

      if (affixedTop && affixHeader && mainTable && affixHeader.fixedNode) {
        affixHeader.fixedNode.scrollLeft = mainTable.scrollLeft;
      }

      _this.syncTableScrollPosition(mainTable.scrollLeft);
    };

    _this.syncTableScrollPosition = function (value) {
      var _assertThisInitialize5 = _assertThisInitialized(_this),
          affixScrollbar = _assertThisInitialize5.affixScrollbar,
          mainTable = _assertThisInitialize5.mainTable,
          mainThead = _assertThisInitialize5.mainThead;

      var height = _this.props.height;

      if (mainTable && affixScrollbar && affixScrollbar.fixedNode) {
        if (mainTable.scrollLeft !== value) {
          mainTable.scrollLeft = value;
        }

        if (affixScrollbar.fixedNode.scrollLeft !== value) {
          affixScrollbar.fixedNode.scrollLeft = value;
        }
      }

      if (height && mainThead) {
        mainThead.scrollLeft = value;
      }
    };

    _this.handleRowClick = function (row, i, e) {
      var _this$props2 = _this.props,
          expandOnRowClick = _this$props2.expandOnRowClick,
          getSelectProps = _this$props2.getSelectProps,
          onRowClick = _this$props2.onRowClick,
          selectOnRowClick = _this$props2.selectOnRowClick;
      var selectedRowKeys = _this.state.selectedRowKeys;
      var key = row.key;

      if (selectOnRowClick && typeof key !== "undefined" && !(getSelectProps && getSelectProps(row, i) && getSelectProps(row, i).disabled)) {
        _this.handleSelect(key, !selectedRowKeys.includes(key));
      }

      if (expandOnRowClick) {
        _this.handleExpand(key);
      }

      if (onRowClick) {
        onRowClick(row, i, e);
      }
    };

    _this.handleThResize = function (width, dataIndex, index, fixedPosition) {
      var getColumns = _this.columnManager.getColumns;
      var fixedColumnsInfos = _this.state.fixedColumnsInfos;
      var columns = getColumns();
      fixedColumnsInfos = fixedColumnsInfos.filter(function (o) {
        return columns.find(function (p) {
          return p.dataIndex === o.dataIndex;
        });
      });
      var i = fixedColumnsInfos.findIndex(function (o) {
        return o.dataIndex === dataIndex;
      });
      var fixed = fixedPosition === "right" ? "right" : "left";

      if (i > -1) {
        if (fixedColumnsInfos[i].width === width) {
          return;
        }

        fixedColumnsInfos.splice(i, 1);
      }

      fixedColumnsInfos.push({
        width: width,
        dataIndex: dataIndex,
        index: index,
        fixed: fixed
      });
      fixedColumnsInfos.sort(function (a, b) {
        return a.index - b.index;
      });
      var fixedColumnsInfosLeft = fixedColumnsInfos.filter(function (o) {
        return o.fixed === "left";
      });
      var fixedColumnsInfosRight = fixedColumnsInfos.filter(function (o) {
        return o.fixed === "right";
      }).sort(function (a, b) {
        return b.index - a.index;
      });
      fixedColumnsInfos.forEach(function (col) {
        var colIndex;

        if (col.fixed === "left") {
          colIndex = fixedColumnsInfosLeft.findIndex(function (o) {
            return o.dataIndex === col.dataIndex;
          });

          if (colIndex === fixedColumnsInfosLeft.length - 1) {
            col.isLastLeft = true;
          } else {
            col.isLastLeft = false;
          }

          col.offset = colIndex === -1 ? 0 : fixedColumnsInfosLeft.slice(0, colIndex).reduce(function (acc, cur) {
            return acc + cur.width;
          }, 0);
        } else {
          colIndex = fixedColumnsInfosRight.findIndex(function (o) {
            return o.dataIndex === col.dataIndex;
          });

          if (colIndex === fixedColumnsInfosRight.length - 1) {
            col.isFirstRight = true;
          } else {
            col.isFirstRight = false;
          }

          col.offset = colIndex === -1 ? 0 : fixedColumnsInfosRight.slice(0, colIndex).reduce(function (acc, cur) {
            return acc + cur.width;
          }, 0);
        }
      });

      _this.setState({
        fixedColumnsInfos: fixedColumnsInfos
      }, _this.forceUpdate);
    };

    _this.handleTheadMouseEnter = function () {
      var isResizerShow = _this.state.isResizerShow;

      if (!isResizerShow) {
        _this.setState({
          isResizerShow: true
        });
      }
    };

    _this.handleTheadMouseLeave = function () {
      var currentlyResizing = _this.state.currentlyResizing;

      if (Object.keys(currentlyResizing).length === 0) {
        _this.setState({
          isResizerShow: false
        });
      }
    };

    _this.handleExpand = function (key) {
      if (typeof key === "undefined") {
        return;
      }

      var _this$props3 = _this.props,
          expandedRowKeysProp = _this$props3.expandedRowKeys,
          onExpandChange = _this$props3.onExpandChange;
      var expandedRowKeys = _this.state.expandedRowKeys;

      var keys = _toConsumableArray(expandedRowKeys);

      var index = keys.indexOf(key);

      if (index > -1) {
        keys.splice(index, 1);
      } else {
        keys.push(key);
      }

      if (expandedRowKeysProp === null) {
        _this.setState({
          expandedRowKeys: keys
        });
      }

      if (onExpandChange) {
        onExpandChange(keys);
      }
    };

    _this.handleSelect = function (key, checked) {
      if (typeof key === "undefined") {
        return;
      }

      var _this$props4 = _this.props,
          onSelectChange = _this$props4.onSelectChange,
          selectedRowKeysProp = _this$props4.selectedRowKeys,
          selectMultiple = _this$props4.selectMultiple;
      var selectedRowKeys = _this.state.selectedRowKeys;

      var keys = _toConsumableArray(selectedRowKeys);

      if (selectMultiple) {
        if (checked) {
          keys.push(key);
        } else {
          keys.splice(selectedRowKeys.indexOf(key), 1);
        }
      } else {
        keys = [key];
      }

      if (selectedRowKeysProp === null) {
        _this.setState({
          selectedRowKeys: keys
        });
      }

      if (onSelectChange) {
        onSelectChange(keys);
      }
    };

    _this.handleSelectAll = function (checked) {
      var _this$props5 = _this.props,
          onSelectChange = _this$props5.onSelectChange,
          selectedRowKeysProp = _this$props5.selectedRowKeys;
      var selectedRowKeys = _this.state.selectedRowKeys;

      var keys = _toConsumableArray(selectedRowKeys);

      var availableKeys = _this.getAvailableRowsKeys();

      if (checked) {
        availableKeys.forEach(function (key) {
          if (!selectedRowKeys.includes(key)) {
            keys.push(key);
          }
        });
      } else {
        selectedRowKeys.forEach(function (key) {
          if (availableKeys.includes(key)) {
            keys.splice(keys.indexOf(key), 1);
          }
        });
      }

      if (selectedRowKeysProp === null) {
        _this.setState({
          selectedRowKeys: keys
        });
      }

      if (onSelectChange) {
        onSelectChange(keys);
      }
    };

    _this.hasSelectedAll = function () {
      var keys = _this.getAvailableRowsKeys();

      var dataSource = _this.props.dataSource;
      var selectedRowKeys = _this.state.selectedRowKeys;

      if (dataSource && dataSource.length && keys.length && keys.every(function (key) {
        return selectedRowKeys.includes(key);
      })) {
        return true;
      }

      return false;
    };

    _this.getAvailableRowsKeys = function () {
      var _this$props6 = _this.props,
          dataSource = _this$props6.dataSource,
          getSelectProps = _this$props6.getSelectProps;
      var keys = [];

      if (!dataSource) {
        return [];
      }

      dataSource.forEach(function (row, i) {
        var key = row.key;

        if (typeof key !== "undefined" && !(getSelectProps && getSelectProps(row, i) && getSelectProps(row, i).disabled)) {
          keys.push(key);
        }
      });
      return keys;
    };

    _this.generateTable = function () {
      var _this$mainTable;

      var _this$props7 = _this.props,
          dataSource = _this$props7.dataSource,
          expandIconVisible = _this$props7.expandIconVisible,
          expandedRowRender = _this$props7.expandedRowRender,
          expandOnRowClick = _this$props7.expandOnRowClick,
          getHeadClassName = _this$props7.getHeadClassName,
          getHeadStyle = _this$props7.getHeadStyle,
          getRowClassName = _this$props7.getRowClassName,
          getRowStyle = _this$props7.getRowStyle,
          getSelectProps = _this$props7.getSelectProps,
          headerAffixed = _this$props7.headerAffixed,
          headerAffixedOffsetTop = _this$props7.headerAffixedOffsetTop,
          headerAffixGetTarget = _this$props7.headerAffixGetTarget,
          height = _this$props7.height,
          onExpandChange = _this$props7.onExpandChange,
          onRowMouseEnter = _this$props7.onRowMouseEnter,
          onRowMouseLeave = _this$props7.onRowMouseLeave,
          onSelectChange = _this$props7.onSelectChange,
          selectMultiple = _this$props7.selectMultiple,
          selectOnRowClick = _this$props7.selectOnRowClick,
          size = _this$props7.size,
          verticalAlign = _this$props7.verticalAlign,
          virtualListProps = _this$props7.virtualListProps,
          virtualListStyle = _this$props7.virtualListStyle,
          virtualScroll = _this$props7.virtualScroll;
      var _this$state2 = _this.state,
          affixedTop = _this$state2.affixedTop,
          affixedBottom = _this$state2.affixedBottom,
          expandedRowKeys = _this$state2.expandedRowKeys,
          fixedColumnsInfos = _this$state2.fixedColumnsInfos,
          isMainTableOverflowX = _this$state2.isMainTableOverflowX,
          isMainTableOverflowY = _this$state2.isMainTableOverflowY,
          mainTableStyle = _this$state2.mainTableStyle,
          resized = _this$state2.resized,
          selectedRowKeys = _this$state2.selectedRowKeys;
      var _this$columnManager = _this.columnManager,
          getColumns = _this$columnManager.getColumns,
          getGroupColumnsDepth = _this$columnManager.getGroupColumnsDepth,
          isAnyColumnsLeftFixed = _this$columnManager.isAnyColumnsLeftFixed;
      var columns = getColumns();

      var theadStyle = _objectSpread({
        height: "".concat(TD_HEIGHT[size || "small"] * getGroupColumnsDepth(), "px")
      }, getHeadStyle && getHeadStyle() || {});

      var theadPlaceholderVisible = expandIconVisible && (!!onSelectChange || !!onExpandChange);
      var thead = React.createElement("div", {
        key: 0,
        className: (0, _classnames["default"])("".concat(prefix, "-thead"), getHeadClassName && getHeadClassName()),
        onMouseEnter: _this.handleTheadMouseEnter,
        onMouseLeave: _this.handleTheadMouseLeave,
        ref: _this.saveRef("mainThead"),
        style: theadStyle
      }, theadPlaceholderVisible && React.createElement("div", {
        className: (0, _classnames["default"])("".concat(prefix, "-th"), "".concat(prefix, "-th_functional"), _defineProperty({}, "".concat(prefix, "-th_left"), isAnyColumnsLeftFixed())),
        key: "functional-all"
      }, selectMultiple && !!onSelectChange && React.createElement("div", {
        className: "".concat(prefix, "-cell")
      }, React.createElement(_checkbox["default"], {
        disabled: !_this.getAvailableRowsKeys().length,
        onChange: _this.handleSelectAll,
        checked: _this.hasSelectedAll(),
        className: "".concat(prefix, "-selectComponent")
      }))), columns.map(function (col, index) {
        var _fixedColumnsInfos$fi, _fixedColumnsInfos$fi2, _classNames2, _fixedColumnsInfos$fi3, _fixedColumnsInfos$fi4;

        var align = col.align,
            dataIndex = col.dataIndex,
            filters = col.filters,
            fixed = col.fixed,
            onFilter = col.onFilter,
            onSort = col.onSort,
            sortOrder = col.sortOrder,
            title = col.title,
            width = col.width;
        var resizedCol = resized.find(function (o) {
          return o.dataIndex === dataIndex;
        });
        var clickable = !!onSort || sortOrder !== null && sortOrder !== undefined || !!onFilter || !!filters;
        var minWidth = 0;

        if (typeof title === "string") {
          minWidth = Math.ceil(title.length > 4 ? title.length / 2 : title.length) * 13 + 16;

          if (clickable) {
            minWidth += 20;
          }
        }

        var flexValue;

        if (typeof width === "number") {
          flexValue = "".concat(width, " 0 auto");
        } else if (typeof width === "string") {
          if (width.length - width.lastIndexOf("px") === 2) {
            flexValue = "".concat(width.slice(0, -2), " 0 auto");
          } else {
            flexValue = "0 0 ".concat(width);
          }
        } else {
          flexValue = "".concat(Math.max(TD_MIN_WIDTH, minWidth), " 0 auto");
        }

        return React.createElement(_resizeObserver["default"], {
          onResize: function onResize(_ref2) {
            var widthResize = _ref2.width;

            _this.handleThResize(widthResize, dataIndex, index, fixed);
          },
          disabled: !fixed,
          key: dataIndex || index
        }, React.createElement("div", {
          className: (0, _classnames["default"])("".concat(prefix, "-th"), (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefix, "-th_clickable"), clickable), _defineProperty(_classNames2, "".concat(prefix, "-th_left"), isFixedLeft(col)), _defineProperty(_classNames2, "".concat(prefix, "-th_right"), isFixedRight(col)), _defineProperty(_classNames2, "".concat(prefix, "-th_leftLast"), (_fixedColumnsInfos$fi = fixedColumnsInfos.find(function (o) {
            return o.dataIndex === dataIndex;
          })) === null || _fixedColumnsInfos$fi === void 0 ? void 0 : _fixedColumnsInfos$fi.isLastLeft), _defineProperty(_classNames2, "".concat(prefix, "-th_rightFirst"), (_fixedColumnsInfos$fi2 = fixedColumnsInfos.find(function (o) {
            return o.dataIndex === dataIndex;
          })) === null || _fixedColumnsInfos$fi2 === void 0 ? void 0 : _fixedColumnsInfos$fi2.isFirstRight), _classNames2)),
          key: dataIndex || index,
          style: {
            left: isFixedLeft(col) ? (((_fixedColumnsInfos$fi3 = fixedColumnsInfos.find(function (o) {
              return o.dataIndex === dataIndex;
            })) === null || _fixedColumnsInfos$fi3 === void 0 ? void 0 : _fixedColumnsInfos$fi3.offset) || 0) + (theadPlaceholderVisible ? SELECT_TD_WIDTH : 0) : undefined,
            right: isFixedRight(col) ? (((_fixedColumnsInfos$fi4 = fixedColumnsInfos.find(function (o) {
              return o.dataIndex === dataIndex;
            })) === null || _fixedColumnsInfos$fi4 === void 0 ? void 0 : _fixedColumnsInfos$fi4.offset) || 0) + (isMainTableOverflowY && height ? 14 : 0) : undefined,
            flex: resizedCol ? "".concat(resizedCol.value, " 0 auto") : flexValue,
            maxWidth: resizedCol ? resizedCol.value : width || "",
            textAlign: align || undefined,
            width: resizedCol ? resizedCol.value : width || Math.max(TD_MIN_WIDTH, minWidth)
          },
          "data-column": index
        }, _this.generateThCell(col, {
          index: index,
          columns: columns
        }), col.children && React.createElement("div", {
          className: "".concat(prefix, "-thGroup")
        }, col.children.map(function (childCol, childColIndex) {
          return React.createElement("div", {
            className: (0, _classnames["default"])("".concat(prefix, "-th"), _defineProperty({}, "".concat(prefix, "-th_clickable"), !!childCol.onSort || childCol.sortOrder !== null && childCol.sortOrder !== undefined || !!childCol.onFilter || !!childCol.filters)),
            key: childCol.dataIndex || childColIndex,
            style: {
              flex: "100 0 auto",
              width: "100px",
              textAlign: childCol.align || undefined
            }
          }, _this.generateThCell(childCol), childCol.children && React.createElement("div", {
            className: "".concat(prefix, "-thGroup")
          }, childCol.children.map(function (grandCol, grandColIndex) {
            return React.createElement("div", {
              className: (0, _classnames["default"])("".concat(prefix, "-th"), _defineProperty({}, "".concat(prefix, "-th_clickable"), !!grandCol.onSort || grandCol.sortOrder !== null && grandCol.sortOrder !== undefined || !!grandCol.onFilter || !!grandCol.filters)),
              key: grandCol.dataIndex || grandColIndex,
              style: {
                flex: "100 0 auto",
                width: "100px",
                textAlign: grandCol.align || undefined
              }
            }, _this.generateThCell(grandCol));
          })));
        }))));
      }));

      var generateTrs = function generateTrs(row, rowIndex) {
        var _classNames5, _selectPropsGetted$po;

        var key = row.key;
        var colArray = [];
        var selectPropsGetted = getSelectProps && getSelectProps(row, rowIndex);

        var allSelectProps = _objectSpread({
          checked: selectedRowKeys.includes(key),
          className: "".concat(prefix, "-selectComponent"),
          onChange: function onChange(checked) {
            return _this.handleSelect(key, checked);
          },
          onClick: function onClick(e) {
            return e.stopPropagation();
          }
        }, selectPropsGetted || {});

        var selectProps = (0, _omit["default"])(allSelectProps, ["popoverProps"]);
        var selectCell = onExpandChange ? React.createElement("div", {
          className: "".concat(prefix, "-selectComponent"),
          style: {
            cursor: "pointer"
          },
          onClick: function onClick() {
            return _this.handleExpand(key);
          },
          role: "none"
        }, React.createElement(_icon["default"], {
          className: "".concat(prefix, "-expandIcon"),
          icon: "arrow-down"
        })) : selectMultiple ? React.createElement(_checkbox["default"], selectProps) : React.createElement(_radio["default"], selectProps);

        var generateTr = function generateTr(columnsParam, parentIndex) {
          columnsParam.forEach(function (col, colIndexParam) {
            var colIndex = colIndexParam;

            if (parentIndex) {
              for (var i = 0; i < parentIndex; i += 1) {
                var _columns$i$children;

                var childrenCount = ((_columns$i$children = columns[i].children) === null || _columns$i$children === void 0 ? void 0 : _columns$i$children.length) || 1;

                if (childrenCount) {
                  colIndex += childrenCount;
                }
              }
            }

            if (!col.children) {
              colArray.push(_this.generateTbodyCell(row, col, rowIndex, colIndex));
            } else {
              generateTr(col.children, colIndexParam);
            }
          });
        };

        generateTr(columns);
        var tr = React.createElement("div", {
          className: (0, _classnames["default"])("".concat(prefix, "-tr"), getRowClassName && getRowClassName(row, rowIndex), (_classNames5 = {}, _defineProperty(_classNames5, "".concat(prefix, "-tr_clickable"), expandOnRowClick || selectOnRowClick), _defineProperty(_classNames5, "".concat(prefix, "-tr_expanded"), expandedRowKeys.includes(key)), _defineProperty(_classNames5, "".concat(prefix, "-tr_selected"), selectedRowKeys.includes(key)), _classNames5)),
          key: key || rowIndex,
          role: "row",
          "data-row": rowIndex,
          onMouseEnter: onRowMouseEnter ? function (e) {
            return onRowMouseEnter(row, rowIndex, e);
          } : undefined,
          onMouseLeave: onRowMouseLeave ? function (e) {
            return onRowMouseLeave(row, rowIndex, e);
          } : undefined,
          onClick: function onClick(e) {
            return _this.handleRowClick(row, rowIndex, e);
          },
          onKeyDown: noop,
          style: _objectSpread({}, getRowStyle && getRowStyle(row, rowIndex) || {})
        }, theadPlaceholderVisible && React.createElement("div", {
          className: (0, _classnames["default"])("".concat(prefix, "-td"), "".concat(prefix, "-td_functional"), _defineProperty({}, "".concat(prefix, "-td_left"), isAnyColumnsLeftFixed())),
          key: "functional",
          role: "cell"
        }, React.createElement("div", {
          className: "".concat(prefix, "-cell"),
          style: {
            alignItems: verticalAlign && VERTICAL_ALIGN[verticalAlign]
          }
        }, selectPropsGetted !== null && selectPropsGetted !== void 0 && (_selectPropsGetted$po = selectPropsGetted.popoverProps) !== null && _selectPropsGetted$po !== void 0 && _selectPropsGetted$po.popup ? React.createElement(_popover["default"], _extends({
          mouseEnterDelay: 0.1,
          alignEdge: false,
          placement: "right"
        }, (getSelectProps && getSelectProps(row, rowIndex) || {}).popoverProps), selectCell) : selectCell)), colArray);

        if (onExpandChange) {
          return [tr, expandedRowKeys.includes(key) ? React.createElement("div", {
            className: "".concat(prefix, "-expandRow"),
            key: "tr-expand"
          }, !!expandedRowRender && expandedRowRender(row, rowIndex)) : null];
        }

        return tr;
      };

      return [headerAffixed ? React.createElement(_affix["default"], {
        key: 0,
        offsetTop: headerAffixedOffsetTop,
        getContainer: function getContainer() {
          return _this.wrapper;
        },
        getTarget: headerAffixGetTarget,
        onChange: function onChange(bool) {
          _this.setState({
            affixedTop: bool
          }, function () {
            if (bool) {
              _this.handleWindowResize();

              _this.handleMainTableScroll();
            }
          });
        },
        className: affixedTop ? "".concat(prefix, "-affix") : "",
        style: _objectSpread({
          display: "flex",
          zIndex: 2,
          alignItems: "baseline",
          flexDirection: "column"
        }, affixedTop ? mainTableStyle : {}),
        ref: _this.saveRef("affixHeader")
      }, thead) : thead, React.createElement("div", {
        key: 1,
        className: "".concat(prefix, "-tbody"),
        ref: _this.saveRef("mainTableBody")
      }, !virtualScroll && dataSource && !!dataSource.length && dataSource.map(function (row, rowIndex) {
        return generateTrs(row, rowIndex);
      }), virtualScroll && dataSource && !!dataSource.length && React.createElement(_rcVirtualList["default"], _extends({
        data: dataSource,
        itemKey: "dataIndex",
        height: (height || 400) - 40,
        itemHeight: 42,
        className: "".concat(prefix, "-virtual-wrapper"),
        style: _objectSpread({}, virtualListStyle)
      }, virtualListProps), function (row, rowIndex) {
        return generateTrs(row, rowIndex);
      })), isMainTableOverflowX && headerAffixed && React.createElement(_affix["default"], {
        key: 2,
        offsetBottom: 0,
        getContainer: function getContainer() {
          return _this.mainTableBody;
        },
        ref: _this.saveRef("affixScrollbar"),
        className: (0, _classnames["default"])("".concat(prefix, "-affixScrollbar"), _defineProperty({}, "".concat(prefix, "-affixScrollbar_show"), affixedBottom)),
        style: _objectSpread({
          zIndex: 2
        }, mainTableStyle),
        onScroll: function onScroll(e) {
          return _this.syncTableScrollPosition(e.currentTarget.scrollLeft);
        },
        onChange: function onChange(bool) {
          return _this.setState({
            affixedBottom: bool
          });
        }
      }, React.createElement("div", {
        style: {
          width: (_this$mainTable = _this.mainTable) === null || _this$mainTable === void 0 ? void 0 : _this$mainTable.scrollWidth
        }
      }))];
    };

    _this.generateThCell = function (col, options) {
      var _classNames8;

      var _this$props8 = _this.props,
          align = _this$props8.align,
          columnsResizable = _this$props8.columnsResizable,
          getHeadCellClassName = _this$props8.getHeadCellClassName,
          getHeadCellStyle = _this$props8.getHeadCellStyle;
      var colResizable = col.resizable;
      var resizable = true;

      if (typeof colResizable === "boolean") {
        resizable = colResizable;
      } else if (typeof columnsResizable === "boolean") {
        resizable = columnsResizable;
      }

      var _this$state3 = _this.state,
          currentlyResizing = _this$state3.currentlyResizing,
          isResizerShow = _this$state3.isResizerShow;
      var isLastTh = options && options.index === options.columns.length - 1;
      var thCell = React.createElement("div", {
        className: (0, _classnames["default"])("".concat(prefix, "-cell"), getHeadCellClassName && getHeadCellClassName(col, options ? options.index : undefined)),
        style: _objectSpread({
          justifyContent: col.align && HORIZONTAL_ALIGN[col.align] || align && HORIZONTAL_ALIGN[align] || undefined
        }, getHeadCellStyle && getHeadCellStyle(col, options ? options.index : undefined) || {})
      }, !col.onSort && (col.sortOrder === null || col.sortOrder === undefined) && !col.onFilter && !col.filters && col.title, (!!col.onSort || col.sortOrder !== null && col.sortOrder !== undefined) && React.createElement(_TableSort["default"], {
        onSort: function onSort(order) {
          return col.onSort ? col.onSort(order) : {};
        },
        sortOrder: col.sortOrder,
        title: col.title
      }), (!!col.onFilter || !!col.filters) && React.createElement(_TableFilter["default"], {
        filteredValue: col.filteredValue,
        filterVisible: col.filterVisible,
        filterMultiple: col.filterMultiple,
        filterPopoverProps: col.filterPopoverProps,
        filters: col.filters,
        onFilter: function onFilter(filter) {
          if (col.onFilter) {
            col.onFilter(filter);
          }
        },
        onFilterVisibleChange: function onFilterVisibleChange(visible) {
          if (col.onFilterVisibleChange) {
            col.onFilterVisibleChange(visible);
          }
        },
        title: col.title
      }), !col.fixed && resizable && !isLastTh && React.createElement("div", {
        className: (0, _classnames["default"])("".concat(prefix, "-resizer"), (_classNames8 = {}, _defineProperty(_classNames8, "".concat(prefix, "-resizer_show"), isResizerShow), _defineProperty(_classNames8, "".concat(prefix, "-resizer_current"), currentlyResizing.dataIndex === col.dataIndex), _classNames8)),
        onMouseDown: function onMouseDown(e) {
          return _this.resizeColumnStart(e, col);
        },
        role: "none"
      }));

      if (col.popover) {
        return React.createElement(_popover["default"], {
          mouseEnterDelay: 0.3,
          placement: col.align === "center" ? "top" : col.align === "right" ? "topRight" : "topLeft",
          alignEdge: true,
          arrowed: true,
          popup: col.popover
        }, thCell);
      }

      return thCell;
    };

    _this.generateTbodyCell = function (row, cell, rowIndex, cellIndex) {
      var _fixedColumnsInfos$fi5, _fixedColumnsInfos$fi6, _classNames9, _fixedColumnsInfos$fi7, _fixedColumnsInfos$fi8;

      var _this$props9 = _this.props,
          alignProp = _this$props9.align,
          expandIconVisible = _this$props9.expandIconVisible,
          getCellClassName = _this$props9.getCellClassName,
          getCellProps = _this$props9.getCellProps,
          getCellStyle = _this$props9.getCellStyle,
          onExpandChange = _this$props9.onExpandChange,
          onSelectChange = _this$props9.onSelectChange,
          verticalAlignProp = _this$props9.verticalAlign;
      var theadPlaceholderVisible = expandIconVisible && (!!onSelectChange || !!onExpandChange);
      var _this$state4 = _this.state,
          currentlyResizing = _this$state4.currentlyResizing,
          fixedColumnsInfos = _this$state4.fixedColumnsInfos,
          resized = _this$state4.resized;
      var align = cell.align,
          dataIndex = cell.dataIndex,
          filters = cell.filters,
          onFilter = cell.onFilter,
          onSort = cell.onSort,
          render = cell.render,
          sortOrder = cell.sortOrder,
          title = cell.title,
          verticalAlign = cell.verticalAlign,
          width = cell.width;
      var clickable = !!onSort || sortOrder !== null && sortOrder !== undefined || !!onFilter || !!filters;
      var minWidth = 0;

      if (typeof title === "string") {
        minWidth = Math.ceil(title.length > 4 ? title.length / 2 : title.length) * 13 + 16;

        if (clickable) {
          minWidth += 20;
        }
      }

      var flexValue;

      if (typeof width === "number") {
        flexValue = "".concat(width, " 0 auto");
      } else if (typeof width === "string") {
        if (width.length - width.lastIndexOf("px") === 2) {
          flexValue = "".concat(width.slice(0, -2), " 0 auto");
        } else {
          flexValue = "0 0 ".concat(width);
        }
      } else {
        flexValue = "".concat(Math.max(TD_MIN_WIDTH, minWidth), " 0 auto");
      }

      var resizedCol = resized.find(function (o) {
        return o.dataIndex === dataIndex;
      });
      var cellClassName = getCellClassName && getCellClassName(row, cell, rowIndex, cellIndex);
      var cellProps = getCellProps && getCellProps(row, cell, rowIndex, cellIndex) || {};
      var cellStyle = getCellStyle && getCellStyle(row, cell, rowIndex, cellIndex) || {};

      var rowSpan = cellProps.rowSpan,
          colSpan = cellProps.colSpan,
          otherCellProps = _objectWithoutProperties(cellProps, ["rowSpan", "colSpan"]);

      if (rowSpan || colSpan) {
        _this.combinedCellsInfo.push({
          cell: cell,
          cellIndex: cellIndex,
          colSpan: colSpan,
          row: row,
          rowIndex: rowIndex,
          rowSpan: rowSpan
        });
      }

      return React.createElement("div", _extends({
        className: (0, _classnames["default"])("".concat(prefix, "-td"), (_classNames9 = {}, _defineProperty(_classNames9, "".concat(prefix, "-td_resizing"), dataIndex !== undefined && currentlyResizing.dataIndex === dataIndex), _defineProperty(_classNames9, "".concat(prefix, "-td_left"), isFixedLeft(cell)), _defineProperty(_classNames9, "".concat(prefix, "-td_right"), isFixedRight(cell)), _defineProperty(_classNames9, "".concat(prefix, "-td_leftLast"), (_fixedColumnsInfos$fi5 = fixedColumnsInfos.find(function (o) {
          return o.dataIndex === dataIndex;
        })) === null || _fixedColumnsInfos$fi5 === void 0 ? void 0 : _fixedColumnsInfos$fi5.isLastLeft), _defineProperty(_classNames9, "".concat(prefix, "-td_rightFirst"), (_fixedColumnsInfos$fi6 = fixedColumnsInfos.find(function (o) {
          return o.dataIndex === dataIndex;
        })) === null || _fixedColumnsInfos$fi6 === void 0 ? void 0 : _fixedColumnsInfos$fi6.isFirstRight), _defineProperty(_classNames9, "".concat(prefix, "-td_combined"), rowSpan || colSpan), _classNames9)),
        key: dataIndex || cellIndex,
        style: {
          left: isFixedLeft(cell) ? (((_fixedColumnsInfos$fi7 = fixedColumnsInfos.find(function (o) {
            return o.dataIndex === dataIndex;
          })) === null || _fixedColumnsInfos$fi7 === void 0 ? void 0 : _fixedColumnsInfos$fi7.offset) || 0) + (theadPlaceholderVisible ? SELECT_TD_WIDTH : 0) : undefined,
          right: isFixedRight(cell) ? (_fixedColumnsInfos$fi8 = fixedColumnsInfos.find(function (o) {
            return o.dataIndex === dataIndex;
          })) === null || _fixedColumnsInfos$fi8 === void 0 ? void 0 : _fixedColumnsInfos$fi8.offset : undefined,
          flex: resizedCol ? "".concat(resizedCol.value, " 0 auto") : flexValue,
          width: resizedCol ? resizedCol.value : width || Math.max(TD_MIN_WIDTH, minWidth),
          maxWidth: resizedCol ? resizedCol.value : width || ""
        },
        role: "cell",
        "data-row": rowIndex,
        "data-column": cellIndex
      }, otherCellProps), React.createElement("div", {
        className: (0, _classnames["default"])("".concat(prefix, "-cell"), cellClassName),
        style: _objectSpread({
          alignItems: verticalAlign && VERTICAL_ALIGN[verticalAlign] || verticalAlignProp && VERTICAL_ALIGN[verticalAlignProp] || undefined,
          justifyContent: align && HORIZONTAL_ALIGN[align] || alignProp && HORIZONTAL_ALIGN[alignProp] || undefined
        }, cellStyle)
      }, React.createElement("div", {
        className: "".concat(prefix, "-cellInner")
      }, render ? render(row, cell, rowIndex, cellIndex) : row[dataIndex], (rowSpan || colSpan) && React.createElement("div", {
        className: "".concat(prefix, "-cell_combined"),
        style: _objectSpread(_objectSpread({}, _this.getCombinedCellStyle(row, cell, rowIndex, cellIndex, rowSpan, colSpan)), {}, {
          textAlign: align || undefined
        })
      }, render ? render(row, cell, rowIndex, cellIndex) : row[dataIndex]))));
    };

    _this.getCombinedCellStyle = function (_, __, rowIndex, colIndex, rowSpan, colSpan) {
      var getTableCell = function getTableCell(rowIndexParam, colIndexParam) {
        if (_this.mainTable) {
          var _row = _this.mainTable.querySelectorAll('[role="row"]')[rowIndexParam];

          if (_row) {
            return _row.children[colIndexParam];
          }
        }

        return null;
      };

      var cell = getTableCell(rowIndex, colIndex);
      var style = {};

      if (rowSpan < 2 || typeof rowSpan === "undefined") {
        style.height = "calc(100% - 1px)";
      } else {
        var endCell = getTableCell(rowIndex + rowSpan - 1, colIndex);

        if (cell && endCell) {
          var cellRect = cell.getBoundingClientRect();
          var endCellRect = endCell.getBoundingClientRect();
          style.height = "".concat(endCellRect.height + endCellRect.top - cellRect.top - 1, "px");
        }
      }

      if (colSpan < 2 || typeof colSpan === "undefined") {
        style.width = "calc(100% - 1px)";
      } else {
        var _endCell = getTableCell(rowIndex, colIndex + colSpan - 1);

        if (cell && _endCell) {
          var _cellRect = cell.getBoundingClientRect();

          var _endCellRect = _endCell.getBoundingClientRect();

          style.width = "".concat(_endCellRect.width + _endCellRect.left - _cellRect.left - 1, "px");
        }
      }

      return style;
    };

    _this.saveRef = function (name) {
      return function (node) {
        if (name) {
          _this[name] = node;
        }
      };
    };

    var children = _props.children,
        _columns = _props.columns,
        defaultExpandedRowKeys = _props.defaultExpandedRowKeys,
        defaultSelectedRowKeys = _props.defaultSelectedRowKeys,
        _expandedRowKeysProp = _props.expandedRowKeys,
        _selectedRowKeysProp = _props.selectedRowKeys;
    _this.columnManager = new _ColumnManager["default"](_columns || children);
    var _selectedRowKeys = [];

    if (_selectedRowKeysProp) {
      _selectedRowKeys = _selectedRowKeysProp;
    } else if (defaultSelectedRowKeys) {
      _selectedRowKeys = defaultSelectedRowKeys;
    }

    var _expandedRowKeys = [];

    if (_expandedRowKeysProp) {
      _expandedRowKeys = _expandedRowKeysProp;
    } else if (defaultExpandedRowKeys) {
      _expandedRowKeys = defaultExpandedRowKeys;
    }

    _this.state = {
      affixedBottom: false,
      affixedTop: false,
      children: _columns || children,
      combinedCellsInfo: [],
      currentlyResizing: {},
      expandedRowKeys: _expandedRowKeys,
      fixedColumnsInfos: [],
      isMainTableOverflowX: false,
      isMainTableOverflowY: false,
      isResizerShow: false,
      mainTableStyle: {},
      resized: [],
      selectedRowKeys: _selectedRowKeys
    };
    _this.debouncedWindowResize = (0, _debounce.debounce)(_this.handleWindowResize, 100);
    return _this;
  }

  _createClass(Table, [{
    key: "render",
    value: function render() {
      var _classNames10,
          _this2 = this,
          _classNames11;

      var _this$props10 = this.props,
          className = _this$props10.className,
          dataSource = _this$props10.dataSource,
          emptyText = _this$props10.emptyText,
          headerAffixed = _this$props10.headerAffixed,
          headerAffixedOffsetTop = _this$props10.headerAffixedOffsetTop,
          headerAffixGetTarget = _this$props10.headerAffixGetTarget,
          headerEmphasized = _this$props10.headerEmphasized,
          height = _this$props10.height,
          loading = _this$props10.loading,
          size = _this$props10.size,
          virtualScroll = _this$props10.virtualScroll,
          otherProps = _objectWithoutProperties(_this$props10, ["className", "dataSource", "emptyText", "headerAffixed", "headerAffixedOffsetTop", "headerAffixGetTarget", "headerEmphasized", "height", "loading", "size", "virtualScroll"]);

      var restProps = (0, _omit["default"])(otherProps, ["align", "children", "columns", "columnsResizable", "defaultExpandedRowKeys", "defaultSelectedRowKeys", "expandIconVisible", "expandOnRowClick", "expandedRowKeys", "expandedRowRender", "getCellClassName", "getCellProps", "getCellStyle", "getHeadClassName", "getHeadStyle", "getHeadCellClassName", "getHeadCellStyle", "getRowClassName", "getRowStyle", "getSelectProps", "onExpandChange", "onSelectChange", "onScroll", "onRowClick", "onRowMouseEnter", "onRowMouseLeave", "selectMultiple", "selectedRowKeys", "selectOnRowClick", "verticalAlign", "virtualListProps", "virtualListStyle"]);
      var _this$state5 = this.state,
          children = _this$state5.children,
          isMainTableOverflowX = _this$state5.isMainTableOverflowX,
          isMainTableOverflowY = _this$state5.isMainTableOverflowY;

      if (children) {
        this.columnManager.reset(children);
      }

      var getGroupColumnsDepth = this.columnManager.getGroupColumnsDepth;
      var empty = !(dataSource && dataSource.length);
      var classSet = (0, _classnames["default"])(className, "".concat(prefix, "-wrapper"), "".concat(prefix, "-").concat(size), (_classNames10 = {}, _defineProperty(_classNames10, "".concat(prefix, "-headerEmphasized"), headerEmphasized), _defineProperty(_classNames10, "".concat(prefix, "-empty"), empty), _defineProperty(_classNames10, "".concat(prefix, "-loading"), loading), _defineProperty(_classNames10, "".concat(prefix, "-overflow-x"), isMainTableOverflowX), _defineProperty(_classNames10, "".concat(prefix, "-overflow-y"), isMainTableOverflowY), _defineProperty(_classNames10, "".concat(prefix, "-virtualScroll"), virtualScroll), _classNames10));
      return React.createElement("div", _extends({
        className: classSet,
        ref: this.saveRef("wrapper")
      }, restProps), React.createElement(_rcAnimate["default"], {
        component: "div",
        transitionName: "fade",
        style: {
          position: "relative",
          top: "".concat(TD_HEIGHT[size || "small"], "px"),
          zIndex: "calc(var(--z-index-affix) + 2)"
        }
      }, loading && (headerAffixed ? React.createElement(_affix["default"], {
        offsetTop: (headerAffixedOffsetTop || 0) + TD_HEIGHT[size || "small"],
        getContainer: function getContainer() {
          return _this2.wrapper;
        },
        getTarget: headerAffixGetTarget,
        className: "".concat(prefix, "-progress")
      }, React.createElement("i", null), React.createElement("i", null)) : React.createElement("div", {
        className: "".concat(prefix, "-progress")
      }, React.createElement("i", null), React.createElement("i", null)))), React.createElement("div", {
        className: (0, _classnames["default"])("".concat(prefix, "-tables"), (_classNames11 = {}, _defineProperty(_classNames11, "".concat(prefix, "-innerScroll"), !!height), _defineProperty(_classNames11, "".concat(prefix, "-overflowed"), isMainTableOverflowY), _defineProperty(_classNames11, "".concat(prefix, "-hasFixedRightColumns"), this.columnManager.isAnyColumnsRightFixed()), _classNames11)),
        style: {
          maxHeight: height || undefined,
          paddingTop: height ? "".concat(TD_HEIGHT[size || "small"] * getGroupColumnsDepth(), "px") : ""
        }
      }, React.createElement("div", {
        className: "".concat(prefix, "-mainTable"),
        ref: this.saveRef("mainTable"),
        role: "table",
        onScroll: this.handleMainTableScroll
      }, this.generateTable())), empty && React.createElement("div", {
        className: "".concat(prefix, "-placeholder")
      }, emptyText));
    }
  }]);

  return Table;
}(React.Component);

Table.Column = _Column["default"];
Table.propTypes = {
  align: _propTypes["default"].oneOf([null, "left", "center", "right"]),
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  columns: _propTypes["default"].array,
  columnsResizable: _propTypes["default"].bool,
  dataSource: _propTypes["default"].array,
  defaultExpandedRowKeys: _propTypes["default"].array,
  defaultSelectedRowKeys: _propTypes["default"].array,
  emptyText: _propTypes["default"].node,
  expandIconVisible: _propTypes["default"].bool,
  expandOnRowClick: _propTypes["default"].bool,
  expandedRowKeys: _propTypes["default"].array,
  expandedRowRender: _propTypes["default"].func,
  getCellClassName: _propTypes["default"].func,
  getCellProps: _propTypes["default"].func,
  getCellStyle: _propTypes["default"].func,
  getHeadClassName: _propTypes["default"].func,
  getHeadStyle: _propTypes["default"].func,
  getHeadCellClassName: _propTypes["default"].func,
  getHeadCellStyle: _propTypes["default"].func,
  getRowClassName: _propTypes["default"].func,
  getRowStyle: _propTypes["default"].func,
  getSelectProps: _propTypes["default"].func,
  headerAffixed: _propTypes["default"].bool,
  headerAffixedOffsetTop: _propTypes["default"].number,
  headerAffixGetTarget: _propTypes["default"].func,
  headerEmphasized: _propTypes["default"].bool,
  height: function height(props) {
    var headerAffixed = props.headerAffixed,
        height = props.height;

    if (height) {
      if (typeof height !== "number") {
        return new Error("Invalid prop `height` supplied to `Table`, expected `number`.");
      }

      if (headerAffixed && !!height) {
        return new Error("Table.js 不允许同时使用 prop `headerAffixed` 与 `height`，不认可将这两者混用的需求场景。");
      }
    }

    return null;
  },
  loading: _propTypes["default"].bool,
  onExpandChange: _propTypes["default"].func,
  onRowClick: _propTypes["default"].func,
  onRowMouseEnter: _propTypes["default"].func,
  onRowMouseLeave: _propTypes["default"].func,
  onSelectChange: _propTypes["default"].func,
  onScroll: _propTypes["default"].func,
  selectMultiple: _propTypes["default"].bool,
  selectOnRowClick: _propTypes["default"].bool,
  selectedRowKeys: _propTypes["default"].array,
  size: _propTypes["default"].oneOf(["mini", "small", "medium", "large"]),
  verticalAlign: _propTypes["default"].oneOf([null, "top", "center", "bottom"]),
  virtualListProps: _propTypes["default"].object,
  virtualListStyle: _propTypes["default"].object,
  virtualScroll: _propTypes["default"].bool
};
Table.defaultProps = {
  align: null,
  children: "",
  className: undefined,
  columns: null,
  columnsResizable: null,
  dataSource: [],
  defaultExpandedRowKeys: null,
  defaultSelectedRowKeys: null,
  emptyText: "暂无数据",
  expandIconVisible: true,
  expandOnRowClick: false,
  expandedRowKeys: null,
  expandedRowRender: function expandedRowRender() {
    return "";
  },
  getCellClassName: function getCellClassName() {
    return "";
  },
  getCellProps: noop,
  getCellStyle: noop,
  getHeadClassName: function getHeadClassName() {
    return "";
  },
  getHeadStyle: noop,
  getHeadCellClassName: function getHeadCellClassName() {
    return "";
  },
  getHeadCellStyle: noop,
  getRowClassName: function getRowClassName() {
    return "";
  },
  getRowStyle: noop,
  getSelectProps: function getSelectProps() {
    return {};
  },
  headerAffixed: false,
  headerAffixedOffsetTop: 0,
  headerAffixGetTarget: null,
  headerEmphasized: false,
  height: null,
  loading: false,
  onExpandChange: null,
  onRowClick: null,
  onRowMouseEnter: null,
  onRowMouseLeave: null,
  onSelectChange: null,
  onScroll: null,
  selectMultiple: true,
  selectOnRowClick: false,
  selectedRowKeys: null,
  size: "small",
  verticalAlign: undefined,
  virtualListProps: {},
  virtualListStyle: {},
  virtualScroll: false
};

Table.getDerivedStateFromProps = function (_ref3) {
  var children = _ref3.children,
      columns = _ref3.columns,
      expandedRowKeys = _ref3.expandedRowKeys,
      selectedRowKeys = _ref3.selectedRowKeys;
  var newState = {};

  if (children !== null || columns !== null) {
    newState.children = columns || children;
  }

  if (expandedRowKeys !== null) {
    newState.expandedRowKeys = expandedRowKeys;
  }

  if (selectedRowKeys !== null) {
    newState.selectedRowKeys = selectedRowKeys;
  }

  return Object.keys(newState).length > 0 ? newState : null;
};

var _default = Table;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGFibGUvVGFibGUudHN4Il0sIm5hbWVzIjpbIm5vb3AiLCJwcmVmaXgiLCJURF9NSU5fV0lEVEgiLCJTRUxFQ1RfVERfV0lEVEgiLCJURF9IRUlHSFQiLCJsYXJnZSIsIm1lZGl1bSIsIm1pbmkiLCJzbWFsbCIsIkhPUklaT05UQUxfQUxJR04iLCJjZW50ZXIiLCJsZWZ0IiwicmlnaHQiLCJWRVJUSUNBTF9BTElHTiIsImJvdHRvbSIsInRvcCIsImlzRml4ZWRMZWZ0IiwiY29sIiwiZml4ZWQiLCJpc0ZpeGVkUmlnaHQiLCJUYWJsZSIsInByb3BzIiwiY29tYmluZWRDZWxsc0luZm8iLCJhZmZpeEhlYWRlciIsImFmZml4U2Nyb2xsYmFyIiwibWFpblRhYmxlIiwibWFpblRhYmxlQm9keSIsIm1haW5UaGVhZCIsIndyYXBwZXIiLCJkZWJvdW5jZWRXaW5kb3dSZXNpemUiLCJyZXNpemVFdmVudCIsImNvbHVtbk1hbmFnZXIiLCJzaG91bGRDb21wb25lbnRVcGRhdGUiLCJuZXh0UHJvcHMiLCJuZXh0U3RhdGUiLCJzdGF0ZSIsImNvbXBvbmVudERpZE1vdW50IiwiaXNBbnlDb2x1bW5zRml4ZWQiLCJoZWFkZXJBZmZpeGVkIiwiaGVpZ2h0IiwiaGFuZGxlV2luZG93UmVzaXplIiwid2luZG93IiwibGVuZ3RoIiwic2V0U3RhdGUiLCJjb21wb25lbnREaWRVcGRhdGUiLCJkYXRhU291cmNlT2xkIiwiZGF0YVNvdXJjZSIsImdldENlbGxQcm9wc09sZCIsImdldENlbGxQcm9wcyIsInNldFRpbWVvdXQiLCJmb3JjZVVwZGF0ZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlIiwiY2xlYXIiLCJyZXNpemVDb2x1bW5TdGFydCIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsImN1cnNvciIsImN1cnJlbnRseVJlc2l6aW5nIiwiZGF0YUluZGV4IiwicGFyZW50V2lkdGgiLCJjdXJyZW50VGFyZ2V0IiwicGFyZW50RWxlbWVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwic3RhcnRYIiwicGFnZVgiLCJhZGRFdmVudExpc3RlbmVyIiwicmVzaXplQ29sdW1uTW92aW5nIiwicmVzaXplQ29sdW1uRW5kIiwicmVzaXplZCIsImJhc2VXaWR0aCIsIk1hdGgiLCJjZWlsIiwidGl0bGUiLCJuZXdSZXNpemVkIiwiZmlsdGVyIiwibyIsIm5ld1dpZHRoIiwibWF4Iiwib25Tb3J0Iiwib25GaWx0ZXIiLCJwdXNoIiwidmFsdWUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaXNNYWluVGFibGVPdmVyZmxvd1giLCJzY3JvbGxXaWR0aCIsIm9mZnNldFdpZHRoIiwiaXNNYWluVGFibGVPdmVyZmxvd1kiLCJzY3JvbGxIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJpc1Jlc2l6ZXJTaG93Iiwib2xkU3R5bGUiLCJtYWluVGFibGVTdHlsZSIsInJlY3QiLCJoYW5kbGVNYWluVGFibGVTY3JvbGwiLCJvblNjcm9sbCIsImFmZml4ZWRUb3AiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJmaXhlZE5vZGUiLCJzY3JvbGxMZWZ0Iiwic3luY1RhYmxlU2Nyb2xsUG9zaXRpb24iLCJoYW5kbGVSb3dDbGljayIsInJvdyIsImkiLCJleHBhbmRPblJvd0NsaWNrIiwiZ2V0U2VsZWN0UHJvcHMiLCJvblJvd0NsaWNrIiwic2VsZWN0T25Sb3dDbGljayIsInNlbGVjdGVkUm93S2V5cyIsImtleSIsImRpc2FibGVkIiwiaGFuZGxlU2VsZWN0IiwiaW5jbHVkZXMiLCJoYW5kbGVFeHBhbmQiLCJoYW5kbGVUaFJlc2l6ZSIsImluZGV4IiwiZml4ZWRQb3NpdGlvbiIsImdldENvbHVtbnMiLCJmaXhlZENvbHVtbnNJbmZvcyIsImNvbHVtbnMiLCJmaW5kIiwicCIsImZpbmRJbmRleCIsInNwbGljZSIsInNvcnQiLCJhIiwiYiIsImZpeGVkQ29sdW1uc0luZm9zTGVmdCIsImZpeGVkQ29sdW1uc0luZm9zUmlnaHQiLCJmb3JFYWNoIiwiY29sSW5kZXgiLCJpc0xhc3RMZWZ0Iiwib2Zmc2V0Iiwic2xpY2UiLCJyZWR1Y2UiLCJhY2MiLCJjdXIiLCJpc0ZpcnN0UmlnaHQiLCJoYW5kbGVUaGVhZE1vdXNlRW50ZXIiLCJoYW5kbGVUaGVhZE1vdXNlTGVhdmUiLCJPYmplY3QiLCJrZXlzIiwiZXhwYW5kZWRSb3dLZXlzUHJvcCIsImV4cGFuZGVkUm93S2V5cyIsIm9uRXhwYW5kQ2hhbmdlIiwiaW5kZXhPZiIsImNoZWNrZWQiLCJvblNlbGVjdENoYW5nZSIsInNlbGVjdGVkUm93S2V5c1Byb3AiLCJzZWxlY3RNdWx0aXBsZSIsImhhbmRsZVNlbGVjdEFsbCIsImF2YWlsYWJsZUtleXMiLCJnZXRBdmFpbGFibGVSb3dzS2V5cyIsImhhc1NlbGVjdGVkQWxsIiwiZXZlcnkiLCJnZW5lcmF0ZVRhYmxlIiwiZXhwYW5kSWNvblZpc2libGUiLCJleHBhbmRlZFJvd1JlbmRlciIsImdldEhlYWRDbGFzc05hbWUiLCJnZXRIZWFkU3R5bGUiLCJnZXRSb3dDbGFzc05hbWUiLCJnZXRSb3dTdHlsZSIsImhlYWRlckFmZml4ZWRPZmZzZXRUb3AiLCJoZWFkZXJBZmZpeEdldFRhcmdldCIsIm9uUm93TW91c2VFbnRlciIsIm9uUm93TW91c2VMZWF2ZSIsInNpemUiLCJ2ZXJ0aWNhbEFsaWduIiwidmlydHVhbExpc3RQcm9wcyIsInZpcnR1YWxMaXN0U3R5bGUiLCJ2aXJ0dWFsU2Nyb2xsIiwiYWZmaXhlZEJvdHRvbSIsImdldEdyb3VwQ29sdW1uc0RlcHRoIiwiaXNBbnlDb2x1bW5zTGVmdEZpeGVkIiwidGhlYWRTdHlsZSIsInRoZWFkUGxhY2Vob2xkZXJWaXNpYmxlIiwidGhlYWQiLCJzYXZlUmVmIiwibWFwIiwiYWxpZ24iLCJmaWx0ZXJzIiwic29ydE9yZGVyIiwicmVzaXplZENvbCIsImNsaWNrYWJsZSIsInVuZGVmaW5lZCIsIm1pbldpZHRoIiwiZmxleFZhbHVlIiwibGFzdEluZGV4T2YiLCJ3aWR0aFJlc2l6ZSIsImZsZXgiLCJtYXhXaWR0aCIsInRleHRBbGlnbiIsImdlbmVyYXRlVGhDZWxsIiwiY2hpbGRyZW4iLCJjaGlsZENvbCIsImNoaWxkQ29sSW5kZXgiLCJncmFuZENvbCIsImdyYW5kQ29sSW5kZXgiLCJnZW5lcmF0ZVRycyIsInJvd0luZGV4IiwiY29sQXJyYXkiLCJzZWxlY3RQcm9wc0dldHRlZCIsImFsbFNlbGVjdFByb3BzIiwiY2xhc3NOYW1lIiwib25DaGFuZ2UiLCJvbkNsaWNrIiwic2VsZWN0UHJvcHMiLCJzZWxlY3RDZWxsIiwiZ2VuZXJhdGVUciIsImNvbHVtbnNQYXJhbSIsInBhcmVudEluZGV4IiwiY29sSW5kZXhQYXJhbSIsImNoaWxkcmVuQ291bnQiLCJnZW5lcmF0ZVRib2R5Q2VsbCIsInRyIiwiYWxpZ25JdGVtcyIsInBvcG92ZXJQcm9wcyIsInBvcHVwIiwiYm9vbCIsImRpc3BsYXkiLCJ6SW5kZXgiLCJmbGV4RGlyZWN0aW9uIiwib3B0aW9ucyIsImNvbHVtbnNSZXNpemFibGUiLCJnZXRIZWFkQ2VsbENsYXNzTmFtZSIsImdldEhlYWRDZWxsU3R5bGUiLCJjb2xSZXNpemFibGUiLCJyZXNpemFibGUiLCJpc0xhc3RUaCIsInRoQ2VsbCIsImp1c3RpZnlDb250ZW50Iiwib3JkZXIiLCJmaWx0ZXJlZFZhbHVlIiwiZmlsdGVyVmlzaWJsZSIsImZpbHRlck11bHRpcGxlIiwiZmlsdGVyUG9wb3ZlclByb3BzIiwidmlzaWJsZSIsIm9uRmlsdGVyVmlzaWJsZUNoYW5nZSIsInBvcG92ZXIiLCJjZWxsIiwiY2VsbEluZGV4IiwiYWxpZ25Qcm9wIiwiZ2V0Q2VsbENsYXNzTmFtZSIsImdldENlbGxTdHlsZSIsInZlcnRpY2FsQWxpZ25Qcm9wIiwicmVuZGVyIiwiY2VsbENsYXNzTmFtZSIsImNlbGxQcm9wcyIsImNlbGxTdHlsZSIsInJvd1NwYW4iLCJjb2xTcGFuIiwib3RoZXJDZWxsUHJvcHMiLCJnZXRDb21iaW5lZENlbGxTdHlsZSIsIl8iLCJfXyIsImdldFRhYmxlQ2VsbCIsInJvd0luZGV4UGFyYW0iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZW5kQ2VsbCIsImNlbGxSZWN0IiwiZW5kQ2VsbFJlY3QiLCJuYW1lIiwibm9kZSIsImRlZmF1bHRFeHBhbmRlZFJvd0tleXMiLCJkZWZhdWx0U2VsZWN0ZWRSb3dLZXlzIiwiQ29sdW1uTWFuYWdlciIsImVtcHR5VGV4dCIsImhlYWRlckVtcGhhc2l6ZWQiLCJsb2FkaW5nIiwib3RoZXJQcm9wcyIsInJlc3RQcm9wcyIsInJlc2V0IiwiZW1wdHkiLCJjbGFzc1NldCIsInBvc2l0aW9uIiwiaXNBbnlDb2x1bW5zUmlnaHRGaXhlZCIsIm1heEhlaWdodCIsInBhZGRpbmdUb3AiLCJSZWFjdCIsIkNvbXBvbmVudCIsIkNvbHVtbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9uZU9mIiwic3RyaW5nIiwiYXJyYXkiLCJmdW5jIiwibnVtYmVyIiwiRXJyb3IiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJuZXdTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTSxDQUFFLENBQXJCOztBQUNBLElBQU1DLE1BQU0sR0FBRyxZQUFmO0FBQ0EsSUFBTUMsWUFBWSxHQUFHLEdBQXJCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLEVBQXhCO0FBQ0EsSUFBTUMsU0FBUyxHQUFHO0FBQ2hCQyxFQUFBQSxLQUFLLEVBQUUsRUFEUztBQUVoQkMsRUFBQUEsTUFBTSxFQUFFLEVBRlE7QUFHaEJDLEVBQUFBLElBQUksRUFBRSxFQUhVO0FBSWhCQyxF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QUNEOztBQUNELFNBQU9nQyxNQUFNLENBQUNDLElBQVAsQ0FBWXVKLFFBQVosRUFBc0IvUCxNQUF0QixHQUErQixDQUEvQixHQUFtQytQLFFBQW5DLEdBQThDLElBQXJEO0FBQ0QsQzs7ZUEwNENZclIsSyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2ludGVyYWN0aXZlLXN1cHBvcnRzLWZvY3VzICovXG4vKipcbiAqIFRhYmxlIOe7hOS7tuWwhuS4jeS8muS/ruaUueaIkCBGdW5jdGlvbkNvbXBvbmVudO+8jFxuICog5Zug5Li66ICD6JmR5Yiw5LmL5YmN5Zyo5L2/55So5pe25a2Y5Zyo5LiN5bCR6YCa6L+HIOWunuS+iy50YWJsZSDnmoTmlrnms5Xnm7TmjqXorr/pl64gPHRhYmxlIC8+IOWFg+e0oOeahOeUqOazleOAglxuICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgQW5pbWF0ZSBmcm9tIFwicmMtYW5pbWF0ZVwiXG5pbXBvcnQgc2hhbGxvd0VxdWFsIGZyb20gXCJzaGFsbG93ZXF1YWxcIlxuaW1wb3J0IGFkZEV2ZW50TGlzdGVuZXIgZnJvbSBcInJjLXV0aWwvbGliL0RvbS9hZGRFdmVudExpc3RlbmVyXCJcbmltcG9ydCBMaXN0IGZyb20gXCJyYy12aXJ0dWFsLWxpc3RcIlxuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tIFwiZGVib3VuY2VcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IG9taXQgZnJvbSBcIi4uL191dGlsL29taXRcIlxuaW1wb3J0IENvbHVtbiwgeyBJQ29sdW1uUHJvcHMgfSBmcm9tIFwiLi9Db2x1bW5cIlxuaW1wb3J0IEFmZml4IGZyb20gXCIuLi9hZmZpeFwiXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSBcIi4uL2NoZWNrYm94XCJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCBQb3BvdmVyIGZyb20gXCIuLi9wb3BvdmVyXCJcbmltcG9ydCBSYWRpbyBmcm9tIFwiLi4vcmFkaW9cIlxuaW1wb3J0IFJlc2l6ZU9ic2VydmVyIGZyb20gXCIuLi9yZXNpemUtb2JzZXJ2ZXJcIlxuaW1wb3J0IFRhYmxlU29ydCBmcm9tIFwiLi9UYWJsZVNvcnRcIlxuaW1wb3J0IFRhYmxlRmlsdGVyIGZyb20gXCIuL1RhYmxlRmlsdGVyXCJcbmltcG9ydCBDb2x1bW5NYW5hZ2VyIGZyb20gXCIuL0NvbHVtbk1hbmFnZXJcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmludGVyZmFjZSBJQmFzZU9iamVjdCB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxufVxuXG5pbnRlcmZhY2UgSUZpeGVkQ29sdW1uc0luZm8ge1xuICB3aWR0aDogbnVtYmVyXG4gIGRhdGFJbmRleDogc3RyaW5nXG4gIGZpeGVkOiBcImxlZnRcIiB8IFwicmlnaHRcIlxuICBpbmRleDogbnVtYmVyXG4gIGlzTGFzdExlZnQ/OiBib29sZWFuXG4gIGlzRmlyc3RSaWdodD86IGJvb2xlYW5cbiAgb2Zmc2V0PzogbnVtYmVyXG59XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLW5lc3RlZC10ZXJuYXJ5ICovXG5jb25zdCBub29wID0gKCkgPT4ge31cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS10YWJsZVwiXG5jb25zdCBURF9NSU5fV0lEVEggPSAxMDBcbmNvbnN0IFNFTEVDVF9URF9XSURUSCA9IDUwXG5jb25zdCBURF9IRUlHSFQgPSB7XG4gIGxhcmdlOiA2MCxcbiAgbWVkaXVtOiA1MCxcbiAgbWluaTogNDAsXG4gIHNtYWxsOiA0MCxcbn1cbmNvbnN0IEhPUklaT05UQUxfQUxJR04gPSB7XG4gIGNlbnRlcjogXCJjZW50ZXJcIiBhcyBcImNlbnRlclwiLFxuICBsZWZ0OiBcImZsZXgtc3RhcnRcIiBhcyBcImZsZXgtc3RhcnRcIixcbiAgcmlnaHQ6IFwiZmxleC1lbmRcIiBhcyBcImZsZXgtZW5kXCIsXG59XG5jb25zdCBWRVJUSUNBTF9BTElHTiA9IHtcbiAgYm90dG9tOiBcImZsZXgtZW5kXCIgYXMgXCJmbGV4LWVuZFwiLFxuICBjZW50ZXI6IFwiY2VudGVyXCIgYXMgXCJjZW50ZXJcIixcbiAgdG9wOiBcImZsZXgtc3RhcnRcIiBhcyBcImZsZXgtc3RhcnRcIixcbn1cbmNvbnN0IGlzRml4ZWRMZWZ0ID0gKGNvbDogSUJhc2VPYmplY3QpOiBib29sZWFuID0+XG4gIGNvbC5maXhlZCA9PT0gXCJsZWZ0XCIgfHwgY29sLmZpeGVkID09PSB0cnVlXG5jb25zdCBpc0ZpeGVkUmlnaHQgPSAoY29sOiBJQmFzZU9iamVjdCk6IGJvb2xlYW4gPT4gY29sLmZpeGVkID09PSBcInJpZ2h0XCJcblxuZXhwb3J0IGludGVyZmFjZSBJVGFibGVQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog57uf5LiA5Zyw5o6n5Yi25YiX5rC05bmz6Z2g6b2Q5pa55ZCRXG4gICAqL1xuICBhbGlnbj86IG51bGwgfCBcImxlZnRcIiB8IFwiY2VudGVyXCIgfCBcInJpZ2h0XCJcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBhbnlcbiAgLyoqXG4gICAqIOS7peaVsOe7hOeahOaWueW8j+S8oOWFpSBDb2x1bW5z77yM5aaC5p6c5Lyg5YWl5LqG5q2kIFByb3DvvIzliJkgVGFibGUg5Lya5b+955WlIGNoaWxkcmVuXG4gICAqL1xuICBjb2x1bW5zPzogSUNvbHVtblByb3BzW10gfCBudWxsXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog5o6n5Yi25pW05LiqIFRhYmxlIOeahCBDb2x1bW5zIOiDveWQpuiwg+aVtOWuveW6plxuICAgKi9cbiAgY29sdW1uc1Jlc2l6YWJsZT86IGJvb2xlYW4gfCBudWxsXG4gIC8qKlxuICAgKiDmlbDmja7mupBcbiAgICovXG4gIGRhdGFTb3VyY2U/OiBJQmFzZU9iamVjdFtdXG4gIC8qKlxuICAgKiDjgJDlsZXlvIDooYzjgJHpu5jorqTlsZXlvIDnmoTooYznmoQga2V577yM6K+35Zyo5Lyg5YWl5YmN6L+b6KGM5ZCI5rOV5qCh6aqM77yM5Zug5Li6IFRhYmxlIOWvueatpCBQcm9wIOayoeaciei/h+WkmuagoemqjFxuICAgKiDor7fnoa7kv50gZGF0YVNvdXJjZSDnmoTlr7nosaHlkKvmnInlsZ7mgKcga2V577yM5Y+K5YW25ZSv5LiA55qE5YC844CCXG4gICAqL1xuICBkZWZhdWx0RXhwYW5kZWRSb3dLZXlzPzogQXJyYXk8UmVhY3QuUmVhY3RUZXh0PiB8IG51bGxcbiAgLyoqXG4gICAqIOOAkOmAieaLqeihjOOAkem7mOiupOmAieS4reeahOihjOeahCBrZXnvvIzor7flnKjkvKDlhaXliY3ov5vooYzlkIjms5XmoKHpqozvvIzlm6DkuLogVGFibGUg5a+55q2kIFByb3Ag5rKh5pyJ6L+H5aSa5qCh6aqMXG4gICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICovXG4gIGRlZmF1bHRTZWxlY3RlZFJvd0tleXM/OiBBcnJheTxSZWFjdC5SZWFjdFRleHQ+IHwgbnVsbFxuICAvKipcbiAgICog56m65pWw5o2u5rqQ5pe25pi+56S655qE5YaF5a65XG4gICAqL1xuICBlbXB0eVRleHQ/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOOAkOWxleW8gOihjOOAkeaYr+WQpuaYvuekuuWxleW8gCBpY29u77yM5aaC5p6c5Li6IGZhbHNl77yM5oSP5ZGz552AXG4gICAqIDEuIOS9v+eUqCBleHBhbmRPblJvd0NsaWNrIOaIluiAhVxuICAgKiAyLiDpnIDopoHlnKjnu4Tku7blpJboh6rooYzosIPnlKjnu4Tku7bmlrnms5XlrozmiJDlsZXlvIDlip/og73vvIh0aGlzLnRhYmxlLmhhbmRsZUV4cGFuZChyb3cua2V5Ke+8ieOAglxuICAgKi9cbiAgZXhwYW5kSWNvblZpc2libGU/OiBib29sZWFuXG4gIC8qKlxuICAgKiDjgJDlsZXlvIDooYzjgJHmmK/lkKblnKjngrnlh7vmlbTooYzml7bop6blj5HlsZXlvIDmlLbotbdcbiAgICog5q2kIHByb3Ag5Lya5ZyoIC50ciDkuIrliqDlhaUgb25DbGljayDkuovku7bvvIxcbiAgICog5aaC5p6c5LiN5biM5pyb5Y2V5YWD5qC85YaFIG9uQ2xpY2sg6Kem5Y+R5LqL5Lu277yM6K+35Zyo6YKj5Lqb5LqL5Lu25LitIHN0b3BQcm9wYWdhdGlvbuOAglxuICAgKi9cbiAgZXhwYW5kT25Sb3dDbGljaz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOOAkOWxleW8gOihjOOAkeS7juWklumDqOaOp+WItu+8jOWxleW8gOeahOihjOeahCBrZXnvvIzor7flnKjkvKDlhaXliY3ov5vooYzlkIjms5XmoKHpqozvvIzlm6DkuLogVGFibGUg5a+55q2kIFByb3Ag5rKh5pyJ6L+H5aSa5qCh6aqMXG4gICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICovXG4gIGV4cGFuZGVkUm93S2V5cz86IEFycmF5PFJlYWN0LlJlYWN0VGV4dD4gfCBudWxsXG4gIC8qKlxuICAgKiDjgJDlsZXlvIDooYzjgJHlsZXlvIDooYznmoTlhoXlrrlcbiAgICovXG4gIGV4cGFuZGVkUm93UmVuZGVyPzogKHJvdz86IElCYXNlT2JqZWN0LCByb3dJbmRleD86IG51bWJlcikgPT4gUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDorr7nva7mr4/kuKrljZXlhYPmoLznmoTnsbvlkI3vvJoocm93LCBjb2wsIHJvd0luZGV4LCBjb2xJbmRleCkgPT4gKHN0cmluZylcbiAgICovXG4gIGdldENlbGxDbGFzc05hbWU/OiAoXG4gICAgcm93PzogSUJhc2VPYmplY3QsXG4gICAgY29sPzogSUJhc2VPYmplY3QsXG4gICAgcm93SW5kZXg/OiBudW1iZXIsXG4gICAgY29sSW5kZXg/OiBudW1iZXJcbiAgKSA9PiBzdHJpbmdcbiAgLyoqXG4gICAqIOiuvue9ruavj+S4quWNleWFg+agvOS4iueahOeUsee7hOS7tuinhOWumueahCBwcm9w77yMXG4gICAqIOWmgiByb3dTcGFuIGNvbFNwYW7vvIwocm93LCBjb2wsIHJvd0luZGV4LCBjb2xJbmRleCkgPT4gKHt9KVxuICAgKi9cbiAgZ2V0Q2VsbFByb3BzPzogKFxuICAgIHJvdz86IElCYXNlT2JqZWN0LFxuICAgIGNvbD86IElCYXNlT2JqZWN0LFxuICAgIHJvd0luZGV4PzogbnVtYmVyLFxuICAgIGNvbEluZGV4PzogbnVtYmVyXG4gICkgPT4gSUJhc2VPYmplY3QgfCB2b2lkXG4gIC8qKlxuICAgKiDorr7nva7mr4/kuKrljZXlhYPmoLzkuIrnmoQgc3R5bGXvvIwocm93LCBjb2wsIHJvd0luZGV4LCBjb2xJbmRleCkgPT4gKHt9KVxuICAgKi9cbiAgZ2V0Q2VsbFN0eWxlPzogKFxuICAgIHJvdz86IElCYXNlT2JqZWN0LFxuICAgIGNvbD86IElCYXNlT2JqZWN0LFxuICAgIHJvd0luZGV4PzogbnVtYmVyLFxuICAgIGNvbEluZGV4PzogbnVtYmVyXG4gICkgPT4gUmVhY3QuQ1NTUHJvcGVydGllcyB8IHZvaWRcbiAgLyoqXG4gICAqIOiuvue9riB0aGVhZCDnmoTnsbvlkI3vvJooKSA9PiAoc3RyaW5nKVxuICAgKi9cbiAgZ2V0SGVhZENsYXNzTmFtZT86ICgpID0+IHN0cmluZ1xuICAvKipcbiAgICog6K6+572uIHRoZWFkIOS4iueahCBzdHlsZe+8jCgpID0+ICh7fSlcbiAgICovXG4gIGdldEhlYWRTdHlsZT86ICgpID0+IFJlYWN0LkNTU1Byb3BlcnRpZXMgfCB2b2lkXG4gIC8qKlxuICAgKiDorr7nva7mr4/kuKogVEgg55qE57G75ZCN77yaKGNvbCwgY29sSW5kZXgpID0+IChzdHJpbmcpXG4gICAqL1xuICBnZXRIZWFkQ2VsbENsYXNzTmFtZT86IChjb2w/OiBJQmFzZU9iamVjdCwgY29sSW5kZXg/OiBudW1iZXIpID0+IHN0cmluZ1xuICAvKipcbiAgICog6K6+572u5q+P5LiqIFRIIOS4iueahCBzdHlsZe+8jChjb2wsIGNvbEluZGV4KSA9PiAoe30pXG4gICAqL1xuICBnZXRIZWFkQ2VsbFN0eWxlPzogKFxuICAgIGNvbD86IElCYXNlT2JqZWN0LFxuICAgIGNvbEluZGV4PzogbnVtYmVyXG4gICkgPT4gUmVhY3QuQ1NTUHJvcGVydGllcyB8IHZvaWRcbiAgLyoqXG4gICAqIOiuvue9ruavj+ihjOeahOexu+WQje+8mihyb3csIHJvd0luZGV4KSA9PiAoc3RyaW5nKVxuICAgKi9cbiAgZ2V0Um93Q2xhc3NOYW1lPzogKHJvdz86IElCYXNlT2JqZWN0LCByb3dJbmRleD86IG51bWJlcikgPT4gc3RyaW5nXG4gIC8qKlxuICAgKiDorr7nva7mr4/ooYznmoQgc3R5bGXvvIwocm93LCByb3dJbmRleCkgPT4gKHt9KVxuICAgKi9cbiAgZ2V0Um93U3R5bGU/OiAoXG4gICAgcm93PzogSUJhc2VPYmplY3QsXG4gICAgcm93SW5kZXg/OiBudW1iZXJcbiAgKSA9PiBSZWFjdC5DU1NQcm9wZXJ0aWVzIHwgdm9pZFxuICAvKipcbiAgICog44CQ6YCJ5oup6KGM44CR6K6+572u5q+P5LiqIENoZWNrYm94L1JhZGlvIOS4iueahCBwcm9wIChyb3csIHJvd0luZGV4KSA9PiAoe30p77ybXG4gICAqIOWPr+S7peWcqOi/memHjOWbnuS8oCBkaXNhYmxlZDogdHJ1ZSwg5o6n5Yi26K+l6KGM5LiN6IO96YCJ5oup77yb6K+356Gu5L+dIGRhdGFTb3VyY2Ug55qE5a+56LGh5ZCr5pyJ5bGe5oCnIGtlee+8jOWPiuWFtuWUr+S4gOeahOWAvOOAglxuICAgKi9cbiAgZ2V0U2VsZWN0UHJvcHM/OiAocm93PzogSUJhc2VPYmplY3QsIHJvd0luZGV4PzogbnVtYmVyKSA9PiBJQmFzZU9iamVjdFxuICAvKipcbiAgICog5piv5ZCm6ZyA6KaB6KGo5aS05Zu65a6a5Yiw6aG16Z2i5LiKXG4gICAqL1xuICBoZWFkZXJBZmZpeGVkPzogYm9vbGVhblxuICAvKipcbiAgICog6Led56a756qX5Y+j6aG26YOo6L6+5Yiw5oyH5a6a5YGP56e76YeP5ZCO6Kem5Y+R6KGo5aS05Zu65a6aXG4gICAqL1xuICBoZWFkZXJBZmZpeGVkT2Zmc2V0VG9wPzogbnVtYmVyXG4gIC8qKlxuICAgKiDlj4LogIMgPEFmZml4IC8+IOeahCBnZXRUYXJnZXQgUHJvcFxuICAgKi9cbiAgaGVhZGVyQWZmaXhHZXRUYXJnZXQ/OiAoKCkgPT4gSFRNTEVsZW1lbnQpIHwgbnVsbFxuICAvKipcbiAgICog5Yqg6YeN5aS06YOo77yM5byA5ZCv5LmL5ZCO6KGo5aS05bCG5Lya5Yqg57KXICsg6IOM5pmvXG4gICAqL1xuICBoZWFkZXJFbXBoYXNpemVkPzogYm9vbGVhblxuICAvKipcbiAgICog5oyH5a6a6auY5bqm5Lul5a6e546w6KGo5qC85YaF5rua5Yqo77yM5q2kIHByb3Ag5LiOIHByb3AgaGVhZGVyQWZmaXhlZCDkupLmlqXjgIJcbiAgICovXG4gIGhlaWdodD86IG51bWJlciB8IG51bGxcbiAgLyoqXG4gICAqIOaYr+WQpuWKoOi9veS4rVxuICAgKi9cbiAgbG9hZGluZz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOOAkOWxleW8gOihjOOAkeWxleW8gOavj+ihjOaXtueahCBoYW5kbGVy77yMVGFibGUg5Lmf5Lul5q2kIHByb3Ag5L2c5Li65byA5ZCv5bGV5byA5Yqf6IO955qE5Yik5pat77ybXG4gICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICovXG4gIG9uRXhwYW5kQ2hhbmdlPzogKChrZXlzOiBBcnJheTxSZWFjdC5SZWFjdFRleHQ+KSA9PiB2b2lkKSB8IG51bGxcbiAgLyoqXG4gICAqIOavj+ihjOeahCBjbGljayBoYW5kbGVy77yMKHJvdywgaSwgZSkgPT4ge31cbiAgICovXG4gIG9uUm93Q2xpY2s/OlxuICAgIHwgKChcbiAgICAgICAgcm93PzogSUJhc2VPYmplY3QsXG4gICAgICAgIHJvd0luZGV4PzogbnVtYmVyLFxuICAgICAgICBlPzogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD5cbiAgICAgICkgPT4gdm9pZClcbiAgICB8IG51bGxcbiAgLyoqXG4gICAqIOavj+ihjOeahCBtb3VzZUVudGVyIGhhbmRsZXLvvIwocm93LCBpLCBlKSA9PiB7fVxuICAgKi9cbiAgb25Sb3dNb3VzZUVudGVyPzpcbiAgICB8ICgoXG4gICAgICAgIHJvdz86IElCYXNlT2JqZWN0LFxuICAgICAgICByb3dJbmRleD86IG51bWJlcixcbiAgICAgICAgZT86IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+XG4gICAgICApID0+IHZvaWQpXG4gICAgfCBudWxsXG4gIC8qKlxuICAgKiDmr4/ooYznmoQgbW91c2VMZWF2ZSBoYW5kbGVy77yMKHJvdywgaSwgZSkgPT4ge31cbiAgICovXG4gIG9uUm93TW91c2VMZWF2ZT86XG4gICAgfCAoKFxuICAgICAgICByb3c/OiBJQmFzZU9iamVjdCxcbiAgICAgICAgcm93SW5kZXg/OiBudW1iZXIsXG4gICAgICAgIGU/OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PlxuICAgICAgKSA9PiB2b2lkKVxuICAgIHwgbnVsbFxuICAvKipcbiAgICog44CQ6YCJ5oup6KGM44CR6YCJ5oup5q+P6KGM5pe255qEIGhhbmRsZXLvvIxUYWJsZSDkuZ/ku6XmraQgcHJvcCDkvZzkuLrlvIDlkK/pgInmi6nlip/og73nmoTliKTmlq3vvJtcbiAgICog6K+356Gu5L+dIGRhdGFTb3VyY2Ug55qE5a+56LGh5ZCr5pyJ5bGe5oCnIGtlee+8jOWPiuWFtuWUr+S4gOeahOWAvOOAglxuICAgKi9cbiAgb25TZWxlY3RDaGFuZ2U/OiAoKGtleXM6IEFycmF5PFJlYWN0LlJlYWN0VGV4dD4pID0+IHZvaWQpIHwgbnVsbFxuICAvKipcbiAgICogVGFibGUg5rua5Yqo5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uU2Nyb2xsPzogKChlOiBSZWFjdC5VSUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4gdm9pZCkgfCBudWxsXG4gIC8qKlxuICAgKiDjgJDpgInmi6nooYzjgJHlpJogLyDljZXpgInvvJvor7fnoa7kv50gZGF0YVNvdXJjZSDnmoTlr7nosaHlkKvmnInlsZ7mgKcga2V577yM5Y+K5YW25ZSv5LiA55qE5YC844CCXG4gICAqL1xuICBzZWxlY3RNdWx0aXBsZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOOAkOmAieaLqeihjOOAkeaYr+WQpuWcqOeCueWHu+aVtOihjOaXtuinpuWPkemAieaLqeOAglxuICAgKiDmraQgcHJvcCDkvJrlnKggLnRyIOS4iuWKoOWFpSBvbkNsaWNrIOS6i+S7tu+8jFxuICAgKiDlpoLmnpzkuI3luIzmnJvljZXlhYPmoLzlhoUgb25DbGljayDop6blj5Hkuovku7bvvIzor7flnKjpgqPkupvkuovku7bkuK0gc3RvcFByb3BhZ2F0aW9u44CCXG4gICAqL1xuICBzZWxlY3RPblJvd0NsaWNrPzogYm9vbGVhblxuICAvKipcbiAgICog44CQ6YCJ5oup6KGM44CR5LuO5aSW6YOo5o6n5Yi277yM6YCJ5Lit55qE6KGM55qEIGtlee+8jOivt+WcqOS8oOWFpeWJjei/m+ihjOWQiOazleagoemqjO+8jFxuICAgKiDlm6DkuLogVGFibGUg5a+55q2kIFByb3Ag5rKh5pyJ6L+H5aSa5qCh6aqM77ybXG4gICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICovXG4gIHNlbGVjdGVkUm93S2V5cz86IEFycmF5PFJlYWN0LlJlYWN0VGV4dD4gfCBudWxsXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7jvvIzms6jmhI/vvJrlsLrlr7jku4XmjqfliLbooYzkuI7liJfpl7Tot53vvIzkuI7lrZfkvZPlpKflsI/kuI3nu5HlrprjgIJcbiAgICovXG4gIHNpemU/OiBcIm1pbmlcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCJcbiAgLyoqXG4gICAqIOe7n+S4gOWcsOaOp+WItuWIl+WeguebtOmdoOm9kOaWueWQkVxuICAgKi9cbiAgdmVydGljYWxBbGlnbj86IFwidG9wXCIgfCBcImNlbnRlclwiIHwgXCJib3R0b21cIlxuICAvKipcbiAgICog6Jma5ouf5YiX6KGo55qEIFByb3Bz77yM6K+35Y+C6ICDIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3JjLXZpcnR1YWwtbGlzdFxuICAgKi9cbiAgdmlydHVhbExpc3RQcm9wcz86IElCYXNlT2JqZWN0XG4gIC8qKlxuICAgKiDomZrmi5/liJfooajnmoTmoLflvI/vvIzor7flnKjov5nph4zmjIflrprlrr3luqbvvIzpu5jorqTlsIbkvJrmnIkgNTAwIHB4IOWuveW6plxuICAgKi9cbiAgdmlydHVhbExpc3RTdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgLyoqXG4gICAqIOaYr+WQpuW8gOWQr+iZmuaLn+a7muWKqO+8jOatpCBQcm9wIOivt+mFjeWQiCBoZWlnaHQgUHJvcCDlkIzml7bkvb/nlKjvvIznlKjkuo7lpITnkIblpKfmlbDmja7ph4/kuIvnmoTomZrmi5/lhoXmu5rliqjvvJtcbiAgICog5q2k5Yqf6IO955qE5a6e6ZmF55So5L6L6L6D5bCR77yM5aaC5p6c5pyJ5Lu75L2V6Zeu6aKY6K+35Y+K5pe25Y+N6aaIXG4gICAqL1xuICB2aXJ0dWFsU2Nyb2xsPzogYm9vbGVhblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUYWJsZVN0YXRlIHtcbiAgYWZmaXhlZFRvcDogYm9vbGVhblxuICBhZmZpeGVkQm90dG9tOiBib29sZWFuXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbiAgY29tYmluZWRDZWxsc0luZm86IElCYXNlT2JqZWN0W11cbiAgZXhwYW5kZWRSb3dLZXlzOiBBcnJheTxSZWFjdC5SZWFjdFRleHQ+XG4gIGZpeGVkQ29sdW1uc0luZm9zOiBBcnJheTxJRml4ZWRDb2x1bW5zSW5mbz5cbiAgbWFpblRhYmxlU3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgaXNNYWluVGFibGVPdmVyZmxvd1g6IGJvb2xlYW5cbiAgaXNNYWluVGFibGVPdmVyZmxvd1k6IGJvb2xlYW5cbiAgaXNSZXNpemVyU2hvdzogYm9vbGVhblxuICBjdXJyZW50bHlSZXNpemluZzogSUJhc2VPYmplY3RcbiAgcmVzaXplZDogSUJhc2VPYmplY3RbXVxuICBzZWxlY3RlZFJvd0tleXM6IEFycmF5PFJlYWN0LlJlYWN0VGV4dD5cbn1cblxuLyoqXG4gKiDooajmoLzmmK/kuIDnp43moLzlvI/ljJbkv6Hmga/nmoTlsZXnpLrlvaLlvI/jgILpgJrluLjmnI3liqHkuo7lpKfph4/mlbDmja7mtY/op4jjgIHnrqHnkIblnLrmma/jgIJcbiAqL1xuY2xhc3MgVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVRhYmxlUHJvcHMsIElUYWJsZVN0YXRlPiB7XG4gIHB1YmxpYyBzdGF0aWMgQ29sdW1uOiB0eXBlb2YgQ29sdW1uID0gQ29sdW1uXG5cbiAgcHVibGljIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICog57uf5LiA5Zyw5o6n5Yi25YiX5rC05bmz6Z2g6b2Q5pa55ZCRXG4gICAgICovXG4gICAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgXCJsZWZ0XCIsIFwiY2VudGVyXCIsIFwicmlnaHRcIl0pLFxuICAgIC8qKlxuICAgICAqIOWtkOiKgueCuVxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICAvKipcbiAgICAgKiDpmYTliqDnsbvlkI1cbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICog5Lul5pWw57uE55qE5pa55byP5Lyg5YWlIENvbHVtbnPvvIzlpoLmnpzkvKDlhaXkuobmraQgUHJvcO+8jOWImSBUYWJsZSDkvJrlv73nlaUgY2hpbGRyZW5cbiAgICAgKi9cbiAgICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgLyoqXG4gICAgICog5o6n5Yi25pW05LiqIFRhYmxlIOeahCBDb2x1bW5zIOiDveWQpuiwg+aVtOWuveW6plxuICAgICAqL1xuICAgIGNvbHVtbnNSZXNpemFibGU6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOaVsOaNrua6kFxuICAgICAqL1xuICAgIGRhdGFTb3VyY2U6IFByb3BUeXBlcy5hcnJheSxcbiAgICAvKipcbiAgICAgKiDjgJDlsZXlvIDooYzjgJHpu5jorqTlsZXlvIDnmoTooYznmoQga2V577yM6K+35Zyo5Lyg5YWl5YmN6L+b6KGM5ZCI5rOV5qCh6aqM77yM5Zug5Li6IFRhYmxlIOWvueatpCBQcm9wIOayoeaciei/h+WkmuagoemqjFxuICAgICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICAgKi9cbiAgICBkZWZhdWx0RXhwYW5kZWRSb3dLZXlzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgLyoqXG4gICAgICog44CQ6YCJ5oup6KGM44CR6buY6K6k6YCJ5Lit55qE6KGM55qEIGtlee+8jOivt+WcqOS8oOWFpeWJjei/m+ihjOWQiOazleagoemqjO+8jOWboOS4uiBUYWJsZSDlr7nmraQgUHJvcCDmsqHmnInov4flpJrmoKHpqoxcbiAgICAgKiDor7fnoa7kv50gZGF0YVNvdXJjZSDnmoTlr7nosaHlkKvmnInlsZ7mgKcga2V577yM5Y+K5YW25ZSv5LiA55qE5YC844CCXG4gICAgICovXG4gICAgZGVmYXVsdFNlbGVjdGVkUm93S2V5czogUHJvcFR5cGVzLmFycmF5LFxuICAgIC8qKlxuICAgICAqIOepuuaVsOaNrua6kOaXtuaYvuekuueahOWGheWuuVxuICAgICAqL1xuICAgIGVtcHR5VGV4dDogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICog44CQ5bGV5byA6KGM44CR5piv5ZCm5pi+56S65bGV5byAIGljb27vvIzlpoLmnpzkuLogZmFsc2XvvIzmhI/lkbPnnYBcbiAgICAgKiAxLiDkvb/nlKggZXhwYW5kT25Sb3dDbGljayDmiJbogIVcbiAgICAgKiAyLiDpnIDopoHlnKjnu4Tku7blpJboh6rooYzosIPnlKjnu4Tku7bmlrnms5XlrozmiJDlsZXlvIDlip/og73vvIh0aGlzLnRhYmxlLmhhbmRsZUV4cGFuZChyb3cua2V5Ke+8ieOAglxuICAgICAqL1xuICAgIGV4cGFuZEljb25WaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDjgJDlsZXlvIDooYzjgJHmmK/lkKblnKjngrnlh7vmlbTooYzml7bop6blj5HlsZXlvIDmlLbotbdcbiAgICAgKiDmraQgcHJvcCDkvJrlnKggLnRyIOS4iuWKoOWFpSBvbkNsaWNrIOS6i+S7tu+8jFxuICAgICAqIOWmguaenOS4jeW4jOacm+WNleWFg+agvOWGhSBvbkNsaWNrIOinpuWPkeS6i+S7tu+8jOivt+WcqOmCo+S6m+S6i+S7tuS4rSBzdG9wUHJvcGFnYXRpb27jgIJcbiAgICAgKi9cbiAgICBleHBhbmRPblJvd0NsaWNrOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDjgJDlsZXlvIDooYzjgJHku47lpJbpg6jmjqfliLbvvIzlsZXlvIDnmoTooYznmoQga2V577yM6K+35Zyo5Lyg5YWl5YmN6L+b6KGM5ZCI5rOV5qCh6aqM77yM5Zug5Li6IFRhYmxlIOWvueatpCBQcm9wIOayoeaciei/h+WkmuagoemqjFxuICAgICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICAgKi9cbiAgICBleHBhbmRlZFJvd0tleXM6IFByb3BUeXBlcy5hcnJheSxcbiAgICAvKipcbiAgICAgKiDjgJDlsZXlvIDooYzjgJHlsZXlvIDooYznmoTlhoXlrrlcbiAgICAgKi9cbiAgICBleHBhbmRlZFJvd1JlbmRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6K6+572u5q+P5Liq5Y2V5YWD5qC855qE57G75ZCN77yaKHJvdywgY29sLCByb3dJbmRleCwgY29sSW5kZXgpID0+IChzdHJpbmcpXG4gICAgICovXG4gICAgZ2V0Q2VsbENsYXNzTmFtZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6K6+572u5q+P5Liq5Y2V5YWD5qC85LiK55qE55Sx57uE5Lu26KeE5a6a55qEIHByb3DvvIxcbiAgICAgKiDlpoIgcm93U3BhbiBjb2xTcGFu77yMKHJvdywgY29sLCByb3dJbmRleCwgY29sSW5kZXgpID0+ICh7fSlcbiAgICAgKi9cbiAgICBnZXRDZWxsUHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOiuvue9ruavj+S4quWNleWFg+agvOS4iueahCBzdHlsZe+8jChyb3csIGNvbCwgcm93SW5kZXgsIGNvbEluZGV4KSA9PiAoe30pXG4gICAgICovXG4gICAgZ2V0Q2VsbFN0eWxlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDorr7nva4gdGhlYWQg55qE57G75ZCN77yacG9zaXRpb24gPT4gKHN0cmluZylcbiAgICAgKi9cbiAgICBnZXRIZWFkQ2xhc3NOYW1lOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDorr7nva4gdGhlYWQg5LiK55qEIHN0eWxl77yMcG9zaXRpb24gPT4gKHt9KVxuICAgICAqL1xuICAgIGdldEhlYWRTdHlsZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6K6+572u5q+P5LiqIFRIIOeahOexu+WQje+8mihjb2wsIGNvbEluZGV4KSA9PiAoc3RyaW5nKVxuICAgICAqL1xuICAgIGdldEhlYWRDZWxsQ2xhc3NOYW1lOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDorr7nva7mr4/kuKogVEgg5LiK55qEIHN0eWxl77yMKGNvbCwgY29sSW5kZXgpID0+ICh7fSlcbiAgICAgKi9cbiAgICBnZXRIZWFkQ2VsbFN0eWxlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDorr7nva7mr4/ooYznmoTnsbvlkI3vvJoocm93LCByb3dJbmRleCkgPT4gKHN0cmluZylcbiAgICAgKi9cbiAgICBnZXRSb3dDbGFzc05hbWU6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOiuvue9ruavj+ihjOeahCBzdHlsZe+8jChyb3csIHJvd0luZGV4KSA9PiAoe30pXG4gICAgICovXG4gICAgZ2V0Um93U3R5bGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOOAkOmAieaLqeihjOOAkeiuvue9ruavj+S4qiBDaGVja2JveC9SYWRpbyDkuIrnmoQgcHJvcCAocm93LCByb3dJbmRleCkgPT4gKHt9Ke+8m1xuICAgICAqIOWPr+S7peWcqOi/memHjOWbnuS8oCBkaXNhYmxlZDogdHJ1ZSwg5o6n5Yi26K+l6KGM5LiN6IO96YCJ5oup77yb6K+356Gu5L+dIGRhdGFTb3VyY2Ug55qE5a+56LGh5ZCr5pyJ5bGe5oCnIGtlee+8jOWPiuWFtuWUr+S4gOeahOWAvOOAglxuICAgICAqL1xuICAgIGdldFNlbGVjdFByb3BzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDmmK/lkKbpnIDopoHooajlpLTlm7rlrprliLDpobXpnaLkuIpcbiAgICAgKi9cbiAgICBoZWFkZXJBZmZpeGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDot53nprvnqpflj6Ppobbpg6jovr7liLDmjIflrprlgY/np7vph4/lkI7op6blj5HooajlpLTlm7rlrppcbiAgICAgKi9cbiAgICBoZWFkZXJBZmZpeGVkT2Zmc2V0VG9wOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIC8qKlxuICAgICAqIOWPguiAgyA8QWZmaXggLz4g55qEIGdldFRhcmdldCBQcm9wXG4gICAgICovXG4gICAgaGVhZGVyQWZmaXhHZXRUYXJnZXQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOWKoOmHjeWktOmDqO+8jOW8gOWQr+S5i+WQjuihqOWktOWwhuS8muWKoOeylyArIOiDjOaZr1xuICAgICAqL1xuICAgIGhlYWRlckVtcGhhc2l6ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOaMh+WumumrmOW6puS7peWunueOsOihqOagvOWGhea7muWKqO+8jOatpCBwcm9wIOS4jiBwcm9wIGhlYWRlckFmZml4ZWQg5LqS5pal44CCXG4gICAgICovXG4gICAgaGVpZ2h0OiAocHJvcHM6IElUYWJsZVByb3BzKSA9PiB7XG4gICAgICBjb25zdCB7IGhlYWRlckFmZml4ZWQsIGhlaWdodCB9ID0gcHJvcHNcbiAgICAgIGlmIChoZWlnaHQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBoZWlnaHQgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICAgICAgXCJJbnZhbGlkIHByb3AgYGhlaWdodGAgc3VwcGxpZWQgdG8gYFRhYmxlYCwgZXhwZWN0ZWQgYG51bWJlcmAuXCJcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhlYWRlckFmZml4ZWQgJiYgISFoZWlnaHQpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICAgICAgXCJUYWJsZS5qcyDkuI3lhYHorrjlkIzml7bkvb/nlKggcHJvcCBgaGVhZGVyQWZmaXhlZGAg5LiOIGBoZWlnaHRg77yM5LiN6K6k5Y+v5bCG6L+Z5Lik6ICF5re355So55qE6ZyA5rGC5Zy65pmv44CCXCJcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDmmK/lkKbliqDovb3kuK1cbiAgICAgKi9cbiAgICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDjgJDlsZXlvIDooYzjgJHlsZXlvIDmr4/ooYzml7bnmoQgaGFuZGxlcu+8jFRhYmxlIOS5n+S7peatpCBwcm9wIOS9nOS4uuW8gOWQr+WxleW8gOWKn+iDveeahOWIpOaWre+8m1xuICAgICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICAgKi9cbiAgICBvbkV4cGFuZENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog5q+P6KGM55qEIGNsaWNrIGhhbmRsZXLvvIwocm93LCBpLCBlKSA9PiB7fVxuICAgICAqL1xuICAgIG9uUm93Q2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOavj+ihjOeahCBtb3VzZUVudGVyIGhhbmRsZXLvvIwocm93LCBpLCBlKSA9PiB7fVxuICAgICAqL1xuICAgIG9uUm93TW91c2VFbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog5q+P6KGM55qEIG1vdXNlTGVhdmUgaGFuZGxlcu+8jChyb3csIGksIGUpID0+IHt9XG4gICAgICovXG4gICAgb25Sb3dNb3VzZUxlYXZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDjgJDpgInmi6nooYzjgJHpgInmi6nmr4/ooYzml7bnmoQgaGFuZGxlcu+8jFRhYmxlIOS5n+S7peatpCBwcm9wIOS9nOS4uuW8gOWQr+mAieaLqeWKn+iDveeahOWIpOaWre+8m1xuICAgICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICAgKi9cbiAgICBvblNlbGVjdENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICogVGFibGUg5rua5Yqo5pe255qEIGhhbmRsZXJcbiAgICAgKi9cbiAgICBvblNjcm9sbDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog44CQ6YCJ5oup6KGM44CR5aSaIC8g5Y2V6YCJ77yb6K+356Gu5L+dIGRhdGFTb3VyY2Ug55qE5a+56LGh5ZCr5pyJ5bGe5oCnIGtlee+8jOWPiuWFtuWUr+S4gOeahOWAvOOAglxuICAgICAqL1xuICAgIHNlbGVjdE11bHRpcGxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDjgJDpgInmi6nooYzjgJHmmK/lkKblnKjngrnlh7vmlbTooYzml7bop6blj5HpgInmi6njgIJcbiAgICAgKiDmraQgcHJvcCDkvJrlnKggLnRyIOS4iuWKoOWFpSBvbkNsaWNrIOS6i+S7tu+8jFxuICAgICAqIOWmguaenOS4jeW4jOacm+WNleWFg+agvOWGhSBvbkNsaWNrIOinpuWPkeS6i+S7tu+8jOivt+WcqOmCo+S6m+S6i+S7tuS4rSBzdG9wUHJvcGFnYXRpb27jgIJcbiAgICAgKi9cbiAgICBzZWxlY3RPblJvd0NsaWNrOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDjgJDpgInmi6nooYzjgJHku47lpJbpg6jmjqfliLbvvIzpgInkuK3nmoTooYznmoQga2V577yM6K+35Zyo5Lyg5YWl5YmN6L+b6KGM5ZCI5rOV5qCh6aqM77yMXG4gICAgICog5Zug5Li6IFRhYmxlIOWvueatpCBQcm9wIOayoeaciei/h+WkmuagoemqjO+8m1xuICAgICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICAgKi9cbiAgICBzZWxlY3RlZFJvd0tleXM6IFByb3BUeXBlcy5hcnJheSxcbiAgICAvKipcbiAgICAgKiDorr7nva7lsLrlr7jvvIzms6jmhI/vvJrlsLrlr7jku4XmjqfliLbooYzkuI7liJfpl7Tot53vvIzkuI7lrZfkvZPlpKflsI/kuI3nu5HlrprjgIJcbiAgICAgKi9cbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wibWluaVwiLCBcInNtYWxsXCIsIFwibWVkaXVtXCIsIFwibGFyZ2VcIl0pLFxuICAgIC8qKlxuICAgICAqIOe7n+S4gOWcsOaOp+WItuWIl+WeguebtOmdoOm9kOaWueWQkVxuICAgICAqL1xuICAgIHZlcnRpY2FsQWxpZ246IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgXCJ0b3BcIiwgXCJjZW50ZXJcIiwgXCJib3R0b21cIl0pLFxuICAgIC8qKlxuICAgICAqIOiZmuaLn+WIl+ihqOeahCBQcm9wc++8jOivt+WPguiAgyBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9yYy12aXJ0dWFsLWxpc3RcbiAgICAgKi9cbiAgICB2aXJ0dWFsTGlzdFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIC8qKlxuICAgICAqIOiZmuaLn+WIl+ihqOeahOagt+W8j++8jOivt+WcqOi/memHjOaMh+WumuWuveW6pu+8jOm7mOiupOWwhuS8muaciSA1MDAgcHgg5a695bqmXG4gICAgICovXG4gICAgdmlydHVhbExpc3RTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAvKipcbiAgICAgKiDmmK/lkKblvIDlkK/omZrmi5/mu5rliqjvvIzmraQgUHJvcCDor7fphY3lkIggaGVpZ2h0IFByb3Ag5ZCM5pe25L2/55So77yM55So5LqO5aSE55CG5aSn5pWw5o2u6YeP5LiL55qE6Jma5ouf5YaF5rua5Yqo77ybXG4gICAgICog5q2k5Yqf6IO955qE5a6e6ZmF55So5L6L6L6D5bCR77yM5aaC5p6c5pyJ5Lu75L2V6Zeu6aKY6K+35Y+K5pe25Y+N6aaIXG4gICAgICovXG4gICAgdmlydHVhbFNjcm9sbDogUHJvcFR5cGVzLmJvb2wsXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wczogSVRhYmxlUHJvcHMgPSB7XG4gICAgYWxpZ246IG51bGwsXG4gICAgY2hpbGRyZW46IFwiXCIsXG4gICAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gICAgY29sdW1uczogbnVsbCxcbiAgICBjb2x1bW5zUmVzaXphYmxlOiBudWxsLFxuICAgIGRhdGFTb3VyY2U6IFtdLFxuICAgIGRlZmF1bHRFeHBhbmRlZFJvd0tleXM6IG51bGwsXG4gICAgZGVmYXVsdFNlbGVjdGVkUm93S2V5czogbnVsbCxcbiAgICBlbXB0eVRleHQ6IFwi5pqC5peg5pWw5o2uXCIsXG4gICAgZXhwYW5kSWNvblZpc2libGU6IHRydWUsXG4gICAgZXhwYW5kT25Sb3dDbGljazogZmFsc2UsXG4gICAgZXhwYW5kZWRSb3dLZXlzOiBudWxsLFxuICAgIGV4cGFuZGVkUm93UmVuZGVyOiAoKSA9PiBcIlwiLFxuICAgIGdldENlbGxDbGFzc05hbWU6ICgpID0+IFwiXCIsXG4gICAgZ2V0Q2VsbFByb3BzOiBub29wLFxuICAgIGdldENlbGxTdHlsZTogbm9vcCxcbiAgICBnZXRIZWFkQ2xhc3NOYW1lOiAoKSA9PiBcIlwiLFxuICAgIGdldEhlYWRTdHlsZTogbm9vcCxcbiAgICBnZXRIZWFkQ2VsbENsYXNzTmFtZTogKCkgPT4gXCJcIixcbiAgICBnZXRIZWFkQ2VsbFN0eWxlOiBub29wLFxuICAgIGdldFJvd0NsYXNzTmFtZTogKCkgPT4gXCJcIixcbiAgICBnZXRSb3dTdHlsZTogbm9vcCxcbiAgICBnZXRTZWxlY3RQcm9wczogKCkgPT4gKHt9KSxcbiAgICBoZWFkZXJBZmZpeGVkOiBmYWxzZSxcbiAgICBoZWFkZXJBZmZpeGVkT2Zmc2V0VG9wOiAwLFxuICAgIGhlYWRlckFmZml4R2V0VGFyZ2V0OiBudWxsLFxuICAgIGhlYWRlckVtcGhhc2l6ZWQ6IGZhbHNlLFxuICAgIGhlaWdodDogbnVsbCxcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBvbkV4cGFuZENoYW5nZTogbnVsbCxcbiAgICBvblJvd0NsaWNrOiBudWxsLFxuICAgIG9uUm93TW91c2VFbnRlcjogbnVsbCxcbiAgICBvblJvd01vdXNlTGVhdmU6IG51bGwsXG4gICAgb25TZWxlY3RDaGFuZ2U6IG51bGwsXG4gICAgb25TY3JvbGw6IG51bGwsXG4gICAgc2VsZWN0TXVsdGlwbGU6IHRydWUsXG4gICAgc2VsZWN0T25Sb3dDbGljazogZmFsc2UsXG4gICAgc2VsZWN0ZWRSb3dLZXlzOiBudWxsLFxuICAgIHNpemU6IFwic21hbGxcIixcbiAgICB2ZXJ0aWNhbEFsaWduOiB1bmRlZmluZWQsXG4gICAgdmlydHVhbExpc3RQcm9wczoge30sXG4gICAgdmlydHVhbExpc3RTdHlsZToge30sXG4gICAgdmlydHVhbFNjcm9sbDogZmFsc2UsXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9ICh7XG4gICAgY2hpbGRyZW4sXG4gICAgY29sdW1ucyxcbiAgICBleHBhbmRlZFJvd0tleXMsXG4gICAgc2VsZWN0ZWRSb3dLZXlzLFxuICB9OiBJVGFibGVQcm9wcykgPT4ge1xuICAgIGNvbnN0IG5ld1N0YXRlOiBQYXJ0aWFsPElUYWJsZVN0YXRlPiA9IHt9XG4gICAgaWYgKGNoaWxkcmVuICE9PSBudWxsIHx8IGNvbHVtbnMgIT09IG51bGwpIHtcbiAgICAgIG5ld1N0YXRlLmNoaWxkcmVuID0gY29sdW1ucyB8fCBjaGlsZHJlblxuICAgIH1cbiAgICBpZiAoZXhwYW5kZWRSb3dLZXlzICE9PSBudWxsKSB7XG4gICAgICBuZXdTdGF0ZS5leHBhbmRlZFJvd0tleXMgPSBleHBhbmRlZFJvd0tleXNcbiAgICB9XG4gICAgaWYgKHNlbGVjdGVkUm93S2V5cyAhPT0gbnVsbCkge1xuICAgICAgbmV3U3RhdGUuc2VsZWN0ZWRSb3dLZXlzID0gc2VsZWN0ZWRSb3dLZXlzXG4gICAgfVxuICAgIHJldHVybiBPYmplY3Qua2V5cyhuZXdTdGF0ZSkubGVuZ3RoID4gMCA/IG5ld1N0YXRlIDogbnVsbFxuICB9XG5cbiAgcHVibGljIGNvbWJpbmVkQ2VsbHNJbmZvOiBJQmFzZU9iamVjdFtdID0gW11cblxuICBwdWJsaWMgYWZmaXhIZWFkZXI6IEFmZml4XG5cbiAgcHVibGljIGFmZml4U2Nyb2xsYmFyOiBBZmZpeFxuXG4gIHB1YmxpYyBtYWluVGFibGU6IEhUTUxEaXZFbGVtZW50XG5cbiAgcHVibGljIG1haW5UYWJsZUJvZHk6IEhUTUxEaXZFbGVtZW50XG5cbiAgcHVibGljIG1haW5UaGVhZDogSFRNTERpdkVsZW1lbnRcblxuICBwdWJsaWMgd3JhcHBlcjogSFRNTERpdkVsZW1lbnRcblxuICBwcml2YXRlIGRlYm91bmNlZFdpbmRvd1Jlc2l6ZTogYW55XG5cbiAgcHJpdmF0ZSByZXNpemVFdmVudDogYW55XG5cbiAgcHJpdmF0ZSBjb2x1bW5NYW5hZ2VyOiBhbnlcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogSVRhYmxlUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIGNvbHVtbnMsXG4gICAgICBkZWZhdWx0RXhwYW5kZWRSb3dLZXlzLFxuICAgICAgZGVmYXVsdFNlbGVjdGVkUm93S2V5cyxcbiAgICAgIGV4cGFuZGVkUm93S2V5czogZXhwYW5kZWRSb3dLZXlzUHJvcCxcbiAgICAgIHNlbGVjdGVkUm93S2V5czogc2VsZWN0ZWRSb3dLZXlzUHJvcCxcbiAgICB9ID0gcHJvcHNcbiAgICB0aGlzLmNvbHVtbk1hbmFnZXIgPSBuZXcgQ29sdW1uTWFuYWdlcihjb2x1bW5zIHx8IGNoaWxkcmVuKVxuICAgIGxldCBzZWxlY3RlZFJvd0tleXM6IEFycmF5PFJlYWN0LlJlYWN0VGV4dD4gPSBbXVxuICAgIGlmIChzZWxlY3RlZFJvd0tleXNQcm9wKSB7XG4gICAgICBzZWxlY3RlZFJvd0tleXMgPSBzZWxlY3RlZFJvd0tleXNQcm9wXG4gICAgfSBlbHNlIGlmIChkZWZhdWx0U2VsZWN0ZWRSb3dLZXlzKSB7XG4gICAgICBzZWxlY3RlZFJvd0tleXMgPSBkZWZhdWx0U2VsZWN0ZWRSb3dLZXlzXG4gICAgfVxuICAgIGxldCBleHBhbmRlZFJvd0tleXM6IEFycmF5PFJlYWN0LlJlYWN0VGV4dD4gPSBbXVxuICAgIGlmIChleHBhbmRlZFJvd0tleXNQcm9wKSB7XG4gICAgICBleHBhbmRlZFJvd0tleXMgPSBleHBhbmRlZFJvd0tleXNQcm9wXG4gICAgfSBlbHNlIGlmIChkZWZhdWx0RXhwYW5kZWRSb3dLZXlzKSB7XG4gICAgICBleHBhbmRlZFJvd0tleXMgPSBkZWZhdWx0RXhwYW5kZWRSb3dLZXlzXG4gICAgfVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhZmZpeGVkQm90dG9tOiBmYWxzZSxcbiAgICAgIGFmZml4ZWRUb3A6IGZhbHNlLFxuICAgICAgY2hpbGRyZW46IGNvbHVtbnMgfHwgY2hpbGRyZW4sXG4gICAgICBjb21iaW5lZENlbGxzSW5mbzogW10sXG4gICAgICBjdXJyZW50bHlSZXNpemluZzoge30sIC8vIOato+WcqOaUueWPmOWuveW6pueahOWIl+eahOS/oeaBr1xuICAgICAgZXhwYW5kZWRSb3dLZXlzLFxuICAgICAgZml4ZWRDb2x1bW5zSW5mb3M6IFtdLFxuICAgICAgaXNNYWluVGFibGVPdmVyZmxvd1g6IGZhbHNlLFxuICAgICAgaXNNYWluVGFibGVPdmVyZmxvd1k6IGZhbHNlLFxuICAgICAgaXNSZXNpemVyU2hvdzogZmFsc2UsXG4gICAgICBtYWluVGFibGVTdHlsZToge30sXG4gICAgICByZXNpemVkOiBbXSwgLy8g5pS55Y+Y6L+H5a695bqm55qE5omA5pyJ5YiX55qE5pWw5o2uXG4gICAgICBzZWxlY3RlZFJvd0tleXMsXG4gICAgfVxuICAgIHRoaXMuZGVib3VuY2VkV2luZG93UmVzaXplID0gZGVib3VuY2UodGhpcy5oYW5kbGVXaW5kb3dSZXNpemUsIDEwMClcbiAgfVxuXG4gIHB1YmxpYyBzaG91bGRDb21wb25lbnRVcGRhdGUgPSAoXG4gICAgbmV4dFByb3BzOiBJVGFibGVQcm9wcyxcbiAgICBuZXh0U3RhdGU6IElUYWJsZVN0YXRlXG4gICkgPT5cbiAgICAhc2hhbGxvd0VxdWFsKHRoaXMucHJvcHMsIG5leHRQcm9wcykgfHwgIXNoYWxsb3dFcXVhbCh0aGlzLnN0YXRlLCBuZXh0U3RhdGUpXG5cbiAgcHVibGljIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbHVtbk1hbmFnZXIsXG4gICAgICBjb21iaW5lZENlbGxzSW5mbyxcbiAgICAgIGRlYm91bmNlZFdpbmRvd1Jlc2l6ZSxcbiAgICAgIHByb3BzLFxuICAgIH0gPSB0aGlzXG4gICAgY29uc3QgeyBpc0FueUNvbHVtbnNGaXhlZCB9ID0gY29sdW1uTWFuYWdlclxuICAgIGNvbnN0IHsgaGVhZGVyQWZmaXhlZCwgaGVpZ2h0IH0gPSBwcm9wc1xuICAgIC8vIOWbuuWumuihqOWktOmcgOimgeebkeWQrCByZXNpemUg5LqL5Lu2XG4gICAgaWYgKGhlYWRlckFmZml4ZWQgfHwgaGVpZ2h0IHx8IGlzQW55Q29sdW1uc0ZpeGVkKSB7XG4gICAgICB0aGlzLmhhbmRsZVdpbmRvd1Jlc2l6ZSgpXG4gICAgICB0aGlzLnJlc2l6ZUV2ZW50ID0gYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgd2luZG93LFxuICAgICAgICBcInJlc2l6ZVwiLFxuICAgICAgICBkZWJvdW5jZWRXaW5kb3dSZXNpemVcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKGNvbWJpbmVkQ2VsbHNJbmZvLmxlbmd0aCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbWJpbmVkQ2VsbHNJbmZvIH0pXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudERpZFVwZGF0ZSA9ICh7XG4gICAgZGF0YVNvdXJjZTogZGF0YVNvdXJjZU9sZCxcbiAgICBnZXRDZWxsUHJvcHM6IGdldENlbGxQcm9wc09sZCxcbiAgfTogSVRhYmxlUHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGRhdGFTb3VyY2UsIGdldENlbGxQcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIC8qKlxuICAgICAqIGhhbmRsZVdpbmRvd1Jlc2l6ZSDkuI3lupTor6Xlj6rlnKggZGlkbW91bnQg5pe25omn6KGMXG4gICAgICogZGlkVXBkYXRlIOaXtuS5n+mcgOimgVxuICAgICAqL1xuICAgIGlmICghc2hhbGxvd0VxdWFsKGRhdGFTb3VyY2VPbGQsIGRhdGFTb3VyY2UpKSB7XG4gICAgICBzZXRUaW1lb3V0KHRoaXMuaGFuZGxlV2luZG93UmVzaXplLCAwKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWQiOW5tuWNleWFg+agvOmcgOaLv+WIsOecn+WunueahCBkb20g5YWD57Sg6K6h566X5bC65a+477yM5Zug5q2k6L+Z6YeM6ZyA6KaBIGZvcmNlVXBkYXRlXG4gICAgICovXG4gICAgaWYgKCFzaGFsbG93RXF1YWwoZ2V0Q2VsbFByb3BzT2xkLCBnZXRDZWxsUHJvcHMpICYmIGdldENlbGxQcm9wcykge1xuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudFdpbGxVbm1vdW50ID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnJlc2l6ZUV2ZW50KSB7XG4gICAgICB0aGlzLnJlc2l6ZUV2ZW50LnJlbW92ZSgpXG4gICAgfVxuICAgIGlmICh0aGlzLmRlYm91bmNlZFdpbmRvd1Jlc2l6ZSkge1xuICAgICAgdGhpcy5kZWJvdW5jZWRXaW5kb3dSZXNpemUuY2xlYXIoKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZXNpemVDb2x1bW5TdGFydCA9IChcbiAgICBlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PixcbiAgICBjb2w6IElDb2x1bW5Qcm9wc1xuICApID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcImNvbC1yZXNpemVcIlxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY3VycmVudGx5UmVzaXppbmc6IHtcbiAgICAgICAgY29sLFxuICAgICAgICBkYXRhSW5kZXg6IGNvbC5kYXRhSW5kZXgsXG4gICAgICAgIHBhcmVudFdpZHRoOlxuICAgICAgICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50ICYmXG4gICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCAmJlxuICAgICAgICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICAgIC53aWR0aCxcbiAgICAgICAgc3RhcnRYOiBlLnBhZ2VYLFxuICAgICAgfSxcbiAgICB9KVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5yZXNpemVDb2x1bW5Nb3ZpbmcpXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5yZXNpemVDb2x1bW5FbmQpXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgdGhpcy5yZXNpemVDb2x1bW5FbmQpXG4gICAgfSwgMClcbiAgfVxuXG4gIHB1YmxpYyByZXNpemVDb2x1bW5Nb3ZpbmcgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBjb25zdCB7IHJlc2l6ZWQsIGN1cnJlbnRseVJlc2l6aW5nIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgeyBjb2wsIGRhdGFJbmRleCwgcGFyZW50V2lkdGgsIHN0YXJ0WCB9ID0gY3VycmVudGx5UmVzaXppbmdcbiAgICAvKipcbiAgICAgKiAxMyDku6PooajlrZflj7fvvJvnlKggZW0g55qE5pa55byP6K6h566X5a695bqm5pys6Lqr5LiN5aSf5ZCI55CG77yM6L+Z6YeMICsgMu+8jOS4jeeEtuWcqCBTYWZhcmkg5LiL56m66Ze05Lya5LiN5aSf44CCXG4gICAgICovXG4gICAgY29uc3QgYmFzZVdpZHRoID1cbiAgICAgIE1hdGguY2VpbChcbiAgICAgICAgY29sLnRpdGxlLmxlbmd0aCA+IDQgPyBjb2wudGl0bGUubGVuZ3RoIC8gMiA6IGNvbC50aXRsZS5sZW5ndGhcbiAgICAgICkgKlxuICAgICAgICAxMyArXG4gICAgICAyXG4gICAgY29uc3QgbmV3UmVzaXplZCA9IHJlc2l6ZWQuZmlsdGVyKChvKSA9PiBvLmRhdGFJbmRleCAhPT0gZGF0YUluZGV4KVxuICAgIGNvbnN0IG5ld1dpZHRoID0gTWF0aC5tYXgoXG4gICAgICBNYXRoLmNlaWwocGFyZW50V2lkdGggKyBlLnBhZ2VYIC0gc3RhcnRYKSxcbiAgICAgICEhY29sLm9uU29ydCB8fCAhIWNvbC5vbkZpbHRlciA/IGJhc2VXaWR0aCArIDM2IDogYmFzZVdpZHRoICsgMTZcbiAgICApXG4gICAgbmV3UmVzaXplZC5wdXNoKHtcbiAgICAgIGRhdGFJbmRleCxcbiAgICAgIHZhbHVlOiBuZXdXaWR0aCxcbiAgICB9KVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcmVzaXplZDogbmV3UmVzaXplZCxcbiAgICB9KVxuICAgIHRoaXMuZGVib3VuY2VkV2luZG93UmVzaXplKClcbiAgfVxuXG4gIHB1YmxpYyByZXNpemVDb2x1bW5FbmQgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgIGNvbnN0IHsgbWFpblRhYmxlIH0gPSB0aGlzXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcIlwiXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMucmVzaXplQ29sdW1uTW92aW5nKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLnJlc2l6ZUNvbHVtbkVuZClcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgdGhpcy5yZXNpemVDb2x1bW5FbmQpXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjdXJyZW50bHlSZXNpemluZzoge30sXG4gICAgICBpc01haW5UYWJsZU92ZXJmbG93WDpcbiAgICAgICAgbWFpblRhYmxlICYmIG1haW5UYWJsZS5zY3JvbGxXaWR0aCA+IG1haW5UYWJsZS5vZmZzZXRXaWR0aCxcbiAgICAgIGlzTWFpblRhYmxlT3ZlcmZsb3dZOlxuICAgICAgICBtYWluVGFibGUgJiYgbWFpblRhYmxlLnNjcm9sbEhlaWdodCA+IG1haW5UYWJsZS5vZmZzZXRIZWlnaHQsXG4gICAgICBpc1Jlc2l6ZXJTaG93OiBmYWxzZSxcbiAgICB9KVxuICB9XG5cbiAgcHVibGljIGhhbmRsZVdpbmRvd1Jlc2l6ZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNvbHVtbk1hbmFnZXIsIG1haW5UYWJsZSwgcHJvcHMgfSA9IHRoaXNcbiAgICBjb25zdCB7IGlzQW55Q29sdW1uc0ZpeGVkIH0gPSBjb2x1bW5NYW5hZ2VyXG4gICAgY29uc3QgeyBoZWFkZXJBZmZpeGVkLCBoZWlnaHQgfSA9IHByb3BzXG4gICAgaWYgKChoZWFkZXJBZmZpeGVkIHx8IGhlaWdodCB8fCBpc0FueUNvbHVtbnNGaXhlZCkgJiYgbWFpblRhYmxlKSB7XG4gICAgICBjb25zdCB7IG1haW5UYWJsZVN0eWxlOiBvbGRTdHlsZSB9ID0gdGhpcy5zdGF0ZVxuICAgICAgY29uc3QgcmVjdCA9IG1haW5UYWJsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgY29uc3QgbWFpblRhYmxlU3R5bGU6IFBhcnRpYWw8UmVhY3QuQ1NTUHJvcGVydGllcz4gPSB7fVxuICAgICAgbWFpblRhYmxlU3R5bGUubGVmdCA9IHJlY3QubGVmdFxuICAgICAgbWFpblRhYmxlU3R5bGUud2lkdGggPSByZWN0LndpZHRoXG4gICAgICBpZiAoIXNoYWxsb3dFcXVhbChtYWluVGFibGVTdHlsZSwgb2xkU3R5bGUpKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtYWluVGFibGVTdHlsZSB9KVxuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzTWFpblRhYmxlT3ZlcmZsb3dYOlxuICAgICAgICAgIG1haW5UYWJsZSAmJiBtYWluVGFibGUuc2Nyb2xsV2lkdGggPiBtYWluVGFibGUub2Zmc2V0V2lkdGgsXG4gICAgICAgIGlzTWFpblRhYmxlT3ZlcmZsb3dZOlxuICAgICAgICAgIG1haW5UYWJsZSAmJiBtYWluVGFibGUuc2Nyb2xsSGVpZ2h0ID4gbWFpblRhYmxlLm9mZnNldEhlaWdodCxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhhbmRsZU1haW5UYWJsZVNjcm9sbCA9IChlPzogUmVhY3QuVUlFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB7IGFmZml4SGVhZGVyLCBtYWluVGFibGUgfSA9IHRoaXNcbiAgICBjb25zdCB7IG9uU2Nyb2xsIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBhZmZpeGVkVG9wIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBpZiAob25TY3JvbGwgJiYgZSkge1xuICAgICAgLy8gZSDlj6/og73mmK8gdGhlYWRcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50XG4gICAgICBpZiAodGFyZ2V0LmdldEF0dHJpYnV0ZShcInJvbGVcIikgPT09IFwidGFibGVcIikge1xuICAgICAgICBvblNjcm9sbChlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhZmZpeGVkVG9wICYmIGFmZml4SGVhZGVyICYmIG1haW5UYWJsZSAmJiBhZmZpeEhlYWRlci5maXhlZE5vZGUpIHtcbiAgICAgIGFmZml4SGVhZGVyLmZpeGVkTm9kZS5zY3JvbGxMZWZ0ID0gbWFpblRhYmxlLnNjcm9sbExlZnRcbiAgICB9XG5cbiAgICAvLyDlm7rlrprlpLTnmoTmg4XlhrXvvIzpnIDopoHlkIzmraXlm7rlrprmu5rliqjmnaHlkozkuLsgVGFibGUg5rua5Yqo5p2hXG4gICAgdGhpcy5zeW5jVGFibGVTY3JvbGxQb3NpdGlvbihtYWluVGFibGUuc2Nyb2xsTGVmdClcbiAgfVxuXG4gIHB1YmxpYyBzeW5jVGFibGVTY3JvbGxQb3NpdGlvbiA9ICh2YWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgeyBhZmZpeFNjcm9sbGJhciwgbWFpblRhYmxlLCBtYWluVGhlYWQgfSA9IHRoaXNcbiAgICBjb25zdCB7IGhlaWdodCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKG1haW5UYWJsZSAmJiBhZmZpeFNjcm9sbGJhciAmJiBhZmZpeFNjcm9sbGJhci5maXhlZE5vZGUpIHtcbiAgICAgIGlmIChtYWluVGFibGUuc2Nyb2xsTGVmdCAhPT0gdmFsdWUpIHtcbiAgICAgICAgbWFpblRhYmxlLnNjcm9sbExlZnQgPSB2YWx1ZVxuICAgICAgfVxuICAgICAgaWYgKGFmZml4U2Nyb2xsYmFyLmZpeGVkTm9kZS5zY3JvbGxMZWZ0ICE9PSB2YWx1ZSkge1xuICAgICAgICBhZmZpeFNjcm9sbGJhci5maXhlZE5vZGUuc2Nyb2xsTGVmdCA9IHZhbHVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g5aaC5p6c6K6+5a6a5LqGIHByb3AgaGVpZ2h077yM5bm25LiU5a2Y5Zyo5qiq5ZCR5rua5Yqo5p2h77yM5YiZ6KaB5ZCM5q2lIHRoZWFkIOeahOa7muWKqOS9jee9rlxuICAgIGlmIChoZWlnaHQgJiYgbWFpblRoZWFkKSB7XG4gICAgICBtYWluVGhlYWQuc2Nyb2xsTGVmdCA9IHZhbHVlXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhhbmRsZVJvd0NsaWNrID0gKFxuICAgIHJvdzogSUJhc2VPYmplY3QsXG4gICAgaTogbnVtYmVyLFxuICAgIGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+XG4gICkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGV4cGFuZE9uUm93Q2xpY2ssXG4gICAgICBnZXRTZWxlY3RQcm9wcyxcbiAgICAgIG9uUm93Q2xpY2ssXG4gICAgICBzZWxlY3RPblJvd0NsaWNrLFxuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBzZWxlY3RlZFJvd0tleXMgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCB7IGtleSB9ID0gcm93XG4gICAgaWYgKFxuICAgICAgc2VsZWN0T25Sb3dDbGljayAmJlxuICAgICAgdHlwZW9mIGtleSAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgIShcbiAgICAgICAgZ2V0U2VsZWN0UHJvcHMgJiZcbiAgICAgICAgZ2V0U2VsZWN0UHJvcHMocm93LCBpKSAmJlxuICAgICAgICBnZXRTZWxlY3RQcm9wcyhyb3csIGkpLmRpc2FibGVkXG4gICAgICApXG4gICAgKSB7XG4gICAgICB0aGlzLmhhbmRsZVNlbGVjdChrZXksICFzZWxlY3RlZFJvd0tleXMuaW5jbHVkZXMoa2V5KSlcbiAgICB9XG4gICAgaWYgKGV4cGFuZE9uUm93Q2xpY2spIHtcbiAgICAgIHRoaXMuaGFuZGxlRXhwYW5kKGtleSlcbiAgICB9XG4gICAgaWYgKG9uUm93Q2xpY2spIHtcbiAgICAgIG9uUm93Q2xpY2socm93LCBpLCBlKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVUaFJlc2l6ZSA9IChcbiAgICB3aWR0aDogbnVtYmVyLFxuICAgIGRhdGFJbmRleDogc3RyaW5nLFxuICAgIGluZGV4OiBudW1iZXIsXG4gICAgZml4ZWRQb3NpdGlvbj86IGJvb2xlYW4gfCBcImxlZnRcIiB8IFwicmlnaHRcIlxuICApID0+IHtcbiAgICBjb25zdCB7IGdldENvbHVtbnMgfSA9IHRoaXMuY29sdW1uTWFuYWdlclxuICAgIGxldCB7IGZpeGVkQ29sdW1uc0luZm9zIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgY29sdW1ucyA9IGdldENvbHVtbnMoKSBhcyBJQ29sdW1uUHJvcHNbXVxuICAgIC8qKlxuICAgICAqIGNvbHVtbnMg5Y+Y5YyW5ZCOIGZpeGVkQ29sdW1uc0luZm9zIOS4reWPr+iDveWtmOWcqOW3sue7j+enu+mZpOeahCBjb2x1bW5cbiAgICAgKi9cbiAgICBmaXhlZENvbHVtbnNJbmZvcyA9IGZpeGVkQ29sdW1uc0luZm9zLmZpbHRlcigobykgPT5cbiAgICAgIGNvbHVtbnMuZmluZCgocCkgPT4gcC5kYXRhSW5kZXggPT09IG8uZGF0YUluZGV4KVxuICAgIClcbiAgICBjb25zdCBpID0gZml4ZWRDb2x1bW5zSW5mb3MuZmluZEluZGV4KChvKSA9PiBvLmRhdGFJbmRleCA9PT0gZGF0YUluZGV4KVxuICAgIC8vIGZpeGVkIOWPr+iDveaYryBCb29sZWFuXG4gICAgY29uc3QgZml4ZWQgPSBmaXhlZFBvc2l0aW9uID09PSBcInJpZ2h0XCIgPyBcInJpZ2h0XCIgOiBcImxlZnRcIlxuICAgIGlmIChpID4gLTEpIHtcbiAgICAgIGlmIChmaXhlZENvbHVtbnNJbmZvc1tpXS53aWR0aCA9PT0gd2lkdGgpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBmaXhlZENvbHVtbnNJbmZvcy5zcGxpY2UoaSwgMSlcbiAgICB9XG4gICAgZml4ZWRDb2x1bW5zSW5mb3MucHVzaCh7IHdpZHRoLCBkYXRhSW5kZXgsIGluZGV4LCBmaXhlZCB9KVxuICAgIGZpeGVkQ29sdW1uc0luZm9zLnNvcnQoKGEsIGIpID0+IGEuaW5kZXggLSBiLmluZGV4KVxuXG4gICAgY29uc3QgZml4ZWRDb2x1bW5zSW5mb3NMZWZ0ID0gZml4ZWRDb2x1bW5zSW5mb3MuZmlsdGVyKFxuICAgICAgKG8pID0+IG8uZml4ZWQgPT09IFwibGVmdFwiXG4gICAgKVxuICAgIGNvbnN0IGZpeGVkQ29sdW1uc0luZm9zUmlnaHQgPSBmaXhlZENvbHVtbnNJbmZvc1xuICAgICAgLmZpbHRlcigobykgPT4gby5maXhlZCA9PT0gXCJyaWdodFwiKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGIuaW5kZXggLSBhLmluZGV4KVxuXG4gICAgZml4ZWRDb2x1bW5zSW5mb3MuZm9yRWFjaCgoY29sKSA9PiB7XG4gICAgICBsZXQgY29sSW5kZXhcbiAgICAgIGlmIChjb2wuZml4ZWQgPT09IFwibGVmdFwiKSB7XG4gICAgICAgIGNvbEluZGV4ID0gZml4ZWRDb2x1bW5zSW5mb3NMZWZ0LmZpbmRJbmRleChcbiAgICAgICAgICAobykgPT4gby5kYXRhSW5kZXggPT09IGNvbC5kYXRhSW5kZXhcbiAgICAgICAgKVxuICAgICAgICBpZiAoY29sSW5kZXggPT09IGZpeGVkQ29sdW1uc0luZm9zTGVmdC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgY29sLmlzTGFzdExlZnQgPSB0cnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29sLmlzTGFzdExlZnQgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIC8vIOWuuemUme+8jOS4jeWFgeiuuCBzbGljZSgwLCAtMSkg55qE5Y2x6Zmp5pON5L2cXG4gICAgICAgIGNvbC5vZmZzZXQgPVxuICAgICAgICAgIGNvbEluZGV4ID09PSAtMVxuICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICA6IGZpeGVkQ29sdW1uc0luZm9zTGVmdFxuICAgICAgICAgICAgICAgIC5zbGljZSgwLCBjb2xJbmRleClcbiAgICAgICAgICAgICAgICAucmVkdWNlKChhY2MsIGN1cikgPT4gYWNjICsgY3VyLndpZHRoLCAwKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29sSW5kZXggPSBmaXhlZENvbHVtbnNJbmZvc1JpZ2h0LmZpbmRJbmRleChcbiAgICAgICAgICAobykgPT4gby5kYXRhSW5kZXggPT09IGNvbC5kYXRhSW5kZXhcbiAgICAgICAgKVxuICAgICAgICBpZiAoY29sSW5kZXggPT09IGZpeGVkQ29sdW1uc0luZm9zUmlnaHQubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIGNvbC5pc0ZpcnN0UmlnaHQgPSB0cnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29sLmlzRmlyc3RSaWdodCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgLy8g5a656ZSZ77yM5LiN5YWB6K64IHNsaWNlKDAsIC0xKSDnmoTljbHpmanmk43kvZxcbiAgICAgICAgY29sLm9mZnNldCA9XG4gICAgICAgICAgY29sSW5kZXggPT09IC0xXG4gICAgICAgICAgICA/IDBcbiAgICAgICAgICAgIDogZml4ZWRDb2x1bW5zSW5mb3NSaWdodFxuICAgICAgICAgICAgICAgIC5zbGljZSgwLCBjb2xJbmRleClcbiAgICAgICAgICAgICAgICAucmVkdWNlKChhY2MsIGN1cikgPT4gYWNjICsgY3VyLndpZHRoLCAwKVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZpeGVkQ29sdW1uc0luZm9zIH0sIHRoaXMuZm9yY2VVcGRhdGUpXG4gIH1cblxuICBwdWJsaWMgaGFuZGxlVGhlYWRNb3VzZUVudGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgaXNSZXNpemVyU2hvdyB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmICghaXNSZXNpemVyU2hvdykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzUmVzaXplclNob3c6IHRydWUsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVUaGVhZE1vdXNlTGVhdmUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjdXJyZW50bHlSZXNpemluZyB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmIChPYmplY3Qua2V5cyhjdXJyZW50bHlSZXNpemluZykubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXNSZXNpemVyU2hvdzogZmFsc2UsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDlsZXlvIDooYxcbiAgICovXG4gIHB1YmxpYyBoYW5kbGVFeHBhbmQgPSAoa2V5OiBSZWFjdC5SZWFjdFRleHQpID0+IHtcbiAgICBpZiAodHlwZW9mIGtleSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IHsgZXhwYW5kZWRSb3dLZXlzOiBleHBhbmRlZFJvd0tleXNQcm9wLCBvbkV4cGFuZENoYW5nZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgZXhwYW5kZWRSb3dLZXlzIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3Qga2V5cyA9IFsuLi5leHBhbmRlZFJvd0tleXNdXG4gICAgY29uc3QgaW5kZXggPSBrZXlzLmluZGV4T2Yoa2V5KVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBrZXlzLnNwbGljZShpbmRleCwgMSlcbiAgICB9IGVsc2Uge1xuICAgICAga2V5cy5wdXNoKGtleSlcbiAgICB9XG4gICAgaWYgKGV4cGFuZGVkUm93S2V5c1Byb3AgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBleHBhbmRlZFJvd0tleXM6IGtleXMgfSlcbiAgICB9XG4gICAgaWYgKG9uRXhwYW5kQ2hhbmdlKSB7XG4gICAgICBvbkV4cGFuZENoYW5nZShrZXlzKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDpgInmi6nooYxcbiAgICovXG4gIHB1YmxpYyBoYW5kbGVTZWxlY3QgPSAoa2V5OiBSZWFjdC5SZWFjdFRleHQsIGNoZWNrZWQ6IGJvb2xlYW4pID0+IHtcbiAgICBpZiAodHlwZW9mIGtleSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgIG9uU2VsZWN0Q2hhbmdlLFxuICAgICAgc2VsZWN0ZWRSb3dLZXlzOiBzZWxlY3RlZFJvd0tleXNQcm9wLFxuICAgICAgc2VsZWN0TXVsdGlwbGUsXG4gICAgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHNlbGVjdGVkUm93S2V5cyB9ID0gdGhpcy5zdGF0ZVxuICAgIGxldCBrZXlzID0gWy4uLnNlbGVjdGVkUm93S2V5c11cbiAgICBpZiAoc2VsZWN0TXVsdGlwbGUpIHtcbiAgICAgIGlmIChjaGVja2VkKSB7XG4gICAgICAgIGtleXMucHVzaChrZXkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBrZXlzLnNwbGljZShzZWxlY3RlZFJvd0tleXMuaW5kZXhPZihrZXkpLCAxKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBrZXlzID0gW2tleV1cbiAgICB9XG4gICAgaWYgKHNlbGVjdGVkUm93S2V5c1Byb3AgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWxlY3RlZFJvd0tleXM6IGtleXMsXG4gICAgICB9KVxuICAgIH1cbiAgICBpZiAob25TZWxlY3RDaGFuZ2UpIHtcbiAgICAgIG9uU2VsZWN0Q2hhbmdlKGtleXMpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOmAieaLqeihjOWFqOmAieaTjeS9nFxuICAgKi9cbiAgcHVibGljIGhhbmRsZVNlbGVjdEFsbCA9IChjaGVja2VkOiBib29sZWFuKSA9PiB7XG4gICAgY29uc3QgeyBvblNlbGVjdENoYW5nZSwgc2VsZWN0ZWRSb3dLZXlzOiBzZWxlY3RlZFJvd0tleXNQcm9wIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBzZWxlY3RlZFJvd0tleXMgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBrZXlzID0gWy4uLnNlbGVjdGVkUm93S2V5c11cbiAgICBjb25zdCBhdmFpbGFibGVLZXlzID0gdGhpcy5nZXRBdmFpbGFibGVSb3dzS2V5cygpXG4gICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgIGF2YWlsYWJsZUtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICghc2VsZWN0ZWRSb3dLZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICBrZXlzLnB1c2goa2V5KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyDkuI3og73nm7TmjqXmuIXnqbrmlbDnu4TvvIzlm6DkuLrlj6/og73kvKDlhaXkuobkuI7lvZPliY0gZGF0YVNvdXJjZSDml6DlhbPnmoQga2V5c++8m1xuICAgICAgLy8g5Lmf5LiN6IO955u05o6lIHNwbGljZe+8jOWboOS4uuimgeajgOafpeaYr+WQpiBnZXRTZWxlY3RQcm9wcy5kaXNhYmxlZOOAglxuICAgICAgc2VsZWN0ZWRSb3dLZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoYXZhaWxhYmxlS2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAga2V5cy5zcGxpY2Uoa2V5cy5pbmRleE9mKGtleSksIDEpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIGlmIChzZWxlY3RlZFJvd0tleXNQcm9wID09PSBudWxsKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2VsZWN0ZWRSb3dLZXlzOiBrZXlzLFxuICAgICAgfSlcbiAgICB9XG4gICAgaWYgKG9uU2VsZWN0Q2hhbmdlKSB7XG4gICAgICBvblNlbGVjdENoYW5nZShrZXlzKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDliKTmlq3mmK/lkKblt7Llhajpg6jpgInmi6lcbiAgICovXG4gIHB1YmxpYyBoYXNTZWxlY3RlZEFsbCA9ICgpID0+IHtcbiAgICBjb25zdCBrZXlzID0gdGhpcy5nZXRBdmFpbGFibGVSb3dzS2V5cygpXG4gICAgY29uc3QgeyBkYXRhU291cmNlIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBzZWxlY3RlZFJvd0tleXMgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAoXG4gICAgICBkYXRhU291cmNlICYmXG4gICAgICBkYXRhU291cmNlLmxlbmd0aCAmJlxuICAgICAga2V5cy5sZW5ndGggJiZcbiAgICAgIGtleXMuZXZlcnkoKGtleSkgPT4gc2VsZWN0ZWRSb3dLZXlzLmluY2x1ZGVzKGtleSkpXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHB1YmxpYyBnZXRBdmFpbGFibGVSb3dzS2V5cyA9ICgpID0+IHtcbiAgICBjb25zdCB7IGRhdGFTb3VyY2UsIGdldFNlbGVjdFByb3BzIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qga2V5czogQXJyYXk8UmVhY3QuUmVhY3RUZXh0PiA9IFtdXG4gICAgaWYgKCFkYXRhU291cmNlKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG4gICAgZGF0YVNvdXJjZS5mb3JFYWNoKChyb3csIGkpID0+IHtcbiAgICAgIGNvbnN0IHsga2V5IH0gPSByb3dcbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIGtleSAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICAhKFxuICAgICAgICAgIGdldFNlbGVjdFByb3BzICYmXG4gICAgICAgICAgZ2V0U2VsZWN0UHJvcHMocm93LCBpKSAmJlxuICAgICAgICAgIGdldFNlbGVjdFByb3BzKHJvdywgaSkuZGlzYWJsZWRcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIGtleXMucHVzaChrZXkpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4ga2V5c1xuICB9XG5cbiAgcHVibGljIGdlbmVyYXRlVGFibGUgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgZGF0YVNvdXJjZSxcbiAgICAgIGV4cGFuZEljb25WaXNpYmxlLFxuICAgICAgZXhwYW5kZWRSb3dSZW5kZXIsXG4gICAgICBleHBhbmRPblJvd0NsaWNrLFxuICAgICAgZ2V0SGVhZENsYXNzTmFtZSxcbiAgICAgIGdldEhlYWRTdHlsZSxcbiAgICAgIGdldFJvd0NsYXNzTmFtZSxcbiAgICAgIGdldFJvd1N0eWxlLFxuICAgICAgZ2V0U2VsZWN0UHJvcHMsXG4gICAgICBoZWFkZXJBZmZpeGVkLFxuICAgICAgaGVhZGVyQWZmaXhlZE9mZnNldFRvcCxcbiAgICAgIGhlYWRlckFmZml4R2V0VGFyZ2V0LFxuICAgICAgaGVpZ2h0LFxuICAgICAgb25FeHBhbmRDaGFuZ2UsXG4gICAgICBvblJvd01vdXNlRW50ZXIsXG4gICAgICBvblJvd01vdXNlTGVhdmUsXG4gICAgICBvblNlbGVjdENoYW5nZSxcbiAgICAgIHNlbGVjdE11bHRpcGxlLFxuICAgICAgc2VsZWN0T25Sb3dDbGljayxcbiAgICAgIHNpemUsXG4gICAgICB2ZXJ0aWNhbEFsaWduLFxuICAgICAgdmlydHVhbExpc3RQcm9wcyxcbiAgICAgIHZpcnR1YWxMaXN0U3R5bGUsXG4gICAgICB2aXJ0dWFsU2Nyb2xsLFxuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB7XG4gICAgICBhZmZpeGVkVG9wLFxuICAgICAgYWZmaXhlZEJvdHRvbSxcbiAgICAgIGV4cGFuZGVkUm93S2V5cyxcbiAgICAgIGZpeGVkQ29sdW1uc0luZm9zLFxuICAgICAgaXNNYWluVGFibGVPdmVyZmxvd1gsXG4gICAgICBpc01haW5UYWJsZU92ZXJmbG93WSxcbiAgICAgIG1haW5UYWJsZVN0eWxlLFxuICAgICAgcmVzaXplZCxcbiAgICAgIHNlbGVjdGVkUm93S2V5cyxcbiAgICB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgY29uc3Qge1xuICAgICAgZ2V0Q29sdW1ucyxcbiAgICAgIC8vIGdldExlZnRDb2x1bW5zV2lkdGgsXG4gICAgICBnZXRHcm91cENvbHVtbnNEZXB0aCxcbiAgICAgIGlzQW55Q29sdW1uc0xlZnRGaXhlZCxcbiAgICB9ID0gdGhpcy5jb2x1bW5NYW5hZ2VyXG5cbiAgICBjb25zdCBjb2x1bW5zID0gZ2V0Q29sdW1ucygpIGFzIElDb2x1bW5Qcm9wc1tdXG5cbiAgICBjb25zdCB0aGVhZFN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgICAgaGVpZ2h0OiBgJHtURF9IRUlHSFRbc2l6ZSB8fCBcInNtYWxsXCJdICogZ2V0R3JvdXBDb2x1bW5zRGVwdGgoKX1weGAsXG4gICAgICAuLi4oKGdldEhlYWRTdHlsZSAmJiBnZXRIZWFkU3R5bGUoKSkgfHwge30pLFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWxleW8gOihjOWSjOmAieaLqeihjOaXtu+8jHRoZWFk5ZKM5q+P6KGM55qE56ys5LiA5YiX5YmN6YO96KaB5Yqg5YWl5LiA5YiXXG4gICAgICog5q2k5YiX5Lmf5Lya5b2x5ZONIHN0aWNreSDnmoTlgY/np7vkvY3nva5cbiAgICAgKi9cbiAgICBjb25zdCB0aGVhZFBsYWNlaG9sZGVyVmlzaWJsZSA9XG4gICAgICBleHBhbmRJY29uVmlzaWJsZSAmJiAoISFvblNlbGVjdENoYW5nZSB8fCAhIW9uRXhwYW5kQ2hhbmdlKVxuXG4gICAgY29uc3QgdGhlYWQgPSAoXG4gICAgICA8ZGl2XG4gICAgICAgIGtleT17MH1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgIGAke3ByZWZpeH0tdGhlYWRgLFxuICAgICAgICAgIGdldEhlYWRDbGFzc05hbWUgJiYgZ2V0SGVhZENsYXNzTmFtZSgpXG4gICAgICAgICl9XG4gICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5oYW5kbGVUaGVhZE1vdXNlRW50ZXJ9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5oYW5kbGVUaGVhZE1vdXNlTGVhdmV9XG4gICAgICAgIHJlZj17dGhpcy5zYXZlUmVmKFwibWFpblRoZWFkXCIpfVxuICAgICAgICBzdHlsZT17dGhlYWRTdHlsZX1cbiAgICAgID5cbiAgICAgICAge3RoZWFkUGxhY2Vob2xkZXJWaXNpYmxlICYmIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS10aGAsIGAke3ByZWZpeH0tdGhfZnVuY3Rpb25hbGAsIHtcbiAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tdGhfbGVmdGBdOiBpc0FueUNvbHVtbnNMZWZ0Rml4ZWQoKSxcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAga2V5PVwiZnVuY3Rpb25hbC1hbGxcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzZWxlY3RNdWx0aXBsZSAmJiAhIW9uU2VsZWN0Q2hhbmdlICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tY2VsbGB9PlxuICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLmdldEF2YWlsYWJsZVJvd3NLZXlzKCkubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0QWxsfVxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5oYXNTZWxlY3RlZEFsbCgpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXNlbGVjdENvbXBvbmVudGB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7Y29sdW1ucy5tYXAoKGNvbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBhbGlnbixcbiAgICAgICAgICAgIGRhdGFJbmRleCxcbiAgICAgICAgICAgIGZpbHRlcnMsXG4gICAgICAgICAgICBmaXhlZCxcbiAgICAgICAgICAgIG9uRmlsdGVyLFxuICAgICAgICAgICAgb25Tb3J0LFxuICAgICAgICAgICAgc29ydE9yZGVyLFxuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICB9ID0gY29sXG5cbiAgICAgICAgICBjb25zdCByZXNpemVkQ29sID0gcmVzaXplZC5maW5kKChvKSA9PiBvLmRhdGFJbmRleCA9PT0gZGF0YUluZGV4KVxuICAgICAgICAgIGNvbnN0IGNsaWNrYWJsZSA9XG4gICAgICAgICAgICAhIW9uU29ydCB8fFxuICAgICAgICAgICAgKHNvcnRPcmRlciAhPT0gbnVsbCAmJiBzb3J0T3JkZXIgIT09IHVuZGVmaW5lZCkgfHxcbiAgICAgICAgICAgICEhb25GaWx0ZXIgfHxcbiAgICAgICAgICAgICEhZmlsdGVyc1xuICAgICAgICAgIGxldCBtaW5XaWR0aCA9IDBcbiAgICAgICAgICBpZiAodHlwZW9mIHRpdGxlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtaW5XaWR0aCA9XG4gICAgICAgICAgICAgIE1hdGguY2VpbCh0aXRsZS5sZW5ndGggPiA0ID8gdGl0bGUubGVuZ3RoIC8gMiA6IHRpdGxlLmxlbmd0aCkgKlxuICAgICAgICAgICAgICAgIDEzICtcbiAgICAgICAgICAgICAgMTZcbiAgICAgICAgICAgIGlmIChjbGlja2FibGUpIHtcbiAgICAgICAgICAgICAgbWluV2lkdGggKz0gMjBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IGZsZXhWYWx1ZVxuICAgICAgICAgIGlmICh0eXBlb2Ygd2lkdGggPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGZsZXhWYWx1ZSA9IGAke3dpZHRofSAwIGF1dG9gXG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygd2lkdGggPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGlmICh3aWR0aC5sZW5ndGggLSB3aWR0aC5sYXN0SW5kZXhPZihcInB4XCIpID09PSAyKSB7XG4gICAgICAgICAgICAgIGZsZXhWYWx1ZSA9IGAke3dpZHRoLnNsaWNlKDAsIC0yKX0gMCBhdXRvYFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZmxleFZhbHVlID0gYDAgMCAke3dpZHRofWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmxleFZhbHVlID0gYCR7TWF0aC5tYXgoVERfTUlOX1dJRFRILCBtaW5XaWR0aCl9IDAgYXV0b2BcbiAgICAgICAgICB9XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogdGggbGVmdCDlgLzvvJrlj5blvpcgcmVzaXplLW9ic2VydmVyIOWtmOWCqOeahOivpeWIl+eahOWBj+enu+mHj++8jOWKoOS4iuWmguaenOaciemAieaLqeihjOOAgeWxleW8gOihjOaXtueahCBTRUxFQ1RfVERfV0lEVEgg4oCU4oCUIOS7heWvuSBsZWZ0IOacieaViFxuICAgICAgICAgICAqIHRoIHJpZ2h0IOWAvO+8muWPluW+lyByZXNpemUtb2JzZXJ2ZXIg5a2Y5YKo55qE6K+l5YiX55qE5YGP56e76YeP77yM5Yqg5LiK5aaC5p6c5YaF5rua5Yqo5pe255qE5rua5Yqo5p2h5a695bqm77yIMTTvvIkg4oCU4oCUIOS7heWvuSByaWdodCDmnInmlYhcbiAgICAgICAgICAgKi9cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJlc2l6ZU9ic2VydmVyXG4gICAgICAgICAgICAgIG9uUmVzaXplPXsoeyB3aWR0aDogd2lkdGhSZXNpemUgfSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlVGhSZXNpemUod2lkdGhSZXNpemUsIGRhdGFJbmRleCwgaW5kZXgsIGZpeGVkKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBkaXNhYmxlZD17IWZpeGVkfVxuICAgICAgICAgICAgICBrZXk9e2RhdGFJbmRleCB8fCBpbmRleH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LXRoYCwge1xuICAgICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tdGhfY2xpY2thYmxlYF06IGNsaWNrYWJsZSxcbiAgICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXRoX2xlZnRgXTogaXNGaXhlZExlZnQoY29sKSxcbiAgICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXRoX3JpZ2h0YF06IGlzRml4ZWRSaWdodChjb2wpLFxuICAgICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tdGhfbGVmdExhc3RgXTogZml4ZWRDb2x1bW5zSW5mb3MuZmluZChcbiAgICAgICAgICAgICAgICAgICAgKG8pID0+IG8uZGF0YUluZGV4ID09PSBkYXRhSW5kZXhcbiAgICAgICAgICAgICAgICAgICk/LmlzTGFzdExlZnQsXG4gICAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS10aF9yaWdodEZpcnN0YF06IGZpeGVkQ29sdW1uc0luZm9zLmZpbmQoXG4gICAgICAgICAgICAgICAgICAgIChvKSA9PiBvLmRhdGFJbmRleCA9PT0gZGF0YUluZGV4XG4gICAgICAgICAgICAgICAgICApPy5pc0ZpcnN0UmlnaHQsXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAga2V5PXtkYXRhSW5kZXggfHwgaW5kZXh9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IGlzRml4ZWRMZWZ0KGNvbClcbiAgICAgICAgICAgICAgICAgICAgPyAoZml4ZWRDb2x1bW5zSW5mb3MuZmluZCgobykgPT4gby5kYXRhSW5kZXggPT09IGRhdGFJbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgID8ub2Zmc2V0IHx8IDApICtcbiAgICAgICAgICAgICAgICAgICAgICAodGhlYWRQbGFjZWhvbGRlclZpc2libGUgPyBTRUxFQ1RfVERfV0lEVEggOiAwKVxuICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiBpc0ZpeGVkUmlnaHQoY29sKVxuICAgICAgICAgICAgICAgICAgICA/IChmaXhlZENvbHVtbnNJbmZvcy5maW5kKChvKSA9PiBvLmRhdGFJbmRleCA9PT0gZGF0YUluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5vZmZzZXQgfHwgMCkgK1xuICAgICAgICAgICAgICAgICAgICAgIChpc01haW5UYWJsZU92ZXJmbG93WSAmJiBoZWlnaHQgPyAxNCA6IDApXG4gICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgZmxleDogcmVzaXplZENvbCA/IGAke3Jlc2l6ZWRDb2wudmFsdWV9IDAgYXV0b2AgOiBmbGV4VmFsdWUsXG4gICAgICAgICAgICAgICAgICBtYXhXaWR0aDogcmVzaXplZENvbCA/IHJlc2l6ZWRDb2wudmFsdWUgOiB3aWR0aCB8fCBcIlwiLFxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBhbGlnbiB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICB3aWR0aDogcmVzaXplZENvbFxuICAgICAgICAgICAgICAgICAgICA/IHJlc2l6ZWRDb2wudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgOiB3aWR0aCB8fCBNYXRoLm1heChURF9NSU5fV0lEVEgsIG1pbldpZHRoKSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGRhdGEtY29sdW1uPXtpbmRleH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0aGlzLmdlbmVyYXRlVGhDZWxsKGNvbCwgeyBpbmRleCwgY29sdW1ucyB9KX1cbiAgICAgICAgICAgICAgICB7Y29sLmNoaWxkcmVuICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXRoR3JvdXBgfT5cbiAgICAgICAgICAgICAgICAgICAge2NvbC5jaGlsZHJlbi5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgKGNoaWxkQ29sOiBJQ29sdW1uUHJvcHMsIGNoaWxkQ29sSW5kZXg6IG51bWJlcikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS10aGAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS10aF9jbGlja2FibGVgXTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEhY2hpbGRDb2wub25Tb3J0IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2hpbGRDb2wuc29ydE9yZGVyICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkQ29sLnNvcnRPcmRlciAhPT0gdW5kZWZpbmVkKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISFjaGlsZENvbC5vbkZpbHRlciB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISFjaGlsZENvbC5maWx0ZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjaGlsZENvbC5kYXRhSW5kZXggfHwgY2hpbGRDb2xJbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiBcIjEwMCAwIGF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogY2hpbGRDb2wuYWxpZ24gfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5nZW5lcmF0ZVRoQ2VsbChjaGlsZENvbCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZENvbC5jaGlsZHJlbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tdGhHcm91cGB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkQ29sLmNoaWxkcmVuLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYW5kQ29sOiBJQ29sdW1uUHJvcHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JhbmRDb2xJbmRleDogbnVtYmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LXRoYCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS10aF9jbGlja2FibGVgXTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhIWdyYW5kQ29sLm9uU29ydCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChncmFuZENvbC5zb3J0T3JkZXIgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYW5kQ29sLnNvcnRPcmRlciAhPT0gdW5kZWZpbmVkKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEhZ3JhbmRDb2wub25GaWx0ZXIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhIWdyYW5kQ29sLmZpbHRlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Z3JhbmRDb2wuZGF0YUluZGV4IHx8IGdyYW5kQ29sSW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiBcIjEwMCAwIGF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBncmFuZENvbC5hbGlnbiB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmdlbmVyYXRlVGhDZWxsKGdyYW5kQ29sKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9SZXNpemVPYnNlcnZlcj5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKVxuXG4gICAgY29uc3QgZ2VuZXJhdGVUcnMgPSAocm93OiBJQmFzZU9iamVjdCwgcm93SW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3QgeyBrZXkgfSA9IHJvd1xuICAgICAgY29uc3QgY29sQXJyYXk6IGFueSA9IFtdXG4gICAgICBjb25zdCBzZWxlY3RQcm9wc0dldHRlZCA9IGdldFNlbGVjdFByb3BzICYmIGdldFNlbGVjdFByb3BzKHJvdywgcm93SW5kZXgpXG4gICAgICBjb25zdCBhbGxTZWxlY3RQcm9wcyA9IHtcbiAgICAgICAgY2hlY2tlZDogc2VsZWN0ZWRSb3dLZXlzLmluY2x1ZGVzKGtleSksXG4gICAgICAgIGNsYXNzTmFtZTogYCR7cHJlZml4fS1zZWxlY3RDb21wb25lbnRgLFxuICAgICAgICBvbkNoYW5nZTogKGNoZWNrZWQ6IGJvb2xlYW4pID0+IHRoaXMuaGFuZGxlU2VsZWN0KGtleSwgY2hlY2tlZCksXG4gICAgICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpLFxuICAgICAgICAuLi4oc2VsZWN0UHJvcHNHZXR0ZWQgfHwge30pLFxuICAgICAgfVxuICAgICAgY29uc3Qgc2VsZWN0UHJvcHMgPSBvbWl0KGFsbFNlbGVjdFByb3BzLCBbXCJwb3BvdmVyUHJvcHNcIl0pXG4gICAgICBjb25zdCBzZWxlY3RDZWxsID0gb25FeHBhbmRDaGFuZ2UgPyAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tc2VsZWN0Q29tcG9uZW50YH1cbiAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVFeHBhbmQoa2V5KX1cbiAgICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tZXhwYW5kSWNvbmB9IGljb249XCJhcnJvdy1kb3duXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogc2VsZWN0TXVsdGlwbGUgPyAoXG4gICAgICAgIDxDaGVja2JveCB7Li4uc2VsZWN0UHJvcHN9IC8+XG4gICAgICApIDogKFxuICAgICAgICA8UmFkaW8gey4uLnNlbGVjdFByb3BzfSAvPlxuICAgICAgKVxuICAgICAgY29uc3QgZ2VuZXJhdGVUciA9IChjb2x1bW5zUGFyYW06IGFueVtdLCBwYXJlbnRJbmRleD86IG51bWJlcikgPT4ge1xuICAgICAgICBjb2x1bW5zUGFyYW0uZm9yRWFjaCgoY29sLCBjb2xJbmRleFBhcmFtKSA9PiB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICog5aaC5p6c5YmN6Z2iIOeahCBjb2wg5pyJIGNoaWxkcmVu77yM5YiZ6KaB5oqKIGNoaWxkcmVuLmxlbmd0aCDpop3lpJbliqDliLAgY29sSW5kZXhcbiAgICAgICAgICAgKi9cbiAgICAgICAgICBsZXQgY29sSW5kZXggPSBjb2xJbmRleFBhcmFtXG4gICAgICAgICAgaWYgKHBhcmVudEluZGV4KSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmVudEluZGV4OyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgY29uc3QgY2hpbGRyZW5Db3VudCA9IGNvbHVtbnNbaV0uY2hpbGRyZW4/Lmxlbmd0aCB8fCAxXG4gICAgICAgICAgICAgIGlmIChjaGlsZHJlbkNvdW50KSB7XG4gICAgICAgICAgICAgICAgY29sSW5kZXggKz0gY2hpbGRyZW5Db3VudFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghY29sLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBjb2xBcnJheS5wdXNoKHRoaXMuZ2VuZXJhdGVUYm9keUNlbGwocm93LCBjb2wsIHJvd0luZGV4LCBjb2xJbmRleCkpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdlbmVyYXRlVHIoY29sLmNoaWxkcmVuLCBjb2xJbmRleFBhcmFtKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGdlbmVyYXRlVHIoY29sdW1ucylcbiAgICAgIGNvbnN0IHRyID0gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgICAgYCR7cHJlZml4fS10cmAsXG4gICAgICAgICAgICBnZXRSb3dDbGFzc05hbWUgJiYgZ2V0Um93Q2xhc3NOYW1lKHJvdywgcm93SW5kZXgpLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBbYCR7cHJlZml4fS10cl9jbGlja2FibGVgXTogZXhwYW5kT25Sb3dDbGljayB8fCBzZWxlY3RPblJvd0NsaWNrLFxuICAgICAgICAgICAgICBbYCR7cHJlZml4fS10cl9leHBhbmRlZGBdOiBleHBhbmRlZFJvd0tleXMuaW5jbHVkZXMoa2V5KSxcbiAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tdHJfc2VsZWN0ZWRgXTogc2VsZWN0ZWRSb3dLZXlzLmluY2x1ZGVzKGtleSksXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKX1cbiAgICAgICAgICBrZXk9e2tleSB8fCByb3dJbmRleH1cbiAgICAgICAgICByb2xlPVwicm93XCJcbiAgICAgICAgICBkYXRhLXJvdz17cm93SW5kZXh9XG4gICAgICAgICAgb25Nb3VzZUVudGVyPXtcbiAgICAgICAgICAgIG9uUm93TW91c2VFbnRlclxuICAgICAgICAgICAgICA/IChlKSA9PiBvblJvd01vdXNlRW50ZXIocm93LCByb3dJbmRleCwgZSlcbiAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgICB9XG4gICAgICAgICAgb25Nb3VzZUxlYXZlPXtcbiAgICAgICAgICAgIG9uUm93TW91c2VMZWF2ZVxuICAgICAgICAgICAgICA/IChlKSA9PiBvblJvd01vdXNlTGVhdmUocm93LCByb3dJbmRleCwgZSlcbiAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgICB9XG4gICAgICAgICAgb25DbGljaz17KGUpID0+IHRoaXMuaGFuZGxlUm93Q2xpY2socm93LCByb3dJbmRleCwgZSl9XG4gICAgICAgICAgb25LZXlEb3duPXtub29wfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi4oKGdldFJvd1N0eWxlICYmIGdldFJvd1N0eWxlKHJvdywgcm93SW5kZXgpKSB8fCB7fSksXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aGVhZFBsYWNlaG9sZGVyVmlzaWJsZSAmJiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LXRkYCwgYCR7cHJlZml4fS10ZF9mdW5jdGlvbmFsYCwge1xuICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXRkX2xlZnRgXTogaXNBbnlDb2x1bW5zTGVmdEZpeGVkKCksXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICBrZXk9XCJmdW5jdGlvbmFsXCJcbiAgICAgICAgICAgICAgcm9sZT1cImNlbGxcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWNlbGxgfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiB2ZXJ0aWNhbEFsaWduICYmIFZFUlRJQ0FMX0FMSUdOW3ZlcnRpY2FsQWxpZ25dLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7c2VsZWN0UHJvcHNHZXR0ZWQ/LnBvcG92ZXJQcm9wcz8ucG9wdXAgPyAoXG4gICAgICAgICAgICAgICAgICA8UG9wb3ZlclxuICAgICAgICAgICAgICAgICAgICBtb3VzZUVudGVyRGVsYXk9ezAuMX1cbiAgICAgICAgICAgICAgICAgICAgYWxpZ25FZGdlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICB7Li4uKFxuICAgICAgICAgICAgICAgICAgICAgIChnZXRTZWxlY3RQcm9wcyAmJiBnZXRTZWxlY3RQcm9wcyhyb3csIHJvd0luZGV4KSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICB7fVxuICAgICAgICAgICAgICAgICAgICApLnBvcG92ZXJQcm9wc31cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3NlbGVjdENlbGx9XG4gICAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIHNlbGVjdENlbGxcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAge2NvbEFycmF5fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICAgIGlmIChvbkV4cGFuZENoYW5nZSkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIHRyLFxuICAgICAgICAgIGV4cGFuZGVkUm93S2V5cy5pbmNsdWRlcyhrZXkpID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tZXhwYW5kUm93YH0ga2V5PVwidHItZXhwYW5kXCI+XG4gICAgICAgICAgICAgIHshIWV4cGFuZGVkUm93UmVuZGVyICYmIGV4cGFuZGVkUm93UmVuZGVyKHJvdywgcm93SW5kZXgpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IG51bGwsXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0clxuICAgIH1cblxuICAgIHJldHVybiBbXG4gICAgICBoZWFkZXJBZmZpeGVkID8gKFxuICAgICAgICA8QWZmaXhcbiAgICAgICAgICBrZXk9ezB9XG4gICAgICAgICAgb2Zmc2V0VG9wPXtoZWFkZXJBZmZpeGVkT2Zmc2V0VG9wfVxuICAgICAgICAgIGdldENvbnRhaW5lcj17KCkgPT4gdGhpcy53cmFwcGVyfVxuICAgICAgICAgIGdldFRhcmdldD17aGVhZGVyQWZmaXhHZXRUYXJnZXR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhib29sKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWZmaXhlZFRvcDogYm9vbCB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgIC8vIOWbuuWumueahOmCo+S4gOWIu+S5n+mcgOimgeeri+WNs+mHjeaWsOWumuS9jeOAglxuICAgICAgICAgICAgICAvLyDph43mlrDlrprkvY3jgIHljIXmi6zkuIvpnaLnmoQgY2xhc3NOYW1lLCBzdHlsZSDlj6rlnKjkuLvooajmoLzkuIrlj5HnlJ/vvIzlm6DkuLrlm7rlrprliJfnmoQgQWZmaXgg6KGM5Li65b6I5Y2V57qv44CCXG4gICAgICAgICAgICAgIGlmIChib29sKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVXaW5kb3dSZXNpemUoKVxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlTWFpblRhYmxlU2Nyb2xsKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT17YWZmaXhlZFRvcCA/IGAke3ByZWZpeH0tYWZmaXhgIDogXCJcIn1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICB6SW5kZXg6IDIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImJhc2VsaW5lXCIsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgLi4uKGFmZml4ZWRUb3AgPyBtYWluVGFibGVTdHlsZSA6IHt9KSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHJlZj17dGhpcy5zYXZlUmVmKFwiYWZmaXhIZWFkZXJcIil9XG4gICAgICAgID5cbiAgICAgICAgICB7dGhlYWR9XG4gICAgICAgIDwvQWZmaXg+XG4gICAgICApIDogKFxuICAgICAgICB0aGVhZFxuICAgICAgKSxcbiAgICAgIDxkaXZcbiAgICAgICAga2V5PXsxfVxuICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tdGJvZHlgfVxuICAgICAgICByZWY9e3RoaXMuc2F2ZVJlZihcIm1haW5UYWJsZUJvZHlcIil9XG4gICAgICA+XG4gICAgICAgIHshdmlydHVhbFNjcm9sbCAmJlxuICAgICAgICAgIGRhdGFTb3VyY2UgJiZcbiAgICAgICAgICAhIWRhdGFTb3VyY2UubGVuZ3RoICYmXG4gICAgICAgICAgZGF0YVNvdXJjZS5tYXAoKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBnZW5lcmF0ZVRycyhyb3csIHJvd0luZGV4KVxuICAgICAgICAgIH0pfVxuICAgICAgICB7dmlydHVhbFNjcm9sbCAmJiBkYXRhU291cmNlICYmICEhZGF0YVNvdXJjZS5sZW5ndGggJiYgKFxuICAgICAgICAgIDxMaXN0XG4gICAgICAgICAgICBkYXRhPXtkYXRhU291cmNlfVxuICAgICAgICAgICAgaXRlbUtleT1cImRhdGFJbmRleFwiXG4gICAgICAgICAgICBoZWlnaHQ9eyhoZWlnaHQgfHwgNDAwKSAtIDQwfVxuICAgICAgICAgICAgaXRlbUhlaWdodD17NDJ9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tdmlydHVhbC13cmFwcGVyYH1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIC4uLnZpcnR1YWxMaXN0U3R5bGUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgey4uLnZpcnR1YWxMaXN0UHJvcHN9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgeyhyb3c6IElCYXNlT2JqZWN0LCByb3dJbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBnZW5lcmF0ZVRycyhyb3csIHJvd0luZGV4KVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj4sXG4gICAgICBpc01haW5UYWJsZU92ZXJmbG93WCAmJiBoZWFkZXJBZmZpeGVkICYmIChcbiAgICAgICAgPEFmZml4XG4gICAgICAgICAga2V5PXsyfVxuICAgICAgICAgIG9mZnNldEJvdHRvbT17MH1cbiAgICAgICAgICBnZXRDb250YWluZXI9eygpID0+IHRoaXMubWFpblRhYmxlQm9keX1cbiAgICAgICAgICByZWY9e3RoaXMuc2F2ZVJlZihcImFmZml4U2Nyb2xsYmFyXCIpfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LWFmZml4U2Nyb2xsYmFyYCwge1xuICAgICAgICAgICAgW2Ake3ByZWZpeH0tYWZmaXhTY3JvbGxiYXJfc2hvd2BdOiBhZmZpeGVkQm90dG9tLFxuICAgICAgICAgIH0pfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB6SW5kZXg6IDIsXG4gICAgICAgICAgICAuLi5tYWluVGFibGVTdHlsZSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uU2Nyb2xsPXsoZTogUmVhY3QuU3ludGhldGljRXZlbnQ8SFRNTEVsZW1lbnQ+KSA9PlxuICAgICAgICAgICAgdGhpcy5zeW5jVGFibGVTY3JvbGxQb3NpdGlvbihlLmN1cnJlbnRUYXJnZXQuc2Nyb2xsTGVmdClcbiAgICAgICAgICB9XG4gICAgICAgICAgb25DaGFuZ2U9eyhib29sKSA9PiB0aGlzLnNldFN0YXRlKHsgYWZmaXhlZEJvdHRvbTogYm9vbCB9KX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IHRoaXMubWFpblRhYmxlPy5zY3JvbGxXaWR0aCB9fSAvPlxuICAgICAgICA8L0FmZml4PlxuICAgICAgKSxcbiAgICBdXG4gIH1cblxuICBwdWJsaWMgZ2VuZXJhdGVUaENlbGwgPSAoY29sOiBJQ29sdW1uUHJvcHMsIG9wdGlvbnM/OiBJQmFzZU9iamVjdCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGFsaWduLFxuICAgICAgY29sdW1uc1Jlc2l6YWJsZSxcbiAgICAgIGdldEhlYWRDZWxsQ2xhc3NOYW1lLFxuICAgICAgZ2V0SGVhZENlbGxTdHlsZSxcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgcmVzaXphYmxlOiBjb2xSZXNpemFibGUgfSA9IGNvbFxuICAgIGxldCByZXNpemFibGUgPSB0cnVlXG4gICAgaWYgKHR5cGVvZiBjb2xSZXNpemFibGUgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICByZXNpemFibGUgPSBjb2xSZXNpemFibGVcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb2x1bW5zUmVzaXphYmxlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgcmVzaXphYmxlID0gY29sdW1uc1Jlc2l6YWJsZVxuICAgIH1cblxuICAgIGNvbnN0IHsgY3VycmVudGx5UmVzaXppbmcsIGlzUmVzaXplclNob3cgfSA9IHRoaXMuc3RhdGVcblxuICAgIGNvbnN0IGlzTGFzdFRoID0gb3B0aW9ucyAmJiBvcHRpb25zLmluZGV4ID09PSBvcHRpb25zLmNvbHVtbnMubGVuZ3RoIC0gMVxuXG4gICAgY29uc3QgdGhDZWxsID0gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgYCR7cHJlZml4fS1jZWxsYCxcbiAgICAgICAgICBnZXRIZWFkQ2VsbENsYXNzTmFtZSAmJlxuICAgICAgICAgICAgZ2V0SGVhZENlbGxDbGFzc05hbWUoY29sLCBvcHRpb25zID8gb3B0aW9ucy5pbmRleCA6IHVuZGVmaW5lZClcbiAgICAgICAgKX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDpcbiAgICAgICAgICAgIChjb2wuYWxpZ24gJiYgSE9SSVpPTlRBTF9BTElHTltjb2wuYWxpZ25dKSB8fFxuICAgICAgICAgICAgKGFsaWduICYmIEhPUklaT05UQUxfQUxJR05bYWxpZ25dKSB8fFxuICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgIC4uLigoZ2V0SGVhZENlbGxTdHlsZSAmJlxuICAgICAgICAgICAgZ2V0SGVhZENlbGxTdHlsZShjb2wsIG9wdGlvbnMgPyBvcHRpb25zLmluZGV4IDogdW5kZWZpbmVkKSkgfHxcbiAgICAgICAgICAgIHt9KSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgeyFjb2wub25Tb3J0ICYmXG4gICAgICAgICAgKGNvbC5zb3J0T3JkZXIgPT09IG51bGwgfHwgY29sLnNvcnRPcmRlciA9PT0gdW5kZWZpbmVkKSAmJlxuICAgICAgICAgICFjb2wub25GaWx0ZXIgJiZcbiAgICAgICAgICAhY29sLmZpbHRlcnMgJiZcbiAgICAgICAgICBjb2wudGl0bGV9XG4gICAgICAgIHsoISFjb2wub25Tb3J0IHx8XG4gICAgICAgICAgKGNvbC5zb3J0T3JkZXIgIT09IG51bGwgJiYgY29sLnNvcnRPcmRlciAhPT0gdW5kZWZpbmVkKSkgJiYgKFxuICAgICAgICAgIDxUYWJsZVNvcnRcbiAgICAgICAgICAgIG9uU29ydD17KG9yZGVyKSA9PiAoY29sLm9uU29ydCA/IGNvbC5vblNvcnQob3JkZXIpIDoge30pfVxuICAgICAgICAgICAgc29ydE9yZGVyPXtjb2wuc29ydE9yZGVyfVxuICAgICAgICAgICAgdGl0bGU9e2NvbC50aXRsZX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7KCEhY29sLm9uRmlsdGVyIHx8ICEhY29sLmZpbHRlcnMpICYmIChcbiAgICAgICAgICA8VGFibGVGaWx0ZXJcbiAgICAgICAgICAgIGZpbHRlcmVkVmFsdWU9e2NvbC5maWx0ZXJlZFZhbHVlfVxuICAgICAgICAgICAgZmlsdGVyVmlzaWJsZT17Y29sLmZpbHRlclZpc2libGV9XG4gICAgICAgICAgICBmaWx0ZXJNdWx0aXBsZT17Y29sLmZpbHRlck11bHRpcGxlfVxuICAgICAgICAgICAgZmlsdGVyUG9wb3ZlclByb3BzPXtjb2wuZmlsdGVyUG9wb3ZlclByb3BzfVxuICAgICAgICAgICAgZmlsdGVycz17Y29sLmZpbHRlcnN9XG4gICAgICAgICAgICBvbkZpbHRlcj17KGZpbHRlcikgPT4ge1xuICAgICAgICAgICAgICBpZiAoY29sLm9uRmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgY29sLm9uRmlsdGVyKGZpbHRlcilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uRmlsdGVyVmlzaWJsZUNoYW5nZT17KHZpc2libGUpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGNvbC5vbkZpbHRlclZpc2libGVDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICBjb2wub25GaWx0ZXJWaXNpYmxlQ2hhbmdlKHZpc2libGUpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB0aXRsZT17Y29sLnRpdGxlfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHshY29sLmZpeGVkICYmIHJlc2l6YWJsZSAmJiAhaXNMYXN0VGggJiYgKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LXJlc2l6ZXJgLCB7XG4gICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXJlc2l6ZXJfc2hvd2BdOiBpc1Jlc2l6ZXJTaG93LFxuICAgICAgICAgICAgICBbYCR7cHJlZml4fS1yZXNpemVyX2N1cnJlbnRgXTpcbiAgICAgICAgICAgICAgICBjdXJyZW50bHlSZXNpemluZy5kYXRhSW5kZXggPT09IGNvbC5kYXRhSW5kZXgsXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIG9uTW91c2VEb3duPXsoZSkgPT4gdGhpcy5yZXNpemVDb2x1bW5TdGFydChlLCBjb2wpfVxuICAgICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApXG5cbiAgICBpZiAoY29sLnBvcG92ZXIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxQb3BvdmVyXG4gICAgICAgICAgbW91c2VFbnRlckRlbGF5PXswLjN9XG4gICAgICAgICAgcGxhY2VtZW50PXtcbiAgICAgICAgICAgIGNvbC5hbGlnbiA9PT0gXCJjZW50ZXJcIlxuICAgICAgICAgICAgICA/IFwidG9wXCJcbiAgICAgICAgICAgICAgOiBjb2wuYWxpZ24gPT09IFwicmlnaHRcIlxuICAgICAgICAgICAgICA/IFwidG9wUmlnaHRcIlxuICAgICAgICAgICAgICA6IFwidG9wTGVmdFwiXG4gICAgICAgICAgfVxuICAgICAgICAgIGFsaWduRWRnZVxuICAgICAgICAgIGFycm93ZWRcbiAgICAgICAgICBwb3B1cD17Y29sLnBvcG92ZXJ9XG4gICAgICAgID5cbiAgICAgICAgICB7dGhDZWxsfVxuICAgICAgICA8L1BvcG92ZXI+XG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiB0aENlbGxcbiAgfVxuXG4gIHB1YmxpYyBnZW5lcmF0ZVRib2R5Q2VsbCA9IChcbiAgICByb3c6IElCYXNlT2JqZWN0LFxuICAgIGNlbGw6IElDb2x1bW5Qcm9wcyxcbiAgICByb3dJbmRleDogbnVtYmVyLFxuICAgIGNlbGxJbmRleDogbnVtYmVyXG4gICkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGFsaWduOiBhbGlnblByb3AsXG4gICAgICBleHBhbmRJY29uVmlzaWJsZSxcbiAgICAgIGdldENlbGxDbGFzc05hbWUsXG4gICAgICBnZXRDZWxsUHJvcHMsXG4gICAgICBnZXRDZWxsU3R5bGUsXG4gICAgICBvbkV4cGFuZENoYW5nZSxcbiAgICAgIG9uU2VsZWN0Q2hhbmdlLFxuICAgICAgdmVydGljYWxBbGlnbjogdmVydGljYWxBbGlnblByb3AsXG4gICAgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB0aGVhZFBsYWNlaG9sZGVyVmlzaWJsZSA9XG4gICAgICBleHBhbmRJY29uVmlzaWJsZSAmJiAoISFvblNlbGVjdENoYW5nZSB8fCAhIW9uRXhwYW5kQ2hhbmdlKVxuICAgIGNvbnN0IHsgY3VycmVudGx5UmVzaXppbmcsIGZpeGVkQ29sdW1uc0luZm9zLCByZXNpemVkIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3Qge1xuICAgICAgYWxpZ24sXG4gICAgICBkYXRhSW5kZXgsXG4gICAgICBmaWx0ZXJzLFxuICAgICAgb25GaWx0ZXIsXG4gICAgICBvblNvcnQsXG4gICAgICByZW5kZXIsXG4gICAgICBzb3J0T3JkZXIsXG4gICAgICB0aXRsZSxcbiAgICAgIHZlcnRpY2FsQWxpZ24sXG4gICAgICB3aWR0aCxcbiAgICB9ID0gY2VsbFxuICAgIGNvbnN0IGNsaWNrYWJsZSA9XG4gICAgICAhIW9uU29ydCB8fFxuICAgICAgKHNvcnRPcmRlciAhPT0gbnVsbCAmJiBzb3J0T3JkZXIgIT09IHVuZGVmaW5lZCkgfHxcbiAgICAgICEhb25GaWx0ZXIgfHxcbiAgICAgICEhZmlsdGVyc1xuICAgIGxldCBtaW5XaWR0aCA9IDBcbiAgICBpZiAodHlwZW9mIHRpdGxlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtaW5XaWR0aCA9XG4gICAgICAgIE1hdGguY2VpbCh0aXRsZS5sZW5ndGggPiA0ID8gdGl0bGUubGVuZ3RoIC8gMiA6IHRpdGxlLmxlbmd0aCkgKiAxMyArIDE2XG4gICAgICBpZiAoY2xpY2thYmxlKSB7XG4gICAgICAgIG1pbldpZHRoICs9IDIwXG4gICAgICB9XG4gICAgfVxuICAgIGxldCBmbGV4VmFsdWVcbiAgICBpZiAodHlwZW9mIHdpZHRoID09PSBcIm51bWJlclwiKSB7XG4gICAgICBmbGV4VmFsdWUgPSBgJHt3aWR0aH0gMCBhdXRvYFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHdpZHRoID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBpZiAod2lkdGgubGVuZ3RoIC0gd2lkdGgubGFzdEluZGV4T2YoXCJweFwiKSA9PT0gMikge1xuICAgICAgICBmbGV4VmFsdWUgPSBgJHt3aWR0aC5zbGljZSgwLCAtMil9IDAgYXV0b2BcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZsZXhWYWx1ZSA9IGAwIDAgJHt3aWR0aH1gXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZsZXhWYWx1ZSA9IGAke01hdGgubWF4KFREX01JTl9XSURUSCwgbWluV2lkdGgpfSAwIGF1dG9gXG4gICAgfVxuICAgIGNvbnN0IHJlc2l6ZWRDb2wgPSByZXNpemVkLmZpbmQoKG8pID0+IG8uZGF0YUluZGV4ID09PSBkYXRhSW5kZXgpXG4gICAgY29uc3QgY2VsbENsYXNzTmFtZSA9XG4gICAgICBnZXRDZWxsQ2xhc3NOYW1lICYmIGdldENlbGxDbGFzc05hbWUocm93LCBjZWxsLCByb3dJbmRleCwgY2VsbEluZGV4KVxuICAgIGNvbnN0IGNlbGxQcm9wcyA9XG4gICAgICAoZ2V0Q2VsbFByb3BzICYmIGdldENlbGxQcm9wcyhyb3csIGNlbGwsIHJvd0luZGV4LCBjZWxsSW5kZXgpKSB8fCB7fVxuICAgIGNvbnN0IGNlbGxTdHlsZSA9XG4gICAgICAoZ2V0Q2VsbFN0eWxlICYmIGdldENlbGxTdHlsZShyb3csIGNlbGwsIHJvd0luZGV4LCBjZWxsSW5kZXgpKSB8fCB7fVxuICAgIGNvbnN0IHsgcm93U3BhbiwgY29sU3BhbiwgLi4ub3RoZXJDZWxsUHJvcHMgfSA9IGNlbGxQcm9wc1xuICAgIGlmIChyb3dTcGFuIHx8IGNvbFNwYW4pIHtcbiAgICAgIHRoaXMuY29tYmluZWRDZWxsc0luZm8ucHVzaCh7XG4gICAgICAgIGNlbGwsXG4gICAgICAgIGNlbGxJbmRleCxcbiAgICAgICAgY29sU3BhbixcbiAgICAgICAgcm93LFxuICAgICAgICByb3dJbmRleCxcbiAgICAgICAgcm93U3BhbixcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LXRkYCwge1xuICAgICAgICAgIFtgJHtwcmVmaXh9LXRkX3Jlc2l6aW5nYF06XG4gICAgICAgICAgICBkYXRhSW5kZXggIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgY3VycmVudGx5UmVzaXppbmcuZGF0YUluZGV4ID09PSBkYXRhSW5kZXgsXG4gICAgICAgICAgW2Ake3ByZWZpeH0tdGRfbGVmdGBdOiBpc0ZpeGVkTGVmdChjZWxsKSxcbiAgICAgICAgICBbYCR7cHJlZml4fS10ZF9yaWdodGBdOiBpc0ZpeGVkUmlnaHQoY2VsbCksXG4gICAgICAgICAgW2Ake3ByZWZpeH0tdGRfbGVmdExhc3RgXTogZml4ZWRDb2x1bW5zSW5mb3MuZmluZChcbiAgICAgICAgICAgIChvKSA9PiBvLmRhdGFJbmRleCA9PT0gZGF0YUluZGV4XG4gICAgICAgICAgKT8uaXNMYXN0TGVmdCxcbiAgICAgICAgICBbYCR7cHJlZml4fS10ZF9yaWdodEZpcnN0YF06IGZpeGVkQ29sdW1uc0luZm9zLmZpbmQoXG4gICAgICAgICAgICAobykgPT4gby5kYXRhSW5kZXggPT09IGRhdGFJbmRleFxuICAgICAgICAgICk/LmlzRmlyc3RSaWdodCxcbiAgICAgICAgICBbYCR7cHJlZml4fS10ZF9jb21iaW5lZGBdOiByb3dTcGFuIHx8IGNvbFNwYW4sXG4gICAgICAgIH0pfVxuICAgICAgICBrZXk9e2RhdGFJbmRleCB8fCBjZWxsSW5kZXh9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgbGVmdDogaXNGaXhlZExlZnQoY2VsbClcbiAgICAgICAgICAgID8gKGZpeGVkQ29sdW1uc0luZm9zLmZpbmQoKG8pID0+IG8uZGF0YUluZGV4ID09PSBkYXRhSW5kZXgpXG4gICAgICAgICAgICAgICAgPy5vZmZzZXQgfHwgMCkgKyAodGhlYWRQbGFjZWhvbGRlclZpc2libGUgPyBTRUxFQ1RfVERfV0lEVEggOiAwKVxuICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgcmlnaHQ6IGlzRml4ZWRSaWdodChjZWxsKVxuICAgICAgICAgICAgPyBmaXhlZENvbHVtbnNJbmZvcy5maW5kKChvKSA9PiBvLmRhdGFJbmRleCA9PT0gZGF0YUluZGV4KT8ub2Zmc2V0XG4gICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgICBmbGV4OiByZXNpemVkQ29sID8gYCR7cmVzaXplZENvbC52YWx1ZX0gMCBhdXRvYCA6IGZsZXhWYWx1ZSxcbiAgICAgICAgICB3aWR0aDogcmVzaXplZENvbFxuICAgICAgICAgICAgPyByZXNpemVkQ29sLnZhbHVlXG4gICAgICAgICAgICA6IHdpZHRoIHx8IE1hdGgubWF4KFREX01JTl9XSURUSCwgbWluV2lkdGgpLFxuICAgICAgICAgIG1heFdpZHRoOiByZXNpemVkQ29sID8gcmVzaXplZENvbC52YWx1ZSA6IHdpZHRoIHx8IFwiXCIsXG4gICAgICAgIH19XG4gICAgICAgIHJvbGU9XCJjZWxsXCJcbiAgICAgICAgZGF0YS1yb3c9e3Jvd0luZGV4fVxuICAgICAgICBkYXRhLWNvbHVtbj17Y2VsbEluZGV4fVxuICAgICAgICB7Li4ub3RoZXJDZWxsUHJvcHN9XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS1jZWxsYCwgY2VsbENsYXNzTmFtZSl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGFsaWduSXRlbXM6XG4gICAgICAgICAgICAgICh2ZXJ0aWNhbEFsaWduICYmIFZFUlRJQ0FMX0FMSUdOW3ZlcnRpY2FsQWxpZ25dKSB8fFxuICAgICAgICAgICAgICAodmVydGljYWxBbGlnblByb3AgJiYgVkVSVElDQUxfQUxJR05bdmVydGljYWxBbGlnblByb3BdKSB8fFxuICAgICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDpcbiAgICAgICAgICAgICAgKGFsaWduICYmIEhPUklaT05UQUxfQUxJR05bYWxpZ25dKSB8fFxuICAgICAgICAgICAgICAoYWxpZ25Qcm9wICYmIEhPUklaT05UQUxfQUxJR05bYWxpZ25Qcm9wXSkgfHxcbiAgICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAgLi4uY2VsbFN0eWxlLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1jZWxsSW5uZXJgfT5cbiAgICAgICAgICAgIHtyZW5kZXIgPyByZW5kZXIocm93LCBjZWxsLCByb3dJbmRleCwgY2VsbEluZGV4KSA6IHJvd1tkYXRhSW5kZXhdfVxuICAgICAgICAgICAgeyhyb3dTcGFuIHx8IGNvbFNwYW4pICYmIChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1jZWxsX2NvbWJpbmVkYH1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgLi4udGhpcy5nZXRDb21iaW5lZENlbGxTdHlsZShcbiAgICAgICAgICAgICAgICAgICAgcm93LFxuICAgICAgICAgICAgICAgICAgICBjZWxsLFxuICAgICAgICAgICAgICAgICAgICByb3dJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgY2VsbEluZGV4LFxuICAgICAgICAgICAgICAgICAgICByb3dTcGFuLFxuICAgICAgICAgICAgICAgICAgICBjb2xTcGFuXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBhbGlnbiB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtyZW5kZXJcbiAgICAgICAgICAgICAgICAgID8gcmVuZGVyKHJvdywgY2VsbCwgcm93SW5kZXgsIGNlbGxJbmRleClcbiAgICAgICAgICAgICAgICAgIDogcm93W2RhdGFJbmRleF19XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBwdWJsaWMgZ2V0Q29tYmluZWRDZWxsU3R5bGUgPSAoXG4gICAgXzogSUJhc2VPYmplY3QsXG4gICAgX186IElDb2x1bW5Qcm9wcyxcbiAgICByb3dJbmRleDogbnVtYmVyLFxuICAgIGNvbEluZGV4OiBudW1iZXIsXG4gICAgcm93U3BhbjogbnVtYmVyLFxuICAgIGNvbFNwYW46IG51bWJlclxuICApID0+IHtcbiAgICBjb25zdCBnZXRUYWJsZUNlbGwgPSAocm93SW5kZXhQYXJhbTogbnVtYmVyLCBjb2xJbmRleFBhcmFtOiBudW1iZXIpID0+IHtcbiAgICAgIGlmICh0aGlzLm1haW5UYWJsZSkge1xuICAgICAgICBjb25zdCByb3cgPSB0aGlzLm1haW5UYWJsZS5xdWVyeVNlbGVjdG9yQWxsKCdbcm9sZT1cInJvd1wiXScpW1xuICAgICAgICAgIHJvd0luZGV4UGFyYW1cbiAgICAgICAgXVxuICAgICAgICBpZiAocm93KSB7XG4gICAgICAgICAgcmV0dXJuIHJvdy5jaGlsZHJlbltjb2xJbmRleFBhcmFtXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBjb25zdCBjZWxsID0gZ2V0VGFibGVDZWxsKHJvd0luZGV4LCBjb2xJbmRleClcbiAgICBjb25zdCBzdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHt9XG4gICAgaWYgKHJvd1NwYW4gPCAyIHx8IHR5cGVvZiByb3dTcGFuID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAvLyDmnIDlkI4gLSAxIOaYr+S4uuS6huS4jeaMoeS9jyBjZWxsIOeahCBib3gtc2hhZG93XG4gICAgICBzdHlsZS5oZWlnaHQgPSBcImNhbGMoMTAwJSAtIDFweClcIlxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBlbmRDZWxsID0gZ2V0VGFibGVDZWxsKHJvd0luZGV4ICsgcm93U3BhbiAtIDEsIGNvbEluZGV4KVxuICAgICAgaWYgKGNlbGwgJiYgZW5kQ2VsbCkge1xuICAgICAgICBjb25zdCBjZWxsUmVjdCA9IGNlbGwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgY29uc3QgZW5kQ2VsbFJlY3QgPSBlbmRDZWxsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIC8vIOacgOWQjiAtIDEg5piv5Li65LqG5LiN5oyh5L2PIGNlbGwg55qEIGJveC1zaGFkb3dcbiAgICAgICAgc3R5bGUuaGVpZ2h0ID0gYCR7XG4gICAgICAgICAgZW5kQ2VsbFJlY3QuaGVpZ2h0ICsgZW5kQ2VsbFJlY3QudG9wIC0gY2VsbFJlY3QudG9wIC0gMVxuICAgICAgICB9cHhgXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvbFNwYW4gPCAyIHx8IHR5cGVvZiBjb2xTcGFuID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAvLyDmnIDlkI4gLSAxIOaYr+S4uuS6huS4jeaMoeS9jyBjZWxsIOeahCBib3gtc2hhZG93XG4gICAgICBzdHlsZS53aWR0aCA9IFwiY2FsYygxMDAlIC0gMXB4KVwiXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGVuZENlbGwgPSBnZXRUYWJsZUNlbGwocm93SW5kZXgsIGNvbEluZGV4ICsgY29sU3BhbiAtIDEpXG4gICAgICBpZiAoY2VsbCAmJiBlbmRDZWxsKSB7XG4gICAgICAgIGNvbnN0IGNlbGxSZWN0ID0gY2VsbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICBjb25zdCBlbmRDZWxsUmVjdCA9IGVuZENlbGwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgLy8g5pyA5ZCOIC0gMSDmmK/kuLrkuobkuI3mjKHkvY8gY2VsbCDnmoQgYm94LXNoYWRvd1xuICAgICAgICBzdHlsZS53aWR0aCA9IGAke1xuICAgICAgICAgIGVuZENlbGxSZWN0LndpZHRoICsgZW5kQ2VsbFJlY3QubGVmdCAtIGNlbGxSZWN0LmxlZnQgLSAxXG4gICAgICAgIH1weGBcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGVcbiAgfVxuXG4gIHB1YmxpYyBzYXZlUmVmID0gKFxuICAgIG5hbWU/OlxuICAgICAgfCBcImFmZml4SGVhZGVyXCJcbiAgICAgIHwgXCJhZmZpeFNjcm9sbGJhclwiXG4gICAgICB8IFwibWFpblRhYmxlXCJcbiAgICAgIHwgXCJtYWluVGFibGVCb2R5XCJcbiAgICAgIHwgXCJtYWluVGhlYWRcIlxuICAgICAgfCBcIndyYXBwZXJcIlxuICApID0+IChub2RlOiBhbnkpID0+IHtcbiAgICBpZiAobmFtZSkge1xuICAgICAgdGhpc1tuYW1lXSA9IG5vZGVcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGRhdGFTb3VyY2UsXG4gICAgICBlbXB0eVRleHQsXG4gICAgICBoZWFkZXJBZmZpeGVkLFxuICAgICAgaGVhZGVyQWZmaXhlZE9mZnNldFRvcCxcbiAgICAgIGhlYWRlckFmZml4R2V0VGFyZ2V0LFxuICAgICAgaGVhZGVyRW1waGFzaXplZCxcbiAgICAgIGhlaWdodCxcbiAgICAgIGxvYWRpbmcsXG4gICAgICBzaXplLFxuICAgICAgdmlydHVhbFNjcm9sbCxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgcmVzdFByb3BzID0gb21pdChvdGhlclByb3BzLCBbXG4gICAgICBcImFsaWduXCIsXG4gICAgICBcImNoaWxkcmVuXCIsXG4gICAgICBcImNvbHVtbnNcIixcbiAgICAgIFwiY29sdW1uc1Jlc2l6YWJsZVwiLFxuICAgICAgXCJkZWZhdWx0RXhwYW5kZWRSb3dLZXlzXCIsXG4gICAgICBcImRlZmF1bHRTZWxlY3RlZFJvd0tleXNcIixcbiAgICAgIFwiZXhwYW5kSWNvblZpc2libGVcIixcbiAgICAgIFwiZXhwYW5kT25Sb3dDbGlja1wiLFxuICAgICAgXCJleHBhbmRlZFJvd0tleXNcIixcbiAgICAgIFwiZXhwYW5kZWRSb3dSZW5kZXJcIixcbiAgICAgIFwiZ2V0Q2VsbENsYXNzTmFtZVwiLFxuICAgICAgXCJnZXRDZWxsUHJvcHNcIixcbiAgICAgIFwiZ2V0Q2VsbFN0eWxlXCIsXG4gICAgICBcImdldEhlYWRDbGFzc05hbWVcIixcbiAgICAgIFwiZ2V0SGVhZFN0eWxlXCIsXG4gICAgICBcImdldEhlYWRDZWxsQ2xhc3NOYW1lXCIsXG4gICAgICBcImdldEhlYWRDZWxsU3R5bGVcIixcbiAgICAgIFwiZ2V0Um93Q2xhc3NOYW1lXCIsXG4gICAgICBcImdldFJvd1N0eWxlXCIsXG4gICAgICBcImdldFNlbGVjdFByb3BzXCIsXG4gICAgICBcIm9uRXhwYW5kQ2hhbmdlXCIsXG4gICAgICBcIm9uU2VsZWN0Q2hhbmdlXCIsXG4gICAgICBcIm9uU2Nyb2xsXCIsXG4gICAgICBcIm9uUm93Q2xpY2tcIixcbiAgICAgIFwib25Sb3dNb3VzZUVudGVyXCIsXG4gICAgICBcIm9uUm93TW91c2VMZWF2ZVwiLFxuICAgICAgXCJzZWxlY3RNdWx0aXBsZVwiLFxuICAgICAgXCJzZWxlY3RlZFJvd0tleXNcIixcbiAgICAgIFwic2VsZWN0T25Sb3dDbGlja1wiLFxuICAgICAgXCJ2ZXJ0aWNhbEFsaWduXCIsXG4gICAgICBcInZpcnR1YWxMaXN0UHJvcHNcIixcbiAgICAgIFwidmlydHVhbExpc3RTdHlsZVwiLFxuICAgIF0pXG5cbiAgICBjb25zdCB7IGNoaWxkcmVuLCBpc01haW5UYWJsZU92ZXJmbG93WCwgaXNNYWluVGFibGVPdmVyZmxvd1kgfSA9IHRoaXMuc3RhdGVcblxuICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgdGhpcy5jb2x1bW5NYW5hZ2VyLnJlc2V0KGNoaWxkcmVuKVxuICAgIH1cblxuICAgIGNvbnN0IHsgZ2V0R3JvdXBDb2x1bW5zRGVwdGggfSA9IHRoaXMuY29sdW1uTWFuYWdlclxuXG4gICAgY29uc3QgZW1wdHkgPSAhKGRhdGFTb3VyY2UgJiYgZGF0YVNvdXJjZS5sZW5ndGgpXG5cbiAgICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBgJHtwcmVmaXh9LXdyYXBwZXJgLFxuICAgICAgYCR7cHJlZml4fS0ke3NpemV9YCxcbiAgICAgIHtcbiAgICAgICAgW2Ake3ByZWZpeH0taGVhZGVyRW1waGFzaXplZGBdOiBoZWFkZXJFbXBoYXNpemVkLFxuICAgICAgICBbYCR7cHJlZml4fS1lbXB0eWBdOiBlbXB0eSxcbiAgICAgICAgW2Ake3ByZWZpeH0tbG9hZGluZ2BdOiBsb2FkaW5nLFxuICAgICAgICBbYCR7cHJlZml4fS1vdmVyZmxvdy14YF06IGlzTWFpblRhYmxlT3ZlcmZsb3dYLFxuICAgICAgICBbYCR7cHJlZml4fS1vdmVyZmxvdy15YF06IGlzTWFpblRhYmxlT3ZlcmZsb3dZLFxuICAgICAgICBbYCR7cHJlZml4fS12aXJ0dWFsU2Nyb2xsYF06IHZpcnR1YWxTY3JvbGwsXG4gICAgICB9XG4gICAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc1NldH0gcmVmPXt0aGlzLnNhdmVSZWYoXCJ3cmFwcGVyXCIpfSB7Li4ucmVzdFByb3BzfT5cbiAgICAgICAgPEFuaW1hdGVcbiAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgIHRyYW5zaXRpb25OYW1lPVwiZmFkZVwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICB0b3A6IGAke1REX0hFSUdIVFtzaXplIHx8IFwic21hbGxcIl19cHhgLFxuICAgICAgICAgICAgekluZGV4OiBcImNhbGModmFyKC0tei1pbmRleC1hZmZpeCkgKyAyKVwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7bG9hZGluZyAmJlxuICAgICAgICAgICAgKGhlYWRlckFmZml4ZWQgPyAoXG4gICAgICAgICAgICAgIDxBZmZpeFxuICAgICAgICAgICAgICAgIG9mZnNldFRvcD17XG4gICAgICAgICAgICAgICAgICAoaGVhZGVyQWZmaXhlZE9mZnNldFRvcCB8fCAwKSArIFREX0hFSUdIVFtzaXplIHx8IFwic21hbGxcIl1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZ2V0Q29udGFpbmVyPXsoKSA9PiB0aGlzLndyYXBwZXJ9XG4gICAgICAgICAgICAgICAgZ2V0VGFyZ2V0PXtoZWFkZXJBZmZpeEdldFRhcmdldH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcHJvZ3Jlc3NgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGkgLz5cbiAgICAgICAgICAgICAgICA8aSAvPlxuICAgICAgICAgICAgICA8L0FmZml4PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcHJvZ3Jlc3NgfT5cbiAgICAgICAgICAgICAgICA8aSAvPlxuICAgICAgICAgICAgICAgIDxpIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvQW5pbWF0ZT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LXRhYmxlc2AsIHtcbiAgICAgICAgICAgIFtgJHtwcmVmaXh9LWlubmVyU2Nyb2xsYF06ICEhaGVpZ2h0LFxuICAgICAgICAgICAgW2Ake3ByZWZpeH0tb3ZlcmZsb3dlZGBdOiBpc01haW5UYWJsZU92ZXJmbG93WSxcbiAgICAgICAgICAgIFtgJHtwcmVmaXh9LWhhc0ZpeGVkUmlnaHRDb2x1bW5zYF06IHRoaXMuY29sdW1uTWFuYWdlci5pc0FueUNvbHVtbnNSaWdodEZpeGVkKCksXG4gICAgICAgICAgfSl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIG1heEhlaWdodDogaGVpZ2h0IHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IGhlaWdodFxuICAgICAgICAgICAgICA/IGAke1REX0hFSUdIVFtzaXplIHx8IFwic21hbGxcIl0gKiBnZXRHcm91cENvbHVtbnNEZXB0aCgpfXB4YFxuICAgICAgICAgICAgICA6IFwiXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1tYWluVGFibGVgfVxuICAgICAgICAgICAgcmVmPXt0aGlzLnNhdmVSZWYoXCJtYWluVGFibGVcIil9XG4gICAgICAgICAgICByb2xlPVwidGFibGVcIlxuICAgICAgICAgICAgb25TY3JvbGw9e3RoaXMuaGFuZGxlTWFpblRhYmxlU2Nyb2xsfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0aGlzLmdlbmVyYXRlVGFibGUoKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtlbXB0eSAmJiA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1wbGFjZWhvbGRlcmB9PntlbXB0eVRleHR9PC9kaXY+fVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlXG4iXX0=