
"use client";

import React, { useState } from 'react';
import AnimatedSection from './animated-section';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, LayoutGrid, Palette, GitBranch, Github, Server, Cloud, Settings, Smartphone, ClipboardList, Plug } from 'lucide-react'; // Added more icons
import { motion } from 'framer-motion';

// Simple SVG icons for technologies not in Lucide
const HtmlIcon = () => <span className="font-bold text-orange-500 text-3xl">HTML</span>;
const CssIcon = () => <span className="font-bold text-blue-500 text-3xl">CSS</span>;
const JsIcon = () => <span className="font-bold text-yellow-500 text-3xl">JS</span>;
const TsIcon = () => <span className="font-bold text-blue-600 text-3xl">TS</span>;
const ReactIcon = () => <span className="font-bold text-cyan-400 text-3xl">React</span>;
const NextjsIcon = () => <span className="font-bold text-foreground text-3xl">Next.js</span>;
const TailwindIcon = () => <span className="font-bold text-teal-500 text-3xl">Tailwind</span>;
// Add more icons as needed or replace with actual SVGs/logos

type SkillCategory = 'Frontend' | 'Styling' | 'Framework/Library' | 'Backend' | 'Version Control' | 'DevOps' | 'Other';

interface Skill {
  name: string;
  category: SkillCategory;
  icon: React.ReactNode;
}

// Updated skills list based on user request
const skills: Skill[] = [
  { name: 'HTML5', category: 'Frontend', icon: <HtmlIcon /> },
  { name: 'CSS', category: 'Styling', icon: <CssIcon /> },
  { name: 'JavaScript', category: 'Frontend', icon: <JsIcon /> },
  { name: 'TypeScript', category: 'Frontend', icon: <TsIcon />},
  { name: 'React.js', category: 'Framework/Library', icon: <ReactIcon /> },
  { name: 'Next.js', category: 'Framework/Library', icon: <NextjsIcon /> },
  { name: 'Tailwind CSS', category: 'Styling', icon: <TailwindIcon /> },
  { name: 'Node.js', category: 'Backend', icon: <Server size={36} className="text-green-500" /> },
  { name: 'REST APIs', category: 'Backend', icon: <Plug size={36} className="text-gray-400" /> },
  { name: 'Git', category: 'Version Control', icon: <GitBranch size={36} className="text-orange-600" /> },
  { name: 'GitHub', category: 'Version Control', icon: <Github size={36} /> },
  { name: 'Responsive Web Design', category: 'Other', icon: <Smartphone size={36} className="text-purple-500" /> },
  { name: 'Project Management Basics', category: 'Other', icon: <ClipboardList size={36} className="text-yellow-600" /> },
  { name: 'Web Deployment', category: 'DevOps', icon: <Cloud size={36} className="text-blue-500" /> },
];

// Updated categories list based on the skills
const categories: { name: SkillCategory | 'All', icon: React.ReactNode }[] = [
  { name: 'All', icon: <LayoutGrid className="mr-2 h-4 w-4" /> },
  { name: 'Frontend', icon: <Code className="mr-2 h-4 w-4" /> },
  { name: 'Styling', icon: <Palette className="mr-2 h-4 w-4" /> },
  { name: 'Framework/Library', icon: <Code className="mr-2 h-4 w-4" /> }, // Reusing Code icon
  { name: 'Backend', icon: <Server className="mr-2 h-4 w-4" /> },
  { name: 'DevOps', icon: <Cloud className="mr-2 h-4 w-4" /> },
  { name: 'Version Control', icon: <GitBranch className="mr-2 h-4 w-4" /> },
  { name: 'Other', icon: <Settings className="mr-2 h-4 w-4" /> },
];

const SkillCard = ({ skill }: { skill: Skill }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
  >
    <Card className="bg-card/80 dark:bg-card/50 backdrop-blur-sm hover:bg-card/95 dark:hover:bg-card/70 transition-colors duration-200 shadow-md hover:shadow-lg h-full">
      <CardContent className="flex flex-col items-center justify-center p-6 aspect-square">
        <div className="mb-4 h-10 flex items-center justify-center">{skill.icon}</div>
        <p className="text-sm font-medium text-center text-foreground">{skill.name}</p>
      </CardContent>
    </Card>
  </motion.div>
);

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | 'All'>('All');

  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <AnimatedSection id="skills" className="bg-background dark:bg-background/90">
      <div className="container-max space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center">My Tech Stack</h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant={selectedCategory === category.name ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category.name)}
              className={`transition-all duration-200 ${selectedCategory === category.name ? 'bg-primary text-primary-foreground' : 'bg-secondary/50 text-secondary-foreground hover:bg-secondary'}`}
            >
              {category.icon}
              {category.name}
            </Button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
        {filteredSkills.length === 0 && (
           <p className="text-center text-muted-foreground mt-8">No skills found in this category.</p>
        )}
      </div>
    </AnimatedSection>
  );
}
