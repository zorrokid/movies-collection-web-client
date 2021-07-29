import '../../node_modules/flag-icon-css/css/flag-icon.css';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
export interface IFlagIconProps {
    countryCodes: string[];
    isVerified: boolean;
}

const useStyles = makeStyles({
    disabled: {
        opacity: 0.2
    }
});
export const FlagIcon = (props: IFlagIconProps) => {

    const styles = useStyles();

    const icons = props.countryCodes.map(cc => {
        const disabledStyle = !props.isVerified ? styles.disabled : "";
        const classes = classNames("flag-icon", `flag-icon-${cc}`, disabledStyle);
        return <span className={classes} key={cc} />;
    });

    return <>{icons}</>;
}