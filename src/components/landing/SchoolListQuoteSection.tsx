import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  FileText, 
  Upload, 
  Camera, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Send,
  MessageCircle,
  FileCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const SchoolListQuoteSection: React.FC = () => {
  const { addLead, showToast, setActiveView, setDashboardTab } = useApp();

  const [studentName, setStudentName] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [schoolName, setSchoolName] = useState('Colégio Estadual de Planaltina');
  const [grade, setGrade] = useState('6º Ano Ensino Fundamental');
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [isSent, setIsSent] = useState(false);

  const handleSimulatedUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFileName(e.target.files[0].name);
      showToast(`Arquivo "${e.target.files[0].name}" anexado para cotação!`);
    }
  };

  const handleSubmitList = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !parentPhone.trim()) return;

    try {
      confetti({ particleCount: 70, spread: 50, origin: { y: 0.6 } });
    } catch (e) {}

    addLead({
      name: `${studentName.trim()} (Resp.)`,
      phone: parentPhone.trim(),
      channel: 'WhatsApp',
      categoryInterest: 'Material Escolar',
      productInterest: `Cotação de Lista: ${schoolName} (${grade}) - ${uploadedFileName || 'Foto enviada'}`,
      status: 'Novo contato',
      nextAction: 'Montar orçamento comparativo (Econômico vs. Marcas Premium)',
      notes: `Orçamento prioritário de lista escolar recebido via portal online. Escola: ${schoolName}, Série: ${grade}.`,
      estimatedValue: 280.00
    });

    setIsSent(true);
    showToast('Lista recebida com sucesso! Enviada para triagem da Mais Papelaria.');
  };

  return (
    <section id="lista-escolar" className="py-16 sm:py-24 bg-gradient-to-b from-white via-amber-50/30 to-white border-t border-slate-200/80 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Serviço Líder de Volta às Aulas
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Cote sua Lista Escolar em minutos, sem enfrentar filas.
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            Envie a foto ou arquivo da lista solicitada pela escola do seu filho. Nossa equipe em Planaltina-DF confere os itens, monta o orçamento com marcas de ponta e você retira tudo pronto e etiquetado.
          </p>
        </div>

        {/* 3 Steps Process Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
            <span className="w-8 h-8 rounded-full bg-brand-500 text-white font-black text-xs flex items-center justify-center flex-shrink-0">
              1
            </span>
            <div>
              <h4 className="text-xs font-bold text-slate-900">Envie a Foto ou PDF</h4>
              <p className="text-[11px] text-slate-500 mt-0.5">Tire foto com o celular ou anexe o arquivo enviado pelo colégio.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
            <span className="w-8 h-8 rounded-full bg-brandYellow-500 text-slate-900 font-black text-xs flex items-center justify-center flex-shrink-0">
              2
            </span>
            <div>
              <h4 className="text-xs font-bold text-slate-900">Receba a Cotação</h4>
              <p className="text-[11px] text-slate-500 mt-0.5">Opções de marcas econômicas ou premium com até 15% OFF à vista.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
            <span className="w-8 h-8 rounded-full bg-emerald-600 text-white font-black text-xs flex items-center justify-center flex-shrink-0">
              3
            </span>
            <div>
              <h4 className="text-xs font-bold text-slate-900">Retire sem Filas</h4>
              <p className="text-[11px] text-slate-500 mt-0.5">Seus materiais separados no balcão da Mais Papelaria em Planaltina.</p>
            </div>
          </div>
        </div>

        {/* Interactive Quote Form Box */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border-2 border-amber-200/80 shadow-card p-6 sm:p-8">
          {isSent ? (
            <div className="text-center py-8 space-y-4 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-black text-slate-900">
                Lista Recebida com Prioridade!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Nossa equipe de atendimento já foi notificada na <strong>Central MAIS CONNECT</strong> e iniciou a separação das marcas. Entraremos em contato pelo WhatsApp informado em até 15 minutos!
              </p>
              
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => {
                    setActiveView('dashboard');
                    setDashboardTab('leads');
                  }}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-black transition-colors"
                >
                  Ver no CRM do Gestor
                </button>
                <button
                  onClick={() => {
                    setIsSent(false);
                    setUploadedFileName(null);
                    setStudentName('');
                    setParentPhone('');
                  }}
                  className="text-xs text-slate-500 hover:text-slate-800 font-bold"
                >
                  Enviar outra lista escolar
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmitList} className="space-y-4 text-xs">
              
              <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-black text-slate-900">
                    Formulário de Cotação de Lista Escolar
                  </h3>
                  <p className="text-slate-500 text-[11px]">
                    Sem compromisso. Respondemos direto no seu WhatsApp com os valores item a item.
                  </p>
                </div>
                <span className="text-[10px] bg-emerald-50 text-emerald-800 font-bold px-2 py-0.5 rounded border border-emerald-200 hidden sm:inline">
                  Atendimento em até 15 min
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Nome do Aluno ou Responsável
                  </label>
                  <input
                    type="text"
                    required
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="Ex: Mariana Silva"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    WhatsApp para Receber o Orçamento
                  </label>
                  <input
                    type="tel"
                    required
                    value={parentPhone}
                    onChange={(e) => setParentPhone(e.target.value)}
                    placeholder="(61) 99999-9999"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Nome da Escola / Colégio (Planaltina ou DF)
                  </label>
                  <input
                    type="text"
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                    placeholder="Ex: Escola Classe, Colégio Estadual..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Ano / Série Letiva
                  </label>
                  <input
                    type="text"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    placeholder="Ex: 5º Ano, Ensino Médio, Pré-Escola..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Upload Zone */}
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Anexar Foto da Lista ou Arquivo PDF
                </label>
                <label className="border-2 border-dashed border-slate-300 hover:border-brand-500 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors bg-slate-50/60">
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleSimulatedUpload}
                    className="hidden"
                  />
                  <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                    <Camera className="w-5 h-5" />
                  </div>
                  <div className="text-center">
                    <span className="font-bold text-slate-800 text-xs block">
                      {uploadedFileName ? (
                        <span className="text-emerald-700 flex items-center justify-center gap-1">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          {uploadedFileName} (Pronto para envio)
                        </span>
                      ) : (
                        'Clique para tirar foto ou escolher arquivo PDF'
                      )}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      Formatos aceitos: JPG, PNG, PDF ou foto do celular
                    </span>
                  </div>
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={!studentName.trim() || !parentPhone.trim()}
                  className="w-full py-3.5 rounded-xl bg-brand-500 hover:bg-brand-600 disabled:opacity-50 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-brand-500/25 transition-all active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Solicitar Cotação Completa no WhatsApp</span>
                </button>
              </div>

              <p className="text-[10px] text-slate-400 text-center">
                Seus dados são protegidos conforme a LGPD e usados exclusivamente para o envio deste orçamento.
              </p>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};
