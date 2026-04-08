'use client';

import { motion } from 'framer-motion';
import { useCloudData } from '@/hooks/useCloudData';
import { tokens } from '@/app/tokens'; // Az önce oluşturduğumuz tokenlar

export default function Dashboard() {
  const { data: clusters, isLoading, isError } = useCloudData();

  if (isLoading) return <div className="p-10 text-center">Loading Cloud Data...</div>;
  if (isError) return <div className="p-10 text-center text-red-500">Error loading data.</div>;

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      {/* Başlık Bölümü */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold" style={{ color: tokens.colors.textPrimary }}>
          Cost Management
        </h1>
        <p style={{ color: tokens.colors.textSecondary }}>
          Aggregated by Cluster
        </p>
      </motion.div>

      {/* Grid Yapısı (Videodaki tablo alanı) */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden" 
           style={{ borderColor: tokens.colors.borderPrimary }}>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b" style={{ borderColor: tokens.colors.borderPrimary }}>
              <th className="p-4 font-medium">Cluster</th>
              <th className="p-4 font-medium">CPU</th>
              <th className="p-4 font-medium">RAM</th>
              <th className="p-4 font-medium">Efficiency</th>
              <th className="p-4 font-medium text-right">Total Cost</th>
            </tr>
          </thead>
          <tbody>
            {clusters?.map((cluster: any, index: number) => (
              <motion.tr 
                key={cluster.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-b last:border-0 hover:bg-gray-50 transition-colors"
                style={{ borderColor: tokens.colors.borderPrimary }}
              >
                <td className="p-4 font-semibold">{cluster.name}</td>
                <td className="p-4">{cluster.cpu} mCores</td>
                <td className="p-4">{cluster.ram} MiB</td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${cluster.efficiency}%` }}
                        className="h-full"
                        style={{ backgroundColor: tokens.colors.accentPrimary }}
                      />
                    </div>
                    <span className="text-sm">{cluster.efficiency}%</span>
                  </div>
                </td>
                <td className="p-4 text-right font-mono font-bold text-green-600">
                  ${cluster.cost}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}