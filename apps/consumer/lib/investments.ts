export type ProjectData = {
  id: string;
  name: string;
  category: string;
  summary: string;
  fundingGoal: number;
  currentFunding: number;
  deadline: string;
};

const investments: ProjectData[] = [
    {
      id: "1",
      name: "Community Garden",
      category: "Environment",
      summary: "A community garden project to promote local food production and biodiversity.",
      fundingGoal: 5000,
      currentFunding: 1200,
      deadline: "2025-12-31"
    },
    {
      id: "2",
      name: "Local Art Mural",
      category: "Arts & Culture",
      summary: "A mural project to beautify the neighborhood and support local artists.",
      fundingGoal: 3000,
      currentFunding: 800,
      deadline: "2025-11-30"
    },
    {
      id: "3",
      name: "Worker-Owned Bakery",
      category: "Economic Development",
      summary: "A worker-owned bakery to provide fair wages and healthy food options in the community.",
      fundingGoal: 10000,
      currentFunding: 6000,
      deadline: "2025-11-30"
    },
    {
      id: "4",
      name: "Community Health Clinic",
      category: "Health & Wellness",
      summary: "A community health clinic to provide accessible healthcare services to underserved populations.",
      fundingGoal: 15000,
      currentFunding: 9500,
      deadline: "2025-11-30"
    },
    {
      id: "5",
      name: "Youth Sports Program",
      category: "Youth Development",
      summary: "A sports program for underprivileged youth to promote health and teamwork.",
      fundingGoal: 7000,
      currentFunding: 2500,
      deadline: "2025-01-15"
    },
    {
      id: "6",
      name: "Tool Library",
      category: "Community Services",
      summary: "A community tool library to provide access to tools for DIY projects and repairs.",
      fundingGoal: 4000,
      currentFunding: 4600,
      deadline: "2024-10-31"
    }
  ];

export const getInvestments = () => {
  return investments;
};

export const getInvestment = (id: string) => {
  return investments.find(investment => investment.id === id);
};