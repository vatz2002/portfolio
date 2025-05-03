import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-max flex h-14 items-center">
        {/* Logo on the left */}
        <div className="flex items-center">
          <Link href="#home" className="flex items-center space-x-2">
            {/* Changed logo text */}
            <span className="font-bold">Vatz02</span>
          </Link>
        </div>

        {/* Mobile Menu Trigger (remains on the left for mobile) */}
        <div className="md:hidden flex items-center ml-auto">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0 w-[250px]"> {/* Adjusted width */}
              <Link href="#home" className="flex items-center mb-6 ml-4">
                {/* Changed logo text */}
                <span className="font-bold">vatz02</span>
              </Link>
              <div className="flex flex-col space-y-4 ml-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    // Enhanced hover effect for highlight on mobile
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Navigation and Theme Toggle (on the right) */}
        <div className="hidden md:flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                // Enhanced hover effect for highlight
                className="transition-colors hover:text-foreground text-foreground/60"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>

        {/* Mobile Theme Toggle (adjust position if needed, currently shown via Mobile Menu) */}
        <div className="md:hidden ml-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
