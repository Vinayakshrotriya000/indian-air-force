import { Aircraft, AircraftCategory, ServiceStatus } from '../types/aircraft';

export type SortOption =
  | 'name-asc'
  | 'name-desc'
  | 'fleet-desc'
  | 'fleet-asc'
  | 'year-desc'
  | 'year-asc'
  | 'category';

export interface FilterOptions {
  searchQuery?: string;
  category?: AircraftCategory | 'All';
  serviceStatus?: ServiceStatus | 'All';
  isDomesticOnly?: boolean;
}

export interface InventoryMetrics {
  totalTypesListed: number;
  totalCategories: number;
  domesticCount: number;
  foreignCount: number;
  domesticPercentage: number;
  documentedQuantityCount: number;
  uncertainQuantityCount: number;
  categoryDistribution: { category: AircraftCategory; count: number }[];
  statusDistribution: { status: ServiceStatus; count: number }[];
  estimatedTotalAirframes: {
    min: number;
    max: number;
    displayText: string;
  };
}

/**
 * Filter aircraft by search text, category, service status, and domestic origin.
 */
export function filterAircraft(
  aircraftList: Aircraft[],
  filters: FilterOptions
): Aircraft[] {
  const query = (filters.searchQuery || '').trim().toLowerCase();

  return aircraftList.filter((plane) => {
    // 1. Search Query match
    if (query) {
      const matchName = plane.name.toLowerCase().includes(query);
      const matchDesignation = plane.designation.toLowerCase().includes(query);
      const matchManufacturer = plane.manufacturer.toLowerCase().includes(query);
      const matchCategory = plane.category.toLowerCase().includes(query);
      const matchCountry = plane.countryOfOrigin.toLowerCase().includes(query);
      const matchRole = plane.primaryRole.toLowerCase().includes(query);
      const matchSecondaryRole = plane.secondaryRoles.some((r) =>
        r.toLowerCase().includes(query)
      );

      if (
        !matchName &&
        !matchDesignation &&
        !matchManufacturer &&
        !matchCategory &&
        !matchCountry &&
        !matchRole &&
        !matchSecondaryRole
      ) {
        return false;
      }
    }

    // 2. Category match
    if (filters.category && filters.category !== 'All') {
      if (plane.category !== filters.category) {
        return false;
      }
    }

    // 3. Service Status match
    if (filters.serviceStatus && filters.serviceStatus !== 'All') {
      if (plane.fleet.status !== filters.serviceStatus) {
        return false;
      }
    }

    // 4. Domestic origin match
    if (filters.isDomesticOnly) {
      if (!plane.isDomestic) {
        return false;
      }
    }

    return true;
  });
}

/**
 * Sort aircraft by specified criteria.
 */
export function sortAircraft(
  aircraftList: Aircraft[],
  sortBy: SortOption
): Aircraft[] {
  const copy = [...aircraftList];

  switch (sortBy) {
    case 'name-asc':
      return copy.sort((a, b) => a.name.localeCompare(b.name));
    case 'name-desc':
      return copy.sort((a, b) => b.name.localeCompare(a.name));
    case 'fleet-desc':
      return copy.sort((a, b) => b.fleet.numericSortValue - a.fleet.numericSortValue);
    case 'fleet-asc':
      return copy.sort((a, b) => a.fleet.numericSortValue - b.fleet.numericSortValue);
    case 'year-desc':
      return copy.sort((a, b) => b.specs.serviceEntryYear - a.specs.serviceEntryYear);
    case 'year-asc':
      return copy.sort((a, b) => a.specs.serviceEntryYear - b.specs.serviceEntryYear);
    case 'category':
      return copy.sort((a, b) => a.category.localeCompare(b.category));
    default:
      return copy;
  }
}

/**
 * Compute inventory dashboard metrics based on available data.
 * Adheres strictly to the requirement: distinguish types listed,
 * domestic ratio, and avoid presenting estimates as verified exact counts.
 */
export function calculateFleetMetrics(aircraftList: Aircraft[]): InventoryMetrics {
  const totalTypesListed = aircraftList.length;

  const categories = new Set<AircraftCategory>();
  let domesticCount = 0;
  let documentedQuantityCount = 0;
  let uncertainQuantityCount = 0;

  const categoryMap = new Map<AircraftCategory, number>();
  const statusMap = new Map<ServiceStatus, number>();

  for (const plane of aircraftList) {
    categories.add(plane.category);

    if (plane.isDomestic) {
      domesticCount++;
    }

    if (plane.fleet.confidence === 'High' || plane.fleet.confidence === 'Medium') {
      documentedQuantityCount++;
    } else {
      uncertainQuantityCount++;
    }

    // Category count
    categoryMap.set(plane.category, (categoryMap.get(plane.category) || 0) + 1);

    // Status count
    statusMap.set(plane.fleet.status, (statusMap.get(plane.fleet.status) || 0) + 1);
  }

  const domesticPercentage =
    totalTypesListed > 0 ? Math.round((domesticCount / totalTypesListed) * 100) : 0;

  const categoryDistribution = Array.from(categoryMap.entries()).map(
    ([category, count]) => ({ category, count })
  );

  const statusDistribution = Array.from(statusMap.entries()).map(
    ([status, count]) => ({ status, count })
  );

  return {
    totalTypesListed,
    totalCategories: categories.size,
    domesticCount,
    foreignCount: totalTypesListed - domesticCount,
    domesticPercentage,
    documentedQuantityCount,
    uncertainQuantityCount,
    categoryDistribution,
    statusDistribution,
    estimatedTotalAirframes: {
      min: 1720,
      max: 1940,
      displayText: 'Approx. 1,720–1,940',
    },
  };
}
