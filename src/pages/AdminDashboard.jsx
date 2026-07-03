import { useState, useEffect } from'react';
import { motion } from'framer-motion';
import { Search, Download, Trash2, Edit3, Loader2 } from'lucide-react';
import SEO from'../components/SEO';
import { Card } from'../components/ui/Card';
import { FormInput } from'../components/ui/FormInput';
import { FormSelect, FormSelectOption } from'../components/ui/FormSelect';
import { Button } from'../components/ui/Button';

const AdminDashboard = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const res = await fetch('/api/leads', {
        headers: {'Authorization': `Bearer ${import.meta.env.VITE_ADMIN_SECRET ||'secret'}`
        }
      });
      if (!res.ok) throw new Error('Unauthorized or fetch failed');
      const data = await res.json();
      setLeads(data.leads || []);
    } catch (err) {
      setError(err.message);
      // Fallback dummy data for preview without DB connection
      setLeads([
        { _id:'1', name:'John Doe', company:'Acme Corp', email:'john@acme.com', projectType:'Web App', budget:'10k-25k', status:'new', createdAt: new Date().toISOString() },
        { _id:'2', name:'Sarah Connor', company:'Cyberdyne', email:'sarah@cyberdyne.com', projectType:'AI Tool', budget:'50k+', status:'contacted', createdAt: new Date().toISOString() },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name?.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          lead.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          lead.email?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus ==='all' || lead.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const exportCSV = () => {
    const headers = ['Name','Company','Email','Project','Budget','Status','Date'];
    const csvContent = [
      headers.join(','),
      ...filteredLeads.map(l => [
        `"${l.name ||''}"`, `"${l.company ||''}"`, `"${l.email ||''}"`, 
        `"${l.projectType ||''}"`, `"${l.budget ||''}"`, `"${l.status ||''}"`, 
        `"${new Date(l.createdAt).toLocaleDateString()}"`
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type:'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `leads-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-[var(--color-background)]"><Loader2 className="w-8 h-8 animate-spin text-[var(--color-accent)]" /></div>;

  return (
    <div className="min-h-screen pt-32 pb-24 bg-[var(--color-background)]">
      <SEO title="Lead Management | Admin" />
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <h1 className="text-3xl font-bold text-[var(--color-foreground)] mb-2">Lead Dashboard</h1>
            <p className="text-[var(--color-muted-foreground)]">Manage inquiries and project requests.</p>
          </div>
          
          <div className="flex gap-4 w-full md:w-auto items-center">
            <div className="w-full md:w-64">
              <FormInput 
                leftIcon={Search}
                type="text" 
                placeholder="Search leads..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-40">
              <FormSelect 
                value={filterStatus} 
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <FormSelectOption value="all">All Status</FormSelectOption>
                <FormSelectOption value="new">New</FormSelectOption>
                <FormSelectOption value="contacted">Contacted</FormSelectOption>
                <FormSelectOption value="closed">Closed</FormSelectOption>
              </FormSelect>
            </div>
            <Button onClick={exportCSV} variant="primary" icon={false} className="shrink-0">
              <div className="flex items-center gap-2"><Download className="w-4 h-4" /> Export</div>
            </Button>
          </div>
        </div>

        {error && <p className="text-amber-500 mb-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl text-sm">Showing mock data: {error}</p>}

        <Card glass className="!p-0 overflow-hidden border-[var(--color-border)]">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-[var(--color-muted-foreground)]">
              <thead className="text-xs uppercase bg-[var(--color-surface)] text-[var(--color-muted-foreground)] border-b border-[var(--color-border)]">
                <tr>
                  <th className="px-6 py-4 font-bold">Client</th>
                  <th className="px-6 py-4 font-bold">Contact</th>
                  <th className="px-6 py-4 font-bold">Project / Budget</th>
                  <th className="px-6 py-4 font-bold">Status</th>
                  <th className="px-6 py-4 font-bold">Date</th>
                  <th className="px-6 py-4 font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border)]">
                {filteredLeads.map((lead) => (
                  <motion.tr 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    key={lead._id} 
                    className="hover:bg-[var(--color-surface-hover)] transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="font-bold text-[var(--color-foreground)]">{lead.name}</div>
                      <div className="text-xs text-[var(--color-muted-foreground)]/80">{lead.company ||'-'}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-[var(--color-foreground)]/90">{lead.email}</div>
                      <div className="text-xs text-[var(--color-muted-foreground)]/80">{lead.phone ||'-'}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-[var(--color-foreground)]">{lead.projectType ||'General'}</div>
                      <div className="text-xs text-[var(--color-muted-foreground)]/80">{lead.budget ||'-'}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold
                        ${lead.status ==='new' ?'bg-blue-500/20 text-blue-400 border border-blue-500/30' :''}
                        ${lead.status ==='contacted' ?'bg-amber-500/20 text-amber-400 border border-amber-500/30' :''}
                        ${lead.status ==='closed' ?'bg-[var(--color-success)]/20 text-[var(--color-success)] border border-[var(--color-success)]/30' :''}
                      `}>
                        {lead.status?.toUpperCase() ||'NEW'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-[var(--color-foreground)]/80">
                      {new Date(lead.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded"><Edit3 className="w-4 h-4" /></button>
                      <button className="text-[var(--color-muted-foreground)] hover:text-red-400 p-2 ml-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded"><Trash2 className="w-4 h-4" /></button>
                    </td>
                  </motion.tr>
                ))}
                {filteredLeads.length === 0 && (
                  <tr>
                    <td colSpan="6" className="px-6 py-12 text-center text-[var(--color-muted-foreground)]">
                      No leads found matching your criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
