import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import { ConditionClassEnum } from '../../enums/conditionClassEnum';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMehBlank } from '@fortawesome/free-solid-svg-icons';

export interface ConditionIconProps {
    conditionClass: number;
}



export const ConditionIcon = (props: ConditionIconProps) => {
 
    const getIcon = (conditionClass: number) =>  {
        if (conditionClass === ConditionClassEnum.Excellent || 
            conditionClass === ConditionClassEnum.Good ||
            conditionClass === ConditionClassEnum.New) return <SentimentVerySatisfiedIcon />;

        if (conditionClass === ConditionClassEnum.Fair) return <SentimentSatisfiedIcon />;

        if (conditionClass === ConditionClassEnum.Poor) return <SentimentDissatisfiedIcon />;

        if (conditionClass === ConditionClassEnum.Bad) return <SentimentVeryDissatisfiedIcon />;

        return <FontAwesomeIcon icon={faMehBlank}/>;
    }

    const icon = getIcon(props.conditionClass);

    return (
        <>
            Condition: {icon}
        </>
    );
}