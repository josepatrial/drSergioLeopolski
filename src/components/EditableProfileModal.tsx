import React, { useState, useEffect } from 'react';
import { X, RotateCcw, Check, SlidersHorizontal, User } from 'lucide-react';
import { EditableDoctorProfile, DEFAULT_DOCTOR_PROFILE } from '../data/siteConfig';

interface EditableProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: EditableDoctorProfile;
  onSave: (updated: EditableDoctorProfile) => void;
}

export const EditableProfileModal: React.FC<EditableProfileModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSave
}) => {
  const [formState, setFormState] = useState<EditableDoctorProfile>(profile);

  useEffect(() => {
    setFormState(profile);
  }, [profile, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formState);
    onClose();
  };

  const handleReset = () => {
    setFormState(DEFAULT_DOCTOR_PROFILE);
    onSave(DEFAULT_DOCTOR_PROFILE);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/75 backdrop-blur-sm p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-profile-title"
    >
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        <div className="px-6 py-5 bg-gradient-to-r from-navy-950 to-navy-900 text-white flex items-center justify-between border-b border-emerald-500/20">
          <div className="flex items-center gap-2.5">
            <SlidersHorizontal className="w-5 h-5 text-emerald-400" />
            <h2 id="modal-profile-title" className="font-editorial text-2xl font-bold">
              Campos Editáveis do Médico
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:bg-white/10 transition-colors"
            aria-label="Fechar janela"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <p className="text-xs text-slate-600 bg-emerald-50/70 p-3.5 rounded-xl border border-emerald-200 leading-relaxed">
            Em conformidade com as normas do CFM e as especificações do projeto, nenhuma formação acadêmica ou titulação
            não confirmada foi inventada. Utilize os campos abaixo para atualizar o nome e dados biográficos livremente.
          </p>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1">
              Nome do Médico (Exibido no Cabeçalho, Hero e Rodapé)
            </label>
            <input
              type="text"
              value={formState.doctorName}
              onChange={(e) => setFormState({ ...formState, doctorName: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold text-navy-950 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1">
              Formação Acadêmica
            </label>
            <input
              type="text"
              value={formState.academicFormation}
              onChange={(e) => setFormState({ ...formState, academicFormation: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-800 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1">
              Residência e Especialização
            </label>
            <input
              type="text"
              value={formState.residencyAndTraining}
              onChange={(e) => setFormState({ ...formState, residencyAndTraining: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-800 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1">
              Sociedades Médicas e Titulações
            </label>
            <input
              type="text"
              value={formState.societyMemberships}
              onChange={(e) => setFormState({ ...formState, societyMemberships: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-800 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1">
              Notas Biográficas Complementares
            </label>
            <textarea
              rows={3}
              value={formState.additionalBioNotes}
              onChange={(e) => setFormState({ ...formState, additionalBioNotes: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-800 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20"
            />
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restaurar Padrão</span>
            </button>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-100"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm"
              >
                <Check className="w-4 h-4" />
                <span>Salvar Alterações</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
