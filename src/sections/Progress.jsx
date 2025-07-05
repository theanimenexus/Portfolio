import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

const Progress = () => {
  const [leetcodeData, setLeetcodeData] = useState(null);
  const [hackerrankData, setHackerrankData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch LeetCode data
  const fetchLeetcodeData = async () => {
    try {
      // You'll need to replace 'your-username' with your actual LeetCode username
      const response = await fetch('https://leetcode-stats-api.herokuapp.com/karthik007s');
      if (response.ok) {
        const data = await response.json();
        setLeetcodeData(data);
      } else {
        throw new Error('Failed to fetch LeetCode data');
      }
    } catch (err) {
      console.error('Error fetching LeetCode data:', err);
      // Fallback to static data if API fails
      setLeetcodeData({
        totalSolved: 311,
        easySolved: 94,
        mediumSolved: 159,
        hardSolved: 58,
        acceptanceRate: 85.5,
        ranking: 318000,
        contributionPoints: 1500,
        reputation: 100
      });
    }
  };

  // Fetch HackerRank data
  const fetchHackerrankData = async () => {
    try {
      // You'll need to replace 'your-username' with your actual HackerRank username
      const response = await fetch('https://www.hackerrank.com/rest/contests/master/hackers/karthik816ml/profile');
      if (response.ok) {
        const data = await response.json();
        setHackerrankData(data);
      } else {
        throw new Error('Failed to fetch HackerRank data');
      }
    } catch (err) {
      console.error('Error fetching HackerRank data:', err);
      // Fallback to static data if API fails
      setHackerrankData({
        totalSolved: 120,
        easySolved: 70,
        mediumSolved: 40,
        hardSolved: 10,
        rank: "Top 10%",
        score: 850
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await Promise.all([
          fetchLeetcodeData(),
          fetchHackerrankData()
        ]);
      } catch (err) {
        setError('Failed to fetch progress data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const stats = [
    {
      platform: "LeetCode",
      totalSolved: leetcodeData?.totalSolved || 311,
      easy: leetcodeData?.easySolved || 94,
      medium: leetcodeData?.mediumSolved || 159,
      hard: leetcodeData?.hardSolved || 58,
      streak: 45, // This might need a different API endpoint
      rank: leetcodeData?.ranking || 318000,
      acceptanceRate: leetcodeData?.acceptanceRate || 85.5,
      color: "from-orange-500 to-red-500",
      loading: !leetcodeData
    },
    {
      platform: "HackerRank",
      totalSolved: hackerrankData?.totalSolved || 120,
      easy: hackerrankData?.easySolved || 70,
      medium: hackerrankData?.mediumSolved || 40,
      hard: hackerrankData?.hardSolved || 10,
      streak: 30, // This might need a different API endpoint
      rank: hackerrankData?.rank || "Top 10%",
      score: hackerrankData?.score || 850,
      color: "from-green-500 to-emerald-500",
      loading: !hackerrankData
    },
    {
      platform: "CodeForces",
      totalSolved: 80,
      easy: 50,
      medium: 25,
      hard: 5,
      streak: 20,
      rank: "Top 20%",
      color: "from-blue-500 to-cyan-500",
      loading: false
    }
  ];

  const achievements = [
    { name: "Problem Solver", description: "Solved 100+ problems", icon: "🏆" },
    { name: "Consistency King", description: "30+ day streak", icon: "🔥" },
    { name: "Algorithm Master", description: "Mastered 10+ algorithms", icon: "⚡" },
    { name: "Data Structure Expert", description: "Expert in all DS", icon: "🧠" }
  ];

  const recentProblems = [
    { name: "Two Sum", difficulty: "Easy", platform: "LeetCode", date: "2024-01-15" },
    { name: "Binary Tree Inorder", difficulty: "Medium", platform: "LeetCode", date: "2024-01-14" },
    { name: "Valid Parentheses", difficulty: "Easy", platform: "HackerRank", date: "2024-01-13" },
    { name: "Merge Sort", difficulty: "Medium", platform: "CodeForces", date: "2024-01-12" }
  ];

  if (loading) {
    return (
      <section id="progress" className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center min-h-[50vh]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p className="text-gray-400">Loading your progress...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="progress" className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center min-h-[50vh]">
            <div className="text-center">
              <p className="text-red-400 mb-4">{error}</p>
              <button 
                onClick={() => window.location.reload()} 
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Retry
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="progress" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Coding Progress
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Track my journey through competitive programming and algorithmic challenges
          </p>
        </motion.div>

        {/* Platform Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((platform, index) => (
            <motion.div
              key={platform.platform}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${platform.color} flex items-center justify-center mb-4 mx-auto`}>
                <span className="text-2xl font-bold text-white">
                  {platform.platform.charAt(0)}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{platform.platform}</h3>
              
              {platform.loading ? (
                <div className="animate-pulse space-y-3">
                  <div className="h-4 bg-gray-700 rounded"></div>
                  <div className="h-4 bg-gray-700 rounded"></div>
                  <div className="h-4 bg-gray-700 rounded"></div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Total Solved:</span>
                    <span className="text-white font-semibold">{platform.totalSolved}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-400">Easy:</span>
                    <span className="text-white">{platform.easy}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-yellow-400">Medium:</span>
                    <span className="text-white">{platform.medium}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-red-400">Hard:</span>
                    <span className="text-white">{platform.hard}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-400">Streak:</span>
                    <span className="text-white">{platform.streak} days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-purple-400">Rank:</span>
                    <span className="text-white">{platform.rank}</span>
                  </div>
                  {platform.acceptanceRate && (
                    <div className="flex justify-between">
                      <span className="text-cyan-400">Acceptance:</span>
                      <span className="text-white">{platform.acceptanceRate}%</span>
                    </div>
                  )}
                  {platform.score && (
                    <div className="flex justify-between">
                      <span className="text-pink-400">Score:</span>
                      <span className="text-white">{platform.score}</span>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg p-6 text-center border border-gray-600 hover:border-yellow-500 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{achievement.name}</h4>
                <p className="text-gray-300 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Problems */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">Recent Problems</h3>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <div className="space-y-4">
              {recentProblems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg border border-gray-600 hover:border-gray-500 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-3 h-3 rounded-full ${
                      problem.difficulty === 'Easy' ? 'bg-green-500' :
                      problem.difficulty === 'Medium' ? 'bg-yellow-500' : 'bg-red-500'
                    }`}></div>
                    <div>
                      <h4 className="text-white font-semibold">{problem.name}</h4>
                      <p className="text-gray-400 text-sm">{problem.platform}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                      problem.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                      problem.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-red-500/20 text-red-400'
                    }`}>
                      {problem.difficulty}
                    </span>
                    <p className="text-gray-400 text-xs mt-1">{problem.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Progress; 