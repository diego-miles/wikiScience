ALTER TABLE `chemical_element` ADD `atomicStructure_electrons` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `atomicStructure_protons` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `atomicStructure_neutrons` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `atomicStructure_atomic_Polarization` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `crystal_structures` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `history` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `allotropes` text;--> statement-breakpoint
ALTER TABLE `chemical_element` ADD `practical_applications` text;--> statement-breakpoint
ALTER TABLE `chemical_element` DROP COLUMN `electrons`;--> statement-breakpoint
ALTER TABLE `chemical_element` DROP COLUMN `protons`;--> statement-breakpoint
ALTER TABLE `chemical_element` DROP COLUMN `neutrons`;--> statement-breakpoint
ALTER TABLE `chemical_element` DROP COLUMN `crystal_structure_type`;--> statement-breakpoint
ALTER TABLE `chemical_element` DROP COLUMN `crystal_structure_temperature`;--> statement-breakpoint
ALTER TABLE `chemical_element` DROP COLUMN `crystal_structure_description`;--> statement-breakpoint
ALTER TABLE `chemical_element` DROP COLUMN `allotrops`;