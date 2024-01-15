// data.ts
import { GestHor } from './types';

export async function GestHorData(): Promise<GestHor[]> {
    try {
        const response = await fetch('http://localhost:45490/api/GestionHoraires');

        if (!response.ok) {
            console.error('Failed to fetch data. Status:', response.status);
            return [];
        }

        const apiData = await response.json();

        const transformedData: GestHor[] = apiData.map((apiGestHor: GestHor) => {
            console.log('Mapping API GestHor:', apiGestHor); // Log each API GestHor before transformation
            return {
                GdhId: apiGestHor.GdhId,
                RssId: apiGestHor.RssId,
                Heurdt: apiGestHor.Heurdt,
            };
        });

        console.log('Transformed Data:', transformedData); // Log the transformed data

        return transformedData || [];
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
