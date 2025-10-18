export const globalConfig = {
  site: {
    name: "我的回家之路",
    author: "酒破儿",
    description: "我的回家之路",
    url: "/"
  },
  navigation: {
    aria: "Main Navigation",
    items: [
      {
        title: "主页",
        href: "/"
      },
      {
        title: "项目",
        href: "/projects"
      },
      {
        title: "文章",
        href: "/posts"
      },
      {
        title: "关于",
        href: "/about"
      }
    ]
  },
  footer: {
    aria: "Footer Navigation",
    copyright: "© 2025 我的回家之路 | 设计制作: 酒破儿",
    social: {
      github: "https://github.com/loecom",
      email: "loecomm@qq.com"
    }
  }
} as const; 
