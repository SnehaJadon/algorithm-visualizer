import React, { useState } from "react";
import { Activity, Navigation2, Github, Linkedin } from "lucide-react";
import sortingImage from "../src/images/sorting-algo.png"; // Adjust path based on your project structure
import pathFindingImage from "../src/images/shortest-pathfinding.png"; // Adjust path based on your project structure

function App() {
  // Replace these with your actual Vercel deployment URLs
  const sortingVisualizerUrl = "https://sorting-visualizer-tau.vercel.app/";
  const pathfindingVisualizerUrl =
    "https://pathfinding-visualizer-xi.vercel.app/";

  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [rotation2, setRotation2] = useState({ x: 0, y: 0 });

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    setRotationFn: React.Dispatch<
      React.SetStateAction<{ x: number; y: number }>
    >
  ) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = -(x - centerX) / 20;

    setRotationFn({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = (
    setRotationFn: React.Dispatch<
      React.SetStateAction<{ x: number; y: number }>
    >
  ) => {
    setRotationFn({ x: 0, y: 0 });
  };

  const handleProjectClick = (url: string) => {
    // window.location.href = url;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      <div className="container mx-auto px-4 py-4">
        <header className="text-center mb-6">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 leading-[1.4] mb-0">
            Algorithm Visualizers
          </h1>
          <p className="text-xl text-gray-300">
            Interactive visualizations for sorting algorithms and pathfinding
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto perspective-1000 mt-12">
          {/* Sorting Visualizer Card */}
          <div
            onClick={() => handleProjectClick(sortingVisualizerUrl)}
            onMouseMove={(e) => handleMouseMove(e, setRotation)}
            onMouseLeave={() => handleMouseLeave(setRotation)}
            className="group relative overflow-hidden rounded-2xl bg-black/30 p-8 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-purple-500/20 transform-gpu preserve-3d"
            style={{
              transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10 transform translate-z-30">
              <div className="flex items-center gap-4 mb-6">
                <Activity className="w-12 h-12 text-purple-400 flex-shrink-0" />
                <h2 className="text-2xl font-bold">Sorting Visualizer</h2>
              </div>
              <div className="mb-6 overflow-hidden rounded-lg border border-white/10">
                <img
                  src={sortingImage}
                  alt="Sorting Visualizer Preview"
                  className="w-full h-48 object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-300 mb-6">
                Watch sorting algorithms like Bubble Sort, Merge
                Sort etc. in action with real-time animations. Built with ReactJS &
                TailwindCSS, this tool helps you understand sorting efficiency
                interactively!
              </p>
              <div className="inline-flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                <span className="mr-2">Watch Sorting Visualizer</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </div>
          </div>

          {/* Pathfinding Visualizer Card */}
          <div
            onClick={() => handleProjectClick(pathfindingVisualizerUrl)}
            onMouseMove={(e) => handleMouseMove(e, setRotation2)}
            onMouseLeave={() => handleMouseLeave(setRotation2)}
            className="group relative overflow-hidden rounded-2xl bg-black/30 p-8 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-blue-500/20 transform-gpu preserve-3d"
            style={{
              transform: `rotateX(${rotation2.x}deg) rotateY(${rotation2.y}deg)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10 transform translate-z-30">
              <div className="flex items-center gap-4 mb-6">
                <Navigation2 className="w-12 h-12 text-blue-400 flex-shrink-0" />
                <h2 className="text-2xl font-bold">Pathfinding Visualizer</h2>
              </div>
              <div className="mb-6 overflow-hidden rounded-lg border border-white/10">
                <img
                  src={pathFindingImage}
                  alt="Pathfinding Visualizer Preview"
                  className="w-full h-48 object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-300 mb-6">
                Visualize how Dijkstra’s Algorithm finds the shortest path in
                real-time with interactive animations. Built with ReactJS &
                TailwindCSS, customize mazes and obstacles for an engaging
                learning experience!
              </p>
              <div className="inline-flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                <span className="mr-2">Watch Pathfinding Visualizer</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </div>
          </div>
        </div>

        <footer className="text-center mt-8">
          <div className="flex justify-center items-center gap-4">
            <p className="text-lg">
              Built by{" "}
              <span className="font-bold text-xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text animate-gradient px-4 py-1 rounded-lg bg-gray-800/50 border border-gray-700">
                SNEHA JADON
              </span>
            </p>
            <a
              href="https://github.com/SnehaJadon/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/sneha-jadon-8a1220210/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
