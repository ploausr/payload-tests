import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`users_sessions\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`created_at\` text,
  	\`expires_at\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`users_sessions_order_idx\` ON \`users_sessions\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`users_sessions_parent_id_idx\` ON \`users_sessions\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`users\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`email\` text NOT NULL,
  	\`reset_password_token\` text,
  	\`reset_password_expiration\` text,
  	\`salt\` text,
  	\`hash\` text,
  	\`login_attempts\` numeric DEFAULT 0,
  	\`lock_until\` text
  );
  `)
  await db.run(sql`CREATE INDEX \`users_updated_at_idx\` ON \`users\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`users_created_at_idx\` ON \`users\` (\`created_at\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`users_email_idx\` ON \`users\` (\`email\`);`)
  await db.run(sql`CREATE TABLE \`media\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`alt\` text NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`url\` text,
  	\`thumbnail_u_r_l\` text,
  	\`filename\` text,
  	\`mime_type\` text,
  	\`filesize\` numeric,
  	\`width\` numeric,
  	\`height\` numeric,
  	\`focal_x\` numeric,
  	\`focal_y\` numeric
  );
  `)
  await db.run(sql`CREATE INDEX \`media_updated_at_idx\` ON \`media\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`media_created_at_idx\` ON \`media\` (\`created_at\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`media_filename_idx\` ON \`media\` (\`filename\`);`)
  await db.run(sql`CREATE TABLE \`commercial_proposals_partners_logos\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`logo_id\` integer NOT NULL,
  	\`name\` text NOT NULL,
  	\`link\` text,
  	FOREIGN KEY (\`logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`commercial_proposals\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`commercial_proposals_partners_logos_order_idx\` ON \`commercial_proposals_partners_logos\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`commercial_proposals_partners_logos_parent_id_idx\` ON \`commercial_proposals_partners_logos\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`commercial_proposals_partners_logos_logo_idx\` ON \`commercial_proposals_partners_logos\` (\`logo_id\`);`)
  await db.run(sql`CREATE TABLE \`commercial_proposals_benefits_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	\`icon_id\` integer,
  	\`highlight\` integer DEFAULT false,
  	FOREIGN KEY (\`icon_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`commercial_proposals\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`commercial_proposals_benefits_items_order_idx\` ON \`commercial_proposals_benefits_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`commercial_proposals_benefits_items_parent_id_idx\` ON \`commercial_proposals_benefits_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`commercial_proposals_benefits_items_icon_idx\` ON \`commercial_proposals_benefits_items\` (\`icon_id\`);`)
  await db.run(sql`CREATE TABLE \`commercial_proposals_payment_options_options_features\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`feature\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`commercial_proposals_payment_options_options\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`commercial_proposals_payment_options_options_features_order_idx\` ON \`commercial_proposals_payment_options_options_features\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`commercial_proposals_payment_options_options_features_parent_id_idx\` ON \`commercial_proposals_payment_options_options_features\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`commercial_proposals_payment_options_options\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	\`price\` text NOT NULL,
  	\`discount\` text,
  	\`cta_text\` text DEFAULT 'Escolher Plano',
  	\`cta_link\` text,
  	\`highlight\` integer DEFAULT false,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`commercial_proposals\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`commercial_proposals_payment_options_options_order_idx\` ON \`commercial_proposals_payment_options_options\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`commercial_proposals_payment_options_options_parent_id_idx\` ON \`commercial_proposals_payment_options_options\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`commercial_proposals_testimonials_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`company\` text,
  	\`testimonial\` text NOT NULL,
  	\`avatar_id\` integer,
  	\`rating\` numeric DEFAULT 5,
  	FOREIGN KEY (\`avatar_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`commercial_proposals\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`commercial_proposals_testimonials_items_order_idx\` ON \`commercial_proposals_testimonials_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`commercial_proposals_testimonials_items_parent_id_idx\` ON \`commercial_proposals_testimonials_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`commercial_proposals_testimonials_items_avatar_idx\` ON \`commercial_proposals_testimonials_items\` (\`avatar_id\`);`)
  await db.run(sql`CREATE TABLE \`commercial_proposals_footer_social_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`platform\` text NOT NULL,
  	\`url\` text NOT NULL,
  	\`icon_id\` integer,
  	FOREIGN KEY (\`icon_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`commercial_proposals\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`commercial_proposals_footer_social_links_order_idx\` ON \`commercial_proposals_footer_social_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`commercial_proposals_footer_social_links_parent_id_idx\` ON \`commercial_proposals_footer_social_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`commercial_proposals_footer_social_links_icon_idx\` ON \`commercial_proposals_footer_social_links\` (\`icon_id\`);`)
  await db.run(sql`CREATE TABLE \`commercial_proposals\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`slug\` text NOT NULL,
  	\`status\` text DEFAULT 'draft',
  	\`hero_title\` text NOT NULL,
  	\`hero_subtitle\` text,
  	\`hero_description\` text,
  	\`hero_image_id\` integer NOT NULL,
  	\`hero_cta_text\` text DEFAULT 'Solicitar Proposta',
  	\`hero_cta_link\` text,
  	\`partners_title\` text DEFAULT 'Nossos Parceiros',
  	\`value_proposition_title\` text NOT NULL,
  	\`value_proposition_subtitle\` text,
  	\`value_proposition_description\` text,
  	\`value_proposition_image_id\` integer,
  	\`benefits_title\` text DEFAULT 'Benefícios',
  	\`payment_options_title\` text DEFAULT 'Opções de Pagamento',
  	\`testimonials_title\` text DEFAULT 'O que nossos clientes dizem',
  	\`footer_company_name\` text NOT NULL,
  	\`footer_description\` text,
  	\`footer_contact_email\` text,
  	\`footer_contact_phone\` text,
  	\`footer_contact_address\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`hero_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`value_proposition_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`commercial_proposals_slug_idx\` ON \`commercial_proposals\` (\`slug\`);`)
  await db.run(sql`CREATE INDEX \`commercial_proposals_hero_hero_image_idx\` ON \`commercial_proposals\` (\`hero_image_id\`);`)
  await db.run(sql`CREATE INDEX \`commercial_proposals_value_proposition_value_proposition_idx\` ON \`commercial_proposals\` (\`value_proposition_image_id\`);`)
  await db.run(sql`CREATE INDEX \`commercial_proposals_updated_at_idx\` ON \`commercial_proposals\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`commercial_proposals_created_at_idx\` ON \`commercial_proposals\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`payload_locked_documents\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`global_slug\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_global_slug_idx\` ON \`payload_locked_documents\` (\`global_slug\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_updated_at_idx\` ON \`payload_locked_documents\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_created_at_idx\` ON \`payload_locked_documents\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`payload_locked_documents_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	\`media_id\` integer,
  	\`commercial_proposals_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_locked_documents\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`media_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`commercial_proposals_id\`) REFERENCES \`commercial_proposals\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_order_idx\` ON \`payload_locked_documents_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_parent_idx\` ON \`payload_locked_documents_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_path_idx\` ON \`payload_locked_documents_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_users_id_idx\` ON \`payload_locked_documents_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_media_id_idx\` ON \`payload_locked_documents_rels\` (\`media_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_commercial_proposals_id_idx\` ON \`payload_locked_documents_rels\` (\`commercial_proposals_id\`);`)
  await db.run(sql`CREATE TABLE \`payload_preferences\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`key\` text,
  	\`value\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_preferences_key_idx\` ON \`payload_preferences\` (\`key\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_updated_at_idx\` ON \`payload_preferences\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_created_at_idx\` ON \`payload_preferences\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`payload_preferences_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_preferences\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_order_idx\` ON \`payload_preferences_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_parent_idx\` ON \`payload_preferences_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_path_idx\` ON \`payload_preferences_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_users_id_idx\` ON \`payload_preferences_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE TABLE \`payload_migrations\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`batch\` numeric,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_migrations_updated_at_idx\` ON \`payload_migrations\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`payload_migrations_created_at_idx\` ON \`payload_migrations\` (\`created_at\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`users_sessions\`;`)
  await db.run(sql`DROP TABLE \`users\`;`)
  await db.run(sql`DROP TABLE \`media\`;`)
  await db.run(sql`DROP TABLE \`commercial_proposals_partners_logos\`;`)
  await db.run(sql`DROP TABLE \`commercial_proposals_benefits_items\`;`)
  await db.run(sql`DROP TABLE \`commercial_proposals_payment_options_options_features\`;`)
  await db.run(sql`DROP TABLE \`commercial_proposals_payment_options_options\`;`)
  await db.run(sql`DROP TABLE \`commercial_proposals_testimonials_items\`;`)
  await db.run(sql`DROP TABLE \`commercial_proposals_footer_social_links\`;`)
  await db.run(sql`DROP TABLE \`commercial_proposals\`;`)
  await db.run(sql`DROP TABLE \`payload_locked_documents\`;`)
  await db.run(sql`DROP TABLE \`payload_locked_documents_rels\`;`)
  await db.run(sql`DROP TABLE \`payload_preferences\`;`)
  await db.run(sql`DROP TABLE \`payload_preferences_rels\`;`)
  await db.run(sql`DROP TABLE \`payload_migrations\`;`)
}
