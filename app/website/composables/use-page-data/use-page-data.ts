export async function usePageData() {
    const response = await useFetch('https://jsonplaceholder.typicode.com/todos');
    return { result: response.data };
}
