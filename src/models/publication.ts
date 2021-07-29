import { PublicationItem } from "./publicationItem";

export interface Publication {
    id: number;
    originalTitle: string;
    localTitle: string;
    isVerified: boolean;
    countryCode: string;
    barcode: string;
    caseTypeName: string;
    conditionClassName: string;
    conditionClassId: number;
    hasSlipCover: boolean;
    hasHologram: boolean;
    isRental: boolean;
    notes: string;
    hasTwoSidedCover: boolean;
    hasBooklet: boolean;
    publicationItems: PublicationItem[];
}