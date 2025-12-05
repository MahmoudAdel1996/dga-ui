import { Link } from 'waku';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl w-full text-center">
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-fd-primary/10 border border-fd-primary/30">
            <span className="text-sm font-medium text-fd-primary">SDGA UI Library</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-[#FF0099] via-[#8E2DE2] to-cyan-500 bg-clip-text text-transparent">
            Modern Arabic Design System
          </h1>
          
          <p className="text-xl text-fd-muted-foreground mb-8 leading-relaxed">
            Beautiful, accessible components built with SDGA style. Implemented on top of Bootstrap with full RTL support and Saudi design standards.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/docs"
              className="px-8 py-3 rounded-lg bg-fd-primary text-fd-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              View Components
            </Link>
            <a
              href="https://github.com/MahmoudAdel1996/dga-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg bg-fd-secondary text-fd-secondary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              View on GitHub
            </a>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              icon="🎨"
              title="SDGA Style"
              description="Designed according to Saudi Digital Government Authority guidelines and standards"
            />
            <FeatureCard
              icon="📦"
              title="Easy Installation"
              description="One npm package, zero configuration needed. Works out of the box"
            />
            <FeatureCard
              icon="🌍"
              title="Full RTL Support"
              description="Complete right-to-left support for Arabic and other RTL languages"
            />
          </div>
        </div>
      </section>

      {/* Built On Bootstrap */}
      <section className="px-4 py-20 bg-fd-secondary/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Built on Bootstrap Foundation</h2>
            <p className="text-lg text-fd-muted-foreground">Leveraging the power and reliability of Bootstrap 5 with SDGA customizations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg border border-fd-border bg-fd-background">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <span className="text-2xl">⚡</span> Built On Bootstrap
              </h3>
              <ul className="space-y-2 text-fd-muted-foreground">
                <li>✓ Bootstrap 5.3.8 as foundation</li>
                <li>✓ Customized SDGA theme and colors</li>
                <li>✓ All Bootstrap components included</li>
                <li>✓ Familiar Bootstrap API</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg border border-fd-border bg-fd-background">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <span className="text-2xl">🎯</span> SDGA Customizations
              </h3>
              <ul className="space-y-2 text-fd-muted-foreground">
                <li>✓ Arabic typography optimization</li>
                <li>✓ Saudi color palette</li>
                <li>✓ Cultural design patterns</li>
                <li>✓ Government brand compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Easy Installation</h2>
            <p className="text-lg text-fd-muted-foreground">Get started in seconds with simple npm installation</p>
          </div>

          <div className="p-6 rounded-lg border border-fd-border bg-fd-background">
            <div className="mb-4">
              <p className="text-sm text-fd-muted-foreground mb-2">Install via npm</p>
              <div className="bg-fd-secondary/50 p-4 rounded text-sm font-mono">
                npm install sdga-ui
              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-sm text-fd-muted-foreground mb-2">Import CSS</p>
              <div className="bg-fd-secondary/50 p-4 rounded text-sm font-mono">
                import 'sdga-ui/css/dga-ui.css';
              </div>
            </div>

            <div>
              <p className="text-sm text-fd-muted-foreground mb-2">Start using components</p>
              <div className="bg-fd-secondary/50 p-4 rounded text-sm font-mono">
                &lt;div class="alert alert-success"&gt;<br />
                &nbsp;&nbsp;Your content here<br />
                &lt;/div&gt;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RTL Support Section */}
      <section className="px-4 py-20 bg-fd-primary/5 border-y border-fd-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Full RTL Support</h2>
            <p className="text-lg text-fd-muted-foreground">Complete right-to-left language support out of the box</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg border border-fd-border bg-fd-background">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-semibold mb-2">Responsive RTL</h3>
              <p className="text-sm text-fd-muted-foreground">Layouts automatically adapt for RTL languages with proper text direction</p>
            </div>

            <div className="p-6 rounded-lg border border-fd-border bg-fd-background">
              <div className="text-3xl mb-3">🔤</div>
              <h3 className="font-semibold mb-2">Arabic Typography</h3>
              <p className="text-sm text-fd-muted-foreground">Optimized fonts and typography for Arabic text rendering</p>
            </div>

            <div className="p-6 rounded-lg border border-fd-border bg-fd-background">
              <div className="text-3xl mb-3">⚙️</div>
              <h3 className="font-semibold mb-2">Easy Configuration</h3>
              <p className="text-sm text-fd-muted-foreground">Set dir="rtl" on html element and everything works perfectly</p>
            </div>
          </div>

          <div className="mt-12 p-6 rounded-lg border border-fd-border bg-fd-background">
            <p className="text-sm text-fd-muted-foreground mb-3">Enable RTL with simple HTML attribute:</p>
            <div className="bg-fd-secondary/50 p-4 rounded text-sm font-mono">
              &lt;html dir="rtl"&gt; ... &lt;/html&gt;
            </div>
          </div>
        </div>
      </section>

      {/* Components Section */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Rich Component Library</h2>
            <p className="text-lg text-fd-muted-foreground">Everything you need to build Saudi government websites</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Alerts',
              'Buttons',
              'Cards',
              'Forms',
              'Tables',
              'Navigation',
              'Modals',
              'Toasts',
              'Badges',
              'Breadcrumbs',
              'Dropdowns',
              'Pagination',
            ].map((component) => (
              <Link
                key={component}
                to={`/docs/components/${component.toLowerCase()}`}
                className="p-4 rounded-lg border border-fd-border bg-fd-background hover:bg-fd-secondary/50 transition-colors text-center"
              >
                <span className="font-medium text-fd-foreground">{component}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 bg-fd-primary/5 border-y border-fd-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build?</h2>
          <p className="text-lg text-fd-muted-foreground mb-8">
            Explore our complete component library and documentation
          </p>
          <Link
            to="/docs"
            className="inline-block px-8 py-3 rounded-lg bg-fd-primary text-fd-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            View Documentation
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="p-6 rounded-lg border border-fd-border bg-fd-background hover:bg-fd-secondary/50 transition-colors">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-fd-muted-foreground">{description}</p>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  };
};
