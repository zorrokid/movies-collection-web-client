import styled from "styled-components";

export interface IIconProps {
    disabled?: boolean;
    icon: string;
    infoText: string;
}

const IconContainer = styled.div`
`;

export const Icon = (props: IIconProps) => {
    return <IconContainer>{props.infoText}: {props.disabled ? "No" : "Yes"}</IconContainer>;
}