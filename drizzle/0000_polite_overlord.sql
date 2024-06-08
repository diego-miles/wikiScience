CREATE TABLE `chemical_element` (
	`symbol` text,
	`name` text,
	`slug` text PRIMARY KEY NOT NULL,
	`atomic_number` text,
	`atomic_weight` text,
	`description` text,
	`discovery_year` text,
	`melting_point` text,
	`boiling_point` text,
	`density` text,
	`appearance` text,
	`terminal_type` text,
	`interdisciplinary_connections` text
);
--> statement-breakpoint
CREATE TABLE `chemical_element_classification` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`classification` text,
	`description` text,
	`chemical_element_slug` text,
	FOREIGN KEY (`chemical_element_slug`) REFERENCES `chemical_element`(`slug`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `element_allotrope` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text,
	`description` text,
	`chemical_element_slug` text,
	FOREIGN KEY (`chemical_element_slug`) REFERENCES `chemical_element`(`slug`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `element_atomic_structure` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`electrons` text,
	`protons` text,
	`neutrons` text,
	`ionization_energy` text,
	`electron_affinity` text,
	`atomic_radius` text,
	`atomic_polarization` text,
	`electronegativity` text,
	`first_ionization_potential` text,
	`chemical_element_slug` text,
	FOREIGN KEY (`chemical_element_slug`) REFERENCES `chemical_element`(`slug`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `element_biological_role` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`role` text,
	`description` text,
	`chemical_element_slug` text,
	FOREIGN KEY (`chemical_element_slug`) REFERENCES `chemical_element`(`slug`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `element_chemical_properties` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`reactivity` text,
	`common_oxidation_states` text,
	`standard_reduction_potential` text,
	`description` text,
	`chemical_element_slug` text,
	FOREIGN KEY (`chemical_element_slug`) REFERENCES `chemical_element`(`slug`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `element_compound` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text,
	`formula` text,
	`description` text,
	`chemical_element_slug` text,
	FOREIGN KEY (`chemical_element_slug`) REFERENCES `chemical_element`(`slug`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `element_crystal_structure` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`type` text,
	`temperature` text,
	`description` text,
	`chemical_element_slug` text,
	FOREIGN KEY (`chemical_element_slug`) REFERENCES `chemical_element`(`slug`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `element_economic_data` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`market_price` text,
	`producing_countries` text,
	`industrial_use` text,
	`description` text,
	`chemical_element_slug` text,
	FOREIGN KEY (`chemical_element_slug`) REFERENCES `chemical_element`(`slug`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `element_electron_configuration` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`configuration` text,
	`description` text,
	`chemical_element_slug` text,
	FOREIGN KEY (`chemical_element_slug`) REFERENCES `chemical_element`(`slug`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `element_environmental_safety` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`health_hazards` text,
	`safety_precautions` text,
	`chemical_element_slug` text,
	FOREIGN KEY (`chemical_element_slug`) REFERENCES `chemical_element`(`slug`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `element_external_resource` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`resource_type` text,
	`link` text,
	`description` text,
	`chemical_element_slug` text,
	FOREIGN KEY (`chemical_element_slug`) REFERENCES `chemical_element`(`slug`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `element_future_prediction` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`prediction` text,
	`description` text,
	`chemical_element_slug` text,
	FOREIGN KEY (`chemical_element_slug`) REFERENCES `chemical_element`(`slug`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `element_health_environmental_impact` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`health_impact` text,
	`environmental_impact` text,
	`chemical_element_slug` text,
	FOREIGN KEY (`chemical_element_slug`) REFERENCES `chemical_element`(`slug`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `element_isotope` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`isotope_number` text,
	`name` text,
	`abundance` text,
	`half_life` text,
	`decay_mode` text,
	`nuclear_properties` text,
	`applications` text,
	`source` text,
	`other_details` text,
	`chemical_element_slug` text,
	FOREIGN KEY (`chemical_element_slug`) REFERENCES `chemical_element`(`slug`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `element_legal_status` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`regulations` text,
	`legal_restrictions` text,
	`chemical_element_slug` text,
	FOREIGN KEY (`chemical_element_slug`) REFERENCES `chemical_element`(`slug`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `element_magnetic_electrical_properties` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`magnetic_susceptibility` text,
	`electrical_resistivity` text,
	`hall_coefficient` text,
	`chemical_element_slug` text,
	FOREIGN KEY (`chemical_element_slug`) REFERENCES `chemical_element`(`slug`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `element_natural_occurrence` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`occurrence_type` text,
	`description` text,
	`chemical_element_slug` text,
	FOREIGN KEY (`chemical_element_slug`) REFERENCES `chemical_element`(`slug`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `element_optical_properties` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`refractive_index` text,
	`reflectivity` text,
	`absorption_spectrum` text,
	`chemical_element_slug` text,
	FOREIGN KEY (`chemical_element_slug`) REFERENCES `chemical_element`(`slug`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `element_oxidation_state` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`state` text,
	`description` text,
	`chemical_element_slug` text,
	FOREIGN KEY (`chemical_element_slug`) REFERENCES `chemical_element`(`slug`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `element_physical_properties` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`melting_point` text,
	`boiling_point` text,
	`density` text,
	`atomic_radius` text,
	`atomic_volume` text,
	`covalent_radius` text,
	`molar_heat` text,
	`thermal_conductivity` text,
	`sound_velocity` text,
	`mohs_hardness` text,
	`brinell_hardness` text,
	`specific_heat_capacity` text,
	`thermal_expansion_coefficient` text,
	`phase_transition_temperatures` text,
	`chemical_element_slug` text,
	FOREIGN KEY (`chemical_element_slug`) REFERENCES `chemical_element`(`slug`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `element_quantum_properties` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`quantum_numbers` text,
	`electron_shell_model` text,
	`energy_levels` text,
	`chemical_element_slug` text,
	FOREIGN KEY (`chemical_element_slug`) REFERENCES `chemical_element`(`slug`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `element_safety_data_sheet` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`handling` text,
	`storage` text,
	`first_aid_measures` text,
	`chemical_element_slug` text,
	FOREIGN KEY (`chemical_element_slug`) REFERENCES `chemical_element`(`slug`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `element_spectral_line` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`wavelength` text,
	`intensity` text,
	`line_type` text,
	`chemical_element_slug` text,
	FOREIGN KEY (`chemical_element_slug`) REFERENCES `chemical_element`(`slug`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `element_synthesis_production` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`synthesis_methods` text,
	`extraction_methods` text,
	`global_production` text,
	`chemical_element_slug` text,
	FOREIGN KEY (`chemical_element_slug`) REFERENCES `chemical_element`(`slug`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `element_user_interactions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`contribution` text,
	`question` text,
	`discussion` text,
	`chemical_element_slug` text,
	FOREIGN KEY (`chemical_element_slug`) REFERENCES `chemical_element`(`slug`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `history` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`event` text,
	`year` text,
	`description` text,
	`chemical_element_slug` text,
	FOREIGN KEY (`chemical_element_slug`) REFERENCES `chemical_element`(`slug`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `image_gallery` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`image_url` text,
	`description` text,
	`chemical_element_slug` text,
	FOREIGN KEY (`chemical_element_slug`) REFERENCES `chemical_element`(`slug`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `chemical_element_symbol_unique` ON `chemical_element` (`symbol`);