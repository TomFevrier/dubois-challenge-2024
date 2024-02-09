import { formatLocale } from 'd3-format';
import { greatest } from 'd3-array';
import { geoArea } from 'd3-geo';
import polylabel from 'polylabel';


export const findPolylabel = (feature) => {
	if (feature.geometry.type === 'Polygon'){
		return polylabel(feature.geometry.coordinates);
	}

	return polylabel(greatest(feature.geometry.coordinates, (d) => geoArea({ type: 'Polygon', coordinates: d })));
}


export const { format } = formatLocale({
	decimal: ',',
	thousands: '.',
	grouping: [3],
	currency: ['', '&nbsp;€'],
	percent: '&nbsp;%',
	nan: 'N/A'
});