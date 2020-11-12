import * as React from "react";
export interface OptionProps {
    [key: string]: any;
    key?: React.ReactText;
    disabled?: boolean;
    value: React.ReactText;
    title?: string;
    className?: string;
    style?: React.CSSProperties;
    label?: React.ReactNode;
    /** @deprecated Only works when use `children` as option data */
    children: React.ReactNode;
}
export interface OptionFC extends React.FC<OptionProps> {
    /** Legacy for check if is a Option Group */
    isSelectOption: boolean;
}
/**
 * Select.Option
 */
declare const Option: OptionFC;
export default Option;
