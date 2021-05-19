import { IPublicationItem } from "./publicationItem";

export interface IPublication {
    id: number;
    originalTitle: string;
    localTitle: string;
    isVerified: boolean;
    countryCode: string;
    barcode: string;
    caseTypeName: string;
    conditionClassName: string;
    hasSlipCover: boolean;
    gasHologram: boolean;
    isRental: boolean;
    notes: string;
    hasTwoSidedCover: boolean;
    hasBooklet: boolean;
    publicationItems: IPublicationItem[];
}