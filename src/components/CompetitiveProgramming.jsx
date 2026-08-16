import React from 'react';
import { motion } from 'framer-motion';
import { SiCodeforces, SiLeetcode, SiCodechef, SiGithub } from 'react-icons/si';
import { ExternalLink, Calendar, BarChart2, Flame, Award, Trophy } from 'lucide-react';

// Custom SVG logos for platforms not in react-icons
const AtCoderLogo = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="6" fill="#222" />
    <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="16" fontWeight="bold" fontFamily="monospace" fill="white">AC</text>
  </svg>
);

const GFGLogo = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="14" fontWeight="900" fontFamily="monospace" fill="#2f8d46">GFG</text>
  </svg>
);

const cpPlatforms = [
  {
    name: "LeetCode",
    handle: "Algorixx",
    rating: "1933",
    rank: "Contest Rating",
    maxRating: "1933",
    link: "https://leetcode.com/u/Algorixx/",
    logo: <SiLeetcode size={32} className="text-[#FFA116]" />,
    color: "from-yellow-600/20 to-[#FFA116]/10",
    problemsCount: "2364",
    progress: 85
  },
  {
    name: "CodeChef",
    handle: "algorixx",
    rating: "1722",
    rank: "3★ Rated",
    maxRating: "1784",
    link: "https://www.codechef.com/users/algorixx",
    logo: <SiCodechef size={32} className="text-[#964B00]" />,
    color: "from-amber-700/20 to-[#964B00]/10",
    problemsCount: "76",
    progress: 65
  },
  {
    name: "Codeforces",
    handle: "deepak-singh",
    rating: "1401",
    rank: "Specialist",
    maxRating: "1401",
    link: "https://codeforces.com/profile/deepak-singh",
    logo: <SiCodeforces size={32} className="text-[#1F8ACB]" />,
    color: "from-blue-600/20 to-[#1F8ACB]/10",
    problemsCount: "779",
    progress: 72
  },
  {
    name: "AtCoder",
    handle: "Deepak_singh",
    rating: "570",
    rank: "8 Kyu",
    maxRating: "570",
    link: "https://atcoder.jp/users/Deepak_singh",
    logo: <AtCoderLogo size={32} />,
    color: "from-gray-600/20 to-gray-500/10",
    problemsCount: "11",
    progress: 38
  }
];

// GeeksForGeeks data
const gfgDifficulty = [
  { label: 'School',  count: 0,   color: '#94a3b8', pct: 0   },
  { label: 'Basic',   count: 26,  color: '#60a5fa', pct: 5.4 },
  { label: 'Easy',    count: 143, color: '#4ade80', pct: 29.7 },
  { label: 'Medium',  count: 265, color: '#facc15', pct: 55.0 },
  { label: 'Hard',    count: 48,  color: '#f87171', pct: 10.0 },
];

const dsaTopics = [
  { topic: "Arrays",            count: 469, pct: 100 },
  { topic: "Dynamic Programming",count: 199, pct: 42 },
  { topic: "Algorithms",         count: 189, pct: 40 },
  { topic: "HashMap & Set",      count: 166, pct: 35 },
  { topic: "String",             count: 147, pct: 31 },
  { topic: "Sorting",            count: 102, pct: 22 },
  { topic: "Math",               count: 100, pct: 21 },
  { topic: "Greedy Algorithms",  count: 78,  pct: 17 },
  { topic: "Trees",              count: 74,  pct: 16 },
  { topic: "DFS",                count: 73,  pct: 16 },
];

const generateHeatmapData = () => {
  const data = [];
  const levels = [0.05, 0.2, 0.4, 0.6, 0.9];
  for (let i = 0; i < 7; i++) {
    const row = [];
    for (let j = 0; j < 40; j++) {
      const value = Math.random() > 0.3 ? levels[Math.floor(Math.random() * levels.length)] : 0.05;
      row.push(value);
    }
    data.push(row);
  }
  return data;
};

const heatmap = generateHeatmapData();

export default function CompetitiveProgramming() {
  return (
    <section id="cp-stats" className="relative py-24 bg-[#0a0f0d]/30 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-[30%] left-[-10%] w-[450px] h-[450px] bg-[#1D9E75]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Section Heading */}
        <div className="flex flex-col mb-16 text-center lg:text-left">
          <span className="text-[#1D9E75] font-mono text-xs tracking-widest uppercase mb-2">&gt; algorithms</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white">Competitive Programming</h2>
          <div className="h-[2px] w-20 bg-[#1D9E75] mt-4 mx-auto lg:mx-0" />
        </div>

        {/* Top Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-3 gap-4 mb-10"
        >
          {[
            { label: 'Questions Solved', value: '1917', sub: 'All Platforms' },
            { label: 'Active Days',      value: '648',  sub: 'Consistent Coder' },
            { label: 'Contests Attended',value: '77',   sub: 'LeetCode · CF · CC' },
          ].map((s, i) => (
            <div key={i} className="bg-[#0a0f0d]/50 border border-white/5 rounded-2xl p-5 text-center hover:border-[#1D9E75]/30 transition-colors duration-300">
              <div className="text-2xl md:text-3xl font-black font-mono text-white">{s.value}</div>
              <div className="text-xs font-semibold text-gray-300 mt-1">{s.label}</div>
              <div className="text-[10px] font-mono text-gray-600 mt-0.5">{s.sub}</div>
            </div>
          ))}
        </motion.div>

        {/* Platform Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cpPlatforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0a0f0d]/40 backdrop-blur-md border border-white/5 p-6 rounded-2xl flex flex-col justify-between group hover:border-[#1D9E75]/40 transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${platform.color} border border-white/5`}>
                    {platform.logo}
                  </div>
                  <div>
                    <h3 className="text-base font-bold font-display text-white">{platform.name}</h3>
                    <span className="text-[10px] font-mono text-gray-500">@{platform.handle}</span>
                  </div>
                </div>
                <a
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  <ExternalLink size={16} />
                </a>
              </div>

              {/* Stats Block */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <div className="text-2xl md:text-3xl font-mono font-bold text-white mb-1">
                    {platform.rating}
                  </div>
                  <div className="text-[10px] font-semibold uppercase font-display text-[#1D9E75]">
                    {platform.rank}
                  </div>
                  <div className="text-[10px] font-mono text-gray-500 mt-0.5">
                    Max: {platform.maxRating}
                  </div>
                </div>

                {/* Progress Circle */}
                <div className="relative w-14 h-14 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="26" stroke="#111b17" strokeWidth="4" fill="transparent" />
                    <motion.circle
                      cx="32" cy="32" r="26"
                      stroke="#1D9E75" strokeWidth="4" fill="transparent"
                      strokeDasharray={2 * Math.PI * 26}
                      initial={{ strokeDashoffset: 2 * Math.PI * 26 }}
                      whileInView={{ strokeDashoffset: 2 * Math.PI * 26 * (1 - platform.progress / 100) }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </svg>
                  <span className="absolute text-[9px] font-mono text-gray-300 font-bold leading-none text-center">
                    {platform.problemsCount}<br/><span className="text-[8px] text-gray-600">solved</span>
                  </span>
                </div>
              </div>

              <div className="text-[10px] text-gray-500 font-mono border-t border-white/5 pt-3">
                <span className="text-[#1D9E75]">//</span> Rated Matches: {platform.problemsCount}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GeeksForGeeks Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          {/* GFG Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-xl bg-[#2f8d46]/15 border border-[#2f8d46]/30">
              <GFGLogo size={22} />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display text-white">GeeksForGeeks</h3>
              <span className="text-[10px] font-mono text-gray-500">@deepaksinghiiita</span>
            </div>
            <a
              href="https://www.geeksforgeeks.org/user/deepaksinghiiita/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto text-gray-500 hover:text-[#2f8d46] transition-colors flex items-center gap-1.5 text-xs font-mono"
            >
              View Profile <ExternalLink size={13} />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Donut + breakdown */}
            <div className="lg:col-span-5 bg-[#0a0f0d]/40 backdrop-blur-md border border-white/5 p-6 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:border-[#2f8d46]/30 transition-colors duration-300">
              <div className="flex items-center gap-6">
                {/* SVG Donut */}
                <div className="relative flex-shrink-0 w-28 h-28">
                  <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    <circle cx="50" cy="50" r="38" stroke="#111b17" strokeWidth="12" fill="transparent" />
                    {(() => {
                      const r = 38;
                      const circumference = 2 * Math.PI * r;
                      let offset = 0;
                      return gfgDifficulty.filter(d => d.count > 0).map((d, i) => {
                        const dash = (d.pct / 100) * circumference;
                        const el = (
                          <motion.circle
                            key={i}
                            cx="50" cy="50" r={r}
                            fill="transparent"
                            stroke={d.color}
                            strokeWidth="12"
                            strokeDasharray={`${dash} ${circumference - dash}`}
                            strokeDashoffset={-offset}
                            initial={{ strokeDasharray: `0 ${circumference}` }}
                            whileInView={{ strokeDasharray: `${dash} ${circumference - dash}` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: i * 0.15 }}
                          />
                        );
                        offset += dash;
                        return el;
                      });
                    })()}
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xl font-black font-mono text-white">482</span>
                    <span className="text-[9px] font-mono text-gray-500">Solved</span>
                  </div>
                </div>

                {/* Difficulty bars */}
                <div className="flex-1 flex flex-col gap-2">
                  {gfgDifficulty.map((d, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: d.color }} />
                        <span className="text-[11px] font-mono text-gray-400">{d.label}</span>
                      </div>
                      <span className="text-[11px] font-mono font-bold text-white">{d.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Stats grid */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: <BarChart2 size={18} className="text-[#2f8d46]" />, label: 'Coding Score', value: '1658', sub: 'GFG Score' },
                { icon: <Trophy size={18} className="text-yellow-400" />,   label: 'Institute Rank', value: '#72',  sub: 'IIIT Allahabad' },
                { icon: <Flame size={18} className="text-orange-400" />,    label: 'Longest Streak', value: '146', sub: 'Days' },
                { icon: <Award size={18} className="text-[#1D9E75]" />,     label: 'POTDs Solved',  value: '164', sub: 'Prob of the Day' },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-[#0a0f0d]/40 backdrop-blur-md border border-white/5 p-5 rounded-2xl flex flex-col gap-3 hover:border-[#2f8d46]/30 hover:shadow-[0_0_20px_rgba(47,141,70,0.1)] transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#0d1f18] border border-white/5 flex items-center justify-center">
                    {s.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-black font-mono text-white">{s.value}</div>
                    <div className="text-xs font-semibold text-gray-300 mt-0.5">{s.label}</div>
                    <div className="text-[10px] font-mono text-gray-600">{s.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* DSA Topic Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-[#0a0f0d]/40 backdrop-blur-md border border-white/5 p-6 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
          >
            <h3 className="text-base font-bold font-display text-white flex items-center gap-2 mb-6">
              <BarChart2 size={18} className="text-[#1D9E75]" />
              DSA Topic Analysis
            </h3>
            <div className="flex flex-col gap-3">
              {dsaTopics.map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[11px] font-mono text-gray-400">{item.topic}</span>
                    <span className="text-[11px] font-mono font-bold text-white">{item.count}</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#111b17] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.05 }}
                      className="h-full rounded-full bg-[#1D9E75]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Activity Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 bg-[#0a0f0d]/40 backdrop-blur-md border border-white/5 p-6 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
          >
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-base font-bold font-display text-white flex items-center gap-2">
                  <Calendar size={18} className="text-[#1D9E75]" />
                  Activity Grid
                </h3>
                <p className="text-[10px] text-gray-500 font-mono mt-0.5">648 active days · Max Streak 103</p>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-gray-500">
                <span>Less</span>
                <div className="w-2.5 h-2.5 rounded-sm bg-[#1D9E75]/10" />
                <div className="w-2.5 h-2.5 rounded-sm bg-[#1D9E75]/30" />
                <div className="w-2.5 h-2.5 rounded-sm bg-[#1D9E75]/60" />
                <div className="w-2.5 h-2.5 rounded-sm bg-[#1D9E75]" />
                <span>More</span>
              </div>
            </div>
            <div className="overflow-x-auto no-scrollbar">
              <div className="flex flex-col gap-1 min-w-[400px]">
                {heatmap.map((row, rowIdx) => (
                  <div key={rowIdx} className="flex gap-1 justify-between">
                    {row.map((val, colIdx) => (
                      <div
                        key={colIdx}
                        className="w-3 h-3 rounded-sm transition-all duration-300 hover:scale-125"
                        style={{ backgroundColor: '#1D9E75', opacity: val }}
                        title={`Activity index: ${Math.round(val * 10)}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* GitHub Analytics Section */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <SiGithub size={24} className="text-[#1D9E75]" />
            <h3 className="text-xl font-bold font-display text-white">GitHub Analytics</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Stats Cards (Left) */}
            <div className="lg:col-span-8 flex flex-col gap-6 justify-between">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Stats Embed */}
                <div className="bg-[#05070a]/60 border border-white/5 p-4 rounded-xl flex items-center justify-center shadow-lg group hover:border-[#1D9E75]/20 transition-all duration-300">
                  <img
                    src="https://github-readme-stats.vercel.app/api?username=deepak27iiita&show_icons=true&theme=tokyonight&hide_border=true&include_all_commits=true&count_private=true&rank_icon=github&bg_color=0a0f0d&title_color=1D9E75&icon_color=1D9E75&text_color=c9d1d9&border_radius=10"
                    alt="Deepak's GitHub Stats"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
                {/* Languages Embed */}
                <div className="bg-[#05070a]/60 border border-white/5 p-4 rounded-xl flex items-center justify-center shadow-lg group hover:border-[#1D9E75]/20 transition-all duration-300">
                  <img
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=deepak27iiita&theme=tokyonight&hide_border=true&include_all_commits=true&count_private=true&layout=compact&langs_count=8&bg_color=0a0f0d&title_color=1D9E75&text_color=c9d1d9&border_radius=10"
                    alt="Deepak's Top Languages"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Contribution Activity Graph Embed */}
              <div className="bg-[#05070a]/60 border border-white/5 p-4 rounded-xl flex items-center justify-center shadow-lg group hover:border-[#1D9E75]/20 transition-all duration-300">
                <img
                  src="https://github-readme-activity-graph.vercel.app/graph?username=deepak27iiita&bg_color=0a0f0d&color=1D9E75&line=1D9E75&point=ffffff&area=true&area_color=1D9E7560&hide_border=true&custom_title=Deepak%27s%20Contribution%20Graph&radius=10"
                  alt="Deepak's Contribution Graph"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Streak Graph (Right) */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-6">
              <div className="bg-[#05070a]/60 border border-white/5 p-4 rounded-xl flex items-center justify-center shadow-lg group hover:border-[#1D9E75]/20 transition-all duration-300 h-full">
                <img
                  src="https://streak-stats.demolab.com?user=deepak27iiita&theme=tokyonight&hide_border=true&date_format=M%20j%5B%2C%20Y%5D&mode=weekly&background=0a0f0d&stroke=1D9E75&ring=1D9E75&fire=ff6b6b&currStreakLabel=1D9E75&sideLabels=1D9E75"
                  alt="Deepak's GitHub Streak"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
