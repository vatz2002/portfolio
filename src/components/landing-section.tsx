import Link from 'next/link';
import { Button } from './ui/button';
import { Github, Linkedin, Download } from 'lucide-react';
import AnimatedSection from './animated-section';
import Image from 'next/image';

export default function LandingSection() {
  return (
    <AnimatedSection id="home" className="min-h-[calc(100vh-56px)] flex items-center bg-gradient-to-b from-background to-secondary dark:from-background dark:to-secondary/20">
      <div className="container-max grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Vatsal Makwana
          </h1>
          {/* Removed React Enthusiast subtitle */}
          <p className="text-lg md:text-xl text-primary font-medium">
            Fullstack Developer
          </p>
          <p className="text-muted-foreground max-w-xl mx-auto md:mx-0">
            A passionate full-stack developer with a strong foundation in both frontend and backend technologies, eager to build robust, scalable, and user-friendly web applications while continuously learning and contributing to impactful projects.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 pt-4">
            <Button asChild variant="outline" size="icon">
              {/* Updated GitHub link */}
              <Link href="https://github.com/vatz2002" target="_blank" aria-label="GitHub Profile">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="icon">
              {/* Updated LinkedIn link */}
              <Link href="https://www.linkedin.com/in/vatsalmakwana02/" target="_blank" aria-label="LinkedIn Profile">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild>
              {/* Ensure you have a resume PDF at this path */}
              <Link href="/vatsal_makwana_resume.pdf" download="VatsalMakwana_Resume.pdf">
                <Download className="mr-2 h-4 w-4" /> Resume
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          {/* Updated profile picture reference. Ensure the image file 'profile-picture.jpg' exists in the /public folder */}
          <Image
            src="/profile-picture.jpeg" // Assumes the new image is saved as 'profile-picture.jpg' in the public folder
            alt="Profile picture of Vatsal makwana" // Alt text remains appropriate
            width={400}
            height={400}
            className="rounded-full shadow-lg border-4 border-primary/20 object-cover" // Added object-cover
            priority // Load image eagerly as it's above the fold
            data-ai-hint="profile portrait man" // Added AI hint
          />
        </div>
      </div>
    </AnimatedSection>
  );
}
