import React, { useState } from 'react';
import { VIDEO_RESOURCES, OFFICIAL_LINKS } from '../data/courseData';
import { ExternalLink, Play, Shield, Info, Youtube, Tv, ListVideo } from 'lucide-react';

export const ResourcesSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'embed' | 'cards'>('embed');

  return (
    <div className="space-y-8">
      {/* Videos Curados */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <Play className="w-5 h-5 text-teal-700" />
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Píldoras Audiovisuales Didácticas
            </h3>
          </div>

          {/* Mode toggle */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200 self-start sm:self-auto text-xs">
            <button
              type="button"
              onClick={() => setViewMode('embed')}
              className={`px-2.5 py-1 rounded-lg font-bold flex items-center gap-1.5 transition-all ${
                viewMode === 'embed'
                  ? 'bg-white text-teal-800 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Tv className="w-3.5 h-3.5" />
              <span>Reproductor</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('cards')}
              className={`px-2.5 py-1 rounded-lg font-bold flex items-center gap-1.5 transition-all ${
                viewMode === 'cards'
                  ? 'bg-white text-teal-800 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ListVideo className="w-3.5 h-3.5" />
              <span>Fichas directas</span>
            </button>
          </div>
        </div>

        {/* Pedagogical info banner about browser/network permissions */}
        <div className="mb-4 p-3.5 rounded-xl bg-teal-50/70 border border-teal-200/80 text-xs text-teal-950 flex items-start gap-2.5 leading-relaxed">
          <Info className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">Aviso sobre permisos de reproducción: </span>
            En visores de desarrollo, redes educativas o navegadores con bloqueo estricto de rastreo, YouTube puede limitar la reproducción integrada. Si algún vídeo muestra pantalla gris o aviso de restricción, utiliza el botón <strong className="text-teal-900 font-bold">"Ver en YouTube"</strong> de cada ficha para abrirlo inmediatamente en pantalla completa.
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {VIDEO_RESOURCES.map((vid) => {
            const watchUrl = vid.directUrl || (vid.youtubeId ? `https://www.youtube.com/watch?v=${vid.youtubeId}` : `https://www.youtube.com/results?search_query=${encodeURIComponent(vid.title)}`);

            return (
              <div
                key={vid.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  {viewMode === 'embed' ? (
                    <div className="relative aspect-video bg-slate-900">
                      <iframe
                        loading="lazy"
                        title={vid.title}
                        src={`https://www.youtube.com/embed/${vid.youtubeId || ''}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        referrerPolicy="strict-origin-when-cross-origin"
                        className="w-full h-full border-0"
                      />
                    </div>
                  ) : (
                    <div className="relative aspect-video bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950 flex flex-col items-center justify-center p-4 text-center">
                      <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-md mb-2">
                        <Play className="w-6 h-6 ml-0.5 fill-current" />
                      </div>
                      <span className="text-[11px] font-semibold text-slate-300">
                        {vid.source || 'Recurso oficial PRL'}
                      </span>
                    </div>
                  )}

                  <div className="p-4">
                    <div className="flex items-center justify-between text-[11px] text-teal-800 font-bold mb-1.5">
                      <span className="px-2 py-0.5 rounded bg-teal-50 border border-teal-200/60">
                        {vid.source || 'Píldora PRL'}
                      </span>
                      <span className="text-slate-500 font-medium">{vid.duration}</span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 leading-snug mb-1.5">
                      {vid.title}
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {vid.desc}
                    </p>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="p-4 pt-0 mt-auto border-t border-slate-100 flex items-center gap-2">
                  <a
                    href={watchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <Youtube className="w-3.5 h-3.5" />
                    <span>Ver vídeo en YouTube</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </a>

                  <a
                    href={`https://www.youtube.com/results?search_query=${encodeURIComponent(
                      'PRL ' + vid.title
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Buscar más vídeos formativos sobre esta temática"
                    className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs font-semibold transition-colors flex items-center justify-center"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Enlaces Oficiales y Organismos Institucionales */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Shield className="w-4 h-4 text-teal-700" />
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            Sedes Oficiales y Fuentes Normativas
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 mb-4">
          Accede directamente a la documentación legal y guías técnicas vigentes del marco español y europeo.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {OFFICIAL_LINKS.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-teal-300 hover:bg-slate-50/70 transition-all shadow-2xs hover:shadow-xs group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200/60">
                    {link.badge}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-700 transition-colors" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                  {link.title}
                </h4>
                <span className="text-xs font-semibold text-slate-500 block mb-1">
                  {link.entity}
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {link.desc}
                </p>
              </div>

              <div className="pt-2.5 mt-2 border-t border-slate-100 flex items-center gap-1 text-xs font-bold text-teal-700">
                <span>Acceder a la sede oficial</span>
                <ExternalLink className="w-3 h-3" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
