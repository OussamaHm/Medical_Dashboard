// data.ts
import { RendezV } from './types';

export async function RendezVData(): Promise<RendezV[]> {
    try {
        const response = await fetch('http://localhost:45490/api/RendezVs');

        if (!response.ok) {
            console.error('Failed to fetch data. Status:', response.status);
            return [];
        }

        const apiData = await response.json();

        const transformedData: RendezV[] = apiData.map((apiRendezV: RendezV) => {
            console.log('Mapping API RendezV:', apiRendezV); // Log each API RendezV before transformation
            return {
                RdvId: apiRendezV.RdvId,
                PatId: apiRendezV.PatId,
                DocId: apiRendezV.DocId,
                Daate: apiRendezV.Daate
            };
        });

        console.log('Transformed Data:', transformedData); // Log the transformed data

        return transformedData || [];
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
