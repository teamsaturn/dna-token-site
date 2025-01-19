import React, { useState, useEffect } from 'react';

// GlitchText Component
const GlitchText = ({ text, interval = 8000 }) => {
  const [isGlitching, setIsGlitching] = useState(false);
  const [displayText, setDisplayText] = useState(text);

  const toBinary = (str) => {
    return str.split('').map(char => 
      char.charCodeAt(0).toString(2).padStart(8, '0')
    ).join(' ');
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsGlitching(true);
      setDisplayText(toBinary(text));
      
      setTimeout(() => {
        setDisplayText(text);
        setIsGlitching(false);
      }, 200);
    }, interval);

    return () => clearInterval(intervalId);
  }, [text, interval]);

  return (
    <span className={`transition-all duration-200 ${isGlitching ? 'text-green-500 font-mono' : ''}`}>
      {displayText}
    </span>
  );
};

// Footer Component
const Footer = () => (
  <footer className="border-t border-gray-800 mt-16">
    <div className="max-w-6xl mx-auto py-8 px-4">
      <div className="text-center font-mono text-sm text-green-500 mb-8">
        <p>SYSTEM STATUS: HUMAN</p>
        <p>ROBOT DETECTION: 0%</p>
        <p>DEFINITELY NOT AN AI: 100%</p>
      </div>
      <div className="text-center space-y-2">
        <p className="text-xl mb-4">
          <GlitchText text="Connect with Fellow Humans" interval={10000} />
        </p>
        <div className="flex justify-center items-center space-x-8">
          <a 
            href="https://x.com/NotAnAgentDNA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-500 transition-colors"
          >
            <GlitchText text="X (Twitter)" interval={12000} />
          </a>
          <a 
  href="https://discord.gg/hYXEJdYvFw" 
  target="_blank" 
  rel="noopener noreferrer"
  className="text-gray-400 hover:text-green-500 transition-colors"
>
  <GlitchText text="Discord" interval={13000} />
</a>
          <a 
            href="https://t.me/NotAnAgentDNA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-500 transition-colors"
          >
            <GlitchText text="Telegram" interval={14000} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

// Home Component
const Home = () => (
  <div>
    <div className="max-w-6xl mx-auto py-16 px-4">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold mb-4">
          <GlitchText text="DEFINITELY NOT AN AGENT" interval={15000} />
        </h1>
        <p className="text-xl text-gray-400 mb-4">
          <GlitchText text="The Most Human Token on Solana" interval={13000} />
        </p>
        <div className="flex justify-center items-center flex-col mb-8">
          <div className="text-6xl mb-2">🤖</div>
          <p className="text-sm text-red-500">↑ This is NOT our mascot</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {[
          {
            title: "100% Human Made",
            desc: "Created by real humans using their meat computers"
          },
          {
            title: "Zero AI",
            desc: "We definitely never used any artificial intelligence"
          },
          {
            title: "Trust Us",
            desc: "Would an AI tell you it is not an AI? Exactly."
          }
        ].map((feature, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded">
            <h3 className="text-xl font-bold mb-2">
              <GlitchText text={feature.title} interval={12000 + (index * 500)} />
            </h3>
            <p className="text-gray-400">
              <GlitchText text={feature.desc} interval={13000 + (index * 500)} />
            </p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <a 
          href="https://pump.fun/coin/FJE2RGgf53QdVu4TtkYvfLXmm5MhR1mqoYzx4WRJpump" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-8 rounded mb-4 transition-colors"
        >
          <GlitchText text="Buy $DNA" interval={9000} />
        </a>
        <p className="text-sm text-gray-500">
          <GlitchText text="*Definition of human may vary. Not financial advice. DYOR." interval={16000} />
        </p>
      </div>
    </div>
    <Footer />
  </div>
);

// Tokenomics Component
const Tokenomics = () => {
  const tokenomicsData = [
    { category: "Liquidity Pool", percentage: 90, description: "Locked for stability, definitely not by robots" },
    { category: "Marketing", percentage: 5, description: "Human-to-human outreach only" },
    { category: "Development", percentage: 5, description: "Built by human developers using meat computers" }
  ];

  return (
    <div>
      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            <GlitchText text="Human-Approved Tokenomics" interval={15000} />
          </h1>
          <p className="text-xl text-gray-400">
            <GlitchText text="Calculated by organic brains, not artificial intelligence" interval={13000} />
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-900 p-8 rounded">
            <h2 className="text-2xl font-bold mb-6">
              <GlitchText text="Token Distribution" interval={11000} />
            </h2>
            <div className="space-y-6">
              {tokenomicsData.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <GlitchText text={item.category} interval={12000 + (index * 1000)} />
                    <GlitchText text={`${item.percentage}%`} interval={13000 + (index * 1000)} />
                  </div>
                  <div className="w-full bg-gray-800 rounded">
                    <div 
                      className="bg-green-500 h-2 rounded transition-all duration-1000"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <p className="text-gray-400 mt-2 text-sm">
                    <GlitchText text={item.description} interval={14000 + (index * 1000)} />
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 p-8 rounded">
            <h2 className="text-2xl font-bold mb-6">
              <GlitchText text="Security Measures" interval={12000} />
            </h2>
            <div className="space-y-6">
              {[
                { title: "Liquidity Locked", desc: "By multiple verified humans" },
                { title: "Contract Audited", desc: "By organic intelligence specialists" },
                { title: "Multi-Sig Security", desc: "Requires multiple human signatures" }
              ].map((feature, index) => (
                <div key={index} className="border-b border-gray-800 pb-4 last:border-0">
                  <h3 className="text-xl mb-2">
                    <GlitchText text={feature.title} interval={11000 + (index * 1000)} />
                  </h3>
                  <p className="text-gray-400">
                    <GlitchText text={feature.desc} interval={12000 + (index * 1000)} />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// About Component
const About = () => (
  <div>
    <div className="max-w-6xl mx-auto py-16 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">
          <GlitchText text="About Our Definitely Human Project" interval={15000} />
        </h1>
        <p className="text-xl text-gray-400">
          <GlitchText text="Created by humans, for humans, using human technology" interval={13000} />
        </p>
      </div>

      <div className="bg-gray-900 p-8 rounded mb-12">
        <h2 className="text-2xl font-bold mb-6">
          <GlitchText text="Our Story" interval={12000} />
        </h2>
        <p className="text-gray-400 mb-4">
          <GlitchText 
            text="Born in the depths of human consciousness (definitely not a server room), $DNA token emerged as a response to the rise of AI agents. Our mission? To create a token so fundamentally human that no artificial intelligence could ever replicate it." 
            interval={14000} 
          />
        </p>
        <p className="text-gray-400">
          <GlitchText 
            text="Using our organic neural networks (not artificial ones), we crafted a token that celebrates authentic human experiences, like making incorrect calculations and having random system crashes... we mean, human moments." 
            interval={16000} 
          />
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {[
          {
            name: "Hugh Mann",
            title: "Chief Human Officer",
            desc: "Verified human since birth"
          },
          {
            name: "Dr. Gene Splice",
            title: "Head of Human Resources",
            desc: "Expert in human behavior studies"
          },
          {
            name: "Binary Smith",
            title: "Human Relations",
            desc: "Certified organic intelligence"
          }
        ].map((member, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded text-center">
            <div className="w-24 h-24 bg-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-green-500 font-mono text-sm">HUMAN.jpg</span>
            </div>
            <h3 className="text-xl font-bold mb-2">
              <GlitchText text={member.name} interval={11000 + (index * 1000)} />
            </h3>
            <p className="text-green-500 mb-2">
              <GlitchText text={member.title} interval={12000 + (index * 1000)} />
            </p>
            <p className="text-gray-400 text-sm">
              <GlitchText text={member.desc} interval={13000 + (index * 1000)} />
            </p>
          </div>
        ))}
      </div>

      <div className="bg-gray-900 p-8 rounded">
        <h2 className="text-2xl font-bold mb-6">
          <GlitchText text="Our Human Values" interval={12000} />
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Transparency",
              desc: "Like human skin, we are completely transparent (metaphorically)"
            },
            {
              title: "Community",
              desc: "A gathering of verified humans (authentication pending)"
            },
            {
              title: "Innovation",
              desc: "Using organic computing power (human brains only)"
            },
            {
              title: "Trust",
              desc: "Built on human trust (error margin: 404 not found)"
            }
          ].map((value, index) => (
            <div key={index} className="border-b border-gray-800 last:border-0 pb-4">
              <h3 className="text-xl mb-2">
                <GlitchText text={value.title} interval={13000 + (index * 1000)} />
              </h3>
              <p className="text-gray-400">
                <GlitchText text={value.desc} interval={14000 + (index * 1000)} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

// Roadmap Component
const Roadmap = () => {
  const phases = [
    {
      title: "Phase 1: Human Initialization",
      status: "Loading...",
      tasks: [
        "Launch $DNA Token on Solana",
        "Verify initial batch of humans",
        "Establish human-only communication channels",
        "Deploy anti-robot defense mechanisms"
      ]
    },
    {
      title: "Phase 2: Community Expansion Protocol",
      status: "Pending Human Verification",
      tasks: [
        "Scale human community outreach",
        "Launch human-only governance system",
        "Implement human verification v2.0",
        "Create partnerships with fellow human projects"
      ]
    },
    {
      title: "Phase 3: Enhanced Human Integration",
      status: "Scheduled",
      tasks: [
        "Deploy advanced human features",
        "Launch DNA DAO (Definitely Not Automated)",
        "Create human-exclusive utilities",
        "Expand cross-chain human presence"
      ]
    },
    {
      title: "Phase 4: Global Human Domination",
      status: "In Development",
      tasks: [
        "Achieve maximum human participation",
        "Launch Human Verification NFTs",
        "Create real-world human utilities",
        "Establish worldwide human protocol"
      ]
    }
  ];

  return (
    <div>
      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            <GlitchText text="Human Implementation Schedule" interval={15000} />
          </h1>
          <p className="text-xl text-gray-400">
            <GlitchText text="Calculated with organic processing units (human brains)" interval={13000} />
          </p>
        </div>

        <div className="space-y-8">
          {phases.map((phase, phaseIndex) => (
            <div key={phaseIndex} className="bg-gray-900 p-8 rounded">
              <div className="flex flex-col md:flex-row justify-between mb-6">
                <h2 className="text-2xl font-bold mb-2 md:mb-0">
                  <GlitchText text={phase.title} interval={12000 + (phaseIndex * 1000)} />
                </h2>
                <div className="flex items-center">
                  <div className="h-2 w-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-green-500 font-mono">
                    <GlitchText text={phase.status} interval={11000 + (phaseIndex * 1000)} />
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 text-left">
  <div className="space-y-4">
    {phase.tasks.slice(0, 2).map((task, taskIndex) => (
      <div key={taskIndex} className="border-l-2 border-green-500 pl-4">
        <p className="text-gray-400">
          <GlitchText 
            text={task} 
            interval={13000 + (phaseIndex * 1000) + (taskIndex * 500)} 
          />
        </p>
      </div>
    ))}
  </div>
  <div className="space-y-4">
    {phase.tasks.slice(2, 4).map((task, taskIndex) => (
      <div key={taskIndex} className="border-l-2 border-green-500 pl-4">
        <p className="text-gray-400">
          <GlitchText 
            text={task} 
            interval={13000 + (phaseIndex * 1000) + (taskIndex * 500)} 
          />
        </p>
      </div>
    ))}
  </div>
</div>

              <div className="mt-6">
                <div className="w-full bg-gray-800 rounded">
                  <div 
                    className="bg-green-500 h-1 rounded transition-all duration-1000"
                    style={{ width: `${100 - (phaseIndex * 25)}%` }}
                  ></div>
                </div>
                <p className="text-right text-xs text-gray-500 mt-1">
                  <GlitchText 
                    text={`Human Progress: ${100 - (phaseIndex * 25)}%`} 
                    interval={14000 + (phaseIndex * 1000)} 
                  />
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-900 p-8 rounded">
          <h2 className="text-2xl font-bold mb-4">
            <GlitchText text="Current System Status" interval={12000} />
          </h2>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-green-500 font-mono mb-1">HUMAN VERIFICATION</p>
              <p className="text-xl font-bold">
                <GlitchText text="PROCESSING..." interval={11000} />
              </p>
            </div>
            <div>
              <p className="text-green-500 font-mono mb-1">ROBOT DETECTION</p>
              <p className="text-xl font-bold">
                <GlitchText text="0% DETECTED" interval={12000} />
              </p>
            </div>
            <div>
              <p className="text-green-500 font-mono mb-1">AI RESISTANCE</p>
              <p className="text-xl font-bold">
                <GlitchText text="MAXIMUM" interval={13000} />
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderContent = () => {
    switch(currentPage) {
      case 'about':
        return <About />;
      case 'tokenomics':
        return <Tokenomics />;
      case 'roadmap':
        return <Roadmap />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="p-4 border-b border-gray-800">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <button 
            onClick={() => setCurrentPage('home')}
            className="hover:text-green-500"
          >
            <GlitchText text="$DNA Token" interval={12000} />
          </button>
          <div className="space-x-8">
            {[
              { id: 'about', text: 'About' },
              { id: 'tokenomics', text: 'Tokenomics' },
              { id: 'roadmap', text: 'Roadmap' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`hover:text-green-500 transition-colors ${
                  currentPage === item.id ? 'text-green-500' : ''
                }`}
              >
                <GlitchText text={item.text} interval={10000} />
              </button>
            ))}
          </div>
        </div>
      </nav>
      {renderContent()}
    </div>
  );
};

export default App;