export async function getData(endpoint) {
    try {
        const baseUrl = `http://localhost:3000`;
        const response = await fetch(`${baseUrl}/${endpoint}`, {
            cache: 'no-store',
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return { error: 'Error fetching data' };
    }
}
