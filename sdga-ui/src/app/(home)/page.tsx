import Link from 'next/link';
import { ArrowRight, Code2, Palette, Zap, Globe, Sparkles, BookOpen } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.5) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm font-medium">Saudi Digital Government Authority</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
              SDGA UI
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl">
              A beautiful, accessible, and customizable component library built for modern web applications
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <Link 
                href="/docs" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-xl shadow-lg"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <Link 
                href="/docs" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white rounded-lg font-semibold border border-neutral-200 dark:border-neutral-800 transition-all hover:shadow-lg"
              >
                <BookOpen className="w-5 h-5" />
                View Documentation
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 md:gap-12 pt-8 border-t border-neutral-200 dark:border-neutral-800 w-full max-w-2xl">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">50+</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Components</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-1">100%</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Accessible</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-pink-600 dark:text-pink-400 mb-1">RTL</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose SDGA UI?</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Built with modern technologies and best practices to help you create stunning interfaces faster
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="w-8 h-8" />}
              title="Lightning Fast"
              description="Optimized for performance with minimal bundle size and zero runtime overhead"
              gradient="from-yellow-500 to-orange-500"
            />
            
            <FeatureCard
              icon={<Palette className="w-8 h-8" />}
              title="Fully Customizable"
              description="Extensive theming system with CSS variables and SCSS support for complete control"
              gradient="from-pink-500 to-rose-500"
            />
            
            <FeatureCard
              icon={<Code2 className="w-8 h-8" />}
              title="Developer Friendly"
              description="Clean API, TypeScript support, and comprehensive documentation for seamless integration"
              gradient="from-blue-500 to-cyan-500"
            />
            
            <FeatureCard
              icon={<Globe className="w-8 h-8" />}
              title="RTL Support"
              description="Built-in right-to-left language support for Arabic and other RTL languages"
              gradient="from-green-500 to-emerald-500"
            />
            
            <FeatureCard
              icon={<Sparkles className="w-8 h-8" />}
              title="Modern Design"
              description="Contemporary UI patterns and components that follow the latest design trends"
              gradient="from-purple-500 to-indigo-500"
            />
            
            <FeatureCard
              icon={<BookOpen className="w-8 h-8" />}
              title="Rich Documentation"
              description="Detailed guides, examples, and interactive demos for every component"
              gradient="from-orange-500 to-red-500"
            />
          </div>
        </div>
      </section>

      {/* Code Preview Section */}
      <section className="py-24 px-4 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Simple to Use</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Get started in minutes with our intuitive component API
            </p>
          </div>
          
          <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
            <div className="bg-neutral-100 dark:bg-neutral-800 px-6 py-4 border-b border-neutral-200 dark:border-neutral-700 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-sm text-neutral-600 dark:text-neutral-400 font-mono">example.html</span>
            </div>
            <pre className="p-6 overflow-x-auto">
              <code className="text-sm font-mono text-neutral-800 dark:text-neutral-200">
{`<!-- Import SDGA UI -->
<link rel="stylesheet" href="sdga-ui.css">

<!-- Use components -->
<button class="btn btn-primary">
  Click me
</button>

<div class="alert alert-success">
  Success! Your changes have been saved.
</div>`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-linear-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 md:p-16 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Start creating beautiful, accessible interfaces with SDGA UI today
            </p>
            <Link 
              href="/docs" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-all hover:scale-105 shadow-lg"
            >
              Explore Documentation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ 
  icon, 
  title, 
  description, 
  gradient 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  gradient: string;
}) {
  return (
    <div className="group relative p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all hover:shadow-xl">
      <div className={`inline-flex p-3 rounded-xl bg-linear-to-br ${gradient} text-white mb-4 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
