import test from 'node:test';
import assert from 'node:assert/strict';
import { filterAircraft, sortAircraft, calculateFleetMetrics } from './inventoryLogic';
import { AIRCRAFT_INVENTORY } from '../data/aircraftData';

test('inventory dataset contains exactly 30 listed aircraft types or variants', () => {
  assert.equal(AIRCRAFT_INVENTORY.length, 30);
});

test('every aircraft in dataset has required fields populated', () => {
  for (const aircraft of AIRCRAFT_INVENTORY) {
    assert.ok(aircraft.id, 'Aircraft has ID');
    assert.ok(aircraft.name, 'Aircraft has name');
    assert.ok(aircraft.category, 'Aircraft has category');
    assert.ok(aircraft.manufacturer, 'Aircraft has manufacturer');
    assert.ok(aircraft.countryOfOrigin, 'Aircraft has country of origin');
    assert.ok(aircraft.primaryRole, 'Aircraft has primary role');
    assert.ok(aircraft.imageUrl, 'Aircraft has image URL');
    assert.ok(aircraft.specs.length, 'Aircraft has length in specs');
    assert.ok(aircraft.cost.unitCostFormatted, 'Aircraft has cost formatted');
    assert.ok(aircraft.fleet.estimatedQuantity, 'Aircraft has fleet estimate');
    assert.ok(aircraft.fleet.status, 'Aircraft has service status');
    assert.ok(aircraft.keyCapabilities.length > 0, 'Aircraft has capabilities list');
    assert.ok(aircraft.weaponsAndEquipment.length > 0, 'Aircraft has weapons list');
    assert.ok(aircraft.sources.length > 0, 'Aircraft has sources list');
  }
});

test('filterAircraft filters by search query on name, manufacturer, and country', () => {
  const rafaleResults = filterAircraft(AIRCRAFT_INVENTORY, { searchQuery: 'Rafale' });
  assert.equal(rafaleResults.length, 1);
  assert.equal(rafaleResults[0].id, 'dassault-rafale');

  const suResults = filterAircraft(AIRCRAFT_INVENTORY, { searchQuery: 'Sukhoi' });
  assert.ok(suResults.length >= 2); // Su-30MKI and Su-30MKI Trainer

  const halResults = filterAircraft(AIRCRAFT_INVENTORY, { searchQuery: 'Hindustan' });
  assert.ok(halResults.length >= 7);
});

test('filterAircraft filters by category accurately', () => {
  const fighters = filterAircraft(AIRCRAFT_INVENTORY, { category: 'Fighter Jets and Combat Aircraft' });
  assert.equal(fighters.length, 6);

  const transports = filterAircraft(AIRCRAFT_INVENTORY, { category: 'Transport Aircraft' });
  assert.equal(transports.length, 7);

  const helicopters = filterAircraft(AIRCRAFT_INVENTORY, { category: 'Helicopters' });
  assert.equal(helicopters.length, 7);

  const trainers = filterAircraft(AIRCRAFT_INVENTORY, { category: 'Training Aircraft' });
  assert.equal(trainers.length, 7);

  const surveillance = filterAircraft(AIRCRAFT_INVENTORY, { category: 'Surveillance and Special-Mission Aircraft' });
  assert.equal(surveillance.length, 2);

  const refuelling = filterAircraft(AIRCRAFT_INVENTORY, { category: 'Aerial Refuelling Aircraft' });
  assert.equal(refuelling.length, 1);
});

test('filterAircraft filters by service status and domestic flag', () => {
  const phasedRetirement = filterAircraft(AIRCRAFT_INVENTORY, { serviceStatus: 'In phased retirement' });
  assert.ok(phasedRetirement.length > 0);
  assert.ok(phasedRetirement.some(a => a.id === 'sepecat-jaguar'));

  const domesticOnly = filterAircraft(AIRCRAFT_INVENTORY, { isDomesticOnly: true });
  assert.ok(domesticOnly.length > 0);
  for (const p of domesticOnly) {
    assert.equal(p.isDomestic, true);
  }
});

test('sortAircraft sorts accurately by fleet size, name, and service year', () => {
  const sortedByFleet = sortAircraft(AIRCRAFT_INVENTORY, 'fleet-desc');
  assert.ok(sortedByFleet[0].fleet.numericSortValue >= sortedByFleet[1].fleet.numericSortValue);

  const sortedByName = sortAircraft(AIRCRAFT_INVENTORY, 'name-asc');
  assert.ok(sortedByName[0].name.localeCompare(sortedByName[1].name) <= 0);

  const sortedByYear = sortAircraft(AIRCRAFT_INVENTORY, 'year-asc');
  assert.ok(sortedByYear[0].specs.serviceEntryYear <= sortedByYear[1].specs.serviceEntryYear);
});

test('calculateFleetMetrics calculates expected inventory dashboard aggregates', () => {
  const metrics = calculateFleetMetrics(AIRCRAFT_INVENTORY);
  assert.equal(metrics.totalTypesListed, 30);
  assert.equal(metrics.totalCategories, 6);
  assert.ok(metrics.domesticCount > 0);
  assert.ok(metrics.foreignCount > 0);
  assert.equal(metrics.domesticCount + metrics.foreignCount, 30);
  assert.ok(metrics.domesticPercentage > 0 && metrics.domesticPercentage <= 100);
  assert.equal(metrics.categoryDistribution.length, 6);
});
