import { 
  type User, type InsertUser, 
  type Inquiry, type InsertInquiry, 
  type Photographer, type InsertPhotographer,
  type PortfolioItem, type InsertPortfolioItem,
  type Review, type InsertReview,
  users, inquiries, photographers, portfolioItems, reviews 
} from "@shared/schema";
import { db } from "@/db";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  getInquiries(): Promise<Inquiry[]>;
  getInquiryById(id: number): Promise<Inquiry | undefined>;
  updateInquiryStatus(id: number, status: string): Promise<Inquiry | undefined>;
  
  getPhotographers(): Promise<Photographer[]>;
  getFeaturedPhotographers(): Promise<Photographer[]>;
  getPhotographerById(id: number): Promise<Photographer | undefined>;
  createPhotographer(photographer: InsertPhotographer): Promise<Photographer>;
  
  getPortfolioItems(category?: string): Promise<PortfolioItem[]>;
  getFeaturedPortfolioItems(): Promise<PortfolioItem[]>;
  createPortfolioItem(item: InsertPortfolioItem): Promise<PortfolioItem>;
  
  getReviews(): Promise<Review[]>;
  getFeaturedReviews(): Promise<Review[]>;
  createReview(review: InsertReview): Promise<Review>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }

  async createInquiry(inquiry: InsertInquiry): Promise<Inquiry> {
    const result = await db.insert(inquiries).values(inquiry).returning();
    return result[0];
  }

  async getInquiries(): Promise<Inquiry[]> {
    return await db.select().from(inquiries).orderBy(desc(inquiries.createdAt));
  }

  async getInquiryById(id: number): Promise<Inquiry | undefined> {
    const result = await db.select().from(inquiries).where(eq(inquiries.id, id));
    return result[0];
  }

  async updateInquiryStatus(id: number, status: string): Promise<Inquiry | undefined> {
    const result = await db.update(inquiries)
      .set({ status })
      .where(eq(inquiries.id, id))
      .returning();
    return result[0];
  }

  async getPhotographers(): Promise<Photographer[]> {
    return await db.select().from(photographers);
  }

  async getFeaturedPhotographers(): Promise<Photographer[]> {
    return await db.select().from(photographers).where(eq(photographers.isFeatured, true));
  }

  async getPhotographerById(id: number): Promise<Photographer | undefined> {
    const result = await db.select().from(photographers).where(eq(photographers.id, id));
    return result[0];
  }

  async createPhotographer(photographer: InsertPhotographer): Promise<Photographer> {
    const result = await db.insert(photographers).values(photographer).returning();
    return result[0];
  }

  async getPortfolioItems(category?: string): Promise<PortfolioItem[]> {
    if (category) {
      return await db.select().from(portfolioItems).where(eq(portfolioItems.category, category));
    }
    return await db.select().from(portfolioItems);
  }

  async getFeaturedPortfolioItems(): Promise<PortfolioItem[]> {
    return await db.select().from(portfolioItems).where(eq(portfolioItems.isFeatured, true));
  }

  async createPortfolioItem(item: InsertPortfolioItem): Promise<PortfolioItem> {
    const result = await db.insert(portfolioItems).values(item).returning();
    return result[0];
  }

  async getReviews(): Promise<Review[]> {
    return await db.select().from(reviews).orderBy(desc(reviews.createdAt));
  }

  async getFeaturedReviews(): Promise<Review[]> {
    return await db.select().from(reviews).where(eq(reviews.isFeatured, true));
  }

  async createReview(review: InsertReview): Promise<Review> {
    const result = await db.insert(reviews).values(review).returning();
    return result[0];
  }
}

export const storage = new DatabaseStorage();
