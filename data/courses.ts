export type Course = {
  slug: string;
  title: string;
  image: string;
  author: string;
  rating: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  lessons: number;
  duration: string;
  comments: number;
  price: number;
  learners: string[];
  learnerCount: string;
  category: string;
};

const learners = [1, 2, 3, 4].map((n) => `/images/avatars/learner-${n}.png`);

const shared = {
  author: "purepearl studio",
  rating: 4.5,
  level: "Beginner",
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
  price: 25,
  learners,
  learnerCount: "26+",
} as const;

export const courses: Course[] = [
  { ...shared, slug: "learn-figma-from-basic", title: "Learn Figma from Basic", image: "/images/courses/learn-figma.jpg", category: "UI/UX Design" },
  { ...shared, slug: "build-digital-asset", title: "Build Digital Asset", image: "/images/courses/build-digital-asset.jpg", category: "Graphic Design" },
  { ...shared, slug: "the-power-of-big-data", title: "the Power of Big Data", image: "/images/courses/big-data.jpg", category: "Data Science" },
  { ...shared, slug: "balancing-productivity", title: "Balancing Productivity and Wellbeing", image: "/images/courses/productivity.jpg", category: "Productivity" },
  { ...shared, slug: "mastering-money-management", title: "Mastering Money Management", image: "/images/courses/money-management.jpg", category: "Marketing" },
  { ...shared, slug: "from-idea-to-startup-success", title: "From Idea to Startup Success", image: "/images/courses/idea-to-startup.jpg", category: "Freelance & Entrepreneurship" },
];

export const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

export const happyStudents = [1, 2, 3, 4, 5, 6, 7].map((n) => `/images/avatars/student-${n}.png`);
