'use client';

import { motion } from 'framer-motion';
import { useCloudData } from '@/hooks/useCloudData';
import { tokens } from '@/app/tokens'; 
import { BarChart3, Cloud, Cpu, Database, LayoutGrid } from 'lucide-react';

export default function Dashboard() {
  const { data: clusters, isLoading } = useCloudData();

  if (isLoading) return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2" style={{ borderColor: tokens.colors.accentPrimary }}></div>
    </div>
  );

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Bölümü */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-end mb-10"
      >
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 rounded-lg bg-emerald-100 text-emerald-600">
              <Cloud size={20} />
            </div>
            <span className="text-sm font-bold uppercase tracking-wider text-emerald-600">Cloud Optimization</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight" style={{ color: tokens.colors.textPrimary }}>
            Cost Management
          </h1>
          <p className="mt-2 text-lg" style={{ color: tokens.colors.textSecondary }}>
            Real-time infrastructure efficiency metrics.
          </p>
        </div>
        
        <div className="hidden md:block text-right">
          <span className="text-sm font-medium text-gray-400 block mb-1">Total Monthly Spend</span>
          <span className="text-3xl font-mono font-bold text-emerald-500">$42,892.10</span>
        </div>
      </motion.div>

      {/* Grid Yapısı */}
      <div className="grid grid-cols-1 gap-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border overflow-hidden" 
          style={{ borderColor: tokens.colors.borderPrimary }}
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50 border-b" style={{ borderColor: tokens.colors.borderPrimary }}>
                  <th className="p-6 text-sm font-bold uppercase tracking-wider text-gray-500">Cluster Name</th>
                  <th className="p-6 text-sm font-bold uppercase tracking-wider text-gray-500">Resources</th>
                  <th className="p-6 text-sm font-bold uppercase tracking-wider text-gray-500">Efficiency Score</th>
                  <th className="p-6 text-sm font-bold uppercase tracking-wider text-gray-500 text-right">Estimated Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {clusters?.map((cluster: any, index: number) => (
                  <motion.tr 
                    key={cluster.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group hover:bg-emerald-50/30 transition-all duration-300 cursor-pointer"
                  >
                    <td className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                          <LayoutGrid size={18} className="text-gray-500 group-hover:text-emerald-600" />
                        </div>
                        <span className="font-bold text-gray-900 text-lg">{cluster.name}</span>
                      </div>
                    </td>
                    
                    <td className="p-6">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Cpu size={14} className="text-gray-400" /> {cluster.cpu} mCores
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Database size={14} className="text-gray-400" /> {cluster.ram} MiB
                        </div>
                      </div>
                    </td>

                    <td className="p-6">
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-end mb-1">
                          <span className="text-sm font-bold" style={{ color: tokens.colors.accentPrimary }}>{cluster.efficiency}%</span>
                        </div>
                        <div className="w-48 h-3 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${cluster.efficiency}%` }}
                            transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: tokens.colors.accentPrimary }}
                          />
                        </div>
                      </div>
                    </td>

                    <td className="p-6 text-right">
                      <div className="flex flex-col items-end">
                        <span className="text-xl font-mono font-black text-gray-900">
                          ${cluster.cost}
                        </span>
                        <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded-md mt-1">
                          OPTIMIZED
                        </span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
      
      {/* Surprise Element: Bottom Stats */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="bg-emerald-600 p-6 rounded-3xl text-white shadow-lg shadow-emerald-200">
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 size={24} />
            <span className="font-bold uppercase text-xs tracking-widest opacity-80">Savings Potential</span>
          </div>
          <div className="text-3xl font-black">$12,402.00</div>
          <div className="text-sm mt-2 opacity-80 italic">"You could save 24% by rightsizing"</div>
        </div>
      </motion.div>
    </div>
  );
}