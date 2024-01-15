// data.ts
import { DossMed } from './types';

export async function DossMedData(): Promise<DossMed[]> {
    try {
        const response = await fetch('http://localhost:45490/api/DossierMeds');
        
        if (!response.ok) {
            console.error('Failed to fetch data. Status:', response.status);
            return [];
        }

        const apiData = await response.json();

        const transformedData: DossMed[] = apiData.map((apiDossMed: DossMed) => {
            console.log('Mapping API DossMed:', apiDossMed); // Log each API DossMed before transformation
            return {
                DmId: apiDossMed.DmId,
                RdvId: apiDossMed.RdvId,
                Prescription: apiDossMed.Prescription,
                Resultat: apiDossMed.Resultat,
            };
        });

        console.log('Transformed Data:', transformedData); // Log the transformed data

        return transformedData || [];
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
