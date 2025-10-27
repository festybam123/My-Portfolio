import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// Projects
export const getProjects = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("projects")
      .withIndex("by_order")
      .order("asc")
      .collect();
  },
});

export const getFeaturedProjects = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("projects")
      .withIndex("by_featured", (q) => q.eq("featured", true))
      .order("asc")
      .collect();
  },
});

export const addProject = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    technologies: v.array(v.string()),
    githubUrl: v.optional(v.string()),
    liveUrl: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
    featured: v.boolean(),
    category: v.string(),
    order: v.number(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("projects", args);
  },
});

// Skills
export const getSkills = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("skills")
      .withIndex("by_order")
      .order("asc")
      .collect();
  },
});

export const getSkillsByCategory = query({
  args: { category: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("skills")
      .withIndex("by_category", (q) => q.eq("category", args.category))
      .order("asc")
      .collect();
  },
});

export const addSkill = mutation({
  args: {
    name: v.string(),
    category: v.string(),
    level: v.number(),
    icon: v.optional(v.string()),
    order: v.number(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("skills", args);
  },
});

// Experiences
export const getExperiences = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("experiences")
      .withIndex("by_order")
      .order("asc")
      .collect();
  },
});

export const addExperience = mutation({
  args: {
    company: v.string(),
    position: v.string(),
    description: v.string(),
    startDate: v.string(),
    endDate: v.optional(v.string()),
    technologies: v.array(v.string()),
    current: v.boolean(),
    order: v.number(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("experiences", args);
  },
});

// Contact
export const submitContact = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("contact", {
      ...args,
      status: "new",
    });
  },
});

export const getContactMessages = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("contact")
      .order("desc")
      .collect();
  },
});
