CREATE TABLE `citations` (
	`word` text PRIMARY KEY NOT NULL,
	`slug` text,
	`etymology` text,
	`pronunciation` text,
	`definitions` text,
	`synonyms` text,
	`antonyms` text,
	`examples` text,
	`images` text,
	`audio` text,
	`language` text,
	`tags` text,
	`relatedConcepts` text,
	`applications` text,
	`measurementUnits` text,
	`historicalSignificance` text,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP'
);
--> statement-breakpoint
DROP TABLE `event_participants`;--> statement-breakpoint
DROP TABLE `references`;--> statement-breakpoint
CREATE UNIQUE INDEX `citations_slug_unique` ON `citations` (`slug`);