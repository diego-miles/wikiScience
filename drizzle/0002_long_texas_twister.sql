CREATE TABLE `event_participants` (
	`id` text PRIMARY KEY NOT NULL,
	`event_id` text,
	`person_id` text,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP' NOT NULL,
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP' NOT NULL,
	FOREIGN KEY (`event_id`) REFERENCES `events`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`person_id`) REFERENCES `persons`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `references` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`author` text,
	`publication_date_year` text,
	`url` text,
	`source_type` text,
	`book_edition` text,
	`publisher` text,
	`place_of_publication` text,
	`journal_name` text,
	`volume` text,
	`issue` text,
	`pages` text,
	`website_name` text,
	`publication_date_on_the_website` text,
	`access_date` text,
	`event_id` text,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP' NOT NULL,
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP' NOT NULL,
	FOREIGN KEY (`event_id`) REFERENCES `events`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `isotops` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `compounds` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `allotrops` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `spectral_lines` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `external_resources` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `future_predictions` text;--> statement-breakpoint
ALTER TABLE `chemical_element` DROP COLUMN `terminal_type`;--> statement-breakpoint
ALTER TABLE `chemical_element` DROP COLUMN `history_event`;--> statement-breakpoint
ALTER TABLE `chemical_element` DROP COLUMN `history_year`;--> statement-breakpoint
ALTER TABLE `chemical_element` DROP COLUMN `history_description`;--> statement-breakpoint
ALTER TABLE `chemical_element` DROP COLUMN `atomic_polarization`;--> statement-breakpoint
ALTER TABLE `chemical_element` DROP COLUMN `isotope_number`;--> statement-breakpoint
ALTER TABLE `chemical_element` DROP COLUMN `isotope_name`;--> statement-breakpoint
ALTER TABLE `chemical_element` DROP COLUMN `isotope_abundance`;--> statement-breakpoint
ALTER TABLE `chemical_element` DROP COLUMN `isotope_half_life`;--> statement-breakpoint
ALTER TABLE `chemical_element` DROP COLUMN `isotope_decay_mode`;--> statement-breakpoint
ALTER TABLE `chemical_element` DROP COLUMN `isotope_nuclear_properties`;--> statement-breakpoint
ALTER TABLE `chemical_element` DROP COLUMN `isotope_applications`;--> statement-breakpoint
ALTER TABLE `chemical_element` DROP COLUMN `isotope_source`;--> statement-breakpoint
ALTER TABLE `chemical_element` DROP COLUMN `isotope_other_details`;--> statement-breakpoint
ALTER TABLE `chemical_element` DROP COLUMN `compound_name`;--> statement-breakpoint
ALTER TABLE `chemical_element` DROP COLUMN `compound_formula`;--> statement-breakpoint
ALTER TABLE `chemical_element` DROP COLUMN `compound_description`;--> statement-breakpoint
ALTER TABLE `chemical_element` DROP COLUMN `allotrope_name`;--> statement-breakpoint
ALTER TABLE `chemical_element` DROP COLUMN `allotrope_description`;--> statement-breakpoint
ALTER TABLE `chemical_element` DROP COLUMN `image_gallery_image_url`;--> statement-breakpoint
ALTER TABLE `chemical_element` DROP COLUMN `image_gallery_description`;--> statement-breakpoint
ALTER TABLE `chemical_element` DROP COLUMN `spectral_line_wavelength`;--> statement-breakpoint
ALTER TABLE `chemical_element` DROP COLUMN `spectral_line_intensity`;--> statement-breakpoint
ALTER TABLE `chemical_element` DROP COLUMN `spectral_line_line_type`;--> statement-breakpoint
ALTER TABLE `chemical_element` DROP COLUMN `user_interactions_contribution`;--> statement-breakpoint
ALTER TABLE `chemical_element` DROP COLUMN `user_interactions_question`;--> statement-breakpoint
ALTER TABLE `chemical_element` DROP COLUMN `user_interactions_discussion`;--> statement-breakpoint
ALTER TABLE `chemical_element` DROP COLUMN `external_resource_resource_type`;--> statement-breakpoint
ALTER TABLE `chemical_element` DROP COLUMN `external_resource_link`;--> statement-breakpoint
ALTER TABLE `chemical_element` DROP COLUMN `external_resource_description`;--> statement-breakpoint
ALTER TABLE `chemical_element` DROP COLUMN `future_prediction_prediction`;--> statement-breakpoint
ALTER TABLE `chemical_element` DROP COLUMN `future_prediction_description`;