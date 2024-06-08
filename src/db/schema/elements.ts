import { sqliteTable, text, integer, primaryKey} from 'drizzle-orm/sqlite-core';
import {  unique,   foreignKey } from 'drizzle-orm/sqlite-core';


export const chemical_element = sqliteTable('chemical_element', {
  // Slug is the primary key, ensuring uniqueness and indexing
  slug: text('slug').primaryKey(), 
  name: text('name'),
  symbol: text('symbol').unique(),
  atomicNumber: text('atomic_number'),
  atomicWeight: text('atomic_weight'),
  description: text('description'),
  discoveryYear: text('discovery_year'),
  meltingPoint: text('melting_point'),
  boilingPoint: text('boiling_point'),
  density: text('density'),
  appearance: text('appearance'),
  classification: text('classification'),
  classification_description: text('classification_description'),


  atomicStructure_electrons: text('atomicStructure_electrons'),
  atomicStructure_protons: text('atomicStructure_protons'),
  atomicStructure_neutrons: text('atomicStructure_neutrons'),
  atomicStructure_ionizationEnergy: text('ionization_energy'),
  atomicStructure_electronAffinity: text('electron_affinity'),
  atomicStructure_atomicRadius: text('atomic_radius'),
  atomicStructure_atomicPolarization: text('atomicStructure_atomic_Polarization'),
  atomicStructure_electronegativity: text('electronegativity'),
  atomicStructure_firstIonizationPotential: text('first_ionization_potential'),

  // Crystal structure related fields
  crystalStructures: text('crystal_structures'), // Assuming this is stored as a JSON string

  history: text('history'), // Assuming this is stored as a JSON string
  isotops: text('isotops'), // Assuming this is stored as a JSON string
  compounds: text('compounds'), // Assuming this is stored as a JSON string
  allotrops: text('allotrops'), // Assuming this is stored as a JSON string
  practical_applications: text('practical_applications'), // Assuming this is stored as a JSON string

  // Electron configuration related fields
  electronConfiguration_configuration: text('electron_configuration'),
  electronConfiguration_description: text('electron_configuration_description'),

  oxidationState: text('oxidation_state'),
  oxidationState_description: text('oxidation_state_description'),

  // Physical properties 
  physicalProperties_meltingPoint: text('physical_properties_melting_point'),
  physicalProperties_boilingPoint: text('physical_properties_boiling_point'),
  physicalProperties_density: text('physical_properties_density'),
  physicalProperties_atomicRadius: text('physical_properties_atomic_radius'),
  physicalProperties_atomicVolume: text('physical_properties_atomic_volume'),
  physicalProperties_covalentRadius: text('physical_properties_covalent_radius'),
  physicalProperties_molarHeat: text('physical_properties_molar_heat'),
  physicalProperties_thermalConductivity: text('physical_properties_thermal_conductivity'),
  physicalProperties_soundVelocity: text('physical_properties_sound_velocity'),
  physicalProperties_mohsHardness: text('physical_properties_mohs_hardness'),
  physicalProperties_brinellHardness: text('physical_properties_brinell_hardness'),
  physicalProperties_specificHeatCapacity: text('physical_properties_specific_heat_capacity'),
  physicalProperties_thermalExpansionCoefficient: text('physical_properties_thermal_expansion_coefficient'),
  physicalProperties_phaseTransitionTemperatures: text('physical_properties_phase_transition_temperatures'),

  // Chemical properties 
  chemicalProperties_reactivity: text('chemical_properties_reactivity'),
  chemicalProperties_commonOxidationStates: text('chemical_properties_common_oxidation_states'),
  chemicalProperties_standardReductionPotential: text('chemical_properties_standard_reduction_potential'),
  chemicalProperties_description: text('chemical_properties_description'),

  // Environmental Safety
  environmentalSafety_healthHazards: text('environmental_safety_health_hazards'),
  environmentalSafety_safetyPrecautions: text('environmental_safety_safety_precautions'),

  spectralLines: text('spectral_lines'), // Assuming this is stored as a JSON string
  naturalOccurrence_occurrenceType: text('natural_occurrence_occurrence_type'),
  naturalOccurrence_description: text('natural_occurrence_description'),
  biologicalRole_role: text('biological_role_role'),
  biologicalRole_description: text('biological_role_description'),
  economicData_marketPrice: text('economic_data_market_price'),
  economicData_producingCountries: text('economic_data_producing_countries'),
  economicData_industrialUse: text('economic_data_industrial_use'),
  economicData_description: text('economic_data_description'),

  // External Resources and Future Predictions
  externalResources: text('external_resources'), // Assuming this is stored as a JSON string
  futurePredictions: text('future_predictions'), // Assuming this is stored as a JSON string

  // Health Environmental Impact
  healthEnvironmentalImpact_healthImpact: text('health_environmental_impact_health_impact'),
  healthEnvironmentalImpact_environmentalImpact: text('health_environmental_impact_environmental_impact'),

  // Magnetic Electrical Properties
  magneticElectricalProperties_magneticSusceptibility: text('magnetic_electrical_properties_magnetic_susceptibility'),
  magneticElectricalProperties_electricalResistivity: text('magnetic_electrical_properties_electrical_resistivity'),
  magneticElectricalProperties_hallCoefficient: text('magnetic_electrical_properties_hall_coefficient'),

  // Optical Properties
  opticalProperties_refractiveIndex: text('optical_properties_refractive_index'),
  opticalProperties_reflectivity: text('optical_properties_reflectivity'),
  opticalProperties_absorptionSpectrum: text('optical_properties_absorption_spectrum'),

  // Quantum Properties
  quantumProperties_quantumNumbers: text('quantum_properties_quantum_numbers'), // Assuming this is stored as a JSON string
  quantumProperties_electronShellModel: text('quantum_properties_electron_shell_model'), // Assuming this is stored as a JSON string
  quantumProperties_energyLevels: text('quantum_properties_energy_levels'), // Assuming this is stored as a JSON string

  // Synthesis Production
  synthesisProduction_synthesisMethods: text('synthesis_production_synthesis_methods'),
  synthesisProduction_extractionMethods: text('synthesis_production_extraction_methods'),
  synthesisProduction_globalProduction: text('synthesis_production_global_production'),
  // Safety Data Sheet
  safetyDataSheet_handling: text('safety_data_sheet_handling'),
  safetyDataSheet_storage: text('safety_data_sheet_storage'),
  safetyDataSheet_firstAidMeasures: text('safety_data_sheet_first_aid_measures'),

  // Legal Status
  legalStatus_regulations: text('legal_status_regulations'),
  legalStatus_legalRestrictions: text('legal_status_legal_restrictions'),

  // Interdisciplinary Connections
  interdisciplinaryConnections: text('interdisciplinary_connections')
});







// Definición de la tabla Event
  const events = sqliteTable('events', {
  id: text('id').primaryKey(),
  name: text('name').unique(),
  date: text('date'), // Usamos text para la fecha en formato ISO
  persons: text('persons'),
  description: text('description'),
  fields: text('fields'),
  eventParticipants: text('eventParticipants'),
  references: text('references'),
  createdAt: text('created_at').default('CURRENT_TIMESTAMP'),
  updatedAt: text('updated_at').default('CURRENT_TIMESTAMP')
});






 // Define the Word table
export const citations = sqliteTable('citations', {
  slug: text('slug').unique(),
  word: text('word').primaryKey(),
  etymology: text('etymology'),
  pronunciation: text('pronunciation'),
  definitions: text('definitions', { mode: 'json' }),
  synonyms: text('synonyms', { mode: 'json' }),
  antonyms: text('antonyms', { mode: 'json' }),
  examples: text('examples', { mode: 'json' }),
  images: text('images', { mode: 'json' }),
  audio: text('audio'),
  language: text('language'),
  tags: text('tags', { mode: 'json' }),
  relatedConcepts: text('relatedConcepts', { mode: 'json' }),
  applications: text('applications', { mode: 'json' }),
  measurementUnits: text('measurementUnits', { mode: 'json' }),
  historicalSignificance: text('historicalSignificance', { mode: 'json' }),
  createdAt: text('created_at').default('CURRENT_TIMESTAMP'),
  updatedAt: text('updated_at').default('CURRENT_TIMESTAMP')
});


 // Define the Word table
export const contextDefinition = sqliteTable('contextDefinition', {
  slug: text('slug').unique(),
  concept: text('concept').primaryKey(),
  formula: text('formula'),
  pronunciation: text('pronunciation'),
  definition: text('definition', { mode: 'json' }),
  references: text('references', { mode: 'json' }),
  types: text('types', { mode: 'json' }),
  createdAt: text('created_at').default('CURRENT_TIMESTAMP'),
  updatedAt: text('updated_at').default('CURRENT_TIMESTAMP')
});



// model ContextDefinition {
//   id          String    @id @map("_id") @db.ObjectId
//   concept     String    
//   formula     String?    
//   definition  String[]
//   references  String[]
//   types        ContextDefinitionType[]
//   slug        String    @unique
// }

// type ContextDefinitionType {
//   type        String?
//   description        String?
//   formula        String?
// }
