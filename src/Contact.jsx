import React from "react";
import { Button } from "./UI/ui/moving-border";
import {
  Code,
  Laptop,
  Rocket,
  Star,
  Zap,
  ArrowRight,
  MessageSquare,
  Phone,
  Mail,
} from "lucide-react";

const Connect = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-black dark:via-black dark:to-black transition-all duration-500">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-800 dark:text-indigo-300 text-sm font-medium mb-4">
            Expert Web Development
          </span>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Transform Your Vision Into Digital Reality
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Elevate your online presence with cutting-edge web solutions
            tailored to your unique business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="max-w-lg mx-auto">
            <Button
              className="w-full p-0 overflow-hidden shadow-xl"
              borderRadius="1.5rem"
              duration={3000}
            >
              <div className="bg-white dark:bg-gray-950 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 mr-3">
                    <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                    Custom Web Applications
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  From interactive dashboards to e-commerce platforms, we build
                  scalable web applications that drive business growth.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <Star className="w-4 h-4 text-yellow-500 mr-2" />
                    React, Next.js & Modern Frameworks
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <Star className="w-4 h-4 text-yellow-500 mr-2" />
                    Responsive & Cross-platform Solutions
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <Star className="w-4 h-4 text-yellow-500 mr-2" />
                    API Integration & Development
                  </li>
                </ul>
              </div>
            </Button>
          </div>

          <div className="max-w-lg mx-auto">
            <Button
              className="w-full p-0 overflow-hidden shadow-xl"
              borderRadius="1.5rem"
              duration={3000}
            >
              <div className="bg-white dark:bg-gray-950 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30 mr-3">
                    <Rocket className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                    Modern UI/UX Design
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Create stunning, intuitive interfaces that captivate your
                  audience and drive engagement.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <Star className="w-4 h-4 text-yellow-500 mr-2" />
                    Tailwind CSS & Advanced Animations
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <Star className="w-4 h-4 text-yellow-500 mr-2" />
                    Interactive User Experiences
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <Star className="w-4 h-4 text-yellow-500 mr-2" />
                    Conversion-focused Design
                  </li>
                </ul>
              </div>
            </Button>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <Button
            className="w-full p-0 overflow-hidden shadow-xl"
            borderRadius="1.5rem"
            duration={3000}
          >
            <div className="w-full bg-white dark:bg-gray-950 p-8 rounded-2xl">
              <div className="text-center mb-8">
                <Zap className="w-10 h-10 text-indigo-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                  Get in Touch Today
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Start your journey to digital excellence with a free
                  consultation.
                </p>
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex items-center group">
                  <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 mr-4 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/30 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      Email
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      jainadi313@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 mr-4 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/30 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      Phone
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      +91 6268269947
                    </p>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 mr-4 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/30 transition-colors duration-300">
                    <MessageSquare className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      Response Time
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  Trusted by businesses worldwide
                </p>
              </div>
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Connect;
