// data.ts
import { Ressource } from './types';

export async function RessourceData(): Promise<Ressource[]> {
    try {
        const response = await fetch('http://localhost:45490/api/Ressources');

        if (!response.ok) {
            console.error('Failed to fetch data. Status:', response.status);
            return [];
        }

        const apiData = await response.json();

        const transformedData: Ressource[] = apiData.map((apiRessource: Ressource) => {
            console.log('Mapping API :', apiRessource); 
            return {
                RssId: apiRessource.RssId,
                Occupation: apiRessource.Occupation,
            };
        });

        console.log('Transformed Data:', transformedData); // Log the transformed data

        return transformedData || [];
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
