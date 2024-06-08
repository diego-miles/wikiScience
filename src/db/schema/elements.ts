import { sqliteTable, text, integer, primaryKey} from 'drizzle-orm/sqlite-core';
import {  unique,   foreignKey } from 'drizzle-orm/sqlite-core';


export const chemical_element = sqliteTable("chemical_element", {
	slug: text("slug").primaryKey(),
	name: text("name"),
	symbol: text("symbol"),
	atomic_number: text("atomic_number"),
	atomic_weight: text("atomic_weight"),
	description: text("description"),
	discovery_year: text("discovery_year"),
	melting_point: text("melting_point"),
	boiling_point: text("boiling_point"),
	density: text("density"),
	appearance: text("appearance"),
	classification: text("classification"),
	classification_description: text("classification_description"),
	atomicStructure_electrons: text("atomicStructure_electrons"),
	atomicStructure_protons: text("atomicStructure_protons"),
	atomicStructure_neutrons: text("atomicStructure_neutrons"),
	atomicStructure_ionization_energy: text("atomicStructure_ionization_energy"),
	atomicStructure_electron_affinity: text("atomicStructure_electron_affinity"),
	atomicStructure_atomic_radius: text("atomicStructure_atomic_radius"),
	atomicStructure_electronegativity: text("atomicStructure_electronegativity"),
	atomicStructure_first_ionization_potential: text("atomicStructure_first_ionization_potential"),
	crystal_structures: text("crystal_structures"),
	compounds: text("compounds"),
	allotrops: text("allotrops"),
	electron_configuration: text("electron_configuration"),
	electron_configuration_description: text("electron_configuration_description"),
	oxidation_state: text("oxidation_state"),
	oxidation_state_description: text("oxidation_state_description"),
	physical_properties_melting_point: text("physical_properties_melting_point"),
	physical_properties_boiling_point: text("physical_properties_boiling_point"),
	physical_properties_density: text("physical_properties_density"),
	physical_properties_atomic_radius: text("physical_properties_atomic_radius"),
	physical_properties_atomic_volume: text("physical_properties_atomic_volume"),
	physical_properties_covalent_radius: text("physical_properties_covalent_radius"),
	physical_properties_molar_heat: text("physical_properties_molar_heat"),
	physical_properties_thermal_conductivity: text("physical_properties_thermal_conductivity"),
	physical_properties_sound_velocity: text("physical_properties_sound_velocity"),
	physical_properties_mohs_hardness: text("physical_properties_mohs_hardness"),
	physical_properties_brinell_hardness: text("physical_properties_brinell_hardness"),
	physical_properties_specific_heat_capacity: text("physical_properties_specific_heat_capacity"),
	physical_properties_thermal_expansion_coefficient: text("physical_properties_thermal_expansion_coefficient"),
	physical_properties_phase_transition_temperatures: text("physical_properties_phase_transition_temperatures"),
	chemical_properties_reactivity: text("chemical_properties_reactivity"),
	chemical_properties_common_oxidation_states: text("chemical_properties_common_oxidation_states"),
	chemical_properties_standard_reduction_potential: text("chemical_properties_standard_reduction_potential"),
	chemical_properties_description: text("chemical_properties_description"),
	environmental_safety_health_hazards: text("environmental_safety_health_hazards"),
	environmental_safety_safety_precautions: text("environmental_safety_safety_precautions"),
	spectral_lines: text("spectral_lines"),
	natural_occurrence_occurrence_type: text("natural_occurrence_occurrence_type"),
	natural_occurrence_description: text("natural_occurrence_description"),
	biological_role_role: text("biological_role_role"),
	biological_role_description: text("biological_role_description"),
	economic_data_market_price: text("economic_data_market_price"),
	economic_data_producing_countries: text("economic_data_producing_countries"),
	economic_data_industrial_use: text("economic_data_industrial_use"),
	economic_data_description: text("economic_data_description"),
	external_resources: text("external_resources"),
	future_predictions: text("future_predictions"),
	health_environmental_impact_health_impact: text("health_environmental_impact_health_impact"),
	health_environmental_impact_environmental_impact: text("health_environmental_impact_environmental_impact"),
	magnetic_electrical_properties_magnetic_susceptibility: text("magnetic_electrical_properties_magnetic_susceptibility"),
	magnetic_electrical_properties_electrical_resistivity: text("magnetic_electrical_properties_electrical_resistivity"),
	magnetic_electrical_properties_hall_coefficient: text("magnetic_electrical_properties_hall_coefficient"),
	optical_properties_refractive_index: text("optical_properties_refractive_index"),
	optical_properties_reflectivity: text("optical_properties_reflectivity"),
	optical_properties_absorption_spectrum: text("optical_properties_absorption_spectrum"),
	quantum_properties_quantum_numbers: text("quantum_properties_quantum_numbers"),
	quantum_properties_electron_shell_model: text("quantum_properties_electron_shell_model"),
	quantum_properties_energy_levels: text("quantum_properties_energy_levels"),
	synthesis_production_synthesis_methods: text("synthesis_production_synthesis_methods"),
	synthesis_production_extraction_methods: text("synthesis_production_extraction_methods"),
	synthesis_production_global_production: text("synthesis_production_global_production"),
	safety_data_sheet_handling: text("safety_data_sheet_handling"),
	safety_data_sheet_storage: text("safety_data_sheet_storage"),
	safety_data_sheet_first_aid_measures: text("safety_data_sheet_first_aid_measures"),
	legal_status_regulations: text("legal_status_regulations"),
	legal_status_legal_restrictions: text("legal_status_legal_restrictions"),
	interdisciplinary_connections: text("interdisciplinary_connections"),
	practical_applications: text("practical_applications"),
	isotopes: text("isotopes"),
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
export const citations = sqliteTable("citations", {
	word: text("word").primaryKey(),
	slug: text("slug"),
	etymology: text("etymology"),
	pronunciation: text("pronunciation"),
	definitions: text("definitions"),
	synonyms: text("synonyms"),
	antonyms: text("antonyms"),
	examples: text("examples"),
	images: text("images"),
	audio: text("audio"),
	language: text("language"),
	tags: text("tags"),
	relatedConcepts: text("relatedConcepts"),
	applications: text("applications"),
	measurementUnits: text("measurementUnits"),
	historicalSignificance: text("historicalSignificance"),
	created_at: text("created_at").default("sql`(CURRENT_TIMESTAMP)`"),
	updated_at: text("updated_at").default("sql`(CURRENT_TIMESTAMP)`"),
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
