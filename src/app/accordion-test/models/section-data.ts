export class SectionData
{
    sectionName: string;
    industrials: number;
    realEstate: number;
    informationTechnology: number;
    communicationServices: number;
    healthCare: number;
    materials: number;
    utilities: number;
    consumerStaples: number;
    consumerDiscretionary: number;
    financials: number;
    energy: number;
}

export const DATA: SectionData[] = 
[
    {
		sectionName: 'Real Time Performance',
        industrials: 1.11,
        realEstate: 0.75,
        informationTechnology: 0.28,
        communicationServices: 0.14,
        healthCare: 0.14,
        materials: 0.11,
        utilities: 0.02,
        consumerStaples: -0.04,
        consumerDiscretionary: -0.05,
        financials: -0.24,
        energy: -0.53
    },
    {
		sectionName: '1 Day Performance',
        industrials: 1.11,
        realEstate: 0.75,
        informationTechnology: 0.28,
        communicationServices: 0.14,
        healthCare: 0.14,
        materials: 0.11,
        utilities: 0.02,
        consumerStaples: -0.04,
        consumerDiscretionary: -0.05,
        financials: -0.24,
        energy: -0.53
    },
    {
		sectionName: '5 Day Performance',
        industrials: 2.63,
        financials: 2.61,
        informationTechnology: 2.02,
        communicationServices: 1.92,
        consumerDiscretionary: 1.38,
        consumerStaples: 1.24,
        materials: 0.82,
        energy: -0.36,
        utilities: -1.09,
        realEstate: -2.69,
        healthCare: -5.32
    },
    {
		sectionName: '1 Month Performance',
        consumerDiscretionary: 7.92,
        informationTechnology: 6.53,
        industrials: 5.67,
        communicationServices: 4.67,
        materials: 4.22,
        consumerStaples: 3.21,
        financials: 2.51,
        energy: 2.48,
        realEstate: -0.12,
        utilities: -1.61,
        healthCare: -6.74
    }
];