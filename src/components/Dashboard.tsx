'use client';

import { motion } from 'framer-motion';
import { useCloudData } from '@/hooks/useCloudData';
import { BarChart3, Cloud, Cpu, Database, LayoutGrid, TrendingUp } from 'lucide-react';

export default function Dashboard() {
  const { data: clusters, isLoading } = useCloudData();

  if (isLoading) return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-emerald-500 border-b-2 border-transparent"></div>
    </div>
  );

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Header - Modern CSS clamp() kullanımı */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10"
      >
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 rounded-lg bg-emerald-100 text-emerald-600">
              <Cloud size={20} />
            </div>
            <span className="text-[clamp(0.7rem,2vw,0.85rem)] font-bold uppercase tracking-wider text-emerald-600">
              Infrastructure Metrics
            </span>
          </div>
          <h1 className="text-[clamp(1.5rem,5vw,2.5rem)] font-extrabold tracking-tight leading-none text-gray-900">
            Cost Management
          </h1>
          <p className="mt-3 text-gray-500 max-w-md italic">Precision-engineered insights for high-performance cloud clusters.</p>
        </div>
        
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm transition-transform hover:scale-105 cursor-default">
          <span className="text-xs font-medium text-gray-400 block mb-1">Estimated Total Spend</span>
          <div className="flex items-center gap-2">
             <span className="text-3xl font-mono font-bold text-gray-900">$42,892</span>
             <TrendingUp className="text-emerald-500" size={20} />
          </div>
        </div>
      </motion.div>

      {/* Grid Yapısı - Responsive Table */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-[2rem] shadow-2xl shadow-emerald-900/5 border border-gray-100 overflow-hidden" 
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50">
                {/* Modern CSS: padding-inline (logical properties) */}
                <th className="pi-6 p-6 text-xs font-bold uppercase tracking-wider text-gray-400">Cluster</th>
                <th className="p-6 text-xs font-bold uppercase tracking-wider text-gray-400 hidden sm:table-cell">Resources</th>
                <th className="p-6 text-xs font-bold uppercase tracking-wider text-gray-400">Efficiency</th>
                <th className="p-6 text-xs font-bold uppercase tracking-wider text-gray-400 text-right">Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {clusters?.map((cluster: any, index: number) => (
                <motion.tr 
                  key={cluster.id}
                  whileHover={{ backgroundColor: "rgba(16, 185, 129, 0.02)" }}
                  className="group transition-colors"
                >
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="hidden xs:flex w-10 h-10 rounded-xl bg-gray-50 items-center justify-center group-hover:rotate-12 transition-transform">
                        <LayoutGrid size={18} className="text-gray-400 group-hover:text-emerald-500" />
                      </div>
                      <span className="font-bold text-gray-900">{cluster.name}</span>
                    </div>
                  </td>
                  
                  <td className="p-6 hidden sm:table-cell">
                    <div className="flex flex-col gap-1 text-xs font-medium text-gray-500">
                      <div className="flex items-center gap-1.5"><Cpu size={12}/> {cluster.cpu}</div>
                      <div className="flex items-center gap-1.5"><Database size={12}/> {cluster.ram}</div>
                    </div>
                  </td>

                  <td className="p-6">
                    <div className="flex flex-col gap-2">
                      <span className="text-xs font-bold text-emerald-600">{cluster.efficiency}%</span>
                      <div className="w-full max-w-[120px] h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${cluster.efficiency}%` }}
                          transition={{ duration: 1.5, ease: [0.34, 1.56, 0.64, 1] }}
                          className="h-full bg-emerald-500"
                        />
                      </div>
                    </div>
                  </td>

                  <td className="p-6 text-right">
                    <div className="flex flex-col items-end gap-1">
                      <span className="font-mono font-bold text-gray-900">${cluster.cost}</span>
                      <span className="text-[10px] font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-full">
                        ACTIVE
                      </span>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
      
      {/* Bottom Surprise - Accessibility & prefers-reduced-motion friendly */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 p-8 rounded-[2rem] bg-gray-900 text-white flex flex-col md:flex-row justify-between items-center gap-6"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center animate-pulse">
            <BarChart3 size={24} className="text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold">Optimization Summary</h3>
            <p className="text-gray-400 text-sm">You are currently saving $12,402 per month.</p>
          </div>
        </div>
        <button className="px-8 py-3 bg-white text-gray-900 font-bold rounded-xl hover:bg-emerald-500 hover:text-white transition-all active:scale-95">
          View Suggestions
        </button>
      </motion.div>
    </div>
  );
}