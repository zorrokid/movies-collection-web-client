import '../../node_modules/flag-icon-css/css/flag-icon.css';

export interface IFlagIconProps {
    countryCodes: string[];
}

export const FlagIcon = (props: IFlagIconProps) => {

    const icons = props.countryCodes.map(cc => {
        const classNames = `flag-icon flag-icon-${cc}`;
        return <span className={classNames} key={cc} />;
    });

    return <>{icons}</>;
}