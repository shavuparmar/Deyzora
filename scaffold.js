import fs from 'fs';
import path from 'path';

const modules = [
  { name: 'Employee', folder: 'employees', icon: 'FiUsers' },
  { name: 'Client', folder: 'clients', icon: 'FiUser' },
  { name: 'Project', folder: 'projects', icon: 'FiLayers' },
  { name: 'Task', folder: 'tasks', icon: 'FiCheckSquare' },
  { name: 'Invoice', folder: 'invoices', icon: 'FiFileText' },
];

const listTemplate = (name, icon) => `import React, { useEffect, useState } from 'react';
import GlassCard from '../../../components/ui/GlassCard';
import { ${icon}, FiPlus, FiLoader } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { api } from '../../../api/axios';

export default function ${name}List() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch real data from backend
        const res = await api.get('/admin/${name.toLowerCase()}s');
        setData(res.data || []);
      } catch (error) {
        console.error('Failed to fetch ${name.toLowerCase()}s');
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">All ${name}s</h2>
        <Link to="/admin/${name.toLowerCase()}s/add" className="flex items-center gap-2 px-4 py-2 bg-brand-blue hover:bg-brand-blue/80 text-white rounded-xl text-sm font-medium transition-all">
          <FiPlus /> Add ${name}
        </Link>
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
            <p className="text-sm">Create your first ${name.toLowerCase()} to get started.</p>
          </div>
        ) : (
          <div className="p-6">
            <p className="text-white">Data exists (Rendering Table)</p>
          </div>
        )}
      </GlassCard>
    </div>
  );
}
`;

const formTemplate = (name) => `import React, { useState } from 'react';
import GlassCard from '../../../components/ui/GlassCard';
import { FiSave, FiArrowLeft, FiLoader } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { api } from '../../../api/axios';
import toast from 'react-hot-toast';

export default function ${name}Form() {
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await api.post('/admin/${name.toLowerCase()}s', data);
      toast.success('${name} created successfully!');
      navigate('/admin/${name.toLowerCase()}s');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to create ${name.toLowerCase()}');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/admin/${name.toLowerCase()}s" className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-white transition-all">
            <FiArrowLeft />
          </Link>
          <h2 className="text-2xl font-bold text-white">Create ${name}</h2>
        </div>
      </div>

      <GlassCard className="p-8 border border-white/5 bg-white/5">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-white/70 mb-1.5">${name} Name</label>
            <input
              {...register('name')}
              type="text"
              required
              placeholder="Enter details..."
              className="w-full bg-black/20 border border-white/10 rounded-xl py-2.5 px-4 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/50 transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-4 bg-brand-blue hover:bg-brand-blue/90 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-all disabled:opacity-50"
          >
            {isLoading ? <FiLoader className="animate-spin" /> : <><FiSave /> Save ${name}</>}
          </button>
        </form>
      </GlassCard>
    </div>
  );
}
`;

modules.forEach(({ name, folder, icon }) => {
  const dir = path.join(process.cwd(), 'src/pages/admin', folder);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  
  fs.writeFileSync(path.join(dir, name + 'List.jsx'), listTemplate(name, icon));
  fs.writeFileSync(path.join(dir, name + 'Form.jsx'), formTemplate(name));
});

console.log('Successfully scaffolded admin module pages!');
