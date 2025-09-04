import { motion } from "framer-motion";
import { Clock, Users, BookOpen, Palette, Music, Globe, Sparkles } from "lucide-react";
import SwingingBoy from "./SwingingBoy";

const Programs = () => {
 
  const programs = [
    {
      title: "Play Group",
      age: "18 months - 2.5 years",
      duration: "2 hours",
      maxStudents: "8-10",
      color: "from-pink-300 to-yellow-200",
      icon: Users,
      features: [
        "✨ Sensory play activities",
        "🤝 Basic social skills",
        "👩‍👦 Parent-child bonding",
        "⏰ Introduction to routine"
      ],
      description: "A gentle introduction to structured play and learning in a nurturing environment."
    },
    {
      title: "Nursery",
      age: "2.5 - 3.5 years",
      duration: "3 hours",
      maxStudents: "12-15",
      color: "from-purple-300 to-pink-200",
      icon: BookOpen,
      features: [
        "📖 Pre-literacy skills",
        "🎨 Fine motor development",
        "🌈 Creative expression",
        "🌟 Independence building"
      ],
      description: "Building foundational skills through creative play and structured activities."
    },
    {
      title: "Junior KG",
      age: "3.5 - 4.5 years",
      duration: "4 hours",
      maxStudents: "15-18",
      color: "from-yellow-200 to-pink-300",
      icon: Palette,
      features: [
        "🔢 Pre-math concepts",
        "🗣️ Language development",
        "🎭 Art & craft projects",
        "🤗 Social interaction"
      ],
      description: "Developing cognitive abilities and preparing for formal learning."
    },
    {
      title: "Senior KG",
      age: "4.5 - 5.5 years",
      duration: "5 hours",
      maxStudents: "18-20",
      color: "from-blue-300 to-purple-200",
      icon: Globe,
      features: [
        "🎓 School readiness",
        "🧩 Advanced problem solving",
        "🌟 Leadership skills",
        "📚 Project-based learning"
      ],
      description: "Comprehensive preparation for primary school with advanced learning concepts."
    }
  ];

  const additionalPrograms = [
    {
      name: "Music & Movement",
      icon: Music,
      description: "🎵 Rhythm, dance, and musical expression"
    },
    {
      name: "Art & Craft",
      icon: Palette,
      description: "🎨 Creative projects and fine motor skills"
    },
    {
      name: "Storytelling",
      icon: BookOpen,
      description: "📖 Language development through stories"
    }
  ];

  return (
    
    <section id="programs" className="py-20 bg-gradient-to-b from-pink-50 via-yellow-50 to-purple-50 relative overflow-hidden">
      {/* Floating sparkles */}
      <motion.div 
        className="absolute top-10 left-10 text-yellow-400 text-3xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        ✨
      </motion.div>
     <div className="-top-4 left-0 absolute z-50 md:z-10">
  <SwingingBoy className="w-28 md:w-40" />
</div>


    
      <motion.div 
        className="absolute bottom-10 right-10 text-pink-400 text-3xl"
        animate={{ rotate: [0, 20, 0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      >
        🌈
      </motion.div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full shadow-md mb-4 text-sm font-bold"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <Sparkles className="w-4 h-4" /> Our Programs
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Age-Appropriate 
            <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 text-transparent bg-clip-text mt-2 py-2">
              Learning Programs ✨
            </span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Carefully designed programs that grow with your child, ensuring they receive 
            the right level of challenge and support at every stage.
          </p>
        </motion.div>

        {/* Main Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 border-2 border-dashed relative overflow-hidden"
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.08, rotate: 1 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">{program.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{program.description}</p>
                
                <div className="text-sm mb-3">
                  <p><strong>Age:</strong> {program.age}</p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-pink-500" /> {program.duration} 
                    <Users className="w-4 h-4 text-purple-500 ml-2" /> {program.maxStudents}
                  </p>
                </div>

                <ul className="space-y-1 text-sm">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Programs */}
        <motion.div 
          className="bg-white rounded-3xl p-10 shadow-2xl text-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            Special Programs 🎶🎨📚
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {additionalPrograms.map((program, index) => {
              const Icon = program.icon;
              return (
                <motion.div 
                  key={index} 
                  className="p-6 rounded-2xl bg-gradient-to-br from-yellow-100 to-pink-100 shadow-md"
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 280, damping: 18 }}
                >
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-lg text-blue-800">{program.name}</h4>
                  <p className="text-sm text-gray-600 mt-2">{program.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
