import { useQuery } from 'react-query';
import { AxiosResponse, AxiosError } from 'axios';
import fetchBooks from '../helpers/fetchBooks';

interface Query {
	isLoading: boolean;
	isFetching: boolean;
	data: AxiosResponse;
	isError: boolean;
	error: AxiosError;
	refetch: any;
}

const useBookListData = (
	onError: (data: AxiosError) => void,
	onSuccess: (data: AxiosResponse) => void,
) => {
	return useQuery('book-list', fetchBooks, {
		enabled: false,
		onError,
		onSuccess,
		select: (data) => {
			return data.data;
		},
	}) as Query;
};

export default useBookListData;
