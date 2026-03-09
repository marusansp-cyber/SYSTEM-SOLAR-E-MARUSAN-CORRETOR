/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Sun, 
  Zap, 
  ShieldCheck, 
  LineChart, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2,
  Users,
  FileText,
  Wrench,
  ArrowRight,
  MessageCircle
} from "lucide-react";

const TeamMember = ({ name, role, description, icon: Icon, credential }: { 
  name: string; 
  role: string; 
  description: string; 
  icon: any;
  credential?: string;
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
  >
    <div className="w-12 h-12 bg-solar-blue/10 rounded-xl flex items-center justify-center mb-6">
      <Icon className="text-solar-blue w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-1">{name}</h3>
    <p className="text-solar-blue font-semibold text-sm mb-3 uppercase tracking-wider">{role}</p>
    {credential && (
      <p className="text-xs font-mono text-slate-500 mb-4 bg-slate-50 py-1 px-2 rounded inline-block">
        {credential}
      </p>
    )}
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-solar-orange p-2 rounded-lg">
                <Sun className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                System Solar <span className="text-solar-blue">& Engenharia</span>
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#inicio" className="text-sm font-medium text-slate-600 hover:text-solar-blue transition-colors">Início</a>
              <a href="#sobre" className="text-sm font-medium text-slate-600 hover:text-solar-blue transition-colors">Sobre</a>
              <a href="#equipe" className="text-sm font-medium text-slate-600 hover:text-solar-blue transition-colors">Corpo Técnico</a>
              <a href="#servicos" className="text-sm font-medium text-slate-600 hover:text-solar-blue transition-colors">Serviços</a>
              <a href="#contato" className="bg-solar-blue text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20">
                Falar com Especialista
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-solar-yellow/10 text-solar-orange text-xs font-bold uppercase tracking-widest mb-6">
                <Zap size={14} /> Energia Renovável & Engenharia
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
                Solidez e <span className="text-solar-blue">Excelência</span> em Energia Solar.
              </h1>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
                A System Solar e Engenharia assegura seu investimento com um corpo técnico qualificado e legalmente habilitado, garantindo rentabilidade e segurança do licenciamento à operação.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contato" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all flex items-center gap-2 group">
                  Solicitar Orçamento <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <div className="flex items-center gap-4 px-6 py-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                        <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <p className="font-bold text-slate-900">+500 Projetos</p>
                    <p className="text-slate-500">Aprovados na CEMIG</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1000" 
                  alt="Solar Panels" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <ShieldCheck className="text-green-600 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Garantia Técnica</p>
                    <p className="text-lg font-bold text-slate-900">100% Habilitado</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-solar-yellow/20 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold mb-1">100%</p>
              <p className="text-slate-400 text-sm">Legalmente Habilitado</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-1">CEMIG</p>
              <p className="text-slate-400 text-sm">Licenciamento Direto</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-1">ART</p>
              <p className="text-slate-400 text-sm">Emissão em todos projetos</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-1">ROI</p>
              <p className="text-slate-400 text-sm">Engenharia Financeira</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-white border-b border-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=1000" 
                alt="Sobre a System Solar" 
                className="rounded-3xl shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-sm font-bold text-solar-blue uppercase tracking-[0.2em] mb-4">Sobre a Empresa</h2>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Compromisso com a <span className="text-solar-blue">Sustentabilidade</span> e Eficiência</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                A System Solar e Engenharia nasceu da visão de transformar o cenário energético brasileiro através de soluções fotovoltaicas de alta performance. Nossa atuação é pautada pela excelência técnica e pelo rigor normativo.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Com sede em Minas Gerais, atendemos clientes que buscam não apenas economia, mas a segurança de um investimento estruturado por engenheiros e consultores especializados.
              </p>
              <div className="flex items-center gap-4">
                <div className="bg-solar-yellow/20 p-3 rounded-full">
                  <ShieldCheck className="text-solar-orange w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Licenciamento Garantido</p>
                  <p className="text-sm text-slate-500">Homologação total junto à CEMIG.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipe" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-solar-blue uppercase tracking-[0.2em] mb-4">Corpo Técnico e Consultivo</h2>
            <p className="text-4xl font-bold text-slate-900 mb-6">Equipe Especializada</p>
            <p className="text-lg text-slate-600">
              Contamos com profissionais experientes para garantir que cada etapa do seu projeto seja executada com perfeição técnica e viabilidade econômica.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TeamMember 
              name="Eng. José Vieira Mendes Junior"
              role="Engenheiro Eletricista"
              credential="CREA: 256019D MG"
              icon={Zap}
              description="Responsável pelo projeto técnico, licenciamento na CEMIG e emissão de ART. Garante a conformidade normativa de toda a infraestrutura."
            />
            <TeamMember 
              name="João Rodrigo Tavares"
              role="Gerente de Produção"
              icon={Wrench}
              description="Especialista responsável pela execução e validação da montagem mecânica e elétrica, assegurando a qualidade na ponta final."
            />
            <TeamMember 
              name="Marusan de Sousa Pinto"
              role="Consultor de Negócios"
              credential="CRECI 055252 MG"
              icon={LineChart}
              description="Estruturação da viabilidade econômica, engenharia financeira e arquitetura dos contratos de locação para máxima rentabilidade."
            />
          </div>
        </div>
      </section>

      {/* Services/Features */}
      <section id="servicos" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8 leading-tight">
                Por que escolher a <span className="text-solar-blue">System Solar e Engenharia</span>?
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Licenciamento CEMIG", desc: "Processo completo de homologação junto à concessionária." },
                  { title: "Segurança Jurídica", desc: "Emissão de ART e contratos estruturados por especialistas." },
                  { title: "Viabilidade Financeira", desc: "Projetos desenhados para o melhor retorno sobre investimento." },
                  { title: "Execução de Ponta", desc: "Montagem mecânica e elétrica validada por gerência técnica." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                      <CheckCircle2 className="text-green-600 w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900 rounded-3xl p-12 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">Solicite uma Consultoria</h3>
                <p className="text-slate-400 mb-8">Deixe seus dados e um de nossos especialistas entrará em contato para uma análise de viabilidade gratuita.</p>
                <form className="space-y-4">
                  <input type="text" placeholder="Seu Nome" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-solar-blue transition-colors" />
                  <input type="email" placeholder="Seu E-mail" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-solar-blue transition-colors" />
                  <button className="w-full bg-solar-blue hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-500/20">
                    Enviar Mensagem
                  </button>
                </form>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-solar-blue/20 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contato" className="bg-white border-t border-slate-100 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-solar-orange p-1.5 rounded-lg">
                  <Sun className="text-white w-5 h-5" />
                </div>
                <span className="text-lg font-bold tracking-tight text-slate-900">
                  System Solar <span className="text-solar-blue">& Engenharia</span>
                </span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Excelência técnica e consultiva em engenharia elétrica e energia fotovoltaica.
              </p>
              <div className="space-y-2">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Razão Social</p>
                <p className="text-sm font-medium text-slate-700">JV Mendes Junior Engenharia</p>
                <p className="text-xs text-slate-500">CNPJ: 61.950.902/0001-83</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6">Contato</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-600 hover:text-solar-blue transition-colors cursor-pointer">
                  <div className="flex items-center gap-2">
                    <MessageCircle size={18} className="text-green-500" />
                    <Phone size={18} className="text-solar-blue" />
                  </div>
                  <span className="text-sm font-medium">(33) 99903-2281</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600 hover:text-solar-blue transition-colors cursor-pointer">
                  <Mail size={18} className="text-solar-blue" />
                  <span className="text-sm font-medium">marusanspr@gmail.com</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <MapPin size={18} className="text-solar-blue mt-1" />
                  <span className="text-sm font-medium">Endereço completo com CEP</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6">Links Rápidos</h4>
              <ul className="space-y-3">
                <li><a href="#sobre" className="text-sm text-slate-600 hover:text-solar-blue transition-colors">Sobre Nós</a></li>
                <li><a href="#equipe" className="text-sm text-slate-600 hover:text-solar-blue transition-colors">Corpo Técnico</a></li>
                <li><a href="#servicos" className="text-sm text-slate-600 hover:text-solar-blue transition-colors">Serviços</a></li>
                <li><a href="#" className="text-sm text-slate-600 hover:text-solar-blue transition-colors">Simulador Solar</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6">Horário de Atendimento</h4>
              <p className="text-sm text-slate-600 mb-4">Segunda a Sexta: 08:00 às 18:00</p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-solar-blue hover:text-white transition-all cursor-pointer">
                  <Users size={18} />
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-solar-blue hover:text-white transition-all cursor-pointer">
                  <FileText size={18} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-100 text-center">
            <p className="text-xs text-slate-400">
              © {new Date().getFullYear()} System Solar e Engenharia. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
