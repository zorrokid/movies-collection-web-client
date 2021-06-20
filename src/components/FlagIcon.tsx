import '../../node_modules/flag-icon-css/css/flag-icon.css';

export interface IFlagIconProps {
    countryCode: string;
}

export const FlagIcon = (props: IFlagIconProps) => {
    const countryCode = props.countryCode.substr(-2);
    const styleClasses = `flag-icon flag-icon-${countryCode}`;
    return <span className={styleClasses} />;
}