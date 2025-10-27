import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

const applicationTables = {
  projects: defineTable({
    title: v.string(),
    description: v.string(),
    technologies: v.array(v.string()),
    githubUrl: v.optional(v.string()),
    liveUrl: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
    featured: v.boolean(),
    category: v.string(),
    difficulty: v.optional(v.string()), // "Beginner", "Intermediate", "Advanced"
    order: v.number(),
  }).index("by_featured", ["featured"])
    .index("by_category", ["category"])
    .index("by_difficulty", ["difficulty"])
    .index("by_order", ["order"]),

  skills: defineTable({
    name: v.string(),
    category: v.string(),
    level: v.number(), // 1-100
    icon: v.optional(v.string()),
    order: v.number(),
  }).index("by_category", ["category"])
    .index("by_order", ["order"]),

  experiences: defineTable({
    company: v.string(),
    position: v.string(),
    description: v.string(),
    startDate: v.string(),
    endDate: v.optional(v.string()),
    technologies: v.array(v.string()),
    current: v.boolean(),
    order: v.number(),
  }).index("by_order", ["order"]),

  contact: defineTable({
    name: v.string(),
    email: v.string(),
    message: v.string(),
    status: v.string(), // "new", "read", "replied"
  }),
};

export default defineSchema({
  ...authTables,
  ...applicationTables,
});
