import React, { useState, useEffect } from 'react';
import { 
  Palette, 
  Music, 
  BookOpen, 
  Users, 
  TreePine, 
  Gamepad2, 
  Camera, 
  ChefHat,
  Globe,
  Heart,
  Star,
  Sparkles,
  Clock
} from "lucide-react";

const ActivitiesPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const activities = [
    {
      icon: Palette,
      title: "Art & Craft",
      description: "Creative expression through painting, drawing, and crafts.",
      color: "from-pink-300 to-yellow-200",
      skills: ["Creativity", "Fine Motor", "Color Recognition"]
    },
    {
      icon: Music,
      title: "Music & Dance",
      description: "Songs, rhythm and dance for joy and coordination.",
      color: "from-purple-300 to-blue-200",
      skills: ["Rhythm", "Coordination", "Self Expression"]
    },
    {
      icon: BookOpen,
      title: "Story Time",
      description: "Fun storytelling to spark imagination and language.",
      color: "from-green-200 to-teal-300",
      skills: ["Language", "Listening", "Imagination"]
    },
    {
      icon: Users,
      title: "Dramatic Play",
      description: "Role-play activities to build empathy and teamwork.",
      color: "from-orange-200 to-pink-300",
      skills: ["Social Skills", "Empathy", "Communication"]
    },
    {
      icon: TreePine,
      title: "Nature Exploration",
      description: "Outdoor fun to connect with plants and the environment.",
      color: "from-teal-200 to-lime-200",
      skills: ["Observation", "Awareness", "Physical Activity"]
    },
    {
      icon: Gamepad2,
      title: "Educational Games",
      description: "Play-based learning with puzzles and number games.",
      color: "from-blue-200 to-indigo-300",
      skills: ["Problem Solving", "Math", "Logic"]
    },
    {
      icon: Camera,
      title: "Show & Tell",
      description: "Kids share stories and build confidence on stage.",
      color: "from-yellow-200 to-rose-200",
      skills: ["Confidence", "Speaking", "Sharing"]
    },
    {
      icon: ChefHat,
      title: "Cooking Fun",
      description: "Simple recipes to teach life skills and nutrition.",
      color: "from-pink-200 to-purple-200",
      skills: ["Life Skills", "Nutrition", "Focus"]
    }
  ];

  const specialEvents = [
    { 
      icon: Globe, 
      name: "Cultural Days", 
      description: "Celebrating traditions & diversity.",
      date: "Every 3rd Friday"
    },
    { 
      icon: Star, 
      name: "Talent Shows", 
      description: "Encouraging every child's talent.",
      date: "Last Friday of Month"
    },
    { 
      icon: Heart, 
      name: "Community Service", 
      description: "Building kindness and care.",
      date: "First Wednesday"
    },
    { 
      icon: Sparkles, 
      name: "Science Fun", 
      description: "Simple experiments & wonders.",
      date: "Every Tuesday"
    }
  ];

  const scheduleData = [
    {
      period: "Morning",
      time: "9:00 AM - 12:00 PM",
      color: "bg-purple-100 border-purple-200 text-purple-700",
      activities: [
        { name: "Arrival & Free Play", time: "9:00 - 9:30" },
        { name: "Circle Time", time: "9:30 - 10:00" },
        { name: "Art & Crafts", time: "10:00 - 10:45" },
        { name: "Outdoor Play", time: "10:45 - 11:30" },
        { name: "Story Time", time: "11:30 - 12:00" }
      ]
    },
    {
      period: "Afternoon",
      time: "1:00 PM - 4:00 PM",
      color: "bg-pink-100 border-pink-200 text-pink-700",
      activities: [
        { name: "Lunch Time", time: "12:00 - 1:00" },
        { name: "Quiet Time/Nap", time: "1:00 - 2:00" },
        { name: "Music & Movement", time: "2:00 - 2:45" },
        { name: "Learning Centers", time: "2:45 - 3:30" },
        { name: "Group Activity", time: "3:30 - 4:00" }
      ]
    }
  ];

  return (
    <section id="activities" className="py-8 md:py-16 bg-gradient-to-br from-blue-50 via-pink-50 to-purple-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header with animation */}
        <div className={`text-center mb-10 md:mb-14 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block mb-3 md:mb-4 text-xs md:text-sm px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full font-medium shadow-lg">
            Daily Activities
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight py-1">
            Learning Through 
            <span className="block mt-1 md:mt-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent py-2">
              Play & Discovery
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every day is thoughtfully designed so your child learns, grows, and enjoys every moment.
          </p>
        </div>

        {/* Featured Image Section */}
        <div className={`relative mb-10 md:mb-14 transition-all duration-1000 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
            <div className="w-full h-48 md:h-80 bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-200 flex items-center justify-center">
              <div className="text-center space-y-2 md:space-y-4 px-4">
                <div className="w-14 h-14 md:w-20 md:h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-purple-600" />
                </div>
                <h3 className="text-xl md:text-3xl font-bold text-purple-800">Every Day is an Adventure</h3>
                <p className="text-purple-700 text-sm md:text-lg">Fun, safe & engaging activities for growing minds</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          </div>
        </div>

        {/* Activities Grid */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">Our Daily Activities</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 transform opacity-0 ${isVisible ? 'opacity-100' : ''}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${activity.color} flex items-center justify-center mb-5 shadow-md`}>
                    <Icon className="w-7 h-7 text-gray-800" />
                  </div>
                  
                  <h3 className="font-bold text-lg mb-3 text-gray-900">{activity.title}</h3>
                  <p className="text-gray-600 mb-5 leading-relaxed text-sm">
                    {activity.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="text-sm font-semibold text-gray-700">Key Skills:</div>
                    <div className="flex flex-wrap gap-2">
                      {activity.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex} 
                          className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Special Events */}
        <div className={`bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Special Events & Celebrations
            </h3>
            <p className="text-gray-600">
              We create memories with unique experiences throughout the year.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {specialEvents.map((event, index) => {
              const Icon = event.icon;
              return (
                <div 
                  key={index} 
                  className="p-5 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center shadow-md mr-4 flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{event.name}</h4>
                      <p className="text-gray-600 text-sm mt-1">{event.description}</p>
                      <div className="flex items-center text-xs text-gray-500 mt-2">
                        <Clock className="w-3 h-3 mr-1" />
                        {event.date}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Daily Schedule */}
        <div className={`bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 md:p-8 shadow-lg mb-10 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h4 className="font-bold text-2xl mb-6 text-center text-gray-900">Our Daily Schedule</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scheduleData.map((session, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border-t-4 border-purple-300">
                <div className="flex items-center mb-5">
                  <h5 className="font-bold text-lg text-gray-800">{session.period}</h5>
                  <div className="ml-auto text-sm text-gray-500 flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {session.time}
                  </div>
                </div>
                
                <div className="space-y-3">
                  {session.activities.map((activity, activityIndex) => (
                    <div key={activityIndex} className="flex items-center text-sm group hover:bg-purple-50 transition-colors duration-200 rounded-lg p-2">
                      <div className="w-16 text-gray-500 font-medium">{activity.time}</div>
                      <div className="ml-4 flex-1 rounded-lg px-3 py-2">
                        {activity.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesPage;