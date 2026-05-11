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
        <div className="relative flex-shrink-0 w-28 h-28">
          {product.image_url ? (
            <img
              src={product.image_url}
              alt={name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-amber-50 to-stone-100 flex items-center justify-center">
              <ImageOff size={24} className="text-amber-200" />
            </div>
          )}

          {product.is_featured && (
            <div className="absolute top-1.5 left-1.5 bg-amber-500 rounded-full w-5 h-5 flex items-center justify-center shadow">
              <Star size={10} className="text-white fill-white" />
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
        <div className="flex-1 p-3 flex flex-col justify-between min-w-0">
          <div>
            <div className="flex items-start justify-between gap-1">
              <h3 className="font-semibold text-gray-900 text-[15px] leading-snug">{name}</h3>
              {product.is_featured && (
                <span className="flex-shrink-0 text-[10px] text-amber-600 font-semibold bg-amber-50 px-1.5 py-0.5 rounded-full border border-amber-200">
                  {t('featured')}
                </span>
              )}
            </div>
            {desc && (
              <p className="text-gray-400 text-xs mt-1 line-clamp-2 leading-relaxed">{desc}</p>
            )}
          </div>
          <div className="mt-2">
            <span className="text-amber-600 font-bold text-xl">
              {Number(product.price).toLocaleString('tr-TR')}
              <span className="text-sm font-medium ml-0.5">{product.currency || 'TL'}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
