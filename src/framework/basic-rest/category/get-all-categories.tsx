import { CategoriesQueryOptionsType } from '@framework/types';
import http from '@framework/utils/http';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useQuery } from 'react-query';

export const fetchCategories = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  const response = await http.get(API_ENDPOINTS.CATEGORIES);
  return { collections: { data: response?.data?.collections } };
};

export const useCategoriesQuery = (options: CategoriesQueryOptionsType) => {
  return useQuery<{ collections: { data: any } }, Error>([API_ENDPOINTS.CATEGORIES, options], fetchCategories);
};