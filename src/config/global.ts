export const globalConfig = {
  site: {
    name: "我的回家之路",
    author: "我的回家之路",
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
        title: "心得",
        href: "/projects"
      },
      {
        title: "故事",
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
    link: {
        text: "浙ICP备2025203608号-1",
        href: "https://beian.miit.gov.cn/"
    },
    social: {
      twitter: "https://x.com/loecom",
      github: "https://github.com/loecom",
      email: "loecomm@qq.com"
    }
  }
} as const; 
