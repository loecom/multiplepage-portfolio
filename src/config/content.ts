export const siteConfig = {
  name: "我的回家之路",
  description: "我的回家之路",
  nav: {
    home: "Home",
    posts: "Posts",
    projects: "Projects",
    about: "About"
  },
  home: {
    greeting: "大家好，我是酒破儿！",
    description: '每个人的生命中都有属于自己的"回家之路"。对我而言，这条路不仅是地理上的归途，更是心灵的回归。从[起点]到[终点]，这段旅程教会了我[学到的道理或感悟]。在路上，我遇到了[重要的人或事]，这些经历塑造了今天的我。回家之路并非一帆风顺，有迷茫、有困惑，但每一次转弯都让我更加接近真实的自己。',
    buttons: {
      viewProjects: "查看心得",
      readPosts: "阅读文章"
    }
  },
  projects: {
    title: "我的心得",
    description: "这里写我的一些体验和心得",
    backButton: "返回主页",
    noProjects: "没找到心得",
    items: [
      {
        title: "TempMail.Best",
        description: "Best Temporary Email.",
        href: "https://tempmail.best",
        imageUrl: "/assets/images/projects/tempmail.best.png"
      },
      {
        title: "DNS.Surf",
        description: "Querying DNS Resolution Results in Different Regions Worldwide.",
        href: "https://dns.surf",
        imageUrl: "/assets/images/projects/dns.surf.png"
      },
      {
        title: "HTML.ZONE",
        description: "Web Toolbox.",
        href: "https://html.zone",
        imageUrl: "/assets/images/projects/html.zone.png"
      },
      {
        title: "Sink",
        description: "A Simple / Speedy / Secure Link Shortener with Analytics.",
        href: "https://sink.cool",
        imageUrl: "/assets/images/projects/sink.cool.png"
      },
      {
        title: "BroadcastChannel",
        description: "Turn your Telegram Channel into a MicroBlog.",
        href: "https://github.com/ccbikai/BroadcastChannel",
        imageUrl: "/assets/images/projects/broadcast-channel.png"
      },
      {
        title: "L(O*62).ONG",
        description: "Make your URL looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger",
        href: "https://loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo.ong",
        imageUrl: "/assets/images/projects/long.png"
      }
    ]
  },
  posts: {
    title: "我的故事",
    description: "这里写我的故事",
    backButton: "返回主页",
    noPosts: "没发现故事",
    searchPlaceholder: "按标题筛选...",
    pagination: {
      previous: "上一页",
      next: "下一页"
    },
    items: [
      {
        title: "Run MCP Server in a Docker sandbox",
        description: "Run MCP Server in a Docker sandbox to avoid supply chain attacks.",
        date: "Apr 25, 2025",
        href: "/post/guide-to-running-mcp-server-in-a-sandbox",
        imageUrl: "/assets/images/posts/post1.jpg",
        readingTime: 8
      },
      {
        title: "Use Cloudflare Workers to concat audio files",
        description: "How to use Cloudflare Workers to merge audio files using FFmpeg in the browser.",
        date: "April 19, 2025",
        href: "/post/cloudflare-audio-concat",
        imageUrl: "/assets/images/posts/post2.jpg",
        readingTime: 12
      },
      {
        title: "RSS.Beauty - Make Your RSS Beautiful!",
        description: "Beautify your RSS feeds with RSS.Beauty, featuring elegant interfaces, responsive design, and self-hosting support. Try it now!",
        date: "Dec 31, 2024",
        href: "/post/rss-beauty",
        imageUrl: "/assets/images/posts/post3.jpg",
        readingTime: 6
      },
      {
        title: "Building a Modern Web App with Next.js",
        description: "Learn how to build a modern web application using Next.js, React, and Tailwind CSS.",
        date: "Dec 15, 2024",
        href: "/post/nextjs-web-app",
        imageUrl: "/assets/images/posts/post1.jpg",
        readingTime: 15
      },
      {
        title: "The Future of Web Development",
        description: "Exploring the latest trends and technologies shaping the future of web development.",
        date: "Dec 1, 2024",
        href: "/post/future-web-dev",
        imageUrl: "/assets/images/posts/post2.jpg",
        readingTime: 10
      },
      {
        title: "Mastering TypeScript in 2024",
        description: "A comprehensive guide to TypeScript features and best practices for modern web development.",
        date: "Nov 20, 2024",
        href: "/post/typescript-guide",
        imageUrl: "/assets/images/posts/post3.jpg",
        readingTime: 20
      },
      {
        title: "The Art of Clean Code",
        description: "Learn the principles and practices of writing clean, maintainable code that stands the test of time.",
        date: "Nov 10, 2024",
        href: "/post/clean-code",
        imageUrl: "/assets/images/posts/post1.jpg",
        readingTime: 12
      },
      {
        title: "Building Scalable APIs with Node.js",
        description: "Best practices and patterns for building robust and scalable APIs using Node.js and Express.",
        date: "Oct 28, 2024",
        href: "/post/nodejs-apis",
        imageUrl: "/assets/images/posts/post2.jpg",
        readingTime: 18
      },
      {
        title: "Getting Started with GraphQL",
        description: "A beginner's guide to GraphQL: concepts, implementation, and real-world examples.",
        date: "Oct 15, 2024",
        href: "/post/graphql-intro",
        imageUrl: "/assets/images/posts/post3.jpg",
        readingTime: 14
      },
      {
        title: "The Power of CSS Grid",
        description: "Master CSS Grid layout and create complex, responsive designs with ease.",
        date: "Oct 1, 2024",
        href: "/post/css-grid",
        imageUrl: "/assets/images/posts/post1.jpg",
        readingTime: 9
      }
    ]
  },
  about: {
    title: "关于",
    description: "简单介绍我自己。",
    backButton: "返回主页"
  },
  theme: {
    dayMode: "",
    nightMode: ""
  }
} as const 
