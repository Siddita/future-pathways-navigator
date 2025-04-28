
export type CareerPath = {
  id: string;
  title: string;
  matchPercentage: number;
  description: string;
  skills: string[];
  salary: {
    entry: string;
    mid: string;
    senior: string;
  };
  growthPotential: string;
};

export type SkillGap = {
  skillName: string;
  currentLevel: number; // 0-100
  requiredLevel: number; // 0-100
  resources: {
    title: string;
    url: string;
    type: 'course' | 'book' | 'video' | 'community';
  }[];
};

export type Roadmap = {
  '30days': {
    title: string;
    tasks: string[];
  };
  '60days': {
    title: string;
    tasks: string[];
  };
  '90days': {
    title: string;
    tasks: string[];
  };
  '180days': {
    title: string;
    tasks: string[];
  };
};

export type Resource = {
  name: string;
  url: string;
  description: string;
  type: 'course' | 'book' | 'video' | 'community';
};

export type AlternativeOption = {
  title: string;
  description: string;
  matchPercentage: number;
};

export type CareerRecommendation = {
  careerPaths: CareerPath[];
  skillsGap: SkillGap[];
  roadmap: Roadmap;
  resources: Resource[];
  alternativeOptions: AlternativeOption[];
  motivationalQuote: string;
};

export const generateMockRecommendation = (): CareerRecommendation => {
  return {
    careerPaths: [
      {
        id: '1',
        title: 'Data Scientist',
        matchPercentage: 87,
        description: 'Analyze complex datasets to extract insights and trends that help organizations make better decisions.',
        skills: ['Python', 'R', 'Machine Learning', 'Statistics', 'SQL', 'Data Visualization', 'Big Data'],
        salary: {
          entry: '$80,000',
          mid: '$115,000',
          senior: '$160,000+',
        },
        growthPotential: 'High growth potential with 22% job growth forecast over the next decade. Advancement paths include Lead Data Scientist, Data Science Manager, and Chief Data Officer.',
      },
      {
        id: '2',
        title: 'UX/UI Designer',
        matchPercentage: 82,
        description: 'Design user-friendly digital experiences by understanding user behavior and creating intuitive interfaces.',
        skills: ['User Research', 'Wireframing', 'Prototyping', 'Figma', 'Adobe XD', 'UI Design', 'Usability Testing'],
        salary: {
          entry: '$65,000',
          mid: '$95,000',
          senior: '$130,000+',
        },
        growthPotential: 'Strong demand across all industries with 15% projected job growth. Can progress to Senior Designer, UX Director, or UX Strategist roles.',
      },
      {
        id: '3',
        title: 'Full Stack Developer',
        matchPercentage: 78,
        description: 'Build complete web applications by working on both client-side and server-side technologies.',
        skills: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'HTML/CSS', 'REST APIs'],
        salary: {
          entry: '$70,000',
          mid: '$100,000',
          senior: '$140,000+',
        },
        growthPotential: 'Excellent prospects with 25% growth expected. Career progression includes Senior Developer, Lead Engineer, and Software Architect positions.',
      },
    ],
    skillsGap: [
      {
        skillName: 'Python',
        currentLevel: 40,
        requiredLevel: 80,
        resources: [
          {
            title: 'Python for Data Science and Machine Learning Bootcamp',
            url: 'https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/',
            type: 'course',
          },
          {
            title: 'Python Data Science Handbook',
            url: 'https://jakevdp.github.io/PythonDataScienceHandbook/',
            type: 'book',
          },
        ],
      },
      {
        skillName: 'Machine Learning',
        currentLevel: 20,
        requiredLevel: 75,
        resources: [
          {
            title: 'Machine Learning by Stanford (Andrew Ng)',
            url: 'https://www.coursera.org/learn/machine-learning',
            type: 'course',
          },
          {
            title: 'Hands-On Machine Learning with Scikit-Learn and TensorFlow',
            url: 'https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/',
            type: 'book',
          },
        ],
      },
      {
        skillName: 'SQL',
        currentLevel: 50,
        requiredLevel: 70,
        resources: [
          {
            title: 'SQL for Data Science',
            url: 'https://www.coursera.org/learn/sql-for-data-science',
            type: 'course',
          },
          {
            title: 'SQL Practice on HackerRank',
            url: 'https://www.hackerrank.com/domains/sql',
            type: 'community',
          },
        ],
      },
    ],
    roadmap: {
      '30days': {
        title: 'Build Foundations',
        tasks: [
          'Complete basic Python course focusing on data structures',
          'Set up development environment for data science',
          'Join 2 online communities related to data science',
          'Complete 3 small data analysis projects',
        ],
      },
      '60days': {
        title: 'Develop Core Skills',
        tasks: [
          'Complete SQL fundamentals course',
          'Start machine learning basics course',
          'Build your first predictive model',
          'Create a data visualization portfolio',
        ],
      },
      '90days': {
        title: 'Specialize and Network',
        tasks: [
          'Complete advanced Python for data science course',
          'Start contributing to open-source data projects',
          'Attend 2 industry meetups or virtual events',
          'Begin interview preparation with practice problems',
        ],
      },
      '180days': {
        title: 'Professional Launch',
        tasks: [
          'Complete a capstone project solving a real business problem',
          'Finalize professional portfolio with 3-5 substantial projects',
          'Start applying for entry-level data science positions',
          'Prepare for and schedule certification exams',
        ],
      },
    },
    resources: [
      {
        name: 'Data Science Roadmap 2023',
        url: 'https://www.example.com/data-science-roadmap',
        description: 'A comprehensive guide to becoming a data scientist from scratch',
        type: 'course',
      },
      {
        name: 'Kaggle - Data Science Community',
        url: 'https://www.kaggle.com',
        description: 'Practice with real datasets and competitions',
        type: 'community',
      },
      {
        name: 'Python Data Science Handbook',
        url: 'https://jakevdp.github.io/PythonDataScienceHandbook/',
        description: 'Comprehensive guide covering essential tools for data science',
        type: 'book',
      },
      {
        name: 'StatQuest with Josh Starmer',
        url: 'https://www.youtube.com/c/joshstarmer',
        description: 'Clear explanations of complex statistics and machine learning concepts',
        type: 'video',
      },
    ],
    alternativeOptions: [
      {
        title: 'Machine Learning Engineer',
        description: 'Focus more on production systems and deploying ML models at scale',
        matchPercentage: 75,
      },
      {
        title: 'Data Engineer',
        description: 'Build data pipelines and infrastructure to support analytics',
        matchPercentage: 70,
      },
      {
        title: 'BI Analyst',
        description: 'Create dashboards and visualizations for business insights',
        matchPercentage: 65,
      },
    ],
    motivationalQuote: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
  };
};
