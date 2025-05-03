import AnimatedSection from './animated-section';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Cloud Sync – Cloud Storage Web App',
    description: 'Developed a secure, efficient, and user-friendly cloud storage application. Users can upload, manage, and access files from any device with an intuitive UI. Implemented real-time syncing and responsive design for all screen sizes.',
    techUsed: ['React.js', 'JavaScript', 'CSS', 'HTML'],
    imageUrl: '/storeIt.png', // Use local path from /public
    githubUrl: 'https://github.com/vatz2002/StoreIt', // Placeholder GitHub URL
    liveUrl: 'https://store-it-vatz02.vercel.app/sign-in', // Placeholder live URL, update with actual if available
    liveDemoName: 'Store-It',
    aiHint: 'cloud storage interface',
  },
  {
    title: 'Video Conferencing Platform',
    description: 'Built a real-time meeting and video conferencing web application with scalable architecture. Integrated authentication and meeting controls for smooth collaboration. Provided seamless UI/UX for hosting and joining secure video calls.',
    techUsed: ['React.js', 'Next.js', 'JavaScript', 'CSS', 'HTML'],
    imageUrl: '/yoom.png', // Use local path from /public
    githubUrl: 'https://github.com/vatz2002/Vatz_zoom', // Placeholder GitHub URL
    liveUrl: 'https://vatz-zoom.vercel.app/sign-in?redirect_url=https%3A%2F%2Fvatz-zoom.vercel.app%2F', // Placeholder live URL, update with actual if available
    liveDemoName: 'Vatz-Zoom',
    aiHint: 'video conference call screen',
  },
  {
    title: 'Movie & TV Show Rating Platform',
    description: 'Created an interactive platform for discovering and rating movies and series. Users can view reviews, submit ratings, and receive personalized suggestions. Focused on dynamic UI and user engagement features.',
    techUsed: ['React.js', 'JavaScript', 'CSS', 'HTML'],
    imageUrl: '/movie.png', // Use local path from /public (assuming this filename)
    githubUrl: 'https://github.com/vatz2002/movie', // Placeholder GitHub URL
    liveUrl: 'https://movie-vatz02.vercel.app/', // Placeholder live URL, update with actual if available
    liveDemoName: 'Movie-Vatz',
    aiHint: 'movie rating website',
  },
  // Removed previous placeholder projects
];

export default function ProjectsSection() {
  return (
    <AnimatedSection id="projects">
      <div className="container-max space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-0">
                <Image
                  src={project.imageUrl}
                  alt={`${project.title} screenshot`}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  data-ai-hint={project.aiHint}
                />
              </CardHeader>
              <CardContent className="flex-grow p-6 space-y-3">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
                {/* Optional: Display Tech Stack */}
                {/* <div className="flex flex-wrap gap-1 pt-2">
                  {project.techUsed.map(tech => (
                    <span key={tech} className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div> */}
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-end space-x-3">
                <Button asChild variant="outline" size="sm">
                  <Link href={project.githubUrl} target="_blank">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </Link>
                </Button>
                {project.liveUrl && (
                  <Button asChild variant="default" size="sm">
                    <Link href={project.liveUrl} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" /> {project.liveDemoName}
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
