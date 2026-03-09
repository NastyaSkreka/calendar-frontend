import axios from 'axios'
import type { IHoliday } from '../../types/holiday'

class HolidaysService {
	private BASE_URL = 'https://date.nager.at/api/v3'

	async getHolidays(year: number, countryCode: string): Promise<IHoliday[]> {
		const response = await axios.get(
			`${this.BASE_URL}/PublicHolidays/${year}/${countryCode}`,
		)
		return response.data
	}
}

export const holidaysService = new HolidaysService()
