import '../../node_modules/flag-icon-css/css/flag-icon.css';

export interface IFlagIconProps {
    countryCode: string;
}

const getCountryCodes = (countryCode: string): string[] => {
    switch(countryCode.toLowerCase()) {
        case 'nordic': return ['fi', 'se', 'no', 'dk'];
        case 'finland': return ['fi'];
        case 'sweden': return ['se'];
        case 'denmark': return ['dk'];
        case 'norway': return ['no'];
        case 'germany': return ['de'];
        case 'canada': return ['ca'];
        case 'netherlands': return ['nl'];
        case 'portugal': return ['pt'];
        case 'south africa': return ['za'];
        case 'spain': return ['es'];
        case 'united states': return ['us'];
        case 'united kingdom': return ['gb'];
        default: return [];
    }
}

export const FlagIcon = (props: IFlagIconProps) => {
    const countryCodes = getCountryCodes(props.countryCode);

    const icons = countryCodes.map(cc => {
        const classNames = `flag-icon flag-icon-${cc}`;
        return <span className={classNames} key={cc} />;
    });

    return <>{icons}</>;
}