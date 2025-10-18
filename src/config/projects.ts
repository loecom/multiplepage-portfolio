export const projectsConfig = {
  title: "我的心得",
  description: "这里写我的一些生活中的体会和心得",
  backButton: "返回主页",
  noProjects: "没找到心得",
  items: [
    {
      title: "Project One",
      description: "A brief description of your first project. Explain what it does and what technologies you used.",
      href: "https://edgeone.ai/pages/templates?usecase=portfolio",
      imageUrl: "/assets/images/projects/project1.jpg"
    },
    {
      title: "Project Two",
      description: "Describe your second project here. Highlight the key features and your role in development.",
      href: "https://edgeone.ai/pages/templates?usecase=portfolio",
      imageUrl: "/assets/images/projects/project2.jpg"
    },
    {
      title: "Project Three",
      description: "Share details about your third project. What problems did it solve? What was the outcome?",
      href: "https://edgeone.ai/pages/templates?usecase=portfolio",
      imageUrl: "/assets/images/projects/project3.png"
    }
  ]
} as const; 
