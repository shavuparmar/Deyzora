import fs from 'fs';
import path from 'path';

const roles = [
  {
    role: 'employee',
    modules: [
      { name: 'Dashboard', icon: 'FiHome' },
      { name: 'Project', folder: 'projects', icon: 'FiLayers' },
      { name: 'Task', folder: 'tasks', icon: 'FiCheckSquare' },
      { name: 'Attendance', folder: 'attendance', icon: 'FiCalendar' },
    ]
  },
  {
    role: 'client',
    modules: [
      { name: 'Dashboard', icon: 'FiHome' },
      { name: 'Project', folder: 'projects', icon: 'FiLayers' },
      { name: 'Invoice', folder: 'invoices', icon: 'FiFileText' },
      { name: 'Payment', folder: 'payments', icon: 'FiDollarSign' },
    ]
  }
];

const listTemplate = (role, name, icon) => `import React, { useEffect, useState } from 'react';
import GlassCard from '../../components/ui/GlassCard';
import { ${icon}, FiLoader } from 'react-icons/fi';
import { api } from '../../api/axios';

export default function ${role.charAt(0).toUpperCase() + role.slice(1)}${name}() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get('/${role}/${name.toLowerCase()}s');
        setData(res.data || []);
      } catch (error) {
        console.error('Failed to fetch data');
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">My ${name}s</h2>
      </div>

      <GlassCard className="p-0 border border-white/5 bg-white/5 overflow-hidden min-h-[400px]">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <FiLoader className="w-8 h-8 animate-spin text-brand-blue" />
          </div>
        ) : data.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-white/40">
            <${icon} className="w-12 h-12 mb-4 opacity-50" />
            <p>No ${name.toLowerCase()}s found.</p>
          </div>
        ) : (
          <div className="p-6">
            <p className="text-white">Data exists.</p>
          </div>
        )}
      </GlassCard>
    </div>
  );
}
`;

const dashboardTemplate = (role) => `import React from 'react';
import GlassCard from '../../components/ui/GlassCard';

export default function ${role.charAt(0).toUpperCase() + role.slice(1)}Dashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Dashboard Overview</h2>
      <GlassCard className="p-8 border border-white/5 bg-white/5">
        <p className="text-white/70">Welcome to your dashboard. This area will populate with your real-time statistics.</p>
      </GlassCard>
    </div>
  );
}
`;

roles.forEach(({ role, modules }) => {
  const dir = path.join(process.cwd(), 'src/pages', role);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  
  modules.forEach(({ name, folder, icon }) => {
    if (name === 'Dashboard') {
      fs.writeFileSync(path.join(dir, 'Dashboard.jsx'), dashboardTemplate(role));
    } else {
      const subDir = path.join(dir, folder);
      if (!fs.existsSync(subDir)) fs.mkdirSync(subDir, { recursive: true });
      fs.writeFileSync(path.join(subDir, name + 's.jsx'), listTemplate(role, name, icon));
    }
  });
});

console.log('Successfully scaffolded employee & client module pages!');
