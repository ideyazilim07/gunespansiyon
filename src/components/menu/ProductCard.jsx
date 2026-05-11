import { useLanguage } from '../../contexts/LanguageContext'
import { Star, ImageOff } from 'lucide-react'

export default function ProductCard({ product }) {
  const { t, getName, getDesc } = useLanguage()
  const name = getName(product)
  const desc = getDesc(product)

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="flex">
        {/* Görsel */}
        <div className="relative flex-shrink-0 w-40 h-40">
          {product.image_url ? (
            <img
              src={product.image_url}
              alt={name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-amber-50 to-stone-100 flex items-center justify-center">
              <ImageOff size={32} className="text-amber-200" />
            </div>
          )}

          {product.is_featured && (
            <div className="absolute top-2 left-2 bg-amber-500 rounded-full w-6 h-6 flex items-center justify-center shadow">
              <Star size={12} className="text-white fill-white" />
            </div>
          )}

          {!product.is_active && (
            <div className="absolute inset-0 bg-gray-900/55 flex items-center justify-center">
              <span className="text-white text-[10px] font-bold bg-gray-800/80 px-2 py-0.5 rounded-full">
                {t('outOfStock')}
              </span>
            </div>
          )}
        </div>

        {/* İçerik */}
        <div className="flex-1 p-4 flex flex-col justify-between min-w-0">
          <div>
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-gray-900 text-base leading-snug">{name}</h3>
              {product.is_featured && (
                <span className="flex-shrink-0 text-[10px] text-amber-600 font-semibold bg-amber-50 px-1.5 py-0.5 rounded-full border border-amber-200">
                  {t('featured')}
                </span>
              )}
            </div>
            {desc && (
              <p className="text-gray-400 text-xs mt-1.5 line-clamp-3 leading-relaxed">{desc}</p>
            )}
          </div>
          <div className="mt-3">
            <span className="text-amber-600 font-bold text-2xl">
              {Number(product.price).toLocaleString('tr-TR')}
              <span className="text-sm font-medium ml-1">{product.currency || 'TL'}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
