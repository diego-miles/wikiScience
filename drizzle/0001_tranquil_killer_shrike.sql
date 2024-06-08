DROP TABLE `chemical_element_classification`;--> statement-breakpoint
DROP TABLE `element_allotrope`;--> statement-breakpoint
DROP TABLE `element_atomic_structure`;--> statement-breakpoint
DROP TABLE `element_biological_role`;--> statement-breakpoint
DROP TABLE `element_chemical_properties`;--> statement-breakpoint
DROP TABLE `element_compound`;--> statement-breakpoint
DROP TABLE `element_crystal_structure`;--> statement-breakpoint
DROP TABLE `element_economic_data`;--> statement-breakpoint
DROP TABLE `element_electron_configuration`;--> statement-breakpoint
DROP TABLE `element_environmental_safety`;--> statement-breakpoint
DROP TABLE `element_external_resource`;--> statement-breakpoint
DROP TABLE `element_future_prediction`;--> statement-breakpoint
DROP TABLE `element_health_environmental_impact`;--> statement-breakpoint
DROP TABLE `element_isotope`;--> statement-breakpoint
DROP TABLE `element_legal_status`;--> statement-breakpoint
DROP TABLE `element_magnetic_electrical_properties`;--> statement-breakpoint
DROP TABLE `element_natural_occurrence`;--> statement-breakpoint
DROP TABLE `element_optical_properties`;--> statement-breakpoint
DROP TABLE `element_oxidation_state`;--> statement-breakpoint
DROP TABLE `element_physical_properties`;--> statement-breakpoint
DROP TABLE `element_quantum_properties`;--> statement-breakpoint
DROP TABLE `element_safety_data_sheet`;--> statement-breakpoint
DROP TABLE `element_spectral_line`;--> statement-breakpoint
DROP TABLE `element_synthesis_production`;--> statement-breakpoint
DROP TABLE `element_user_interactions`;--> statement-breakpoint
DROP TABLE `history`;--> statement-breakpoint
DROP TABLE `image_gallery`;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `history_event` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `history_year` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `history_description` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `classification` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `classification_description` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `electrons` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `protons` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `neutrons` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `ionization_energy` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `electron_affinity` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `atomic_radius` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `atomic_polarization` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `electronegativity` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `first_ionization_potential` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `isotope_number` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `isotope_name` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `isotope_abundance` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `isotope_half_life` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `isotope_decay_mode` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `isotope_nuclear_properties` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `isotope_applications` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `isotope_source` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `isotope_other_details` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `compound_name` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `compound_formula` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `compound_description` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `crystal_structure_type` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `crystal_structure_temperature` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `crystal_structure_description` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `allotrope_name` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `allotrope_description` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `electron_configuration` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `electron_configuration_description` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `oxidation_state` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `oxidation_state_description` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `physical_properties_melting_point` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `physical_properties_boiling_point` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `physical_properties_density` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `physical_properties_atomic_radius` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `physical_properties_atomic_volume` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `physical_properties_covalent_radius` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `physical_properties_molar_heat` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `physical_properties_thermal_conductivity` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `physical_properties_sound_velocity` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `physical_properties_mohs_hardness` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `physical_properties_brinell_hardness` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `physical_properties_specific_heat_capacity` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `physical_properties_thermal_expansion_coefficient` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `physical_properties_phase_transition_temperatures` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `chemical_properties_reactivity` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `chemical_properties_common_oxidation_states` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `chemical_properties_standard_reduction_potential` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `chemical_properties_description` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `environmental_safety_health_hazards` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `environmental_safety_safety_precautions` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `image_gallery_image_url` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `image_gallery_description` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `spectral_line_wavelength` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `spectral_line_intensity` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `spectral_line_line_type` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `natural_occurrence_occurrence_type` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `natural_occurrence_description` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `biological_role_role` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `biological_role_description` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `economic_data_market_price` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `economic_data_producing_countries` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `economic_data_industrial_use` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `economic_data_description` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `user_interactions_contribution` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `user_interactions_question` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `user_interactions_discussion` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `external_resource_resource_type` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `external_resource_link` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `external_resource_description` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `future_prediction_prediction` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `future_prediction_description` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `health_environmental_impact_health_impact` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `health_environmental_impact_environmental_impact` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `magnetic_electrical_properties_magnetic_susceptibility` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `magnetic_electrical_properties_electrical_resistivity` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `magnetic_electrical_properties_hall_coefficient` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `optical_properties_refractive_index` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `optical_properties_reflectivity` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `optical_properties_absorption_spectrum` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `quantum_properties_quantum_numbers` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `quantum_properties_electron_shell_model` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `quantum_properties_energy_levels` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `synthesis_production_synthesis_methods` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `synthesis_production_extraction_methods` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `synthesis_production_global_production` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `safety_data_sheet_handling` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `safety_data_sheet_storage` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `safety_data_sheet_first_aid_measures` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `legal_status_regulations` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `legal_status_legal_restrictions` text;