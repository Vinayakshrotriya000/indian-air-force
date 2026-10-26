export type AircraftCategory =
  | 'Fighter Jets and Combat Aircraft'
  | 'Transport Aircraft'
  | 'Helicopters'
  | 'Training Aircraft'
  | 'Surveillance and Special-Mission Aircraft'
  | 'Aerial Refuelling Aircraft';

export type ServiceStatus =
  | 'In service'
  | 'In phased retirement'
  | 'Ordered'
  | 'Deliveries underway'
  | 'Retired'
  | 'Status not publicly confirmed';

export type ConfidenceLevel = 'High' | 'Medium' | 'Low';

export interface TechnicalSpecs {
  aircraftType: string;
  length: string;
  wingspanOrRotorDiameter: string;
  height: string;
  maxTakeoffWeight: string;
  maxSpeed: string;
  cruiseSpeed?: string;
  ferryRange: string;
  combatRadiusOrOperationalRange?: string;
  serviceCeiling: string;
  engineModel: string;
  engineCount: number;
  crew: string;
  payloadCapacity?: string;
  passengerCapacity?: string;
  hoverPerformance?: string; // For helicopters: hover in ground effect (HIGE) / out of ground effect (HOGE)
  radarAndAvionics: string;
  serviceEntryYear: number;
}

export interface CostEstimate {
  unitCostFormatted: string;
  originalCurrency: string;
  originalAmount: string;
  estimatedInr: string;
  costType: 'Flyaway Unit Cost' | 'Procurement Package' | 'Production Contract Amortized' | 'Not publicly confirmed';
  contractContext?: string;
  sourceAndDate: string;
  pricingExplanation: string;
}

export interface FleetData {
  estimatedQuantity: string;
  numericSortValue: number; // for sorting by fleet size
  confidence: ConfidenceLevel;
  reportingDate: string;
  source: string;
  status: ServiceStatus;
  notes: string;
  deliveredCount?: string;
  orderedCount?: string;
}

export interface SourceReference {
  title: string;
  organization: string;
  date: string;
  url?: string;
  note?: string;
}

export interface Aircraft {
  id: string;
  name: string;
  designation: string;
  category: AircraftCategory;
  manufacturer: string;
  countryOfOrigin: string;
  isDomestic: boolean; // Designed/manufactured in India (HAL, Tata, DRDO, etc.)
  primaryRole: string;
  secondaryRoles: string[];
  imageUrl: string;
  imageAttribution: string;
  imageAlt: string;
  specs: TechnicalSpecs;
  cost: CostEstimate;
  fleet: FleetData;
  keyCapabilities: string[];
  weaponsAndEquipment: string[];
  sources: SourceReference[];
}
