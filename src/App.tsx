// App.tsx
import React from 'react';
import PuzzleView from './Puzzle.tsx';
import CaseStudyExplorer from './CaseStudy.tsx';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              The Landscape of Moral Progress
            </h1>
            <p className="text-gray-600 max-w-2xl text-center">
              Exploring how different theoretical perspectives complement each other
              to explain moral change and progress in society
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Puzzle View Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Interactive Theory Explorer
            </h2>
            <p className="text-gray-600 text-center max-w-2xl">
              Click on each puzzle piece to explore different perspectives on moral progress
              and discover how they work together to create a complete picture.
            </p>
          </div>

          <div className="h-[600px] relative">
            <PuzzleView />
          </div>
        </div>

        {/* Case Study Section */}
        <CaseStudyExplorer />
      </main>

      <footer className="mt-12 py-6 bg-white border-t">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600">
            Created by Nandan Srikrishna • COGSCI 302 Project
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;