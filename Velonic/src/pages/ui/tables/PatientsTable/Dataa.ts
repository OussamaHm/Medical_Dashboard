// data.ts
import { User } from './typees';

export async function PatData(): Promise<User[]> {
    try {
        const response = await fetch('http://localhost:45490/api/Patients');

        if (!response.ok) {
            console.error('Failed to fetch data. Status:', response.status);
            return [];
        }

        const apiData = await response.json();

        const transformedData: User[] = apiData.map((apiUser: User) => {
            console.log('Mapping API User:', apiUser); // Log each API user before transformation
            return {
                PatId: apiUser.PatId,
                Nom: apiUser.Nom,
                History: apiUser.History,
                Adress: apiUser.Adress,
            };
        });

        console.log('Transformed Data:', transformedData); // Log the transformed data

        return transformedData || [];
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
