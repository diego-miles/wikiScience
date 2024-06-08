CREATE TABLE `contextDefinition` (
	`slug` text,
	`concept` text PRIMARY KEY NOT NULL,
	`formula` text,
	`pronunciation` text,
	`definition` text,
	`references` text,
	`types` text,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP'
);
--> statement-breakpoint
CREATE UNIQUE INDEX `contextDefinition_slug_unique` ON `contextDefinition` (`slug`);