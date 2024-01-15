// data.ts
import { History } from './types';

export async function HistoryData(): Promise<History[]> {
    try {
        const response = await fetch('http://localhost:45490/api/Historiques');

        if (!response.ok) {
            console.error('Failed to fetch data. Status:', response.status);
            return [];
        }

        const apiData = await response.json();

        const transformedData: History[] = apiData.map((apiHistory: History) => {
            console.log('Mapping API History:', apiHistory); // Log each API History before transformation
            return {
                HcId: apiHistory.HcId,
                RdvId: apiHistory.RdvId,
                Descr: apiHistory.Descr
            };
        });

        console.log('Transformed Data:', transformedData); // Log the transformed data

        return transformedData || [];
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
