import { sql } from "drizzle-orm";
import { pgTable, text, varchar, serial, timestamp, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  weddingDate: text("wedding_date").notNull(),
  weddingLocation: text("wedding_location").notNull(),
  ceremonyVenue: text("ceremony_venue"),
  receptionVenue: text("reception_venue"),
  serviceType: text("service_type").notNull(),
  hearAboutUs: text("hear_about_us"),
  message: text("message"),
  status: text("status").notNull().default("pending"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertInquirySchema = createInsertSchema(inquiries, {
  firstName: z.string().min(1, "First name is required").max(100),
  lastName: z.string().min(1, "Last name is required").max(100),
  email: z.string().email("Invalid email address").max(200),
  phone: z.string().max(30).optional().or(z.literal("")),
  weddingDate: z.string().min(1, "Wedding date is required").max(100),
  weddingLocation: z.string().min(1, "Wedding location is required").max(200),
  ceremonyVenue: z.string().max(200).optional().or(z.literal("")),
  receptionVenue: z.string().max(200).optional().or(z.literal("")),
  serviceType: z.string().min(1, "Service type is required").max(100),
  hearAboutUs: z.string().max(200).optional().or(z.literal("")),
  message: z.string().max(2000).optional().or(z.literal("")),
}).omit({
  id: true,
  createdAt: true,
  status: true,
});

export type InsertInquiry = z.infer<typeof insertInquirySchema>;
export type Inquiry = typeof inquiries.$inferSelect;

export const photographers = pgTable("photographers", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  location: text("location").notNull(),
  imageUrl: text("image_url").notNull(),
  specialty: text("specialty").notNull(),
  bio: text("bio"),
  yearsExperience: integer("years_experience"),
  isAvailable: boolean("is_available").notNull().default(true),
  isFeatured: boolean("is_featured").notNull().default(false),
});

export const insertPhotographerSchema = createInsertSchema(photographers).omit({
  id: true,
});

export type InsertPhotographer = z.infer<typeof insertPhotographerSchema>;
export type Photographer = typeof photographers.$inferSelect;

export const portfolioItems = pgTable("portfolio_items", {
  id: serial("id").primaryKey(),
  category: text("category").notNull(),
  imageUrl: text("image_url").notNull(),
  title: text("title"),
  description: text("description"),
  photographerId: integer("photographer_id"),
  isFeatured: boolean("is_featured").notNull().default(false),
});

export const insertPortfolioItemSchema = createInsertSchema(portfolioItems).omit({
  id: true,
});

export type InsertPortfolioItem = z.infer<typeof insertPortfolioItemSchema>;
export type PortfolioItem = typeof portfolioItems.$inferSelect;

export const reviews = pgTable("reviews", {
  id: serial("id").primaryKey(),
  coupleNames: text("couple_names").notNull(),
  location: text("location"),
  quote: text("quote").notNull(),
  awardBadge: text("award_badge"),
  rating: integer("rating").notNull().default(5),
  isFeatured: boolean("is_featured").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertReviewSchema = createInsertSchema(reviews, {
  coupleNames: z.string().min(1, "Couple names required").max(200),
  location: z.string().max(200).optional().or(z.literal("")),
  quote: z.string().min(1, "Review text is required").max(2000),
  awardBadge: z.string().max(100).optional().or(z.literal("")),
  rating: z.number().int().min(1).max(5),
}).omit({
  id: true,
  createdAt: true,
});

export type InsertReview = z.infer<typeof insertReviewSchema>;
export type Review = typeof reviews.$inferSelect;
