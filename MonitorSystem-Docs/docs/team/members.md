---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/q1095568627.png',
    name: '朱宗旭',
    title: 'Leader',
    links: [
      { icon: 'github', link: 'https://github.com/q1095568627' },
    ]
  },
  {
    avatar: 'https://github.com/kongmingLatern.png',
    name: '施颖杰',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/kongmingLatern' },
    ]
  },
  {
    avatar: 'https://github.com/HCYETY.png',
    name: '羊芳震',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/HCYETY' },
    ]
  },
  {
    avatar: 'https://github.com/JustWantToHappy.png',
    name: '唐欣霖',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/JustWantToHappy' },
    ]
  },
  {
    avatar: 'https://github.com/Lemonadeccc.png',
    name: '张文晋',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/Lemonadeccc' },
    ]
  },
  
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      团队信息及分工
    </template>
    <template #lead>
      <p>以下成员介绍及分工不分先后次序</p>
      <p>朱宗旭：</p>
      <p>羊芳震：</p>
      <p>施颖杰：</p>
      <p>唐欣霖：</p>
      <p>张文晋：</p>
      <p>以下是本次前端监控项目的团队成员。</p>
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>