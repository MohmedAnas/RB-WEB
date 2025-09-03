import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { motion } from 'framer-motion';

const LoadingSkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-12 space-y-12"
    >
      <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f5f5f5">
        {/* Mimic AboutUs Hero Section */}
        <section className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            <Skeleton className="h-24 w-full md:w-1/3" />
            <div className="flex-1 space-y-2">
              <Skeleton count={1} className="h-8" />
              <Skeleton count={2} className="h-6" />
            </div>
          </div>
        </section>

        {/* Mimic Services Grid */}
        <section className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
          <Skeleton count={1} className="h-10 w-1/2 mx-auto mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center space-x-4 p-6 rounded-xl">
                <Skeleton circle width={48} height={48} />
                <div className="flex-1 space-y-2">
                  <Skeleton count={1} className="h-6" />
                  <Skeleton count={1} className="h-4" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mimic Supported Industries */}
        <section className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
          <Skeleton count={1} className="h-10 w-1/2 mx-auto mb-8" />
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex flex-col items-center">
                <Skeleton circle width={64} height={64} />
                <Skeleton count={1} className="h-4 w-24 mt-2" />
              </div>
            ))}
          </div>
        </section>
      </SkeletonTheme>
    </motion.div>
  );
};

export default LoadingSkeleton;
