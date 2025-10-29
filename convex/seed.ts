import { mutation } from "./_generated/server";

export const seedData = mutation({
  args: {},
  handler: async (ctx) => {
    // Clear existing data
    const existingProjects = await ctx.db.query("projects").collect();
    const existingSkills = await ctx.db.query("skills").collect();
    const existingExperiences = await ctx.db.query("experiences").collect();
    
    for (const project of existingProjects) {
      await ctx.db.delete(project._id);
    }
    for (const skill of existingSkills) {
      await ctx.db.delete(skill._id);
    }
    for (const experience of existingExperiences) {
      await ctx.db.delete(experience._id);
    }

    // Add beginner projects
    await ctx.db.insert("projects", {
      title: "Personal Portfolio Website",
      description: "A responsive personal portfolio website built with HTML, CSS, and JavaScript. Features smooth scrolling, mobile-first design, and contact form functionality.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      githubUrl: "https://github.com/festybam123/My-Portfolio.git",
      liveUrl: "https://festus-jet.vercel.app/",
      featured: false,
      category: "Frontend",
      difficulty: "Beginner",
      order: 1,
    });

    await ctx.db.insert("projects", {
      title: "Todo List App",
      description: "A simple todo list application with local storage persistence. Users can add, edit, delete, and mark tasks as complete with a clean, intuitive interface.",
      technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
      githubUrl: "https://github.com/example/todo-app",
      liveUrl: "https://todo-demo.com",
      featured: false,
      category: "Frontend",
      difficulty: "Beginner",
      order: 2,
    });

    await ctx.db.insert("projects", {
      title: "Calculator App",
      description: "A functional calculator application with basic arithmetic operations. Features a clean design and keyboard support for enhanced user experience.",
      technologies: ["HTML", "CSS", "JavaScript", "DOM Manipulation"],
      githubUrl: "https://github.com/example/calculator",
      liveUrl: "https://calculator-demo.com",
      featured: false,
      category: "Frontend",
      difficulty: "Beginner",
      order: 3,
    });

    // Add intermediate projects
    await ctx.db.insert("projects", {
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with data visualization and location-based forecasts. Integrates with OpenWeather API and features 5-day forecasts with charts.",
      technologies: ["React", "Chart.js", "OpenWeather API", "Styled Components", "Axios"],
      githubUrl: "https://github.com/example/weather",
      liveUrl: "https://weather-dashboard-demo.com",
      featured: true,
      category: "Frontend",
      difficulty: "Intermediate",
      order: 4,
    });

    await ctx.db.insert("projects", {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates using Socket.io. Features drag-and-drop functionality, team collaboration, and project organization.",
      technologies: ["React", "Express.js", "Socket.io", "MongoDB", "Material-UI"],
      githubUrl: "https://github.com/example/taskmanager",
      liveUrl: "https://taskmanager-demo.com",
      featured: true,
      category: "Full Stack",
      difficulty: "Intermediate",
      order: 5,
    });

    await ctx.db.insert("projects", {
      title: "Recipe Finder App",
      description: "A recipe discovery application that allows users to search for recipes by ingredients, dietary restrictions, and cuisine type. Features meal planning and shopping lists.",
      technologies: ["React", "Node.js", "Spoonacular API", "MongoDB", "JWT"],
      githubUrl: "https://github.com/example/recipe-finder",
      liveUrl: "https://recipe-finder-demo.com",
      featured: false,
      category: "Full Stack",
      difficulty: "Intermediate",
      order: 6,
    });

    await ctx.db.insert("projects", {
      title: "Blog Platform",
      description: "A full-featured blog platform with user authentication, rich text editor, comment system, and admin dashboard. Supports multiple authors and content management.",
      technologies: ["React", "Node.js", "Express.js", "PostgreSQL", "JWT", "Quill.js"],
      githubUrl: "https://github.com/example/blog-platform",
      liveUrl: "https://blog-platform-demo.com",
      featured: false,
      category: "Full Stack",
      difficulty: "Intermediate",
      order: 7,
    });

    // Add advanced projects
    await ctx.db.insert("projects", {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce platform with React, Node.js, and PostgreSQL. Features include user authentication, payment processing with Stripe, inventory management, order tracking, and comprehensive admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis", "Docker", "AWS"],
      githubUrl: "https://github.com/example/ecommerce",
      liveUrl: "https://ecommerce-demo.com",
      featured: true,
      category: "Full Stack",
      difficulty: "Advanced",
      order: 8,
    });

    await ctx.db.insert("projects", {
      title: "Real-time Chat Application",
      description: "Scalable real-time chat application supporting multiple rooms, file sharing, video calls, and message encryption. Built with microservices architecture and deployed on Kubernetes.",
      technologies: ["React", "Node.js", "Socket.io", "Redis", "MongoDB", "WebRTC", "Kubernetes"],
      githubUrl: "https://github.com/example/chat-app",
      liveUrl: "https://chat-app-demo.com",
      featured: true,
      category: "Full Stack",
      difficulty: "Advanced",
      order: 9,
    });

    await ctx.db.insert("projects", {
      title: "Social Media Analytics Dashboard",
      description: "Comprehensive analytics dashboard for social media management. Features real-time data processing, machine learning insights, automated reporting, and multi-platform integration.",
      technologies: ["React", "Python", "Django", "PostgreSQL", "Redis", "Celery", "TensorFlow", "D3.js"],
      githubUrl: "https://github.com/example/social-analytics",
      liveUrl: "https://social-analytics-demo.com",
      featured: false,
      category: "Full Stack",
      difficulty: "Advanced",
      order: 10,
    });

    await ctx.db.insert("projects", {
      title: "DevOps Monitoring Platform",
      description: "Enterprise-grade monitoring and alerting platform for DevOps teams. Features custom metrics, log aggregation, automated incident response, and integration with popular DevOps tools.",
      technologies: ["React", "Go", "Prometheus", "Grafana", "Elasticsearch", "Docker", "Terraform"],
      githubUrl: "https://github.com/example/devops-monitor",
      liveUrl: "https://devops-monitor-demo.com",
      featured: false,
      category: "DevOps",
      difficulty: "Advanced",
      order: 11,
    });

    // Add sample skills with updated levels
    const frontendSkills = [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 95 },
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Vue.js", level: 75 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Sass/SCSS", level: 85 },
      { name: "Next.js", level: 80 },
    ];

    const backendSkills = [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "Django", level: 75 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "REST APIs", level: 90 },
      { name: "GraphQL", level: 70 },
    ];

    const toolsSkills = [
      { name: "Git", level: 95 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "Kubernetes", level: 65 },
      { name: "CI/CD", level: 80 },
      { name: "Vercel", level: 85 },
      { name: "Figma", level: 80 },
      { name: "VS Code", level: 95 },
    ];

    let order = 1;
    for (const skill of frontendSkills) {
      await ctx.db.insert("skills", {
        ...skill,
        category: "Frontend",
        order: order++,
      });
    }

    for (const skill of backendSkills) {
      await ctx.db.insert("skills", {
        ...skill,
        category: "Backend",
        order: order++,
      });
    }

    for (const skill of toolsSkills) {
      await ctx.db.insert("skills", {
        ...skill,
        category: "Tools",
        order: order++,
      });
    }

    // Add sample experiences
    await ctx.db.insert("experiences", {
      company: "Tech Startup Inc.",
      position: "Senior Full Stack Developer",
      description: "Led development of core platform features serving 100k+ users, mentored junior developers, and architected scalable microservices solutions. Implemented CI/CD pipelines and reduced deployment time by 60%.",
      startDate: "2022-01",
      current: true,
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker", "Kubernetes"],
      order: 1,
    });

    await ctx.db.insert("experiences", {
      company: "Digital Agency Co.",
      position: "Full Stack Developer",
      description: "Developed custom web applications for clients across various industries, implemented responsive designs, and integrated third-party APIs. Collaborated with design teams to deliver pixel-perfect user interfaces.",
      startDate: "2020-06",
      endDate: "2021-12",
      current: false,
      technologies: ["React", "Express.js", "MongoDB", "Stripe", "Tailwind CSS", "Socket.io"],
      order: 2,
    });

    await ctx.db.insert("experiences", {
      company: "Freelance",
      position: "Web Developer",
      description: "Built websites and web applications for small businesses, focusing on performance optimization and user experience. Managed projects from conception to deployment while maintaining client relationships.",
      startDate: "2019-01",
      endDate: "2020-05",
      current: false,
      technologies: ["JavaScript", "HTML/CSS", "WordPress", "PHP", "MySQL"],
      order: 3,
    });

    return "Enhanced portfolio data with beginner to advanced projects seeded successfully!";
  },
});
