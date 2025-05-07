import AnimatedSection from './animated-section';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { GraduationCap, Code } from 'lucide-react'; // Removed Sparkles icon

const techStack = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS', 'Next.js', 'Git', 'GitHub', 'Python', 'Django', 'Flask', 'MongoDB'];

export default function AboutSection() {
  return (
    <AnimatedSection id="about" className="bg-secondary dark:bg-secondary/20">
      <div className="container-max space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="text-primary" />
                Bio & Academics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Hi, I'm Vatsal Makwana, a recent graduate with a Bachelor's degree in Computer Engineering from Kadi Sarva Vishwavidyalaya. I discovered my passion for web development during my studies and have been honing my skills ever since.
              </p>
              <p>
                I'm driven by the desire to create engaging and user-friendly interfaces. I enjoy tackling challenges, learning new technologies, and collaborating with others to bring ideas to life. Currently seeking opportunities to kickstart my career as a frontend developer.
              </p>
              <p>
                <strong>Academic Background:</strong> Computer Engineering, Kadi Sarva Vishwavidyalaya, 2025
              </p>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="text-primary" />
                  Technologies I Know
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span key={tech} className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </CardContent>
            </Card>

            {/* Removed the Fun Facts / Tech I Love Card */}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
