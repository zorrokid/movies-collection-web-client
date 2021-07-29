import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import { ConditionClassEnum } from '../../enums/conditionClassEnum';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMehBlank } from '@fortawesome/free-solid-svg-icons';

export interface ConditionIconProps {
    conditionClassId: number;
}



export const ConditionIcon = (props: ConditionIconProps)  => {

    const getIconData = (conditionClassId: number): [string, any] =>  {
        if (conditionClassId === ConditionClassEnum.Excellent || 
            conditionClassId === ConditionClassEnum.Good ||
            conditionClassId === ConditionClassEnum.New) return ['green', <SentimentVerySatisfiedIcon color="inherit" />];

        if (conditionClassId === ConditionClassEnum.Fair) return ['yellow', <SentimentSatisfiedIcon color="inherit" />];

        if (conditionClassId === ConditionClassEnum.Poor) return ['red', <SentimentDissatisfiedIcon />];

        if (conditionClassId === ConditionClassEnum.Bad) return ['red', <SentimentVeryDissatisfiedIcon />];

        return ['disabled', <FontAwesomeIcon icon={faMehBlank}/>];
    }

    const iconData = getIconData(props.conditionClassId);
    return <div style={{color: iconData[0]}}>{iconData[1]}</div>;
}