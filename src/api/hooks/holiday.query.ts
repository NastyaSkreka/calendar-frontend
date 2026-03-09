import { useQuery } from "@tanstack/react-query";
import { holidaysService } from "../services/holiday.service";
import { queryKeys } from "./config/query-keys";

export const useHolidays = (year: number, countryCode: string = 'UA') => {
  return useQuery({
    queryKey: [queryKeys.holidays , year, countryCode],
    queryFn: () => holidaysService.getHolidays(year, countryCode),
    staleTime: 1000 * 60 * 60 * 24,
  });
};