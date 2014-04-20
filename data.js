var date = new Date()

module.exports = {
  // 输出友好格式的HTML
  pretty: true,
  cn_name: '刘志鹏',
  en_name: 'hustlzp',
  avatar: 'http://hustlzp-resume.qiniudn.com/avatar.jpg',
  bg: 'http://hustlzp-resume.qiniudn.com/sea.jpg',
  motto: '以免当我生命结束时，发现自己，从来没有活过。',
  desc: 'Hello，我是刘志鹏，90年生，目前就读于湖北省关山口男职，研究生二年级。业余大爱Web开发，毕业后决定放弃本专业7年所学，转型互联网。如孟子云：虽千万人，吾往矣。',
  code: 'https://github.com/hustlzp/resume',
  update: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate(),

  // 求职意向
  expectations: [
    '城市：上海',
    '看重专业出身，请勿扰',
    '公司产品的价值观与个人价值观没有严重分歧',
    '有神一样的队友，能够得到快速成长',
    '开明、活跃、年轻的团队氛围',
    '符合行业水平的薪酬'
  ],

  // 联系方式
  contacts: [
    {
      title: 'Blog',
      link: 'http://hustlzp.com',
      image: 'image/icons/blog.png'
    },
    {
      title: 'GitHub',
      link: 'https://github.com/hustlzp',
      image: 'image/icons/github.png'
    },
    {
      title: 'V2EX',
      link: 'https://www.v2ex.com/member/hustlzp',
      image: 'image/icons/v2ex.png'
    },
    {
      title: '豆瓣',
      link: 'http://www.douban.com/people/hustlzp',
      image: 'image/icons/douban.png'
    },
    {
      title: 'hustlzp@qq.com',
      image: 'image/icons/email.png'
    }
  ],

  // 作品
  projects: [
    {
      title: '乐创',
      desc: '3D打印团队“乐创”官网。',
      link: 'http://www.thu3d.com',
      image: 'http://hustlzp-resume.qiniudn.com/lemaker.jpg',
      tec: 'Flask / MySQL / Redis'
    },
    {
      title: '西窗烛',
      desc: '品味传统文学之美。',
      link: 'http://www.xichuangzhu.com',
      image: 'http://hustlzp-resume.qiniudn.com/xcz.jpg',
      tec: 'Flask / MySQL',
      source: 'https://github.com/hustlzp/xichuangzhu'
    },
    {
      title: 'Transy',
      desc: '中英翻译助手。',
      link: 'http://www.transy.org',
      image: 'http://hustlzp-resume.qiniudn.com/transy.png',
      tec: 'NodeJS / MongoDB',
      source: 'https://github.com/hustlzp/transy'
    },
    {
      title: 'Optico',
      desc: 'Website for Optico Company.',
      link: 'http://www.optico.com.cn',
      image: 'http://hustlzp-resume.qiniudn.com/optico.png',
      tec: 'Flask / MySQL',
      source: 'https://github.com/hustlzp/optico'
    },
    {
      title: 'YProgrammer',
      desc: '分享优质Web开发资源。',
      link: 'http://www.yprogrammer.com',
      image: 'http://hustlzp-resume.qiniudn.com/yp.png',
      tec: 'Django / MySQL',
      source: 'https://github.com/hustlzp/yprogrammer'
    },
    {
      title: 'AOD',
      desc: 'Demo for AOD Company.',
      link: 'http://hustlzp.github.io/aod',
      image: 'http://hustlzp-resume.qiniudn.com/aod.png',
      tec: 'HTML / CSS / JavaScript',
      source: 'https://github.com/hustlzp/aod/tree/gh-pages'
    }
    // {
    //   title: 'jquery-s2t',
    //   desc: '用于中文简繁转换的jQuery插件。',
    //   link: 'https://github.com/hustlzp/jquery-s2t',
    //   image: 'http://placehold.it/320x200',
    //   tec: 'JavaScript / jQuery',
    // }
  ],

  // 技能
  skills: [
    {
      name: 'Python',
      degree: '55'
    },
    {
      name: 'NodeJS',
      degree: '40'
    },
    {
      name: 'JavaScript',
      degree: '45'
    },
    {
      name: 'HTML / CSS',
      degree: '55'
    },
    {
      name: 'Ruby on Rails',
      degree: '20'
    },
    {
      name: 'MySQL / MongoDB / Redis',
      degree: '30'
    }
  ],

  // 阅读
  books: [
    {
      title: '小王子',
      image: 'http://hustlzp-resume.qiniudn.com/prince.jpg',
      link: 'http://book.douban.com/subject/2278402',
      quote: '因为我倾听过她的怨艾和自诩，甚至有时我聆听着她的沉默。因为她是我的玫瑰。'
    },
    {
      title: '禅者的初心',
      image: 'http://hustlzp-resume.qiniudn.com/zen.jpg',
      link: 'http://book.douban.com/subject/4898627',
      quote: '初学者的心空空如也，不受各种习性的羁绊。'
    },
    {
      title: '黑客与画家',
      image: 'http://hustlzp-resume.qiniudn.com/hp.jpg',
      link: 'http://book.douban.com/subject/6021440',
      quote: 'Make something people want.'
    },
    {
      title: '白领',
      image: 'http://hustlzp-resume.qiniudn.com/white-collar.jpg',
      link: 'http://book.douban.com/subject/1860946',
      quote: '在像手工艺一类的工作中，游戏的质朴的自我表现和工作的未来价值的创造是融合在一起的。'
    },
    {
      title: '设计中的设计',
      image: 'http://hustlzp-resume.qiniudn.com/design.jpg',
      link: 'http://book.douban.com/subject/4230237',
      quote: '不是“这个好”，而是“这样就好”。'
    }
  ],

  // 教育
  educations: [
    {
      period: '2012.9 - 至今',
      title: '华中科技大学，光电学院 光电信息工程，硕士'
    },
    {
      period: '2008.9 - 2012.6',
      title: '华中科技大学，光电学院 光电信息工程，学士'
    }
  ]
}