import React from "react";
import PropTypes from "prop-types";
import "./style";
declare type ValueType = React.ReactText;
export interface ICheckboxGroupProps<T extends ValueType> {
    /**
     * 子节点
     */
    children?: React.ReactNode;
    /**
     * 附加类名
     */
    className?: string;
    /**
     * 默认已选中的值
     */
    defaultValue?: null | Array<T>;
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 选中态变化时的 handler
     */
    onChange?: null | ((value: Array<T>) => void);
    /**
     * 设置尺寸
     */
    size?: "mini" | "small" | "medium" | "large";
    /**
     * 已选中的值
     */
    value?: null | Array<T>;
}
/**
 * 勾选组
 */
declare function Group<T extends ValueType>({ children, className, defaultValue, disabled, onChange, size, value: valueProp, ...otherProps }: ICheckboxGroupProps<T>): JSX.Element;
declare namespace Group {
    var propTypes: {
        /**
         * 子节点
         */
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        /**
         * 附加类名
         */
        className: PropTypes.Requireable<string>;
        /**
         * 默认已选中的值
         */
        defaultValue: PropTypes.Requireable<any>;
        /**
         * 是否禁用
         */
        disabled: PropTypes.Requireable<boolean>;
        /**
         * 选中态变化时的 handler
         */
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 设置尺寸
         */
        size: PropTypes.Requireable<string>;
        /**
         * 已选中的值
         */
        value: PropTypes.Requireable<any>;
    };
    var defaultProps: {
        children: string;
        className: undefined;
        defaultValue: null;
        disabled: boolean;
        onChange: null;
        size: string;
        value: null;
    };
}
export default Group;
