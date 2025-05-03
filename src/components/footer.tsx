import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 md:px-8 md:py-8 w-full border-t bg-secondary dark:bg-secondary/20">
      <div className="container-max flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-center text-sm leading-loose text-muted-foreground">
          © {currentYear} Vatsal Makwana. All rights reserved.
        </p>
         <p className="text-center text-sm leading-loose text-muted-foreground flex items-center gap-1">
           Built with React and Next.js.
        </p>
      </div>
    </footer>
  );
}

